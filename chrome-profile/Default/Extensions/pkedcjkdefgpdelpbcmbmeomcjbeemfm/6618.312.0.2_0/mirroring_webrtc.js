'use strict';var Laa={TAB:0,Vi:1,sm:2},Y$=function(a){Ob("MediaRouter.WebRtc.Start.Success",a,Laa)};var Z$=function(a,b){Pg.call(this,b);this.B=a;this.f=new Qb;this.b=lx(b.id);this.j=new Qb;this.A=!1;this.s=null;this.o=!1;this.m=this.g=null;Maa(this);Naa(this);this.b.sendMessage(new Vg("GET_TURN_CREDENTIALS"))};l(Z$,Pg);
Z$.prototype.start=function(a){var b=this;return this.f.b.then(function(c){if(c.f)return Promise.reject(new Sf("Mirroring already started"));if(b.s)return Promise.reject(new Sf("Session permanently stopped"));b.g=new Cb("MediaRouter.WebRtc.Session.Launch");c.b.addStream(a);c.start();return b.j.b})};
Z$.prototype.stop=function(){var a=this;this.j.reject(new Sf("Session stop requested."));this.m&&(this.m.b(),this.m=null);if(this.s)return this.s;this.o=this.A=!1;this.g=null;return this.s=this.f.b.then(function(a){a.stop()}).then(function(){return a.b.Ra()}).catch(function(b){a.b.Ra();throw b;})};
var Maa=function(a){a.b.onMessage=function(b){if(!b.type)throw Error("Message has no type.");switch(b.type){case "TURN_CREDENTIALS":a.f.resolve(new $g(a.h.id,b.data.credentials));break;case "ANSWER":a.f.b.then(function(a){hh(a,b.data)});break;case "KNOCK_ANSWER":a.o=!0;a.f.b.then(function(a){hh(a,b.data)});break;case "STOP":a.j.reject(new Sf("Stop signal received"));a.stop();break;default:throw new Sf("Unknown message type: "+b.type);}}},Naa=function(a){a.f.b.then(function(b){dh(b,function(b){a.b.sendMessage(new Vg("OFFER",
new Xg(b,a.B,Yg)))});eh(b,function(b){b=Wg(b);a.b.sendMessage(b)});ah(b,function(){a.A=!0;a.b.sendMessage(new Vg("SESSION_START_SUCCESS"));!a.o&&a.g&&a.g.b();a.g=null;a.m=new Ib("MediaRouter.WebRtc.Session.Length");a.j.resolve(a)});ch(b,function(){a.b.sendMessage(new Vg("SESSION_END"))});bh(b,function(b){a.A||a.j.reject(b);a.b.sendMessage(new Vg("SESSION_FAILURE"))})})};var $$=function(){Dg.call(this,"webrtc")};l($$,Dg);g=$$.prototype;g.zg=function(a,b){return new Z$(a,b)};g.jh=function(){Y$(0)};g.gh=function(){Y$(1)};g.yi=function(){Y$(2)};g.hh=function(){Nb("MediaRouter.WebRtc.Session.End")};g.ih=function(a){Ob("MediaRouter.WebRtc.Start.Failure",a,Rf)};g.Wf=function(){Nb("MediaRouter.WebRtc.Stream.End")};var Oaa=new $$;tg("mr.mirror.webrtc.WebRtcService",Oaa);