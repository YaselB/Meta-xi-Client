import{a as H}from"./chunk-HTONRPL5.js";import"./chunk-I6QIW7BD.js";import"./chunk-WXI33M2S.js";import{a as A,e as U,m as Q}from"./chunk-GP7BZZWX.js";import{Fb as _,Ga as M,Gb as R,Hb as E,Ka as o,W as P,Z as x,_a as T,ab as d,ac as j,d as m,ea as S,eb as O,fa as b,fb as D,ga as v,hb as I,ib as G,jb as i,kb as a,lb as F,oa as k,ob as w,qb as u,r as g,rb as y,xb as r,yb as p,zb as V}from"./chunk-HLI2SXL3.js";function $(c,s){if(c&1){let h=w();i(0,"div",10)(1,"button",11),u("click",function(){b(h);let t=y();return v(t.buy())}),i(2,"p"),r(3,"Comprar Ahora"),a()()()}}var L=(()=>{let s=class s{constructor(){this.mine=!1,this.onBuy=new k,this.idPlan="",this.name="",this.price=0,this.maxQuantity=0,this.daysActive=0,this.dailyBenefit=0,this.totalBenefit=0,this.daysRemaining=0,this.hourBenefit=0,this.percentage=0}ngOnInit(){this.updateData()}ngOnChanges(n){(n.data||n.mine)&&this.updateData()}updateData(){this.mine?(this.cleanData(),console.log("Datos cuando 'mine' es true",this.data)):(this.cleanData2(),console.log("Datos cuando 'mine' es false",this.data))}cleanData(){let{idPlan:n,name:t,price:e,maxQuantity:l,daysActive:f,dailyBenefit:C,totalBenefit:B}=this.data;this.idPlan=n,this.name=t,this.price=e,this.maxQuantity=l,this.daysActive=f,this.dailyBenefit=C,this.totalBenefit=B}cleanData2(){let{idPlan:n,name:t,percentage:e,daysRemaining:l,hourBenefit:f,dailyBenefit:C,totalBenefit:B}=this.data;this.idPlan=n,this.name=t,this.percentage=e,this.daysRemaining=l,this.hourBenefit=f,this.dailyBenefit=C,this.totalBenefit=B}buy(){this.onBuy.emit(this.name)}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=x({type:s,selectors:[["app-card"]],inputs:{data:"data",mine:"mine"},outputs:{onBuy:"onBuy"},standalone:!0,features:[S,_],decls:36,vars:11,consts:[[1,"w-full","flex","flex-col","items-center","bg-blue-950","rounded-lg","p-2","overflow-hidden"],[1,"w-full","text-center","h-5","mt-1"],[1,"w-fit","h-full","text-black","font-extralight","text-sm","grad","px-8","free-form-div"],[1,"w-full","flex","justify-between","mx-auto","gap-1","overflow-hidden"],["alt","img",1,"w-56","-ml-8","-mb-4","rounded",3,"src"],[1,"w-full","flex","flex-col","items-center","gap-1","text-xs","font-light","-ml-14"],[1,"w-full","flex","justify-between","items-center"],[1,"inline-flex","items-center","gap-1"],[1,""],[1,"text-green-600","font-semibold"],[1,"w-full","flex","justify-end","mt-3"],[1,"w-4/5","flex","justify-center","text-sm","gap-3","items-center","bg-blue-900","p-1","rounded-md","btn-alt","transition-opacity","duration-200","easy-in-out","hover:opacity-80",3,"click"]],template:function(t,e){t&1&&(i(0,"section",0)(1,"div",1)(2,"p",2),r(3),a()(),i(4,"div",3),F(5,"img",4),i(6,"div",5)(7,"span",6)(8,"p"),r(9),a(),i(10,"p"),r(11),a()(),i(12,"span",6)(13,"p"),r(14),a(),i(15,"p"),r(16),a()(),i(17,"span",6)(18,"p"),r(19),a(),i(20,"span",7)(21,"p",8),r(22),a()()(),i(23,"span",6)(24,"p"),r(25,"Beneficio diario (COP)"),a(),i(26,"span",7)(27,"p",8),r(28),a()()(),i(29,"span",6)(30,"p"),r(31,"Beneficio total (COP)"),a(),i(32,"span",7)(33,"p",9),r(34),a()()(),T(35,$,4,0,"div",10),a()()()),t&2&&(o(3),p(e.name),o(2),d("src","assets/glasses/tinified/vr"+e.idPlan+".png",M),o(4),p(e.mine?"Precio (COP)":"Beneficio en porcentaje"),o(2),p(e.mine?e.price:e.percentage+"%"),o(3),p(e.mine?"D\xEDas de actividad":"Dias restantes"),o(2),p(e.mine?e.daysActive:e.daysRemaining),o(3),p(e.mine?"Art\xEDculos m\xE1ximos":"Beneficio por hora (COP)"),o(3),p(e.mine?e.maxQuantity:e.hourBenefit),o(6),p(e.dailyBenefit),o(6),p(e.totalBenefit),o(),O(35,e.mine?35:-1))},styles:['.free-form-div[_ngcontent-%COMP%]{clip-path:polygon(25% 0,100% 1%,82% 100%,0% 100%)}.btn-alt[_ngcontent-%COMP%]{border:var(--btn-border);color:var(--btn-text-color);position:relative;overflow:hidden}.btn-alt[_ngcontent-%COMP%]:before, .btn-alt[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;height:100%;top:0}.btn-alt[_ngcontent-%COMP%]:before{background:#ffffffc5;width:100px;left:0;filter:blur(30px);animation:_ngcontent-%COMP%_shine-alt1 2s ease-in-out infinite}.btn-alt[_ngcontent-%COMP%]:after{background:#ffffff86;width:60px;left:60px;filter:blur(5px);animation:_ngcontent-%COMP%_shine-alt2 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_shine-alt1{0%{opacity:.5;transform:translate(-100px) skew(-15deg)}42.8571428571%,to{opacity:.6;transform:translate(300px) skew(-15deg)}}@keyframes _ngcontent-%COMP%_shine-alt2{0%{opacity:0;transform:translate(-100px) skew(-15deg)}42.8571428571%,to{opacity:1;transform:translate(300px) skew(-15deg)}}']});let c=s;return c})();var q=()=>["/recharge"],N=c=>({"bg-[#301E67] shadow-xl font-semibold":c});function J(c,s){if(c&1){let h=w();i(0,"app-card",13),u("onBuy",function(t){b(h);let e=y();return v(e.buyPlan(t))}),a()}if(c&2){let h=s.$implicit,n=y();d("data",h)("mine",n.mine)}}var le=(()=>{let s=class s{constructor(){this.balance="0.00",this.todayProfits=0,this.profits=0,this.list=[],this.mine=!0,this.http=P(A),this.username=localStorage.getItem("username"),this.notificationService=P(H)}ngOnInit(){this.gafasVR(),this.GetBenefits()}GetBenefits(){return m(this,null,function*(){try{if(this.username!==null){let n=yield this.GetBenefitsToServer(this.username);this.balance=n.acumulatedTotalBenefit,this.profits=n.acumulatedTotalBenefit,console.log(this.profits),this.todayProfits=n.acumulatedBenefitperHour}else console.log("no hay usuario")}catch(n){console.error("Error al obtener los beneficios: ",n)}})}gafasVR(){return m(this,null,function*(){try{this.list=yield this.GetPlans(),this.mine=!0}catch(n){console.error("Error al obtener los planes: ",n)}})}myGafas(){return m(this,null,function*(){try{this.list=yield this.GetMyPlans(),this.mine=!1,console.log(this.mine),console.log(this.list)}catch(n){console.error("Error al obtener mis planes: ",n)}})}GetMyPlans(){return m(this,null,function*(){let n="http://localhost:5071/api/UserPlans/GetUserPlans/"+this.username;try{let t=yield g(this.http.get(n));return console.log(t),t}catch(t){let e="Error desconocido";throw t.error&&(typeof t.error=="string"?e=t.error:t.error.message&&(e=t.error.message)),e}})}GetPlans(){return m(this,null,function*(){let n="https://meta-api-production-3abd.up.railway.app/api/Plans/Plans/"+this.username;try{let t=yield g(this.http.get(n));return console.log(t),t}catch(t){let e="Error desconocido";throw t.error&&(typeof t.error=="string"?e=t.error:t.error.message&&(e=t.error.message)),e}})}buyPlan(n){return m(this,null,function*(){let t="https://meta-api-production-3abd.up.railway.app/api/UserPlans/UserBuyPlans",e={idPlan:n,username:this.username};try{let l=yield g(this.http.post(t,e));l&&this.notificationService.correct(l.message)}catch(l){let f="Error desconocido";l.error&&l.error.message&&(f=l.error.message),this.notificationService.errorMessage(f)}})}GetBenefitsToServer(n){return m(this,null,function*(){let t="https://meta-api-production-3abd.up.railway.app/api/UserPlans/GetBalaceToUser/"+this.username;try{return yield g(this.http.get(t))}catch(e){let l="Error desconocido";throw e.error&&(typeof e.error=="string"?l=e.error:e.error.message&&(l=e.error.message)),l}})}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=x({type:s,selectors:[["app-tasks"]],standalone:!0,features:[_],decls:28,vars:11,consts:[[1,"w-full","bg-blue-950","flex","justify-center","flex-col","gap-3","items-center","px-8","py-4","rounded-lg"],[1,"w-full","flex","items-center","gap-3","border-b-[0.1px]","border-gray-500","pb-2","text-base"],[1,"w-1/2","flex","flex-col","items-center"],[1,"text-2xl"],[1,"w-full","flex","items-center"],[1,"w-1/2","flex","flex-col"],[1,"text-slate-400"],[1,"w-1/2","flex","justify-end"],[1,"bg-black","py-1","px-4","rounded-xl","text-sm",3,"routerLink"],[1,"flex","items-center","bg-blue-950","mt-7","rounded-xl","shadow-xl"],[1,"w-1/2","py-3","rounded-xl","transition-opacity","duration-200","easy-in-out","hover:opacity-80",3,"click","ngClass"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-4","mt-3","mx-auto","pb-20"],[3,"data","mine"],[3,"onBuy","data","mine"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"div",1)(2,"button",2)(3,"p"),r(4,"Ganancias obtenidas hoy"),a(),i(5,"span",3),r(6),a()(),i(7,"button",2)(8,"p"),r(9,"Todas las ganancias"),a(),i(10,"span",3),r(11),a()()(),i(12,"div",4)(13,"article",5),r(14),i(15,"p",6),r(16,"Balance Total"),a()(),i(17,"div",7)(18,"button",8),r(19," Recargar "),a()()()(),i(20,"div",9)(21,"button",10),u("click",function(){return e.gafasVR()}),r(22," Gafas VR "),a(),i(23,"button",10),u("click",function(){return e.myGafas()}),r(24," Mis GAFAS "),a()(),i(25,"div",11),I(26,J,1,2,"app-card",12,D),a()),t&2&&(o(6),p(e.todayProfits),o(5),p(e.profits),o(3),V(" ",e.balance," "),o(4),d("routerLink",R(6,q)),o(3),d("ngClass",E(7,N,e.mine)),o(2),d("ngClass",E(9,N,!e.mine)),o(3),G(e.list))},dependencies:[j,L,U,Q],encapsulation:2});let c=s;return c})();export{le as TasksComponent};
