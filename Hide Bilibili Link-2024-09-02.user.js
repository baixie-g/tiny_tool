// ==UserScript==
// @name         Hide Bilibili Link
// @namespace    http://tampermonkey.net/
// @version      2024-09-02
// @description  Hide specific links on Bilibili website and click on an element after a delay
// @author       You
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const elementsToHide = [
        '#i_cecream > div.bili-feed4 > main > div.feed2 > div > div.container.is-version8 > div.recommended-swipe.grid-anchor',
        '#mirror-vdcon > div:nth-child(2) > div > a',
        '#reco_list > div.rec-list > div.video-page-special-card-small',
        '#activity_vote',
        '#biliMainHeader > div > div > ul.left-entry',
        '#right-bottom-banner > div',
        '#mirror-vdcon > div.right-container.is-in-large-ab > div > div:nth-child(8) > div.pop-live-small-mode.part-1',
        '#bannerAd > div',
        '#slide_ad > div > div.van-slide.item-box > div > a'
    ];

    const hideElements = () => {
        elementsToHide.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.display = 'none';
            }
        });
    };

    const observer = new MutationObserver(hideElements);

    // Observe changes in attributes and child nodes across the document body
    const config = { attributes: true, childList: true, subtree: true };
    observer.observe(document.body, config);

    // Click on the element after a delay
    setTimeout(() => {
        const toggleButton = document.querySelector("#v_desc > div.toggle-btn > span");
        if (toggleButton) toggleButton.click();

    }, 2000); // 2000 milliseconds = 2 seconds

})();