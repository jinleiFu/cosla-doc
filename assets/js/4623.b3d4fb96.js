"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4623],{4623:(e,i,t)=>{t.r(i),t.d(i,{default:()=>f});var o=t(6252);const s={class:"video-upload"},r={key:0},l=(0,o._)("div",{class:"ant-upload-text"},"上传视频",-1),n={key:0,width:"400",height:"400",controls:""},d=["src"],a=["src"],u=(0,o.Uk)(" 您的浏览器不支持video标签 ");var c=t(2922),p=t(2262);const v=(0,o.aZ)({components:{PlusOutlined:c.Z},props:{keys:{type:Array,default:()=>[]},errorKeys:{type:Array,default:()=>[]},show:Boolean,limit:{type:Number,default:1/0}},setup(e,{emit:i}){const t=(0,p.qj)({token:"",videoList:[],videoUrl:"",displayUpload:e.show,previewShow:!1,urlLoaded:!1});(0,o.bv)((()=>{}));const s=(0,p.Fl)((()=>[...e.keys,...e.errorKeys]));function r(e){return["http","https"].some((i=>0===e.indexOf(i)))}return(0,o.YP)(s,(i=>{!async function(i){if(!i.length||t.urlLoaded)return;const o=[],s=i.filter((e=>r(e))),l=i.filter((e=>!r(e)));if(s.forEach(((i,t)=>{const s=e.errorKeys.includes(i)?"error":"done";o.push({url:i,status:s,fileKey:i,uid:`${t}${i}`})})),l.length){const{data:i}=await qiniuFileUrlList({fileKeys:l});Object.keys(i).forEach(((t,s)=>{const r=e.errorKeys.includes(t)?"error":"done",l=i[t];o.push({fileKey:t,url:l,status:r,uid:`${s}${t}`})}))}t.videoList=o,t.urlLoaded=!0}(i)}),{immediate:!0}),{...(0,p.BK)(t),videoChange:o=>{const{file:s}=o;let r=[...o.fileList];if("removed"===s.status){const{uid:e}=s,i=t.fileList.findIndex((i=>i.uid===e));t.fileList.splice(i,1)}else e.limit!==1/0?t.fileList=r.slice(-e.limit):t.fileList=r;if(r.every((e=>"uploading"!==e.status))){const e=[];r.forEach((i=>{i.fileKey?e.push(i.fileKey):i.response&&e.push(i.response.key)})),i("revise",{keys:e,fileList:r})}},previewFile:async e=>new Promise((i=>{const t=new FileReader;t.readAsDataURL(e),t.onload=e=>{const t=document.createElement("video");t.setAttribute("src",e.target.result),t.setAttribute("controls","controls"),t.setAttribute("width",400),t.setAttribute("height",400),t.currentTime=1,t.addEventListener("loadeddata",(()=>{const e=document.createElement("canvas");e.width=400,e.height=400,e.getContext("2d").drawImage(t,0,0,400,400);const o=e.toDataURL("image/png");i(o)}))}})),previewHide:()=>{t.previewShow=!1},videoPreview:async e=>{e.url||e.preview||(e.preview=await function(e){return new Promise(((i,t)=>{const o=new FileReader;o.readAsDataURL(e),o.onload=()=>i(o.result),o.onerror=e=>t(e)}))}(e.originFileObj)),t.videoUrl=e.url||e.preview,t.previewShow=!0}}}}),f=(0,t(3744).Z)(v,[["render",function(e,i,t,c,p,v){const f=(0,o.up)("plus-outlined"),w=(0,o.up)("a-upload"),h=(0,o.up)("a-modal");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(w,{"file-list":e.videoList,"onUpdate:file-list":i[0]||(i[0]=i=>e.videoList=i),disabled:!e.displayUpload,action:"https://upload-cn-east-2.qiniup.com",data:{token:e.token},accept:"video/mp4","list-type":"picture-card","preview-file":e.previewFile,onPreview:e.videoPreview,onChange:e.videoChange},{default:(0,o.w5)((()=>[e.displayUpload&&e.videoList.length<e.limit?((0,o.wg)(),(0,o.iD)("div",r,[(0,o.WI)(e.$slots,"default",{},(()=>[(0,o.Wm)(f),l]))])):(0,o.kq)("",!0)])),_:3},8,["file-list","disabled","data","preview-file","onPreview","onChange"]),(0,o.Wm)(h,{centered:"",visible:e.previewShow,footer:null,onCancel:e.previewHide},{default:(0,o.w5)((()=>[e.previewShow?((0,o.wg)(),(0,o.iD)("video",n,[(0,o._)("source",{src:e.videoUrl,type:"video/mp4"},null,8,d),(0,o._)("source",{src:e.videoUrl,type:"video/ogg"},null,8,a),u])):(0,o.kq)("",!0)])),_:1},8,["visible","onCancel"])])}]])}}]);