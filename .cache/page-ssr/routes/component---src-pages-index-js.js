"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 3204:
/***/ ((module) => {



const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 6094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/home/fiona/webdev/bellakosmetik2022/bellakosmetik/node_modules/react/index.js"
var index_js_ = __webpack_require__(2236);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 6 modules
var gatsby_browser_entry = __webpack_require__(4718);
;// CONCATENATED MODULE: ./src/components/header.module.css
// Exports
var header = "header-module--header--Zms1V";
var titleLink = "header-module--titleLink--hMFxU";
var navigation = "header-module--navigation--SEHdC";

;// CONCATENATED MODULE: ./src/components/header.js
const Header=()=>{return/*#__PURE__*/index_js_.createElement("header",{className:header},/*#__PURE__*/index_js_.createElement("div",{style:{fontSize:`150%`,margin:`0 auto`,maxWidth:1050,padding:`1.45rem 1.0875rem 1.2rem`}},/*#__PURE__*/index_js_.createElement("div",{style:{textAlign:`center`}},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{style:{textDecoration:`none`},to:"/"},/*#__PURE__*/index_js_.createElement("h1",{style:{margin:0,color:`white`}},"Bella Kosmetik")),/*#__PURE__*/index_js_.createElement("div",{className:navigation},/*#__PURE__*/index_js_.createElement("ul",null,/*#__PURE__*/index_js_.createElement("li",null,/*#__PURE__*/index_js_.createElement("a",{href:"https://bremen.bellakosmetik.de/#Leistungen"},"Leistungen")),/*#__PURE__*/index_js_.createElement("li",null,/*#__PURE__*/index_js_.createElement("a",{href:"https://bremen.bellakosmetik.de/#Offnungszeiten"},"\xD6ffnungszeiten")),/*#__PURE__*/index_js_.createElement("li",null,/*#__PURE__*/index_js_.createElement("a",{href:"https://bremen.bellakosmetik.de/#Kontakt"},"Kontakt")))))));};/* harmony default export */ const components_header = (Header);
;// CONCATENATED MODULE: ./src/components/footer.js
const Footer=()=>{return/*#__PURE__*/index_js_.createElement("footer",null,/*#__PURE__*/index_js_.createElement("div",{className:"container",style:{textAlign:`center`}},/*#__PURE__*/index_js_.createElement("hr",null),/*#__PURE__*/index_js_.createElement("div",null,/*#__PURE__*/index_js_.createElement("p",null,"Impressum: Iara Alcobio \xB7 Kornstra\xDFe 116 \xB7 28201 Bremen ")," "),/*#__PURE__*/index_js_.createElement("div",null,/*#__PURE__*/index_js_.createElement("p",null,"Tel: 0421 51700573 \xB7 Mail: iaraalcobio[at]hotmail.de")," "),/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/datenschutz"},/*#__PURE__*/index_js_.createElement("p",null,"Datenschutzerkl\xE4rung")," ")));};/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./src/components/layout.js
const Layout=({pageTitle,children})=>{return/*#__PURE__*/index_js_.createElement("div",null,/*#__PURE__*/index_js_.createElement(components_header,null),/*#__PURE__*/index_js_.createElement("main",null,children),/*#__PURE__*/index_js_.createElement(footer,null));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 8495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/home/fiona/webdev/bellakosmetik2022/bellakosmetik/node_modules/react/index.js"
var index_js_ = __webpack_require__(2236);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/layout.js + 3 modules
var layout = __webpack_require__(6094);
// EXTERNAL MODULE: ./node_modules/camelcase/index.js
var camelcase = __webpack_require__(3204);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=function(e){return console.warn(e);},c=function(e,t){return e-t;},h=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function g(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function p(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,d=e.formats,c=void 0===d?["auto","webp"]:d;return c=c.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:c,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||1.3333333333333333))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/1.3333333333333333):800),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:c}));}function m(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=p(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function f(e){var t,a=(e=p(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,c=e.options,m=e.width,f=e.height,b=e.filename,k=e.reporter,E=void 0===k?{warn:d}:k,M=e.backgroundColor,S=e.placeholderURL;if(a||E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=g(b)):i={width:m,height:f,format:(null==(t=i)?void 0:t.format)||g(b)||"auto"};var N=new Set(e.formats);(0===N.size||N.has("auto")||N.has(""))&&(N.delete("auto"),N.delete(""),N.add(i.format)),N.has("jpg")&&N.has("png")&&(E.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),N.delete("jpg"===i.format?"png":"jpg"));var x=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:d}:o,c=e.breakpoints,h=void 0===c?l:c,g=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(g.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+g.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,c=void 0===u?{warn:d}:u,h=a.width/a.height,g=v(void 0===l?s:l);if(i&&r){var p=y(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):800;var m=i;if(a.width<i||a.height<r){var f=a.width<i?"width":"height";c.warn("\nThe requested "+f+' "'+("width"===f?i:r)+'px" for the image '+t+" was larger than the actual image "+f+" of "+a[f]+"px. If possible, replace the current image with a larger one."),"width"===f?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:g.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}(e):"constrained"===i?w(e):"fullWidth"===i?w(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),I={sources:[]},W=e.sizes;W||(W=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}}(x.presentationWidth,o)),N.forEach(function(e){var t=x.sizes.map(function(t){var i=r(b,t,Math.round(t/x.aspectRatio),e,u,c);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;E.warn("["+a+"] The resolver for image "+b+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===x.unscaledWidth;})||t[0];i&&(I.fallback={src:i.src,srcSet:h(t),sizes:W});}else{var n;null==(n=I.sources)||n.push({srcSet:h(t),sizes:W,type:"image/"+e});}});var j={images:I,layout:o,backgroundColor:M};switch(S&&(j.placeholder={fallback:S}),o){case"fixed":j.width=x.presentationWidth,j.height=x.presentationHeight;break;case"fullWidth":j.width=1,j.height=1/x.aspectRatio;break;case"constrained":j.width=e.width||x.presentationWidth||1,j.height=(j.width||1)/x.aspectRatio;}return j;}var v=function(e){return Array.from(new Set([1].concat(e))).sort(c);};function w(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,d=e.layout,h=a.width/a.height,g=v(void 0===l?s:l);if(i&&r){var p=y(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(800,a.width))/h),i||(i=r*h);var m=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==d||t.includes(i)||t.push(i),{sizes:t=t.sort(c),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}function y(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var b=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),k=(/* unused pure expression or super */ null && (["images","placeholder"]));function E(){return true&&true;}var M=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},S=function(e){var t,a,i;return null==(t=M(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},N=function(e){var t,a,i;return null==(t=M(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function x(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,b);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),f(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function I(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,k),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var W,j=["src","srcSet","loading","alt","shouldLoad"],R=["fallback","sources","shouldLoad"],_=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,j);return/*#__PURE__*/index_js_default().createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},A=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,R),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/index_js_default().createElement(_,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/index_js_default().createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/index_js_default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};_.propTypes={src:prop_types.string.isRequired,alt:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string,shouldLoad:prop_types.bool},A.displayName="Picture",A.propTypes={alt:prop_types.string.isRequired,shouldLoad:prop_types.bool,fallback:prop_types.exact({src:prop_types.string.isRequired,srcSet:prop_types.string,sizes:prop_types.string}),sources:prop_types.arrayOf(prop_types.oneOfType([prop_types.exact({media:prop_types.string.isRequired,type:prop_types.string,sizes:prop_types.string,srcSet:prop_types.string.isRequired}),prop_types.exact({media:prop_types.string,type:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string.isRequired})]))};var O=["fallback"],T=function(t){var a=t.fallback,i=o(t,O);return a?/*#__PURE__*/index_js_default().createElement(A,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/index_js_default().createElement("div",n({},i));};T.displayName="Placeholder",T.propTypes={fallback:prop_types.string,sources:null==(W=A.propTypes)?void 0:W.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var z=function(t){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(A,n({},t)),/*#__PURE__*/index_js_default().createElement("noscript",null,/*#__PURE__*/index_js_default().createElement(A,n({},t,{shouldLoad:!0}))));};z.displayName="MainImage",z.propTypes=A.propTypes;var L=["children"],q=function(){return/*#__PURE__*/index_js_default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},C=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/index_js_default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/index_js_default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/index_js_default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+i+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},D=function(a){var i=a.children,r=o(a,L);return/*#__PURE__*/index_js_default().createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_default().createElement(C,n({},r)),i,/*#__PURE__*/index_js_default().createElement(q,null));},P=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],H=["style","className"],F=function(e){return e.replace(/\n/g,"");},B=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,P);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,M=u.placeholder,S=u.backgroundColor,N=function(e,t,a){var i={},r="gatsby-image-wrapper";return E()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(E()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),x=N.style,I=N.className,W=o(N,H),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?F(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:F(e.srcSet)});})),/*#__PURE__*/index_js_default().createElement(i,n({},W,{style:n({},x,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/index_js_default().createElement(D,{layout:b,width:w,height:y},/*#__PURE__*/index_js_default().createElement(T,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return E()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(M,0,b,w,y,S,m,f))),/*#__PURE__*/index_js_default().createElement(z,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),E()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},G=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],V=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,G);return s&&console.warn(s),r?/*#__PURE__*/index_js_default().createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(B),U=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types_default().number.apply((prop_types_default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},X=new Set(["fixed","fullWidth","constrained"]),Y={src:(prop_types_default()).string.isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types_default().string.apply((prop_types_default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:U,height:U,sizes:(prop_types_default()).string,layout:function(e){if(void 0!==e.layout&&!X.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};V.displayName="StaticImage",V.propTypes=Y;
;// CONCATENATED MODULE: ./src/pages/index.js
// Step 1: Import React
// Step 2: Define your component
const IndexPage=()=>{return/*#__PURE__*/index_js_.createElement(layout/* default */.Z,{pageTitle:"Home Page"},/*#__PURE__*/index_js_.createElement("div",{className:"row"},/*#__PURE__*/index_js_.createElement("div",{className:"col-5"},/*#__PURE__*/index_js_.createElement("div",{className:"container"},/*#__PURE__*/index_js_.createElement("h1",{id:"Behandlung"},"Behandlung"),/*#__PURE__*/index_js_.createElement("p",null,"Fu\xDF- und Handpflege in den folgenden Bereichen:",/*#__PURE__*/index_js_.createElement("br",null),"Med. Fu\xDFpflege, Manik\xFCre, Pedik\xFCre, Shellac und Paraffinbad."),/*#__PURE__*/index_js_.createElement("p",null,"F\xFCr die Behandlungen nutze ich die Produktpalette von Gehwol oder alternativ rein vegane Bio-Produkte, die Sie ebenfalls im Gesch\xE4ft k\xE4uflich erwerben k\xF6nnen."),/*#__PURE__*/index_js_.createElement("p",null,"Selbstverst\xE4ndlich k\xF6nnen Sie pers\xF6nliche W\xFCnsche \xE4u\xDFern. Gerne gestalten wir die Behandlungen auch nach Ihren eigenen Vorstellungen."))),/*#__PURE__*/index_js_.createElement("div",{className:"col-1"}),/*#__PURE__*/index_js_.createElement("div",{className:"col-6"},/*#__PURE__*/index_js_.createElement("div",{className:"container"},/*#__PURE__*/index_js_.createElement("h1",{id:"Leistungen"},"Leistungen"),/*#__PURE__*/index_js_.createElement("table",null,/*#__PURE__*/index_js_.createElement("tbody",null,/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("th",null,"Leistung"),/*#__PURE__*/index_js_.createElement("th",null,"Preis")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"Med. Fu\xDFpflege"),/*#__PURE__*/index_js_.createElement("td",null,"30\u20AC")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"Med. Fu\xDFpflege mit Lack"),/*#__PURE__*/index_js_.createElement("td",null,"ab 35\u20AC")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"Manik\xFCre"),/*#__PURE__*/index_js_.createElement("td",null,"30\u20AC")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"Manik\xFCre mit French Lack "),/*#__PURE__*/index_js_.createElement("td",null,"35\u20AC")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"Pedik\xFCre mit French Lack"),/*#__PURE__*/index_js_.createElement("td",null,"40\u20AC")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"French Lack (H\xE4nde & F\xFC\xDFe)"),/*#__PURE__*/index_js_.createElement("td",null,"25\u20AC")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"Lack (H\xE4nde & F\xFC\xDFe)"),/*#__PURE__*/index_js_.createElement("td",null,"20\u20AC")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"Manik\xFCre & Pedik\xFCre"),/*#__PURE__*/index_js_.createElement("td",null,"ab 55\u20AC")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"Shellac"),/*#__PURE__*/index_js_.createElement("td",null,"30\u20AC")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"Shellac & Manik\xFCre"),/*#__PURE__*/index_js_.createElement("td",null,"50\u20AC")),/*#__PURE__*/index_js_.createElement("tr",null,/*#__PURE__*/index_js_.createElement("td",null,"Paraffinbad"),/*#__PURE__*/index_js_.createElement("td",null,"20\u20AC"))))))),/*#__PURE__*/index_js_.createElement("div",{className:"row"},/*#__PURE__*/index_js_.createElement("div",{className:"container"}," ",/*#__PURE__*/index_js_.createElement("h1",{id:"Ubermich"}," \xDCber mich "))),/*#__PURE__*/index_js_.createElement("div",{className:"row"},/*#__PURE__*/index_js_.createElement("div",{className:"col-3"},/*#__PURE__*/index_js_.createElement("div",{className:"container",style:{marginTop:`15px`}},/*#__PURE__*/index_js_.createElement(V,{alt:"Iara",src:"../images/iara-langlich.png",__imageData:__webpack_require__(6702)}))),/*#__PURE__*/index_js_.createElement("div",{className:"col-7"},/*#__PURE__*/index_js_.createElement("div",{className:"container"},/*#__PURE__*/index_js_.createElement("p",null,"Liebe KundInnen von Bella Kosmetik,"),/*#__PURE__*/index_js_.createElement("p",null,"ich bin Iara Alcobio, die Inhaberin von Bella Kosmetik und gepr\xFCft in den Bereichen der medizinischen Fu\xDFpflege sowie der Manik\xFCre und Pedik\xFCre."),/*#__PURE__*/index_js_.createElement("p",null,"Seit 2011 arbeite ich als Fu\xDF- und Handpflegerin. Dabei sammelte ich meine ersten Erfahrungen in der mobilen Betreuung meiner KundInnen und bin seit 2016 stolze Besitzerin meines eigenen Salons in der Bremer Neustadt."),/*#__PURE__*/index_js_.createElement("p",null,"Ich freue mich Sie bei mir willkommen zu hei\xDFen!"),/*#__PURE__*/index_js_.createElement("p",null,"Ihre Iara Alcobio")))),/*#__PURE__*/index_js_.createElement("div",{className:"row"},/*#__PURE__*/index_js_.createElement("div",{className:"col-6"},/*#__PURE__*/index_js_.createElement("div",{className:"container"},/*#__PURE__*/index_js_.createElement("h1",{id:"Offnungszeiten"},"\xD6ffnungszeiten"),/*#__PURE__*/index_js_.createElement("div",{className:"row"},/*#__PURE__*/index_js_.createElement("div",{className:"col-5"},/*#__PURE__*/index_js_.createElement("p",null,/*#__PURE__*/index_js_.createElement("strong",null,"Dienstag bis Freitag")," ",/*#__PURE__*/index_js_.createElement("br",null),"10:00 bis 13:00 Uhr ",/*#__PURE__*/index_js_.createElement("br",null),"14:00 bis 18:00 Uhr")),/*#__PURE__*/index_js_.createElement("div",{className:"col-5"},/*#__PURE__*/index_js_.createElement("p",null,/*#__PURE__*/index_js_.createElement("strong",null,"Samstag")," ",/*#__PURE__*/index_js_.createElement("br",null),"10:00 bis 13:00 Uhr"))))),/*#__PURE__*/index_js_.createElement("div",{className:"col-6"},/*#__PURE__*/index_js_.createElement("div",{className:"container"},/*#__PURE__*/index_js_.createElement("h1",{id:"Kontakt"},"Kontakt"),/*#__PURE__*/index_js_.createElement("div",{className:"row"},/*#__PURE__*/index_js_.createElement("div",{className:"col-5"},/*#__PURE__*/index_js_.createElement("p",null,"Bella Kosmetik",/*#__PURE__*/index_js_.createElement("br",null),"Kornstra\xDFe 116 ",/*#__PURE__*/index_js_.createElement("br",null),"28201 Bremen")),/*#__PURE__*/index_js_.createElement("div",{className:"col-7"},/*#__PURE__*/index_js_.createElement("p",null,"Tel: 0421 51700573 ",/*#__PURE__*/index_js_.createElement("br",null),"Mobil: 0179 6742760",/*#__PURE__*/index_js_.createElement("br",null),"Mail: iaraalcobio@","hotmail.de")))))));};const Head=()=>/*#__PURE__*/index_js_.createElement("title",null,"Bella Kosmetik");// Step 3: Export your component
/* harmony default export */ const pages = (IndexPage);

/***/ }),

/***/ 6702:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#585848","images":{"fallback":{"src":"/static/51db4baa9b7554caf61c0841f32c0440/d7429/iara-langlich.png","srcSet":"/static/51db4baa9b7554caf61c0841f32c0440/bc3ce/iara-langlich.png 100w,\\n/static/51db4baa9b7554caf61c0841f32c0440/99de8/iara-langlich.png 200w,\\n/static/51db4baa9b7554caf61c0841f32c0440/d7429/iara-langlich.png 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/51db4baa9b7554caf61c0841f32c0440/f4f50/iara-langlich.webp 100w,\\n/static/51db4baa9b7554caf61c0841f32c0440/8ccb0/iara-langlich.webp 200w,\\n/static/51db4baa9b7554caf61c0841f32c0440/3d65a/iara-langlich.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":480}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map