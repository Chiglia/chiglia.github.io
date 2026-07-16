import{a as it}from"./chunk-UP54N42G.js";import{a as et,b as tt,c as ot,e as at,g as ve}from"./chunk-WREP222D.js";import{a as Ze,b as Je}from"./chunk-YYMECUCT.js";import{b as qe}from"./chunk-YC6QKKKL.js";import{$ as w,$b as Ye,Ab as Xe,B as Be,Bb as be,C as Ne,Cb as ce,D as ae,Da as He,Ea as ze,Fa as g,G as L,Ga as m,Ha as le,Ia as V,J as Y,M as f,Oa as T,Pa as Ve,Q as Fe,Qa as de,R as d,Ra as Re,Sb as te,Ta as je,Tb as Ee,Ub as se,Va as v,W as x,X as Z,Xa as _,Y as ue,Z as A,_ as y,_a as we,a as oe,aa as C,ac as ne,ba as H,bb as E,bc as B,ca as z,cb as ge,da as Oe,ea as $,fa as K,ga as s,gb as $e,ha as a,ia as l,ib as ee,ja as b,jb as S,kc as R,ma as Pe,na as _e,nc as I,oa as ke,oc as O,pa as re,pb as Ke,pc as u,qa as Le,qc as k,rc as he,sa as q,sc as nt,ta as h,tb as me,u as M,ua as U,ub as fe,v as P,va as Q,vb as Ue,w as X,wa as J,wb as Qe,wc as rt,x as D,xb as Ge,xc as lt,ya as N,yb as We,yc as dt,z as p,za as F}from"./chunk-4NWQKEFI.js";var ct=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var It=["*"],Mt={root:({instance:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align==null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align==null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},Bt={root:({instance:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},st=(()=>{class t extends R{name="divider";style=ct;classes=Bt;inlineStyles=Mt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var pt=new D("DIVIDER_INSTANCE"),Ae=(()=>{class t extends O{componentName="Divider";$pcDivider=p(pt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(u,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=p(st);get dataP(){return this.cn({[this.align]:this.align,[this.layout]:this.layout,[this.type]:this.type})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:6,hostBindings:function(n,i){n&2&&(C("aria-orientation",i.layout)("data-p",i.dataP),ze(i.sx("root")),g(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[T([st,{provide:pt,useExisting:t},{provide:I,useExisting:t}]),A([u]),y],ngContentSelectors:It,decls:2,vars:3,consts:[[3,"pBind"]],template:function(n,i){n&1&&(U(),a(0,"div",0),Q(1),l()),n&2&&(g(i.cx("content")),s("pBind",i.ptm("content")))},dependencies:[S,B,k,u],encapsulation:2,changeDetection:0})}return t})(),ut=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=X({imports:[Ae,k,k]})}return t})();var gt=(()=>{class t extends O{modelValue=Y(void 0);$filled=v(()=>Xe(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275dir=ue({type:t,features:[y]})}return t})();var ye=(()=>{class t extends gt{required=_(void 0,{transform:E});invalid=_(void 0,{transform:E});disabled=_(void 0,{transform:E});name=_();_disabled=Y(!1);$disabled=v(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275dir=ue({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[y]})}return t})();var mt=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var Ot=["icon"],Pt=["content"],vt=t=>({$implicit:t});function Lt(t,r){t&1&&re(0)}function Ht(t,r){if(t&1&&b(0,"span",0),t&2){let e=h(3);g(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),s("pBind",e.ptm("icon"))}}function zt(t,r){if(t&1&&H(0,Ht,1,3,"span",2),t&2){let e=h(2);z(e.onIcon||e.offIcon?0:-1)}}function Vt(t,r){t&1&&re(0)}function Rt(t,r){if(t&1&&w(0,Vt,1,0,"ng-container",1),t&2){let e=h(2);s("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",de(2,vt,e.checked))}}function jt(t,r){if(t&1&&(H(0,zt,1,1)(1,Rt,1,4,"ng-container"),a(2,"span",0),m(3),l()),t&2){let e=h();z(e.iconTemplate?1:0),d(2),g(e.cx("label")),s("pBind",e.ptm("label")),d(),le(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var $t=`
    ${mt}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,Kt={root:({instance:t})=>["p-togglebutton p-component",{"p-togglebutton-checked":t.checked,"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large","p-togglebutton-fluid":t.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},ft=(()=>{class t extends R{name="togglebutton";style=$t;classes=Kt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var bt=new D("TOGGLEBUTTON_INSTANCE"),qt={provide:me,useExisting:M(()=>Te),multi:!0},Te=(()=>{class t extends ye{componentName="ToggleButton";$pcToggleButton=p(bt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(u,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=_(void 0,{transform:E});onChange=new L;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=p(ft);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,i,o){if(n&1&&J(o,Ot,4)(o,Pt,4)(o,ne,4),n&2){let c;N(c=F())&&(i.iconTemplate=c.first),N(c=F())&&(i.contentTemplate=c.first),N(c=F())&&(i.templates=c)}},hostVars:11,hostBindings:function(n,i){n&1&&q("keydown",function(c){return i.onKeyDown(c)})("click",function(c){return i.toggle(c)}),n&2&&(C("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-pressed",i.checked?"true":"false")("role","button")("tabindex",i.tabindex!==void 0?i.tabindex:i.$disabled()?-1:0)("data-pc-name","togglebutton")("data-p-checked",i.active)("data-p-disabled",i.$disabled())("data-p",i.dataP),g(i.cn(i.cx("root"),i.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",ge],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",E],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[T([qt,ft,{provide:bt,useExisting:t},{provide:I,useExisting:t}]),A([he,u]),y],decls:3,vars:9,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"]],template:function(n,i){n&1&&(a(0,"span",0),w(1,Lt,1,0,"ng-container",1),H(2,jt,4,5),l()),n&2&&(g(i.cx("content")),s("pBind",i.ptm("content")),C("data-p",i.dataP),d(),s("ngTemplateOutlet",i.contentTemplate||i._contentTemplate)("ngTemplateOutletContext",de(7,vt,i.checked)),d(),z(i.contentTemplate?-1:2))},dependencies:[S,ee,B,k,u],encapsulation:2,changeDetection:0})}return t})();var yt=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Qt=["item"],Gt=(t,r)=>({$implicit:t,index:r});function Wt(t,r){return this.getOptionLabel(r)}function Xt(t,r){t&1&&re(0)}function Yt(t,r){if(t&1&&w(0,Xt,1,0,"ng-container",3),t&2){let e=h(2),n=e.$implicit,i=e.$index,o=h();s("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",Re(2,Gt,n,i))}}function Zt(t,r){t&1&&w(0,Yt,1,5,"ng-template",null,0,je)}function Jt(t,r){if(t&1){let e=Le();a(0,"p-togglebutton",2),q("onChange",function(i){let o=Be(e),c=o.$implicit,W=o.$index,Ce=h();return Ne(Ce.onOptionSelect(i,c,W))}),H(1,Zt,2,0),l()}if(t&2){let e=r.$implicit,n=h();s("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(e))("onLabel",n.getOptionLabel(e))("offLabel",n.getOptionLabel(e))("disabled",n.$disabled()||n.isOptionDisabled(e))("allowEmpty",n.getAllowEmpty())("size",n.size())("fluid",n.fluid())("pt",n.ptm("pcToggleButton"))("unstyled",n.unstyled()),d(),z(n.itemTemplate||n._itemTemplate?1:-1)}}var en=`
    ${yt}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,tn={root:({instance:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid(),"p-selectbutton-fluid":t.fluid()}]},xt=(()=>{class t extends R{name="selectbutton";style=en;classes=tn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Ct=new D("SELECTBUTTON_INSTANCE"),nn={provide:me,useExisting:M(()=>Se),multi:!0},Se=(()=>{class t extends ye{componentName="SelectButton";options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=_();fluid=_(void 0,{transform:E});onOptionClick=new L;onChange=new L;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=p(xt);$pcSelectButton=p(Ct,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(u,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?be(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?be(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?be(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,i){if(this.$disabled()||this.isOptionDisabled(n))return;let o=this.isSelected(n);if(o&&this.unselectable)return;let c=this.getOptionValue(n),W;if(this.multiple)o?W=this.value.filter(Ce=>!ce(Ce,c,this.equalityKey||void 0)):W=this.value?[...this.value,c]:[c];else{if(o&&!this.allowEmpty)return;W=o?null:c}this.focusedIndex=i,this.value=W,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:i})}changeTabIndexes(e,n){let i,o;for(let c=0;c<=this.el.nativeElement.children.length-1;c++)this.el.nativeElement.children[c].getAttribute("tabindex")==="0"&&(i={elem:this.el.nativeElement.children[c],index:c});n==="prev"?i.index===0?o=this.el.nativeElement.children.length-1:o=i.index-1:i.index===this.el.nativeElement.children.length-1?o=0:o=i.index+1,this.focusedIndex=o,this.el.nativeElement.children[o].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!ce(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,i=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let o of this.value)if(ce(o,i,this.dataKey)){n=!0;break}}}else n=ce(this.getOptionValue(e),this.value,this.equalityKey||void 0);return n}templates;onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="item"&&(this._itemTemplate=e.template)})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,i,o){if(n&1&&J(o,Qt,4)(o,ne,4),n&2){let c;N(c=F())&&(i.itemTemplate=c.first),N(c=F())&&(i.templates=c)}},hostVars:5,hostBindings:function(n,i){n&2&&(C("role","group")("aria-labelledby",i.ariaLabelledBy)("data-p",i.dataP),g(i.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",E],tabindex:[2,"tabindex","tabindex",ge],multiple:[2,"multiple","multiple",E],allowEmpty:[2,"allowEmpty","allowEmpty",E],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",E],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[T([nn,xt,{provide:Ct,useExisting:t},{provide:I,useExisting:t}]),A([u]),y],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&$(0,Jt,2,12,"p-togglebutton",1,Wt,!0),n&2&&K(i.options)},dependencies:[Te,We,fe,Qe,S,ee,B,k],encapsulation:2,changeDetection:0})}return t})();var on=["data-p-icon","chevron-up"],_t=(()=>{class t extends nt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["","data-p-icon","chevron-up"]],features:[y],attrs:on,decls:1,vars:0,consts:[["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(n,i){n&1&&(ae(),Pe(0,"path",0))},encapsulation:2})}return t})();var kt=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var xe=["*"],an=["toggleicon"],rn=t=>({active:t});function ln(t,r){}function dn(t,r){t&1&&w(0,ln,0,0,"ng-template")}function cn(t,r){if(t&1&&w(0,dn,1,0,null,0),t&2){let e=h();s("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",de(2,rn,e.active()))}}function sn(t,r){if(t&1&&b(0,"span",4),t&2){let e=h(3);g(e.cn(e.cx("toggleicon"),e.pcAccordion.collapseIcon)),s("pBind",e.ptm("toggleicon")),C("aria-hidden",!0)}}function pn(t,r){if(t&1&&(ae(),b(0,"svg",5)),t&2){let e=h(3);g(e.cx("toggleicon")),s("pBind",e.ptm("toggleicon")),C("aria-hidden",!0)}}function un(t,r){if(t&1&&(_e(0),w(1,sn,1,4,"span",2)(2,pn,1,4,"svg",3),ke()),t&2){let e=h(2);d(),s("ngIf",e.pcAccordion.collapseIcon),d(),s("ngIf",!e.pcAccordion.collapseIcon)}}function gn(t,r){if(t&1&&b(0,"span",4),t&2){let e=h(3);g(e.cn(e.cx("toggleicon"),e.pcAccordion.expandIcon)),s("pBind",e.ptm("toggleicon")),C("aria-hidden",!0)}}function mn(t,r){if(t&1&&(ae(),b(0,"svg",7)),t&2){let e=h(3);s("pBind",e.ptm("toggleicon")),C("aria-hidden",!0)}}function fn(t,r){if(t&1&&(_e(0),w(1,gn,1,4,"span",2)(2,mn,1,2,"svg",6),ke()),t&2){let e=h(2);d(),s("ngIf",e.pcAccordion.expandIcon),d(),s("ngIf",!e.pcAccordion.expandIcon)}}function bn(t,r){if(t&1&&w(0,un,3,2,"ng-container",1)(1,fn,3,2,"ng-container",1),t&2){let e=h();s("ngIf",e.active()),d(),s("ngIf",!e.active())}}var hn=`
${kt}

/* For PrimeNG */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`,vn={root:"p-accordion p-component",panel:({instance:t})=>["p-accordionpanel",{"p-accordionpanel-active":t.active(),"p-disabled":t.disabled()}],header:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon",contentContainer:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},j=(()=>{class t extends R{name="accordion";style=hn;classes=vn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var wt=new D("ACCORDION_PANEL_INSTANCE"),Et=new D("ACCORDION_HEADER_INSTANCE"),Dt=new D("ACCORDION_CONTENT_INSTANCE"),At=new D("ACCORDION_INSTANCE"),pe=(()=>{class t extends O{$pcAccordionPanel=p(wt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(u,{self:!0});componentName="AccordionPanel";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=p(M(()=>ie));value=we(void 0);disabled=_(!1,{transform:e=>ve(e)});active=v(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,n){return Array.isArray(e)?e.includes(n):e===n}_componentStyle=p(j);static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:4,hostBindings:function(n,i){n&2&&(C("data-p-disabled",i.disabled())("data-p-active",i.active()),g(i.cx("panel")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[T([j,{provide:wt,useExisting:t},{provide:I,useExisting:t}]),A([u]),y],ngContentSelectors:xe,decls:1,vars:0,template:function(n,i){n&1&&(U(),Q(0))},dependencies:[S,k],encapsulation:2,changeDetection:0})}return t})(),Ie=(()=>{class t extends O{$pcAccordionHeader=p(Et,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(u,{self:!0});componentName="AccordionHeader";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=p(M(()=>ie));pcAccordionPanel=p(M(()=>pe));id=v(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=v(()=>this.pcAccordionPanel.active());disabled=v(()=>this.pcAccordionPanel.disabled());ariaControls=v(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let n=this.active();this.changeActiveValue();let i=this.active(),o=this.pcAccordionPanel.value();!n&&i?this.pcAccordion.onOpen.emit({originalEvent:e,index:o}):n&&!i&&this.pcAccordion.onClose.emit({originalEvent:e,index:o})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}_componentStyle=p(j);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return te(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,n=!1){let i=n?e:e.nextElementSibling;return i?se(i,"data-p-disabled")?this.findNextPanel(i):this.findHeader(i):null}findPrevPanel(e,n=!1){let i=n?e:e.previousElementSibling;return i?se(i,"data-p-disabled")?this.findPrevPanel(i):this.findHeader(i):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,n){Ee(n)}arrowDownKey(e){let n=this.findNextPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let n=this.findPrevPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let n=this.findFirstPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEndKey(e){let n=this.findLastPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}get dataP(){return this.cn({active:this.active()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(n,i,o){if(n&1&&J(o,an,5),n&2){let c;N(c=F())&&(i.toggleicon=c.first)}},hostVars:13,hostBindings:function(n,i){n&1&&q("click",function(c){return i.onClick(c)})("focus",function(){return i.onFocus()})("keydown",function(c){return i.onKeydown(c)}),n&2&&(C("id",i.id())("aria-expanded",i.active())("aria-controls",i.ariaControls())("aria-disabled",i.disabled())("role","button")("tabindex",i.disabled()?"-1":"0")("data-p-active",i.active())("data-p-disabled",i.disabled())("data-p",i.dataP),g(i.cx("header")),He("user-select","none"))},features:[T([j,{provide:Et,useExisting:t},{provide:I,useExisting:t}]),A([he,u]),y],ngContentSelectors:xe,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-up",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"]],template:function(n,i){n&1&&(U(),Q(0),H(1,cn,1,4)(2,bn,2,2)),n&2&&(d(),z(i.toggleicon?1:2))},dependencies:[S,$e,ee,it,_t,k,u],encapsulation:2,changeDetection:0})}return t})(),Me=(()=>{class t extends O{$pcAccordionContent=p(Dt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(u,{self:!0});componentName="AccordionContent";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=p(M(()=>ie));pcAccordionPanel=p(M(()=>pe));active=v(()=>this.pcAccordionPanel.active());ariaLabelledby=v(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=v(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=p(j);ptParams=v(()=>({context:this.active()}));computedMotionOptions=v(()=>oe(oe({},this.ptm("motion",this.ptParams())),this.pcAccordion.computedMotionOptions()));static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:6,hostBindings:function(n,i){n&2&&(C("id",i.id())("role","region")("data-p-active",i.active())("aria-labelledby",i.ariaLabelledby()),g(i.cx("contentContainer")))},features:[T([j,{provide:Dt,useExisting:t},{provide:I,useExisting:t}]),A([u]),y],ngContentSelectors:xe,decls:4,vars:10,consts:[["name","p-collapsible","hideStrategy","visibility",3,"visible","mountOnEnter","unmountOnLeave","options"],[3,"pBind"]],template:function(n,i){n&1&&(U(),a(0,"p-motion",0)(1,"div",1)(2,"div",1),Q(3),l()()()),n&2&&(s("visible",i.active())("mountOnEnter",!1)("unmountOnLeave",!1)("options",i.computedMotionOptions()),d(),g(i.cx("contentWrapper")),s("pBind",i.ptm("contentWrapper",i.ptParams())),d(),g(i.cx("content")),s("pBind",i.ptm("content",i.ptParams())))},dependencies:[S,k,u,at,ot],encapsulation:2,changeDetection:0})}return t})(),ie=(()=>{class t extends O{componentName="Accordion";$pcAccordion=p(At,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(u,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}value=we(void 0);multiple=_(!1,{transform:e=>ve(e)});styleClass;expandIcon;collapseIcon;selectOnFocus=_(!1,{transform:e=>ve(e)});transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";motionOptions=_(void 0);computedMotionOptions=v(()=>oe(oe({},this.ptm("motion")),this.motionOptions()));onClose=new L;onOpen=new L;id=Y(Ye("pn_id_"));_componentStyle=p(j);onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let n=this.findNextHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let n=this.findPrevHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let n=this.findFirstHeaderAction();this.changeFocusedTab(n),e.preventDefault()}changeFocusedTab(e){e&&Ee(e)}findNextHeaderAction(e,n=!1){let i=n?e:e.nextElementSibling,o=te(i,'[data-pc-section="accordionheader"]');return o?se(o,"data-p-disabled")?this.findNextHeaderAction(o.parentElement):te(o.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,n=!1){let i=n?e:e.previousElementSibling,o=te(i,'[data-pc-section="accordionheader"]');return o?se(o,"data-p-disabled")?this.findPrevHeaderAction(o.parentElement):te(o.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let n=this.findLastHeaderAction();this.changeFocusedTab(n),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let n=this.value();if(this.multiple()){let i=Array.isArray(n)?[...n]:[],o=i.indexOf(e);o!==-1?i.splice(o,1):i.push(e),this.value.set(i)}else n===e?this.value.set(void 0):this.value.set(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=f(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-accordion"]],hostVars:2,hostBindings:function(n,i){n&1&&q("keydown",function(c){return i.onKeydown(c)}),n&2&&g(i.cn(i.cx("root"),i.styleClass))},inputs:{value:[1,"value"],multiple:[1,"multiple"],styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions",motionOptions:[1,"motionOptions"]},outputs:{value:"valueChange",onClose:"onClose",onOpen:"onOpen"},features:[T([j,{provide:At,useExisting:t},{provide:I,useExisting:t}]),A([u]),y],ngContentSelectors:xe,decls:1,vars:0,template:function(n,i){n&1&&(U(),Q(0))},dependencies:[S,B,k],encapsulation:2,changeDetection:0})}return t})(),Tt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=X({imports:[ie,B,pe,Ie,Me,k,B,k]})}return t})();var xn=()=>({mergeProps:!0}),Cn=(t,r)=>r.icon,_n=(t,r)=>r.label,kn=(t,r)=>r.question;function wn(t,r){if(t&1&&(a(0,"a",16),b(1,"p-button",46),l()),t&2){let e=r.$implicit;s("href",e.href,Fe),d(),s("icon","pi "+e.icon)("rounded",!0)}}function En(t,r){if(t&1&&(a(0,"div",47),b(1,"i"),a(2,"span",48),m(3),l()()),t&2){let e=r.$implicit;d(),g(e.icon+" text-xs sm:text-sm"),d(2),le(e.label)}}function Dn(t,r){if(t&1&&b(0,"p-tag",39),t&2){let e=r.$implicit;s("value",e)}}function An(t,r){if(t&1&&(a(0,"div",44)(1,"p-card",49)(2,"div",50),b(3,"i"),l(),a(4,"div",51),m(5),l(),a(6,"div",52),m(7),l(),a(8,"div",53),m(9),l()()()),t&2){let e=r.$implicit;d(3),g("pi "+e.icon+" text-lg"),d(2),V(" ",e.value," "),d(2),V(" ",e.label," "),d(2),V(" ",e.desc," ")}}function Tn(t,r){if(t&1&&(a(0,"p-accordion-panel",45)(1,"p-accordion-header")(2,"div",54),b(3,"i"),a(4,"span"),m(5),l()()(),a(6,"p-accordion-content")(7,"p",55),m(8),l()()()),t&2){let e=r.$implicit,n=r.$index;s("value",n),d(3),g("pi "+e.icon+" text-primary"),d(2),le(e.question),d(3),V(" ",e.answer," ")}}var St=class t{roleOptions=[{label:"Frontend Dev",value:"frontend",icon:"pi pi-desktop"},{label:"Full-Stack Dev",value:"fullstack",icon:"pi pi-server"},{label:"Data & Database",value:"database",icon:"pi pi-database"}];roleControl=new Ue("frontend",{nonNullable:!0});selectButtonPt={root:{class:"bg-bg-surface-100 dark:bg-surface-800 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-2xl p-1 gap-1"},pcToggleButton:{root:{class:"border-none rounded-2xl bg-transparent text-color-secondary font-semibold text-sm px-3 py-2"}}};selectedRole=qe(this.roleControl.valueChanges,{initialValue:this.roleControl.value});stats=[{value:"3+",label:"Anni di Esperienza",desc:"Sviluppo software",icon:"pi-calendar-plus"},{value:"5+",label:"Progetti Chiave",desc:"Web App & Portali live",icon:"pi-briefcase"},{value:"10+",label:"Tecnologie Prime",desc:"Linguaggi & Framework",icon:"pi-code"},{value:"100%",label:"Clean Code",desc:"Layout responsive",icon:"pi-check-circle"}];socialLinks=[{href:"https://www.linkedin.com/in/davidechigliaro",icon:"pi-linkedin"},{href:"https://github.com/Chiglia",icon:"pi-github"},{href:"mailto:davide.chigliaro3@gmail.com",icon:"pi-envelope"},{href:"https://www.instagram.com/chigliadellabarca",icon:"pi-instagram"}];roleDetails={frontend:{title:"Sviluppatore Frontend \u2022 UI/UX Specialist",description:"Curo meticolosamente ogni pixel, transizione e aspetto legato alle prestazioni e all'accessibilit\xE0. Traduco design complessi in codice pulito e interfacce web reattive usando Angular (v21), React e Tailwind CSS v4.",quote:"L'esperienza utente non \xE8 un dettaglio, \xE8 l'applicazione stessa.",skills:["Angular v21","TypeScript","Tailwind CSS v4","State Management & Signals","UI/UX Design"],actionLabel:"Sfoglia Progetti Web",actionLink:"/progetti",icon:"pi-desktop"},fullstack:{title:"Sviluppatore Full-Stack \u2022 AI & Integrations",description:"Collego mondi complessi. Esperto nella progettazione di servizi asincroni, integrazione di Large Language Models (OpenAI, Anthropic, ElevenLabs), moduli di pagamento online (Stripe & PayPal) e architetture RESTful robuste.",quote:"Progettare end-to-end significa scrivere flussi di dati sicuri, scalabili ed incredibilmente veloci.",skills:["Node.js & FastAPI","RESTful APIs & WebSockets","AI APIs Integration","Stripe Payments","PostgreSQL / SQL"],actionLabel:"Guarda le mie Esperienze",actionLink:"/esperienza",icon:"pi-server"},database:{title:"Database Developer & Data Integrator",description:"Il frontend veloce nasce da una base dati solida. Sviluppo e mantengo strutture dati ottimizzate, integrazioni ERP di livello enterprise (SAP) e query complesse su motori relazionali Oracle, MySQL e SQL Server.",quote:"I dati sono la fondazione invisibile su cui poggia l'intero successo di un software.",skills:["Advanced SQL","Database Design","Oracle & Postgres DB","SAP Asset Management","Query Optimization & Tuning"],actionLabel:"Leggi il mio Percorso",actionLink:"/esperienza",icon:"pi-database"}};currentHighlight=v(()=>this.roleDetails[this.selectedRole()]);faqs=[{question:"Qual \xE8 la tua attuale disponibilit\xE0 lavorativa?",answer:"Lavoro felicemente in Dedagroup collaborando a importanti soluzioni nel settore bancario. Tuttavia, sono sempre ricettivo verso sfide stimolanti, opportunit\xE0 di crescita ad alto impatto tecnologico ed estensioni del mio network professionale.",icon:"pi-info-circle"},{question:"Come gestisci lo sviluppo di nuove applicazioni?",answer:"Seguo un approccio improntato sulla qualit\xE0: pianificazione dei flussi dati, wireframe rapidi se necessario, scelta accurata della tecnologia, sviluppo pulito e test manuali/automatizzati. Do estrema priorit\xE0 alle performance reali e all'accessibilit\xE0.",icon:"pi-cog"},{question:"Lavori bene in team e con metodologie agili?",answer:"Assolutamente s\xEC. Ho un background consolidato nell'utilizzo di framework Agile/Scrum. Collaboro quotidianamente con designer, project manager e altri sviluppatori utilizzando Git, sprint planning, review e retrospettive periodiche.",icon:"pi-users"}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-home"]],decls:70,vars:11,consts:[[1,"home-container","relative","flex","w-full","flex-col","items-center","justify-start","px-2","py-4","md:px-6","md:py-6"],[1,"relative","z-10","mt-3","mb-6","flex","w-full","max-w-4xl","flex-col","gap-5"],["styleClass","relative overflow-hidden rounded-2xl border border-surface-200 p-3 text-center shadow-xl transition-all duration-300 hover:shadow-lgxl dark:border-surface-700 md:p-5"],[1,"mb-4","flex","flex-wrap","items-center","justify-between","gap-2"],[1,"inline-flex","items-center","gap-2","rounded-2xl","border","border-surface-200","bg-bg-bg-surface-100","dark:bg-surface-800","dark:bg-surface-800","px-3","py-1.5","dark:border-surface-700","dark:bg-surface-800"],[1,"flex","w-2.5","h-2.5","bg-emerald-500","rounded-full","relative"],[1,"animate-ping","absolute","inline-flex","h-full","w-full","rounded-full","bg-emerald-400","opacity-75"],[1,"text-[11px]","font-bold","uppercase","tracking-wider","text-slate-700","dark:text-slate-300"],["severity","success","value","Frontend Dev @ Dedagroup","styleClass","text-[10px] font-bold uppercase tracking-wider px-2 py-1"],[1,"flex","justify-center","mb-3"],["label","DC","shape","circle","styleClass","flex h-24 w-24 items-center justify-center rounded-full border-2 border-white bg-primary text-3xl font-bold text-white shadow-lg"],[1,"mb-1","text-4xl","font-bold","tracking-tight","text-gradient","md:text-5xl"],[1,"mb-3","text-lg","font-semibold","tracking-wide","text-slate-700","dark:text-slate-300","md:text-xl"],[1,"mx-auto","mb-4","max-w-xl","text-sm","leading-7","text-slate-600","dark:text-slate-400","md:text-base"],["layout","horizontal","styleClass","my-4 mx-auto w-8rem"],[1,"mb-4","flex","justify-center","gap-3"],["target","_blank","rel","noopener noreferrer",1,"",3,"href"],[1,"flex","flex-col","sm:flex-row","gap-3","justify-center"],["routerLink","/progetti",1,""],["label","Sfoglia Progetti","icon","pi pi-briefcase","styleClass","w-full sm:w-auto px-4 py-3 font-bold rounded-xl",3,"raised"],["routerLink","/esperienza",1,""],["label","Il Mio Curriculum","icon","pi pi-star","severity","secondary","styleClass","w-full sm:w-auto px-4 py-3 font-bold rounded-xl border border-surface-200 dark:border-surface-700 bg-white/30 dark:bg-slate-800/30"],["styleClass","p-3 md:p-4 rounded-2xl shadow-xl border border-surface-200 dark:border-surface-700"],[1,"text-center","mb-4"],[1,"text-xs","font-bold","uppercase","tracking-widest","text-primary","mb-1","block"],[1,"text-2xl","md:text-3xl","font-bold","m-0","text-slate-900","dark:text-slate-100","tracking-tight"],[1,"text-slate-500","text-xs","md:text-sm","m-0","mt-1"],[1,"flex","justify-center","mb-4","w-full"],["optionLabel","label","optionValue","value",3,"options","formControl","ptOptions"],["pTemplate","item"],["styleClass","border border-surface-200 dark:border-surface-700 rounded-2xl shadow-sm bg-slate-50/50 dark:bg-slate-900/10"],[1,"flex","items-center","gap-2.5","mb-3"],["shape","circle","styleClass","bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-300 w-2.5rem h-2.5rem flex items-center justify-center",3,"icon"],[1,"text-xl","font-bold","m-0","text-slate-900","dark:text-slate-100","tracking-tight"],[1,"text-slate-600","dark:text-slate-400","text-sm","leading-7","m-0","mb-4"],[1,"border-l-4","border-primary","bg-slate-100","dark:bg-slate-800/40","p-3","rounded-r-lg","mb-4"],[1,"text-slate-700","dark:text-slate-300","font-medium","italic","text-sm","m-0"],[1,"text-xs","font-bold","uppercase","tracking-wider","text-slate-500","m-0","mb-2"],[1,"flex","flex-wrap","gap-2","mb-4"],["severity","secondary","styleClass","text-[9px] font-mono font-bold tracking-wide uppercase px-2 py-1",3,"value"],[1,"flex","justify-start"],[1,"",3,"routerLink"],["icon","pi pi-chevron-right","iconPos","right","styleClass","rounded-xl h-2.5rem px-3 text-sm font-semibold",3,"label"],[1,"grid","grid-cols-1","mt-2","w-full","px-0","mx-0"],[1,"sm:col-6","md:col-3","p-2"],[3,"value"],["severity","secondary","styleClass","w-12 h-12 hover-scale",3,"icon","rounded"],[1,"flex","items-center","gap-1.5","px-1.5","py-0.5","select-none"],[1,"font-bold","text-xs","sm:text-sm"],["styleClass","text-center h-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-lg border border-surface-200 dark:border-surface-700 p-3"],[1,"w-12","h-12","rounded-full","bg-blue-50","text-blue-600","dark:bg-blue-950/40","dark:text-blue-300","flex","items-center","justify-center","mb-3","mx-auto","shadow-sm"],[1,"text-3xl","md:text-4xl","font-extrabold","text-gradient","mb-1"],[1,"text-sm","font-bold","text-slate-800","dark:text-slate-200","mb-1"],[1,"text-xs","text-slate-500"],[1,"flex","items-center","gap-2.5","py-1","text-slate-800","dark:text-slate-200","font-semibold","text-sm","md:text-base"],[1,"m-0","text-slate-600","dark:text-slate-400","text-sm","md:text-base","leading-7"]],template:function(e,n){e&1&&(a(0,"div",0)(1,"div",1)(2,"p-card",2)(3,"div",3)(4,"div",4)(5,"span",5),b(6,"span",6),l(),a(7,"span",7),m(8," Disponibile a Nuovi Progetti "),l()(),b(9,"p-tag",8),l(),a(10,"div",9),b(11,"p-avatar",10),l(),a(12,"h1",11),m(13," Davide Chigliaro "),l(),a(14,"p",12),m(15," Frontend Engineer \u2022 Designer \u2022 Fullstack Specialist "),l(),a(16,"p",13),m(17," Progetto e realizzo applicazioni web e piattaforme transazionali moderne. Trasformo problemi complessi in interfacce utente eleganti, altamente performanti e scritte con codice pulito. "),l(),b(18,"p-divider",14),a(19,"div",15),$(20,wn,2,3,"a",16,Cn),l(),a(22,"div",17)(23,"a",18),b(24,"p-button",19),l(),a(25,"a",20),b(26,"p-button",21),l()()(),a(27,"p-card",22)(28,"div",23)(29,"span",24),m(30," Recruiter Hub "),l(),a(31,"h2",25),m(32," Personalizza la Pagina "),l(),a(33,"p",26),m(34," Scegli la specializzazione che pi\xF9 ti interessa valutare: "),l()(),a(35,"div",27)(36,"p-selectbutton",28),w(37,En,4,3,"ng-template",29),l()(),a(38,"p-card",30)(39,"div",31),b(40,"p-avatar",32),a(41,"h3",33),m(42),l()(),a(43,"p",34),m(44),l(),a(45,"div",35)(46,"p",36),m(47),l()(),a(48,"h4",37),m(49," Tech Stack Suggerito & Competenze Chiave: "),l(),a(50,"div",38),$(51,Dn,1,1,"p-tag",39,Oe),l(),a(53,"div",40)(54,"a",41),b(55,"p-button",42),l()()()(),a(56,"div",43),$(57,An,10,5,"div",44,_n),l(),a(59,"p-card",22)(60,"div",23)(61,"span",24),m(62," In sintesi "),l(),a(63,"h2",25),m(64," Q&A Rapido per Recruiter "),l(),a(65,"p",26),m(66," Le risposte immediate alle domande pi\xF9 frequenti che ricevo: "),l()(),a(67,"p-accordion"),$(68,Tn,9,5,"p-accordion-panel",45,kn),l()()()()),e&2&&(d(20),K(n.socialLinks),d(4),s("raised",!0),d(12),s("options",n.roleOptions)("formControl",n.roleControl)("ptOptions",Ve(10,xn)),d(4),s("icon","pi "+n.currentHighlight().icon),d(2),V(" ",n.currentHighlight().title," "),d(2),V(" ",n.currentHighlight().description," "),d(3),V(' "',n.currentHighlight().quote,'" '),d(4),K(n.currentHighlight().skills),d(3),s("routerLink",n.currentHighlight().actionLink),d(),s("label",n.currentHighlight().actionLabel),d(2),K(n.stats),d(11),K(n.faqs))},dependencies:[dt,fe,Ge,Ke,rt,ne,lt,Je,Ze,tt,et,ut,Ae,Se,Tt,ie,pe,Ie,Me],styles:[".hover-scale[_ngcontent-%COMP%]{transition:transform .2s ease-in-out}.hover-scale[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}"]})};export{St as Home};
