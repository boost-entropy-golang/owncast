"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5753],{35753:function(e,t,n){n.r(t),n.d(t,{xQuery:function(){return r}});var a=function(){function kw(e){return{type:e,style:"keyword"}}for(var e=kw("operator"),t={type:"atom",style:"atom"},n={type:"axis_specifier",style:"qualifier"},a={",":{type:"punctuation",style:null}},r=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],i=0,o=r.length;i<o;i++)a[r[i]]=kw(r[i]);for(var s=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"],i=0,o=s.length;i<o;i++)a[s[i]]=t;for(var c=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"],i=0,o=c.length;i<o;i++)a[c[i]]=e;for(var u=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"],i=0,o=u.length;i<o;i++)a[u[i]]=n;return a}();function chain(e,t,n){return t.tokenize=n,n(e,t)}function tokenBase(e,t){var n=e.next(),r=!1,i='"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1);if("<"==n){if(e.match("!--",!0))return chain(e,t,tokenXMLComment);if(e.match("![CDATA",!1))return t.tokenize=tokenCDATA,"tag";if(e.match("?",!1))return chain(e,t,tokenPreProcessing);var o,s=e.eat("/");e.eatSpace();for(var c,u="";c=e.eat(/[^\s\u00a0=<>\"\'\/?]/);)u+=c;return chain(e,t,(o=u,function(e,t){return(e.eatSpace(),s&&e.eat(">"))?(popStateStack(t),t.tokenize=tokenBase):(e.eat("/")||pushStateStack(t,{type:"tag",name:o,tokenize:tokenBase}),e.eat(">")?t.tokenize=tokenBase:t.tokenize=tokenAttribute),"tag"}))}if("{"==n)return pushStateStack(t,{type:"codeblock"}),null;if("}"==n)return popStateStack(t),null;if(isIn(t,"tag"))return">"==n?"tag":"/"==n&&e.eat(">")?(popStateStack(t),"tag"):"variable";if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===n&&e.eat(":"))return pushStateStack(t,{type:"comment"}),chain(e,t,tokenComment);if(!i&&('"'===n||"'"===n))return chain(e,t,tokenString(n));if("$"===n)return chain(e,t,tokenVariable);if(":"===n&&e.eat("="))return"keyword";if("("===n)return pushStateStack(t,{type:"paren"}),null;if(")"===n)return popStateStack(t),null;if("["===n)return pushStateStack(t,{type:"bracket"}),null;if("]"===n)return popStateStack(t),null;var l=a.propertyIsEnumerable(n)&&a[n];if(i&&'"'===n)for(;'"'!==e.next(););if(i&&"'"===n)for(;"'"!==e.next(););l||e.eatWhile(/[\w\$_-]/);var p=e.eat(":");!e.eat(":")&&p&&e.eatWhile(/[\w\$_-]/),e.match(/^[ \t]*\(/,!1)&&(r=!0);var k=e.current();return(l=a.propertyIsEnumerable(k)&&a[k],r&&!l&&(l={type:"function_call",style:"def"}),isIn(t,"xmlconstructor"))?(popStateStack(t),"variable"):(("element"==k||"attribute"==k||"axis_specifier"==l.type)&&pushStateStack(t,{type:"xmlconstructor"}),l?l.style:"variable")}function tokenComment(e,t){for(var n,a=!1,r=!1,i=0;n=e.next();){if(")"==n&&a){if(i>0)i--;else{popStateStack(t);break}}else":"==n&&r&&i++;a=":"==n,r="("==n}return"comment"}function tokenString(e,t){return function(n,a){var r;if(isIn(a,"string")&&n.current()==e)return popStateStack(a),t&&(a.tokenize=t),"string";if(pushStateStack(a,{type:"string",name:e,tokenize:tokenString(e,t)}),n.match("{",!1)&&isInXmlAttributeBlock(a))return a.tokenize=tokenBase,"string";for(;r=n.next();){if(r==e){popStateStack(a),t&&(a.tokenize=t);break}if(n.match("{",!1)&&isInXmlAttributeBlock(a)){a.tokenize=tokenBase;break}}return"string"}}function tokenVariable(e,t){var n=/[\w\$_-]/;if(e.eat('"')){for(;'"'!==e.next(););e.eat(":")}else e.eatWhile(n),e.match(":=",!1)||e.eat(":");return e.eatWhile(n),t.tokenize=tokenBase,"variable"}function tokenAttribute(e,t){var n=e.next();return"/"==n&&e.eat(">")?(isInXmlAttributeBlock(t)&&popStateStack(t),isIn(t,"tag")&&popStateStack(t),"tag"):">"==n?(isInXmlAttributeBlock(t)&&popStateStack(t),"tag"):"="==n?null:'"'==n||"'"==n?chain(e,t,tokenString(n,tokenAttribute)):(isInXmlAttributeBlock(t)||pushStateStack(t,{type:"attribute",tokenize:tokenAttribute}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(popStateStack(t),t.tokenize=tokenBase),"attribute")}function tokenXMLComment(e,t){for(var n;n=e.next();)if("-"==n&&e.match("->",!0))return t.tokenize=tokenBase,"comment"}function tokenCDATA(e,t){for(var n;n=e.next();)if("]"==n&&e.match("]",!0))return t.tokenize=tokenBase,"comment"}function tokenPreProcessing(e,t){for(var n;n=e.next();)if("?"==n&&e.match(">",!0))return t.tokenize=tokenBase,"processingInstruction"}function isInXmlAttributeBlock(e){return isIn(e,"attribute")}function isIn(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function pushStateStack(e,t){e.stack.push(t)}function popStateStack(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||tokenBase}let r={name:"xquery",startState:function(){return{tokenize:tokenBase,cc:[],stack:[]}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},languageData:{commentTokens:{block:{open:"(:",close:":)"}}}}}}]);