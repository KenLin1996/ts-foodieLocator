import{m as ue,a as de,b as ce,u as ve,c as me,d as fe,e as ge,V as K,f as A,g as R,h as M,i as L,j as x,k as X,_ as pe,l as Z,n as W,o as Se,p as Te,q as Be,r as G,s as se,t as Ie,v as re,w as j}from"./VNavigationDrawer-CTAhQ0LS.js";import{p as D,m as te,a as he,b as le,c as ye,g as q,r as _,d as xe,t as U,s as N,u as Pe,e as h,f as be,h as we,w as _e,i as Y,j as t,k as $,l as oe,n as ae,o as m,q as H,v as o,x as r,y as k,F as P,z as F,A as B,B as z,C as O,D as He,E as Ne,G as Fe,H as E,I as ke,J as Ce,K as ze,L as Re,M as ee,N as J,O as Q,P as Le,V as $e,Q as Ee,R as Ae}from"./index-DX87_Xmp.js";import{V as Me,a as Ue,b as De,c as je}from"./VForm-DUd8RtGd.js";const Oe=D({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ue(),...te(),...de(),...he(),...ce(),...le({tag:"footer"}),...ye()},"VFooter"),qe=q()({name:"VFooter",props:Oe(),setup(e,d){let{slots:a}=d;const f=_(),{themeClasses:u}=xe(e),{backgroundColorClasses:s,backgroundColorStyles:c}=ve(U(e,"color")),{borderClasses:i}=me(e),{elevationClasses:g}=fe(e),{roundedClasses:V}=ge(e),y=N(32),{resizeRef:w}=Pe(b=>{b.length&&(y.value=b[0].target.clientHeight)}),S=h(()=>e.height==="auto"?y.value:parseInt(e.height,10));return be(()=>e.app,()=>{const b=we({id:e.name,order:h(()=>parseInt(e.order,10)),position:h(()=>"bottom"),layoutSize:S,elementSize:h(()=>e.height==="auto"?void 0:S.value),active:h(()=>e.app),absolute:U(e,"absolute")});_e(()=>{f.value=b.layoutItemStyles.value})}),Y(()=>t(e.tag,{ref:w,class:["v-footer",u.value,s.value,i.value,g.value,V.value,e.class],style:[c.value,e.app?f.value:{height:$(e.height)},e.style]},a)),{}}}),Ye=["to"],We={style:{color:"#9e9e9e"}},Ge={class:"w-100",style:{"background-color":"#f6f9fc"}},Je={style:{"margin-bottom":"16px"}},Qe={key:1,class:"d-flex flex-row flex-wrap"},Ke=oe({__name:"AppFooter",setup(e){const d=_([{name:"New York",count:"（26 places）",to:"/restaurant/FoodMenu"},{name:"Los Angeles",count:"（14 places）",to:"/restaurant/FoodMenu"},{name:"Chicago",count:"（10 places）",to:"/restaurant/FoodMenu"},{name:"Boston",count:"（20 places）",to:"/restaurant/FoodMenu"},{name:"Houston",count:"（6 places）",to:"/restaurant/FoodMenu"}]),a=_([{name:"About Us",servers:[{name:"Careers",to:"/"},{name:"Our Stores",to:"/"},{name:"Our Cares",to:"/"},{name:"Terms & Conditions",to:"/"},{name:"Privacy Policy",to:"/"}]},{name:"Customer Care",servers:[{name:"Help Center",to:"/"},{name:"How To Buy",to:"/"},{name:"Track Your Order",to:"/"},{name:"Corporate & Bulk Purchasing",to:"/"},{name:"Returns & Refunds",to:"/"}]},{name:"Contact Us",servers:[{name:"Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh.",to:"/"},{name:"Email: uilib@gmail.com",to:"/"},{name:"Phone: +880 1123 456 780",to:"/"},{name:"Terms & Conditions",to:"/"},{name:"Privacy Policy",to:"/"},{name:"",to:"",mediaIcons:[{icon:"mdi-facebook theme--dark",to:"/"},{icon:"mdi-twitter",to:"/"},{icon:"mdi-instagram",to:"/"},{icon:"mdi-youtube",to:"/"},{icon:"mdi-google",to:"/"}]}]}]);return(f,u)=>{const s=ae("router-link");return m(),H(qe,{class:"d-flex flex-column px-0",app:""},{default:o(()=>[t(K,{class:"w-100"},{default:o(()=>[t(A,null,{default:o(()=>[t(R,{cols:"12"},{default:o(()=>[u[0]||(u[0]=r("h2",{class:"mb-5"},"Popular Localities In & Around New York",-1)),t(A,null,{default:o(()=>[(m(),k(P,null,F(4,c=>t(R,{key:c,class:"mb-3",sm:"6",md:"6",lg:"3",xl:"3",cols:"12"},{default:o(()=>[(m(!0),k(P,null,F(d.value,(i,g)=>(m(),k("div",{key:g,class:"mb-3",to:i.to},[t(s,{to:i.to},{default:o(()=>[B(z(i.name)+" ",1),r("span",We,z(i.count),1)]),_:2},1032,["to"])],8,Ye))),128))]),_:1})),64))]),_:1})]),_:1})]),_:1})]),_:1}),r("div",Ge,[t(K,{class:"w-100",style:{"padding-top":"64px"}},{default:o(()=>[t(A,null,{default:o(()=>[t(R,{cols:"12",lg:"3"},{default:o(()=>[t(s,{to:"/"},{default:o(()=>[t(M,{class:"mb-6",style:{width:"48px",height:"48px","min-width":"48px"}},{default:o(()=>[t(L,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png"})]),_:1})]),_:1}),u[1]||(u[1]=r("h5",{class:"mb-6"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet. ",-1)),r("div",null,[t(M,{class:"rounded me-4",style:{width:"120px",height:"45px"}},{default:o(()=>[t(L,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/google-play.430ca54.png"})]),_:1}),t(M,{class:"rounded",style:{width:"120px",height:"45px"}},{default:o(()=>[t(L,{src:"https://foodhub-nuxt.vercel.app/_nuxt/img/app-store.63e3986.png"})]),_:1})])]),_:1}),(m(!0),k(P,null,F(a.value,c=>(m(),H(R,{key:c.name,cols:"12",lg:"3"},{default:o(()=>[r("h2",Je,z(c.name),1),(m(!0),k(P,null,F(c.servers,i=>(m(),k("div",{key:i.name,class:"d-flex flex-column",style:{"margin-bottom":"12px"}},[i.to?(m(),H(s,{key:0,to:i.to},{default:o(()=>[B(z(i.name),1)]),_:2},1032,["to"])):O("",!0),i.mediaIcons?(m(),k("div",Qe,[(m(!0),k(P,null,F(i.mediaIcons,g=>(m(),H(x,{key:g.icon,class:"me-2",theme:"dark",rounded:"",variant:"elevated",size:"32",color:"#103460",to:g.to},{default:o(()=>[t(X,null,{default:o(()=>[B(z(g.icon),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])):O("",!0)]))),128))]),_:2},1024))),128))]),_:1})]),_:1})])]),_:1})}}}),Xe={},Ze={class:"d-flex justify-center align-center",style:{border:"1px solid #d9e1e6","border-radius":"4px","min-width":"468px"}};function et(e,d){return m(),k("div",Ze,[t(x,{"prepend-icon":"mdi-map-marker",variant:"plain",disabled:"",class:"text-capitalize"},{default:o(()=>d[0]||(d[0]=[B(" New York ")])),_:1}),t(x,{icon:"mdi-crosshairs-gps",variant:"plain",class:"rounded-0 theme--light"}),t(Z,{style:{padding:"0px !important"},placeholder:"Search for restaurant",density:"compact",variant:"plain","hide-details":"","single-line":""}),t(x,{class:"rounded-0",icon:"mdi-magnify"})])}const tt=pe(Xe,[["render",et],["__scopeId","data-v-4eb51a70"]]),lt=D({text:String,...te(),...le()},"VToolbarTitle"),ot=q()({name:"VToolbarTitle",props:lt(),setup(e,d){let{slots:a}=d;return Y(()=>{const f=!!(a.default||a.text||e.text);return t(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var u;return[f&&t("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(u=a.default)==null?void 0:u.call(a)])]}})}),{}}}),at=[null,"prominent","default","comfortable","compact"],Ve=D({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>at.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ue(),...te(),...de(),...ce(),...le({tag:"header"}),...ye()},"VToolbar"),ie=q()({name:"VToolbar",props:Ve(),setup(e,d){var b;let{slots:a}=d;const{backgroundColorClasses:f,backgroundColorStyles:u}=ve(U(e,"color")),{borderClasses:s}=me(e),{elevationClasses:c}=fe(e),{roundedClasses:i}=ge(e),{themeClasses:g}=xe(e),{rtlClasses:V}=He(),y=N(!!(e.extended||(b=a.extension)!=null&&b.call(a))),w=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),S=h(()=>y.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ne({VBtn:{variant:"text"}}),Y(()=>{var l;const p=!!(e.title||a.title),T=!!(a.image||e.image),C=(l=a.extension)==null?void 0:l.call(a);return y.value=!!(e.extended||C),t(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},f.value,s.value,c.value,i.value,g.value,V.value,e.class],style:[u.value,e.style]},{default:()=>[T&&t("div",{key:"image",class:"v-toolbar__image"},[a.image?t(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):t(L,{key:"image-img",cover:!0,src:e.image},null)]),t(W,{defaults:{VTabs:{height:$(w.value)}}},{default:()=>{var v,n,I;return[t("div",{class:"v-toolbar__content",style:{height:$(w.value)}},[a.prepend&&t("div",{class:"v-toolbar__prepend"},[(v=a.prepend)==null?void 0:v.call(a)]),p&&t(ot,{key:"title",text:e.title},{text:a.title}),(n=a.default)==null?void 0:n.call(a),a.append&&t("div",{class:"v-toolbar__append"},[(I=a.append)==null?void 0:I.call(a)])])]}}),t(W,{defaults:{VTabs:{height:$(S.value)}}},{default:()=>[t(Se,null,{default:()=>[y.value&&t("div",{class:"v-toolbar__extension",style:{height:$(S.value)}},[C])]})]})]})}),{contentHeight:w,extensionHeight:S}}}),nt=D({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function st(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=d;let f=0,u=0;const s=_(null),c=N(0),i=N(0),g=N(0),V=N(!1),y=N(!1),w=h(()=>Number(e.scrollThreshold)),S=h(()=>Fe((w.value-c.value)/w.value||0)),b=()=>{const p=s.value;if(!p||a&&!a.value)return;f=c.value,c.value="window"in p?p.pageYOffset:p.scrollTop;const T=p instanceof Window?document.documentElement.scrollHeight:p.scrollHeight;if(u!==T){u=T;return}y.value=c.value<f,g.value=Math.abs(c.value-w.value)};return E(y,()=>{i.value=i.value||c.value}),E(V,()=>{i.value=0}),ke(()=>{E(()=>e.scrollTarget,p=>{var C;const T=p?document.querySelector(p):window;T&&T!==s.value&&((C=s.value)==null||C.removeEventListener("scroll",b),s.value=T,s.value.addEventListener("scroll",b,{passive:!0}))},{immediate:!0})}),Ce(()=>{var p;(p=s.value)==null||p.removeEventListener("scroll",b)}),a&&E(a,b,{immediate:!0}),{scrollThreshold:w,currentScroll:c,currentThreshold:g,isScrollActive:V,scrollRatio:S,isScrollingUp:y,savedScroll:i}}const rt=D({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ve(),...he(),...nt(),height:{type:[Number,String],default:64}},"VAppBar"),it=q()({name:"VAppBar",props:rt(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:a}=d;const f=_(),u=ze(e,"modelValue"),s=h(()=>{var n;const v=new Set(((n=e.scrollBehavior)==null?void 0:n.split(" "))??[]);return{hide:v.has("hide"),fullyHide:v.has("fully-hide"),inverted:v.has("inverted"),collapse:v.has("collapse"),elevate:v.has("elevate"),fadeImage:v.has("fade-image")}}),c=h(()=>{const v=s.value;return v.hide||v.fullyHide||v.inverted||v.collapse||v.elevate||v.fadeImage||!u.value}),{currentScroll:i,scrollThreshold:g,isScrollingUp:V,scrollRatio:y}=st(e,{canScroll:c}),w=h(()=>s.value.hide||s.value.fullyHide),S=h(()=>e.collapse||s.value.collapse&&(s.value.inverted?y.value>0:y.value===0)),b=h(()=>e.flat||s.value.fullyHide&&!u.value||s.value.elevate&&(s.value.inverted?i.value>0:i.value===0)),p=h(()=>s.value.fadeImage?s.value.inverted?1-y.value:y.value:void 0),T=h(()=>{var I,ne;if(s.value.hide&&s.value.inverted)return 0;const v=((I=f.value)==null?void 0:I.contentHeight)??0,n=((ne=f.value)==null?void 0:ne.extensionHeight)??0;return w.value?i.value<g.value||s.value.fullyHide?v+n:v:v+n});be(h(()=>!!e.scrollBehavior),()=>{_e(()=>{w.value?s.value.inverted?u.value=i.value>g.value:u.value=V.value||i.value<g.value:u.value=!0})});const{ssrBootStyles:C}=Re(),{layoutItemStyles:l}=we({id:e.name,order:h(()=>parseInt(e.order,10)),position:U(e,"location"),layoutSize:T,elementSize:N(void 0),active:u,absolute:U(e,"absolute")});return Y(()=>{const v=ie.filterProps(e);return t(ie,ee({ref:f,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...l.value,"--v-toolbar-image-opacity":p.value,height:void 0,...C.value},e.style]},v,{collapse:S.value,flat:b.value}),a)}),{}}}),ut={class:"px-3 px-md-10 py-8"},dt={class:"d-flex align-center justify-center col-lg-8 col-10 pa-3 mx-5"},ct={class:"d-flex flex-column"},vt={class:"text-center my-3",style:{"font-size":"14px"}},mt={class:"py-4",style:{"background-color":"#f6f9fc"}},ft={class:"text-center"},gt={class:"d-flex align-center justify-space-between mt-3 mb-2 pl-3"},pt={class:"d-flex align-center"},ht={class:"d-flex flex-column justify-space-between",style:{height:"calc(100% - 68px)"}},yt={class:"d-flex align-center mr-1"},xt={class:"mr-3 text-center"},bt={class:"my-1"},wt={class:"d-flex flex-column"},_t={class:"text-truncate",style:{"font-size":"16px",width:"110px"}},kt={style:{color:"#d23f57","font-size":"16px"}},Ct={key:1,class:"pa-3 text-center mt-4",style:{font:"16px",color:"#757575"}},Vt={class:"d-flex flex-column pa-2"},St={class:"d-flex align-center justify-space-between mt-3 mb-2 pl-3"},Tt=oe({__name:"Navbar",props:{showSearch:{type:Boolean,default:!0}},setup(e){const d=Te(),a=_(!1),f=_(),u=_(!1),s=_(),c=_(!1),i=_(!1),g=_(["Review","Photos","Order List","Order History","Followers","Bookmarks"]),V=_([{title:"Food Menu",to:"/restaurant/FoodMenu"},{title:"Restaurant Two Column",to:"/restaurant/RestaurantTwoColumn"},{title:"Search Restaurant",to:"/"}]),y=_(window.innerWidth>=960),w=()=>{f.value="",s.value=""},S=C=>{d.addItemToCart(C)},b=C=>{d.decreaseQuantity(C)},p=C=>{d.removeItemFromCart(C)},T=()=>{a.value=!a.value,a.value?document.body.style.overflow="hidden":document.body.style.overflow=""};return(C,l)=>{const v=ae("router-link");return m(),k(P,null,[t(it,{class:"w-100 position-fixed","scroll-behavior":"elevate"},{default:o(()=>[t(K,null,{default:o(()=>[t(A,{class:"d-flex justify-space-between align-center"},{default:o(()=>[t(R,{cols:"7"},{default:o(()=>[t(A,{class:"d-flex align-center w-100"},{default:o(()=>[t(R,{cols:"12",class:"d-flex align-center justify-start"},{default:o(()=>[t(M,{style:{"margin-right":"16px"}},{default:o(()=>[t(v,{to:"/"},{default:o(()=>[t(L,{width:"48px",height:"48px",src:"https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png"})]),_:1})]),_:1}),y.value&&e.showSearch?(m(),H(tt,{key:0})):O("",!0)]),_:1})]),_:1})]),_:1}),t(R,{class:"d-flex align-center justify-end flex-nowrap",cols:"5"},{default:o(()=>[t(x,{"prepend-icon":"mdi-account-circle-outline",variant:"text",class:J(e.showSearch?"showSearch":"navIconColor"),onClick:T},{default:o(()=>l[10]||(l[10]=[r("span",{class:"hidden-text"},"ACCOUNT",-1)])),_:1},8,["class"]),t(x,{stacked:"",variant:"text",height:"36",class:J(e.showSearch?"showSearch":"navIconColor"),onClick:l[0]||(l[0]=n=>c.value=!c.value)},{default:o(()=>[t(Me,{color:"error",content:Q(d).items.length},{default:o(()=>[t(X,null,{default:o(()=>l[11]||(l[11]=[B("mdi-cart-outline")])),_:1})]),_:1},8,["content"])]),_:1},8,["class"]),t(Ue,{class:J(e.showSearch?"showSearch":"navIconColor"),onClick:l[1]||(l[1]=n=>i.value=!i.value)},null,8,["class"])]),_:1})]),_:1})]),_:1})]),_:1}),t(je,{modelValue:a.value,"onUpdate:modelValue":l[5]||(l[5]=n=>a.value=n),"max-width":"500","scroll-strategy":"none"},{default:o(()=>[t(Be,null,{default:o(()=>[r("div",ut,[l[20]||(l[20]=r("h3",{class:"mb-2 text-center"},"Welcome To Foodie Locator",-1)),l[21]||(l[21]=r("h5",{class:"mb-9 text-center",style:{"font-size":"12px"}}," Log in with email & password ",-1)),t(De,{onSubmit:Le(w,["prevent"])},{default:o(()=>[l[13]||(l[13]=r("p",{class:"mb-1",style:{color:"#212121","font-size":"14px","font-weight":"300"}}," Email or Phone Number ",-1)),t(Z,{modelValue:f.value,"onUpdate:modelValue":l[2]||(l[2]=n=>f.value=n),density:"compact",placeholder:"Example@gmail.com","prepend-inner-icon":"mdi-email-outline",variant:"outlined",required:"",rules:[()=>!!f.value||"This field is required"]},null,8,["modelValue","rules"]),l[14]||(l[14]=r("p",{class:"mb-1",style:{color:"#212121","font-size":"14px","font-weight":"300"}}," Password ",-1)),t(Z,{modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=n=>s.value=n),"append-inner-icon":u.value?"mdi-eye-off":"mdi-eye",type:u.value?"text":"password",density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined",required:"",rules:[()=>!!s.value||"This field is required"],class:"mb-2","onClick:appendInner":l[4]||(l[4]=n=>u.value=!u.value)},null,8,["modelValue","append-inner-icon","type","rules"]),r("div",null,[t(x,{class:"w-100",style:{"background-color":"#d23f57",color:"#fff"},type:"submit"},{default:o(()=>l[12]||(l[12]=[B(" Login ")])),_:1})])]),_:1}),r("div",dt,[t(G),l[15]||(l[15]=r("span",{class:"mx-4"},"on",-1)),t(G)]),r("div",ct,[t(x,{class:"w-100 mb-4","prepend-icon":"mdi-facebook ",style:{"background-color":"#3f50b5",color:"#fff","font-weight":"400"}},{default:o(()=>l[16]||(l[16]=[B(" Continue With Facebook ")])),_:1}),t(x,{class:"w-100 mb-4","prepend-icon":"mdi-google ",style:{"background-color":"#1876d1",color:"#fff","font-weight":"400"}},{default:o(()=>l[17]||(l[17]=[B(" Continue With Google ")])),_:1}),r("p",vt,[l[19]||(l[19]=B(" Don't have account?  ")),t(v,{style:{"text-decoration":"underline"},to:"/"},{default:o(()=>l[18]||(l[18]=[r("span",null," Sign Up ",-1)])),_:1})])])]),r("div",mt,[r("p",ft,[l[23]||(l[23]=B(" Forgot Your Password  ")),t(v,{style:{"text-decoration":"underline"},to:"/"},{default:o(()=>l[22]||(l[22]=[r("span",null," Reset It ",-1)])),_:1})])])]),_:1})]),_:1},8,["modelValue"]),t(se,{modelValue:c.value,"onUpdate:modelValue":l[7]||(l[7]=n=>c.value=n),location:"right",temporary:"",width:296,class:"position-fixed",style:{"z-index":"3100",top:"0",height:"100%"}},{default:o(()=>[r("div",gt,[r("div",pt,[t(X,{icon:"mdi-shopping-outline",class:"mr-3"}),l[24]||(l[24]=r("h4",{style:{"font-size":"20px",color:"#757575"}},"Cart",-1))]),t(x,{icon:"mdi-close",variant:"text",color:"#d23f57",onClick:l[6]||(l[6]=n=>c.value=!c.value)})]),t(G),r("div",ht,[r("div",null,[Q(d).items.length>0?(m(!0),k(P,{key:0},F(Q(d).items,n=>(m(),k("div",{key:n,class:"pa-3 mb-4 d-flex align-center justify-space-between w-100"},[r("div",yt,[r("div",xt,[t(x,{icon:"mdi-plus",density:"compact",color:"#d23f57",variant:"outlined",onClick:I=>S(n)},null,8,["onClick"]),r("p",bt,z(n.quantity),1),t(x,{icon:"mdi-minus",density:"compact",color:"#d23f57",variant:"outlined",onClick:I=>b(n)},null,8,["onClick"])]),t(M,{class:"mr-4 rounded",size:"64"},{default:o(()=>[t(L,{src:n.img},null,8,["src"])]),_:2},1024),r("div",wt,[r("h5",_t,z(n.name),1),l[25]||(l[25]=r("p",{style:{"font-size":"12px"}},"$530 x 1",-1)),r("h5",kt," $"+z(n.price),1)])]),r("div",null,[t(x,{icon:"mdi-close",variant:"text",color:"#000",onClick:I=>p(n)},null,8,["onClick"])])]))),128)):(m(),k("p",Ct," The shopping cart is currently empty. "))]),r("div",Vt,[t(x,{class:"w-100 mb-3 text-capitalize",color:"#d23f57"},{default:o(()=>l[26]||(l[26]=[B(" Checkout Now ($ 220) ")])),_:1}),t(x,{class:"w-100",variant:"outlined",color:"#d23f57"},{default:o(()=>l[27]||(l[27]=[B(" View Cart ")])),_:1})])])]),_:1},8,["modelValue"]),t(se,{modelValue:i.value,"onUpdate:modelValue":l[9]||(l[9]=n=>i.value=n),location:"left",temporary:"",width:296,class:"position-fixed",style:{"z-index":"3100",top:"0",height:"100%"}},{default:o(()=>[r("div",St,[l[28]||(l[28]=r("h4",{style:{"font-size":"20px",color:"#757575"}},"List",-1)),t(x,{icon:"mdi-close",variant:"text",color:"#757575",onClick:l[8]||(l[8]=n=>i.value=!i.value)})]),t(Ie,null,{default:o(()=>[t(re,{value:"Dashboards"},{activator:o(({props:n})=>[t(j,ee(n,{title:"Dashboards","prepend-icon":"mdi-view-dashboard-variant-outline",color:"#d23f57"}),null,16)]),default:o(()=>[(m(!0),k(P,null,F(g.value,(n,I)=>(m(),H(j,{key:I,title:n,value:n},null,8,["title","value"]))),128))]),_:1}),t(re,{value:"Restaurant"},{activator:o(({props:n})=>[t(j,ee(n,{title:"Restaurant","prepend-icon":"mdi-view-dashboard-variant-outline",color:"#d23f57"}),null,16)]),default:o(()=>[(m(!0),k(P,null,F(V.value,n=>(m(),H(j,{key:n.title,title:n.title,to:n.to},null,8,["title","to"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),Bt=pe(Tt,[["__scopeId","data-v-664bb634"]]),Nt=oe({__name:"default",setup(e){const d=_(!1),a=Ee(),f=()=>{a.path==="/"?d.value=window.scrollY>window.innerHeight/2:d.value=!0},u=()=>{window.scrollTo({top:0,behavior:"smooth"})};return E(()=>a.path,s=>{s==="/"?d.value=!1:d.value=!0}),ke(()=>{window.addEventListener("scroll",f),f()}),Ce(()=>{window.addEventListener("scroll",f)}),(s,c)=>{const i=Bt,g=ae("router-view"),V=Ke;return m(),H($e,null,{default:o(()=>[d.value?(m(),H(i,{key:0})):O("",!0),t(Ae,null,{default:o(()=>[t(g)]),_:1}),t(x,{icon:"mdi-chevron-up",elevation:"18",style:{position:"fixed",top:"92.5vh",right:"16px","z-index":"3000",width:"40px",height:"40px","border-radius":"50% 50%","background-color":"#d23f57",color:"white"},onClick:u}),t(V)]),_:1})}}});export{Nt as default};
