/* =========================================================
   DEXTER — TRIBUTE ARCHIVE
   Atmospheric concept-art scenes
   Original vector illustrations, no photographic material.
   ========================================================= */

(() => {
    "use strict";

    function grain(id) {
        return `<filter id="${id}-grain">
                <feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="4" stitchTiles="stitch"/>
                <feColorMatrix type="saturate" values="0"/>
                <feComponentTransfer><feFuncA type="table" tableValues="0 .14"/></feComponentTransfer>
            </filter>`;
    }

    function vignette(id) {
        return `<radialGradient id="${id}-vignette" cx=".5" cy=".48" r=".78">
                <stop offset=".5" stop-color="#000" stop-opacity="0"/>
                <stop offset="1" stop-color="#000" stop-opacity=".7"/>
            </radialGradient>`;
    }

    function house() {
        const id = "sc-house";
        return `<svg viewBox="0 0 800 600" role="img" aria-label="Концепт-арт: дом Декстера в пригороде Майами ночью" preserveAspectRatio="xMidYMid slice">
            <defs>
                <linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#05090d"/>
                    <stop offset=".46" stop-color="#0a1b27"/>
                    <stop offset=".78" stop-color="#173847"/>
                    <stop offset="1" stop-color="#0b1a22"/>
                </linearGradient>
                <linearGradient id="${id}-ground" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#111a1c"/>
                    <stop offset="1" stop-color="#050707"/>
                </linearGradient>
                <linearGradient id="${id}-wall" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#2d302f"/>
                    <stop offset=".55" stop-color="#1c201f"/>
                    <stop offset="1" stop-color="#0d1111"/>
                </linearGradient>
                <linearGradient id="${id}-roof" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#161b1d"/>
                    <stop offset="1" stop-color="#080b0c"/>
                </linearGradient>
                <radialGradient id="${id}-moon" cx=".5" cy=".5" r=".5">
                    <stop offset="0" stop-color="#d8e2df" stop-opacity=".9"/>
                    <stop offset=".38" stop-color="#a6b9bb" stop-opacity=".45"/>
                    <stop offset="1" stop-color="#8ba4ad" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="${id}-lamp" cx=".5" cy=".5" r=".5">
                    <stop offset="0" stop-color="#f3c177" stop-opacity=".8"/>
                    <stop offset=".4" stop-color="#d69a4e" stop-opacity=".25"/>
                    <stop offset="1" stop-color="#d69a4e" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="${id}-window" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#f0c27d"/>
                    <stop offset="1" stop-color="#a76e33"/>
                </linearGradient>
                <filter id="${id}-blur"><feGaussianBlur stdDeviation="18"/></filter>
                ${grain(id)}
                ${vignette(id)}
            </defs>
            <rect width="800" height="600" fill="url(#${id}-sky)"/>
            <circle cx="642" cy="118" r="105" fill="url(#${id}-moon)"/>
            <circle cx="642" cy="118" r="31" fill="#d4dfdc" opacity=".2"/>
            <g fill="#d9e2df" opacity=".3">
                <circle cx="88" cy="74" r="1.1"/><circle cx="172" cy="132" r=".8"/><circle cx="284" cy="58" r="1"/><circle cx="398" cy="108" r=".7"/><circle cx="518" cy="64" r="1"/><circle cx="724" cy="172" r=".8"/><circle cx="754" cy="58" r="1.1"/><circle cx="470" cy="186" r=".7"/>
            </g>
            <g fill="#071014" opacity=".82">
                <path d="M0 390c62-8 92-52 136-58 30-4 48 12 72 22 20 8 38 4 58-6v252H0Z"/>
                <path d="M800 384c-52-4-84-44-120-54-28-8-48 8-68 16-18 8-34 4-50-4v258h238Z"/>
            </g>
            <path d="M0 470h800v130H0Z" fill="url(#${id}-ground)"/>
            <g fill="#0a0f10" opacity=".9">
                <path d="M42 470c-6-76 8-134 16-174 4-18 14-28 26-28s22 12 24 28c6 40 18 98 10 174Z"/>
                <path d="M58 292c-24-28-56-42-92-48 40 2 76 16 98 40 8-26 22-48 44-66-16 26-24 50-24 78 24-12 52-14 80-10-30 6-56 20-74 40-16 18-24 36-26 56H46c2-26 10-52 12-90Z"/>
                <path d="M728 470c-4-66 6-116 12-150 3-16 12-24 22-24s19 10 21 24c5 34 14 84 8 150Z"/>
                <path d="M742 304c-20-24-46-36-76-42 34 2 62 14 80 34 6-22 18-42 36-58-14 24-20 44-20 68 20-10 42-12 66-8-24 6-46 18-60 34-14 16-20 32-22 50h-12c2-22 8-44 8-78Z"/>
            </g>
            <g>
                <path d="M180 332h440v158H180Z" fill="url(#${id}-wall)"/>
                <path d="M160 332 390 214l230 118Z" fill="url(#${id}-roof)"/>
                <path d="M160 332h460" stroke="#4a4d49" stroke-width="2" opacity=".35"/>
                <path d="M390 214v118" stroke="#454945" stroke-width="1" opacity=".3"/>
                <path d="M222 362h62v70h-62Z" fill="#080c0d" stroke="#3f4441" stroke-width="1"/>
                <path d="M222 362h62v70h-62Z" fill="url(#${id}-window)" opacity=".72"/>
                <path d="M253 362v70M222 397h62" stroke="#151b1b" stroke-width="4"/>
                <path d="M482 362h68v70h-68Z" fill="#080c0d" stroke="#3f4441" stroke-width="1"/>
                <path d="M482 362h68v70h-68Z" fill="url(#${id}-window)" opacity=".5"/>
                <path d="M516 362v70M482 397h68" stroke="#151b1b" stroke-width="4"/>
                <path d="M356 404h68v86h-68Z" fill="#3a1013"/>
                <path d="M364 412h52v78h-52Z" fill="#63151a"/>
                <circle cx="406" cy="452" r="2.2" fill="#c8a86a" opacity=".9"/>
                <path d="M390 332v38h-20v-38M410 332v38h20v-38" fill="#191d1d" opacity=".8"/>
                <path d="M340 490h100v10H340Z" fill="#151918"/>
                <path d="M326 500h128v8H326Z" fill="#0b0e0e"/>
                <path d="M596 360h56v130h-56Z" fill="#111515"/>
                <path d="M602 368h44v122h-44Z" fill="#090c0c"/>
                <path d="M608 374h32v116h-32Z" fill="#141918"/>
                <circle cx="618" cy="330" r="70" fill="url(#${id}-lamp)" filter="url(#${id}-blur)"/>
                <path d="M614 332h8v22h-8Z" fill="#d8b06c" opacity=".8"/>
            </g>
            <g opacity=".5">
                <path d="M112 474h576" stroke="#2d3b3c" stroke-width="1"/>
                <path d="M142 458h88M142 466h88M142 482h88M142 490h88" stroke="#253334" stroke-width="1"/>
                <path d="M548 458h96M548 466h96M548 482h96M548 490h96" stroke="#253334" stroke-width="1"/>
            </g>
            <g>
                <path d="M282 492c14-26 40-36 70-36h26c28 0 52 12 64 36l10 32H270Z" fill="#111719"/>
                <path d="M296 482c10-20 30-28 54-28h26c22 0 42 8 52 28l8 20H288Z" fill="#1d292d"/>
                <path d="M322 456c10-14 26-20 44-20s34 6 44 20" fill="none" stroke="#334247" stroke-width="3"/>
                <circle cx="330" cy="512" r="13" fill="#050707"/><circle cx="478" cy="512" r="13" fill="#050707"/>
                <circle cx="330" cy="512" r="6" fill="#20282a"/><circle cx="478" cy="512" r="6" fill="#20282a"/>
                <path d="M384 456v24M416 456v24" stroke="#0a0d0e" stroke-width="5"/>
            </g>
            <g fill="#9ab0b3" opacity=".12">
                <path d="M110 300c80-26 156-18 240 6M480 310c78-20 142-16 214 4"/>
                <path d="M84 338c70-18 138-14 210 2M504 344c76-18 146-14 216 2"/>
            </g>
            <rect width="800" height="600" fill="url(#${id}-vignette)"/>
            <rect width="800" height="600" filter="url(#${id}-grain)" opacity=".65"/>
        </svg>`;
    }

    function boat() {
        const id = "sc-boat";
        return `<svg viewBox="0 0 800 600" role="img" aria-label="Концепт-арт: лодка Slice of Life в открытом море на закате" preserveAspectRatio="xMidYMid slice">
            <defs>
                <linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#070e17"/>
                    <stop offset=".34" stop-color="#142534"/>
                    <stop offset=".61" stop-color="#3f2731"/>
                    <stop offset=".76" stop-color="#783034"/>
                    <stop offset="1" stop-color="#171b20"/>
                </linearGradient>
                <radialGradient id="${id}-sun" cx=".5" cy=".5" r=".5">
                    <stop offset="0" stop-color="#d96c5f" stop-opacity=".9"/>
                    <stop offset=".35" stop-color="#a6373e" stop-opacity=".4"/>
                    <stop offset="1" stop-color="#8b0000" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="${id}-sea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#0d202b"/>
                    <stop offset=".5" stop-color="#07131b"/>
                    <stop offset="1" stop-color="#030709"/>
                </linearGradient>
                <linearGradient id="${id}-hull" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#d9d7cf"/>
                    <stop offset=".5" stop-color="#8a8d89"/>
                    <stop offset="1" stop-color="#3b4141"/>
                </linearGradient>
                <filter id="${id}-blur"><feGaussianBlur stdDeviation="12"/></filter>
                ${grain(id)}
                ${vignette(id)}
            </defs>
            <rect width="800" height="600" fill="url(#${id}-sky)"/>
            <circle cx="540" cy="316" r="130" fill="url(#${id}-sun)" filter="url(#${id}-blur)"/>
            <circle cx="540" cy="316" r="35" fill="#d87363" opacity=".45"/>
            <g fill="#cfdadb" opacity=".25">
                <circle cx="98" cy="80" r="1.1"/><circle cx="212" cy="126" r=".8"/><circle cx="330" cy="62" r="1"/><circle cx="430" cy="152" r=".7"/><circle cx="650" cy="96" r="1"/><circle cx="724" cy="186" r=".8"/><circle cx="754" cy="52" r="1.1"/>
            </g>
            <g fill="#0a1116" opacity=".82">
                <path d="M0 364c50-20 84-24 128-16 38 8 66 28 106 30 36 2 58-12 84-20v242H0Z"/>
                <path d="M800 354c-44-18-76-22-116-14-34 8-60 24-94 28-30 4-48-6-70-12v244h280Z"/>
            </g>
            <rect y="360" width="800" height="240" fill="url(#${id}-sea)"/>
            <g opacity=".5">
                <path d="M0 386c160-8 260 8 400 0s250 8 400 0" stroke="#a75b58" stroke-width="1"/>
                <path d="M0 420c150 6 250-8 390 0s260-6 410 0" stroke="#4a6a74" stroke-width="1"/>
                <path d="M0 474c180-6 280 8 420 0s250 6 380 0" stroke="#243f4a" stroke-width="1"/>
                <path d="M0 546c140 6 260-8 400 0s260-6 400 0" stroke="#172c35" stroke-width="1"/>
            </g>
            <g opacity=".45">
                <path d="M500 352h80l-10 52h-60Z" fill="#d87363" opacity=".35"/>
                <path d="M522 404h36l-6 32h-24Z" fill="#d87363" opacity=".2"/>
            </g>
            <g>
                <path d="M206 392h388l-34 52H242Z" fill="url(#${id}-hull)"/>
                <path d="M218 400h366l-18 30H236Z" fill="#e1ded5" opacity=".62"/>
                <path d="M232 444h324l-8 14H240Z" fill="#13191b"/>
                <path d="M270 364h244v28H270Z" fill="#1c2426"/>
                <path d="M298 332h188v32H298Z" fill="#273133"/>
                <path d="M314 310h156v22H314Z" fill="#151b1d"/>
                <path d="M326 292h132v18H326Z" fill="#273335"/>
                <path d="M344 270h96v22H344Z" fill="#101719"/>
                <path d="M368 252h48v18h-48Z" fill="#2a3739"/>
                <path d="M314 310h156v22H314Z" fill="#b9c5c2" opacity=".15"/>
                <path d="M386 250v-46M386 204l56 22-56 22Z" fill="#d6d4ca" opacity=".65"/>
                <path d="M386 204v-24" stroke="#c8c6bd" stroke-width="2" opacity=".7"/>
                <path d="M330 336h54v18h-54Z" fill="#0b1113" opacity=".65"/>
                <path d="M416 336h54v18h-54Z" fill="#0b1113" opacity=".65"/>
                <path d="M340 344h34M426 344h34" stroke="#7e8b8a" stroke-width="2" opacity=".4"/>
                <path d="M246 398h32M494 398h32" stroke="#1b2425" stroke-width="3"/>
                <text x="400" y="432" text-anchor="middle" font-family="monospace" font-size="9" letter-spacing="3" fill="#4d5958">SLICE OF LIFE</text>
            </g>
            <g opacity=".55" fill="none" stroke="#b6c4c4">
                <path d="M198 448c-30 8-62 10-98 6M602 448c30 8 62 10 98 6"/>
                <path d="M182 458c-24 6-48 8-74 6M618 458c24 6 48 8 74 6"/>
            </g>
            <rect width="800" height="600" fill="url(#${id}-vignette)"/>
            <rect width="800" height="600" filter="url(#${id}-grain)" opacity=".65"/>
        </svg>`;
    }

    function lab() {
        const id = "sc-lab";
        return `<svg viewBox="0 0 800 600" role="img" aria-label="Концепт-арт: лаборатория судебной экспертизы полиции Майами" preserveAspectRatio="xMidYMid slice">
            <defs>
                <linearGradient id="${id}-room" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#1b303b"/>
                    <stop offset=".45" stop-color="#10212b"/>
                    <stop offset="1" stop-color="#070d11"/>
                </linearGradient>
                <linearGradient id="${id}-floor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#101b20"/>
                    <stop offset="1" stop-color="#050809"/>
                </linearGradient>
                <linearGradient id="${id}-light" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#c9e2df" stop-opacity=".5"/>
                    <stop offset="1" stop-color="#7da5ad" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="${id}-glass" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#9fc1c7" stop-opacity=".18"/>
                    <stop offset=".45" stop-color="#d9e9e8" stop-opacity=".05"/>
                    <stop offset="1" stop-color="#7ba2aa" stop-opacity=".14"/>
                </linearGradient>
                <radialGradient id="${id}-glow" cx=".5" cy=".5" r=".5">
                    <stop offset="0" stop-color="#d3e6e3" stop-opacity=".2"/>
                    <stop offset="1" stop-color="#d3e6e3" stop-opacity="0"/>
                </radialGradient>
                <filter id="${id}-blur"><feGaussianBlur stdDeviation="14"/></filter>
                ${grain(id)}
                ${vignette(id)}
            </defs>
            <rect width="800" height="600" fill="url(#${id}-room)"/>
            <path d="M0 430h800v170H0Z" fill="url(#${id}-floor)"/>
            <g opacity=".35" stroke="#6b9299" stroke-width="1">
                <path d="M0 120h800M0 214h800M0 308h800M0 402h800"/>
                <path d="M110 0v430M260 0v430M410 0v430M560 0v430M710 0v430"/>
            </g>
            <g opacity=".45" stroke="#1d3941" stroke-width="1">
                <path d="M0 450h800M0 490h800M0 530h800M0 570h800"/>
                <path d="M120 430v170M240 430v170M360 430v170M480 430v170M600 430v170M720 430v170"/>
            </g>
            <g>
                <path d="M190 42h420v30H190Z" fill="#b7d4d1" opacity=".38"/>
                <path d="M210 72h380v8H210Z" fill="#d9ebe7" opacity=".18"/>
                <path d="M240 80h320v190H240Z" fill="url(#${id}-light)" opacity=".3"/>
                <path d="M286 80h228v190H286Z" fill="url(#${id}-glow)" filter="url(#${id}-blur)"/>
            </g>
            <g>
                <path d="M92 330h616v96H92Z" fill="#0a1216" stroke="#34525a" stroke-width="1"/>
                <path d="M104 338h592v22H104Z" fill="#1b2b31"/>
                <path d="M104 360h592v8H104Z" fill="#30474d" opacity=".55"/>
                <path d="M92 426h616v12H92Z" fill="#060a0c"/>
                <path d="M116 426v72M684 426v72" stroke="#0a1114" stroke-width="10"/>
            </g>
            <g>
                <path d="M150 214h120v116H150Z" fill="#0a1216" stroke="#3a5a61" stroke-width="1"/>
                <path d="M158 222h104v98H158Z" fill="#e6e0d2" opacity=".8"/>
                <g fill="#8b0000" opacity=".72">
                    <circle cx="184" cy="248" r="7"/><circle cx="196" cy="262" r="4"/><circle cx="210" cy="240" r="3"/><circle cx="228" cy="272" r="6"/><circle cx="238" cy="248" r="2.5"/><circle cx="176" cy="282" r="3"/><circle cx="218" cy="294" r="2"/>
                </g>
                <path d="M170 230h80" stroke="#7e8b88" stroke-width="1" opacity=".5"/>
                <path d="M170 310h48" stroke="#7e8b88" stroke-width="1" opacity=".3"/>
            </g>
            <g>
                <path d="M352 222h164v108H352Z" fill="#0b1216" stroke="#3a5a61" stroke-width="1"/>
                <path d="M360 230h148v92H360Z" fill="#091115"/>
                <path d="M386 256c22-20 52-20 74 0" fill="none" stroke="#81a6ad" stroke-width="1.2" opacity=".5"/>
                <path d="M386 282c22 20 52 20 74 0" fill="none" stroke="#81a6ad" stroke-width="1.2" opacity=".3"/>
                <circle cx="424" cy="270" r="20" fill="none" stroke="#5f848b" stroke-width="1" opacity=".5"/>
                <path d="M424 250v40M404 270h40" stroke="#5f848b" stroke-width="1" opacity=".35"/>
                <path d="M370 304h128" stroke="#c41e3a" stroke-width="1" opacity=".55"/>
                <text x="370" y="318" font-family="monospace" font-size="7" letter-spacing="2" fill="#71959c">BLOOD SPATTER / 04</text>
            </g>
            <g>
                <path d="M556 340h98v86h-98Z" fill="#111b1f" stroke="#3a5a61" stroke-width="1"/>
                <path d="M570 350h70v16h-70Z" fill="#24363b"/>
                <path d="M574 380h62v34h-62Z" fill="#070d10"/>
                <circle cx="586" cy="396" r="7" fill="#a9c7c6" opacity=".35"/>
                <circle cx="602" cy="396" r="7" fill="#a9c7c6" opacity=".25"/>
                <circle cx="618" cy="396" r="7" fill="#a9c7c6" opacity=".2"/>
                <path d="M564 372h78" stroke="#c41e3a" stroke-width="1" opacity=".45"/>
            </g>
            <g>
                <path d="M300 338h34v72h-34Z" fill="#0b1114"/>
                <path d="M310 300h14v38h-14Z" fill="#0b1114"/>
                <path d="M304 300h26v10h-26Z" fill="#6f8f92" opacity=".55"/>
                <path d="M316 306v22" stroke="#a7c3c3" stroke-width="1" opacity=".5"/>
                <path d="M306 352h22" stroke="#c41e3a" stroke-width="1" opacity=".55"/>
            </g>
            <g>
                <path d="M206 446h116v18H206Z" fill="#121c20"/>
                <path d="M224 438h80v8h-80Z" fill="#2b3c40"/>
                <path d="M238 430h52v8h-52Z" fill="#8fa6a5" opacity=".35"/>
                <path d="M360 446h124v18H360Z" fill="#121c20"/>
                <path d="M378 438h88v8h-88Z" fill="#2b3c40"/>
                <path d="M392 430h60v8h-60Z" fill="#8fa6a5" opacity=".28"/>
                <path d="M528 446h72v18h-72Z" fill="#121c20"/>
                <path d="M542 438h44v8h-44Z" fill="#2b3c40"/>
              </g>
            <g fill="#d7e3e0" opacity=".3">
                <path d="M188 96h14v22h-14Z"/><path d="M206 108h20v10h-20Z"/><path d="M584 94h18v14h-18Z"/><path d="M560 110h14v12h-14Z"/>
            </g>
            <rect width="800" height="600" fill="url(#${id}-vignette)"/>
            <rect width="800" height="600" filter="url(#${id}-grain)" opacity=".65"/>
        </svg>`;
    }

    function miami() {
        const id = "sc-miami";
        return `<svg viewBox="0 0 800 600" role="img" aria-label="Концепт-арт: ночной Майами, огни города и отражения в воде" preserveAspectRatio="xMidYMid slice">
            <defs>
                <linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#04070b"/>
                    <stop offset=".45" stop-color="#081722"/>
                    <stop offset=".72" stop-color="#14313f"/>
                    <stop offset="1" stop-color="#0a1820"/>
                </linearGradient>
                <linearGradient id="${id}-water" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#0a1b25"/>
                    <stop offset=".5" stop-color="#061018"/>
                    <stop offset="1" stop-color="#020506"/>
                </linearGradient>
                <radialGradient id="${id}-moon" cx=".5" cy=".5" r=".5">
                    <stop offset="0" stop-color="#e1e9e5" stop-opacity=".9"/>
                    <stop offset=".3" stop-color="#a9bec1" stop-opacity=".35"/>
                    <stop offset="1" stop-color="#8ba4ad" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="${id}-neon" cx=".5" cy=".5" r=".5">
                    <stop offset="0" stop-color="#c41e3a" stop-opacity=".32"/>
                    <stop offset="1" stop-color="#c41e3a" stop-opacity="0"/>
                </radialGradient>
                <filter id="${id}-blur"><feGaussianBlur stdDeviation="16"/></filter>
                ${grain(id)}
                ${vignette(id)}
            </defs>
            <rect width="800" height="600" fill="url(#${id}-sky)"/>
            <circle cx="626" cy="126" r="90" fill="url(#${id}-moon)"/>
            <circle cx="626" cy="126" r="26" fill="#d7e2df" opacity=".15"/>
            <g fill="#d8e2df" opacity=".26">
                <circle cx="76" cy="74" r="1.1"/><circle cx="160" cy="132" r=".7"/><circle cx="274" cy="62" r=".9"/><circle cx="378" cy="116" r=".7"/><circle cx="486" cy="58" r="1"/><circle cx="724" cy="188" r=".8"/><circle cx="756" cy="72" r="1.1"/>
            </g>
            <g fill="#0a141b">
                <path d="M0 390h800v210H0Z"/>
                <path d="M40 330h42v100H40zM92 352h34v78H92zM138 300h56v130h-56zM206 342h30v88h-30zM248 318h62v112h-62zM324 356h36v74h-36zM370 292h58v138h-58zM440 338h30v92h-30zM480 310h62v120h-62zM554 350h32v80h-32zM598 324h50v106h-50zM660 358h38v72h-38zM708 306h60v124h-60z"/>
            </g>
            <g fill="#18333f" opacity=".75">
                <path d="M154 316h10v114h-10zM200 354h8v76h-8zM262 332h12v98h-12zM384 306h10v124h-10zM496 324h12v106h-12zM612 338h8v92h-8zM724 320h10v110h-10z"/>
            </g>
            <g fill="#d6a85d" opacity=".42">
                <rect x="50" y="346" width="4" height="7"/><rect x="66" y="366" width="4" height="7"/><rect x="104" y="366" width="3" height="6"/><rect x="148" y="316" width="4" height="7"/><rect x="168" y="344" width="3" height="6"/><rect x="218" y="360" width="3" height="6"/><rect x="260" y="334" width="4" height="7"/><rect x="280" y="366" width="3" height="6"/><rect x="336" y="372" width="3" height="6"/><rect x="382" y="310" width="4" height="7"/><rect x="402" y="342" width="3" height="6"/><rect x="492" y="330" width="4" height="7"/><rect x="512" y="360" width="3" height="6"/><rect x="608" y="346" width="4" height="7"/><rect x="628" y="372" width="3" height="6"/><rect x="718" y="326" width="4" height="7"/><rect x="738" y="354" width="3" height="6"/>
            </g>
            <g opacity=".7">
                <circle cx="188" cy="422" r="96" fill="url(#${id}-neon)" filter="url(#${id}-blur)"/>
                <circle cx="604" cy="428" r="112" fill="url(#${id}-neon)" filter="url(#${id}-blur)" opacity=".7"/>
            </g>
            <rect y="390" width="800" height="210" fill="url(#${id}-water)"/>
            <g opacity=".35">
                <path d="M0 422h800M0 464h800M0 516h800M0 572h800" stroke="#456b78" stroke-width="1"/>
                <path d="M0 440c140 6 250-8 390 0s260-6 410 0M0 492c160-6 260 8 400 0s250 6 400 0M0 548c150 6 260-8 400 0s260-6 400 0" stroke="#254651" stroke-width="1"/>
            </g>
            <g opacity=".34" fill="#d6a85d">
                <path d="M48 394h6v32h-6zM108 394h4v46h-4zM158 394h8v24h-8zM220 394h5v58h-5zM278 394h6v34h-6zM342 394h4v50h-4zM402 394h7v26h-7zM468 394h5v62h-5zM522 394h4v38h-4zM584 394h6v28h-6zM648 394h4v46h-4zM708 394h8v34h-8z"/>
            </g>
            <g fill="#040809" opacity=".95">
                <path d="M0 600V500c42-18 72-12 102-30 22 12 36 18 58 14 26-5 36 28 58 40 24 12 24 42 46 56 16 10 20 12 20 20z"/>
                <path d="M800 600V486c-44 10-62 32-92 38-24 4-34 32-56 44-22 12-28 22-28 32z"/>
            </g>
            <g fill="#020405">
                <path d="M96 600c-8-80 8-144 16-188 3-18 16-28 32-28s28 10 30 28c6 44 18 108 10 188Z"/>
                <path d="M112 414c-22-28-52-42-86-50 40 4 72 18 92 40 8-26 22-48 44-66-16 26-24 50-26 78 24-12 50-14 78-10-28 6-52 20-70 40-16 18-24 36-26 56h-14c2-26 8-52 8-88Z"/>
                <path d="M708 600c-6-70 6-124 12-162 3-16 13-25 26-25s23 9 25 25c5 38 14 92 8 162Z"/>
                <path d="M724 436c-20-24-46-36-76-42 34 2 62 14 80 34 6-22 18-42 36-58-14 24-20 44-20 68 20-10 42-12 66-8-24 6-46 18-60 34-14 16-20 32-22 50h-12c2-22 8-44 8-78Z"/>
            </g>
            <g opacity=".55" fill="none" stroke="#8fa8ad">
                <path d="M222 472c80-6 130 6 210 0M410 514c64-4 110 6 174 0M170 560c90-4 150 6 240 0"/>
            </g>
            <rect width="800" height="600" fill="url(#${id}-vignette)"/>
            <rect width="800" height="600" filter="url(#${id}-grain)" opacity=".65"/>
        </svg>`;
    }

    function room() {
        const id = "sc-room";
        return `<svg viewBox="0 0 800 600" role="img" aria-label="Концепт-арт: пустая комната ритуала с пластиковыми шторами" preserveAspectRatio="xMidYMid slice">
            <defs>
                <linearGradient id="${id}-wall" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#10191d"/>
                    <stop offset=".55" stop-color="#0a1013"/>
                    <stop offset="1" stop-color="#050708"/>
                </linearGradient>
                <linearGradient id="${id}-plastic" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#b9cdca" stop-opacity=".16"/>
                    <stop offset=".42" stop-color="#d8e4e0" stop-opacity=".05"/>
                    <stop offset=".72" stop-color="#8da7a5" stop-opacity=".11"/>
                    <stop offset="1" stop-color="#d8e4e0" stop-opacity=".03"/>
                </linearGradient>
                <radialGradient id="${id}-bulb" cx=".5" cy=".5" r=".5">
                    <stop offset="0" stop-color="#f1d6a0" stop-opacity=".9"/>
                    <stop offset=".18" stop-color="#d6ab63" stop-opacity=".4"/>
                    <stop offset="1" stop-color="#d6ab63" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="${id}-floor" cx=".5" cy=".5" r=".7">
                    <stop offset="0" stop-color="#1b2b2e" stop-opacity=".5"/>
                    <stop offset="1" stop-color="#050708" stop-opacity=".9"/>
                </radialGradient>
                <filter id="${id}-blur"><feGaussianBlur stdDeviation="22"/></filter>
                ${grain(id)}
                ${vignette(id)}
            </defs>
            <rect width="800" height="600" fill="url(#${id}-wall)"/>
            <path d="M0 420h800v180H0Z" fill="url(#${id}-floor)"/>
            <g opacity=".25" stroke="#6b8b8e" stroke-width="1">
                <path d="M0 92h800M0 196h800M0 300h800M0 404h800"/>
                <path d="M100 0v420M220 0v420M340 0v420M460 0v420M580 0v420M700 0v420"/>
            </g>
            <g>
                <path d="M40 30h720v370H40Z" fill="url(#${id}-plastic)" stroke="#6d898b" stroke-opacity=".25"/>
                <path d="M76 30v370M132 30v370M188 30v370M244 30v370M300 30v370M356 30v370M412 30v370M468 30v370M524 30v370M580 30v370M636 30v370M692 30v370" stroke="#b9cfcc" stroke-width="1" opacity=".08"/>
                <path d="M40 116c70 22 128-18 198 2s128-22 198 0 128-18 198 2 106-16 116-8M40 286c84-16 142 18 214 0s132 18 206 0 130 16 200 0 92 8 100 4" fill="none" stroke="#d8e4e0" stroke-width="1" opacity=".08"/>
                <path d="M40 30h720v370H40Z" fill="none" stroke="#9cb4b3" stroke-opacity=".18"/>
            </g>
            <g>
                <path d="M400 0v92" stroke="#11191b" stroke-width="2"/>
                <path d="M384 86h32l-8 18h-16Z" fill="#1d2628"/>
                <circle cx="400" cy="110" r="7" fill="#d7b477"/>
                <circle cx="400" cy="110" r="150" fill="url(#${id}-bulb)" filter="url(#${id}-blur)"/>
                <path d="M400 110 236 420M400 110 564 420" stroke="#e1c182" stroke-width="1" opacity=".08"/>
            </g>
            <g>
                <path d="M222 330h356v54H222Z" fill="#0a1113" stroke="#3f5a5d" stroke-width="1"/>
                <path d="M236 338h328v30H236Z" fill="#172326"/>
                <path d="M236 368h328v8H236Z" fill="#2b4144" opacity=".55"/>
                <path d="M250 384v36M550 384v36" stroke="#0a1012" stroke-width="10"/>
                <path d="M258 384v36M542 384v36" stroke="#1d2b2d" stroke-width="3"/>
              </g>
            <g>
                <path d="M264 294h44v18h-44Z" fill="#182326"/>
                <path d="M270 302h32v2h-32Z" fill="#a7bdb9" opacity=".4"/>
                <path d="M328 292h34v20h-34Z" fill="#182326"/>
                <path d="M334 298h22v3h-22Z" fill="#a7bdb9" opacity=".35"/>
                <path d="M386 296h52v16h-52Z" fill="#182326"/>
                <path d="M394 302h36v2h-36Z" fill="#a7bdb9" opacity=".4"/>
                <path d="M474 292h30v20h-30Z" fill="#182326"/>
                <path d="M480 298h18v3h-18Z" fill="#a7bdb9" opacity=".35"/>
              </g>
            <g>
                <path d="M566 338h72v80h-72Z" fill="#0b1214" stroke="#3f5a5d" stroke-width="1"/>
                <path d="M576 348h52v12h-52Z" fill="#24363a"/>
                <path d="M576 372h52v34h-52Z" fill="#060b0d"/>
                <path d="M584 382h36M584 390h28M584 398h32" stroke="#7d999b" stroke-width="1" opacity=".35"/>
                <path d="M572 366h60" stroke="#c41e3a" stroke-width="1" opacity=".4"/>
              </g>
            <g>
                <path d="M144 432h90v16h-90Z" fill="#101a1c"/>
                <path d="M156 424h66v8h-66Z" fill="#263a3c"/>
                <path d="M172 414h34v10h-34Z" fill="#8ca5a4" opacity=".28"/>
                <path d="M578 438h82v14h-82Z" fill="#101a1c"/>
                <path d="M592 430h54v8h-54Z" fill="#263a3c"/>
              </g>
            <g fill="#c41e3a" opacity=".55">
                <path d="M190 470h12v2h-12zM300 456h8v2h-8zM500 474h10v2h-10zM640 460h8v2h-8z"/>
            </g>
            <path d="M0 430h800v170H0Z" fill="url(#${id}-floor)"/>
            <rect width="800" height="600" fill="url(#${id}-vignette)"/>
            <rect width="800" height="600" filter="url(#${id}-grain)" opacity=".7"/>
        </svg>`;
    }

    window.DexterScenes = { house, boat, lab, miami, room };
})();
