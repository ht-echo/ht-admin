(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6856b214"],{"4c4b":function(t,e,n){"use strict";n.r(e);var a=n("3f2c"),i=n.n(a),r=n("93bf"),l=n.n(r),o={components:{LivePlayer:i.a},data:function(){return{playerLoading:!1,playerPoster:"",activeIndex:1,headArr:[{num:1,title:"单屏"},{num:4,title:"四分屏"},{num:9,title:"九分屏"},{num:16,title:"十六分屏"}]}},computed:{playerArr:function(){for(var t=[],e=0;e<this.headArr[this.activeIndex].num;e++)t.push({url:""});return t}},mounted:function(){},methods:{full:function(){l.a.request(this.$refs.videoBox)}}},s=(n("54dd"),n("2877")),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiScreen"},[n("el-container",[n("el-main",{staticClass:"multiScreen-main"},[n("div",{staticClass:"head"},[n("el-button-group",[t._l(t.headArr,(function(e,a){return n("el-button",{key:e.num,attrs:{type:t.activeIndex==a?"primary":"",title:e.title},on:{click:function(e){t.activeIndex=a}}},[t._v(t._s(e.title))])})),n("el-button",{attrs:{title:"全屏",icon:"el-icon-rank"},on:{click:t.full}})],2)],1),n("div",{staticClass:"content"},[n("div",{ref:"videoBox",staticClass:"content-info"},[n("el-row",{staticClass:"content-row"},t._l(t.playerArr,(function(e,a){return n("el-col",{key:a,staticClass:"content-col",attrs:{span:24/Math.sqrt(t.playerArr.length)}},[n("LivePlayer",{directives:[{name:"loading",rawName:"v-loading",value:t.playerLoading,expression:"playerLoading"}],attrs:{videoUrl:e.url,poster:t.playerPoster,live:"",muted:"","element-loading-text":"加载中...","element-loading-background":"#000"}})],1)})),1)],1)])])],1)],1)}),[],!1,null,"1e009faa",null);e.default=c.exports},"54dd":function(t,e,n){"use strict";n("ab39")},ab39:function(t,e,n){}}]);