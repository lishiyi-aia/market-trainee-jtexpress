(() => {
  'use strict';
  const items = [
    { type: '用户评论', title: '创建专题后，怎样看更新？', tag: '操作疑问 · 先核实', stages: [
      ['收集与分类', '回看评论语境，归类为操作疑问；记录来源、问题和待确认项。'],
      ['事实核实', '向产品团队确认创建入口、内容查看方式与配图版本。'],
      ['修订稿件与FAQ', '把功能罗列改为“输入话题→创建专题→查看内容”，FAQ补充更新查看说明，并配上对应操作图。'],
      ['协作发布', '将统一文案和配图交给渠道与博主，确认修改版本、发布时间并记录上线链接。'],
      ['反馈复盘', '回看同类疑问是否重复，结合互动与首次创建表现决定是否继续调整首图和答疑。']
    ] },
    { type: '行业报道', title: 'AI摘要受关注，用户如何判断信息来源？', tag: '行业趋势 · 原文待核查', stages: [
      ['收集与分类', '收集行业报道，记录原文来源与发布时间，区分事实描述和作者观点。'],
      ['事实核实', '回查原文，和产品团队确认摘要与来源的对应关系；未核实内容不进入发布稿。'],
      ['修订稿件与FAQ', '在介绍AI摘要时说明其用途和查看相关内容的方式，避免“摘要替代原文”等超出功能的承诺。'],
      ['协作发布', '把功能说明、出处和已确认配图汇入资料包，统一合作博主与自有渠道表达。'],
      ['反馈复盘', '观察评论中关于信息来源的疑问，决定是否补充解释文章与FAQ。']
    ] },
    { type: '竞品内容', title: '竞品强调持续追踪，如何表达自己的功能？', tag: '表达参考 · 核对边界', stages: [
      ['收集与分类', '将竞品选题、主要信息与视觉表达分类，保留出处供团队比较。'],
      ['事实核实', '逐项核对自身产品已有功能和可用场景，不照搬竞品承诺。'],
      ['修订稿件与FAQ', '用具体场景说明专题追踪、关键词监测与AI摘要，补充首次使用步骤。'],
      ['协作发布', '核对稿件、海报与产品入口一致，协调素材与排期。'],
      ['反馈复盘', '比较功能表达与场景表达的阅读、互动及疑问类型，调整下一轮选题。']
    ] }
  ];
  const signals = document.getElementById('mediaSignals');
  const detail = document.getElementById('mediaDetail');
  const filters = [...document.querySelectorAll('[data-media-filter]')];
  function showItem(index) {
    const item = items[index];
    signals.querySelectorAll('button').forEach(button => {
      const active = Number(button.dataset.mediaItem) === index;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('border-primary', active);
      button.classList.toggle('bg-slate-50', active);
    });
    detail.innerHTML = `<p class="text-xs font-bold text-muted">${item.type} / ${item.tag}</p><h3 class="mt-2 text-base font-bold text-ink">${item.title}</h3><ol class="mt-4 grid gap-3">${item.stages.map(([title, copy], i) => `<li class="flex gap-3 border-t border-line pt-3"><span class="text-xs font-bold text-muted">0${i + 1}</span><div><h4 class="text-sm font-bold text-ink">${title}</h4><p class="mt-1 text-xs leading-5 text-bodyText">${copy}</p></div></li>`).join('')}</ol>`;
  }
  function render(filter) {
    const selected = items.map((item,index)=>({item,index})).filter(({item})=>filter==='all'||item.type===filter);
    signals.innerHTML = selected.map(({item,index})=>`<button type="button" data-media-item="${index}" aria-pressed="false" class="rounded-xl border border-line bg-white p-4 text-left"><span class="text-xs font-bold text-muted">${item.type}</span><strong class="mt-1 block text-sm font-bold text-ink">${item.title}</strong><span class="mt-2 block text-xs text-muted">${item.tag} → 查看处理链路</span></button>`).join('');
    signals.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>showItem(Number(button.dataset.mediaItem))));
    filters.forEach(button=>{
      const active=button.dataset.mediaFilter===filter;
      button.setAttribute('aria-pressed',String(active));
      button.classList.toggle('bg-primary',active); button.classList.toggle('text-white',active);
      button.classList.toggle('bg-white',!active); button.classList.toggle('text-bodyText',!active);
    });
    showItem(selected[0].index);
  }
  filters.forEach(button=>button.addEventListener('click',()=>render(button.dataset.mediaFilter)));
  render('all');
})();
