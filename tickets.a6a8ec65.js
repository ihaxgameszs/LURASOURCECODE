(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tickets"],{"03cc":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Dashboard",{attrs:{name:"Your Tickets",current:"Tickets"}},[s("div",{attrs:{id:"tickets"}},[s("div",{staticClass:"raise"},[t.displayActiveTickets?t._e():s("div",{staticClass:"paper"},[s("h2",[t._v("Raise a Ticket")]),s("div",{staticClass:"raise-form"},[s("FormInput",{attrs:{name:"Full Name",type:"text"},model:{value:t.fullName,callback:function(e){t.fullName=e},expression:"fullName"}}),s("FormInput",{attrs:{name:"Email Address",type:"email"},model:{value:t.emailAddress,callback:function(e){t.emailAddress=e},expression:"emailAddress"}}),s("FormInput",{attrs:{name:"Ticket Subject",select:""},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}},[s("option",{attrs:{value:"system_issue"}},[t._v("Luraph System Issue")])]),s("FormInput",{staticClass:"notes",attrs:{name:"Notes",type:"text",multiline:""},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}}),s("div",{staticClass:"actions"},[s("FormCheckbox",{model:{value:t.sendEmail,callback:function(e){t.sendEmail=e},expression:"sendEmail"}},[t._v(" Send copy to my email address? ")]),s("FormCheckbox",{model:{value:t.acceptTerms,callback:function(e){t.acceptTerms=e},expression:"acceptTerms"}},[t._v(" I agree to Privacy & Terms ")]),s("Button",{attrs:{type:"dash-filled"}},[t._v(" Submit Ticket ")])],1)],1)]),s("div",{staticClass:"paper"},[s("div",{staticClass:"responses"},[s("div",{staticClass:"header"},[s("h2",[t._v(" Response To A Ticket ")]),s("Button",{attrs:{type:"purple-filled"},on:{click:function(e){t.displayActiveTickets=!t.displayActiveTickets}}},[t._v(" "+t._s(t.displayActiveTickets?"Raise a new ticket":"See active tickets")+" ")])],1),t.displayActiveTickets?s("div",{staticClass:"content"},t._l(t.unresolvedTickets,(function(e,i){return s("div",{key:i,class:["ticket",t.openTicketId==e.id?"active":""]},[s("div",{staticClass:"header",on:{click:function(s){return t.selectTicket(e)}}},[s("a",{attrs:{href:"javascript:void(0)"}},[t._v(" "+t._s(t.formatTime(e.timestamp))+" ")]),s("button",[t._v(" "+t._s(t.openTicketId==e.id?"-":"+")+" ")])]),s("div",{staticClass:"content"},[s("div",{staticClass:"info"},[s("div",{staticClass:"section"},[s("span",[t._v(" Name: ")]),s("span",[t._v(" "+t._s(e.name)+" ")])]),s("div",{staticClass:"section"},[s("span",[t._v(" Ticket Subject: ")]),s("span",[t._v(" "+t._s(e.subject)+" ")])])]),s("div",{staticClass:"chat"},t._l(e.chat,(function(e){return s("div",{key:e.id,class:["message",e.isSelf?"self":""]},[e.isSelf?t._e():s("div",{staticClass:"icon"},[s("svg-icon",{attrs:{icon:"images/logo_lock"}})],1),s("div",{staticClass:"box-container"},[s("div",{staticClass:"box"},[s("span",[t._v(t._s(e.content))]),e.attachments?s("div",{staticClass:"attachments"},[s("h4",[t._v("Attachments:")]),s("div",{staticClass:"content"},t._l(e.attachments,(function(e,i){return s("button",{key:i},[s("svg-icon",{attrs:{icon:"icons/attachment_icon"}}),s("span",[t._v(t._s(e.name))])],1)})),0)]):t._e()]),s("div",{staticClass:"timestamp"},[s("span",[t._v(t._s(e.author))]),t._v(" - "+t._s(t.formatTime(e.timestamp))+" ")])])])})),0),s("div",{staticClass:"form"},[s("div",{staticClass:"chat-input"},[s("input",{attrs:{type:"text",placeholder:"Type message..."}}),s("div",{staticClass:"actions"},[s("Button",{attrs:{type:"outlined"}},[t._v(" Upload ")]),s("Button",{attrs:{type:"purple-filled"}},[t._v(" Send ")])],1)]),s("div",{staticClass:"ticket-actions"},[s("Button",{attrs:{type:"dash-filled"}},[t._v(" Delete Ticket ")]),s("Button",{attrs:{type:"purple-filled"}},[t._v(" Close Ticket ")])],1)])])])})),0):t._e()])])]),s("div",{staticClass:"resolved"},[s("h2",[t._v("Resolved Tickets")]),s("div",{staticClass:"ticket-container"},t._l(t.groupedResolvedTickets,(function(e,i){return s("div",{key:i,staticClass:"ticket-group"},[t._l(e,(function(e,i){return s("div",{key:i,staticClass:"ticket"},[s("h3",[t._v(" "+t._s(t.formatTime(e.timestamp))+" ")]),s("Button",{staticClass:"view",attrs:{type:"dash-filled"},on:{click:function(s){return t.selectTicket(e,!0)}}},[t._v(" "+t._s(t.openTicketId==e.id?"Hide":"View")+" ")]),s("Button",{staticClass:"close"},[s("svg-icon",{attrs:{icon:"icons/close_icon"}})],1)],1)})),s("div",{staticClass:"grouper"},[t._v(" "+t._s(i)+" ")])],2)})),0),s("span",[t._v("No More Tickets to display")])])])])},n=[],a=(s("99af"),s("4de4"),s("13d5"),s("2a7d")),o=s("4129"),r=s("a0a3"),c=s("2e96");function d(t,e){return new Date(t.getTime()+Math.random()*(e.getTime()-t.getTime()))}function m(){return{id:Math.random(),name:"Jack Fox",timestamp:d(new Date(2012,0,1),new Date),resolved:Math.random()<.5,subject:"Luraph System Issue",chat:[{author:"Jack Fox",content:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text asd  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text asd",isSelf:!0,timestamp:d(new Date(2012,0,1),new Date)},{author:"Brandon McChicken",content:"Oh boy i love luraph!",isSelf:!1,timestamp:d(new Date(2012,0,1),new Date)},{author:"Jack Fox",content:"This took way too long",isSelf:!0,timestamp:d(new Date(2012,0,1),new Date),attachments:[{name:"asd"},{name:"asd"}]},{author:"Brandon McChicken",content:"Yeah ur only just doing the tickets now, what the heck?",isSelf:!1,timestamp:d(new Date(2012,0,1),new Date)},{author:"Brandon McChicken",content:"Yeah ur only just doing the tickets now, what the heck?",isSelf:!1,timestamp:d(new Date(2012,0,1),new Date)},{author:"Brandon McChicken",content:"Yeah ur only just doing the tickets now, what the heck?",isSelf:!1,timestamp:d(new Date(2012,0,1),new Date)}]}}var u={name:"Tickets",components:{Button:a["a"],Dashboard:o["a"],FormCheckbox:c["a"],FormInput:r["a"]},computed:{unresolvedTickets:function(){return this.tickets.filter((function(t){return!t.resolved}))},groupedResolvedTickets:function(){var t=this.tickets.reduce((function(t,e){if(e.resolved){var s=e.timestamp.getFullYear();t[s]=t[s]||[],t[s].push(e),t[s].sort((function(t,e){return t.time-e.time}))}return t}),{});return t}},methods:{formatTime:function(t){var e=t.toLocaleDateString(),s=t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return"".concat(e," - ").concat(s)},selectTicket:function(t,e){e?this.openResolvedTicketId===t.id?this.openResolvedTicketId="":this.openResolvedTicketId=t.id:this.openTicketId===t.id?this.openTicketId="":this.openTicketId=t.id}},data:function(){for(var t=[],e=0;e<10;e++)t.push(m());return{sendEmail:!1,acceptTerms:!1,fullName:"Matthew Cooper",emailAddress:"mattcooper2690@gmail.com",subject:"Luraph System Issue",notes:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",displayActiveTickets:!1,openTicketId:"",openResolvedTicketId:"",tickets:t}}},l=u,p=(s("e262"),s("2877")),h=Object(p["a"])(l,i,n,!1,null,"2c6e4606",null);e["default"]=h.exports},"13d5":function(t,e,s){"use strict";var i=s("23e7"),n=s("d58f").left,a=s("a640"),o=s("ae40"),r=a("reduce"),c=o("reduce",{1:0});i({target:"Array",proto:!0,forced:!r||!c},{reduce:function(t){return n(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"2e96":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"checkbox"}},[s("div",{staticClass:"text"},[s("label",{attrs:{for:t.id}},[t._t("default")],2),s("label",{staticClass:"lower",attrs:{for:t.id}},[t._t("description")],2)]),s("div",{class:["radio",t.value?"checked":"",t.disabled?"disabled":""],style:{width:t.size+"px",height:t.size+"px",borderRadius:t.border+"px"},on:{click:t.toggleInput}},[s("div",{style:{margin:t.margin+"px",width:"calc(100% - "+2*t.margin+"px)",height:"calc(100% - "+2*t.margin+"px)",borderRadius:t.border+"px"}})]),s("input",{ref:"input",attrs:{type:"checkbox",id:t.id,disabled:t.disabled},domProps:{value:t.value},on:{input:t.invokeModel}})])},n=[],a=(s("a9e3"),s("d3b7"),s("25f0"),{name:"FormCheckbox",props:{size:{type:Number,default:50},margin:{type:Number,default:10},border:{type:Number,default:10},value:Boolean,disabled:Boolean},methods:{invokeModel:function(t){this.$emit("input",t.target.checked)},toggleInput:function(t){this.$refs&&this.$refs.input&&this.$refs.input.click()}},data:function(){return{id:"_"+Math.random().toString(36).substr(2,9)}}}),o=a,r=(s("dd78"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,"34219311",null);e["a"]=c.exports},"423b":function(t,e,s){},bcf0:function(t,e,s){},d58f:function(t,e,s){var i=s("1c0b"),n=s("7b0b"),a=s("44ad"),o=s("50c4"),r=function(t){return function(e,s,r,c){i(s);var d=n(e),m=a(d),u=o(d.length),l=t?u-1:0,p=t?-1:1;if(r<2)while(1){if(l in m){c=m[l],l+=p;break}if(l+=p,t?l<0:u<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:u>l;l+=p)l in m&&(c=s(c,m[l],l,d));return c}};t.exports={left:r(!1),right:r(!0)}},dd78:function(t,e,s){"use strict";s("bcf0")},e262:function(t,e,s){"use strict";s("423b")}}]);