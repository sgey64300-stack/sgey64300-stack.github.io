/* =========================================================
   DEXTER — TRIBUTE ARCHIVE
   Render + interaction layer
   ========================================================= */

(() => {
    "use strict";

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const data = window.DexterData;
    const portraits = window.DexterPortraits;
    const scenes = window.DexterScenes;

    if (!data || !portraits || !scenes) {
        console.warn("Dexter archive: content modules are missing.");
        return;
    }

    const { characters, seasons, quotes, world } = data;
    const byId = (id) => characters.find((item) => item.id === id);

    /* =========================================================
       RENDER
       ========================================================= */

    function portraitFallback(character) {
        if (character.secondaryArt) {
            return portraits.dual(character.id, character.art, character.secondaryArt);
        }
        return portraits.create(character.id, character.art);
    }

    function portraitFor(character, options = {}) {
        if (character.photo) {
            const alt = `${character.photo.actor} — фото актёра`;
            return `<img class="character-photo" src="${character.photo.file}" alt="${alt}" data-photo="${character.id}" loading="${options.eager ? "eager" : "lazy"}" decoding="async">`;
        }
        return portraitFallback(character);
    }

    function portraitLabel(character) {
        return character.photo ? "фото · Wikimedia Commons" : "стилизованная иллюстрация";
    }

    function creditMarkup(character) {
        if (!character.photo) return "";
        const photo = character.photo;
        return `Фото: <a href="${photo.source}" target="_blank" rel="noopener noreferrer">${photo.credit}</a> · <a href="${photo.licenseUrl}" target="_blank" rel="noopener noreferrer">${photo.license}</a> · <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>`;
    }

    function characterCard(character, index) {
        const featured = character.featured ? " is-featured" : "";
        const groups = character.groups.join(" ");
        const tags = character.tags.map((tag) => `<span>${tag}</span>`).join("");
        const number = String(index + 1).padStart(2, "0");

        return `<article class="character-card reveal${featured}" data-id="${character.id}" data-groups="${groups}" tabindex="0" role="button" aria-label="Открыть досье: ${character.name}">
            <div class="character-portrait">
                <span class="character-index">${number}</span>
                <span class="portrait-label">${portraitLabel(character)}</span>
                ${portraitFor(character)}
            </div>
            <div class="character-body">
                <p class="character-role">${character.role}</p>
                <h3 class="character-name">${character.name}</h3>
                <p class="character-desc">${character.desc}</p>
                <div class="character-traits">${tags}</div>
                <blockquote class="character-philosophy">${character.philosophy}</blockquote>
                <span class="character-open"><span>открыть досье</span><span aria-hidden="true">→</span></span>
            </div>
        </article>`;
    }

    function renderCharacters() {
        const grid = $("#characterGrid");
        if (!grid) return;
        grid.innerHTML = characters.map(characterCard).join("");

        grid.addEventListener("click", (event) => {
            const card = event.target.closest(".character-card");
            if (card) openCharacter(card.dataset.id);
        });

        grid.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            const card = event.target.closest(".character-card");
            if (!card) return;
            event.preventDefault();
            openCharacter(card.dataset.id);
        });
    }

    function seasonCard(season) {
        const special = season.special ? " season-card--special" : "";
        return `<details class="season-card reveal${special}" data-era="${season.era}">
            <summary>
                <span class="season-num">${season.number}</span>
                <span class="season-summary-main">
                    <span class="season-kicker"><span>${season.eraLabel}</span><span>${season.year}</span><span>${season.episodes}</span></span>
                    <span class="season-title">${season.title}</span>
                </span>
                <span class="season-toggle" aria-hidden="true"></span>
            </summary>
            <div class="season-body">
                <p class="season-desc">${season.desc}</p>
                <div class="season-facts">
                    <div class="season-fact"><span>Антагонист</span><p>${season.antagonist}</p></div>
                    <div class="season-fact"><span>Настроение</span><p>${season.mood}</p></div>
                    <div class="season-fact"><span>Эволюция</span><p>${season.evolution}</p></div>
                </div>
            </div>
        </details>`;
    }

    function renderSeasons() {
        const list = $("#seasonList");
        if (!list) return;
        list.innerHTML = seasons.map(seasonCard).join("");
    }

    function quoteCard(quote) {
        return `<article class="quote-card reveal">
            <blockquote><p>${quote.text}</p></blockquote>
            <footer><span>${quote.author}</span><span>${quote.context}</span></footer>
        </article>`;
    }

    function renderQuotes() {
        const grid = $("#quoteGrid");
        if (!grid) return;
        grid.innerHTML = quotes.map(quoteCard).join("");
    }

    function renderWorld() {
        const gallery = $("#worldGallery");
        if (!gallery) return;

        gallery.innerHTML = world.map((item) => {
            const scene = scenes[item.scene] ? scenes[item.scene]() : "";
            return `<article class="world-item reveal" data-world="${item.id}" tabindex="0" role="button" aria-label="Открыть концепт-арт: ${item.title}">
                <span class="world-tag">${item.caption}</span>
                <div class="world-art">${scene}</div>
                <div class="world-caption">
                    <div class="world-caption-main">
                        <span class="world-kicker">${item.kicker}</span>
                        <span class="world-title">${item.title}</span>
                        <span class="world-desc">${item.desc}</span>
                    </div>
                    <span class="world-expand" aria-hidden="true">+</span>
                </div>
            </article>`;
        }).join("");

        gallery.addEventListener("click", (event) => {
            const item = event.target.closest(".world-item");
            if (item) openArt(item.dataset.world);
        });

        gallery.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            const item = event.target.closest(".world-item");
            if (!item) return;
            event.preventDefault();
            openArt(item.dataset.world);
        });
    }

    function renderEditorialPortrait() {
        const target = $('[data-portrait="dexter-large"]');
        const dexter = byId("dexter");
        if (target && dexter) {
            target.innerHTML = portraitFor(dexter, { eager: true });
            target.classList.toggle("has-photo", Boolean(dexter.photo));
            const note = $(".editorial-figure .fig-note");
            if (note) note.textContent = portraitLabel(dexter);
        }
    }

    function renderPhotoCredits() {
        const list = $("#photoCredits");
        if (!list) return;

        const withPhoto = characters.filter((character) => character.photo);
        list.innerHTML = withPhoto.map((character) => {
            const photo = character.photo;
            return `<li>
                <span class="credit-name">${character.name} <em>(${photo.actor})</em></span>
                <span class="credit-meta"><a href="${photo.source}" target="_blank" rel="noopener noreferrer">${photo.credit}</a> · <a href="${photo.licenseUrl}" target="_blank" rel="noopener noreferrer">${photo.license}</a></span>
            </li>`;
        }).join("");
    }

    /* =========================================================
       CHARACTER DOSSIER DIALOG
       ========================================================= */

    const characterDialog = $("#characterDialog");
    let lastCharacterFocus = null;

    function openCharacter(id) {
        const character = byId(id);
        if (!character || !characterDialog) return;

        lastCharacterFocus = document.activeElement;

        $("#dialogArt").innerHTML = portraitFor(character, { eager: true });
        $("#dialogKicker").textContent = character.groups.includes("antagonist") ? "досье · антагонист" : "досье · персонаж";
        $("#dialogName").textContent = character.name;
        $("#dialogRole").textContent = character.role;
        $("#dialogTags").innerHTML = character.tags.map((tag) => `<span>${tag}</span>`).join("");
        $("#dialogWho").textContent = character.who;
        $("#dialogCharacter").textContent = character.character;
        $("#dialogRelationship").textContent = character.relationship;
        $("#dialogPsych").textContent = character.psych;
        $("#dialogPhilosophy").textContent = character.philosophy;
        $("#dialogCredit").innerHTML = creditMarkup(character);
        const note = $("#dialogNote");
        if (note) {
            note.textContent = character.photo
                ? "Фото актёра · оригинальный текст проекта"
                : "Стилизованная иллюстрация · оригинальный текст проекта";
        }

        if (typeof characterDialog.showModal === "function") {
            if (!characterDialog.open) characterDialog.showModal();
        } else {
            characterDialog.setAttribute("open", "");
        }
        document.body.classList.add("is-locked");

        const closeButton = $("[data-close-dialog]", characterDialog);
        if (closeButton) closeButton.focus();
    }

    function closeCharacter() {
        if (!characterDialog) return;
        if (typeof characterDialog.close === "function") characterDialog.close();
        else characterDialog.removeAttribute("open");
        if (!artDialog || !artDialog.open) document.body.classList.remove("is-locked");
    }

    /* =========================================================
       ART LIGHTBOX
       ========================================================= */

    const artDialog = $("#artDialog");
    let lastArtFocus = null;

    function openArt(id) {
        const item = world.find((entry) => entry.id === id);
        if (!item || !artDialog) return;

        lastArtFocus = document.activeElement;

        $("#artDialogVisual").innerHTML = scenes[item.scene] ? scenes[item.scene]() : "";
        $("#artDialogTitle").textContent = item.title;
        $("#artDialogText").textContent = `${item.kicker} · ${item.caption}. ${item.desc}`;

        if (typeof artDialog.showModal === "function") {
            if (!artDialog.open) artDialog.showModal();
        } else {
            artDialog.setAttribute("open", "");
        }
        document.body.classList.add("is-locked");

        const closeButton = $("[data-close-art]", artDialog);
        if (closeButton) closeButton.focus();
    }

    function closeArt() {
        if (!artDialog) return;
        if (typeof artDialog.close === "function") artDialog.close();
        else artDialog.removeAttribute("open");
        if (!characterDialog || !characterDialog.open) document.body.classList.remove("is-locked");
    }

    function wireDialogs() {
        if (characterDialog) {
            $$("[data-close-dialog]", characterDialog).forEach((button) => {
                button.addEventListener("click", closeCharacter);
            });
            characterDialog.addEventListener("click", (event) => {
                if (event.target === characterDialog) closeCharacter();
            });
            characterDialog.addEventListener("cancel", () => {
                if (!artDialog || !artDialog.open) document.body.classList.remove("is-locked");
            });
            characterDialog.addEventListener("close", () => {
                if (!artDialog || !artDialog.open) document.body.classList.remove("is-locked");
                if (lastCharacterFocus) {
                    lastCharacterFocus.focus();
                    lastCharacterFocus = null;
                }
            });
        }

        if (artDialog) {
            $$("[data-close-art]", artDialog).forEach((button) => {
                button.addEventListener("click", closeArt);
            });
            artDialog.addEventListener("click", (event) => {
                if (event.target === artDialog) closeArt();
            });
            artDialog.addEventListener("cancel", () => {
                if (!characterDialog || !characterDialog.open) document.body.classList.remove("is-locked");
            });
            artDialog.addEventListener("close", () => {
                if (!characterDialog || !characterDialog.open) document.body.classList.remove("is-locked");
                if (lastArtFocus) {
                    lastArtFocus.focus();
                    lastArtFocus = null;
                }
            });
        }
    }

    /* =========================================================
       FILTERS
       ========================================================= */

    function wireCharacterFilters() {
        const buttons = $$(".character-filters .chip");
        const cards = $$(".character-card");
        const count = $("#characterCount");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                buttons.forEach((item) => item.classList.remove("is-active"));
                button.classList.add("is-active");

                const filter = button.dataset.filter;
                let visible = 0;

                cards.forEach((card) => {
                    const show = filter === "all" || card.dataset.groups.split(" ").includes(filter);
                    card.classList.toggle("is-hidden", !show);
                    if (show) visible += 1;
                });

                if (count) count.textContent = String(visible);
            });
        });
    }

    function wireSeasonFilters() {
        const buttons = $$(".season-filters .chip");
        const cards = $$(".season-card");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                buttons.forEach((item) => item.classList.remove("is-active"));
                button.classList.add("is-active");

                const era = button.dataset.era;
                cards.forEach((card) => {
                    card.hidden = era !== "all" && card.dataset.era !== era;
                });
            });
        });
    }

    /* =========================================================
       NAVIGATION
       ========================================================= */

    function wireNavigation() {
        const header = $("#siteHeader");
        const nav = $("#mainNav");
        const toggle = $("#menuToggle");
        const progress = $("#scrollProgress");
        const backToTop = $("#backToTop");

        const closeMenu = () => {
            if (!nav || !toggle) return;
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Открыть меню");
        };

        if (toggle && nav) {
            toggle.addEventListener("click", () => {
                const open = nav.classList.toggle("is-open");
                toggle.setAttribute("aria-expanded", String(open));
                toggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
            });

            $$("a", nav).forEach((link) => link.addEventListener("click", closeMenu));

            document.addEventListener("click", (event) => {
                if (!nav.classList.contains("is-open")) return;
                if (nav.contains(event.target) || toggle.contains(event.target)) return;
                closeMenu();
            });

            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape") closeMenu();
            });

            window.addEventListener("resize", () => {
                if (window.innerWidth > 900) closeMenu();
            });
        }

        const sections = ["morgan", "psychology", "seasons", "characters", "quotes", "world", "style"]
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        const navLinks = $$(".main-nav a");
        let ticking = false;

        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

            if (progress) progress.style.width = `${ratio * 100}%`;
            if (header) header.classList.toggle("is-scrolled", scrollTop > 24);

            const line = (header ? header.offsetHeight : 80) + 80;
            let current = "";
            sections.forEach((section) => {
                if (section.offsetTop <= scrollTop + line) current = section.id;
            });

            navLinks.forEach((link) => {
                link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`);
            });

            if (!reducedMotion) {
                const hero = $("#top");
                const skyline = $(".hero-skyline");
                const title = $(".hero-title");
                if (hero && scrollTop < window.innerHeight * 1.2) {
                    if (skyline) skyline.style.transform = `scale(1.04) translate3d(0, ${scrollTop * 0.06}px, 0)`;
                    if (title) title.style.transform = `translate3d(0, ${scrollTop * 0.045}px, 0)`;
                }
            }

            ticking = false;
        };

        const requestUpdate = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(update);
        };

        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);
        update();

        if (backToTop) {
            backToTop.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
            });
        }

        $$('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", (event) => {
                const href = anchor.getAttribute("href");
                if (!href || href === "#") return;
                const target = document.querySelector(href);
                if (!target) return;

                event.preventDefault();
                const offset = header ? header.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - offset + 2;
                window.scrollTo({ top, behavior: reducedMotion ? "auto" : "smooth" });
            });
        });
    }

    /* =========================================================
       ATMOSPHERE
       ========================================================= */

    function makeRain() {
        const rain = $("#heroRain");
        if (!rain || reducedMotion) return;

        const total = window.innerWidth < 700 ? 32 : 58;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < total; i += 1) {
            const drop = document.createElement("span");
            drop.className = "rain-drop";
            drop.style.left = `${Math.random() * 118 - 6}%`;
            drop.style.setProperty("--drop-h", `${48 + Math.random() * 92}px`);
            drop.style.setProperty("--drop-d", `${1.25 + Math.random() * 1.4}s`);
            drop.style.setProperty("--drop-delay", `${Math.random() * 2.2}s`);
            drop.style.setProperty("--drop-op", `${0.16 + Math.random() * 0.34}`);
            fragment.appendChild(drop);
        }

        rain.appendChild(fragment);
    }

    function wirePhotoFallback() {
        document.addEventListener("error", (event) => {
            const image = event.target;
            if (!(image instanceof HTMLImageElement) || !image.matches("[data-photo]")) return;

            const character = byId(image.dataset.photo);
            if (!character) return;

            const portraitBox = image.closest(".character-portrait");
            const editorial = image.closest(".editorial-figure");
            const label = portraitBox ? $(".portrait-label", portraitBox) : $(".fig-note", editorial || document);

            const fallback = document.createElement("div");
            fallback.className = "photo-fallback";
            fallback.innerHTML = portraitFallback(character);

            image.replaceWith(fallback);
            if (label) label.textContent = "стилизованная иллюстрация";
        }, true);
    }

    function revealAll() {
        const items = $$(".reveal");
        if (!("IntersectionObserver" in window)) {
            items.forEach((item) => item.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

        items.forEach((item) => observer.observe(item));
    }

    /* =========================================================
       BOOT
       ========================================================= */

    function boot() {
        renderEditorialPortrait();
        renderCharacters();
        renderSeasons();
        renderQuotes();
        renderWorld();
        renderPhotoCredits();
        wireDialogs();
        wirePhotoFallback();
        wireCharacterFilters();
        wireSeasonFilters();
        wireNavigation();
        makeRain();
        revealAll();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot, { once: true });
    } else {
        boot();
    }
})();
