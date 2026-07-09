// ==UserScript==
// @name         Zenith's Custom CSS
// @namespace    http://tampermonkey.net/
// @version      2026-07-09
// @description  try to take over the world!
// @author       @ZenithRogue
// @match        https://discord.com/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        GM_addStyle
// @resource     IMPORTED_CSS https://raw.githubusercontent.com/ZenithRogue/discord-css/refs/heads/main/tweaks.css
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    let style = GM_getResourceText('IMPORTED_CSS');
    let quick_fixes = `.visual-refresh {
        * {
            --custom-app-top-bar-height: 0px;
        }
        .mainContent__29444 {
            flex-direction: row-reverse !important;
        }
    }
    .bar_c38106 { display:none; }
    nav[aria-label="Servers sidebar"] {
        margin-top: 12px;
    }`;
    GM_addStyle(style + quick_fixes);
})();
