/**
 * Images lazy load
 * [c]2018 Ante Laca
 */

(function(window, document) {

    'use strict';

    let container = [];

    const showVisible = () => {

        for (let i = 0; i < container.length; i++) {

            if (container[i] === null) {
                continue;
            }

            if (isVisible(container[i])) {

                if (container[i].getAttribute('data-src')) {
                    // src
                    container[i].src = container[i].getAttribute('data-src');
                    container[i].removeAttribute('data-src');

                    // scrcset
                    if (container[i].getAttribute('data-srcset')) {
                        container[i].srcset = container[i].getAttribute('data-srcset');
                        container[i].removeAttribute('data-srcset');
                    }

                    container[i] = null;

                }

            }

        }

    };


    const isVisible = image => {

        let rect = image.getBoundingClientRect();

        return ((rect.top >= 0 && rect.left >= 0 && rect.top) <= (window.innerHeight || document.documentElement.clientHeight));

    };


    document.addEventListener('DOMContentLoaded', () => {

        let images = document.querySelectorAll('img[data-src]');

        for (let j = 0; j < images.length; j++) {
            container.push(images[j]);
        }

        showVisible();

    }, false);

    document.addEventListener('scroll', showVisible, false);

})(window, document);