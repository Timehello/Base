(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{328:function(n,t,e){"use strict";e.r(t);var l=e(157),o={components:{tModal:l.tModal},props:{type:{type:String,default:""}},data:function(){return{scope:{tModal:l.tModal},code:'\n        <template>\n          <div>\n            <button @click="visible=true" class="tbc-btn tbc-btn--blue">open</button>\n            <modal :visible="visible" @cancel="visible=false" :options="{size: size, cancelable: true}">\n              <span slot="title">定制标题</span>\n              定制内容\n            </modal>\n          </div>\n        </template>\n\n        <script>\n          module.exports = {\n            components: {\n              Modal\n            },\n            data () {\n              return {\n                visible: false,\n                size: \'normal\'\n              }\n            }\n          }\n        <\/script>\n      '}}},s=e(1),i=Object(s.a)(o,function(){var n=this.$createElement;return(this._self._c||n)("div")},[],!1,null,null,null);i.options.__file="modal.vue";t.default=i.exports}}]);