loaded_h_0(function(_){var window=this;
_.v("lOO0Vd");
_.cqb=new _.PQa(_.HUa);
_.x();
var eqb;eqb=function(a){if(a.wbd){let b=Date.now()-a.CTe;return a.wbd(a.wZb+1,b)}return Math.random()*Math.min(a.ose*Math.pow(a.Gxc,a.wZb),a.MAe)};_.fqb=function(a){if(!a.qib())throw Error("Te`"+a.eBb);++a.wZb;a.Fxc=eqb(a)};_.gqb=class{constructor(a,b,c,d,e,f){this.eBb=a;this.ose=b;this.Gxc=c;this.MAe=d;this.KLe=e;this.wbd=f||null;this.CTe=Date.now();this.wZb=0;this.Fxc=eqb(this)}znd(){return this.wZb}qib(a){return this.wZb>=this.eBb?!1:a!=null?!!this.KLe[a]:!0}};
_.v("P6sQOc");
var hqb=function(a){var b={};_.Ja(a.Ca(),e=>{b[e]=!0});var c=a.Da(),d=a.Ha();return new _.gqb(a.Ba(),_.Oe(c.getSeconds())*1E3,a.Aa(),_.Oe(d.getSeconds())*1E3,b)},iqb=new _.br("retryConfigOverrides"),jqb=function(a,b,c,d){return c.then(e=>e,e=>{if(e instanceof _.ni){if(!e.status||!d.qib(e.status.uq()))throw e;}else if("function"==typeof _.lmb&&e instanceof _.lmb)switch(e.oa){case 103:case 7:case 10:case 101:case 105:case 408:case 425:case 429:case 502:case 503:case 504:break;default:throw e;}if(d&&
!d.qib())return _.Gh(e);var f=d.Fxc;return(new _.Rg(g=>{setTimeout(g,f)})).then(()=>{_.fqb(d);var g=d.znd();b=b.Ly(_.IZa,g);return jqb(a,b,a.fetch(b),d)})})};
_.jg(class{constructor(){this.oa=_.Rf(_.bqb);this.Aa=_.Rf(_.cqb);this.logger=null;var a=_.Rf(_.Wkb);this.fetch=a.fetch.bind(a)}Whb(a,b){if(this.Aa.getType(a.Lt())!==1)return new _.alb(a,null,0);var c=this.oa.policy,d=_.cr(a,iqb),e=null;if(d){e={};if(d.yZb)for(var f of d.yZb)e[f]=!0;else if(c)for(var g of c.Ca())e[g]=!0;let n=1,q=0;f=Infinity;g=2;if(c){n=c.Ba()||n;let t,A=(t=c.Ma())==null?void 0:t.getSeconds();q=_.Oe(c.Na().getSeconds())*1E3;f=A!=null?_.Oe(A)*1E3:f;g=c.Aa()||g}var h,k,l;let r;c=(h=
d.maxAttempts)!=null?h:n;h=(k=d.RLc)!=null?k:q;k=(l=d.qsb)!=null?l:g;l=(r=d.qRc)!=null?r:f;e=new _.gqb(c,h,k,l,e,d.I5d)}else c&&(e=hqb(c));e&&e.qib()?(b=jqb(this,a,b,e),a=new _.alb(a,b,2)):a=new _.alb(a,null,0);return a}},_.dqb);
_.x();
});
// Google Inc.
