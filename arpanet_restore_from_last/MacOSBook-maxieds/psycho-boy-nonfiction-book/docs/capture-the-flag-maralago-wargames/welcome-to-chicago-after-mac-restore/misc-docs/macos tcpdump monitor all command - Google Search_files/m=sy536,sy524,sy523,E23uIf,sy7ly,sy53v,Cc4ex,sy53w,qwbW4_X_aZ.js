loaded_h_0(function(_){var window=this;
_.sHo=_.y("E23uIf",[_.W3a]);
_.LFo=_.y("p8SIIc",[]);
_.KFo={state:0,Oca:void 0,h_a:void 0,b5:void 0};
_.v("E23uIf");
var vHo,yHo,wHo;vHo=function(a,b,c){_.aKi&&a.Da.isAvailable()&&a.Da.Aa();a.oa.value={state:1,Oca:b,h_a:_.tHo(a,_.uHo(a,b)),b5:c}};_.tHo=function(a,b){return b.map(c=>a.Ma.has(c)?a.Ma.get(c):c).filter(c=>a.sourceMap.has(c)).map(c=>({html:a.sourceMap.get(c)}))};_.uHo=function(a,b){return b==="N5sdyd"?[...a.sourceMap.keys()]:a.Aa.has(b)?a.Aa.get(b):[]};
_.xHo=class extends _.wi{static Ta(){return{service:{Grb:_.AGo},Dp:{Hge:_.LFo}}}constructor(a){super();this.Ea=null;this.sourceMap=new Map;this.Aa=new Map;this.Ma=new Map;this.Ca=new Map;var b=a.Dp.Hge;this.oa=_.TY(_.KFo);this.Na=_.TY({count:0});this.Da=a.service.Grb;b&&new wHo(b,this)}n$a(a){this.oa.subscribe(a)}Sa(a,b){if(!this.Ca.has(a)){let c=this.Aa.has(a);this.Ca.set(a,_.TY({LQb:c}))}this.Ca.get(a).subscribe(b)}Pa(a){return this.Na.subscribe(a)}Ha(a,b){this.oa.value.state===1&&this.oa.value.Oca===
a?this.Ba(b):vHo(this,a,b)}Ba(a){this.oa.value.state!==0&&(_.aKi&&this.Da.isAvailable()&&this.Da.Ba(),this.oa.value={state:0,Oca:void 0,h_a:void 0,b5:a})}};yHo=function(a,b){a.oa||(a.oa=!0,b(),a.oa=!1)};wHo=class{constructor(a,b){this.Ba=a;this.Aa=b;this.oa=!1;b.n$a(c=>{yHo(this,()=>{this.Ba.setState(c)})});a.Moc(c=>{yHo(this,()=>{c.state===1&&c.Oca!==void 0?vHo(this.Aa,c.Oca,c.b5):this.Aa.Ba(c.b5)})})}};_.ms(_.sHo,_.xHo);
_.x();
_.pyr=_.y("Cc4ex",[]);
_.sMo=!!(_.Ji[52]>>19&1);_.tMo=!!(_.Ji[52]>>20&1);
_.v("Cc4ex");
var lks=async function(a){var b=a.getRoot().hb().closest(_.oLi);return b?(b=b.querySelector(_.BU("Y0vxu")))?a.getModel(_.sHo,b):null:null},mks=function(a,b){a.oa=b;(a=a.getRoot().hb().querySelector(_.BU("NnAfwf")))&&b>0?a.textContent=`+${b}`:a&&(a.textContent="")},pks=async function(a){var b=(0,_.Wf)(),c=b();b=b(1);try{if(a.iA=a.iA||b(await c(lks(a))),a.iA){var d=_.uHo(a.iA,"N5sdyd"),e=d.length,f=a.iA,g=nks(a),h=oks(f,d);d=[];f=[];for(var k of h)k!==""&&(d.includes(k)?f.push(k):d.push(k));var l=d.concat(f);
let q=Math.min(l.length,3);h=0;for(k=q-1;k>=0;k--){let r=g[k];r||(r=g[0].cloneNode(!0),g[0].parentElement.prepend(r));r.style.display="block";let t=r.firstElementChild;t.style.display="block";let A=l[k];t.tagName.toLowerCase()==="img"&&(t.src=A);h++}var n=nks(a);l=3;for(g=0;g<n.length;g++){let r=n[g];g>=q&&(r.style.display="none");r.style.zIndex=l.toString();l--}mks(a,e-h);a.Aa=!0}}finally{c()}},nks=function(a){return Array.from(a.getRoot().hb().querySelectorAll(_.BU("i1Vy9")))},oks=function(a,b){return _.tHo(a,
b).map(c=>c.html).map(c=>(c=c.querySelector(".XNo5Ab"))?c.src||c.getAttribute("data-src")||"":"")};_.As(_.pyr,class extends _.ys{static Ta(){return{Dp:{wIb:_.qMo,Qub:_.oyr}}}constructor(a){super(a.Oa);this.Aa=!1;this.oa=_.Bd(this.getData("rc"),0);this.iA=null;var b;(b=a.Dp.Qub)==null||b.n$a(c=>{if(c.ZSc){var d=nks(this).length;c=c.ZSc-d;c<=this.oa||mks(this,c)}});if(_.tMo){let c;(c=a.Dp.wIb)==null||c.xLd(d=>{var e;(e=d.iA)==null||e.Pa(()=>{d.iA&&(this.iA=d.iA,pks(this))})})}}});
_.x();
_.uMo=_.y("qwbW4b",[_.sHo]);
_.v("qwbW4b");
var vMo=class extends _.ys{static Ta(){return{model:{yKb:_.xHo},Dp:{wIb:_.qMo}}}constructor(a){super(a.Oa);var b=this.iA=a.model.yKb,c=this.getRoot().hb();b.Ea=c;if(this.oa=a.Dp.wIb)a=(a=this.getRoot().el().closest("[data-i]"))?_.Bd(_.Lo(a).getData("i"),0):0,this.oa.Ca(a,this.iA)}Ca(a){var b=a.targetElement;(b=b.parent()?_.qm(b.parent().getData("cid")):null)&&this.iA.Ha(b,a.targetElement)}Aa(a){this.iA.Ba(a.targetElement.Tc("data-ved")?a.targetElement:void 0)}Ba(a){var b,c;_.sMo&&((b=this.oa)==null?
0:b.Ba())&&this.iA!==((c=this.oa)==null?void 0:c.Ba())||this.iA.Ha("N5sdyd",a.targetElement.Tc("data-ved")?a.targetElement:void 0)}};vMo.prototype.$wa$daG3j=function(){return this.Ba};vMo.prototype.$wa$N6Mv3e=function(){return this.Aa};vMo.prototype.$wa$oMGkAb=function(){return this.Ca};_.As(_.uMo,vMo);
_.x();
});
// Google Inc.
