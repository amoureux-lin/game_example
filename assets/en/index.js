System.register("chunks:///_virtual/en",["./en2.ts","./en.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/en.ts",["cc"],(function(n){var e;return{setters:[function(n){e=n.cclegacy}],execute:function(){e._RF.push({},"542a6pQbV9BzLTC17jLPi8p","en",void 0);var a=window,g=n("languages",{test:"Test"});a.i18n||(a.i18n={}),a.i18n.languages||(a.i18n.languages={}),a.i18n.languages.pdb||(a.i18n.languages.pdb={}),a.i18n.languages.pdb.en||(a.i18n.languages.pdb.en={}),a.i18n.languages.pdb.en=g,e._RF.pop()}}}));

System.register("chunks:///_virtual/en2.ts",["cc"],(function(n){var a;return{setters:[function(n){a=n.cclegacy}],execute:function(){a._RF.push({},"7f62fOPdbtIfaPkA4DiksW3","en",void 0);var m=window,o=n("languages",{common_prompt_ok:"ok",common_prompt_cancal:"cancal",common_prompt_title_sys:"System Prompt",common_prompt_content:"System Prompt Cpmtemt",common_prompt:"common_prompt"});m.i18n||(m.i18n={}),m.i18n.languages||(m.i18n.languages={}),m.i18n.languages.main||(m.i18n.languages.main={}),m.i18n.languages.main.en||(m.i18n.languages.main.en={}),m.i18n.languages.main.en=o,a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/en', 'chunks:///_virtual/en'); 
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