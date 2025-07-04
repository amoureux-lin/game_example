System.register("chunks:///_virtual/pdb",["./UIConfig2.ts","./PdbGame.ts","./PdbLoading.ts","./PdbLogic.ts","./PdbDefine.ts","./PdbModel.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PdbDefine.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"da8b1KcaFFLPbQmUvI8nW/A","PdbDefine",void 0);e("PdbDefine",(function(){}));n._RF.pop()}}}));

System.register("chunks:///_virtual/PdbGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var e,t,c,a,o,s,n,u;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,c=i.initializerDefineProperty,a=i.assertThisInitialized},function(i){o=i.cclegacy,s=i._decorator,n=i.Toggle,u=i.Component}],execute:function(){var r,p,l,d,h;o._RF.push({},"904267zdRxJ04skmwZuIJDV","PdbGame",void 0);var g=s.ccclass,f=s.property;i("PdbGame",(r=g("PdbGame"),p=f(n),r((h=e((d=function(i){function e(){for(var e,t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return e=i.call.apply(i,[this].concat(o))||this,c(e,"toggleMusic",h,a(e)),e}t(e,i);var o=e.prototype;return o.onLoad=function(){this.scheduleOnce((function(){app.message.dispatchEvent("test",{name:"test"})}),3),this.toggleMusic.isChecked=app.audio.switchMusic},o.clickMusic=function(){app.audio.switchMusic=!app.audio.switchMusic,app.audio.switchMusic,app.audio.switchMusic?app.audio.playBundleMusic("bgm",!0):app.audio.stopMusic()},e}(u)).prototype,"toggleMusic",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=d))||l));o._RF.pop()}}}));

System.register("chunks:///_virtual/PdbLoading.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseLoading.ts","./UIConfig2.ts"],(function(n){var o,t,a,e,i;return{setters:[function(n){o=n.inheritsLoose},function(n){t=n.cclegacy,a=n._decorator},function(n){e=n.BaseLoading},function(n){i=n.PdbUIConfig}],execute:function(){var c;t._RF.push({},"546b0kl7rtGSI9bAQ/XbY4H","PdbLoading",void 0);var r=a.ccclass;a.property,n("PdbLoading",r("PdbLoading")(c=function(n){function t(){for(var o,t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];return(o=n.call.apply(n,[this].concat(a))||this).commonRate=.3,o.resRate=.5,o.guiRate=.2,o}o(t,n);var a=t.prototype;return a.start=function(){app.gui.initGameConfig(i)},a.playBg=function(){app.audio.playBundleMusic("bgm",!0)},a.loadComplete=function(){console.log("资源加载完成=》跳转页面"),app.gui.open("pdbGame")},a.update=function(n){},t}(e))||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/PdbLogic.ts",["cc","./CommonEvent.ts"],(function(t){var e,n;return{setters:[function(t){e=t.cclegacy},function(t){n=t.CommonEvent}],execute:function(){e._RF.push({},"6cbe06BtyZH4bVOu+PO6e2y","PdbLogic",void 0),t("default",function(){function t(){}t.getInstance=function(){return this.instance=this.instance||new t,this.instance};var e=t.prototype;return e.onload=function(){this.resgisterEvent()},e.destroy=function(){this.removeEvent()},e.init=function(){},e.resgisterEvent=function(){app.message.on(n.GAME_SHOW,this),app.message.on(n.GAME_HIDE,this),app.message.on("test",this)},e.removeEvent=function(){app.message.off(n.GAME_SHOW,this),app.message.off(n.GAME_HIDE,this),app.message.off("test",this)},e.onHandler=function(t){switch(t){case n.GAME_SHOW:console.log("游戏进入前台");break;case n.GAME_HIDE:console.log("游戏进入后台");break;case"test":console.log("接收到消息test")}},t}()).instance=null,e._RF.pop()}}}));

System.register("chunks:///_virtual/PdbModel.ts",["cc"],(function(n){var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"57d40kvlIpH4Li/BGi0Mnx/","PdbModel",void 0),n("default",function(){function n(){}return n.getInstance=function(){return this.instance=this.instance||new n,this.instance},n.prototype.onload=function(){},n}()).instance=null,t._RF.pop()}}}));

System.register("chunks:///_virtual/UIConfig2.ts",["cc","./Framework.ts","./UIDefine.ts"],(function(a){var e,n;return{setters:[function(a){e=a.cclegacy},null,function(a){n=a.LayerType}],execute:function(){e._RF.push({},"ab8fargBK9L0I+a9XgTd9Gb","UIConfig",void 0);a("PdbUIConfig",{pdbLoading:{layer:n.UI,path:"gui/pdbLoading",bundle:"pdb",vacancy:!0,mask:!0},pdbGame:{layer:n.UI,path:"gui/pdbGame",bundle:"pdb",vacancy:!0,mask:!0}});e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pdb', 'chunks:///_virtual/pdb'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});