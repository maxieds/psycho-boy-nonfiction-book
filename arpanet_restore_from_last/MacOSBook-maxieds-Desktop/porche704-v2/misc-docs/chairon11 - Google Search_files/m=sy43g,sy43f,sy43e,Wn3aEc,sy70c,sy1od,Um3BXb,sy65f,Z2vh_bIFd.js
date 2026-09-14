loaded_h_0(function(_){var window=this;
_.JS=class extends _.m{constructor(a){super(a)}Ybc(){return _.Xe(this,_.rK,2)}};_.JS.prototype.rb="X2sNs";
_.DZh=function(a){return(0,_.vAe)(a)?a.getId():(0,_.ZEd)(a)?a.cW():a.getUniqueId()};
_.CZh=_.y("Wn3aEc",[]);
_.v("Wn3aEc");
var EZh;EZh=function(a){if((0,_.uAe)(a))return a;if((0,_.ZEd)(a)){let c,d;a=(c=a.Da())==null?void 0:(d=c.Aa())==null?void 0:d.getExtension(_.sK);if(!a)return null}var b;return a.getType()===1?(b=a.getImage())!=null?b:null:null};
_.FZh=class extends _.wi{static Ta(){return{If:{E5c:_.JS}}}constructor(a){super();this.oa=a.If.E5c;this.Aa=_.Df();this.Ba=_.Df();this.results=new Map;a:{if(this.getData("vnora").Ob()){a=_.Im("WA6vPb",this.Laa());if(a.length===1){a=Number(_.ng(a[0],"count"));break a}a=_.Im("LgL7He",this.Laa());if(a.length===1){a=Number(_.ng(a[0],"count"));break a}}a=_.Cd(this.getData("count"),-1)}this.Ca=a}Eda(){if(this.Ca<0){let a=this.oa?_.p(this.oa,_.rK,2):null;return a?_.Ig(a.xD()):_.Ig([])}return this.Aa.promise}xD(){return this.Eda().then(a=>
a.map(EZh).filter(b=>b!=null))}cIc(){return this.Ba.promise}uke(){return this.cIc().then(a=>{var b=new Map;for(let [c,d]of a){a=c;let e=EZh(d);e&&b.set(a,e)}return b})}xC(a,b){b&&_.DZh(b)&&this.results.set(a,b);if(--this.Ca===0){this.Aa.resolve(Array.from(this.results.entries()).sort((c,d)=>_.kKa(c[0],d[0])).map(c=>c[1]));a=new Map;for(let [c,d]of this.results.entries()){b=c;let e=d;e&&a.set(b,e)}this.Ba.resolve(a)}}};_.qs(_.CZh,_.FZh);
_.x();
_.Ijr=_.y("Um3BXb",[_.CZh]);
_.gG=function(a,b=!1,c){var d=a.getRoot().el();_.Wg(d,"EormBc",new OCd(a,b,c))};var OCd=class{constructor(a,b,c){this.logVisibility=b;this.kJ=c;this.gha=a}};
_.v("Um3BXb");
var zbG,xbG,AbG;_.ybG=function({construct:a}){xbG.push({construct:a})};zbG=_.Ub(_.qK);xbG=[];
AbG=class extends _.Cs{static Ta(){return{model:{aba:_.FZh},If:{NXc:_.qK}}}constructor(a){super(a.Oa);this.Aa=!this.getData("ni").Ob();this.uB=a.If.NXc;if((this.Ca=this.getData("au").Ob())&&this.uB){var b=(b=this.getRoot().closest(_.Ao("jsname","uK8Ylc")).el())?_.ng(b,"ved"):null;let e=zbG(this.uB.serialize());if(b&&e&&e.wk()){var c;(c=e.getImage())!=null&&_.eh(c,5,b)}this.uB=e}a.model.aba.xC(this.getRoot().el(),this.uB);_.gG(this);var d;(c=(d=this.uB)==null?void 0:d.getImage())&&this.trigger("cEfxe",
c==null?void 0:c.getUniqueId());this.v8(a)}Da(a){var b=a.targetElement.parent();a=_.Jm("srrRv",this.getRoot().el());b=_.Is(this,b.eq(0),"YsWoif").el();_.Rv([new _.ko(b,"show")],{triggerElement:b,userAction:9});_.Yg(b,"BUYwVb");a==null&&_.jn(b,"display","inline-block")}Ea(a){var b=a.targetElement;a=a.targetElement.parent();a=_.Is(this,a.eq(0),"YsWoif").el();_.Rv([new _.ko(a,"hide")],{triggerElement:b.eq(0).el(),userAction:9});_.jn(a,"display","none")}Tc(a){if(this.uB&&this.uB.getId()){var b,c;(c=(b=
a.event).preventDefault)==null||c.call(b);var d,e;(e=(d=a.event).stopPropagation)==null||e.call(d);this.trigger("PdWSXe",{Cu:a.event});var f;(a=(f=this.uB)==null?void 0:f.getImage())&&this.trigger("Kc2lDe",a==null?void 0:a.getUniqueId())}}Wf(){this.notify("BUYwVb")}Df(){this.Aa||(_.Rv([new _.ko(this.getRoot().el(),"show")]),this.Aa=!0)}hidden(){}v8(a){for(let b of xbG)b.construct(this,a)}Ba(){this.notify("BUYwVb");var a=!_.hFu;this.getRoot().setStyle("display",a?"inline-flex":"unset");this.getRoot().removeAttr("aria-hidden");
this.Df()}};AbG.prototype.$wa$bNsLWe=function(){return this.Ba};AbG.prototype.$wa$L6cTce=function(){return this.hidden};AbG.prototype.$wa$TSZdd=function(){return this.Df};AbG.prototype.$wa$AwdEqd=function(){return this.Wf};AbG.prototype.$wa$h5M12e=function(){return this.Tc};AbG.prototype.$wa$XEuVS=function(){return this.Ea};AbG.prototype.$wa$RrAr1=function(){return this.Da};_.Es(_.Ijr,AbG);
var BbG=function(a,b,c){c=b.detail.vhid.replace("e-","")===c;var d=a.getRoot().closest("[data-id]");(d==null||d.filter(e=>e.dataset.id===b.detail.vid).isEmpty())&&b.detail.vid!=="mosaic"&&c||a.Ya("tdeeNb").toggleClass("srrRv",c)},DbG=function(a,b){if(!a.closest(g=>CbG.some(h=>g.classList.contains(h))).isEmpty()){var c=a.el().getBoundingClientRect();a=a.parent();a.hasClass("dECn0b")&&(a=a.closest(".T62xob"));var d=a.el().getBoundingClientRect();a=c.top===d.top;var e=Math.abs(d.bottom-c.bottom)<8,f=
Math.abs(d.left-c.left)<8;c=Math.abs(d.right-c.right)<8;b.toggleClass("Xn9Tkc",a&&f);b.toggleClass("oGwWse",a&&c);b.toggleClass("y0jvId",e&&c);b.toggleClass("lM9tvf",e&&f)}},CbG=["DhGrzc","l5X1Ye","o6uAG","OXEsB","T62xob"];
_.ybG({construct(a){var b=_.qm(a.getData("docid"));b&&(document.addEventListener("viewerUpdated",f=>{BbG(a,f,b)}),document.addEventListener("viewerClosed",()=>{a.Ya("tdeeNb").toggleClass("srrRv",!1)}));var c=a.getRoot();_.Sg(c.el(),"qWWJ8e",()=>{DbG(c,a.Ya("tdeeNb"))});DbG(c,a.Ya("tdeeNb"));var d=null,e=a.Ya("qQjpJ").el();e&&(e.addEventListener("mouseenter",()=>{d===null&&(d=(0,_.po)(()=>{c.toggleClass("dB3j8",!0);d=null},50))}),e.addEventListener("mouseleave",()=>{d&&((0,_.qo)(d),d=null);c.toggleClass("dB3j8",
!1)}))}});
_.x();
_.I_q=_.y("Z2vhDb",[]);
_.v("Z2vhDb");
var xFD=_.Qx("xg558"),yFD=_.Qx("wCwf3e");var zFD=class extends _.Cs{static Ta(){return{Ks:{Cec:xFD,ipc:yFD}}}constructor(a){super(a.Oa);this.Cec=a.Ks.Cec;this.ipc=a.Ks.ipc}oa(a){this.Cec&&this.Cec(a)}Aa(a){this.ipc&&this.ipc(a)}};zFD.prototype.$wa$RAHB1d=function(){return this.Aa};zFD.prototype.$wa$rN5So=function(){return this.oa};_.Es(_.I_q,zFD);
_.x();
_.Ljr=_.y("XN4wKf",[_.Tr]);
_.v("XN4wKf");
var lcG=class extends _.Cs{static Ta(){return{service:{ef:_.Zv}}}constructor(a){super(a.Oa);this.ef=a.service.ef}oa(){var a=this.getRoot().closest(_.zo("Lv2Cle"));_.ji(this.getData("irtcp"),!1)&&a.find(".ZGKPYc").setStyle("max-height","unset");var b=_.Io(a,"[data-ni]");_.Yg(a.el(),"XGRTMd");_.Yg(a.el(),"DdQV6c");this.getRoot().hide();_.Rv([new _.ko(this.getRoot().el(),"hide")]);_.Sv(this.getRoot().el());a=_.Io(a,".aQ9ZH");a.show();_.Rv([new _.ko(a.el(),"show")]);this.ef.QP(b);return!1}};
lcG.prototype.$wa$in3Ghc=function(){return this.oa};_.Es(_.Ljr,lcG);
_.x();
});
// Google Inc.
