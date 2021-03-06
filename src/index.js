import "./styles.css";

const inBrowser = typeof window !== "undefined";

// get user agent
const UA = inBrowser && window.navigator.userAgent.toLowerCase();

// detect browser
const isIE = UA && /msie|trident/.test(UA);
const isIE9 = UA && UA.indexOf("msie 9.0") > 0;
const isEdge = UA && UA.indexOf("edge/") > 0;
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
const isPhantomJS = UA && /phantomjs/.test(UA);
const isFF = UA && UA.match(/firefox\/(\d+)/);

// detect OS
const isAndroid = UA && UA.indexOf("android") > 0;
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

document.getElementById("app").innerHTML = `
<h1>Browser checking</h1>
<div><br />
isChrome - ${isChrome}<br /><hr>
isIE - ${isIE}<br /><hr>
isEdge - ${isEdge}<br /><hr>
isIE9 - ${isIE9}<br /><hr>
isPhantomJS - ${isPhantomJS}<br /><hr>
isFF - ${isFF}<br /><hr>
isAndroid - ${isAndroid}<br /><hr>
isIOS - ${isIOS}<br /><hr>
 </div>
`;
