/* BEGIN Configuration */

if(typeof _cls_config === "undefined") _cls_config = {};

/* BEGIN ajax */
 _cls_config.ajaxRecordMetadata="never";
 _cls_config.ajaxRecordRequestBody="never";
 _cls_config.ajaxRecordRequestHeaders="and(tld,statusgte(400))";
 _cls_config.ajaxRecordResponseBody="never";
 _cls_config.ajaxRecordResponseHeaders="and(tld,statusgte(400))";
 _cls_config.ajaxRecordStats="always";
 _cls_config.interceptAjax=true;
/* END ajax */
/* BEGIN behavior */
  _cls_config.idleEventTimeInterval=-1;
  _cls_config.iframesAutoInject=true;
  _cls_config.recordMouseMoves=true;
  _cls_config.recordScrolls=true;
  _cls_config.reportToStorageAfterUnload=true;
  _cls_config.valueAutoMasking=['creditCard'];
  _cls_config.enableSessionizingByCors=true;
/* END behavior */
/* BEGIN masking */
  _cls_config.blackoutWhenLocationContains=[];
  _cls_config.domMaskAttributesByTag=[];
  _cls_config.domMaskContentByClass=[];
  _cls_config.domMaskContentById=[];
  _cls_config.domMaskOmitByClass=[];
  _cls_config.domMaskSimpleSelector=[];
  _cls_config.domMaskedAttributes=[];
  _cls_config.domMaskOmitById=[];
  _cls_config.maskClassList=[];
  _cls_config.maskCookies=[];
  _cls_config.valueMaskingMode="whitelist";
  _cls_config.maskWhitelistValueByClass=['qty','item-qty'];
  _cls_config.maskWhitelistValueById=["discount-code","discount-code-mobile","email","customer-email","giftcard_recipient_email","giftcard_recipient_email_reenter","email_address","gift-message-whole-to","gift-message-whole-from","gift-message-whole-message-textarea"];
  _cls_config.snapshotImmediatePages = ['*/checkout/complete/*'];
/* END masking */
/* BEGIN required */
  _cls_config.reportURI="https://report.incomm.glassboxdigital.io/glassbox/reporting/035B39EA-3081-7050-9427-D06B64211CF4/cls_report";
/* END required */
/* BEGIN resource */
  _cls_config.enabledByChance=1;
  _cls_config.resourcesRecordEnabled=false;
/* END resource */
/* BEGIN extra */
  _cls_config.clientAttributesEnabled=true;
  _cls_config.clientAttributeMaxLength=350;
  _cls_config.domTamperingDetectionEnabled=true;
  _cls_config.domStartAfter = 3000;
   _cls_config.resourceTimingRecordEnabled=true;
  _cls_config.resourceTimingRecordEnabledByChance=1;
  _cls_config.webVitalsRecordEnabled=true;
  _cls_config.recordAnimation=true;
  _cls_config.captureGlobalObjectsOnSegmentChange=true;
  _cls_config.captureGlobalObjects = [
    'window.dataLayerJson.event',
    'dataLayer.a.pageLoad.pageType'
  ];
  _cls_config.recordHovers=true;
  _cls_config.recordScrollReach=true;

  //00070537
  _cls_config.pageAttributesEnabled=true;

/* END extra */

/* END Configuration */

/* BEGIN V7 detector requirements */
_cls_config.initDetectorOnInteractive = true;
_cls_config.detectorPath = 'https://cdn.glassboxcdn.com/incomm/common/p/';
/* End V7 detector requirements */