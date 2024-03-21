import{H as U,_ as V}from"./TheContainer.55625e00.js";import{_ as N}from"./nuxt-link.8cb77361.js";import{f as q,r as C,y as F,o as w,c as S,a as e,q as d,g as t,m as _,v as g,n as f,t as u,b as m,w as x,d as H}from"./entry.4e723040.js";import{t as $,o as k,s as b,u as A,a as h}from"./vee-validate.esm.2abd4646.js";import{a as B}from"./auth.d5266ccf.js";import{c as E}from"./user.cc9b10bc.js";import{A as M}from"./index.e0cfa627.js";const P={class:"space-y-4"},D={class:"text-red-500"},j={class:"text-red-500"},z={class:"text-red-500"},I=["disabled"],L=q({__name:"SignupForm",setup(T){const o=C(!1),y=$(k({username:b().nonempty("This is required").min(4,{message:"Too short"}),email:b().nonempty("This is required").email({message:"Must be a valid email"}),password:b().nonempty("This is required").min(6,{message:"Too short"})})),{handleSubmit:p,errors:n}=A({validationSchema:y}),{value:r}=h("username"),{value:l}=h("email"),{value:c}=h("password"),v=p(async i=>{o.value=!0;try{const s=await E(i.username,i.email,i.password);B().signIn(s.user),await F("/")}catch(s){alert(s)}finally{o.value=!1}});return(i,s)=>(w(),S("form",{onSubmit:s[3]||(s[3]=(...a)=>t(v)&&t(v)(...a))},[e("fieldset",P,[e("div",{class:d(["form-group",{"opacity-50 pointer-events-none":t(o)}])},[_(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>f(r)?r.value=a:null),name:"username",type:"text",placeholder:"Username",class:"w-full px-6 py-3 text-base leading-5 text-gray-600 bg-white border border-gray-300 rounded-md"},null,512),[[g,t(r)]]),e("span",D,u(t(n).username),1)],2),e("div",{class:d(["form-group",{"opacity-50 pointer-events-none":t(o)}])},[_(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>f(l)?l.value=a:null),name:"email",type:"email",placeholder:"Email",class:"w-full px-6 py-3 text-base leading-5 text-gray-600 bg-white border border-gray-300 rounded-md"},null,512),[[g,t(l)]]),e("span",j,u(t(n).email),1)],2),e("div",{class:d(["form-group",{"opacity-50 pointer-events-none":t(o)}])},[_(e("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>f(c)?c.value=a:null),name:"password",type:"password",placeholder:"Password",class:"w-full px-6 py-3 text-base leading-5 text-gray-600 bg-white border border-gray-300 rounded-md"},null,512),[[g,t(c)]]),e("span",z,u(t(n).password),1)],2),e("button",{disabled:t(o),class:d(["float-right px-6 py-3 text-base text-white bg-custom-green border border-custom-green rounded-md hover:bg-green-600",{"bg-gray-300 cursor-not-allowed":t(o)}])}," Sign Up ",10,I)])],32))}}),R={class:"w-full md:w-1/2 md:mx-auto"},G=e("h1",{class:"text-center text-4xl font-medium mb-2"},"Sign Up",-1),J={class:"text-center mb-6"},ee={__name:"register",setup(T){return(o,y)=>{const p=U,n=N,r=L,l=V;return w(),S("div",null,[m(p,null,{default:x(()=>[e("title",null,"Sign up — "+u(t(M)),1)]),_:1}),m(l,null,{default:x(()=>[e("div",R,[G,e("p",J,[m(n,{href:"/user/login",class:"text-custom-green no-underline hover:text-green-600 hover:underline"},{default:x(()=>[H(" Have an account? ")]),_:1})]),m(r)])]),_:1})])}}};export{ee as default};