/*!
 * froala_editor v2.6.1 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{scaytAutoload:!1,scaytCustomerId:"1:tLBmI3-7rr3J1-GMEFA1-mIewo-hynTZ1-PV38I1-uEXCy2-Rn81L-gXuG4-NUNri4-5q9Q34-Jd",scaytOptions:{enableOnTouchDevices:!1,localization:"en",extraModules:"ui",DefaultSelection:"American English",spellcheckLang:"en_US",contextMenuSections:"suggest|moresuggest",serviceProtocol:"https",servicePort:"80",serviceHost:"svc.webspellchecker.net",servicePath:"spellcheck/script/ssrv.cgi",contextMenuForMisspelledOnly:!0,scriptPath:"https://svc.webspellchecker.net/spellcheck31/lf/scayt3/customscayt/customscayt.js"}}),a.FE.PLUGINS.spellChecker=function(b){function c(a){if(j){var c=!j.isDisabled();a.toggleClass("fr-active",c).attr("aria-pressed",c),b.$el.attr("spellcheck",!c)}}function d(a){j&&!j.isDisabled()&&(["bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize"].indexOf(a)>=0&&j.removeMarkupInSelectionNode({removeInside:!0}),"html"==a&&g())}function e(a){j&&!j.isDisabled()&&["bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize"].indexOf(a)>=0&&j.reloadMarkup()}function f(b){if(j&&!j.isDisabled()){b.which==a.FE.KEYCODE.ENTER&&setTimeout(j.reloadMarkup,0)}}function g(){j&&j.setDisabled(!j.isDisabled())}function h(){b.events.on("commands.before",d),b.events.on("commands.after",e),b.events.on("keydown",f,!0),c(b.$tb.find('[data-cmd="spellChecker"]'))}function i(){if(!b.$wp)return!1;var a=b.opts.scaytOptions;a.customerId=b.opts.scaytCustomerId,a.container=b.$el.get(0),a.autoStartup=b.opts.scaytAutoload,a.onLoad=h,null!==b.opts.language&&(b.opts.spellCheckerLanguage=b.opts.language),!0===b.opts.scaytAutoload&&(b.opts.spellcheck=!1);var c=document.createElement("script");c.type="text/javascript",c.src=b.opts.scaytOptions.scriptPath,c.innerText="",c.onload=function(){j=new SCAYT.CUSTOMSCAYT(a)},document.getElementsByTagName("head")[0].appendChild(c)}var j;return{_init:i,refresh:c,toggle:g}},a.FE.DefineIcon("spellChecker",{NAME:"keyboard-o"}),a.FE.RegisterCommand("spellChecker",{title:"Spell Checker",undo:!1,focus:!1,accessibilityFocus:!0,forcedRefresh:!0,toggle:!0,callback:function(){this.spellChecker.toggle()},refresh:function(a){this.spellChecker.refresh(a)},plugin:"spellChecker"})});
