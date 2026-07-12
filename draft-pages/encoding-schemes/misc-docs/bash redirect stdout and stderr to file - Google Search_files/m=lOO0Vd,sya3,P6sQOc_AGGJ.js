loaded_h_0(function(_){var window=this;
_.v("lOO0Vd");
_.Upb=new _.MQa(_.FUa);
_.x();
var Wpb;Wpb=function(a){if(a.gbd){let b=Date.now()-a.iTe;return a.gbd(a.rZb+1,b)}return Math.random()*Math.min(a.Tre*Math.pow(a.Exc,a.rZb),a.tAe)};_.Xpb=function(a){if(!a.iib())throw Error("Te`"+a.UAb);++a.rZb;a.Dxc=Wpb(a)};_.Ypb=class{constructor(a,b,c,d,e,f){this.UAb=a;this.Tre=b;this.Exc=c;this.tAe=d;this.qLe=e;this.gbd=f||null;this.iTe=Date.now();this.rZb=0;this.Dxc=Wpb(this)}mnd(){return this.rZb}iib(a){return this.rZb>=this.UAb?!1:a!=null?!!this.qLe[a]:!0}};
_.v("P6sQOc");
var Zpb=function(a){var b={};_.Ja(a.Ca(),e=>{b[e]=!0});var c=a.Da(),d=a.Ha();return new _.Ypb(a.Ba(),_.Oe(c.getSeconds())*1E3,a.Aa(),_.Oe(d.getSeconds())*1E3,b)},$pb=new _.ar("retryConfigOverrides"),aqb=function(a,b,c,d){return c.then(e=>e,e=>{if(e instanceof _.ni){if(!e.status||!d.iib(e.status.uq()))throw e;}else if("function"==typeof _.cmb&&e instanceof _.cmb)switch(e.oa){case 103:case 7:case 10:case 101:case 105:case 408:case 425:case 429:case 502:case 503:case 504:break;default:throw e;}if(d&&
!d.iib())return _.Gh(e);var f=d.Dxc;return(new _.Rg(g=>{setTimeout(g,f)})).then(()=>{_.Xpb(d);var g=d.mnd();b=b.iz(_.GZa,g);return aqb(a,b,a.fetch(b),d)})})};
_.jg(class{constructor(){this.oa=_.Rf(_.Tpb);this.Aa=_.Rf(_.Upb);this.logger=null;var a=_.Rf(_.Nkb);this.fetch=a.fetch.bind(a)}Phb(a,b){if(this.Aa.getType(a.Lt())!==1)return new _.Skb(a,null,0);var c=this.oa.policy,d=_.br(a,$pb),e=null;if(d){e={};if(d.tZb)for(var f of d.tZb)e[f]=!0;else if(c)for(var g of c.Ca())e[g]=!0;let n=1,q=0;f=Infinity;g=2;if(c){n=c.Ba()||n;let t,A=(t=c.Ma())==null?void 0:t.getSeconds();q=_.Oe(c.Na().getSeconds())*1E3;f=A!=null?_.Oe(A)*1E3:f;g=c.Aa()||g}var h,k,l;let r;c=(h=
d.maxAttempts)!=null?h:n;h=(k=d.MLc)!=null?k:q;k=(l=d.fsb)!=null?l:g;l=(r=d.lRc)!=null?r:f;e=new _.Ypb(c,h,k,l,e,d.t5d)}else c&&(e=Zpb(c));e&&e.iib()?(b=aqb(this,a,b,e),a=new _.Skb(a,b,2)):a=new _.Skb(a,null,0);return a}},_.Vpb);
_.x();
});
// Google Inc.
