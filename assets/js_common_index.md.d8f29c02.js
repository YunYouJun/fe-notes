import{_ as n,c as s,o as a,a as t}from"./app.a54990c5.js";const f='{"title":"\u5E38\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8282\u6D41 throttle","slug":"\u8282\u6D41-throttle"},{"level":2,"title":"\u9632\u6296 debounce","slug":"\u9632\u6296-debounce"}],"relativePath":"js/common/index.md","lastUpdated":1636796107818}',p={},o=t(`<h1 id="\u5E38\u7528" tabindex="-1">\u5E38\u7528 <a class="header-anchor" href="#\u5E38\u7528" aria-hidden="true">#</a></h1><h2 id="\u8282\u6D41-throttle" tabindex="-1">\u8282\u6D41 throttle <a class="header-anchor" href="#\u8282\u6D41-throttle" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">/**
 * \u8282\u6D41\u51FD\u6570\uFF1A\u5355\u4F4D\u65F6\u95F4\u5185\uFF0C\u53EA\u6709\u4E00\u6B21\u89E6\u53D1\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u6267\u884C
 * @param fn
 * @param threshold ms \u5355\u4F4D\u65F6\u95F4
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span>fn<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span> threshold <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7B2C\u4E00\u6B21\u7ACB\u5373\u6267\u884C</span>
  <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> threshold<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>print<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">t</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">t</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8F93\u51FA: 1</span>
</code></pre></div><h2 id="\u9632\u6296-debounce" tabindex="-1">\u9632\u6296 debounce <a class="header-anchor" href="#\u9632\u6296-debounce" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">/**
 * \u9632\u6296\u51FD\u6570\uFF1A\u51FD\u6570\u88AB\u89E6\u53D1\u540E n \u79D2\u6267\u884C\u56DE\u8C03\uFF0Cn \u79D2\u5185\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6
 * @param fn \u6267\u884C\u7684\u51FD\u6570
 * @param delay ms \u5EF6\u8FDF\u6267\u884C\u65F6\u95F4
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span>fn<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
      timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>print<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">d</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">d</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A2</span>
</code></pre></div>`,5),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{f as __pageData,h as default};
