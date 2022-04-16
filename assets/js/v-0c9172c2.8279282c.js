"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9137],{5441:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-0c9172c2",path:"/pages/customComponents/vehicleMiniprogram/numberInput.html",title:"数字输入组件",lang:"zh-CN",frontmatter:{pageClass:"for-simulator-padding"},excerpt:"",headers:[{level:2,title:"说明",slug:"说明",children:[]},{level:2,title:"代码示例",slug:"代码示例",children:[]},{level:2,title:"API",slug:"api",children:[]}],filePathRelative:"pages/customComponents/vehicleMiniprogram/numberInput.md",git:{updatedTime:1650097414e3,contributors:[{name:"jinleiFu",email:"1928537900@qq.com",commits:2}]}}},4819:(n,a,s)=>{s.r(a),s.d(a,{default:()=>c});var t=s(6252);const p=(0,t._)("div",{class:"simulator"},[(0,t._)("iframe",{scrolling:"auto",frameborder:"0",src:"https://static-6574d4c3-d615-42c6-8bfa-3d4425dc6484.bspapp.com/#/pages/number-input/index",class:"iframe"},"\n  ")],-1),e=(0,t.uE)('<h1 id="数字输入组件" tabindex="-1"><a class="header-anchor" href="#数字输入组件" aria-hidden="true">#</a> 数字输入组件</h1><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>该组件结合了数字键盘，用于数字输入框场景，且带数字格式化功能。</p><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav-bar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>数字键盘输入组件<span class="token punctuation">&quot;</span></span> <span class="token attr-name">is-back</span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>number-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>保留一位小数的数字输入框<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:custom-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{padding: <span class="token punctuation">&#39;</span>0 20rpx<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:precision</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">import</span> NavBar <span class="token keyword">from</span> <span class="token string">&#39;@/components/NavBar&#39;</span>\n    <span class="token keyword">import</span> NumberInput <span class="token keyword">from</span> <span class="token string">&#39;@/components/NumberInput.vue&#39;</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\n        components<span class="token operator">:</span> <span class="token punctuation">{</span>\n            NavBar<span class="token punctuation">,</span>\n            NumberInput\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">{</span>\n                number<span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></details><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p><strong>Props</strong></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>v-model</td><td>绑定值</td><td>Number|String</td><td>&#39;&#39;</td><td>否</td></tr><tr><td>placeholder</td><td>输入框占位符</td><td>String</td><td>&#39;请输入内容&#39;</td><td>否</td></tr><tr><td>precision</td><td>保留的小数位</td><td>Number</td><td>0</td><td>否</td></tr><tr><td>min</td><td>最小值</td><td>Number</td><td>0</td><td>否</td></tr><tr><td>max</td><td>最大值</td><td>Number</td><td>99999</td><td>否</td></tr><tr><td>custom-style</td><td>自定义输入框的样式</td><td>Object</td><td>-</td><td>否</td></tr><tr><td>border</td><td>是否显示边框</td><td>Boolean</td><td>false</td><td>否</td></tr><tr><td>inputAlign</td><td>输入框文字的对齐方式</td><td>String</td><td>&#39;left&#39;</td><td>否</td></tr></tbody></table>',8),l={},c=(0,s(3744).Z)(l,[["render",function(n,a){return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e],64)}]])}}]);