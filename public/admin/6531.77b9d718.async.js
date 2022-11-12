(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6531],{36629:function(X,Z,C){(function(h){h(C(4631))})(function(h){"use strict";h.defineMode("css",function(c,a){var N=a.inline;a.propertyKeywords||(a=h.resolveMode("text/css"));var j=c.indentUnit,A=a.tokenHooks,t=a.documentTypes||{},o=a.mediaTypes||{},i=a.mediaFeatures||{},s=a.mediaValueKeywords||{},T=a.propertyKeywords||{},L=a.nonStandardPropertyKeywords||{},ie=a.fontProperties||{},oe=a.counterDescriptors||{},J=a.colorKeywords||{},Q=a.valueKeywords||{},G=a.allowNested,ae=a.lineComment,le=a.supportsAtComponent===!0,ee=c.highlightNonStandardPropertyKeywords!==!1,Y,u;function y(e,n){return Y=n,e}function se(e,n){var r=e.next();if(A[r]){var m=A[r](e,n);if(m!==!1)return m}if(r=="@")return e.eatWhile(/[\w\\\-]/),y("def",e.current());if(r=="="||(r=="~"||r=="|")&&e.eat("="))return y(null,"compare");if(r=='"'||r=="'")return n.tokenize=re(r),n.tokenize(e,n);if(r=="#")return e.eatWhile(/[\w\\\-]/),y("atom","hash");if(r=="!")return e.match(/^\s*\w*/),y("keyword","important");if(/\d/.test(r)||r=="."&&e.eat(/\d/))return e.eatWhile(/[\w.%]/),y("number","unit");if(r==="-"){if(/[\d.]/.test(e.peek()))return e.eatWhile(/[\w.%]/),y("number","unit");if(e.match(/^-[\w\\\-]*/))return e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?y("variable-2","variable-definition"):y("variable-2","variable");if(e.match(/^\w+-/))return y("meta","meta")}else return/[,+>*\/]/.test(r)?y(null,"select-op"):r=="."&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?y("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(r)?y(null,r):e.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(e.current())&&(n.tokenize=ce),y("variable callee","variable")):/[\w\\\-]/.test(r)?(e.eatWhile(/[\w\\\-]/),y("property","word")):y(null,null)}function re(e){return function(n,r){for(var m=!1,I;(I=n.next())!=null;){if(I==e&&!m){e==")"&&n.backUp(1);break}m=!m&&I=="\\"}return(I==e||!m&&e!=")")&&(r.tokenize=null),y("string","string")}}function ce(e,n){return e.next(),e.match(/^\s*[\"\')]/,!1)?n.tokenize=null:n.tokenize=re(")"),y(null,"(")}function te(e,n,r){this.type=e,this.indent=n,this.prev=r}function v(e,n,r,m){return e.context=new te(r,n.indentation()+(m===!1?0:j),e.context),r}function $(e){return e.context.prev&&(e.context=e.context.prev),e.context.type}function R(e,n,r){return w[r.context.type](e,n,r)}function V(e,n,r,m){for(var I=m||1;I>0;I--)r.context=r.context.prev;return R(e,n,r)}function ne(e){var n=e.current().toLowerCase();Q.hasOwnProperty(n)?u="atom":J.hasOwnProperty(n)?u="keyword":u="variable"}var w={};return w.top=function(e,n,r){if(e=="{")return v(r,n,"block");if(e=="}"&&r.context.prev)return $(r);if(le&&/@component/i.test(e))return v(r,n,"atComponentBlock");if(/^@(-moz-)?document$/i.test(e))return v(r,n,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(e))return v(r,n,"atBlock");if(/^@(font-face|counter-style)/i.test(e))return r.stateArg=e,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))return"keyframes";if(e&&e.charAt(0)=="@")return v(r,n,"at");if(e=="hash")u="builtin";else if(e=="word")u="tag";else{if(e=="variable-definition")return"maybeprop";if(e=="interpolation")return v(r,n,"interpolation");if(e==":")return"pseudo";if(G&&e=="(")return v(r,n,"parens")}return r.context.type},w.block=function(e,n,r){if(e=="word"){var m=n.current().toLowerCase();return T.hasOwnProperty(m)?(u="property","maybeprop"):L.hasOwnProperty(m)?(u=ee?"string-2":"property","maybeprop"):G?(u=n.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(u+=" error","maybeprop")}else return e=="meta"?"block":!G&&(e=="hash"||e=="qualifier")?(u="error","block"):w.top(e,n,r)},w.maybeprop=function(e,n,r){return e==":"?v(r,n,"prop"):R(e,n,r)},w.prop=function(e,n,r){if(e==";")return $(r);if(e=="{"&&G)return v(r,n,"propBlock");if(e=="}"||e=="{")return V(e,n,r);if(e=="(")return v(r,n,"parens");if(e=="hash"&&!/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(n.current()))u+=" error";else if(e=="word")ne(n);else if(e=="interpolation")return v(r,n,"interpolation");return"prop"},w.propBlock=function(e,n,r){return e=="}"?$(r):e=="word"?(u="property","maybeprop"):r.context.type},w.parens=function(e,n,r){return e=="{"||e=="}"?V(e,n,r):e==")"?$(r):e=="("?v(r,n,"parens"):e=="interpolation"?v(r,n,"interpolation"):(e=="word"&&ne(n),"parens")},w.pseudo=function(e,n,r){return e=="meta"?"pseudo":e=="word"?(u="variable-3",r.context.type):R(e,n,r)},w.documentTypes=function(e,n,r){return e=="word"&&t.hasOwnProperty(n.current())?(u="tag",r.context.type):w.atBlock(e,n,r)},w.atBlock=function(e,n,r){if(e=="(")return v(r,n,"atBlock_parens");if(e=="}"||e==";")return V(e,n,r);if(e=="{")return $(r)&&v(r,n,G?"block":"top");if(e=="interpolation")return v(r,n,"interpolation");if(e=="word"){var m=n.current().toLowerCase();m=="only"||m=="not"||m=="and"||m=="or"?u="keyword":o.hasOwnProperty(m)?u="attribute":i.hasOwnProperty(m)?u="property":s.hasOwnProperty(m)?u="keyword":T.hasOwnProperty(m)?u="property":L.hasOwnProperty(m)?u=ee?"string-2":"property":Q.hasOwnProperty(m)?u="atom":J.hasOwnProperty(m)?u="keyword":u="error"}return r.context.type},w.atComponentBlock=function(e,n,r){return e=="}"?V(e,n,r):e=="{"?$(r)&&v(r,n,G?"block":"top",!1):(e=="word"&&(u="error"),r.context.type)},w.atBlock_parens=function(e,n,r){return e==")"?$(r):e=="{"||e=="}"?V(e,n,r,2):w.atBlock(e,n,r)},w.restricted_atBlock_before=function(e,n,r){return e=="{"?v(r,n,"restricted_atBlock"):e=="word"&&r.stateArg=="@counter-style"?(u="variable","restricted_atBlock_before"):R(e,n,r)},w.restricted_atBlock=function(e,n,r){return e=="}"?(r.stateArg=null,$(r)):e=="word"?(r.stateArg=="@font-face"&&!ie.hasOwnProperty(n.current().toLowerCase())||r.stateArg=="@counter-style"&&!oe.hasOwnProperty(n.current().toLowerCase())?u="error":u="property","maybeprop"):"restricted_atBlock"},w.keyframes=function(e,n,r){return e=="word"?(u="variable","keyframes"):e=="{"?v(r,n,"top"):R(e,n,r)},w.at=function(e,n,r){return e==";"?$(r):e=="{"||e=="}"?V(e,n,r):(e=="word"?u="tag":e=="hash"&&(u="builtin"),"at")},w.interpolation=function(e,n,r){return e=="}"?$(r):e=="{"||e==";"?V(e,n,r):(e=="word"?u="variable":e!="variable"&&e!="("&&e!=")"&&(u="error"),"interpolation")},{startState:function(e){return{tokenize:null,state:N?"block":"top",stateArg:null,context:new te(N?"block":"top",e||0,null)}},token:function(e,n){if(!n.tokenize&&e.eatSpace())return null;var r=(n.tokenize||se)(e,n);return r&&typeof r=="object"&&(Y=r[1],r=r[0]),u=r,Y!="comment"&&(n.state=w[n.state](Y,e,n)),u},indent:function(e,n){var r=e.context,m=n&&n.charAt(0),I=r.indent;return r.type=="prop"&&(m=="}"||m==")")&&(r=r.prev),r.prev&&(m=="}"&&(r.type=="block"||r.type=="top"||r.type=="interpolation"||r.type=="restricted_atBlock")?(r=r.prev,I=r.indent):(m==")"&&(r.type=="parens"||r.type=="atBlock_parens")||m=="{"&&(r.type=="at"||r.type=="atBlock"))&&(I=Math.max(0,r.indent-j))),I},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:ae,fold:"brace"}});function S(c){for(var a={},N=0;N<c.length;++N)a[c[N].toLowerCase()]=!0;return a}var H=["domain","regexp","url","url-prefix"],U=S(H),W=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],B=S(W),b=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],E=S(b),F=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],d=S(F),l=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],f=S(l),k=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],x=S(k),P=["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],_=S(P),K=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],p=S(K),g=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],M=S(g),q=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],O=S(q),D=H.concat(W).concat(b).concat(F).concat(l).concat(k).concat(g).concat(q);h.registerHelper("hintWords","css",D);function z(c,a){for(var N=!1,j;(j=c.next())!=null;){if(N&&j=="/"){a.tokenize=null;break}N=j=="*"}return["comment","comment"]}h.defineMIME("text/css",{documentTypes:U,mediaTypes:B,mediaFeatures:E,mediaValueKeywords:d,propertyKeywords:f,nonStandardPropertyKeywords:x,fontProperties:_,counterDescriptors:p,colorKeywords:M,valueKeywords:O,tokenHooks:{"/":function(c,a){return c.eat("*")?(a.tokenize=z,z(c,a)):!1}},name:"css"}),h.defineMIME("text/x-scss",{mediaTypes:B,mediaFeatures:E,mediaValueKeywords:d,propertyKeywords:f,nonStandardPropertyKeywords:x,colorKeywords:M,valueKeywords:O,fontProperties:_,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(c,a){return c.eat("/")?(c.skipToEnd(),["comment","comment"]):c.eat("*")?(a.tokenize=z,z(c,a)):["operator","operator"]},":":function(c){return c.match(/^\s*\{/,!1)?[null,null]:!1},$:function(c){return c.match(/^[\w-]+/),c.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(c){return c.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),h.defineMIME("text/x-less",{mediaTypes:B,mediaFeatures:E,mediaValueKeywords:d,propertyKeywords:f,nonStandardPropertyKeywords:x,colorKeywords:M,valueKeywords:O,fontProperties:_,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(c,a){return c.eat("/")?(c.skipToEnd(),["comment","comment"]):c.eat("*")?(a.tokenize=z,z(c,a)):["operator","operator"]},"@":function(c){return c.eat("{")?[null,"interpolation"]:c.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)?!1:(c.eatWhile(/[\w\\\-]/),c.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),h.defineMIME("text/x-gss",{documentTypes:U,mediaTypes:B,mediaFeatures:E,propertyKeywords:f,nonStandardPropertyKeywords:x,fontProperties:_,counterDescriptors:p,colorKeywords:M,valueKeywords:O,supportsAtComponent:!0,tokenHooks:{"/":function(c,a){return c.eat("*")?(a.tokenize=z,z(c,a)):!1}},name:"css",helperType:"gss"})})},16531:function(X,Z,C){(function(h){h(C(4631),C(29589),C(96876),C(36629))})(function(h){"use strict";var S={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function H(d,l,f){var k=d.current(),x=k.search(l);return x>-1?d.backUp(k.length-x):k.match(/<\/?$/)&&(d.backUp(k.length),d.match(l,!1)||d.match(k)),f}var U={};function W(d){var l=U[d];return l||(U[d]=new RegExp("\\s+"+d+`\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))}function B(d,l){var f=d.match(W(l));return f?/^\s*(.*?)\s*$/.exec(f[2])[1]:""}function b(d,l){return new RegExp((l?"^":"")+"</\\s*"+d+"\\s*>","i")}function E(d,l){for(var f in d)for(var k=l[f]||(l[f]=[]),x=d[f],P=x.length-1;P>=0;P--)k.unshift(x[P])}function F(d,l){for(var f=0;f<d.length;f++){var k=d[f];if(!k[0]||k[1].test(B(l,k[0])))return k[2]}}h.defineMode("htmlmixed",function(d,l){var f=h.getMode(d,{name:"xml",htmlMode:!0,multilineTagIndentFactor:l.multilineTagIndentFactor,multilineTagIndentPastTag:l.multilineTagIndentPastTag,allowMissingTagName:l.allowMissingTagName}),k={},x=l&&l.tags,P=l&&l.scriptTypes;if(E(S,k),x&&E(x,k),P)for(var _=P.length-1;_>=0;_--)k.script.unshift(["type",P[_].matches,P[_].mode]);function K(p,g){var M=f.token(p,g.htmlState),q=/\btag\b/.test(M),O;if(q&&!/[<>\s\/]/.test(p.current())&&(O=g.htmlState.tagName&&g.htmlState.tagName.toLowerCase())&&k.hasOwnProperty(O))g.inTag=O+" ";else if(g.inTag&&q&&/>$/.test(p.current())){var D=/^([\S]+) (.*)/.exec(g.inTag);g.inTag=null;var z=p.current()==">"&&F(k[D[1]],D[2]),c=h.getMode(d,z),a=b(D[1],!0),N=b(D[1],!1);g.token=function(j,A){return j.match(a,!1)?(A.token=K,A.localState=A.localMode=null,null):H(j,N,A.localMode.token(j,A.localState))},g.localMode=c,g.localState=h.startState(c,f.indent(g.htmlState,"",""))}else g.inTag&&(g.inTag+=p.current(),p.eol()&&(g.inTag+=" "));return M}return{startState:function(){var p=h.startState(f);return{token:K,inTag:null,localMode:null,localState:null,htmlState:p}},copyState:function(p){var g;return p.localState&&(g=h.copyState(p.localMode,p.localState)),{token:p.token,inTag:p.inTag,localMode:p.localMode,localState:g,htmlState:h.copyState(f,p.htmlState)}},token:function(p,g){return g.token(p,g)},indent:function(p,g,M){return!p.localMode||/^\s*<\//.test(g)?f.indent(p.htmlState,g,M):p.localMode.indent?p.localMode.indent(p.localState,g,M):h.Pass},innerMode:function(p){return{state:p.localState||p.htmlState,mode:p.localMode||f}}}},"xml","javascript","css"),h.defineMIME("text/html","htmlmixed")})},29589:function(X,Z,C){(function(h){h(C(4631))})(function(h){"use strict";var S={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},H={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};h.defineMode("xml",function(U,W){var B=U.indentUnit,b={},E=W.htmlMode?S:H;for(var F in E)b[F]=E[F];for(var F in W)b[F]=W[F];var d,l;function f(t,o){function i(L){return o.tokenize=L,L(t,o)}var s=t.next();if(s=="<")return t.eat("!")?t.eat("[")?t.match("CDATA[")?i(P("atom","]]>")):null:t.match("--")?i(P("comment","-->")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),i(_(1))):null:t.eat("?")?(t.eatWhile(/[\w\._\-]/),o.tokenize=P("meta","?>"),"meta"):(d=t.eat("/")?"closeTag":"openTag",o.tokenize=k,"tag bracket");if(s=="&"){var T;return t.eat("#")?t.eat("x")?T=t.eatWhile(/[a-fA-F\d]/)&&t.eat(";"):T=t.eatWhile(/[\d]/)&&t.eat(";"):T=t.eatWhile(/[\w\.\-:]/)&&t.eat(";"),T?"atom":"error"}else return t.eatWhile(/[^&<]/),null}f.isInText=!0;function k(t,o){var i=t.next();if(i==">"||i=="/"&&t.eat(">"))return o.tokenize=f,d=i==">"?"endTag":"selfcloseTag","tag bracket";if(i=="=")return d="equals",null;if(i=="<"){o.tokenize=f,o.state=q,o.tagName=o.tagStart=null;var s=o.tokenize(t,o);return s?s+" tag error":"tag error"}else return/[\'\"]/.test(i)?(o.tokenize=x(i),o.stringStartCol=t.column(),o.tokenize(t,o)):(t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function x(t){var o=function(i,s){for(;!i.eol();)if(i.next()==t){s.tokenize=k;break}return"string"};return o.isInAttribute=!0,o}function P(t,o){return function(i,s){for(;!i.eol();){if(i.match(o)){s.tokenize=f;break}i.next()}return t}}function _(t){return function(o,i){for(var s;(s=o.next())!=null;){if(s=="<")return i.tokenize=_(t+1),i.tokenize(o,i);if(s==">")if(t==1){i.tokenize=f;break}else return i.tokenize=_(t-1),i.tokenize(o,i)}return"meta"}}function K(t){return t&&t.toLowerCase()}function p(t,o,i){this.prev=t.context,this.tagName=o||"",this.indent=t.indented,this.startOfLine=i,(b.doNotIndent.hasOwnProperty(o)||t.context&&t.context.noIndent)&&(this.noIndent=!0)}function g(t){t.context&&(t.context=t.context.prev)}function M(t,o){for(var i;;){if(!t.context||(i=t.context.tagName,!b.contextGrabbers.hasOwnProperty(K(i))||!b.contextGrabbers[K(i)].hasOwnProperty(K(o))))return;g(t)}}function q(t,o,i){return t=="openTag"?(i.tagStart=o.column(),O):t=="closeTag"?D:q}function O(t,o,i){return t=="word"?(i.tagName=o.current(),l="tag",a):b.allowMissingTagName&&t=="endTag"?(l="tag bracket",a(t,o,i)):(l="error",O)}function D(t,o,i){if(t=="word"){var s=o.current();return i.context&&i.context.tagName!=s&&b.implicitlyClosed.hasOwnProperty(K(i.context.tagName))&&g(i),i.context&&i.context.tagName==s||b.matchClosing===!1?(l="tag",z):(l="tag error",c)}else return b.allowMissingTagName&&t=="endTag"?(l="tag bracket",z(t,o,i)):(l="error",c)}function z(t,o,i){return t!="endTag"?(l="error",z):(g(i),q)}function c(t,o,i){return l="error",z(t,o,i)}function a(t,o,i){if(t=="word")return l="attribute",N;if(t=="endTag"||t=="selfcloseTag"){var s=i.tagName,T=i.tagStart;return i.tagName=i.tagStart=null,t=="selfcloseTag"||b.autoSelfClosers.hasOwnProperty(K(s))?M(i,s):(M(i,s),i.context=new p(i,s,T==i.indented)),q}return l="error",a}function N(t,o,i){return t=="equals"?j:(b.allowMissing||(l="error"),a(t,o,i))}function j(t,o,i){return t=="string"?A:t=="word"&&b.allowUnquoted?(l="string",a):(l="error",a(t,o,i))}function A(t,o,i){return t=="string"?A:a(t,o,i)}return{startState:function(t){var o={tokenize:f,state:q,indented:t||0,tagName:null,tagStart:null,context:null};return t!=null&&(o.baseIndent=t),o},token:function(t,o){if(!o.tagName&&t.sol()&&(o.indented=t.indentation()),t.eatSpace())return null;d=null;var i=o.tokenize(t,o);return(i||d)&&i!="comment"&&(l=null,o.state=o.state(d||i,t,o),l&&(i=l=="error"?i+" error":l)),i},indent:function(t,o,i){var s=t.context;if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+B;if(s&&s.noIndent)return h.Pass;if(t.tokenize!=k&&t.tokenize!=f)return i?i.match(/^(\s*)/)[0].length:0;if(t.tagName)return b.multilineTagIndentPastTag!==!1?t.tagStart+t.tagName.length+2:t.tagStart+B*(b.multilineTagIndentFactor||1);if(b.alignCDATA&&/<!\[CDATA\[/.test(o))return 0;var T=o&&/^<(\/)?([\w_:\.-]*)/.exec(o);if(T&&T[1])for(;s;)if(s.tagName==T[2]){s=s.prev;break}else if(b.implicitlyClosed.hasOwnProperty(K(s.tagName)))s=s.prev;else break;else if(T)for(;s;){var L=b.contextGrabbers[K(s.tagName)];if(L&&L.hasOwnProperty(K(T[2])))s=s.prev;else break}for(;s&&s.prev&&!s.startOfLine;)s=s.prev;return s?s.indent+B:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:b.htmlMode?"html":"xml",helperType:b.htmlMode?"html":"xml",skipAttribute:function(t){t.state==j&&(t.state=a)},xmlCurrentTag:function(t){return t.tagName?{name:t.tagName,close:t.type=="closeTag"}:null},xmlCurrentContext:function(t){for(var o=[],i=t.context;i;i=i.prev)o.push(i.tagName);return o.reverse()}}}),h.defineMIME("text/xml","xml"),h.defineMIME("application/xml","xml"),h.mimeModes.hasOwnProperty("text/html")||h.defineMIME("text/html",{name:"xml",htmlMode:!0})})}}]);
