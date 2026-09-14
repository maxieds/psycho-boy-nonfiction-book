loaded_h_0(function(_){var window=this;
_.eHo=_.y("E23uIf",[_.Z3a]);
_.xFo=_.y("p8SIIc",[]);
_.wFo={state:0,Tca:void 0,i_a:void 0,b5:void 0};
_.v("E23uIf");
var hHo,kHo,iHo;hHo=function(a,b,c){_.MKi&&a.Da.isAvailable()&&a.Da.Aa();a.oa.value={state:1,Tca:b,i_a:_.fHo(a,_.gHo(a,b)),b5:c}};_.fHo=function(a,b){return b.map(c=>a.Ma.has(c)?a.Ma.get(c):c).filter(c=>a.sourceMap.has(c)).map(c=>({html:a.sourceMap.get(c)}))};_.gHo=function(a,b){return b==="N5sdyd"?[...a.sourceMap.keys()]:a.Aa.has(b)?a.Aa.get(b):[]};
_.jHo=class extends _.wi{static Ta(){return{service:{Prb:_.mGo},Dp:{Xge:_.xFo}}}constructor(a){super();this.Ea=null;this.sourceMap=new Map;this.Aa=new Map;this.Ma=new Map;this.Ca=new Map;var b=a.Dp.Xge;this.oa=_.WY(_.wFo);this.Na=_.WY({count:0});this.Da=a.service.Prb;b&&new iHo(b,this)}p$a(a){this.oa.subscribe(a)}Sa(a,b){if(!this.Ca.has(a)){let c=this.Aa.has(a);this.Ca.set(a,_.WY({TQb:c}))}this.Ca.get(a).subscribe(b)}Pa(a){return this.Na.subscribe(a)}Ha(a,b){this.oa.value.state===1&&this.oa.value.Tca===
a?this.Ba(b):hHo(this,a,b)}Ba(a){this.oa.value.state!==0&&(_.MKi&&this.Da.isAvailable()&&this.Da.Ba(),this.oa.value={state:0,Tca:void 0,i_a:void 0,b5:a})}};kHo=function(a,b){a.oa||(a.oa=!0,b(),a.oa=!1)};iHo=class{constructor(a,b){this.Ba=a;this.Aa=b;this.oa=!1;b.p$a(c=>{kHo(this,()=>{this.Ba.setState(c)})});a.Poc(c=>{kHo(this,()=>{c.state===1&&c.Tca!==void 0?hHo(this.Aa,c.Tca,c.b5):this.Aa.Ba(c.b5)})})}};_.qs(_.eHo,_.jHo);
_.x();
_.kyr=_.y("Cc4ex",[]);
_.dMo=!!(_.Ji[52]>>18&1);_.eMo=!!(_.Ji[52]>>19&1);
_.v("Cc4ex");
var gks=async function(a){var b=a.getRoot().hb().closest(_.aMi);return b?(b=b.querySelector(_.DU("Y0vxu")))?a.getModel(_.eHo,b):null:null},hks=function(a,b){a.oa=b;(a=a.getRoot().hb().querySelector(_.DU("NnAfwf")))&&b>0?a.textContent=`+${b}`:a&&(a.textContent="")},kks=async function(a){var b=(0,_.Wf)(),c=b();b=b(1);try{if(a.iA=a.iA||b(await c(gks(a))),a.iA){var d=_.gHo(a.iA,"N5sdyd"),e=d.length,f=a.iA,g=iks(a),h=jks(f,d);d=[];f=[];for(var k of h)k!==""&&(d.includes(k)?f.push(k):d.push(k));var l=d.concat(f);
let q=Math.min(l.length,3);h=0;for(k=q-1;k>=0;k--){let r=g[k];r||(r=g[0].cloneNode(!0),g[0].parentElement.prepend(r));r.style.display="block";let t=r.firstElementChild;t.style.display="block";let A=l[k];t.tagName.toLowerCase()==="img"&&(t.src=A);h++}var n=iks(a);l=3;for(g=0;g<n.length;g++){let r=n[g];g>=q&&(r.style.display="none");r.style.zIndex=l.toString();l--}hks(a,e-h);a.Aa=!0}}finally{c()}},iks=function(a){return Array.from(a.getRoot().hb().querySelectorAll(_.DU("i1Vy9")))},jks=function(a,b){return _.fHo(a,
b).map(c=>c.html).map(c=>(c=c.querySelector(".XNo5Ab"))?c.src||c.getAttribute("data-src")||"":"")};_.Es(_.kyr,class extends _.Cs{static Ta(){return{Dp:{FIb:_.bMo,avb:_.jyr}}}constructor(a){super(a.Oa);this.Aa=!1;this.oa=_.Cd(this.getData("rc"),0);this.iA=null;var b;(b=a.Dp.avb)==null||b.p$a(c=>{if(c.gTc){var d=iks(this).length;c=c.gTc-d;c<=this.oa||hks(this,c)}});if(_.eMo){let c;(c=a.Dp.FIb)==null||c.KLd(d=>{var e;(e=d.iA)==null||e.Pa(()=>{d.iA&&(this.iA=d.iA,kks(this))})})}}});
_.x();
_.fMo=_.y("qwbW4b",[_.eHo]);
_.v("qwbW4b");
var gMo=class extends _.Cs{static Ta(){return{model:{HKb:_.jHo},Dp:{FIb:_.bMo}}}constructor(a){super(a.Oa);var b=this.iA=a.model.HKb,c=this.getRoot().hb();b.Ea=c;if(this.oa=a.Dp.FIb)a=(a=this.getRoot().el().closest("[data-i]"))?_.Cd(_.Lo(a).getData("i"),0):0,this.oa.Ca(a,this.iA)}Ca(a){var b=a.targetElement;(b=b.parent()?_.qm(b.parent().getData("cid")):null)&&this.iA.Ha(b,a.targetElement)}Aa(a){this.iA.Ba(a.targetElement.Uc("data-ved")?a.targetElement:void 0)}Ba(a){var b,c;_.dMo&&((b=this.oa)==null?
0:b.Ba())&&this.iA!==((c=this.oa)==null?void 0:c.Ba())||this.iA.Ha("N5sdyd",a.targetElement.Uc("data-ved")?a.targetElement:void 0)}};gMo.prototype.$wa$daG3j=function(){return this.Ba};gMo.prototype.$wa$N6Mv3e=function(){return this.Aa};gMo.prototype.$wa$oMGkAb=function(){return this.Ca};_.Es(_.fMo,gMo);
_.x();
});
// Google Inc.
