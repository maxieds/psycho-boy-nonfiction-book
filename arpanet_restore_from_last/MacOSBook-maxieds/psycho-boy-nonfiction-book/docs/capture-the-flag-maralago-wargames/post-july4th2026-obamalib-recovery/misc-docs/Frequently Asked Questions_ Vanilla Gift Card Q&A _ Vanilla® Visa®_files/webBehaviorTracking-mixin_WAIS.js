define(['mage/utils/wrapper'], function (wrapper) {
    'use strict';

    return function (webBehaviorTracking) {
        webBehaviorTracking.wbtTrack = wrapper.wrapSuper(
            webBehaviorTracking.wbtTrack,
            function (data) {
                if (typeof window.dmPt !== 'undefined') {
                    window.dmPt('track', data || {});
                }
            }
        );

        return webBehaviorTracking;
    };
});
