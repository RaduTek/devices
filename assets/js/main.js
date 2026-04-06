(function () {
    function log() {
        var c = window.console;

        if (!c || !c.log) {
            return;
        }

        try {
            c.log.apply(c, arguments);
        } catch (e) {
            try {
                c.log(Array.prototype.join.call(arguments, ' '));
            } catch (ignore) {}
        }
    }

    function addEvent(el, eventName, handler) {
        if (el.addEventListener) {
            el.addEventListener(eventName, handler, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + eventName, handler);
        } else {
            el['on' + eventName] = handler;
        }
    }

    function getBodyHeight() {
        var body = document.body;
        var docEl = document.documentElement;

        return Math.max(
            body ? body.scrollHeight : 0,
            body ? body.offsetHeight : 0,
            body ? body.clientHeight : 0,
        );
    }

    function getViewportHeight() {
        if (typeof window.innerHeight === 'number') {
            return window.innerHeight;
        }

        if (document.documentElement && document.documentElement.clientHeight) {
            return document.documentElement.clientHeight;
        }

        if (document.body && document.body.clientHeight) {
            return document.body.clientHeight;
        }

        return 0;
    }

    function adjustFooterHeight() {
        var footerInner = document.getElementById('footer-inner');
        var bodyHeight, viewportHeight, extraHeight;

        if (!footerInner) {
            return;
        }

        bodyHeight = getBodyHeight();
        viewportHeight = getViewportHeight();

        if (bodyHeight < viewportHeight) {
            extraHeight = viewportHeight - bodyHeight - 70;

            if (extraHeight < 0) {
                extraHeight = 0;
            }

            footerInner.style.height = extraHeight + 'px';
        }
    }

    addEvent(window, 'load', adjustFooterHeight);
    addEvent(window, 'resize', adjustFooterHeight);

    if ('onorientationchange' in window) {
        addEvent(window, 'orientationchange', adjustFooterHeight);
    }
}());