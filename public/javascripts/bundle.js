!function e(t,r,n){function o(s,a){if(!r[s]){if(!t[s]){var i="function"==typeof require&&require;if(!a&&i)return i(s,!0);if(l)return l(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var c=r[s]={exports:{}};t[s][0].call(c.exports,function(e){var r=t[s][1][e];return o(r?r:e)},c,c.exports,e,t,r,n)}return r[s].exports}for(var l="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){function n(e){return e.replace(/[^\u0000-\u007e]/g,function(e){return l[e]||e})}r.remove=n;for(var o=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],l={},s=0;s<o.length;s+=1)for(var a=o[s].chars,i=0;i<a.length;i+=1)l[a[i]]=o[s].base},{}],2:[function(e,t,r){(function(n){!function(e){if("object"==typeof r&&"undefined"!=typeof t)t.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;o="undefined"!=typeof window?window:"undefined"!=typeof n?n:"undefined"!=typeof self?self:this,o.flexibility=e()}}(function(){return function t(r,n,o){function l(a,i){if(!n[a]){if(!r[a]){var f="function"==typeof e&&e;if(!i&&f)return f(a,!0);if(s)return s(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[a]={exports:{}};r[a][0].call(d.exports,function(e){var t=r[a][1][e];return l(t?t:e)},d,d.exports,t,r,n,o)}return n[a].exports}for(var s="function"==typeof e&&e,a=0;a<o.length;a++)l(o[a]);return l}({1:[function(e,t,r){t.exports=function(e){var t,r,n,o=-1;if(e.lines.length>1&&"flex-start"===e.style.alignContent)for(t=0;n=e.lines[++o];)n.crossStart=t,t+=n.cross;else if(e.lines.length>1&&"flex-end"===e.style.alignContent)for(t=e.flexStyle.crossSpace;n=e.lines[++o];)n.crossStart=t,t+=n.cross;else if(e.lines.length>1&&"center"===e.style.alignContent)for(t=e.flexStyle.crossSpace/2;n=e.lines[++o];)n.crossStart=t,t+=n.cross;else if(e.lines.length>1&&"space-between"===e.style.alignContent)for(r=e.flexStyle.crossSpace/(e.lines.length-1),t=0;n=e.lines[++o];)n.crossStart=t,t+=n.cross+r;else if(e.lines.length>1&&"space-around"===e.style.alignContent)for(r=2*e.flexStyle.crossSpace/(2*e.lines.length),t=r/2;n=e.lines[++o];)n.crossStart=t,t+=n.cross+r;else for(r=e.flexStyle.crossSpace/e.lines.length,t=e.flexStyle.crossInnerBefore;n=e.lines[++o];)n.crossStart=t,n.cross+=r,t+=n.cross}},{}],2:[function(e,t,r){t.exports=function(e){for(var t,r=-1;line=e.lines[++r];)for(t=-1;child=line.children[++t];){var n=child.style.alignSelf;"auto"===n&&(n=e.style.alignItems),"flex-start"===n?child.flexStyle.crossStart=line.crossStart:"flex-end"===n?child.flexStyle.crossStart=line.crossStart+line.cross-child.flexStyle.crossOuter:"center"===n?child.flexStyle.crossStart=line.crossStart+(line.cross-child.flexStyle.crossOuter)/2:(child.flexStyle.crossStart=line.crossStart,child.flexStyle.crossOuter=line.cross,child.flexStyle.cross=child.flexStyle.crossOuter-child.flexStyle.crossBefore-child.flexStyle.crossAfter)}}},{}],3:[function(e,t,r){t.exports=function e(t,e){var r="row"===e||"row-reverse"===e,n=t.mainAxis;if(n){var o=r&&"inline"===n||!r&&"block"===n;o||(t.flexStyle={main:t.flexStyle.cross,cross:t.flexStyle.main,mainOffset:t.flexStyle.crossOffset,crossOffset:t.flexStyle.mainOffset,mainBefore:t.flexStyle.crossBefore,mainAfter:t.flexStyle.crossAfter,crossBefore:t.flexStyle.mainBefore,crossAfter:t.flexStyle.mainAfter,mainInnerBefore:t.flexStyle.crossInnerBefore,mainInnerAfter:t.flexStyle.crossInnerAfter,crossInnerBefore:t.flexStyle.mainInnerBefore,crossInnerAfter:t.flexStyle.mainInnerAfter,mainBorderBefore:t.flexStyle.crossBorderBefore,mainBorderAfter:t.flexStyle.crossBorderAfter,crossBorderBefore:t.flexStyle.mainBorderBefore,crossBorderAfter:t.flexStyle.mainBorderAfter})}else r?t.flexStyle={main:t.style.width,cross:t.style.height,mainOffset:t.style.offsetWidth,crossOffset:t.style.offsetHeight,mainBefore:t.style.marginLeft,mainAfter:t.style.marginRight,crossBefore:t.style.marginTop,crossAfter:t.style.marginBottom,mainInnerBefore:t.style.paddingLeft,mainInnerAfter:t.style.paddingRight,crossInnerBefore:t.style.paddingTop,crossInnerAfter:t.style.paddingBottom,mainBorderBefore:t.style.borderLeftWidth,mainBorderAfter:t.style.borderRightWidth,crossBorderBefore:t.style.borderTopWidth,crossBorderAfter:t.style.borderBottomWidth}:t.flexStyle={main:t.style.height,cross:t.style.width,mainOffset:t.style.offsetHeight,crossOffset:t.style.offsetWidth,mainBefore:t.style.marginTop,mainAfter:t.style.marginBottom,crossBefore:t.style.marginLeft,crossAfter:t.style.marginRight,mainInnerBefore:t.style.paddingTop,mainInnerAfter:t.style.paddingBottom,crossInnerBefore:t.style.paddingLeft,crossInnerAfter:t.style.paddingRight,mainBorderBefore:t.style.borderTopWidth,mainBorderAfter:t.style.borderBottomWidth,crossBorderBefore:t.style.borderLeftWidth,crossBorderAfter:t.style.borderRightWidth},"content-box"===t.style.boxSizing&&("number"==typeof t.flexStyle.main&&(t.flexStyle.main+=t.flexStyle.mainInnerBefore+t.flexStyle.mainInnerAfter+t.flexStyle.mainBorderBefore+t.flexStyle.mainBorderAfter),"number"==typeof t.flexStyle.cross&&(t.flexStyle.cross+=t.flexStyle.crossInnerBefore+t.flexStyle.crossInnerAfter+t.flexStyle.crossBorderBefore+t.flexStyle.crossBorderAfter));t.mainAxis=r?"inline":"block",t.crossAxis=r?"block":"inline","number"==typeof t.style.flexBasis&&(t.flexStyle.main=t.style.flexBasis+t.flexStyle.mainInnerBefore+t.flexStyle.mainInnerAfter+t.flexStyle.mainBorderBefore+t.flexStyle.mainBorderAfter),t.flexStyle.mainOuter=t.flexStyle.main,t.flexStyle.crossOuter=t.flexStyle.cross,"auto"===t.flexStyle.mainOuter&&(t.flexStyle.mainOuter=t.flexStyle.mainOffset),"auto"===t.flexStyle.crossOuter&&(t.flexStyle.crossOuter=t.flexStyle.crossOffset),"number"==typeof t.flexStyle.mainBefore&&(t.flexStyle.mainOuter+=t.flexStyle.mainBefore),"number"==typeof t.flexStyle.mainAfter&&(t.flexStyle.mainOuter+=t.flexStyle.mainAfter),"number"==typeof t.flexStyle.crossBefore&&(t.flexStyle.crossOuter+=t.flexStyle.crossBefore),"number"==typeof t.flexStyle.crossAfter&&(t.flexStyle.crossOuter+=t.flexStyle.crossAfter)}},{}],4:[function(e,t,r){var n=e("../reduce");t.exports=function(e){if(e.mainSpace>0){var t=n(e.children,function(e,t){return e+parseFloat(t.style.flexGrow)},0);t>0&&(e.main=n(e.children,function(r,n){return"auto"===n.flexStyle.main?n.flexStyle.main=n.flexStyle.mainOffset+parseFloat(n.style.flexGrow)/t*e.mainSpace:n.flexStyle.main+=parseFloat(n.style.flexGrow)/t*e.mainSpace,n.flexStyle.mainOuter=n.flexStyle.main+n.flexStyle.mainBefore+n.flexStyle.mainAfter,r+n.flexStyle.mainOuter},0),e.mainSpace=0)}}},{"../reduce":12}],5:[function(e,t,r){var n=e("../reduce");t.exports=function(e){if(e.mainSpace<0){var t=n(e.children,function(e,t){return e+parseFloat(t.style.flexShrink)},0);t>0&&(e.main=n(e.children,function(r,n){return n.flexStyle.main+=parseFloat(n.style.flexShrink)/t*e.mainSpace,n.flexStyle.mainOuter=n.flexStyle.main+n.flexStyle.mainBefore+n.flexStyle.mainAfter,r+n.flexStyle.mainOuter},0),e.mainSpace=0)}}},{"../reduce":12}],6:[function(e,t,r){var n=e("../reduce");t.exports=function(e){var t;e.lines=[t={main:0,cross:0,children:[]}];for(var r,o=-1;r=e.children[++o];)"nowrap"===e.style.flexWrap||0===t.children.length||"auto"===e.flexStyle.main||e.flexStyle.main-e.flexStyle.mainInnerBefore-e.flexStyle.mainInnerAfter-e.flexStyle.mainBorderBefore-e.flexStyle.mainBorderAfter>=t.main+r.flexStyle.mainOuter?(t.main+=r.flexStyle.mainOuter,t.cross=Math.max(t.cross,r.flexStyle.crossOuter)):e.lines.push(t={main:r.flexStyle.mainOuter,cross:r.flexStyle.crossOuter,children:[]}),t.children.push(r);e.flexStyle.mainLines=n(e.lines,function(e,t){return Math.max(e,t.main)},0),e.flexStyle.crossLines=n(e.lines,function(e,t){return e+t.cross},0),"auto"===e.flexStyle.main&&(e.flexStyle.main=Math.max(e.flexStyle.mainOffset,e.flexStyle.mainLines+e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter)),"auto"===e.flexStyle.cross&&(e.flexStyle.cross=Math.max(e.flexStyle.crossOffset,e.flexStyle.crossLines+e.flexStyle.crossInnerBefore+e.flexStyle.crossInnerAfter+e.flexStyle.crossBorderBefore+e.flexStyle.crossBorderAfter)),e.flexStyle.crossSpace=e.flexStyle.cross-e.flexStyle.crossInnerBefore-e.flexStyle.crossInnerAfter-e.flexStyle.crossBorderBefore-e.flexStyle.crossBorderAfter-e.flexStyle.crossLines,e.flexStyle.mainOuter=e.flexStyle.main+e.flexStyle.mainBefore+e.flexStyle.mainAfter,e.flexStyle.crossOuter=e.flexStyle.cross+e.flexStyle.crossBefore+e.flexStyle.crossAfter}},{"../reduce":12}],7:[function(e,t,r){function n(t){for(var r,n=-1;r=t.children[++n];)e("./flex-direction")(r,t.style.flexDirection);e("./flex-direction")(t,t.style.flexDirection),e("./order")(t),e("./flexbox-lines")(t),e("./align-content")(t),n=-1;for(var o;o=t.lines[++n];)o.mainSpace=t.flexStyle.main-t.flexStyle.mainInnerBefore-t.flexStyle.mainInnerAfter-t.flexStyle.mainBorderBefore-t.flexStyle.mainBorderAfter-o.main,e("./flex-grow")(o),e("./flex-shrink")(o),e("./margin-main")(o),e("./margin-cross")(o),e("./justify-content")(o,t.style.justifyContent,t);e("./align-items")(t)}t.exports=n},{"./align-content":1,"./align-items":2,"./flex-direction":3,"./flex-grow":4,"./flex-shrink":5,"./flexbox-lines":6,"./justify-content":8,"./margin-cross":9,"./margin-main":10,"./order":11}],8:[function(e,t,r){t.exports=function(e,t,r){var n,o,l,s=r.flexStyle.mainInnerBefore,a=-1;if("flex-end"===t)for(n=e.mainSpace,n+=s;l=e.children[++a];)l.flexStyle.mainStart=n,n+=l.flexStyle.mainOuter;else if("center"===t)for(n=e.mainSpace/2,n+=s;l=e.children[++a];)l.flexStyle.mainStart=n,n+=l.flexStyle.mainOuter;else if("space-between"===t)for(o=e.mainSpace/(e.children.length-1),n=0,n+=s;l=e.children[++a];)l.flexStyle.mainStart=n,n+=l.flexStyle.mainOuter+o;else if("space-around"===t)for(o=2*e.mainSpace/(2*e.children.length),n=o/2,n+=s;l=e.children[++a];)l.flexStyle.mainStart=n,n+=l.flexStyle.mainOuter+o;else for(n=0,n+=s;l=e.children[++a];)l.flexStyle.mainStart=n,n+=l.flexStyle.mainOuter}},{}],9:[function(e,t,r){t.exports=function(e){for(var t,r=-1;t=e.children[++r];){var n=0;"auto"===t.flexStyle.crossBefore&&++n,"auto"===t.flexStyle.crossAfter&&++n;var o=e.cross-t.flexStyle.crossOuter;"auto"===t.flexStyle.crossBefore&&(t.flexStyle.crossBefore=o/n),"auto"===t.flexStyle.crossAfter&&(t.flexStyle.crossAfter=o/n),"auto"===t.flexStyle.cross?t.flexStyle.crossOuter=t.flexStyle.crossOffset+t.flexStyle.crossBefore+t.flexStyle.crossAfter:t.flexStyle.crossOuter=t.flexStyle.cross+t.flexStyle.crossBefore+t.flexStyle.crossAfter}}},{}],10:[function(e,t,r){t.exports=function(e){for(var t,r=0,n=-1;t=e.children[++n];)"auto"===t.flexStyle.mainBefore&&++r,"auto"===t.flexStyle.mainAfter&&++r;if(r>0){for(n=-1;t=e.children[++n];)"auto"===t.flexStyle.mainBefore&&(t.flexStyle.mainBefore=e.mainSpace/r),"auto"===t.flexStyle.mainAfter&&(t.flexStyle.mainAfter=e.mainSpace/r),"auto"===t.flexStyle.main?t.flexStyle.mainOuter=t.flexStyle.mainOffset+t.flexStyle.mainBefore+t.flexStyle.mainAfter:t.flexStyle.mainOuter=t.flexStyle.main+t.flexStyle.mainBefore+t.flexStyle.mainAfter;e.mainSpace=0}}},{}],11:[function(e,t,r){var n=/^(column|row)-reverse$/;t.exports=function(e){e.children.sort(function(e,t){return e.style.order-t.style.order||e.index-t.index}),n.test(e.style.flexDirection)&&e.children.reverse()}},{}],12:[function(e,t,r){function n(e,t,r){for(var n=e.length,o=-1;++o<n;)o in e&&(r=t(r,e[o],o));return r}t.exports=n},{}],13:[function(e,t,r){function n(e){a(s(e))}var o=e("./read"),l=e("./write"),s=e("./readAll"),a=e("./writeAll");t.exports=n,t.exports.read=o,t.exports.write=l,t.exports.readAll=s,t.exports.writeAll=a},{"./read":15,"./readAll":16,"./write":17,"./writeAll":18}],14:[function(e,t,r){function n(e,t,r){var n=e[t],s=String(n).match(l);if(!s){var f=t.match(i);if(f){var c=e["border"+f[1]+"Style"];return"none"===c?0:a[n]||0}return n}var d=s[1],u=s[2];return"px"===u?1*d:"cm"===u?.3937*d*96:"in"===u?96*d:"mm"===u?.3937*d*96/10:"pc"===u?12*d*96/72:"pt"===u?96*d/72:"rem"===u?16*d:o(n,r)}function o(e,t){s.style.cssText="border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:"+e+"!important",t.parentNode.insertBefore(s,t.nextSibling);var r=s.offsetWidth;return t.parentNode.removeChild(s),r}t.exports=n;var l=/^([-+]?\d*\.?\d+)(%|[a-z]+)$/,s=document.createElement("div"),a={medium:4,none:0,thick:6,thin:2},i=/^border(Bottom|Left|Right|Top)Width$/},{}],15:[function(e,t,r){function n(e){var t={alignContent:"stretch",alignItems:"stretch",alignSelf:"auto",borderBottomStyle:"none",borderBottomWidth:0,borderLeftStyle:"none",borderLeftWidth:0,borderRightStyle:"none",borderRightWidth:0,borderTopStyle:"none",borderTopWidth:0,boxSizing:"content-box",display:"inline",flexBasis:"auto",flexDirection:"row",flexGrow:0,flexShrink:1,flexWrap:"nowrap",justifyContent:"flex-start",height:"auto",marginTop:0,marginRight:0,marginLeft:0,marginBottom:0,paddingTop:0,paddingRight:0,paddingLeft:0,paddingBottom:0,maxHeight:"none",maxWidth:"none",minHeight:0,minWidth:0,order:0,position:"static",width:"auto"},r=e instanceof Element;if(r){var n=e.hasAttribute("data-style"),a=n?e.getAttribute("data-style"):e.getAttribute("style")||"";n||e.setAttribute("data-style",a);var i=window.getComputedStyle&&getComputedStyle(e)||{};s(t,i);var c=e.currentStyle||{};o(t,c),l(t,a);for(var d in t)t[d]=f(t,d,e);var u=e.getBoundingClientRect();t.offsetHeight=u.height||e.offsetHeight,t.offsetWidth=u.width||e.offsetWidth}var y={element:e,style:t};return y}function o(e,t){for(var r in e){var n=r in t;if(n)e[r]=t[r];else{var o=r.replace(/[A-Z]/g,"-$&").toLowerCase(),l=o in t;l&&(e[r]=t[o])}}var s="-js-display"in t;s&&(e.display=t["-js-display"])}function l(e,t){for(var r;r=a.exec(t);){var n=r[1].toLowerCase().replace(/-[a-z]/g,function(e){return e.slice(1).toUpperCase()});e[n]=r[2]}}function s(e,t){for(var r in e){var n=r in t;n&&!i.test(r)&&(e[r]=t[r])}}t.exports=n;var a=/([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,i=/^(alignSelf|height|width)$/,f=e("./getComputedLength")},{"./getComputedLength":14}],16:[function(e,t,r){function n(e){var t=[];return o(e,t),t}function o(e,t){for(var r,n=l(e),a=[],i=-1;r=e.childNodes[++i];){var f=3===r.nodeType&&!/^\s*$/.test(r.nodeValue);if(n&&f){var c=r;r=e.insertBefore(document.createElement("flex-item"),c),r.appendChild(c)}var d=r instanceof Element;if(d){var u=o(r,t);if(n){var y=r.style;y.display="inline-block",y.position="absolute",u.style=s(r).style,a.push(u)}}}var x={element:e,children:a};return n&&(x.style=s(e).style,t.push(x)),x}function l(e){var t=e instanceof Element,r=t&&e.getAttribute("data-style"),n=t&&e.currentStyle&&e.currentStyle["-js-display"],o=a.test(r)||i.test(n);return o}t.exports=n;var s=e("../read"),a=/(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,i=/^(inline-)?flex$/i},{"../read":15}],17:[function(e,t,r){function n(e){l(e);var t=e.element.style,r="inline"===e.mainAxis?["main","cross"]:["cross","main"];t.boxSizing="content-box",t.display="block",t.position="relative",t.width=o(e.flexStyle[r[0]]-e.flexStyle[r[0]+"InnerBefore"]-e.flexStyle[r[0]+"InnerAfter"]-e.flexStyle[r[0]+"BorderBefore"]-e.flexStyle[r[0]+"BorderAfter"]),t.height=o(e.flexStyle[r[1]]-e.flexStyle[r[1]+"InnerBefore"]-e.flexStyle[r[1]+"InnerAfter"]-e.flexStyle[r[1]+"BorderBefore"]-e.flexStyle[r[1]+"BorderAfter"]);for(var n,s=-1;n=e.children[++s];){var a=n.element.style,i="inline"===n.mainAxis?["main","cross"]:["cross","main"];a.boxSizing="content-box",a.display="block",a.position="absolute","auto"!==n.flexStyle[i[0]]&&(a.width=o(n.flexStyle[i[0]]-n.flexStyle[i[0]+"InnerBefore"]-n.flexStyle[i[0]+"InnerAfter"]-n.flexStyle[i[0]+"BorderBefore"]-n.flexStyle[i[0]+"BorderAfter"])),"auto"!==n.flexStyle[i[1]]&&(a.height=o(n.flexStyle[i[1]]-n.flexStyle[i[1]+"InnerBefore"]-n.flexStyle[i[1]+"InnerAfter"]-n.flexStyle[i[1]+"BorderBefore"]-n.flexStyle[i[1]+"BorderAfter"])),a.top=o(n.flexStyle[i[1]+"Start"]),a.left=o(n.flexStyle[i[0]+"Start"]),a.marginTop=o(n.flexStyle[i[1]+"Before"]),a.marginRight=o(n.flexStyle[i[0]+"After"]),a.marginBottom=o(n.flexStyle[i[1]+"After"]),a.marginLeft=o(n.flexStyle[i[0]+"Before"])}}function o(e){return"string"==typeof e?e:Math.max(e,0)+"px"}t.exports=n;var l=e("../flexbox")},{"../flexbox":7}],18:[function(e,t,r){function n(e){for(var t,r=-1;t=e[++r];)o(t)}t.exports=n;var o=e("../write")},{"../write":17}]},{},[13])(13)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,r){!function(){var e=this,n={};"undefined"!=typeof r?t.exports=n:e.fuzzy=n,n.simpleFilter=function(e,t){return t.filter(function(t){return n.test(e,t)})},n.test=function(e,t){return null!==n.match(e,t)},n.match=function(e,t,r){r=r||{};var n,o=0,l=[],s=t.length,a=0,i=0,f=r.pre||"",c=r.post||"",d=r.caseSensitive&&t||t.toLowerCase();e=r.caseSensitive&&e||e.toLowerCase();for(var u=0;u<s;u++)n=t[u],d[u]===e[o]?(n=f+n+c,o+=1,i+=1+i):i=0,a+=i,l[l.length]=n;return o===e.length?{rendered:l.join(""),score:a}:null},n.filter=function(e,t,r){return r=r||{},t.reduce(function(t,o,l,s){var a=o;r.extract&&(a=r.extract(o));var i=n.match(e,a,r);return null!=i&&(t[t.length]={string:i.rendered,score:i.score,index:l,original:o}),t},[]).sort(function(e,t){var r=t.score-e.score;return r?r:e.index-t.index})}}()},{}],4:[function(e,t,r){"use strict";function n(e,t,r){if(e+="",t-=e.length,t<=0)return e;if(r||0===r||(r=" "),r+=""," "===r&&t<10)return o[t]+e;for(var n="";;){if(1&t&&(n+=r),t>>=1,!t)break;r+=r}return n+e}t.exports=n;var o=[""," ","  ","   ","    ","     ","      ","       ","        ","         "]},{}],5:[function(e,t,r){"use strict";var n=function(){console.log("sinterklaas easter egg activated");var e=document.querySelector("#search"),t=e.querySelector('input[type="text"]'),r=document.querySelector(".autocomplete"),n=!1,o=[[{woord:"Hoor ",time:0},{woord:"wie ",time:.3},{woord:"klopt ",time:.6},{woord:"daar ",time:.9},{woord:"kind",time:1.2},{woord:"'ren",time:1.5}],[{woord:"Hoor ",time:1.8},{woord:"wie ",time:2.1},{woord:"klopt ",time:2.5},{woord:"daar ",time:2.8},{woord:"kind",time:3.1},{woord:"'ren",time:3.4}],[{woord:"Hoor ",time:3.7},{woord:"wie ",time:4},{woord:"tikt ",time:4.3},{woord:"daar ",time:4.6},{woord:"zacht",time:4.8},{woord:"jes ",time:5.3},{woord:"tegen ",time:5.5},{woord:"'t ",time:6.1},{woord:"raam ",time:6.2}]],l=t.value;t.value="",t.placeholder="",o.forEach(function(e,r){e.forEach(function(e,s){setTimeout(function(){0===s&&(t.placeholder=""),t.placeholder+=e.woord},1e3*e.time),o.length===r+1&&o[r].length===s+1&&setTimeout(function(){""===t.value&&(t.value=l),t.placeholder="Zoeken",n=!0},1e3*e.time+1e3)})}),t.addEventListener("focus",function(){if(n){r.innerHTML="";var e=["'t Is een vreemd'ling zeker,","die verdwaalt is zeker.","'k Zal eens even vragen naar zijn naam:"];e.forEach(function(e){var t=document.createElement("li");t.innerHTML=e,r.appendChild(t)})}}),t.addEventListener("input",function(){n&&("sint nicolaas"!==t.value.toLowerCase()&&"sintnicolaas"!==t.value.toLowerCase()&&"sint nikolaas"!==t.value.toLowerCase()&&"sintnikolaas"!==t.value.toLowerCase()||(t.value="",window.location.href="https://www.youtube-nocookie.com/embed/jsOiKJ3kKXM?start=30"))})};t.exports={sinterklaas:n}},{}],6:[function(e,t,r){"use strict";function n(e,t,r){return"//"+window.location.host+"/meetingpointProxy/Roosters-AL%2Fdoc%2Fdagroosters%2F"+(l()+e+"%2F"+t+"%2F"+t+o(r,5,"0")+".htm")}var o=e("left-pad"),l=e("./getWeek");t.exports=n},{"./getWeek":7,"left-pad":4}],7:[function(e,t,r){"use strict";function n(){var e=new Date,t=(e.getDay()+6)%7;e.setDate(e.getDate()-t+3);var r=e.valueOf();return e.setMonth(0,1),4!==e.getDay()&&e.setMonth(0,1+(4-e.getDay()+7)%7),1+Math.ceil((r-e)/6048e5)}t.exports=n},{}],8:[function(e,t,r){"use strict";function n(){if(window.localStorage.getItem("fav")){var e=window.localStorage.getItem("fav").split(":"),t=USERS.filter(function(t){return t.type===e[0]&&t.index===Number(e[1])});return t[0]}}function o(e){w&&(e?window.localStorage.setItem("fav",w.type+":"+w.index):window.localStorage.removeItem("fav"),s())}function l(e,t){return null!=e&&null!=t&&(e.type===t.type&&e.index===t.index)}function s(){l(n(),w)?v.innerHTML="&#xE838;":v.innerHTML="&#xE83A"}function a(){0===O?g.innerHTML="Week "+(u()+O):g.innerHTML="<strong>Week "+(u()+O)+"</strong>"}function i(e){if(e&&e.preventDefault(),0!==A.length){var t=B===-1?0:B;w=USERS[A[t].index]}if(null!=w){s(),m.value=w.value,S.innerHTML="",m.blur(),h.src=c(O,w.type,w.index+1);var r=void 0;switch(w.type){case"c":r="Class";break;case"t":r="Teacher";break;case"r":r="Room";break;case"s":r="Student"}var n=w.value;ga(function(){ga("send",{hitType:"event",eventCategory:"search",eventAction:r,eventLabel:n})})}}e("flexibility");var f=e("fuzzy"),c=e("./getURLOfUser"),d=e("diacritics").remove,u=e("./getWeek"),y=e("./easterEggs"),x=document.querySelector("#search"),m=x.querySelector('input[type="text"]'),S=document.querySelector(".autocomplete"),h=document.querySelector("#schedule"),p=document.querySelectorAll('input[type="button"]')[0],b=document.querySelectorAll('input[type="button"]')[1],g=document.querySelector(".current"),v=document.querySelector(".fav");FLAGS.indexOf("NO_FEATURE_DETECT")===-1?document.querySelector("#schedule").getClientRects()[0].bottom!==document.body.getClientRects()[0].bottom?window.location="http://www.meetingpointmco.nl/Roosters-AL/doc/":window.onerror=function(){window.location="http://www.meetingpointmco.nl/Roosters-AL/doc/"}:console.log("feature detection is OFF");var B=-1,w=void 0,A=[],O=0;a(),x.addEventListener("keydown",function(e){if(0!==A.length&&("ArrowDown"===e.key||"ArrowUp"===e.key)){e.preventDefault(),document.querySelector(".selected")&&document.querySelector(".selected").classList.remove("selected");var t="ArrowDown"===e.key?1:-1;B+=t,B<-1?B=A.length-1:B>A.length-1&&(B=-1),B!==-1&&S.children[B].classList.add("selected")}}),x.addEventListener("input",function(e){x.className="",S.innerHTML="",""!==m.value.trim()&&(B=-1,A=f.filter(d(m.value),USERS,{extract:function(e){return d(e.value)}}).slice(0,7),A.forEach(function(e){var t=document.createElement("li");t.innerHTML=""+e.original.value,S.appendChild(t)}))}),x.addEventListener("submit",i),S.addEventListener("click",function(e){S.contains(e.target)&&(B=Array.prototype.indexOf.call(e.target.parentElement.childNodes,e.target),i())}),p.addEventListener("click",function(){O--,a(),i()}),b.addEventListener("click",function(){O++,a(),i()}),m.addEventListener("click",function(){m.select()}),m.addEventListener("blur",function(){var e=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);e||(m.selectionStart=m.selectionEnd=-1)}),x.addEventListener("blur",function(e){S.innerHTML=""}),v.addEventListener("click",function(){o(l(n(),w)?!1:!0)});var L=n();L?!function(){w=L,m.value=w.value,h.src=c(O,w.type,w.index+1),s();var e=void 0;switch(w.type){case"c":e="Class";break;case"t":e="Teacher";break;case"r":e="Room";break;case"s":e="Student"}var t=w.value;ga(function(){ga("send",{hitType:"event",eventCategory:"search fav",eventAction:e,eventLabel:t})})}():""===m.value&&(x.className="no-input",m.focus()),document.body.style="",window.easterEggs=y},{"./easterEggs":5,"./getURLOfUser":6,"./getWeek":7,diacritics:1,flexibility:2,fuzzy:3}]},{},[8]);
