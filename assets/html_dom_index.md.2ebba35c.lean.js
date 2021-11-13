import{_ as n,c as s,o as a,a as t}from"./app.a54990c5.js";const g='{"title":"DOM","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EDF\u8BA1 HTML \u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u6807\u7B7E","slug":"\u7EDF\u8BA1-html-\u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u6807\u7B7E"}],"relativePath":"html/dom/index.md","lastUpdated":1636796107818}',p={},o=t(`__VP_STATIC_START__<h1 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-hidden="true">#</a></h1><h2 id="\u7EDF\u8BA1-html-\u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u6807\u7B7E" tabindex="-1">\u7EDF\u8BA1 HTML \u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u6807\u7B7E <a class="header-anchor" href="#\u7EDF\u8BA1-html-\u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u6807\u7B7E" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// DOMParser \u65E0\u6CD5\u5728\u975E\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u987B\u7C98\u8D34\u81F3 Chrome \u63A7\u5236\u53F0\u4F7F\u7528</span>
<span class="token comment">// const parser = new DOMParser();</span>
<span class="token comment">// const htmlString = &quot;&lt;strong&gt;\u5C31\u8FD9\uFF1F&lt;/strong&gt;&quot;;</span>
<span class="token comment">// const dom = parser.parseFromString(htmlString, &quot;text/html&quot;);</span>

<span class="token keyword">function</span> <span class="token function">statistics</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tagsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> allNodes <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> maxTag <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> allNodes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> allNodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tagsMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> num <span class="token operator">=</span> tagsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      tagsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>tagName<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> maxTag<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        maxTag<span class="token punctuation">.</span>name <span class="token operator">=</span> node<span class="token punctuation">.</span>tagName<span class="token punctuation">;</span>
        maxTag<span class="token punctuation">.</span>value <span class="token operator">=</span> num<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      tagsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>tagName<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> maxTag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token function">statistics</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,3),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
