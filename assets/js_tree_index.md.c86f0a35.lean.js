import{_ as n,c as s,o as a,a as p}from"./app.a54990c5.js";const f='{"title":"\u6570\u7EC4\u4E0E\u6811","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u62CD\u5E73\uFF08\u6811->\u6570\u7EC4\uFF09","slug":"\u62CD\u5E73\uFF08\u6811-\u6570\u7EC4\uFF09"},{"level":2,"title":"\u8FD8\u539F\uFF08\u6570\u7EC4->\u6811\uFF09","slug":"\u8FD8\u539F\uFF08\u6570\u7EC4-\u6811\uFF09"}],"relativePath":"js/tree/index.md","lastUpdated":1636796107818}',t={},o=p(`__VP_STATIC_START__<h1 id="\u6570\u7EC4\u4E0E\u6811" tabindex="-1">\u6570\u7EC4\u4E0E\u6811 <a class="header-anchor" href="#\u6570\u7EC4\u4E0E\u6811" aria-hidden="true">#</a></h1><h2 id="\u62CD\u5E73\uFF08\u6811-\u6570\u7EC4\uFF09" tabindex="-1">\u62CD\u5E73\uFF08\u6811-&gt;\u6570\u7EC4\uFF09 <a class="header-anchor" href="#\u62CD\u5E73\uFF08\u6811-\u6570\u7EC4\uFF09" aria-hidden="true">#</a></h2><p>\u5176\u5B9E\u5C31\u662F\u5199\u4E00\u4E2A\u9012\u5F52\uFF08\u6211\u767E\u5EA6\u4E00\u9762\u9047\u5230\u7684\u9898\u76EE\uFF09</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Tree</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Tree<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> trees<span class="token operator">:</span> Tree<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u62CD\u5E73
 * @param tree
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flatten</span><span class="token punctuation">(</span>trees<span class="token operator">:</span> Tree<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  trees<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token operator">:</span> tree<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>tree<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> tree<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ans <span class="token operator">=</span> ans<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">flatten</span><span class="token punctuation">(</span>tree<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token function">flatten</span><span class="token punctuation">(</span>trees<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// true</span>
</code></pre></div><h2 id="\u8FD8\u539F\uFF08\u6570\u7EC4-\u6811\uFF09" tabindex="-1">\u8FD8\u539F\uFF08\u6570\u7EC4-&gt;\u6811\uFF09 <a class="header-anchor" href="#\u8FD8\u539F\uFF08\u6570\u7EC4-\u6811\uFF09" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * \u7236\u4EB2\u8282\u70B9
   */</span>
  pid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> source<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;body&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;span&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;subspan&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u6784\u5EFA\u6811
 * @param data
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toTree</span><span class="token punctuation">(</span>data<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6784\u5EFA\u8282\u70B9\u7D22\u5F15</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">[</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> parent <span class="token operator">=</span> map<span class="token punctuation">[</span>item<span class="token punctuation">.</span>pid<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        parent<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token function">toTree</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,6),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var h=n(t,[["render",e]]);export{f as __pageData,h as default};
