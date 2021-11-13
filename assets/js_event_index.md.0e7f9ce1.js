import{_ as n,c as s,o as a,a as t}from"./app.a54990c5.js";const f='{"title":"\u624B\u5199\u4E8B\u4EF6\u76D1\u542C\uFF08\u53D1\u5E03\u8BA2\u9605\uFF09","description":"","frontmatter":{},"relativePath":"js/event/index.md","lastUpdated":1636796107818}',p={},o=t(`<h1 id="\u624B\u5199\u4E8B\u4EF6\u76D1\u542C\uFF08\u53D1\u5E03\u8BA2\u9605\uFF09" tabindex="-1">\u624B\u5199\u4E8B\u4EF6\u76D1\u542C\uFF08\u53D1\u5E03\u8BA2\u9605\uFF09 <a class="header-anchor" href="#\u624B\u5199\u4E8B\u4EF6\u76D1\u542C\uFF08\u53D1\u5E03\u8BA2\u9605\uFF09" aria-hidden="true">#</a></h1><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> eventsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u7ED1\u5B9A
   * @param eventName
   * @param callback
   */</span>
  <span class="token function">on</span><span class="token punctuation">(</span>eventName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>eventsMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>eventsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>eventsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> <span class="token punctuation">[</span>callback<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u53D1\u5C04
   * @param eventName
   * @param args
   */</span>
  <span class="token function">emit</span><span class="token punctuation">(</span>eventName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>eventsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u79FB\u9664
   * @param eventName
   */</span>
  <span class="token function">off</span><span class="token punctuation">(</span>eventName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>eventsMap<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{f as __pageData,v as default};
