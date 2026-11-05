/* =========================================================
   DEXTER — TRIBUTE ARCHIVE
   Procedural noir portraits
   Stylised editorial illustrations. No real likenesses.
   ========================================================= */

(() => {
    "use strict";

    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    function hexToRgb(hex) {
        const clean = hex.replace("#", "");
        const full = clean.length === 3
            ? clean.split("").map((char) => char + char).join("")
            : clean;
        return {
            r: parseInt(full.slice(0, 2), 16),
            g: parseInt(full.slice(2, 4), 16),
            b: parseInt(full.slice(4, 6), 16)
        };
    }

    function rgbToHex(r, g, b) {
        return "#" + [r, g, b]
            .map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0"))
            .join("");
    }

    function lighten(hex, amount) {
        const { r, g, b } = hexToRgb(hex);
        return rgbToHex(r + amount, g + amount, b + amount);
    }

    function darken(hex, amount) {
        const { r, g, b } = hexToRgb(hex);
        return rgbToHex(r - amount, g - amount, b - amount);
    }

    function safeId(value) {
        return String(value).replace(/[^a-zA-Z0-9_-]/g, "-");
    }

    function hairBack(style, hair) {
        switch (style) {
            case "long":
                return `<path d="M126 168C118 86 154 42 202 42s84 44 76 126l12 172c-18 32-42 50-68 58h-44c-26-8-50-26-68-58Z" fill="${hair}"/>`;
            case "bob":
                return `<path d="M128 168c-6-76 30-120 74-120s76 44 70 120l8 132c-16 30-40 44-78 44s-62-14-78-44Z" fill="${hair}"/>`;
            case "ponytail":
                return `<path d="M266 166c46 20 58 84 42 158-10 44-28 70-52 82 20-40 24-82 18-120Z" fill="${hair}"/>`;
            case "wavy":
                return `<path d="M126 170c-8-80 28-126 76-126s84 46 76 126l16 156c-14 34-38 54-66 62h-52c-28-8-52-28-66-62Z" fill="${hair}"/>`;
            default:
                return "";
        }
    }

    function hairFront(style, hair) {
        switch (style) {
            case "short":
                return `<path d="M128 176c-6-72 26-124 74-124s78 48 72 124c-14-40-38-60-72-62-36-2-62 20-74 62Z" fill="${hair}"/>
                    <path d="M150 146c20-34 52-48 90-38" fill="none" stroke="${lighten(hair, 16)}" stroke-width="2" opacity=".45"/>`;
            case "slick":
                return `<path d="M126 174c-2-72 32-126 78-126s76 50 70 126c-8-32-24-54-52-66-26-10-56 4-76 38Z" fill="${hair}"/>
                    <path d="M146 142c20-30 50-42 84-36" fill="none" stroke="${lighten(hair, 20)}" stroke-width="2" opacity=".4"/>`;
            case "older":
                return `<path d="M130 168c-2-56 28-98 72-98s70 40 68 96c-16-34-38-48-70-48s-54 16-70 50Z" fill="${hair}"/>
                    <path d="M158 120c22-18 58-18 82 0" fill="none" stroke="${lighten(hair, 18)}" stroke-width="2" opacity=".35"/>`;
            case "bald":
                return `<path d="M138 146c14-36 42-54 66-54 26 0 50 18 64 50" fill="none" stroke="${hair}" stroke-width="7" opacity=".16"/>`;
            case "curly":
                return `<g fill="${hair}">
                    <circle cx="150" cy="108" r="24"/><circle cx="178" cy="82" r="27"/><circle cx="210" cy="76" r="29"/><circle cx="242" cy="88" r="27"/><circle cx="264" cy="114" r="23"/><circle cx="136" cy="140" r="19"/><circle cx="270" cy="146" r="18"/>
                    </g>`;
            case "spiky":
                return `<path d="M128 174 142 96l18 24 12-46 18 38 18-46 14 42 22-28 6 38 20-18 4 74c-16-36-38-54-72-56-36 2-62 22-74 56Z" fill="${hair}"/>`;
            case "shaggy":
            case "teen":
                return `<path d="M126 180c-8-70 24-128 76-130s84 58 74 130c-8-30-18-48-34-58l-4 24-14-26-10 22-12-26-12 24-16-26-10 26-16-20c-8 14-16 32-22 60Z" fill="${hair}"/>`;
            case "long":
                return `<path d="M132 176c-4-64 28-118 70-118s76 54 70 118c-14-34-36-54-70-56-36 2-58 22-70 56Z" fill="${hair}"/>
                    <path d="M142 196c-4 54 4 96 18 128M262 196c4 54-4 96-18 128" fill="none" stroke="${hair}" stroke-width="12" stroke-linecap="round"/>`;
            case "wavy":
                return `<path d="M130 178c-4-66 28-120 72-120s76 54 70 120c-16-34-38-54-70-56-36 2-58 22-72 56Z" fill="${hair}"/>
                    <path d="M140 188c-10 36-4 70 10 98M260 188c10 36 4 70-10 98" fill="none" stroke="${hair}" stroke-width="10" stroke-linecap="round"/>`;
            case "bob":
                return `<path d="M130 176c-2-64 28-116 70-116s72 52 70 116c-16-34-38-54-70-56-34 2-56 22-70 56Z" fill="${hair}"/>`;
            case "ponytail":
                return `<path d="M130 176c-2-66 28-120 70-120s72 54 70 120c-14-36-36-56-70-58-34 2-56 22-70 58Z" fill="${hair}"/>`;
            default:
                return `<path d="M128 176c-6-72 26-124 74-124s78 48 72 124c-14-40-38-60-72-62-36-2-62 20-74 62Z" fill="${hair}"/>`;
        }
    }

    function outfitDetails(outfit, clothes, light) {
        const collar = `<path d="M158 362 200 414 242 362 254 378 200 446 146 378Z" fill="${light}" opacity=".8"/>`;

        switch (outfit) {
            case "police":
                return `${collar}
                    <path d="M120 428h30v42h-30z" fill="${light}" opacity=".15"/>
                    <path d="M142 416c7 0 12 5 12 11v13l-12 9-12-9v-13c0-6 5-11 12-11Z" fill="#b69255" opacity=".8"/>
                    <path d="M142 421v18M136 428h12" stroke="#3b2c16" stroke-width="1" opacity=".8"/>
                    <path d="M278 432h34M278 440h28" stroke="${light}" stroke-width="1" opacity=".25"/>`;
            case "lab":
                return `<path d="M142 360 200 438 258 360 282 384 262 500H138L118 384Z" fill="${light}" opacity=".9"/>
                    <path d="M142 360 200 438 258 360" fill="none" stroke="${darken(light, 30)}" stroke-width="1.2" opacity=".45"/>
                    <path d="M172 438h56v62h-56z" fill="${darken(light, 8)}" opacity=".45"/>
                    <path d="M274 404h4v42h-4z" fill="#c41e3a" opacity=".75"/>
                    <path d="M150 452h22M150 460h16" stroke="${darken(light, 50)}" stroke-width="1" opacity=".35"/>`;
            case "blazer":
                return `<path d="M146 360 200 444 254 360 282 388 266 500H134L118 388Z" fill="${darken(clothes, 10)}" stroke="${light}" stroke-opacity=".25"/>
                    <path d="M166 362 200 438 234 362 242 374 200 462 158 374Z" fill="#d9d5cc" opacity=".82"/>
                    <path d="M194 394h12l9 70-15 22-15-22Z" fill="#8b0000" opacity=".85"/>
                    <path d="M174 472h52" stroke="${light}" stroke-width="1" opacity=".25"/>`;
            case "hoodie":
                return `<path d="M146 358c10-28 30-42 54-42s44 14 54 42l-24 20-30-16-30 16Z" fill="${light}" opacity=".5"/>
                    <path d="M178 378v56M222 378v56" stroke="${light}" stroke-width="2" opacity=".45"/>
                    <circle cx="178" cy="438" r="3" fill="${light}" opacity=".5"/><circle cx="222" cy="438" r="3" fill="${light}" opacity=".5"/>
                    <path d="M160 456h80" stroke="${light}" stroke-width="1" opacity=".18"/>`;
            case "cardigan":
                return `<path d="M154 362 200 440 246 362 262 382 250 500H150L138 382Z" fill="${light}" opacity=".35"/>
                    <path d="M200 410v90M190 436h20M190 462h20M190 488h20" stroke="${darken(clothes, 25)}" stroke-width="1" opacity=".45"/>
                    <path d="M156 362 200 440 244 362" fill="none" stroke="${light}" stroke-width="1.2" opacity=".4"/>`;
            case "dress":
                return `<path d="M152 362c14 28 30 42 48 42s34-14 48-42l12 22-10 116H150l-10-116Z" fill="${light}" opacity=".28"/>
                    <path d="M174 372c8 18 16 28 26 28s18-10 26-28" fill="none" stroke="${light}" stroke-width="1.2" opacity=".55"/>
                    <path d="M200 406v12" stroke="#c8a86a" stroke-width="1.5"/><circle cx="200" cy="424" r="4" fill="#c8a86a" opacity=".8"/>`;
            case "robe":
                return `<path d="M150 360 200 438 250 360 274 386 260 500H140L126 386Z" fill="${darken(clothes, 12)}"/>
                    <path d="M150 360 200 438 250 360" fill="none" stroke="${light}" stroke-width="1.3" opacity=".35"/>
                    <path d="M200 438v62" stroke="${light}" stroke-width="1" opacity=".2"/>`;
            case "henley":
                return `${collar}
                    <path d="M188 424h24v76h-24z" fill="${darken(clothes, 18)}" opacity=".8"/>
                    <circle cx="200" cy="442" r="2.5" fill="${light}" opacity=".6"/><circle cx="200" cy="462" r="2.5" fill="${light}" opacity=".6"/><circle cx="200" cy="482" r="2.5" fill="${light}" opacity=".6"/>`;
            default:
                return collar;
        }
    }

    function beardDetails(beard, hair, uid, facePath) {
        if (beard === "stubble") {
            return `<g clip-path="url(#${uid}-faceclip)"><rect x="120" y="245" width="160" height="110" fill="url(#${uid}-stubble)" opacity=".7"/></g>`;
        }
        if (beard === "goatee") {
            return `<path d="M180 294c8 2 32 2 40 0-2 22-10 34-20 34s-18-12-20-34Z" fill="${hair}" opacity=".7"/>
                <path d="M180 282c12-4 28-4 40 0" stroke="${hair}" stroke-width="4" stroke-linecap="round" opacity=".7"/>`;
        }
        if (beard === "full") {
            return `<path d="M142 238c4 66 26 108 58 116 32-8 54-50 58-116-8 34-22 54-34 62-8-14-16-20-24-20s-16 6-24 20c-12-8-26-28-34-62Z" fill="${hair}" opacity=".78"/>
                <path d="M178 294c8 4 36 4 44 0-2 16-10 26-22 26s-20-10-22-26Z" fill="${darken(hair, 10)}" opacity=".9"/>`;
        }
        if (beard === "mustache") {
            return `<path d="M176 282c10-6 38-6 48 0-8 10-18 12-24 8-6 4-16 2-24-8Z" fill="${hair}" opacity=".7"/>`;
        }
        return "";
    }

    function mouthDetails(expression, female, lips) {
        const y = 298;
        if (female) {
            return `<path d="M180 ${y}c12-5 28-5 40 0-6 13-14 20-20 20s-14-7-20-20Z" fill="${lips}"/>
                <path d="M180 ${y}c12 4 28 4 40 0" fill="none" stroke="${darken(lips, 18)}" stroke-width="1.2" opacity=".8"/>`;
        }
        if (expression === "smirk") {
            return `<path d="M180 ${y}c14 6 30 4 41-8" fill="none" stroke="#2a1716" stroke-width="3" stroke-linecap="round"/>
                <path d="M188 ${y + 9}c8 3 18 2 25-2" fill="none" stroke="#4a2b28" stroke-width="1.2" opacity=".5"/>`;
        }
        if (expression === "soft") {
            return `<path d="M181 ${y}c12 7 26 7 38 0" fill="none" stroke="#2a1716" stroke-width="3" stroke-linecap="round"/>
                <path d="M190 ${y + 9}c7 3 15 3 21 0" fill="none" stroke="#4a2b28" stroke-width="1.2" opacity=".45"/>`;
        }
        if (expression === "sad") {
            return `<path d="M181 ${y + 3}c12-7 26-7 38 0" fill="none" stroke="#2a1716" stroke-width="3" stroke-linecap="round"/>`;
        }
        return `<path d="M181 ${y + 1}c12-4 26-4 38 0" fill="none" stroke="#2a1716" stroke-width="3" stroke-linecap="round"/>
            <path d="M190 ${y + 9}c7 2 14 2 20 0" fill="none" stroke="#4a2b28" stroke-width="1.2" opacity=".45"/>`;
    }

    function create(id, options = {}) {
        const o = Object.assign({
            gender: "m",
            skin: "#a57f68",
            skinShade: "",
            hair: "#171311",
            hairStyle: "short",
            clothes: "#15191d",
            accent: "#c41e3a",
            bg1: "#1b2c39",
            bg2: "#07090b",
            eye: "#7d969c",
            outfit: "shirt",
            glasses: false,
            beard: "none",
            earrings: false,
            expression: "neutral",
            lips: "#6b3c3b",
            alt: "стилизованный портрет персонажа"
        }, options);

        const uid = "pt-" + safeId(id);
        const female = o.gender === "f";
        const skinShade = o.skinShade || darken(o.skin, 38);
        const skinLight = lighten(o.skin, 18);
        const clothesLight = lighten(o.clothes, 26);
        const brow = darken(o.hair, 8);
        const facePath = female
            ? "M138 160c0-62 28-96 62-96s62 34 62 96v70c0 54-24 92-62 102-38-10-62-48-62-102Z"
            : "M126 160c0-68 34-102 74-102s74 34 74 102v76c0 58-28 98-74 108-46-10-74-50-74-108Z";

        const eyeY = 222;
        const eyeLX = female ? 173 : 170;
        const eyeRX = female ? 227 : 230;
        const eyeW = female ? 16 : 15;
        const eyeH = female ? 6.5 : 5.5;
        const irisR = female ? 4.8 : 4.4;

        const hairBackMarkup = hairBack(o.hairStyle, o.hair);
        const hairFrontMarkup = hairFront(o.hairStyle, o.hair);
        const outfitMarkup = outfitDetails(o.outfit, o.clothes, clothesLight);
        const beardMarkup = beardDetails(o.beard, o.hair, uid, facePath);
        const mouthMarkup = mouthDetails(o.expression, female, o.lips);

        const glassesMarkup = o.glasses
            ? `<g fill="none" stroke="#cfc9bd" stroke-width="1.2" opacity=".72">
                    <rect x="${eyeLX - 24}" y="${eyeY - 12}" width="42" height="27" rx="5"/>
                    <rect x="${eyeRX - 18}" y="${eyeY - 12}" width="42" height="27" rx="5"/>
                    <path d="M${eyeLX + 18} ${eyeY} h${eyeRX - eyeLX - 36}"/>
                    <path d="M${eyeLX - 24} ${eyeY - 4} l-12 -3M${eyeRX + 24} ${eyeY - 4} l12 -3"/>
                </g>`
            : "";

        const earringsMarkup = o.earrings
            ? `<circle cx="132" cy="282" r="3.5" fill="#c8a86a" opacity=".8"/><circle cx="268" cy="282" r="3.5" fill="#c8a86a" opacity=".8"/>`
            : "";

        return `<svg class="generated-portrait" viewBox="0 0 400 500" role="img" aria-labelledby="${uid}-title" preserveAspectRatio="xMidYMid slice">
            <title id="${uid}-title">${o.alt}</title>
            <defs>
                <radialGradient id="${uid}-bg" cx=".52" cy=".3" r=".85">
                    <stop offset="0" stop-color="${o.bg1}"/>
                    <stop offset=".62" stop-color="${darken(o.bg1, 18)}"/>
                    <stop offset="1" stop-color="${o.bg2}"/>
                </radialGradient>
                <linearGradient id="${uid}-skin" x1=".1" y1=".1" x2=".9" y2=".9">
                    <stop offset="0" stop-color="${skinLight}"/>
                    <stop offset=".38" stop-color="${o.skin}"/>
                    <stop offset=".72" stop-color="${skinShade}"/>
                    <stop offset="1" stop-color="${darken(skinShade, 18)}"/>
                </linearGradient>
                <linearGradient id="${uid}-shade" x1="0" y1="0" x2="1" y2="0">
                    <stop offset=".38" stop-color="#000" stop-opacity="0"/>
                    <stop offset=".78" stop-color="#000" stop-opacity=".22"/>
                    <stop offset="1" stop-color="#000" stop-opacity=".58"/>
                </linearGradient>
                <linearGradient id="${uid}-cloth" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="${clothesLight}"/>
                    <stop offset=".45" stop-color="${o.clothes}"/>
                    <stop offset="1" stop-color="${darken(o.clothes, 18)}"/>
                </linearGradient>
                <linearGradient id="${uid}-bottom" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#050607" stop-opacity="0"/>
                    <stop offset="1" stop-color="#050607" stop-opacity=".82"/>
                </linearGradient>
                <filter id="${uid}-grain">
                    <feTurbulence type="fractalNoise" baseFrequency=".82" numOctaves="3" stitchTiles="stitch"/>
                    <feColorMatrix type="saturate" values="0"/>
                    <feComponentTransfer><feFuncA type="table" tableValues="0 .13"/></feComponentTransfer>
                </filter>
                <filter id="${uid}-soft"><feGaussianBlur stdDeviation="16"/></filter>
                <pattern id="${uid}-stubble" width="4" height="4" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r=".7" fill="${darken(o.hair, 4)}" opacity=".55"/>
                </pattern>
                <clipPath id="${uid}-faceclip"><path d="${facePath}"/></clipPath>
                <clipPath id="${uid}-clip"><rect width="400" height="500" rx="1"/></clipPath>
            </defs>
            <g clip-path="url(#${uid}-clip)">
                <rect width="400" height="500" fill="url(#${uid}-bg)"/>
                <circle cx="286" cy="142" r="154" fill="${o.accent}" opacity=".055" filter="url(#${uid}-soft)"/>
                <g opacity=".14" stroke="#9aadb4" fill="none">
                    <path d="M0 106h400M0 236h400M0 366h400M116 0v500M286 0v500"/>
                </g>
                <g opacity=".22" fill="${o.accent}">
                    <circle cx="52" cy="54" r="1.6"/><circle cx="350" cy="86" r="1.2"/><circle cx="326" cy="442" r="1.5"/><circle cx="62" cy="420" r="1.2"/>
                </g>
                <path d="M18 500c14-92 74-136 140-150h84c66 14 126 58 140 150Z" fill="url(#${uid}-cloth)"/>
                <path d="M166 308h68l8 64c-14 16-28 22-42 22s-28-6-42-22Z" fill="${skinShade}"/>
                <path d="M132 250c-16-2-24 14-19 34 5 22 17 32 31 28Z" fill="${darken(o.skin, 20)}"/>
                <path d="M268 250c16-2 24 14 19 34-5 22-17 32-31 28Z" fill="${darken(o.skin, 30)}"/>
                ${hairBackMarkup}
                <path d="${facePath}" fill="url(#${uid}-skin)"/>
                <path d="${facePath}" fill="url(#${uid}-shade)"/>
                <path d="M156 180c12-28 32-44 60-48-22 14-34 32-38 56-10 0-18-2-22-8Z" fill="${skinLight}" opacity=".22"/>
                ${hairFrontMarkup}
                <path d="M${eyeLX - 24} ${eyeY - 20}q24-11 46-1" fill="none" stroke="${brow}" stroke-width="4" stroke-linecap="round"/>
                <path d="M${eyeRX - 22} ${eyeY - 21}q24-10 46 1" fill="none" stroke="${brow}" stroke-width="4" stroke-linecap="round"/>
                <path d="M${eyeLX - eyeW} ${eyeY}q${eyeW} ${-eyeH * 1.7} ${eyeW * 2} 0q${-eyeW} ${eyeH * 1.2} ${-eyeW * 2} 0Z" fill="#e9e4da" opacity=".9"/>
                <path d="M${eyeRX - eyeW} ${eyeY}q${eyeW} ${-eyeH * 1.7} ${eyeW * 2} 0q${-eyeW} ${eyeH * 1.2} ${-eyeW * 2} 0Z" fill="#e5dfd4" opacity=".88"/>
                <circle cx="${eyeLX}" cy="${eyeY}" r="${irisR}" fill="${o.eye}"/>
                <circle cx="${eyeRX}" cy="${eyeY}" r="${irisR}" fill="${o.eye}"/>
                <circle cx="${eyeLX}" cy="${eyeY}" r="${irisR * 0.42}" fill="#111a1d"/>
                <circle cx="${eyeRX}" cy="${eyeY}" r="${irisR * 0.42}" fill="#111a1d"/>
                <circle cx="${eyeLX - 1.4}" cy="${eyeY - 1.4}" r="1" fill="#f4f7f4" opacity=".9"/>
                <circle cx="${eyeRX - 1.4}" cy="${eyeY - 1.4}" r="1" fill="#f4f7f4" opacity=".9"/>
                <path d="M200 232c-4 22-8 40-12 50 7 6 17 6 24 0" fill="none" stroke="${darken(skinShade, 10)}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M188 283c4 4 8 6 12 6M212 283c-4 4-8 6-12 6" fill="none" stroke="${darken(skinShade, 18)}" stroke-width="2" stroke-linecap="round" opacity=".7"/>
                ${mouthMarkup}
                ${beardMarkup}
                ${glassesMarkup}
                ${earringsMarkup}
                ${outfitMarkup}
                <rect width="400" height="500" filter="url(#${uid}-grain)" opacity=".7"/>
                <rect y="380" width="400" height="120" fill="url(#${uid}-bottom)"/>
                <path d="M0 14h68" stroke="${o.accent}" stroke-width="1" opacity=".55"/>
                <path d="M332 14h68" stroke="${o.accent}" stroke-width="1" opacity=".25"/>
            </g>
        </svg>`;
    }

    function dual(id, first, second) {
        return `<div class="portrait-duo">
            <div>${create(id + "-a", first)}</div>
            <div>${create(id + "-b", second)}</div>
        </div>`;
    }

    window.DexterPortraits = { create, dual };
})();
