"use strict";(self["webpackChunkprovider_frontend"]=self["webpackChunkprovider_frontend"]||[]).push([[148],{3148:function(t,e,s){s.r(e),s.d(e,{default:function(){return R}});var i=s(3726),a=s(1473),r=s(4741),l=s(9744),o=s(9799),n=s(9367),h=s(5530),u=(0,h.Z)(o.Z,n.Z,l.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...l.Z.options.computed.classes.call(this)}},styles(){const t={...l.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=o.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}}),c=s(8131);(0,c.Ji)("v-card__actions"),(0,c.Ji)("v-card__subtitle");const d=(0,c.Ji)("v-card__text");(0,c.Ji)("v-card__title");var p=s(3240),m=s(3102),v=s(5439),g=s(2515),f=s(2926),b=s(293),C=s(538),y=C.ZP.extend({name:"rippleable",directives:{ripple:b.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),_=s(8789);function w(t){t.preventDefault()}var k=(0,h.Z)(f.Z,y,_.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=f.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:w},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:w},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),Z=s(2706),V=s(6930),x=s(7935),B=k.extend({name:"v-switch",directives:{Touch:Z.Z},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...f.Z.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(V.b0,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(x.Z,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===c.Do.left&&this.isActive||t.keyCode===c.Do.right&&!this.isActive)&&this.onChange()}}}),S=s(9007),$=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(i.Z,[e(m.Z,{staticClass:"main"},[e(v.Z,{staticClass:"rounded-lg",class:t.$vuetify.breakpoint.mobile?"":"ma-3",attrs:{color:"secondary",height:"300"}}),e(u,{staticClass:"mx-auto rounded-lg",staticStyle:{"margin-top":"-150px"},attrs:{"max-width":"400"}},[e(d,[e(v.Z,{staticClass:"rounded-lg mt-n12 d-flex align-center justify-center",attrs:{color:"dark",height:"122"}},[e("div",{staticClass:"text-center white--text"},[e("h2",{staticClass:"mt-5"},[t._v("Sign In")]),e("p",{staticClass:"my-5"},[t._v("Enter your phone number and password to Sign In")])])]),e(p.Z,{staticClass:"mx-2 my-5",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("label",{},[t._v("Email or Phone Number")]),e(S.Z,{staticClass:"mt-n2 mb-2 body-2",attrs:{placeholder:"john@mail.com","error-messages":t.errors.username},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}}),e("label",{},[t._v("Password")]),e(S.Z,{staticClass:"mt-n2 body-2",attrs:{placeholder:"**************",type:"password","error-messages":t.errors.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),e("div",{staticClass:"d-flex mb-5"},[e(B,{staticClass:"mt-n1",attrs:{color:"dark",dense:""}}),e("p",[t._v("Remember me")])],1),e(r.Z,{staticClass:"rounded-lg",attrs:{block:"",color:"dark",dark:"",large:"",type:"submit"}},[t._v("Sign in")]),e("p",{staticClass:"text-center my-5"},[t._v("Don't have an account? "),e("b",{staticClass:"black--text"},[t._v("Sign Up")])])],1)],1)],1),e(a.Z,{staticClass:"elevation-0 mx-5 body-2 secondary-1--text",attrs:{absolute:"",bottom:"",color:"light"}},[e("div",{},[t._v("© 2022")]),e(g.Z),e("div",{},[t._v("About us")]),e("div",{staticClass:"mx-5"},[t._v("Blog")]),e("div",{},[t._v("License")])],1)],1)],1)},A=[],E=s(8467),D=(0,E.t)(),P=C.ZP.extend({data:function(){return{form:{username:"",password:""},errors:[]}},methods:{submit:function(){var t=this;D.login(this.form).then((function(t){console.log(t)}),(function(e){t.errors=e}))}}}),I=P,L=s(1001),z=(0,L.Z)(I,$,A,!1,null,null,null),R=z.exports},3240:function(t,e,s){var i=s(5530),a=s(6141),r=s(950);e["Z"]=(0,i.Z)(a.Z,(0,r.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))})):s.valid=e(t),s},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const s=this.watchers.find((t=>t._uid===e._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},8789:function(t,e,s){var i=s(538),a=s(8131);e["Z"]=i.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:a.vZ}}})}}]);
//# sourceMappingURL=148.c8b3648b.js.map