/**
 * Copyright © InComm, Inc. All rights reserved.
 */
define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'text!Magento_Ui/template/modal/modal-popup.html',
    'Magento_Customer/js/customer-data'
], function ($, modal, popupTpl, customerData) {
    'use strict';

    $.widget('mage.mixedQuoteWarningPopup', {
        options: {
            minicartSelector: '[data-block="minicart"]',
            mixedModalPopupId: '#modal-warning-mixed-quote',
            modalConfig: {},
        },
        cart_action: '',

        /**
         * Initialize widget
         * @private
         */
        _create: function () {
            const self = this;

            this._bindEvents();

            const modalOptions = {
                type: 'popup',
                width: '80%',
                responsive: false,
                modalClass: 'mixed-quote-warning-modal-popup scheduled-delivery-modal',
                title: self.options.modalConfig.modalTitle,
                buttons: [
                    {
                        text: self.options.modalConfig.modalCancelButtonText,
                        class: 'keep-current-cards mixed-quote-popup-secondary',
                        click: function () {
                            this.closeModal();
                        }
                    },
                    {
                        text: self.options.modalConfig.modalPrimaryButtonText,
                        class: 'buy-new-cards mixed-quote-popup',
                        click: function () {
                            self._submitFormAgain();
                        }
                    }
                ]
            };

            modal(modalOptions, $(this.options.mixedModalPopupId));
        },

        /**
         * Bind events
         * @private
         */
        _bindEvents: function () {
            const self = this;
            $(document).on('ajax:addToCart', function (event, data) {
                self.responseData = data;
                self.sentFormData = $(data.form).serializeArray();
                if (data.response && data.response['mixed_quote_warning']) {
                    self.cart_action = 'remove_all_items_from_cart';
                    if (data.response['mixed_quote_warning'] === 'scheduled_delivery_mixed_quote_warning') {
                        $(self.options.mixedModalPopupId).modal('openModal');
                    }
                    self._triggerMixedQuotePopUpEvent(data.response);
                    data.response['redirect'] = false;
                    const cartData = customerData.get('cart');
                    cartData(cartData());
                }
            });
        },

        /**
         * Mixed Quote Warning Event
         * @private
         */
        _triggerMixedQuotePopUpEvent: function (response) {
            $(document).trigger('ajax:mixedQuoteWarning', {
                'popupType': response['mixed_quote_warning']
            });
        },

        /**
         * Submit form again
         * @private
         */
        _submitFormAgain: function () {
            const self = this;
            $(self.options.mixedModalPopupId).modal('closeModal');

            const bodyEl = $('body');
            bodyEl.trigger('processStart');
            const formData = {};
            self.sentFormData.forEach(function (item) {
                formData[item.name] = item.value;
            });
            formData['cart_action'] = self.cart_action;

            $.post({
                dataType: 'json',
                url: $(self.responseData.form).attr('action'),
                data: formData,
                success: function (data) {
                    $(document).trigger('ajax:clearPDPForm', {
                        'response': data
                    });
                    if (!data['backUrl']) {
                        $(self.options.minicartSelector).trigger('openMiniCart');
                        bodyEl.trigger('processStop');

                        return;
                    }

                    // Validate backUrl and allow only root-relative or same-origin absolute URLs
                    const backUrl = data['backUrl'];
                    if (typeof backUrl === 'string' && backUrl) {
                        try {
                            const trimmed = backUrl.trim();
                            const lower = trimmed.toLowerCase();
                            if (lower.indexOf('javascript:') === 0 || lower.indexOf('data:') === 0 || trimmed.indexOf('//') === 0) {
                                // unsafe - fallback
                                $(self.options.minicartSelector).trigger('openMiniCart');
                                bodyEl.trigger('processStop');
                            } else {
                                const allowedPathRegex = /^\/[A-Za-z0-9\-._~!$&'()*+,;=:@\/%]*$/;
                                if (trimmed.charAt(0) === '/') {
                                    const safePath = trimmed.split('\n')[0].split('\r')[0];
                                    if (allowedPathRegex.test(safePath)) {
                                        window.location.pathname = safePath;
                                    } else {
                                        $(self.options.minicartSelector).trigger('openMiniCart');
                                        bodyEl.trigger('processStop');
                                    }
                                } else {
                                    try {
                                        const parsed = new URL(trimmed);
                                        if (parsed.origin === window.location.origin) {
                                            const candidatePath = parsed.pathname || '/';
                                            const candidateSearch = (parsed.search || '').split('\n')[0].split('\r')[0];
                                            const candidateHash = (parsed.hash || '').split('\n')[0].split('\r')[0];
                                            if (allowedPathRegex.test(candidatePath)) {
                                                const lowerSearch = candidateSearch.toLowerCase();
                                                const lowerHash = candidateHash.toLowerCase();
                                                if (lowerSearch.indexOf('javascript:') === -1 && lowerSearch.indexOf('data:') === -1 &&
                                                    lowerHash.indexOf('javascript:') === -1 && lowerHash.indexOf('data:') === -1) {
                                                    window.location.href = parsed.pathname + parsed.search + parsed.hash;
                                                } else {
                                                    $(self.options.minicartSelector).trigger('openMiniCart');
                                                    bodyEl.trigger('processStop');
                                                }
                                            } else {
                                                $(self.options.minicartSelector).trigger('openMiniCart');
                                                bodyEl.trigger('processStop');
                                            }
                                        } else {
                                            $(self.options.minicartSelector).trigger('openMiniCart');
                                            bodyEl.trigger('processStop');
                                        }
                                    } catch (e) {
                                        // parse error -> fallback
                                        $(self.options.minicartSelector).trigger('openMiniCart');
                                        bodyEl.trigger('processStop');
                                    }
                                }
                            }
                        } catch (e) {
                            $(self.options.minicartSelector).trigger('openMiniCart');
                            bodyEl.trigger('processStop');
                        }
                    } else {
                        // fallback: reload
                        location.reload();
                    }
                },
                error: function () {
                    location.reload();
                }
            });
        }
    });

    return $.mage.mixedQuoteWarningPopup;
});
