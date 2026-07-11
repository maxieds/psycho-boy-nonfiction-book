/**
 * Copyright © InComm, Inc. All rights reserved.
 */
define([
    'jquery',
    'mage/cookies'
], function ($) {
    'use strict';

    function getSolidParam() {
        let params = new URLSearchParams(document.location.search);
        return params.get("SOLID");
    }

    function setSolidCookie(cvalue) {
        const cookieExpires = new Date(new Date().getTime() + 24*60*60*1000);
        $.mage.cookies.set('mkt_Solid', cvalue,  {expires: cookieExpires});
    }

    const solid = getSolidParam();
    if (solid) {
        setSolidCookie(solid)
    }
});