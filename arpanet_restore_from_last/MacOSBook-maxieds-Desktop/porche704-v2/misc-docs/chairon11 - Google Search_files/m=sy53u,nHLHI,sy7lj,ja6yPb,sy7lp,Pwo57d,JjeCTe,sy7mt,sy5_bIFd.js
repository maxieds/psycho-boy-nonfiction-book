loaded_h_0(function(_){var window=this;
_.bMo=_.y("nHLHI",[]);
_.v("nHLHI");
_.cMo=class extends _.wi{constructor(){super();this.oa=_.WY({vHd:0});this.Aa=new Map}KLd(a){this.oa.subscribe(a)}Ba(){return this.Aa.get(this.oa.value.vHd)}Ca(a,b){this.Aa.has(a)?_.of(new _.yg(`Attempted to register a corroboration model for draft id ${a}, which already has a model registered`)):(this.Aa.set(a,b),this.oa.value.vHd===a&&(this.oa.value=Object.assign({},this.oa.value,{iA:b})))}};_.qs(_.bMo,_.cMo);
_.x();
_.dyr=_.y("ja6yPb",[]);
_.v("ja6yPb");
_.bdt=class extends _.wi{constructor(){super();this.Ca=0;google.lfm||(google.lfm=[]);this.Aa=_.WY({view:0});this.Ba=_.WY(0)}subscribeToInputPlateState(a){this.Ba.subscribe(a)}expand(){var a;(a=this.oa)==null||a.expand()}collapse(a=!1,b,c=!1){var d;return(d=this.oa)==null?void 0:d.collapse(a,b,c)}};_.qs(_.dyr,_.bdt);
_.x();
_.jyr=_.y("Pwo57d",[_.bMo]);
_.v("Pwo57d");
var eks;eks=function(a,{iA:b}){if(b){var c;(c=a.oa)==null||c.unsubscribe();c=b.Pa(({count:d})=>{a.Aa.value={gTc:d}});a.oa={model:b,unsubscribe:c}}else{let d;(d=a.oa)==null||d.unsubscribe();a.oa=null}};_.fks=class extends _.wi{static Ta(){return{model:{FIb:_.cMo}}}constructor(a){super();this.oa=null;this.Aa=_.WY({gTc:void 0});a.model.FIb.KLd(b=>{eks(this,b)})}p$a(a){this.Aa.subscribe(a)}};_.qs(_.jyr,_.fks);
_.x();
_.v("JjeCTe");
var Cct=class extends _.m{constructor(a){super(a)}Aa(){return _.B(this,2)}Ca(a){return _.Zh(this,2,a)}Ba(){return _.cf(this,2)}Da(){return _.Bk(this,2)}};Cct.prototype.rb="ZoDrGf";var Dct={Ju(){return["aof"]},rl(a,b){_.Jv(new _.Qv(a.oa,b),"aof",b.Ca,b.Ba)},Ml(a,b){_.Pv(new _.Qv(b.oa,a),a.Da,a.Aa,"aof")}};var Ect=null,Fct=class extends _.Ww{constructor(a,b){super(a);new _.Xw(this);this.vp=_.Uw(b,this,new _.Tw(Dct))}static Bn(){return Cct}static Gn(a){return Ect?Ect:Ect=_.Sw().then(b=>{b=new Fct(Cct,b);b.initialize(a);return b})}};_.op.ZoDrGf=_.np;var Gct,Ict,Hct;Gct=function(a,b){var c;b=(c=b.Aa())!=null&&c?2:0;a.zua.value!==b&&(a.zua.value=b)};Ict=async function(a,b){var c=(0,_.Wf)(),d=c();c=c(1);try{let e;if(((e=a.Ni.get().Aa())!=null?e:!1)!==b){c(await d(Hct()));a.oa=!0;try{let f=a.Ni.transition(g=>{b?g.Ca(!0):g.Ba();return g});c(await d(f.run()));Gct(a,a.Ni.get())}finally{c(),a.oa=!1}}}finally{d()}};Hct=async function(){return new Promise(a=>{_.Jct()?_.$Mh().then(()=>{(0,_.po)(a,450)}):a()})};
_.Jct=function(){var a=document.querySelectorAll("[data-svs]");for(let b=0;b<a.length;b++){let c=a[b].getBoundingClientRect();if(c.width>0||c.height>0)return!0}if(a=document.getElementById("Sva75c"))if(a=a.getBoundingClientRect(),a.width>0||a.height>0)return!0;return!1};
_.Kct=class extends _.wi{static Ta(){return{service:{npa:_.TYo},Ge:{Xde:Fct}}}constructor(a){super();this.hasSubmittedQuery=_.WY(!1);this.zua=_.WY(0);this.oa=!1;a.service.npa.LEd(_.hyr,this);this.Ni=a.Ge.Xde;Gct(this,this.Ni.get());this.Ni.listen(b=>{this.oa||Gct(this,b)});this.zua.subscribe(this.Aa.bind(this))}Aa(a,b){if(a!==b)if(b===void 0)Ict(this,!1);else switch(a){case 2:this.hasSubmittedQuery.value?Ict(this,!0):Ict(this,!1);break;default:Ict(this,!1)}}};_.qs(_.hyr,_.Kct);
_.x();
_.Xyr=_.y("C6pisf",[]);
var dYo=class extends _.m{constructor(a){super(a)}Aa(){return _.u(this,1)}Ba(){return _.u(this,2)}};var eYo=class extends _.m{constructor(a){super(a)}Aa(){return _.ph(this,dYo,1,_.qh())}};_.fYo=class extends _.m{constructor(a){super(a)}yb(){return _.p(this,eYo,1)}Cr(){return _.u(this,2)}Ma(){return _.Kj(this,3,_.qh())}Ca(){return _.ij(this,9)}Gb(){return _.Lk(this,9)}Va(){return _.Cia(_.ij(this,4))}wb(){return _.B(this,5)}Za(){return _.B(this,10)}Ua(){return _.u(this,17)}Pa(){return _.B(this,6,!0)}kb(){return _.B(this,7)}Sa(){return _.u(this,8,"#e2eeff")}Aa(){return _.u(this,14)}XS(){return _.u(this,15)}Ba(){return _.u(this,16)}Da(){return _.u(this,19)}Ha(){return _.u(this,22)}Na(){return _.u(this,
20)}Bb(){return _.u(this,21)}};_.fYo.prototype.rb="XDxzyc";
_.v("C6pisf");
_.Sas=class extends _.m{constructor(a){super(a)}};_.Sas.prototype.rb="U7pSpf";_.Tas=class extends _.wi{static Ta(){return{If:{yqc:_.Sas}}}constructor(a){super();this.oa=new Map;var b;if((b=a.If.yqc)==null?0:_.ph(b,_.fYo,1,_.qh()))for(let c of _.ph(a.If.yqc,_.fYo,1,_.qh()))this.oa.set(c.Cr(),_.WY({Zea:c}))}Aa(a,b){var c=this.oa.get(b);c||(c=_.WY({Zea:new _.fYo}),this.oa.set(b,c));c.subscribe((d,e)=>{a(d.Zea,e==null?void 0:e.Zea)})}};_.qs(_.Xyr,_.Tas);
_.x();
_.wyr=_.y("JwXdLe",[]);
_.w5p=class extends _.m{constructor(a){super(a)}Tq(){return _.Zj(this,1)}pA(){return _.gh(this,3)}nI(){return _.gh(this,4)}getAttribute(){return _.gh(this,5)}setAttribute(a){return _.eh(this,5,a)}hasAttribute(){return _.rh(this,5)}Kz(){return _.p(this,_.OG,8)}P0(){return _.Zj(this,10)}vH(){return _.ek(this,12)}Daa(){return _.gh(this,17)}oya(){return _.Zj(this,19)}Iv(){return _.gh(this,21)}getViewerType(){return _.ek(this,23)}Rw(a){return _.Yh(this,23,a)}Gle(){return _.gh(this,24)}vke(){return _.gh(this,
25)}};_.w5p.prototype.rb="tkwAde";
_.x5p=function(a,b){return _.yi(a,1,b)};_.y5p=function(a,b){return _.eh(a,3,b)};_.z5p=function(a,b){return _.eh(a,4,b)};_.A5p=function(a,b){return _.Fb(a,_.OG,8,b)};_.B5p=function(a,b){return _.Yh(a,12,b)};_.C5p=function(a,b){return _.eh(a,17,b)};_.D5p=function(a,b){return _.yi(a,19,b)};
var Eqg;Eqg=class extends _.m{constructor(a){super(a)}kka(){return _.Dj(this,2)}getUrl(){return _.u(this,3)}jd(){return _.rh(this,3)}getTitle(){return _.u(this,4)}setTitle(a){return _.eh(this,4,a)}wd(){return _.rh(this,4)}Zj(){return _.u(this,5)}getUniqueId(){return _.Ve(this,7)}};
_.Fqg=class extends _.m{constructor(a){super(a)}Z8(){return _.ij(this,27)}Pgb(){return _.Lk(this,27)}fPb(){return _.u(this,11)}wv(){return _.Dj(this,18)}GZ(){return _.ph(this,Eqg,24,_.qh())}joa(){return _.cj(this,Eqg,24)}U5(){return _.Dj(this,26)}};_.Gqg=function(a){return _.p(a,_.Fqg,4)};
_.v("JwXdLe");
_.dft=class extends _.wi{constructor(){super();this.sP=!1;this.Aa=null;this.bvb=_.WY({Un:new _.w5p});this.oa=_.WY({element:null});this.Ca=_.WY(0)}Ma(a){this.bvb.subscribe((b,c)=>{a(b.Un,c==null?void 0:c.Un)})}Ha(a){this.oa.subscribe((b,c)=>{a(b.element,c==null?void 0:c.element)})}Ea(a){this.Ca.subscribe((b,c)=>{a(b,c)})}l$(a){this.sP&&this.oa.value!=null?this.Aa=a:this.oa.value={element:a}}Ba(a){this.sP=a;this.sP||this.Aa==null||(this.oa.value={element:this.Aa},this.Aa=null)}Da(a){this.Ca.value=a}};
_.qs(_.wyr,_.dft);
_.x();
});
// Google Inc.
