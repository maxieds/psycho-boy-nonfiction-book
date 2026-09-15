"use strict";this.default_OneGoogleWidgetUi=this.default_OneGoogleWidgetUi||{};(function(_){var window=this;
try{
_.v("Wt6vjf");
var wC=function(a){this.ya=_.A(a,0,wC.Bb)};_.E(wC,_.B);wC.prototype.ob=function(){return _.Sn(this,1,_.xn,_.An)};wC.prototype.Lc=function(a){_.ao(this,1,a,_.xn)};wC.Bb="f.bo";var xC=function(){_.qh.call(this)};_.E(xC,_.qh);xC.prototype.Ua=function(){this.wv=!1;yC(this);_.qh.prototype.Ua.call(this)};xC.prototype.j=function(){zC(this);if(this.Xm)return AC(this),!1;if(!this.Lw)return BC(this),!0;this.dispatchEvent("m");if(!this.ot)return BC(this),!0;this.Qr?(this.dispatchEvent("o"),BC(this)):AC(this);return!1};
var CC=function(a){var b=new _.Ov(a.cD);a.bu!=null&&_.Zv(b,"authuser",a.bu);return b},AC=function(a){a.Xm=!0;var b=CC(a),c="rt=r&f_uid="+_.Sg(a.ot);_.Kr(b,(0,_.og)(a.l,a),"POST",c)};
xC.prototype.l=function(a){a=a.target;zC(this);if(_.Qr(a)){this.Fq=0;if(this.Qr)this.Xm=!1,this.dispatchEvent("o");else if(this.Lw)this.dispatchEvent("p");else{try{var b=_.Uv(a),c=JSON.parse(b.substring(b.indexOf("\n")));var d=(new wC(c[0])).ob()}catch(e){_.Xh(e);this.dispatchEvent("q");DC(this);return}this.Xm=!1;d?this.dispatchEvent("n"):this.dispatchEvent("o")}BC(this)}else{if(a.df()!=0){b="";try{b=_.Uv(a)}catch(e){}d=a.df()<500;a=Error("Cc`"+a.df()+"`"+CC(this).toString()+"`"+String(a.ma)+"`"+
b);d&&_.Xh(a);this.dispatchEvent("q")}DC(this)}};var zC=function(a){var b=_.vC.get(window.location.protocol=="https:"?"SAPISID":"APISID","");a.Qr=a.Cq!==""&&b==="";a.Lw=a.Cq!=b;a.Cq=b},DC=function(a){a.Qr||(a.Xm=!0,a.Fq=Math.min((a.Fq||3)*2,60),BC(a))},BC=function(a){if(a.wv||a.Xm)yC(a),a.Ps=window.setTimeout((0,_.og)(a.j,a),Math.max(3,a.Fq)*1E3)},yC=function(a){a.Ps&&(window.clearTimeout(a.Ps),a.Ps=0)};_.k=xC.prototype;_.k.Fq=0;_.k.Ps=0;_.k.Cq=null;_.k.Qr=!1;_.k.Lw=!1;_.k.bu=null;_.k.cD="/_/idv/";
_.k.ot="";_.k.wv=!1;_.k.Xm=!1;_.ff(_.Yu,xC);_.Hb().Xd(function(a){var b=new xC;_.Su(a,_.Yu,b);if(_.Vv()){a=_.Vv();var c=_.ji("WZsZ1e").string(null);b.ot=a;c!==void 0&&(b.Cq=c);a=_.Wv();_.Sb(a,"/")||(a="/"+a);b.cD=a+"/idv/";(a=_.js())&&_.ji("gGcLoe").v(!1)&&(b.bu=a);b.wv=!0;b.j()}});
_.x();
_.v("hhhU8");
var zL;new _.em(function(a){zL=a});_.tH();_.Ih(function(){zL()});
_.x();
_.v("FCpbqb");
_.Hb().Xd(function(a){_.Kh(_.Mu,a)});
_.x();
_.v("WhJNk");
var ZK=new Date(1262304E6),$K=new Date(12779424E5),Kja=new Date(129384E7),aL=function(a,b){b?a.push(Math.round((b-ZK.getTime())/6E4)):a.push(null)},bL=function(a,b,c){a.push(b.getTimezoneOffset()/15+56);a:{var d=b.getTimezoneOffset();var e=c.getTimezoneOffset();if(d!=e)for(b=b.getTime()/6E4,c=c.getTime()/6E4;b<=c;){var f=(b>>1)+(c>>1),g=f*6E4,h=(new Date(g+3E4)).getTimezoneOffset();if((new Date(g-3E4)).getTimezoneOffset()!=h){d=g;break a}if(h==d)b=f+1;else if(h==e)c=f-1;else break}d=null}aL(a,d)};var cL=function(a){_.xs.call(this);this.j=a.service.window;var b=b===void 0?!1:b;if(!_.th(_.ji("xn5OId"),!1)&&_.vC.isEnabled()&&(_.vC.get("OTZ")===void 0||b)){a=_.vC.set;b=[];var c=new Date;aL(b,c.getTime());b.push(c.getTimezoneOffset()/15+56);bL(b,ZK,$K);bL(b,$K,Kja);a.call(_.vC,"OTZ",b.join("_"),{Fv:2592E3,path:"/",domain:void 0,secure:this.j.get().location.protocol==="https:"})}};_.E(cL,_.VC);cL.na=function(){return{service:{window:_.gD}}};_.PC(_.Mu,cL);
_.x();
}catch(e){_._DumpException(e)}
}).call(this,this.default_OneGoogleWidgetUi);
// Google Inc.
