"use strict";(self["webpackChunkprovider_frontend"]=self["webpackChunkprovider_frontend"]||[]).push([[913],{2384:function(t,e,s){s.d(e,{Z:function(){return v}});var a=s(4741),r=s(5439),i=s(9007),n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(r.Z,{staticClass:"pa-2 text-right",attrs:{width:"300"}},[e(i.Z,{staticClass:"subtitle-2 noline mb-n5",attrs:{filled:"",dense:"",placeholder:"Input new price"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),e(a.Z,{staticClass:"subtitle-2 secondary-3--text text-capitalize",attrs:{small:"",text:""},on:{click:t.send}},[t._v(" Send ")])],1)},c=[],o=s(538),l=s(6767),d=(0,l.X)(),u=o.ZP.extend({props:{id:{type:String}},data:function(){return{price:0}},methods:{send:function(){var t=this;d.priceOfferService({id:this.id,price_offer:this.price}).then((function(e){t.price=0,t.$vToastify.success(e)}))}}}),p=u,h=s(1001),f=(0,h.Z)(p,n,c,!1,null,null,null),v=f.exports},3913:function(t,e,s){s.r(e),s.d(e,{default:function(){return P}});var a=s(5720),r=s(5439),i=s(9007),n=function(){var t=this,e=t._self._c;return e(r.Z,[e("div",{staticClass:"d-flex align-center justify-space-between"},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"col-lg-3"},[e(a.Z,{staticClass:"noline subtitle-2 font-weight-medium",attrs:{filled:"",dense:"","hide-details":""}})],1),e("div",{staticClass:"body-2 font-weight-medium grey--text"},[t._v("entries per page")])]),e("div",{staticClass:"col-lg-3"},[e(i.Z,{staticClass:"noline subtitle-2 font-weight-medium",attrs:{filled:"",dense:"","hide-details":"",placeholder:"Search..."}})],1)]),e("ServicesTable",{attrs:{data:t.services},on:{changeStatus:t.changeStatus}})],1)},c=[],o=s(4741),l=s(7970),d=s(1667),u=s(9597),p=s(3328),h=s(3206),f=function(){var t=this,e=t._self._c;return e(h.Z,{scopedSlots:t._u([{key:"default",fn:function(){return[e("TableHeader",{attrs:{headers:t.headers}}),t.data.data.length>0?e("tbody",t._l(t.data.data,(function(s){return e("tr",{key:s.id},[e("td",{staticClass:"subtitle-2 font-weight-normal secondary-3--text"},[t._v(t._s(`${"Maintenance"==s.type?`${s.type} (${s.sub_type})`:s.type}`))]),e("td",{staticClass:"subtitle-2 font-weight-normal secondary-3--text"},[t._v(t._s(`${s.customer.name}`))]),e("td",{staticClass:"subtitle-2 font-weight-normal secondary-3--text"},[t._v(t._s(`${s.date}`))]),e("td",{staticClass:"subtitle-2 font-weight-normal secondary-3--text"},[t._v(t._s(`${s.time}`))]),e("td",{staticClass:"subtitle-2 font-weight-normal secondary-3--text"},[t._v(t._s(`${s.status?s.status:""}`))]),e("td",[e(o.Z,{staticClass:"subtitle-2 secondary-3--text text-capitalize",attrs:{text:"",small:""},on:{click:function(e){return t.$router.push({name:"service-details",query:{id:s.id}})}}},[t._v(" View ")]),e(p.Z,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(o.Z,t._g(t._b({staticClass:"subtitle-2 secondary-3--text text-capitalize",attrs:{text:"",small:""}},"v-btn",a,!1),s),[t._v(" Change Status ")])]}}],null,!0)},[e(l.Z,{attrs:{dense:""}},t._l(t.types,(function(a,r){return e(d.Z,{key:r,attrs:{link:""}},[e(u.V9,{staticClass:"subtitle-2 secondary-3--text text-capitalize",on:{click:function(e){return t.$emit("changeStatus",{id:s.id,status:a})}}},[t._v(" "+t._s(a)+" ")])],1)})),1)],1),e(p.Z,{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(o.Z,t._g(t._b({staticClass:"subtitle-2 secondary-3--text text-capitalize",attrs:{text:"",small:""}},"v-btn",a,!1),s),[t._v(" Send Offer ")])]}}],null,!0)},[e("PriceOffer",{attrs:{id:s.id}})],1)],1)])})),0):e("tbody",[e("tr",[e("td",{staticClass:"text-center grey--text",attrs:{colspan:"6"}},[t._v("No data found")])])])]},proxy:!0}])})},v=[],y=s(7081),b=s(2384),g={props:["data"],components:{TableHeader:y.Z,PriceOffer:b.Z},data:()=>({headers:["TYPE","CUSTOMER NAME","DATE","TIME","STATUS","ACTION"],types:["Arrived","Paused","Completed"]}),mounted(){},methods:{}},_=g,m=s(1001),x=(0,m.Z)(_,f,v,!1,null,null,null),S=x.exports,C=s(8467),$=s(6767),w=s(6086);const Z=(0,$.X)();(0,C.t)();var k={components:{ServicesTable:S},computed:{...(0,w.rn)($.X,["services"]),...(0,w.rn)(C.t,["user"])},mounted(){Z.$state.type=this.user.category.category.category,Z.$state.sub_type=this.user.category.sub_category?this.user.category.sub_category:"",Z.getServices()},methods:{changeStatus(t){Z.changeStatusService({...t}).then((t=>{Z.getServices(),this.$vToastify.success(t)}))},sendOffer(t){Z.priceOfferService({...t}).then((t=>{Z.getServices(),this.$vToastify.success(t)}))}}},T=k,O=(0,m.Z)(T,n,c,!1,null,null,null),P=O.exports},3206:function(t,e,s){s.d(e,{Z:function(){return n}});var a=s(8131),r=s(2066),i=s(5530),n=(0,i.Z)(r.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,a.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},6767:function(t,e,s){s.d(e,{X:function(){return i}});var a=s(6086),r=s(9403);s(1083);const i=(0,a.Q_)("services",{state:()=>({services:[],type:"",sub_type:"",per_page:10}),actions:{async getServices(){await r.b.get(`/provider/services?\n      per_page=${this.per_page}\n      &type=${this.type}\n      &sub_type=${this.sub_type}\n      `).then((t=>{this.services=t.data.data}))},async showService(t){return await new Promise(((e,s)=>{r.b.get(`/provider/services/${t}`).then((t=>{e(t.data.data)})).catch((t=>{s(t.response.data.errors)}))}))},async changeStatusService({id:t,status:e}){return await new Promise(((s,a)=>{r.b.post("/provider/service-change-status",{id:t,status:e}).then((t=>{s(t.data.message)})).catch((t=>{a(t.response.data.errors)}))}))},async priceOfferService({id:t,price_offer:e}){return await new Promise(((s,a)=>{r.b.post("/provider/service-send-price-offer",{id:t,price_offer:e}).then((t=>{s(t.data.message)})).catch((t=>{a(t.response.data.errors)}))}))}}})}}]);
//# sourceMappingURL=913.c1a693a3.js.map