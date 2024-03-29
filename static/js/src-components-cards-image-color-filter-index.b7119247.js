(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/cards/ImageColorFilter/index.js":function(e,o,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),c=t("./node_modules/react/index.js"),m=t.n(c),d={container:{position:"relative"},image:{width:"100%",height:"100%",objectFit:"cover"},colorFilter:function(e){return{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(180deg, ".concat(e.fromColor," 2%, ").concat(e.toColor," 98%)")}}};"undefined"!==typeof colorFilter&&colorFilter&&colorFilter===Object(colorFilter)&&Object.defineProperty(colorFilter,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"colorFilter",filename:"src/components/cards/ImageColorFilter/style.js"}}),"undefined"!==typeof image&&image&&image===Object(image)&&Object.defineProperty(image,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"image",filename:"src/components/cards/ImageColorFilter/style.js"}}),"undefined"!==typeof container&&container&&container===Object(container)&&Object.defineProperty(container,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"container",filename:"src/components/cards/ImageColorFilter/style.js"}});var p=function(e){function o(e){var t;return Object(a.a)(this,o),(t=Object(s.a)(this,Object(l.a)(o).call(this,e))).state={},t}return Object(i.a)(o,e),Object(n.a)(o,[{key:"render",value:function(){return m.a.createElement("div",{style:Object(r.a)({},d.container,this.props.style)},m.a.createElement("img",{style:d.image,src:this.props.src}),m.a.createElement("div",{style:d.colorFilter(this.props)}))}}]),o}(m.a.Component);p.defaultProps={fromColor:"rgba(240, 103, 166, 0.95)",toColor:"rgba(255, 202, 103, 0)",style:{}};o.a=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ImageColorFilter",filename:"src/components/cards/ImageColorFilter/index.js"}})},"./src/components/cards/ImageColorFilter/index.mdx":function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return b});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),c=t("./node_modules/react/index.js"),m=t.n(c),d=t("./node_modules/@mdx-js/tag/dist/index.js"),p=t("./node_modules/docz/dist/index.esm.js"),u=t("./src/components/cards/ImageColorFilter/index.js"),A=t("./src/components/docs/TableProps.js"),b=function(e){function o(e){var t;return Object(a.a)(this,o),(t=Object(s.a)(this,Object(l.a)(o).call(this,e))).layout=null,t}return Object(i.a)(o,e),Object(n.a)(o,[{key:"render",value:function(){var e=this.props,o=e.components,t=Object(r.a)(e,["components"]);return m.a.createElement(d.MDXTag,{name:"wrapper",components:o},m.a.createElement(d.MDXTag,{name:"h1",components:o,props:{id:"imagecolorfilter"}},"ImageColorFilter"),m.a.createElement(d.MDXTag,{name:"h2",components:o,props:{id:"properties"}},"Properties"),m.a.createElement(p.d,{of:u.a}),m.a.createElement(A.a,{of:u.a}),m.a.createElement(d.MDXTag,{name:"h2",components:o,props:{id:"basic-usage"}},"Basic usage"),m.a.createElement(p.c,{__position:1,__code:'<ImageColorFilter\n  fromColor="#FFD78C 0%"\n  toColor="rgba(240, 103, 166, 0.35) 100%"\n  src="http://placekitten.com/500/200"\n  style={{\n    width: 300,\n    height: 300,\n  }}\n/>',__scope:{props:this?this.props:t,Playground:p.c,Props:p.d,ImageColorFilter:u.a,TableProps:A.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKYGiiNJHCgIUADFoFoI4jVldoPTgARyABdN9Dgb5XAEdBOJI1wyMoCiBGoqBaIIiCrFcDxYDQyhB3o91JGY1jPnXGhOIPTjLGk2T0Ikoj2EDSUsIY01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ18gAWYL2AANmC0L1jAYDKO9aBEl8_hnEOBEHUwGChH4JYiGoSg4AihEUurNKaGcCBcMudgAEYYrC-RLOsqYAEE5hc9gIyg8gbCgdAw3YeQORcsQhujGR2BRJyYG4YA8Icla4HkLca2AUboAm4IADJjvGRJ5koZoDvGybuHuuUwGQyUBlQdp2AAfg2Q6wwjGarhuo7UC66spBkKs3zMGF1WOGAwDCMShpm7g5qjUH-uXasE2MggcEozIUivAhdprWt-ME4TRNoldSfo8ihT4EAAGJKMorUAHYAA57HYPyAFJ-BpmsInpgRGa8jxXAjAAmGK_KWVq_KTBWEoSpY_JwJMAFYZsV_nBax0mlpYxnCFuB5JDJCUYG2F4QI-SJJC1vy_MkaWXYNo2a2W2A1vcw2vZxdAJiuJMXbCr3Sc2CAUkIUPw6Fix5BBr3NxXKQcbxgmid2qQMYhswvxAFS2PUghOLiHi-NImBRapjJJFUbB_y0ChgP0BhCJhnHTPYfhzNEEAVVQLv7TkmZLAu-Be_4ft5PNRz5jgfhh9tGGbMU_gmMc2AV-6uC4Dscna6EqiaIyaEsBA3ijM1HA12oF1_YsdYerRSUhQjOe7hm5_vdCWEX90IfhXBMWwOAURZEGn_UmK55DDyTpZCwk5Iy_yQTWLoBA-jmDRl7GMHAfarWAMAHApCUQOxoK4NAGRFCkJwGAuAOBv6MMIcnEmRtGD8lnIQta5D-QCRgJhFSa0GFMPQhAlimE04BxrPgpaO8iHkKoJTc-AgIyiOYRyKR7DtzgxXCA_01YQYgzMMfOuqixHyUnkvaB6wVJXHHtY-AEDUQFAjqZUWiBHFTxYa4mc7iRanzLN4peLjpwpHcYQhxA4nGMMoB4dQWwCCdVXqgMxQT64CBwJgeGoQxLjzsK5P-dMgm-QllLWW8s2pKxVmrXmOAACcOtaoWECcJMpKRJYyy1lrJY7tpYKxqbzDkLT5ErSuMAJQZh4GWWhvaHJCNiI13MWJDIw8i4lzUo_DS0hTjaV0jAApLdAK6BAgYMCo8NRmhnoITUe8R6SRCdPTeIBv4Lx8fcsw5AD52C1HDRZ15wgRHMNga-dhM4PwzJBV-1AUTvwiGozRbkVz0kAZohBwsCQuKgUU9BScMUmOrFsqFWouB6jaDQP6MC-5GPQSgtRaDDaYOwfNGR-CdE1iFmDWM-iCXTMsn83JYlAU3GoJYiePjbHViul4mJPicCPx1GAJxEYADaK4nmMKelZdxFhNU4HnDAImuripWPlagQEJr9VwoKOsAAum-GZqBBUAqBWKhZeSCAFKlU6qGWBDIesRi6z1IrgXrKUMXFipdtnly4lXSQ6SVGrIEMpBRxztCnI7mBOZUxA1TGRf6AgpyqHOjLP7XgohbiVReK9Mp85ohsBgLVCtUzC38LSMgMElag4hzlHrPmzbK3R1jgQXy_bB0VviYkyU1FR1yioKwDIg7W0VuUWfZNiAAAkzCUbDS7RWwU-Ruw-TlNJOAQlwhNrChWitEQZhXHlvuggsAwBzsfYWitPa8BjpdgO69Q6YAxzjhYdo47_0VsljsRCFL0BXGKFAah3FzSIQ7BAfQEZWqcz8pgCJ7BN3AG3eIkpwlMLSz5ksfDhH5KMLaUKTCDTOZ8w5MUf901pmfgjdVbYAiW7UBOe3UCIA_78FQN6RkSA-5AXKH8Us5ofxknE-4_gi6BD5GoPwK4_ANbadKusfg5RyD9BmMejTknepLUIrAS-3oFOwzJJQRIuY8gFAnJqc0PxizVFBCAJTIAohoFM_wJuGhl4-b0yATA8xwxWTQ6FiZK59N2UCyAVqOAdNhcNv3O5En-AAD1WoJRwJzHACVdOZdeQOd5S9kv5a1jgdmOBpZldgbcs0lpIg1YK0VkrnsprTI2TJ3AuhIApF46gfjehBPuRALQH0WQNP8EM-KWg5oB7mlmDMfg8gFDJyAA"},m.a.createElement(u.a,{fromColor:"#FFD78C 0%",toColor:"rgba(240, 103, 166, 0.35) 100%",src:"http://placekitten.com/500/200",style:{width:300,height:300}})))}}]),o}(m.a.Component);"undefined"!==typeof b&&b&&b===Object(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/cards/ImageColorFilter/index.mdx"}}),"undefined"!==typeof b&&b&&b===Object(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/cards/ImageColorFilter/index.mdx"}}),b.isMDXComponent=!0},"./src/components/docs/TableProps.js":function(e,o,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=t("./node_modules/react/index.js"),c=t.n(i),m=function(e){function o(e){var t;return Object(r.a)(this,o),(t=Object(n.a)(this,Object(s.a)(o).call(this,e))).state={},t}return Object(l.a)(o,e),Object(a.a)(o,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null)}}]),o}(c.a.Component);m.defaultProps={},o.a=m,"undefined"!==typeof m&&m&&m===Object(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DefaultButton",filename:"src/components/docs/TableProps.js"}})}}]);
//# sourceMappingURL=src-components-cards-image-color-filter-index.aff10b7515c7d967eaab.js.map