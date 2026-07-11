(function(require){
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            directoryRegionUpdater: 'Magento_Directory/js/region-updater'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    waitSeconds: 0,
    map: {
        '*': {
            'ko': 'knockoutjs/knockout',
            'knockout': 'knockoutjs/knockout',
            'mageUtils': 'mage/utils/main',
            'rjsResolver': 'mage/requirejs/resolver',
            'jquery-ui-modules/core': 'jquery/ui-modules/core',
            'jquery-ui-modules/accordion': 'jquery/ui-modules/widgets/accordion',
            'jquery-ui-modules/autocomplete': 'jquery/ui-modules/widgets/autocomplete',
            'jquery-ui-modules/button': 'jquery/ui-modules/widgets/button',
            'jquery-ui-modules/datepicker': 'jquery/ui-modules/widgets/datepicker',
            'jquery-ui-modules/dialog': 'jquery/ui-modules/widgets/dialog',
            'jquery-ui-modules/draggable': 'jquery/ui-modules/widgets/draggable',
            'jquery-ui-modules/droppable': 'jquery/ui-modules/widgets/droppable',
            'jquery-ui-modules/effect-blind': 'jquery/ui-modules/effects/effect-blind',
            'jquery-ui-modules/effect-bounce': 'jquery/ui-modules/effects/effect-bounce',
            'jquery-ui-modules/effect-clip': 'jquery/ui-modules/effects/effect-clip',
            'jquery-ui-modules/effect-drop': 'jquery/ui-modules/effects/effect-drop',
            'jquery-ui-modules/effect-explode': 'jquery/ui-modules/effects/effect-explode',
            'jquery-ui-modules/effect-fade': 'jquery/ui-modules/effects/effect-fade',
            'jquery-ui-modules/effect-fold': 'jquery/ui-modules/effects/effect-fold',
            'jquery-ui-modules/effect-highlight': 'jquery/ui-modules/effects/effect-highlight',
            'jquery-ui-modules/effect-scale': 'jquery/ui-modules/effects/effect-scale',
            'jquery-ui-modules/effect-pulsate': 'jquery/ui-modules/effects/effect-pulsate',
            'jquery-ui-modules/effect-shake': 'jquery/ui-modules/effects/effect-shake',
            'jquery-ui-modules/effect-slide': 'jquery/ui-modules/effects/effect-slide',
            'jquery-ui-modules/effect-transfer': 'jquery/ui-modules/effects/effect-transfer',
            'jquery-ui-modules/effect': 'jquery/ui-modules/effect',
            'jquery-ui-modules/menu': 'jquery/ui-modules/widgets/menu',
            'jquery-ui-modules/mouse': 'jquery/ui-modules/widgets/mouse',
            'jquery-ui-modules/position': 'jquery/ui-modules/position',
            'jquery-ui-modules/progressbar': 'jquery/ui-modules/widgets/progressbar',
            'jquery-ui-modules/resizable': 'jquery/ui-modules/widgets/resizable',
            'jquery-ui-modules/selectable': 'jquery/ui-modules/widgets/selectable',
            'jquery-ui-modules/selectmenu': 'jquery/ui-modules/widgets/selectmenu',
            'jquery-ui-modules/slider': 'jquery/ui-modules/widgets/slider',
            'jquery-ui-modules/sortable': 'jquery/ui-modules/widgets/sortable',
            'jquery-ui-modules/spinner': 'jquery/ui-modules/widgets/spinner',
            'jquery-ui-modules/tabs': 'jquery/ui-modules/widgets/tabs',
            'jquery-ui-modules/tooltip': 'jquery/ui-modules/widgets/tooltip',
            'jquery-ui-modules/widget': 'jquery/ui-modules/widget',
            'jquery-ui-modules/timepicker': 'jquery/timepicker',
            'vimeo': 'vimeo/player',
            'vimeoWrapper': 'vimeo/vimeo-wrapper'
        }
    },
    shim: {
        'mage/adminhtml/backup': ['prototype'],
        'mage/captcha': ['prototype'],
        'mage/new-gallery': ['jquery'],
        'jquery/ui': ['jquery'],
        'matchMedia': {
            'exports': 'mediaCheck'
        },
        'magnifier/magnifier': ['jquery'],
        'vimeo/player': {
            'exports': 'Player'
        }
    },
    paths: {
        'jquery/validate': 'jquery/jquery.validate',
        'jquery/uppy-core': 'jquery/uppy/dist/uppy.min',
        'prototype': 'legacy-build.min',
        'jquery/jquery-storageapi': 'js-storage/storage-wrapper',
        'text': 'mage/requirejs/text',
        'domReady': 'requirejs/domReady',
        'spectrum': 'jquery/spectrum/spectrum',
        'tinycolor': 'jquery/spectrum/tinycolor',
        'jquery-ui-modules': 'jquery/ui-modules'
    },
    config: {
        text: {
            'headers': {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }
};

require(['jquery'], function ($) {
    'use strict';

    $.noConflict();
});

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'rowBuilder':             'Magento_Theme/js/row-builder',
            'toggleAdvanced':         'mage/toggle',
            'translateInline':        'mage/translate-inline',
            'sticky':                 'mage/sticky',
            'tabs':                   'mage/tabs',
            'collapsible':            'mage/collapsible',
            'dropdownDialog':         'mage/dropdown',
            'dropdown':               'mage/dropdowns',
            'accordion':              'mage/accordion',
            'loader':                 'mage/loader',
            'tooltip':                'mage/tooltip',
            'deletableItem':          'mage/deletable-item',
            'itemTable':              'mage/item-table',
            'fieldsetControls':       'mage/fieldset-controls',
            'fieldsetResetControl':   'mage/fieldset-controls',
            'redirectUrl':            'mage/redirect-url',
            'loaderAjax':             'mage/loader',
            'menu':                   'mage/menu',
            'popupWindow':            'mage/popup-window',
            'validation':             'mage/validation/validation',
            'breadcrumbs':            'Magento_Theme/js/view/breadcrumbs',
            'jquery/ui':              'jquery/compat',
            'cookieStatus':           'Magento_Theme/js/cookie-status'
        }
    },
    deps: [
        'mage/common',
        'mage/dataPost',
        'mage/bootstrap'
    ],
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Theme/js/view/add-home-breadcrumb': true
            }
        }
    }
};

/* eslint-disable max-depth */
/**
 * Adds polyfills only for browser contexts which prevents bundlers from including them.
 */
if (typeof window !== 'undefined' && window.document) {
    /**
     * Polyfill localStorage and sessionStorage for browsers that do not support them.
     */
    try {
        if (!window.localStorage || !window.sessionStorage) {
            throw new Error();
        }

        localStorage.setItem('storage_test', 1);
        localStorage.removeItem('storage_test');
    } catch (e) {
        config.deps.push('mage/polyfill');
    }
}
/* eslint-enable max-depth */

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            checkoutBalance:    'Magento_Customer/js/checkout-balance',
            address:            'Magento_Customer/js/address',
            changeEmailPassword: 'Magento_Customer/js/change-email-password',
            passwordStrengthIndicator: 'Magento_Customer/js/password-strength-indicator',
            zxcvbn: 'Magento_Customer/js/zxcvbn',
            addressValidation: 'Magento_Customer/js/addressValidation',
            showPassword: 'Magento_Customer/js/show-password',
            'Magento_Customer/address': 'Magento_Customer/js/address',
            'Magento_Customer/change-email-password': 'Magento_Customer/js/change-email-password',
            globalSessionLoader:    'Magento_Customer/js/customer-global-session-loader.js'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            quickSearch: 'Magento_Search/js/form-mini',
            'Magento_Search/form-mini': 'Magento_Search/js/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            escaper: 'Magento_Security/js/escaper'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            requireCookie: 'Magento_Cookie/js/require-cookie',
            cookieNotices: 'Magento_Cookie/js/notices'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            priceBox:             'Magento_Catalog/js/price-box',
            priceOptionDate:      'Magento_Catalog/js/price-option-date',
            priceOptionFile:      'Magento_Catalog/js/price-option-file',
            priceOptions:         'Magento_Catalog/js/price-options',
            priceUtils:           'Magento_Catalog/js/price-utils'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            compareList:            'Magento_Catalog/js/list',
            relatedProducts:        'Magento_Catalog/js/related-products',
            upsellProducts:         'Magento_Catalog/js/upsell-products',
            productListToolbarForm: 'Magento_Catalog/js/product/list/toolbar',
            catalogGallery:         'Magento_Catalog/js/gallery',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    },
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Catalog/js/product/breadcrumbs': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            creditCardType: 'Magento_Payment/js/cc-type',
            'Magento_Payment/cc-type': 'Magento_Payment/js/cc-type'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftMessage:    'Magento_Sales/js/gift-message',
            ordersReturns:  'Magento_Sales/js/orders-returns',
            'Magento_Sales/gift-message':    'Magento_Sales/js/gift-message',
            'Magento_Sales/orders-returns':  'Magento_Sales/js/orders-returns'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/select-payment-method': {
                'Magento_SalesRule/js/action/select-payment-method-mixin': true
            },
            'Magento_Checkout/js/model/shipping-save-processor': {
                'Magento_SalesRule/js/model/shipping-save-processor-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'Magento_SalesRule/js/model/place-order-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            bundleOption:   'Magento_Bundle/bundle',
            priceBundle:    'Magento_Bundle/js/price-bundle',
            slide:          'Magento_Bundle/js/slide',
            productSummary: 'Magento_Bundle/js/product-summary'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            discountCode:           'Magento_Checkout/js/discount-codes',
            shoppingCart:           'Magento_Checkout/js/shopping-cart',
            regionUpdater:          'Magento_Checkout/js/region-updater',
            sidebar:                'Magento_Checkout/js/sidebar',
            checkoutLoader:         'Magento_Checkout/js/checkout-loader',
            checkoutData:           'Magento_Checkout/js/checkout-data',
            proceedToCheckout:      'Magento_Checkout/js/proceed-to-checkout',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    },
    shim: {
        'Magento_Checkout/js/model/totals' : {
            deps: ['Magento_Customer/js/customer-data']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        cardinaljs: {
            exports: 'Cardinal'
        },
        cardinaljsSandbox: {
            exports: 'Cardinal'
        }
    },
    paths: {
        cardinaljsSandbox: 'https://includestest.ccdc02.com/cardinalcruise/v1/songbird',
        cardinaljs: 'https://songbird.cardinalcommerce.com/edge/v1/songbird'
    }
};


require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            catalogSearch: 'Magento_CatalogSearch/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: [],
    shim: {
        'chartjs/chartjs-adapter-moment': ['moment'],
        'chartjs/es6-shim.min': {},
        'tiny_mce_5/tinymce.min': {
            exports: 'tinyMCE'
        }
    },
    paths: {
        'ui/template': 'Magento_Ui/templates'
    },
    map: {
        '*': {
            uiElement:      'Magento_Ui/js/lib/core/element/element',
            uiCollection:   'Magento_Ui/js/lib/core/collection',
            uiComponent:    'Magento_Ui/js/lib/core/collection',
            uiClass:        'Magento_Ui/js/lib/core/class',
            uiEvents:       'Magento_Ui/js/lib/core/events',
            uiRegistry:     'Magento_Ui/js/lib/registry/registry',
            consoleLogger:  'Magento_Ui/js/lib/logger/console-logger',
            uiLayout:       'Magento_Ui/js/core/renderer/layout',
            buttonAdapter:  'Magento_Ui/js/form/button-adapter',
            chartJs:        'chartjs/Chart.min',
            'chart.js':     'chartjs/Chart.min',
            tinymce:        'tiny_mce_5/tinymce.min',
            wysiwygAdapter: 'mage/adminhtml/wysiwyg/tiny_mce/tinymce5Adapter'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: [
        'Magento_Ui/js/core/app'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            fileElement: 'Magento_CustomerCustomAttributes/file-element'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            addToCart: 'Magento_Msrp/js/msrp'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            captcha: 'Magento_Captcha/js/captcha',
            'Magento_Captcha/captcha': 'Magento_Captcha/js/captcha'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            downloadable: 'Magento_Downloadable/js/downloadable',
            'Magento_Downloadable/downloadable': 'Magento_Downloadable/js/downloadable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            toggleGiftCard: 'Magento_GiftCard/toggle-gift-card'
        }
    },
    'config': {
        'mixins': {
            'Magento_Paypal/js/view/amountProviders/product': {
                'Magento_GiftCard/product-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            wishlist:       'Magento_Wishlist/js/wishlist',
            addToWishlist:  'Magento_Wishlist/js/add-to-wishlist',
            wishlistSearch: 'Magento_Wishlist/js/search'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            configurable: 'Magento_ConfigurableProduct/js/configurable'
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Magento_ConfigurableProduct/js/catalog-add-to-cart-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            advancedSearch: 'Magento_GiftRegistry/advanced-search',
            giftRegistry: 'Magento_GiftRegistry/gift-registry',
            addressOption: 'Magento_GiftRegistry/address-option',
            searchByChanged: 'Magento_GiftRegistry/js/search-by-changed'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            pageCache:  'Magento_PageCache/js/page-cache'
        }
    },
    deps: ['Magento_PageCache/js/form-key-provider']
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderBySkuFailure:  'Magento_AdvancedCheckout/js/order-by-sku-failure',
            fileChooser:        'Magento_AdvancedCheckout/js/file-chooser'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            subscriptionStatusResolver: 'Magento_Newsletter/js/subscription-status-resolver',
            newsletterSignUp:  'Magento_Newsletter/js/newsletter-sign-up'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftCard:       'Magento_GiftCardAccount/js/gift-card',
            paymentMethod:  'Magento_GiftCardAccount/js/payment-method'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            ticker:     'Magento_CatalogEvent/js/ticker',
            carousel:   'Magento_CatalogEvent/js/carousel'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftOptions:    'Magento_GiftMessage/js/gift-options',
            'Magento_GiftMessage/gift-options':    'Magento_GiftMessage/js/gift-options'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftWrapping: 'Magento_GiftWrapping/gift-wrapping'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            groupedProduct: 'Magento_GroupedProduct/js/grouped-product'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'taxToggle': 'Magento_Weee/js/tax-toggle',
            'Magento_Weee/tax-toggle': 'Magento_Weee/js/tax-toggle'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            configurableVariationQty: 'Magento_InventoryConfigurableProductFrontendUi/js/configurable-variation-qty'
        }
    },
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'Magento_InventoryConfigurableProductFrontendUi/js/configurable': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            multiShipping: 'Magento_Multishipping/js/multi-shipping',
            orderOverview: 'Magento_Multishipping/js/overview',
            payment: 'Magento_Multishipping/js/payment',
            billingLoader: 'Magento_Checkout/js/checkout-loader',
            cartUpdate: 'Magento_Checkout/js/action/update-shopping-cart',
            multiShippingBalance: 'Magento_Multishipping/js/multi-shipping-balance'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            recentlyViewedProducts: 'Magento_Reports/js/recently-viewed'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Swatches/js/swatch-renderer': {
                'Magento_InventorySwatchesFrontendUi/js/swatch-renderer': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            multipleWishlist: 'Magento_MultipleWishlist/js/multiple-wishlist'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2023 Adobe
 * All Rights Reserved.
 */
var config = {
    map: {
        '*': {
            'cancelOrderModal': 'Magento_OrderCancellationUi/js/cancel-order-modal'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'slick': 'Magento_PageBuilder/js/resource/slick/slick',
            'jarallax': 'Magento_PageBuilder/js/resource/jarallax/jarallax',
            'jarallaxVideo': 'Magento_PageBuilder/js/resource/jarallax/jarallax-video',
            'Magento_PageBuilder/js/resource/vimeo/player': 'vimeo/player',
            'Magento_PageBuilder/js/resource/vimeo/vimeo-wrapper': 'vimeo/vimeo-wrapper',
            'jarallax-wrapper': 'Magento_PageBuilder/js/resource/jarallax/jarallax-wrapper'
        }
    },
    shim: {
        'Magento_PageBuilder/js/resource/slick/slick': {
            deps: ['jquery']
        },
        'Magento_PageBuilder/js/resource/jarallax/jarallax-video': {
            deps: ['jarallax-wrapper', 'vimeoWrapper']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Customer/js/customer-data': {
                'Magento_Persistent/js/view/customer-data-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            loadPlayer: 'Magento_ProductVideo/js/load-player',
            fotoramaVideoEvents: 'Magento_ProductVideo/js/fotorama-add-video-events',
            'vimeoWrapper': 'vimeo/vimeo-wrapper'
        }
    },
    shim: {
        vimeoAPI: {},
        'Magento_ProductVideo/js/load-player': {
            deps: ['vimeoWrapper']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/place-order': {
                'Magento_ReCaptchaCheckout/js/model/place-order-mixin': true
            },
            'Magento_ReCaptchaWebapiUi/js/webapiReCaptchaRegistry': {
                'Magento_ReCaptchaCheckout/js/webapiReCaptchaRegistry-mixin': true
            }
        }
    }
};


require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/*eslint strict: ["error", "global"]*/

'use strict';

var config = {
    config: {
        mixins: {
            'Magento_Ui/js/view/messages': {
                'Magento_ReCaptchaFrontendUi/js/ui-messages-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'Magento_GiftCardAccount/js/action/set-gift-card-information': {
                'Magento_ReCaptchaGiftCard/js/action/set-gift-card-information-mixin': true
            },
            'Magento_GiftCardAccount/js/action/get-gift-card-information': {
                'Magento_ReCaptchaGiftCard/js/action/get-gift-card-information-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'Magento_Paypal/js/view/payment/method-renderer/payflowpro-method': {
                'Magento_ReCaptchaPaypal/js/payflowpro-method-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'jquery': {
                'Magento_ReCaptchaWebapiUi/js/jquery-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            removePoints: 'Magento_Reward/js/action/remove-points'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            rmaTrackInfo:   'Magento_Rma/rma-track-info',
            rmaCreate:      'Magento_Rma/rma-create'
        }
    },
    shim: {
        'Magento_Rma/rma-track-info': {
            deps: ['Magento_Rma/set-options']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            scriptLoader: 'Magento_PaymentServicesPaypal/js/lib/script-loader-wrapper',
            paymentSdkLoader: 'Magento_PaymentServicesPaypal/js/lib/payment-sdk-loader',
        }
    },
    shim: {
        'Magento_PaymentServicesPaypal/js/lib/script-loader': {
            init: function () {
                'use strict';

                return {
                    load: window.paypalLoadScript,
                    loadCustom: window.paypalLoadCustomScript
                };
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2022 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 */

var config = {
    map: {
        '*': {
            'Magento_Vault/js/view/payment/vault': 'Magento_PaymentServicesPaypal/js/view/payment/vault'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/model/payment-service': {
                'Magento_PaymentServicesPaypal/js/model/payment-service-mixin': true
            },
            'Magento_Checkout/js/model/step-navigator': {
                'Magento_PaymentServicesPaypal/js/model/step-navigator-mixin': true
            },
            'Magento_Checkout/js/view/form/element/email': {
                'Magento_PaymentServicesPaypal/js/view/form/element/email-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Magento_PaymentServicesPaypal/js/view/shipping-mixin': true
            },
            'Magento_Checkout/js/view/shipping-information': {
                'Magento_PaymentServicesPaypal/js/view/shipping-information-mixin': true
            }
        }
    },
    paths: {
        fastlane: 'https://www.paypalobjects.com/connect-boba'
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            mageTranslationDictionary: 'Magento_Translation/js/mage-translation-dictionary'
        }
    },
    deps: [
        'mageTranslationDictionary'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            editTrigger: 'mage/edit-trigger',
            addClass: 'Magento_Translation/js/add-class',
            'Magento_Translation/add-class': 'Magento_Translation/js/add-class'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        'Dotdigitalgroup_Sms': {
            ddTelephoneValidation: 'Dotdigitalgroup_Sms/js/model/telephoneValidation',
            ddTelephoneValidationError: 'Dotdigitalgroup_Sms/js/model/telephoneValidationError'
        }
    },

    paths: {
        'intlTelInput': 'Dotdigitalgroup_Sms/js/intlTelInput',
        'intlTelInputUtils': 'Dotdigitalgroup_Sms/js/utils',
        'internationalTelephoneInput': 'Dotdigitalgroup_Sms/js/internationalTelephoneInput'
    },

    shim: {
        'intlTelInput': {
            'deps': ['jquery', 'knockout']
        },
        'internationalTelephoneInput': {
            'deps': ['jquery', 'intlTelInput']
        }
    },

    config: {
        mixins: {
            'mage/validation': {
                'Dotdigitalgroup_Sms/js/telephoneValidatorAccount': true
            },
            'Magento_Ui/js/form/element/abstract': {
                'Dotdigitalgroup_Sms/js/setAdditionalParams': true
            },
            'Magento_Ui/js/lib/validation/validator': {
                'Dotdigitalgroup_Sms/js/telephoneValidatorCheckout': true
            },
            'Magento_Checkout/js/action/select-shipping-address': {
                'Dotdigitalgroup_Sms/js/telephoneValidatorShipping': true
            },
            'Magento_Checkout/js/model/shipping-save-processor/payload-extender': {
                'Dotdigitalgroup_Sms/js/model/shipping-save-processor/setConsentMixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Dotdigitalgroup_Sms/js/view/telephoneValidatorConsent': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */

var config = {
    'map': {
        '*': {
            'product-accessibility': 'InComm_Catalog/js/product-accessibility'
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'InComm_Catalog/js/catalog-add-to-cart-mixin': true
            }
        }
    }
};


require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/quote': {
                'InComm_Multishipping/js/model/quote-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'InComm_Multishipping/js/view/shipping-multishipping-mixin': true
            },
            'Magento_Checkout/js/action/set-shipping-information': {
                'InComm_Multishipping/js/action/set-shipping-information-mixin': true
            },
            'Magento_Checkout/js/view/shipping-information': {
                'InComm_Multishipping/js/view/shipping-information-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            'Magento_Banner/js/view/banner': 'InComm_Banner/js/view/banner'
        }
    },
    config: {
        mixins: {
            'Magento_Banner/js/model/banner': {
                'InComm_Banner/js/model/banner-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    config: {
        mixins: {
            'Magento_ReCaptchaFrontendUi/js/reCaptcha': {
                'InComm_Captcha/js/reCaptcha': true
            },
        }
    }
}

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            'Magento_Checkout/template/payment-methods/list.html': 'InComm_Checkout/template/payment-methods/list.html',
            'incomm-clear-checkout-data': 'InComm_Checkout/js/clear-checkout-data',
            'incomm-gift-option': 'InComm_Checkout/js/model/gift-option-delivery',
            'incomm-block-loader': 'InComm_Checkout/js/cart-block-loader',
        }
    },
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/summary/abstract-total': {
                'InComm_Checkout/js/view/summary/abstract-total-mixin': true
            },
            'Magento_Checkout/js/view/summary/cart-items': {
                'InComm_Checkout/js/view/summary/cart-items-mixin': true
            },
            'Magento_Checkout/js/view/summary/item/details': {
                'InComm_Checkout/js/view/summary/item/details-mixin': true
            },
            'Magento_Checkout/js/sidebar': {
                'InComm_Checkout/js/sidebar-mixin': true
            },
            'Magento_Checkout/js/view/minicart': {
                'InComm_Checkout/js/view/minicart-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'InComm_Checkout/js/view/shipping-mixin': true
            },
            'mage/validation': {
                'InComm_Checkout/js/shipping-input-validation': true
            },
            'Magento_Ui/js/lib/validation/rules': {
                'InComm_Checkout/js/shipping-input-validation-ui': true
            },
            'Magento_Checkout/js/model/step-navigator': {
                'InComm_Checkout/js/model/step-navigator-mixin': true
            },
            'Magento_Checkout/js/view/estimation': {
                'InComm_Checkout/js/view/estimation-mixin': true
            },
            'Magento_GiftMessage/js/view/gift-message': {
                'InComm_Checkout/js/view/gift-message-mixin': true
            },
            'Magento_Checkout/js/view/estimation': {
                'InComm_Checkout/js/estimation-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/checkout-data-resolver': {
                'InComm_ShippingFeePricing/js/model/checkout-data-resolver-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'InComm_ShippingFeePricing/js/view/shipping-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {

var config = {
    config: {
        mixins: {
            'Dotdigitalgroup_Email/js/webBehaviorTracking': {
                'InComm_Dotdigital/js/webBehaviorTracking-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'jqueryEmailAutocomplete': 'InComm_EmailAutocomplete/js/lib/jquery-email-autocomplete',
            'emailSuggestions': 'InComm_EmailAutocomplete/js/email-suggestions'
        }
    },
    shim: {
        'jqueryEmailAutocomplete': {
            deps: ['jquery']
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    deps: [
        'InComm_Framework/js/pagebuilder-background-lazy'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            'gift-message-link': 'InComm_GiftMessage/js/gift-message-link'
        }
    },
    config: {
        mixins: {
            'Magento_GiftMessage/js/model/url-builder': {
                'InComm_GiftMessage/js/model/gift-options-mixin': true
            },
            'Magento_GiftMessage/js/model/gift-message': {
                'InComm_GiftMessage/js/model/gift-options-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */

var config = {
    'config': {
        'mixins': {
            'Magento_GiftCard/toggle-gift-card': {
                'InComm_PurchaseFee/js/view/toggle-gift-card-mixin': true
            }
        }
    },
    map: {
        '*': {
            purchaseFeePrice: 'InComm_PurchaseFee/js/view/purchase-fee-price'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            validateDigits: 'InComm_GiftCard/js/allow-digits-only',
            validateDigitsDecimalPoint: 'InComm_GiftCard/js/allow-digits-decimal-point-only',
            giftMessageValidate: 'InComm_GiftCard/js/gift-message-validate',
            messageDuplicator: 'InComm_GiftCard/js/giftcard-message-duplicator',
            productAnimated: 'InComm_GiftCard/js/product-animated'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/minicart': {
                'InComm_GiftCard/js/minicart-mixin': true
            },
            'Magento_Msrp/js/msrp': {
                'InComm_GiftCard/js/msrp-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        "*": {
            "mgz.owlcarousel": "Magezon_Core/js/owl.carousel.min"
        }
    },
    shim: {
       "mgz.owlcarousel": {
            deps:['jquery']
        },
        "Magezon_Core/js/owl.carousel.min": {
            deps:['jquery']
        },
        'Magezon_Core/js/jquery-scrolltofixed-min': {
            deps: ['jquery']
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            'order-tracker-modal': 'InComm_OrderTracker/js/order-tracker-modal',
            'incomm-pagination': 'InComm_OrderTracker/js/pagination-tracker'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            'Magento_SalesRule/js/action/set-coupon-code': 'InComm_SecurePay/js/action/set-coupon-code',
            'Magento_SalesRule/js/action/cancel-coupon': 'InComm_SecurePay/js/action/cancel-coupon',
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        "*": {
            "InComm_Checkout/js/view/shipping-mixin": "InComm_OneStepCheckout/js/view/shipping-mixin",
            'Magento_Checkout/js/view/shipping-address/list': 'InComm_OneStepCheckout/js/view/shipping-address/list'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/payment': {
                'InComm_OneStepCheckout/js/view/payment-mixin': true
            },
            'Magento_Checkout/js/view/summary/cart-items': {
                'InComm_OneStepCheckout/js/view/summary/cart-items-mixin': true
            },
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'resendEmail': 'InComm_ResendEmail/js/resend-email'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            cardValueDiscount: 'InComm_ProductLabel/js/card-value-discount'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'countdownTimer': 'InComm_PromoBar/js/countdown-timer'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'InComm_PromoBogo/js/view/shipping-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'reloadsPortal': 'InComm_ReloadsPortal/js/reloads-portal',
            'validateInputs': 'InComm_ReloadsPortal/js/validation-inputs',
            'validateToCart': 'InComm_ReloadsPortal/js/validation-to-cart',
            'configurableThemeColor': 'InComm_ReloadsPortal/js/configurable-theme-color'
        }
    },
    config: {
        mixins: {
            'mage/validation': {
                'InComm_ReloadsPortal/js/mage/validation-mixin': true
            },
            'Magento_Checkout/js/view/cart-item-renderer': {
                'InComm_ReloadsPortal/js/cart-item-renderer-mixin': true
            },
            'Magento_Checkout/js/view/summary/item/details': {
                 'InComm_ReloadsPortal/js/view/checkout/summary/item/item-details-mixin': true
            },
            'Magento_Tax/js/view/checkout/summary/subtotal': {
                'InComm_ReloadsPortal/js/view/checkout/summary/subtotal-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'InComm_ReloadsPortal/js/view/shipping-mixin': true
            },
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'emailMultirecipient': 'InComm_Multirecipient/js/email-multirecipient',
            'emailMultirecipientConfig': 'InComm_Multirecipient/js/email-multirecipient-config'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */

var config = {
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'InComm_OrderData/js/catalog-add-to-cart-mixin': true
            },
            'InComm_GiftMessage/js/view/gift-message-pdp': {
                'InComm_OrderData/js/order-data-pdp/gift-message-pdp-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'ssoInfo': 'InComm_SSO/js/sso-info'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'sendDate': 'InComm_ScheduledDelivery/js/send-date',
            'mixedQuotePopup': 'InComm_ScheduledDelivery/js/view/mixed-quote-warning-popup',
            'cancelConfirmation': 'InComm_ScheduledDelivery/js/model/cancel-confirmation'
        }
    },
    config: {
        mixins: {
            'mage/validation': {
                'InComm_ScheduledDelivery/js/send_date/validation-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */

var config = {
    config: {
        mixins: {
            'Magento_Customer/js/customer-data': {
                'InComm_SessionTimeout/js/timeout-customer-data-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            'set-solid-cookie': 'InComm_SolidTracker/js/model/set-solid-cookie'
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            successPageRedirectUrl: 'InComm_SuccessPageRedirectUrl/js/success-page-redirect-url',
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            'incomm-sweepstake': 'InComm_Sweepstake/js/incomm-sweepstake'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'ninjamenus': 'Magezon_NinjaMenus/js/ninjamenus',
            'ninjamenustop': 'Magezon_NinjaMenus/js/ninjamenustop',
            'Magento_Catalog/js/product/breadcrumbs': 'Magezon_NinjaMenus/js/product/breadcrumbs'
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'customDesignGallery': 'InComm_CustomDesign/js/custom-design-gallery',
            'customDesignAllowedAmount': 'InComm_CustomDesign/js/custom-design-allowed-amount',
            'galleryLoader': 'InComm_CustomDesign/js/gallery-loader'
        }
    },
    config: {
        mixins: {
            'mage/calendar': {
                'InComm_CustomDesign/js/lib/mage/calendar-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            magezonBuilder: 'Magezon_Builder/js/magezon-builder',
            jarallax: 'Magezon_Builder/js/jarallax/jarallax.min',
            jarallaxVideo: 'Magezon_Builder/js/jarallax/jarallax-video',
            waypoints: 'Magezon_Builder/js/waypoints/jquery.waypoints',
            mgzTabs: 'Magezon_Builder/js/tabs'
        }
    },
    shim: {
        jarallax: {
            exports: 'jarallax',
            deps: ['jquery']
        },
        jarallaxVideo: {
            deps: ['jarallax']
        },
        waypoints: {
            deps: ['jarallax', 'jquery']
        },
        magezonBuilder: {
            deps: ['waypoints', 'mage/bootstrap']
        },
        'Magezon_Builder/js/magezon-builder': {
            deps: ['jquery', 'waypoints', 'mage/bootstrap']
        },
        'Magezon_Builder/js/carousel': {
            deps: ['jquery']
        },
        'Magezon_Builder/js/countdown': {
            deps: ['jquery']
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    config: {
        mixins: {
            'Magezon_NinjaMenus/js/ninjamenustop': {
                'InComm_MagezonNinjaMenus/js/ninjamenustop-mixin': true
            },
            'Magezon_NinjaMenus/js/ninjamenus': {
                'InComm_MagezonNinjaMenus/js/ninjamenus-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: [
        'Magento_Theme/js/theme'
    ]
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'vanilla-sections': 'Magento_Theme/js/vanilla-sections',
            'footer-sections': 'Magento_Theme/js/footer-sections',
            'header-sections': 'Magento_Theme/js/header-sections',
            'admin-scripts': 'Magento_Theme/js/admin-scripts'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    config: {
        mixins: {
            'Magento_Customer/js/address': {
                'Magento_Customer/js/address-mixin': true
            },
            'mage/validation': {
                'Magento_Customer/js/password-input-validation': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            validateSearch: 'Magento_Search/js/disallow-digits',
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    map: {
        '*': {
            'leaving-site': 'Magento_Cms/js/leaving-site',
            'incomm-scroll-to-anchor': 'Magento_Cms/js/scroll-to-anchor'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'galleryLoader': 'Magento_Catalog/js/gallery-loader'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    'config': {
        'mixins': {
            'Magento_SalesRule/js/view/payment/discount': {
                'Magento_SalesRule/js/view/payment/discount-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/form/element/email': {
                'Magento_Checkout/js/view/form/element/email-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Magento_Checkout/js/view/shipping-mixin': true
            }
        }
    },
    map: {
        '*': {
            'melissaAutocomplete': 'InComm_Melissa/js/model/melissa-autocomplete'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */

var config = {
    map: {
        '*': {
            'inputmask': 'Magento_Ui/js/jquery.mask.min',
            'urlPolyfill': 'InComm_Catalog/js/url-polyfill'
        }
    },
    shim: {
        'inputmask': {
            deps: ['jquery']
        },
        'urlPolyfill': {
            deps: ['jquery']
        }
    },
    config: {
        mixins: {
            'Magento_Ui/js/form/element/post-code': {
                'Magento_Ui/js/form/element/post-code-mixin': true
            },
            'Magento_Ui/js/form/element/abstract': {
                'Magento_Ui/js/form/element/phone-mask-mixin': true,
                'Magento_Ui/js/form/element/abstract-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'addressEdit': 'Magento_CustomerCustomAttributes/js/customer/address/address-edit',
            'formEdit': 'Magento_CustomerCustomAttributes/js/customer/form/form-edit',
            'formRegister': 'Magento_CustomerCustomAttributes/js/customer/form/form-register'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © InComm, Inc. All rights reserved.
 */
var config = {
    'config': {
        'mixins': {
            'Magento_Tax/js/view/checkout/summary/shipping': {
                'Magento_Tax/js/view/checkout/summary/shipping-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'shopByMobile': 'Magento_LayeredNavigation/js/shop-by-mobile',
            'layerState': 'Magento_LayeredNavigation/js/layer-state'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    'map': {
        '*': {
            'device-styles-ios': 'js/ios/device-styles',
            'entriesPolyfill': 'js/entries-polyfill',
            'stickyHeader': 'js/sticky-header',
            'emailTrim': 'js/email-trim',
            "menu": "js/menu",
            'column-bgimage': 'js/column-bgimage',
            'dompurify': 'js/dompurify.min'

        }
    },
    deps: [
        'js/column-bgimage'
    ],
    shim: {
        'ko': {
            deps: ['entriesPolyfill']
        },
        'dompurify': {
            exports: 'DOMPurify'
        }
    },
    config: {
        mixins: {
            'mage/collapsible': {
                'js/mage/collapsible-mixin': true
            },
            'mage/validation': {
                'js/mage/validation-mixin': true
            }
        }
    }
};

require.config(config);
})();



})(require);