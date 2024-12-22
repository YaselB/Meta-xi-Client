import{a as S}from"./chunk-HTONRPL5.js";import"./chunk-I6QIW7BD.js";import"./chunk-WXI33M2S.js";import{a as h,l as y,m as w}from"./chunk-GP7BZZWX.js";import{Fb as v,Gb as m,Ka as o,La as p,Z as x,ab as c,d as g,jb as e,kb as t,lb as a,qb as b,r as f,xb as i,yb as u}from"./chunk-HLI2SXL3.js";var E=()=>["/recharge"],F=()=>["/withdraw"],k=()=>["/tasks"],I=()=>["/account"],C=()=>["/password"],U=(()=>{let l=class l{constructor(s,n,r){this.http=s,this.notification=n,this.router=r,this.username=localStorage.getItem("username")||"",this.monto="0.00",this.total=0}ngOnInit(){this.GetMyBalance()}GetMyBalance(){return g(this,null,function*(){let s="https://meta-api-production-3abd.up.railway.app/api/Wallet/GetBalanceUsdAndCop/"+this.username;try{let n=yield f(this.http.get(s));this.total=n.balanceInCop,this.monto=n.balanceInUsd}catch(n){let r=n.error.message;console.error(r)}})}Logout(){return g(this,null,function*(){let s="https://meta-api-production-3abd.up.railway.app/api/User/Logout/"+this.username;try{let n=yield f(this.http.get(s));localStorage.removeItem("username"),localStorage.removeItem("token"),this.notification.correct(n.message),setTimeout(()=>this.router.navigate(["/login"]),6e3)}catch(n){let r=n.error.message;this.notification.errorMessage(r)}})}};l.\u0275fac=function(n){return new(n||l)(p(h),p(S),p(y))},l.\u0275cmp=x({type:l,selectors:[["app-me"]],standalone:!0,features:[v],decls:46,vars:13,consts:[[1,"absolute","top-0","left-0","w-full","h-24","bg-blue-950","rounded-b-3xl"],[1,"w-full","relative","-bottom-4","z-50","flex","flex-col","items-center","gap-5"],[1,"w-full","bg-[#E3F4F4]","rounded-lg","p-5","flex","justify-start","gap-5","items-center"],["src","assets/icons/avatar.png","alt","avatar",1,"w-12"],[1,"text-gray-800","text-lg","font-medium"],[1,"w-full","flex","flex-col","justify-center","items-center","gap-3","p-5","bg-art","rounded-lg","text-sm"],[1,"flex","items-center","gap-4","justify-center"],[1,"text-xl","font-semibold"],[1,"w-full","flex","justify-around","items-center","py-3.5","rounded-lg","bg-blue-950"],[1,"flex","flex-col","items-center","gap-2",3,"routerLink"],[1,"bg-[#08635E]","p-2.5","rounded-xl"],["src","assets/meactions/recarga.svg","alt","recarga",1,"w-7"],[1,"text-xs"],[1,"bg-[#3F2787]","p-2.5","rounded-xl"],["src","assets/meactions/retirar.svg","alt","retirar",1,"w-7"],[1,"bg-[#462C6B]","p-2.5","rounded-xl"],["src","assets/meactions/registros.svg","alt","registros",1,"w-7"],[1,"bg-[#57483E]","p-2.5","rounded-xl"],["src","assets/meactions/cuenta.svg","alt","cuenta",1,"w-7"],[1,"w-full","flex","justify-between","items-center","text-[#E3F4F4]","bg-blue-950","py-3","px-4","rounded-lg","shadow-2xl",3,"routerLink"],[1,"w-full","flex","items-center","gap-2"],[1,"bg-[#301E67]","p-2","rounded-xl"],["src","assets/icons/pass.svg","alt","pass",1,"w-5"],["src","assets/icons/next.svg","alt","next",1,"w-6"],[1,"w-full","flex","justify-center","items-center","gap-2","bg-blue-950","py-3","rounded-lg",3,"click"],["src","assets/icons/logout.svg","alt","logout",1,"w-5"],[1,"text-sm"]],template:function(n,r){n&1&&(a(0,"div",0),e(1,"div",1)(2,"header",2),a(3,"img",3),e(4,"p",4),i(5),t()(),e(6,"article",5)(7,"span",6),i(8,"Balance total (COP) "),e(9,"p",7),i(10),t()(),e(11,"span",6),i(12,"Balance total (USD) "),e(13,"p",7),i(14),t()()(),e(15,"div",8)(16,"button",9)(17,"span",10),a(18,"img",11),t(),e(19,"p",12),i(20,"Recargar"),t()(),e(21,"button",9)(22,"span",13),a(23,"img",14),t(),e(24,"p",12),i(25,"Retirar"),t()(),e(26,"button",9)(27,"span",15),a(28,"img",16),t(),e(29,"p",12),i(30,"Inversi\xF3n"),t()(),e(31,"button",9)(32,"span",17),a(33,"img",18),t(),e(34,"p",12),i(35,"Cuenta"),t()()(),e(36,"button",19)(37,"div",20)(38,"span",21),a(39,"img",22),t(),i(40," Cambiar contrase\xF1a "),t(),a(41,"img",23),t(),e(42,"button",24),b("click",function(){return r.Logout()}),a(43,"img",25),e(44,"p",26),i(45,"Desconectar"),t()()()),n&2&&(o(5),u(r.username),o(5),u(r.total),o(4),u(r.monto),o(2),c("routerLink",m(8,E)),o(5),c("routerLink",m(9,F)),o(5),c("routerLink",m(10,k)),o(5),c("routerLink",m(11,I)),o(5),c("routerLink",m(12,C)))},dependencies:[w],styles:[".bg-art[_ngcontent-%COMP%]{background:url(/assets/others/bg-me.png) top left repeat}"]});let d=l;return d})();export{U as MeComponent};