loaded_h_0(function(_){var window=this;
_.Hjc=_.y("eX5ure",[_.Cr]);
_.v("eX5ure");
var Ijc=class extends _.ys{static Ta(){return{service:{Ub:_.Yu}}}constructor(a){super(a.Oa);this.parentElement=null;this.root=this.getRoot().el();this.id=this.getRoot().el().getAttribute("data-id");this.Ca=this.getRoot().el().hasAttribute("data-dc");this.Da=this.getRoot().el().hasAttribute("data-dw");this.oa=_.ji(this.getRoot().getData("backDisabled"),!1);this.Ub=a.service.Ub;this.registerContent()}Ba(){return this.root}Sb(){}registerContent(){this.trigger("jxvro",{controller:this})}Ea(a){a=a.wb.el();
this.trigger("dBhwS",{triggerElement:a})}QHd(a){this.parentElement=a}getId(){return this.id}isDefault(){return this.Ca}hide(){_.An(this.root,!1)}EKc(a){this.hide();_.We(this.root)&&_.Zp(_.aq(this.Ub.oa(),this.root,2),a).log()}show(a){_.jn(this.root,{display:"block"});var b=this.Ya("LBJcic").el(),c=this.Ya("X0x7he").el();(b||this.oa)&&c&&(!this.oa&&b&&(a?_.jn(b,{display:"inline-block"}):_.An(b,!1)),b=this.Ya("vDg59d").el(),this.Da?(a=a?220:248,b&&(a-=48),_.jn(c,"width",`${a}px`)):b&&_.jn(c,"width",
`calc(100% - ${48+(a?28:0)}px)`))}O_b(a,b){this.show(a);_.We(this.root)&&_.Zp(_.aq(this.Ub.oa(),this.root,1),b).log()}oCc(a){var b=a.event.target,c,d,e=(d=(c=a.data)==null?void 0:c.contentId)!=null?d:b.getAttribute("data-id");this.parentElement&&this.ud(_.dy,this.parentElement,_.To).then(f=>f.Ha(e,b))}Aa(a){var b=a.wb.el();this.parentElement&&this.ud(_.dy,this.parentElement,_.To).then(c=>{if(c.Ca.length>0){c.Aa.EKc(b);let d=c.Ca.pop(),e=c.Ca.length>0;c.Aa=d;d.O_b(e,b)}})}};
Ijc.prototype.$wa$iO11jf=function(){return this.Aa};Ijc.prototype.$wa$uOhSee=function(){return this.oCc};Ijc.prototype.$wa$ZYIfFd=function(){return this.hide};Ijc.prototype.$wa$paynGb=function(){return this.isDefault};Ijc.prototype.$wa$pTuYge=function(){return this.getId};Ijc.prototype.$wa$QQtcRd=function(){return this.Ea};Ijc.prototype.$wa$CHHOAf=function(){return this.registerContent};Ijc.prototype.$wa$k4Iseb=function(){return this.Sb};Ijc.prototype.$wa$xdy80=function(){return this.Ba};
_.As(_.Hjc,Ijc);
_.x();
});
// Google Inc.
