<script setup>
  import { onMounted, ref, toRaw } from "vue";

onMounted(() => {
    const checkboxValues = JSON.parse(localStorage.getItem("checkboxValues")) || {},
	buttons = Array.from(document.querySelectorAll(".checklist-item__expand")),
	labels = Array.from(document.querySelectorAll(".checklist-item__title")),
	checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]')),
	checkboxesLength = checkboxes.length,
	progress = document.querySelector(".progress__bar"),
	counter = document.querySelector(".progress__count"),
	reset = document.querySelector(".progress__reset");
    
    function loadIds() {
        for (let a = 0; a < checkboxesLength; a += 1) {
            const b = a => a.replace(/[ ,.!?;:'-]/g, "");
            (checkboxes[a].id = `${b(
                checkboxes[a].nextSibling.nextSibling.innerText
            ).toLowerCase()}`), checkboxes[a].nextSibling.setAttribute(
                "for",
                `${b(checkboxes[a].nextSibling.nextSibling.innerText).toLowerCase()}`
            );
        }
    }
    function updateStorage(a) {
        (checkboxValues[a.id] = a.checked), localStorage.setItem(
            "checkboxValues",
            JSON.stringify(checkboxValues)
        );
    }
    function countChecked() {
        if ("checkbox" === this.type) {
            const a = this.parentNode.parentNode.parentNode,
                b =
                    a.querySelectorAll("input:checked").length /
                    a.querySelectorAll(".checklist-item").length;
            a.querySelector(
                ".checklist__percentage-border"
            ).style.transform = `scaleX(${b})`;
        } else
            Array.from(document.querySelectorAll(".checklist")).forEach(a => {
                const b =
                    a.querySelectorAll("input:checked").length /
                    a.querySelectorAll(".checklist-item").length;
                a.querySelector(
                    ".checklist__percentage-border"
                ).style.transform = `scaleX(${b})`;
            });
        let a = 0;
        Array.from(document.querySelectorAll("input:checked")).forEach(() => {
            a += 1;
        }), (counter.innerText = `${a}/${checkboxesLength}`), (progress.style.transform = `scaleX(${a /
            checkboxesLength})`), (checkboxValues.globalCounter = a), updateStorage(this);
    }
    function loadValues() {
        const a = checkboxValues.globalCounter || 0;
        (counter.innerText = `${a}/${checkboxesLength}`), Object.keys(
            checkboxValues
        ).forEach(a => {
            "globalCounter" !== a &&
                (document.getElementById(a).checked = checkboxValues[a]);
        }), countChecked();
    }
    function toggleExpand() {
        const a = this.parentNode;
        a.querySelector(".line").classList.toggle("closed"), a.classList.toggle(
            "open"
        );
    }
    function resetCheckboxes() {
        this.classList.add("progress__reset--pressed"), checkboxes.forEach(
            a => (a.checked = !1)
        ), Object.keys(checkboxValues).forEach(
            a => delete checkboxValues[a]
        ), countChecked();
    }
    window.onload = function() {
        loadIds(), loadValues(), checkboxes.forEach(a =>
            a.addEventListener("click", countChecked)
        ), buttons.forEach(a =>
            a.addEventListener("click", toggleExpand)
        ), labels.forEach(a =>
            a.addEventListener("click", toggleExpand)
        ), reset.addEventListener("click", resetCheckboxes), reset.addEventListener(
            "animationend",
            function() {
                this.classList.remove("progress__reset--pressed");
            },
            !1
        ), "serviceWorker" in navigator &&
            navigator.serviceWorker.register("/sw.js", { scope: "/" })
    };
});
</script>

<template>
    <!-- <div class="checklist-container">
        <div class="checklist-box">
            <h1>Checklist</h1>
        </div>
    </div> -->
    <header>
 <h1 class="title"><a href="https://codepen.io/oxla/pen/awmMYY?editors=1010">Web Launch Checklist</a></h1>
 <div class="progress">
  <span class="progress__count">0/X</span>
  <input class="progress__reset" type="reset" value="Reset" title="Reset Checkboxes" tabindex="0">
  <span class="progress__border"></span>
  <span class="progress__bar"></span>
 </div>

</header>
<div class="container">
 <section class="checklist">
  <h2 class="checklist__title">Performance</h2>
  <span class="checklist__title-border"></span>
  <span class="checklist__percentage-border"></span>
  <ul class="checklist-container">
   <li class="checklist-item">
    <input id="" type="checkbox" />
    <label for="" class="checkbox"></label><span class="checklist-item__title">Images Optimized</span>
    <button class="checklist-item__expand" aria-label="Toggle Info" title="Toggle More Information">
                    <span class="line"></span>
                </button>
    <div class="info-container">
     <div class="info">
      <ul>
       <li>Compress all your images using either web processors such as <a href="http://optimizilla.com/" target="_blank" rel="noopener">Optimizilla.com</a> and <a href="https://compressor.io/compress" target="_blank" rel="noopener">Compressor.io</a>, or
        desktop apps such as <a target="_blank" rel="noopener" href="http://nikkhokkho.sourceforge.net/static.php?page=FileOptimizer">FileOptimizer</a> and <a target="_blank" rel="noopener" href="https://imageoptim.com/mac">ImageOptim</a>.
       </li>
       <li>Generate the exact image size for each element instead of resizing it with CSS/HTML as this can be a heavy process for the browser to perform.
       </li>
       <li>Utilize <a target="_blank" rel="noopener" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS">Image
                                Sprites</a> to save on HTTP requests and bandwidth.
       </li>
      </ul>
     </div>
    </div>
   </li>
   <li class="checklist-item">
    <input id="" type="checkbox" /><label for="" class="checkbox"></label><span class="checklist-item__title">Reduced Page Weight &amp; Requests</span>
    <button class="checklist-item__expand" aria-label="Toggle Info" title="Toggle More Information">
                    <span class="line"></span>
                </button>

    <div class="info-container">
     <div class="info">Here are some tips to keep your page weight under 2MB and 50 requests:
      <ul>
       <li>Limit 3rd party libraries &amp; scripts</li>
       <li>Load resources &amp; requests asynchronously</li>
       <li>Consider a <a target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/Content_delivery_network">CDN</a> for static assets &amp; pages
       </li>
      </ul>
     </div>
    </div>
   </li>
   <li class="checklist-item">
    <input id="" type="checkbox" /><label for="" class="checkbox"></label><span class="checklist-item__title">Limited Web Font Usage</span>
    <button class="checklist-item__expand" aria-label="Toggle Info" title="Toggle More Information">
                    <span class="line"></span>
                </button>

    <div class="info-container">
     <div class="info">Many websites are loading full sets of font glyphs and weights they are not even using. Web fonts can also present inconsistent performance due to the reliance on third party servers for heavy font files. Try to limit your pages to 2-3 web fonts
      or use a
      <a target="_blank" rel="noopener" href="https://css-tricks.com/snippets/css/system-font-stack/">System
                            Font Stack</a> for a comfortable look to the user.
     </div>
    </div>
   </li>
   <li class="checklist-item">
    <input id="" type="checkbox" /><label for="" class="checkbox"></label><span class="checklist-item__title">GZIP &amp; JS/CSS Minified</span>
    <button class="checklist-item__expand" aria-label="Toggle Info" title="Toggle More Information">
                    <span class="line"></span>
                </button>

    <div class="info-container">
     <div class="info">GZIP is a powerful compressor for text files that can be configured in the web server. Javascript and CSS files should be combined into one file and minified when served to the user to reduce the impact of loading on the critical path. I suggest
      the tools <a target="_blank" rel="noopener" href="http://lisperator.net/uglifyjs/">UgilfyJS</a> for Javascript and <a target="_blank" rel="noopener" href="https://github.com/css/csso">CSSO</a> for CSS.
     </div>
    </div>
   </li>
   <li class="checklist-item">
    <input id="" type="checkbox" /><label for="" class="checkbox"></label><span class="checklist-item__title">Implemented HTTP/2</span>
    <button class="checklist-item__expand" aria-label="Toggle Info" title="Toggle More Information">
                    <span class="line"></span>
                </button>

    <div class="info-container">
     <div class="info">HTTP/2 is the newest HTTP protocol, has good support across browsers, and makes great improvements to load speed. <a target="_blank" rel="noopener" href="https://www.redpill-linpro.com/sysadvent/2016/12/20/http2.html">Here</a> is a guide for enabling
      HTTP/2 in Nginx.
     </div>
    </div>
   </li>
   <li class="checklist-item">
    <input id="" type="checkbox" /><label for="" class="checkbox"></label><span class="checklist-item__title">Async &amp; Defer Attributes Added</span>
    <button class="checklist-item__expand" aria-label="Toggle Info" title="Toggle More Information">
                    <span class="line"></span>
                </button>

    <div class="info-container">
     <div class="info">Tell the browser when to download and execute a script file so it doesn't block any other resources. I like <a target="_blank" rel="noopener" href="http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html">this
                            guide</a> for showing what each of these script attributes does.
     </div>
    </div>
   </li>
   <li class="checklist-item">
    <input id="" type="checkbox" /><label for="" class="checkbox"></label><span class="checklist-item__title">Resource Hinting Added</span>
    <button class="checklist-item__expand" aria-label="Toggle Info" title="Toggle More Information">
                    <span class="line"></span>
                </button>

    <div class="info-container">
     <div class="info">If you're using any 3rd party assets then you will have a DNS lookup attached, both these and your own resources can block each other or be loaded out-of-order. <a target="_blank" rel="noopener" href="https://www.keycdn.com/blog/resource-hints/"> Here</a>      is a guide for the various values of the link attribute "rel" that tells the browser when and how to handle these situations. <a target="_blank" rel="noopener" href="https://w3c.github.io/resource-hints/#h-resource-hints">This</a> is the W3Consortium
      document for Resource-Hints.
     </div>
    </div>
   </li>
   <li class="checklist-item">
    <input id="" type="checkbox" /><label for="" class="checkbox"></label><span class="checklist-item__title">Cache Headers Set</span>
    <button class="checklist-item__expand" aria-label="Toggle Info" title="Toggle More Information">
                    <span class="line"></span>
                </button>

    <div class="info-container">
     <div class="info">Specify the [cache-control] header with a [max-age] directive in the web server to avoid having the browser set poor default versions. This will provide huge performance savings for users who see the same resources multiple times. Static assets with
      versioning should be cached for as long as possible.
     </div>
    </div>
   </li>
   <li class="checklist-item">
    <input id="" type="checkbox" /><label for="" class="checkbox"></label><span class="checklist-item__title">Consider Service Workers</span>
    <button class="checklist-item__expand" aria-label="Toggle Info" title="Toggle More Information">
                    <span class="line"></span>
                </button>

    <div class="info-container">
     <div class="info"><a target="_blank" rel="noopener" href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API">Service
                        Workers</a> will give you precise control over cache and allow the creation of an offline web experience. <a target="_blank" rel="noopener" href="https://github.com/lyzadanger/pragmatist-service-worker">Here</a> are some code examples.
     </div>
    </div>
   </li>
   <li class="checklist-item">
    <input id="" type="checkbox" /><label for="" class="checkbox"></label><span class="checklist-item__title">Run Testing</span>
    <button class="checklist-item__expand" aria-label="Toggle Info" title="Toggle More Information">
                    <span class="line"></span>
                </button>

    <div class="info-container">
     <div class="info">My favorite tools are <a target="_blank" rel="noopener" href="http://yellowlab.tools/">YellowLab.tools</a>, <a target="_blank" rel="noopener" href="http://www.webpagetest.org/">webpagetest.org</a>, and <a target="_blank" rel="noopener" href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>.
      Make sure to test in 4G, 3G, and Wi-Fi network environments as well as with popular devices.
     </div>
    </div>
   </li>
  </ul>

 </section>



 

</div>
</template>

<style lang="scss" scoped>


html {
	line-height: 1.15;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}
article, aside, footer, header, nav, section {
	display: block;
}
h1 {
	font-size: 2em;
	margin: .67em 0;
}
a {
	background-color: transparent;
	-webkit-text-decoration-skip: objects;
}
img {
	border-style: none;
}
button, input, optgroup, select, textarea {
	font-family: sans-serif;
	font-size: 100%;
	line-height: 1.15;
	margin: 0;
}
button, input {
	overflow: visible;
}
button, select {
	text-transform: none;
}
[type=reset], [type=submit], button, html [type=button] {
	-webkit-appearance: button;
}
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
	padding: 0;
	border-style: none;
}
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
	outline: 1px dotted ButtonText;
}
[type=checkbox], [type=radio] {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0;
}
*, :after, :before {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
body {
	font-family: Rubik,
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		Oxygen,
		Ubuntu,
		Cantarell,
		'Fira Sans',
		'Droid Sans',
		'Helvetica Neue',
		sans-serif;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	margin: 0;
	letter-spacing: .02em;
	color: #f5f5f5;
	background: #585afa;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
a {
	-webkit-transition: all .2s ease;
	transition: all .2s ease;
	text-decoration: none;
	color: #57eaa6;
	border-bottom: 1px solid #57eaa6;
	text-shadow: 0 1px 0 #585afa;
}
a:hover {
	border-bottom: 2px solid #bf6bfe;
}
::-moz-selection {
	background: rgba(33, 16, 118, .75);
	text-shadow: none;
}
::selection {
	background: rgba(33, 16, 118, .75);
	text-shadow: none;
}
.title {
	font-size: 3.5em;
	font-weight: 500;
	margin: .5em .2em .375em;
	text-align: center;
}
.title a {
	color: #e6e6e6;
	border: 0;
}
.progress {
	margin-bottom: 5px;
	text-align: center;
}
.progress__count {
	font-family: Menlo,
		Monaco,
		Consolas,
		'Liberation Mono',
		'Courier New',
		monospace;
	font-size: 1.15em;
	letter-spacing: .05em;
}
.progress__reset {
	font-family: inherit;
	line-height: 37px;
	display: inline-block;
	height: 37px;
	margin-left: .75em;
	padding: 0 14px;
	cursor: pointer;
	-webkit-transition: all .3s ease;
	transition: all .3s ease;
	letter-spacing: .025em;
	color: inherit;
	border: 1px solid #211076;
	border-radius: 3px;
	outline: 0;
	background: rgba(33, 16, 118, .75);
	-webkit-box-shadow: 0 4px 6px rgba(33, 16, 118, .11),
		0 1px 3px rgba(33, 16, 118, .1);
	box-shadow: 0 4px 6px rgba(33, 16, 118, .11), 0 1px 3px rgba(33, 16, 118, .1);
}
.progress__reset:focus, .progress__reset:hover {
	background: rgba(189, 106, 255, .8);
	-webkit-box-shadow: 0 7px 14px rgba(33, 16, 118, .16),
		0 3px 6px rgba(33, 16, 118, .2);
	box-shadow: 0 7px 14px rgba(33, 16, 118, .16), 0 3px 6px rgba(33, 16, 118, .2);
}
.progress__reset:active {
	-webkit-box-shadow: 0 4px 6px rgba(33, 16, 118, .11),
		0 1px 3px rgba(33, 16, 118, .1);
	box-shadow: 0 4px 6px rgba(33, 16, 118, .11), 0 1px 3px rgba(33, 16, 118, .1);
}
.progress__reset--pressed {
	-webkit-animation: wiggle 350ms ease alternate;
	animation: wiggle 350ms ease alternate;
}
.progress__border {
	display: block;
	margin-top: 12px;
	border-bottom: 3px solid #57d490;
	-webkit-box-shadow: 0 20px 20px -20px rgba(33, 16, 118, .65);
	box-shadow: 0 20px 20px -20px rgba(33, 16, 118, .65);
}
.progress__bar {
	display: block;
	height: 17px;
	-webkit-transition: -webkit-transform .5s ease;
	transition: -webkit-transform .5s ease;
	transition: transform .5s ease;
	transition: transform .5s ease, -webkit-transform .5s ease;
	-webkit-transform: scaleX(0);
	transform: scaleX(0);
	-webkit-transform-origin: left;
	transform-origin: left;
	background: #21acb3;
}
.container {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	max-width: 1550px;
	margin: 0 auto;
	-webkit-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-ms-flex-pack: distribute;
	justify-content: space-around;
}
.container .checklist {
	min-width: 350px;
	max-width: 400px;
	margin: 15px 15px 0;
}
.container .checklist .checklist-container {
	margin: 0;
	padding: 0;
}
.checklist__title {
	font-size: 2.125em;
	font-weight: 500;
	margin: 0;
	color: #e6e6e6;
}
.checklist__title-border {
	display: block;
	width: 350px;
	margin-top: 8px;
	border-bottom: 2px solid #21acb3;
	-webkit-box-shadow: 0 15px 15px -15px rgba(33, 16, 118, .5);
	box-shadow: 0 15px 15px -15px rgba(33, 16, 118, .5);
}
.checklist__percentage-border {
	display: block;
	width: 350px;
	height: 6px;
	margin-bottom: 8px;
	-webkit-transition: -webkit-transform 350ms ease;
	transition: -webkit-transform 350ms ease;
	transition: transform 350ms ease;
	transition: transform 350ms ease, -webkit-transform 350ms ease;
	-webkit-transform: scaleX(0);
	transform: scaleX(0);
	-webkit-transform-origin: left;
	transform-origin: left;
	background: #57d490;
}
.checklist-item {
	display: block;
	margin: 15px 0;
}
.checkbox {
	position: relative;
	top: 1px;
	display: inline-block;
	width: 20px;
	height: 20px;
	cursor: pointer;
	-webkit-transition: background 150ms ease;
	transition: background 150ms ease;
	border: 2px solid #211076;
	border-radius: 3px;
}
.checkbox:hover {
	background: rgba(33, 16, 118, .5);
}
.checkbox:after {
	position: absolute;
	top: 1px;
	left: 5px;
	width: 6px;
	height: 12px;
	content: '';
	-webkit-transition: all 325ms ease;
	transition: all 325ms ease;
	-webkit-transform: rotate(45deg) scale(0);
	transform: rotate(45deg) scale(0);
	opacity: 0;
	border-right: 2px solid #bf6bfe;
	border-bottom: 2px solid #bf6bfe;
}
.checklist-item__title {
	font-size: 1.125em;
	line-height: 1.25;
	display: inline-block;
	width: calc(100% - 48px);
	margin-left: 8px;
	cursor: pointer;
	-webkit-transition: color 250ms ease;
	transition: color 250ms ease;
	vertical-align: top;
}
.checklist-item__title:focus, .checklist-item__title:hover {
	color: #dcdcdc;
}
input[type=checkbox] {
	display: none;
}
input[type=checkbox]:checked ~ .checkbox {
	-webkit-animation: wiggle .4s ease;
	animation: wiggle .4s ease;
	border-color: transparent;
	background: #211076;
}
input[type=checkbox]:checked ~ .checkbox:after {
	-webkit-transform: rotate(45deg) scale(1);
	transform: rotate(45deg) scale(1);
	opacity: 1;
}
input[type=checkbox]:checked ~ .checklist-item__title {
	-webkit-transition: all 175ms ease;
	transition: all 175ms ease;
	text-decoration: line-through;
	opacity: .5;
}
@-webkit-keyframes wiggle {
	from {
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
	30% {
		-webkit-transform: scale(1.25, .75);
		transform: scale(1.25, .75);
	}
	40% {
		-webkit-transform: scale(.75, 1.25);
		transform: scale(.75, 1.25);
	}
	50% {
		-webkit-transform: scale(1.15, .85);
		transform: scale(1.15, .85);
	}
	65% {
		-webkit-transform: scale(.95, 1.05);
		transform: scale(.95, 1.05);
	}
	75% {
		-webkit-transform: scale(1.05, .95);
		transform: scale(1.05, .95);
	}
	to {
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
}
@keyframes wiggle {
	from {
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
	30% {
		-webkit-transform: scale(1.25, .75);
		transform: scale(1.25, .75);
	}
	40% {
		-webkit-transform: scale(.75, 1.25);
		transform: scale(.75, 1.25);
	}
	50% {
		-webkit-transform: scale(1.15, .85);
		transform: scale(1.15, .85);
	}
	65% {
		-webkit-transform: scale(.95, 1.05);
		transform: scale(.95, 1.05);
	}
	75% {
		-webkit-transform: scale(1.05, .95);
		transform: scale(1.05, .95);
	}
	to {
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
}
.checklist-item__expand {
	float: right;
	width: 20px;
	height: 20px;
	cursor: pointer;
	border: 0;
	outline: 0;
	background: 0 0;
}
.line {
	display: block;
	width: 20px;
	-webkit-transition: all .3s cubic-bezier(.76, -.26, .15, 1.32);
	transition: all .3s cubic-bezier(.76, -.26, .15, 1.32);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	-webkit-transform-origin: center center;
	transform-origin: center center;
	outline: 1px solid transparent;
	background: #211076;
}
.line:after {
	display: block;
	width: 20px;
	height: 4px;
	content: '';
	-webkit-transition: all .3s cubic-bezier(.76, -.26, .15, 1.32);
	transition: all .3s cubic-bezier(.76, -.26, .15, 1.32);
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
	-webkit-transform-origin: center center;
	transform-origin: center center;
	outline: 1px solid transparent;
	background: #211076;
}
.closed.line {
	top: 45%;
	-webkit-transform: rotate(180deg);
	transform: rotate(180deg);
	background: #bf6bfe;
}
.closed.line:after {
	-webkit-transform: rotate(0);
	transform: rotate(0);
	background: 0 0;
}
.info-container {
	font-family: -apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		Oxygen,
		Ubuntu,
		Cantarell,
		'Fira Sans',
		'Droid Sans',
		'Helvetica Neue',
		sans-serif;
	font-size: 1.063em;
	line-height: 1.4;
	overflow: hidden;
	max-height: 0;
	-webkit-transition: max-height .3s ease-in;
	transition: max-height .3s ease-in;
}
.info-container ul {
	padding-left: 26px;
	list-style-type: disc;
}
.info-container li {
	margin-top: .25em;
}
.info-container .info {
	margin-top: .55em;
	margin-bottom: .2em;
	padding-bottom: .75em;
	border-bottom: 1px solid #b5adde;
}
.checklist .open .info-container {
	max-height: 500px;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;
}
.social {
	font-size: 1.25em;
	margin-top: 1.75em;
	text-align: center;
	-ms-flex-item-align: center;
	align-self: center;
}
.social-buttons {
	display: block;
	margin-top: 12px;
	-webkit-transition: all .4s;
	transition: all .4s;
	background: 0 0;
}
.social-buttons a {
	display: inline-block;
	width: 37px;
	height: 37px;
	cursor: pointer;
	border: 2px solid #e6e6e6;
	border-radius: 3px;
}
.social-buttons a.social-buttons__twitter {
	-webkit-transition: border .2s ease;
	transition: border .2s ease;
	background: url(../share-buttons.svg) no-repeat 5px 6px;
}
.social-buttons a.social-buttons__twitter:hover {
	border: 2px dotted #bf6bfe;
}
.social-buttons a.social-buttons__facebook {
	margin: 0 7px;
	-webkit-transition: border .2s ease;
	transition: border .2s ease;
	background: url(../share-buttons.svg) no-repeat -27px 6px;
}
.social-buttons a.social-buttons__facebook:hover {
	border: 2px dotted #bf6bfe;
}
footer {
	font-weight: 300;
	margin-top: 1.25em;
	padding: .85em 1.85em;
	text-align: center;
	border-top: 1px solid #57b26e;
	-ms-flex-item-align: center;
	align-self: center;
}
footer span {
	font-size: 1.45em;
	font-weight: 500;
	padding: 0 .175em;
	vertical-align: middle;
	color: #bf6bfe;
}
.title-404 {
	font-size: 6.5em;
	width: 100%;
	margin-bottom: 0;
	text-align: center;
}
.text-404 {
	font-size: 2.5em;
}
@media print {
	*, :after, :before, :first-letter, :first-line {
		color: #000 !important;
		background: 0 0 !important;
		-webkit-box-shadow: none !important;
		box-shadow: none !important;
		text-shadow: none !important;
	}
	a, a:visited {
		text-decoration: underline;
	}
	a[href]:after {
		content: ' (' attr(href) ')';
	}
	abbr[title]:after {
		content: ' (' attr(title) ')';
	}
	a[href^='#']:after, a[href^='javascript:']:after {
		content: '';
	}
	img {
		page-break-inside: avoid;
	}
	h2 {
		orphans: 3;
		widows: 3;
		page-break-after: avoid;
	}
}

</style>
