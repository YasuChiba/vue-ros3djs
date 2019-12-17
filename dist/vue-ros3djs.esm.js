import{Arrow as e,Axes as t,Grid as i,InteractiveMarkerClient as s,LaserScan as n,MarkerClient as o,OccupancyGridClient as r,Path as c,SceneNode as h,Viewer as a}from"ros3d";import{Vector3 as u,MeshBasicMaterial as d,CircleGeometry as l,MeshPhongMaterial as f,Mesh as p,Quaternion as b}from"three";import{Pose as v,TFClient as m,Vector3 as w,Quaternion as j}from"roslib";import y from"@tweenjs/tween.js";import{clearTimeout as $,setTimeout as g}from"timers";function _(e,t,i,s,n,o,r,c,h,a){"boolean"!=typeof r&&(h=c,c=r,r=!1);var u,d="function"==typeof i?i.options:i;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,n&&(d.functional=!0)),s&&(d._scopeId=s),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,h(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=u):t&&(u=r?function(e){t.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,c(e))}),u)if(d.functional){var l=d.render;d.render=function(e,t){return u.call(t),l(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,u):[u]}return i}var x=_({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ros3d-arrow",inheritAttrs:!1,props:{visible:{type:Boolean,default:!0,require:!1},x:{type:Number,default:0,require:!1},y:{type:Number,default:0,require:!1},z:{type:Number,default:0,require:!1},directionX:{type:Number,default:1,require:!1},directionY:{type:Number,default:0,require:!1},directionZ:{type:Number,default:0,require:!1},length:{type:Number,default:1,require:!1},headLength:{type:Number,default:.2,require:!1},shaftDiameter:{type:Number,default:.05,require:!1},headDiameter:{type:Number,default:.1,require:!1},color:{type:String,default:"#00ff00",require:!1}},watch:{color:function(e){this.object.material.color.set(e)},x:function(){this.$nextTick(this.setPosition)},y:function(){this.$nextTick(this.setPosition)},z:function(){this.$nextTick(this.setPosition)},directionX:function(){this.$nextTick(this.setDirection)},directionY:function(){this.$nextTick(this.setDirection)},directionZ:function(){this.$nextTick(this.setDirection)},length:function(e){this.object.setLength(e)},visible:function(e){e?this.show():this.hide()}},methods:{show:function(){this.$parent.viewer.scene.add(this.object)},hide:function(){var e=this.$parent.viewer.scene.getObjectByName(this._uid);null!=e&&this.$parent.viewer.scene.remove(e)},setPosition:function(){this.object.position.set(this.x,this.y,this.z)},setDirection:function(){this.object.setDirection(new u(this.directionX||0,this.directionY||0,this.directionZ||0))}},mounted:function(){this.object=new e({ros:this.$parent.ros,tfClient:this.$parent.tfClient,rootObject:this.$parent.viewer.scene,origin:new THREE.Vector3(this.x||0,this.y||0,this.z||0),direction:new u(this.directionX||0,this.directionY||0,this.directionZ||0),length:this.length,headLength:this.headLength,shaftDiameter:this.shaftDiameter,headDiameter:this.headDiameter,material:new d({color:this.color})}),this.object.name=this._uid,this.visible&&this.show()},beforeDestroy:function(){this.hide()}},void 0,!1,void 0,!1,void 0,void 0,void 0),q=_({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ros3d-axes",props:{visible:{type:Boolean,default:!0,require:!1},x:{type:Number,default:0,require:!1},y:{type:Number,default:0,require:!1},z:{type:Number,default:0,require:!1},lineType:{type:String,default:"full",require:!1},lineDashLength:{type:Number,default:.1,require:!1},scale:{type:Number,default:1,require:!1},headLength:{type:Number,default:.1,require:!1},shaftRadius:{type:Number,default:.008,require:!1},headRadius:{type:Number,default:.023,require:!1}},watch:{visible:function(e){e?this.show():this.hide()},x:function(){this.$nextTick(this.setPosition)},y:function(){this.$nextTick(this.setPosition)},z:function(){this.$nextTick(this.setPosition)},lineType:function(){this.$nextTick(this.createObject)},lineDashLength:function(){this.$nextTick(this.createObject)},scale:function(){this.$nextTick(this.createObject)},headLength:function(){this.$nextTick(this.createObject)},shaftRadius:function(){this.$nextTick(this.createObject)},headRadius:function(){this.$nextTick(this.createObject)}},methods:{show:function(){this.$parent.viewer.scene.add(this.object)},hide:function(){var e=this.$parent.viewer.scene.getObjectByName(this._uid);null!=e&&this.$parent.viewer.scene.remove(e)},createObject:function(){null!=this.object&&this.hide(),this.object=new t({ros:this.$parent.ros,tfClient:this.$parent.tfClient,rootObject:this.$parent.viewer.scene,lineType:this.lineType,lineDashLength:this.lineDashLength,scale:this.scale,headLength:this.headLength,shaftRadius:this.shaftRadius,headRadius:this.headRadius}),this.object.name=this._uid,this.setPosition(),this.visible&&this.show()},setPosition:function(){this.object.position.set(this.x,this.y,this.z)}},mounted:function(){this.createObject()},beforeDestroy:function(){this.hide()}},void 0,!1,void 0,!1,void 0,void 0,void 0),O=_({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ros3d-grid",props:{visible:{type:Boolean,default:!0,require:!1},numCells:{type:Number,default:10,require:!1},color:{type:String,default:"#cccccc",require:!1},lineWidth:{type:Number,default:1,require:!1},cellSize:{type:Number,default:1,require:!1}},watch:{visible:function(e){e?this.show():this.hide()},numCells:function(){this.$nextTick(this.createObject)},color:function(){this.$nextTick(this.createObject)},lineWidth:function(){this.$nextTick(this.createObject)},cellSize:function(){this.$nextTick(this.createObject)}},methods:{show:function(){this.$parent.viewer.scene.add(this.object)},hide:function(){var e=this.$parent.viewer.scene.getObjectByName(this._uid);null!=e&&this.$parent.viewer.scene.remove(e)},createObject:function(){null!=this.object&&this.hide(),this.object=new i({num_cells:this.numCells,color:this.color,lineWidth:this.lineWidth,cellSize:this.cellSize}),this.object.name=this._uid,this.visible&&this.show()}},mounted:function(){this.createObject()},beforeDestroy:function(){this.hide()}},void 0,!1,void 0,!1,void 0,void 0,void 0),T=_({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ros3d-interactive-marker-client",props:{visible:{type:Boolean,default:!0,require:!1},topic:{type:String,default:"",require:!1}},watch:{topic:function(e){this.object.unsubscribe(),this.object.topicName=e,this.object.subscribe()},visible:function(e){e?this.show():this.hide()}},methods:{show:function(){this.$parent.viewer.scene.add(this.object)},hide:function(){var e=this.$parent.viewer.scene.getObjectByName(this._uid);null!=e&&this.$parent.viewer.scene.remove(e)}},mounted:function(){this.object=new s({ros:this.$parent.ros,tfClient:this.$parent.tfClient,rootObject:this.$parent.viewer.selectableObjects,camera:this.$parent.viewer.camera,topic:this.topic}),this.object.name=this._uid,this.visible||this.hide()},beforeDestroy:function(){this.object.unsubscribe(),this.hide()}},void 0,!1,void 0,!1,void 0,void 0,void 0),N=_({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ros3d-laser-scan",props:{visible:{type:Boolean,default:!0,require:!1},topic:{type:String,default:"/scan",require:!1},compression:{type:String,default:"cbor",require:!1},color:{type:String,default:"#ff0000",require:!1},particleSize:{type:Number,default:.25,require:!1}},watch:{topic:function(e){this.object.unsubscribe(),this.object.topicName=e,this.object.subscribe()},compression:function(e){this.object.unsubscribe(),this.object.compression=e,this.object.subscribe()},color:function(){this.$nextTick(this.createObject)},particleSize:function(){this.$nextTick(this.createObject)},visible:function(e){e?this.show():this.hide()}},methods:{show:function(){this.object.subscribe(),null!=this.object.points.sn&&this.$parent.viewer.scene.add(this.object.points.sn)},hide:function(){this.object.unsubscribe(),null!=this.object.points.sn&&this.$parent.viewer.scene.remove(this.object.points.sn)},createObject:function(){null!=this.object&&this.hide(),this.object=new n({ros:this.$parent.ros,tfClient:this.$parent.tfClient,rootObject:this.$parent.viewer.scene,topic:this.topic,material:{color:this.color,size:this.particleSize}}),this.object.name=this._uid,this.visible||this.hide()}},mounted:function(){this.createObject()},beforeDestroy:function(){this.object.unsubscribe(),this.hide()}},void 0,!1,void 0,!1,void 0,void 0,void 0),k=_({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ros3d-marker-client",props:{visible:{type:Boolean,default:!0,require:!1},topic:{type:String,default:"",require:!1}},watch:{topic:function(e){this.object.unsubscribe(),this.object.topicName=e,this.object.subscribe()},visible:function(e){e?this.show():this.hide()}},methods:{show:function(){this.$parent.viewer.scene.add(this.object)},hide:function(){var e=this.$parent.viewer.scene.getObjectByName(this._uid);null!=e&&this.$parent.viewer.scene.remove(e)}},mounted:function(){this.object=new o({ros:this.$parent.ros,tfClient:this.$parent.tfClient,rootObject:this.$parent.viewer.scene,topic:this.topic}),this.object.name=this._uid,this.visible||this.hide()},beforeDestroy:function(){this.object.unsubscribe(),this.hide()}},void 0,!1,void 0,!1,void 0,void 0,void 0),D=_({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ros3d-occupancy-grid-client",props:{visible:{type:Boolean,default:!0,require:!1},topic:{type:String,default:"",require:!1},continuous:{type:Boolean,default:!1,require:!1}},watch:{topic:function(e){this.object.unsubscribe(),this.object.topicName=e,this.object.subscribe()},continuous:function(e){this.object.continuous=e,e&&this.object.subscribe()},x:function(){this.$nextTick(this.setOffset)},y:function(){this.$nextTick(this.setOffset)},z:function(){this.$nextTick(this.setOffset)},visible:function(e){e?this.show():this.hide()}},methods:{show:function(){this.$parent.viewer.scene.add(this.object.sceneNode)},hide:function(){null!=this.object.sceneNode&&this.$parent.viewer.scene.remove(this.object.sceneNode)},setOffset:function(){this.object.unsubscribe(),this.object.offsetPose=new v({position:{x:this.x,y:this.y,z:this.z}}),this.object.subscribe()}},mounted:function(){var e=this;this.object=new r({ros:this.$parent.ros,tfClient:this.$parent.tfClient,rootObject:this.$parent.viewer.scene,topic:this.topic,continuous:this.continuous,offsetPose:new v({position:{x:this.x,y:this.y,z:this.z}})}),this.object.name=this._uid,this.object.processMessage=function(t){r.prototype.processMessage.call(e.object,t)},this.visible||this.hide()},beforeDestroy:function(){this.hide()}},void 0,!1,void 0,!1,void 0,void 0,void 0),R=_({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ros3d-path",props:{visible:{type:Boolean,default:!0,require:!1},topic:{type:String,default:"",require:!1},color:{type:String,default:"#009688",require:!1}},watch:{topic:function(e){this.object.unsubscribe(),this.object.topicName=e,this.object.subscribe()},color:function(e){this.object.color=e},visible:function(e){e?this.show():this.hide()}},methods:{show:function(){this.$parent.viewer.scene.add(this.object)},hide:function(){var e=this.$parent.viewer.scene.getObjectByName(this._uid);null!=e&&this.$parent.viewer.scene.remove(e)}},mounted:function(){this.object=new c({ros:this.$parent.ros,tfClient:this.$parent.tfClient,rootObject:this.$parent.viewer.scene,topic:this.topic,color:this.color}),this.object.name=this._uid,this.visible||this.hide()},beforeDestroy:function(){this.object.unsubscribe(),this.hide()}},void 0,!1,void 0,!1,void 0,void 0,void 0),C=_({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ros3d-scene-node",props:{visible:{type:Boolean,default:!0,require:!1},frameID:{type:String,default:"base_link",require:!1},model:{type:Object,require:!0}},watch:{model:function(){this.$nextTick(this.createObject)},frameID:function(){this.$nextTick(this.createObject)},visible:function(e){e?this.show():this.hide()}},methods:{show:function(){this.$parent.viewer.scene.add(this.object)},hide:function(){var e=this.$parent.viewer.scene.getObjectByName(this._uid);null!=e&&this.$parent.viewer.scene.remove(e)},createObject:function(){null!=this.object&&this.hide(),null!=this.model&&(this.object=new h({tfClient:this.$parent.tfClient,frameID:this.frameID,object:this.model}),this.object.name=this._uid,this.show())}},beforeDestroy:function(){this.object.unsubscribeTf(),this.hide()}},void 0,!1,void 0,!1,void 0,void 0,void 0),S=_({render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this.loaded?this._t("default"):this._e()],2)},staticRenderFns:[]},void 0,{name:"ros3d-viewer",props:{ros:{type:Object,require:!0},background:{type:String,default:"#7e7e7e",require:!1},fixedFrame:{type:String,default:"/map",require:!1},antialias:{type:Boolean,default:!0,require:!1},longPressTolerance:{type:Number,default:15,require:!1},longPressDuration:{type:Number,default:750,require:!1}},data:function(){return{viewer:null,tfClient:null,loaded:!1,hold:!1,position:null,direction:null,screenPosition:null}},watch:{hold:function(e,t){e&&!t?this.viewer.scene.add(this.arrow):t&&!e&&this.viewer.scene.remove(this.arrow)},position:function(e){null!=e&&(this.arrow.position.set(e.x,e.y,e.z+.05),this.circle.position.set(e.x,e.y,e.z+.05))},direction:function(e){null!=e&&this.arrow.setDirection(e)}},mounted:function(){var t=this;this.$el.id="viewer",this.viewer=new a({divID:this.$el.id,width:this.$el.clientWidth,height:this.$el.clientHeight,antialias:this.antialias,background:this.background,displayPanAndZoomFrame:!1,cameraPose:{x:8,y:7,z:50}}),this.viewer.draw=function(){y.update(),a.prototype.draw.call(t.viewer)},this.tfClient=new m({ros:this.ros,angularThres:.01,transThres:.01,rate:10,fixedFrame:this.fixedFrame});this.listeners={},["contextmenu","click","mouseout","mousedown","mouseup","mousemove","touchstart","touchend","touchcancel","touchleave","touchmove"].forEach((function(e){t.listeners[e]=t.processDomEvent.bind(t),t.$el.addEventListener(e,t.listeners[e],!0)}),this),window.scene=window.Scene=this.viewer.scene,this.arrow=new e({ros:this.ros,tfClient:this.tfClient,rootObject:this.viewer.scene,material:new d({color:16711680})});var i=new l(1,32),s=new f({color:0,specular:6710886,emissive:10044416,shininess:0,opacity:.5,transparent:!0});this.circle=new p(i,s),this.circle.visible=!1,this.circle.scale.set(0,0,0),this.viewer.scene.add(this.circle),this.loaded=!0},methods:{startTimer:function(){var e=this;this.timer&&$(this.timer),this.timer=g((function(){return e.hold=!0}),this.longPressDuration)},stopTimer:function(){this.timer&&($(this.timer),this.timer=void 0),this.hold=!1,this.position=null,this.direction=null,this.screenPosition=null,this.circle.visible=!1,this.circle.scale.set(0,0,0)},processDomEvent:function(e){var t=this;if(this.$emit(e.type),"mouseout"!==e.type&&"touchleave"!==e.type&&"touchcancel"!==e.type)if("mouseup"!==e.type&&"click"!==e.type&&"touchend"!==e.type){var i,s;if(-1!==e.type.indexOf("touch")){i=0,s=0;for(var n=0;n<e.touches.length;++n)i+=e.touches[n].clientX,s+=e.touches[n].clientY;i/=e.touches.length,s/=e.touches.length}else i=e.clientX,s=e.clientY;var o=new u,r=new u;o.set(i/window.innerWidth*2-1,-s/window.innerHeight*2+1,.5),o.unproject(this.viewer.camera),o.sub(this.viewer.camera.position).normalize();var c,h,a=-this.viewer.camera.position.z/o.z;if(r.copy(this.viewer.camera.position).add(o.multiplyScalar(a)),"mousedown"===e.type&&2===e.button)return this.hold=!0,this.position=r,this.screenPosition=[i,s],c=20,h=(new u).subVectors(this.position,this.viewer.camera.position).length()/c,void this.arrow.scale.set(h,h,1);"touchmove"!==e.type&&"mousemove"!==e.type?"touchstart"===e.type&&(this.position=r,this.screenPosition=[i,s],this.startTimer(),c=10,h=(new u).subVectors(this.position,this.viewer.camera.position).length()/c,this.arrow.scale.set(h,h,1),this.circle.visible=!0,this.circleScaleTween&&this.circleScaleTween.stop(),this.circle.scale.set(0,0,0),this.circleScaleTween=new y.Tween(this.circle.scale.clone()).to(new u(h,h,1),this.longPressDuration).easing(y.Easing.Back.InOut).onUpdate((function(e){t.circle.scale.copy(e)})).start()):this.hold?(this.hold=!0,this.direction=r.sub(this.position),e.stopPropagation()):(null==this.screenPosition||Math.sqrt((this.screenPosition[0]-i)*(this.screenPosition[0]-i)+(this.screenPosition[1]-s)*(this.screenPosition[1]-s))>this.longPressTolerance)&&this.stopTimer()}else{if(this.hold){var d=new b;this.arrow.getWorldQuaternion(d),d=d.multiply(new b(0,0,Math.sqrt(.5),Math.sqrt(.5))),this.$emit("touch",{pose:new v({position:new w({x:this.position.x,y:this.position.y}),orientation:new j({x:d.x,y:d.y,z:d.z,w:d.w})}),screenPosition:this.screenPosition})}this.stopTimer()}else this.stopTimer()}}},void 0,!1,void 0,!1,void 0,void 0,void 0),P=Object.freeze({__proto__:null,Ros3dArrow:x,Ros3dAxes:q,Ros3dGrid:O,Ros3dInteractiveMarkerClient:T,Ros3dLaserScan:N,Ros3dMarkerClient:k,Ros3dOccupancyGridClient:D,Ros3dPath:R,Ros3dSceneNode:C,Ros3dViewer:S});var z={install:function e(t){e.installed||(e.installed=!0,Object.keys(P).forEach((function(e){t.component(e,P[e])})))}},E=null;"undefined"!=typeof window?E=window.Vue:"undefined"!=typeof global&&(E=global.Vue),E&&E.use(z);export default z;export{x as Ros3dArrow,q as Ros3dAxes,O as Ros3dGrid,T as Ros3dInteractiveMarkerClient,N as Ros3dLaserScan,k as Ros3dMarkerClient,D as Ros3dOccupancyGridClient,R as Ros3dPath,C as Ros3dSceneNode,S as Ros3dViewer};
