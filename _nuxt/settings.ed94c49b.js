import{H as $,_ as j}from"./TheContainer.55625e00.js";import{f as A,r as q,y as k,o as F,c as B,a as e,m as c,v as m,g as r,n as p,t as d,q as z,K as E,_ as H,z as P,b as h,w as C}from"./entry.4e723040.js";import{t as D,o as L,s as g,u as R,a as b}from"./vee-validate.esm.2abd4646.js";import{u as I}from"./user.cc9b10bc.js";import{a as M}from"./auth.d5266ccf.js";import{A as K}from"./index.e0cfa627.js";const O=["disabled"],G={class:"text-red-500"},J=["disabled"],Q={class:"text-red-500"},W=["disabled"],X={class:"text-red-500"},Y=["disabled"],Z={class:"text-red-500"},ee=["disabled"],re={class:"text-red-500"},ae={class:"flex justify-end"},te=["disabled"],se=A({__name:"SettingForm",setup(N){var v,U,S,V;const o=M(),t=q(!1),y=D(L({image:g().optional(),username:g().nonempty("This is required").min(4,{message:"Too short"}),bio:g().optional(),email:g().nonempty("This is required").email({message:"Must be a valid email"}),password:g().optional()})),{handleSubmit:_,errors:l}=R({validationSchema:y}),{value:f}=b("image",void 0,{initialValue:(v=o.currentUser)==null?void 0:v.image}),{value:i}=b("username",void 0,{initialValue:(U=o.currentUser)==null?void 0:U.username}),{value:n}=b("bio",void 0,{initialValue:(S=o.currentUser)==null?void 0:S.bio}),{value:u}=b("email",void 0,{initialValue:(V=o.currentUser)==null?void 0:V.email}),{value:x}=b("password"),w=_(async T=>{t.value=!0;try{const{user:a}=await I(o.jwtToken||"",{user:T});o.currentUser=a,await k("/")}catch(a){alert(a)}finally{t.value=!1}});return(T,a)=>(F(),B("form",{class:"space-y-4",onSubmit:a[5]||(a[5]=E((...s)=>r(w)&&r(w)(...s),["prevent"]))},[e("fieldset",{disabled:r(t),class:"flex flex-col space-y-2"},[c(e("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>p(f)?f.value=s:null),name:"image",type:"url",placeholder:"URL of profile picture",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"},null,512),[[m,r(f)]]),e("span",G,d(r(l).image),1)],8,O),e("fieldset",{disabled:r(t),class:"flex flex-col space-y-2"},[c(e("textarea",{"onUpdate:modelValue":a[1]||(a[1]=s=>p(n)?n.value=s:null),name:"bio",placeholder:"Short bio about you",rows:"8",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-y"},null,512),[[m,r(n)]]),e("span",Q,d(r(l).bio),1)],8,J),e("fieldset",{disabled:r(t),class:"flex flex-col space-y-2"},[c(e("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>p(i)?i.value=s:null),name:"username",type:"text",placeholder:"Username",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"},null,512),[[m,r(i)]]),e("span",X,d(r(l).username),1)],8,W),e("fieldset",{disabled:r(t),class:"flex flex-col space-y-2"},[c(e("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>p(u)?u.value=s:null),name:"email",type:"email",placeholder:"Email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"},null,512),[[m,r(u)]]),e("span",Z,d(r(l).email),1)],8,Y),e("fieldset",{disabled:r(t),class:"flex flex-col space-y-2"},[c(e("input",{"onUpdate:modelValue":a[4]||(a[4]=s=>p(x)?x.value=s:null),name:"password",type:"password",placeholder:"New Password",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"},null,512),[[m,r(x)]]),e("span",re,d(r(l).password),1)],8,ee),e("div",ae,[e("button",{disabled:r(t),class:z(["float-right px-6 py-3 text-base text-white bg-custom-green border border-custom-green rounded-md hover:bg-green-600",{"bg-gray-300 cursor-not-allowed":r(t)}])}," Update Settings ",10,te)])],32))}});const oe=H(se,[["__scopeId","data-v-44403e88"]]),le={class:"w-full md:w-1/2 md:mx-auto mt-20"},de=e("h1",{class:"mb-4 text-xl font-bold text-gray-900 dark:text-white"},"Настройки профиля",-1),ie=e("hr",{class:"mb-5"},null,-1),be=A({__name:"settings",async setup(N){let o,t;const y=M();y.isAuthenticated||([o,t]=P(()=>k("/")),await o,t());const _=async()=>{y.signOut(),await k("/")};return(l,f)=>{const i=$,n=oe,u=j;return F(),B("div",null,[h(i,null,{default:C(()=>[e("title",null,"Настройки профиля — "+d(r(K)),1)]),_:1}),h(u,null,{default:C(()=>[e("div",le,[de,h(n,{class:"mb-5"}),ie,e("button",{class:"text-red-600 border-white inline-block text-center no-underline align-middle cursor-pointer p-2 text-base rounded hover:border-red-600 border",onClick:_}," Нажмите кнопку для выхода. ")])]),_:1})])}}});export{be as default};