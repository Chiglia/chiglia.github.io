import{$ as S,Da as x,Fa as u,Ga as a,Ja as A,M as h,Oa as F,Qa as N,R as l,W as f,X as I,Z as P,_ as V,aa as m,ac as L,bb as j,bc as y,cb as R,ga as r,gb as z,ha as i,ia as e,ib as O,ja as s,jb as Q,kc as G,nc as H,oc as q,pa as M,pc as c,ta as b,v as T,w as _,wa as D,x as B,ya as E,yc as U,z as g,za as w}from"./chunk-4NWQKEFI.js";var $=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var Z=["content"],ee=n=>({$implicit:n});function te(n,p){if(n&1&&(i(0,"div"),a(1),e()),n&2){let t=b(2);x("display",t.value!=null&&t.value!==0?"flex":"none"),l(),A("",t.value,"",t.unit)}}function ne(n,p){n&1&&M(0)}function ie(n,p){if(n&1&&(i(0,"div",2)(1,"div",2),S(2,te,2,4,"div",3)(3,ne,1,0,"ng-container",4),e()()),n&2){let t=b();u(t.cn(t.cx("value"),t.valueStyleClass)),x("width",t.value+"%")("display","flex")("background",t.color),r("pBind",t.ptm("value")),m("data-p",t.dataP),l(),u(t.cx("label")),r("pBind",t.ptm("label")),m("data-p",t.dataP),l(),r("ngIf",t.showValue&&!t.contentTemplate&&!t._contentTemplate),l(),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",N(17,ee,t.value))}}function ae(n,p){if(n&1&&s(0,"div",2),n&2){let t=b();u(t.cn(t.cx("value"),t.valueStyleClass)),x("background",t.color),r("pBind",t.ptm("value")),m("data-p",t.dataP)}}var re={root:({instance:n})=>["p-progressbar p-component",{"p-progressbar-determinate":n.mode=="determinate","p-progressbar-indeterminate":n.mode=="indeterminate"}],value:"p-progressbar-value",label:"p-progressbar-label"},J=(()=>{class n extends G{name="progressbar";style=$;classes=re;static \u0275fac=(()=>{let t;return function(o){return(t||(t=h(n)))(o||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var X=new B("PROGRESSBAR_INSTANCE"),k=(()=>{class n extends q{componentName="ProgressBar";$pcProgressBar=g(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(c,{self:!0});value;showValue=!0;styleClass;valueStyleClass;unit="%";mode="determinate";color;contentTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=g(J);templates;_contentTemplate;onAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="content"?this._contentTemplate=t.template:this._contentTemplate=t.template})}get dataP(){return this.cn({determinate:this.mode==="determinate",indeterminate:this.mode==="indeterminate"})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=h(n)))(o||n)}})();static \u0275cmp=f({type:n,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(d,o,C){if(d&1&&D(C,Z,4)(C,L,4),d&2){let v;E(v=w())&&(o.contentTemplate=v.first),E(v=w())&&(o.templates=v)}},hostAttrs:["role","progressbar"],hostVars:7,hostBindings:function(d,o){d&2&&(m("aria-valuemin",0)("aria-valuenow",o.value)("aria-valuemax",100)("aria-level",o.value+o.unit)("data-p",o.dataP),u(o.cn(o.cx("root"),o.styleClass)))},inputs:{value:[2,"value","value",R],showValue:[2,"showValue","showValue",j],styleClass:"styleClass",valueStyleClass:"valueStyleClass",unit:"unit",mode:"mode",color:"color"},features:[F([J,{provide:X,useExisting:n},{provide:H,useExisting:n}]),P([c]),V],decls:2,vars:2,consts:[[3,"class","pBind","width","display","background",4,"ngIf"],[3,"class","pBind","background",4,"ngIf"],[3,"pBind"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(d,o){d&1&&S(0,ie,4,19,"div",0)(1,ae,1,6,"div",1),d&2&&(r("ngIf",o.mode==="determinate"),l(),r("ngIf",o.mode==="indeterminate"))},dependencies:[Q,z,O,y,c],encapsulation:2,changeDetection:0})}return n})(),K=(()=>{class n{static \u0275fac=function(d){return new(d||n)};static \u0275mod=I({type:n});static \u0275inj=_({imports:[k,y,y]})}return n})();var W=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["app-skills"]],decls:116,vars:24,consts:[[1,"px-3","py-4","md:px-6","md:py-6","max-w-7xl","mx-auto","w-full"],[1,"mb-5","text-center","md:text-left"],[1,"text-4xl","md:text-5xl","font-bold","m-0","mb-2","text-slate-900","dark:text-slate-100","flex","items-center","justify-center","md:justify-start","gap-2"],[1,"pi","pi-book","text-primary","text-3xl","md:text-4xl"],[1,"text-slate-600","dark:text-slate-400","text-lg","m-0","max-w-[30rem]"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-6","mt-4","w-full"],[1,"h-full"],[1,"bg-white","dark:bg-surface-900","border","border-surface-200","dark:border-surface-700","rounded-3xl","p-4","h-full","shadow","hover:-translate-y-1","hover:shadow-xl","transition-all","duration-300"],[1,"flex","items-center","gap-2","mb-4"],[1,"flex","items-center","justify-center","rounded-2xl","w-12","h-12","bg-blue-100","dark:bg-blue-900/30","text-blue-900","dark:text-blue-100"],[1,"pi","pi-desktop","text-xl"],[1,"text-xl","font-bold","m-0","text-slate-900","dark:text-slate-100"],[1,"flex","flex-col","gap-3"],[1,"flex","justify-between","items-center","mb-1"],[1,"text-sm","font-semibold","text-slate-700","dark:text-slate-300"],[1,"text-xs","font-mono","font-bold","text-primary"],["styleClass","h-1.5 rounded",3,"value","showValue"],[1,"flex","items-center","justify-center","rounded-2xl","w-12","h-12","bg-purple-100","dark:bg-purple-900/30","text-purple-900","dark:text-purple-100"],[1,"pi","pi-server","text-xl"],[1,"flex","items-center","justify-center","rounded-2xl","w-12","h-12","bg-emerald-100","dark:bg-emerald-900/30","text-emerald-900","dark:text-emerald-100"],[1,"pi","pi-globe","text-xl"]],template:function(t,d){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),s(3,"i",3),a(4," Competenze & Tecnologie "),e(),i(5,"p",4),a(6," Le mie competenze tecniche strutturate per aree di competenza, coltivate attraverso lo studio continuo e l'esperienza professionale sul campo. "),e()(),i(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9),s(12,"i",10),e(),i(13,"h2",11),a(14," Sviluppo Frontend "),e()(),i(15,"div",12)(16,"div")(17,"div",13)(18,"span",14),a(19,"HTML5 / CSS3 / Tailwind"),e(),i(20,"span",15),a(21,"85%"),e()(),s(22,"p-progressbar",16),e(),i(23,"div")(24,"div",13)(25,"span",14),a(26,"JavaScript / TypeScript"),e(),i(27,"span",15),a(28,"80%"),e()(),s(29,"p-progressbar",16),e(),i(30,"div")(31,"div",13)(32,"span",14),a(33,"Angular Framework"),e(),i(34,"span",15),a(35,"75%"),e()(),s(36,"p-progressbar",16),e(),i(37,"div")(38,"div",13)(39,"span",14),a(40,"React & Redux"),e(),i(41,"span",15),a(42,"60%"),e()(),s(43,"p-progressbar",16),e()()()(),i(44,"div",6)(45,"div",7)(46,"div",8)(47,"div",17),s(48,"i",18),e(),i(49,"h2",11),a(50," Backend & Database "),e()(),i(51,"div",12)(52,"div")(53,"div",13)(54,"span",14),a(55,"Node.js / Express"),e(),i(56,"span",15),a(57,"70%"),e()(),s(58,"p-progressbar",16),e(),i(59,"div")(60,"div",13)(61,"span",14),a(62,"SQL / Relational Databases"),e(),i(63,"span",15),a(64,"65%"),e()(),s(65,"p-progressbar",16),e(),i(66,"div")(67,"div",13)(68,"span",14),a(69,"FastAPI / Python Basics"),e(),i(70,"span",15),a(71,"50%"),e()(),s(72,"p-progressbar",16),e(),i(73,"div")(74,"div",13)(75,"span",14),a(76,"REST APIs / Integrations"),e(),i(77,"span",15),a(78,"75%"),e()(),s(79,"p-progressbar",16),e()()()(),i(80,"div",6)(81,"div",7)(82,"div",8)(83,"div",19),s(84,"i",20),e(),i(85,"h2",11),a(86," Lingue & Strumenti "),e()(),i(87,"div",12)(88,"div")(89,"div",13)(90,"span",14),a(91,"Italiano (Madrelingua)"),e(),i(92,"span",15),a(93,"100%"),e()(),s(94,"p-progressbar",16),e(),i(95,"div")(96,"div",13)(97,"span",14),a(98,"Inglese (Professionale)"),e(),i(99,"span",15),a(100,"80%"),e()(),s(101,"p-progressbar",16),e(),i(102,"div")(103,"div",13)(104,"span",14),a(105,"Git / Version Control"),e(),i(106,"span",15),a(107,"80%"),e()(),s(108,"p-progressbar",16),e(),i(109,"div")(110,"div",13)(111,"span",14),a(112,"UI / UX Design Principles"),e(),i(113,"span",15),a(114,"70%"),e()(),s(115,"p-progressbar",16),e()()()()()()),t&2&&(l(22),r("value",85)("showValue",!1),l(7),r("value",80)("showValue",!1),l(7),r("value",75)("showValue",!1),l(7),r("value",60)("showValue",!1),l(15),r("value",70)("showValue",!1),l(7),r("value",65)("showValue",!1),l(7),r("value",50)("showValue",!1),l(7),r("value",75)("showValue",!1),l(15),r("value",100)("showValue",!1),l(7),r("value",80)("showValue",!1),l(7),r("value",80)("showValue",!1),l(7),r("value",70)("showValue",!1))},dependencies:[U,K,k],encapsulation:2})};export{W as Skills};
