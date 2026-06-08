// render.js — Reads SITE from data.js and builds the entire page DOM

;(function(){
  const D = SITE

  // ── helpers ───────────────────────────────────────────────
  function h(tag, attrs, ...children){
    const el = document.createElement(tag)
    if(attrs) Object.entries(attrs).forEach(([k,v])=>{
      if(k==='style') el.style.cssText = v
      else if(k==='class') el.className = v
      else if(k.startsWith('on')) el.setAttribute(k, v)
      else el.setAttribute(k, v)
    })
    children.forEach(c=>{
      if(c===null||c===undefined) return
      if(typeof c === 'string') el.insertAdjacentHTML('beforeend', c)
      else el.appendChild(c)
    })
    return el
  }
  function divClass(cls, ...children){ return h('div', {class: cls}, ...children) }
  function secLabel(txt){ return h('div', {class:'sec-label'}, txt) }

  function skillRectList(items){
    return divClass('skill-rect-list', ...items.map(s=>
      divClass('skill-rect',
        divClass('skill-rect-cat', s.cat),
        divClass('skill-rect-vals', s.vals)
      )
    ))
  }

  function eduRectList(items){
    return divClass('edu-rect-list', ...items.map(e=>
      divClass('edu-rect',
        h('div',{},
          h('div',{class:'edu-rect-name'}, e.name),
          h('div',{class:'edu-rect-sub'},  e.sub)
        ),
        h('div',{class:'edu-rect-yr'}, e.yr)
      )
    ))
  }

  function contactRectList(items){
    return divClass('ct-rect-list', ...items.map(c=>
      divClass('ct-rect',
        h('span',{class:'ct-rect-label'}, c.label),
        h('a',{href:c.href, target: c.href.startsWith('mailto')||c.href.startsWith('tel') ? '_self':'_blank'}, c.text)
      )
    ))
  }

  function projectCard(p){
    const visual = divClass('project-visual',
      divClass('code-canvas' + (p.visualStyle ? '' : ''),
        ...(p.visualHeader ? [divClass('code-header',
          divClass('code-dot'), h('span',{}, p.visualHeader)
        )] : []),
        p.visual  // raw HTML string
      )
    )
    if(p.visualStyle) visual.querySelector('.code-canvas').style.cssText = p.visualStyle

    const meta = divClass('project-meta',
      h('span',{class:'project-index'}, p.index),
      h('h2',{class:'project-title'}, p.title),
      h('p',{class:'project-description'}, p.description),
      divClass('project-tags', ...p.tags.map(t=>h('span',{class:'project-tag'}, t))),
      divClass('project-links', ...p.links.map(l=>h('a',{href:l.href, target:'_blank'}, l.label)))
    )
    return divClass('project-card', visual, meta)
  }

  function hr(){ return h('hr',{class:'div'}) }

  function footerEl(txt){
    return h('footer',{},
      h('p',{}, txt),
      h('p',{}, `© ${D.year}`)
    )
  }

  function heroSection(pg, opts={}){
    const eyebrow = h('p',{class:'hero-eyebrow fadein'},
      h('span',{class:'live-dot'}), pg.eyebrow
    )

    // Build headline — last word/phrase in italic
    const italic = pg.headlineItalic
    const lines = pg.headline
    const h1 = h('h1',{class:'fadein'})
    lines.forEach((line, i)=>{
      if(i>0) h1.appendChild(h('br',{}))
      if(italic && line.includes(italic)){
        const before = line.slice(0, line.indexOf(italic))
        if(before) h1.insertAdjacentHTML('beforeend', before)
        h1.appendChild(h('em',{}, italic))
      } else {
        h1.insertAdjacentHTML('beforeend', line)
      }
    })

    const bio = h('p',{class:'hero-bio fadein'}, pg.bio)
    const actions = divClass('hero-actions fadein')

    if(pg.cta1){
      if(pg.cta1.action) actions.appendChild(h('button',{class:'btn-pill', onclick: pg.cta1.action}, pg.cta1.label))
      else actions.appendChild(h('a',{class:'btn-pill', href: pg.cta1.href}, pg.cta1.label))
    }
    if(pg.cta2) actions.appendChild(h('a',{class:'btn-pill ghost', href: pg.cta2.href}, pg.cta2.label))
    if(pg.cta3) actions.appendChild(h('a',{class:'btn-pill ghost', href: pg.cta3.href, target:'_blank'}, pg.cta3.label))

    const heroDiv = h('div',{class:'hero', ...(opts.style ? {style:opts.style} : {})},
      eyebrow, h1, bio, actions
    )
    return heroDiv
  }

  // ── NAV ───────────────────────────────────────────────────
  const nav = document.getElementById('nav')
  nav.innerHTML = ''
  const logo = h('span',{class:'nav-logo', onclick:'goHome()'}, `${D.nameShort} <em style="font-style:italic;color:var(--muted)">${D.nameLast}</em>`)
  const tabsDiv = divClass('nav-tabs')
  D.tabs.forEach((t,i)=>{
    const tab = h('div',{
      class: 'nav-tab' + (i===0?' active':''),
      onclick: `switchPage('${t.id}')`,
      id: `tab-${t.id}`
    }, t.label)
    tabsDiv.appendChild(tab)
  })
  const navRight = divClass('nav-right',
    h('button',{class:'icon-btn', id:'themeToggle', onclick:'toggleTheme()', title:'Toggle theme'}, '◐'),
    h('a',{href:`mailto:${D.email}`, class:'nav-cta'}, 'Email me')
  )
  nav.appendChild(logo); nav.appendChild(tabsDiv); nav.appendChild(navRight)

  // ── MUSIC BAR ─────────────────────────────────────────────
  const mb = document.querySelector('.music-bar')
  // kept as-is in HTML — no data dependency

  // ── CHAT FLOAT ────────────────────────────────────────────
  // kept as-is

  // ── PAGE: AI ─────────────────────────────────────────────
  function buildPageAI(){
    const pg = D.ai
    const page = document.getElementById('page-ai')
    page.innerHTML = ''

    page.appendChild(heroSection(pg))
    page.appendChild(hr())

    // About
    const aboutSec = divClass('section', secLabel('About'),
      ...pg.about.map((t,i)=>h('p',{class:'prose', ...(i>0?{style:'margin-top:1.1rem'}:{})}, t))
    )
    page.appendChild(aboutSec)
    page.appendChild(hr())

    // Skills
    page.appendChild(divClass('section', secLabel('Skills'), skillRectList(pg.skills)))
    page.appendChild(hr())

    // Projects
    page.appendChild(divClass('section',
      secLabel('Projects'),
      divClass('project-grid', ...pg.projects.map(projectCard))
    ))
    page.appendChild(hr())

    // Education
    page.appendChild(divClass('section', secLabel('Education'), eduRectList(pg.education)))
    page.appendChild(hr())

    // Contact
    page.appendChild(divClass('section', secLabel('Contact'), contactRectList(pg.contact)))

    page.appendChild(footerEl(pg.footer))
  }

  // ── PAGE: WEB ─────────────────────────────────────────────
  function buildPageWeb(){
    const pg = D.web
    const page = document.getElementById('page-web')
    page.innerHTML = ''

    const heroOpts = {style:'padding-bottom:4rem'}
    const heroDiv = heroSection(pg, heroOpts)
    // Web page CTA uses anchor for both
    const actions = heroDiv.querySelector('.hero-actions')
    actions.innerHTML = ''
    actions.appendChild(h('a',{class:'btn-pill', href: pg.cta1.href}, pg.cta1.label))
    actions.appendChild(h('a',{class:'btn-pill ghost', href: pg.cta2.href, target:'_blank'}, pg.cta2.label))
    page.appendChild(heroDiv)
    page.appendChild(hr())

    page.appendChild(divClass('section', secLabel('Stack'), skillRectList(pg.stack)))
    page.appendChild(hr())

    page.appendChild(divClass('section',
      secLabel('Client Work & Platforms'),
      divClass('project-grid', ...pg.projects.map(projectCard))
    ))
    page.appendChild(hr())

    page.appendChild(divClass('section', secLabel('Contact'), contactRectList(pg.contact)))
    page.appendChild(footerEl(pg.footer))
  }

  // ── PAGE: EXP ─────────────────────────────────────────────
  function buildPageExp(){
    const pg = D.exp
    const page = document.getElementById('page-exp')
    page.innerHTML = ''

    page.appendChild(h('div',{style:'padding-top:6rem'}))

    const timeline = divClass('timeline-container',
      ...pg.experience.map(e=>
        divClass('timeline-node',
          h('div',{class:'node-date'}, e.date),
          h('h3',{class:'node-role'}, e.role),
          h('div',{class:'node-company'}, e.company),
          divClass('node-summary', ...e.summary.map(t=>h('p',{},t)))
        )
      )
    )
    page.appendChild(divClass('section', secLabel('Work Experience'), timeline))
    page.appendChild(hr())
    page.appendChild(divClass('section', secLabel('Education & Training'), eduRectList(pg.education)))
    page.appendChild(hr())
    page.appendChild(divClass('section', secLabel('Contact'), contactRectList(pg.contact)))
    page.appendChild(footerEl(pg.footer))
  }

  // ── PAGE: ABOUT ───────────────────────────────────────────
  function buildPageAbout(){
    const pg = D.about
    const page = document.getElementById('page-about')
    page.innerHTML = ''

    // Hero
    const italic = pg.headlineItalic
    const h2 = h('h2',{})
    pg.headline.forEach((line,i)=>{
      if(i>0) h2.appendChild(h('br',{}))
      if(italic && line.includes(italic)){
        const before = line.slice(0, line.indexOf(italic))
        if(before) h2.insertAdjacentHTML('beforeend', before)
        h2.appendChild(h('em',{}, italic))
      } else {
        h2.insertAdjacentHTML('beforeend', line)
      }
    })
    const aboutHero = divClass('about-page-hero',
      h('p',{class:'hero-eyebrow', style:'margin-bottom:1.5rem'},
        h('span',{class:'live-dot'}), pg.eyebrow
      ),
      h2,
      h('p',{style:'margin-top:1rem'}, pg.intro)
    )
    page.appendChild(aboutHero)
    page.appendChild(hr())

    // Photo + bio
    const photoWrap = h('div',{style:'position:relative;aspect-ratio:3/4;border-radius:10px;overflow:hidden;background:var(--frame-bg);border:1px solid var(--border2)'},
      h('img',{src:D.photo, alt:`${D.name}`, style:'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block', onerror:"this.style.display='none'"}),
      h('div',{style:'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem'},
        h('div',{style:'font-family:var(--mono);font-size:28px;color:var(--muted2);opacity:.3'}, '◻'),
        h('div',{style:'font-family:var(--mono);font-size:9px;color:var(--muted2);letter-spacing:.14em;text-transform:uppercase;opacity:.4'}, 'ammar.jpg')
      ),
      h('div',{style:'position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.3) 0%,transparent 60%);pointer-events:none'})
    )
    const bioText = divClass('about-bio-text',
      secLabel('Origin'),
      ...pg.bioParas.map((t,i)=>h('p',{class:'prose', ...(i>0?{style:'margin-top:1.25rem'}:{})}, t))
    )
    page.appendChild(h('div',{class:'about-photo-section'}, photoWrap, bioText))

    // Chapters
    const chapters = divClass('about-chapters',
      ...pg.chapters.map(c=>
        divClass('chapter',
          h('div',{class:'chapter-label'}, c.label),
          h('p',{class:'chapter-text'}, c.text)
        )
      )
    )
    page.appendChild(chapters)
    page.appendChild(hr())
    page.appendChild(divClass('section', secLabel('Contact'), contactRectList(pg.contact)))
    page.appendChild(footerEl(pg.footer))
  }

  // ── PAGE: PERSONAL ────────────────────────────────────────
  function buildPagePersonal(){
    const pg = D.personal
    const page = document.getElementById('page-personal')
    page.innerHTML = ''

    // Hero
    const heroDiv = heroSection(pg, {style:'min-height:50vh;padding-bottom:2rem'})
    // fix h1 style for personal page
    const h1el = heroDiv.querySelector('h1')
    h1el.style.cssText = 'font-family:var(--serif);font-size:clamp(2.5rem,6vw,5rem);font-weight:400;line-height:1.05;letter-spacing:-.025em;margin-bottom:1.25rem'
    // remove default actions
    heroDiv.querySelector('.hero-actions').remove()
    page.appendChild(heroDiv)
    page.appendChild(hr())

    // Media showcase
    const showcase = h('div',{class:'media-showcase'})

    // Reels label
    showcase.appendChild(h('div',{class:'media-hero-label', style:'margin-top:3rem'}, 'Reels'))
    const reelGrid = divClass('reel-grid reveal')
    pg.reels.forEach(r=>{
      const card = divClass('reel-card',
        h('video',{src:r.src, autoplay:'', muted:'', loop:'', playsinline:'', style:'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;transition:transform .7s cubic-bezier(.25,1,.5,1)'}),
        divClass('reel-placeholder-static',
          h('div',{class:'rpl-num'}, r.index.split(' ')[1]),
          h('div',{class:'rpl-bar'})
        ),
        divClass('reel-glow'),
        divClass('reel-caption',
          h('div',{class:'reel-caption-index'}, r.index),
          h('div',{class:'reel-caption-title'}, r.caption)
        ),
        h('div',{style:'position:absolute;inset:0;z-index:0;background:linear-gradient(135deg,#0a0a12 0%,#050508 100%)'})
      )
      reelGrid.appendChild(card)
    })
    showcase.appendChild(reelGrid)

    // Visuals
    showcase.appendChild(h('div',{class:'media-hero-label', style:'margin-top:3.5rem'}, 'Visuals'))
    const visualsRow = divClass('visuals-row reveal')
    visualsRow.style.transitionDelay = '.12s'

    const v = pg.visuals
    // portrait left
    const v1 = divClass('visual-card portrait',
      h('img',{src:v[0].src, alt:v[0].alt, onerror:"this.style.display='none'"}),
      divClass('visual-placeholder-static', h('span',{}, v[0].label)),
      divClass('visual-glow')
    )
    // right column: 2 landscape
    const rightCol = h('div',{style:'display:flex;flex-direction:column;gap:1.25rem'})
    ;[v[1],v[2]].forEach(vis=>{
      rightCol.appendChild(
        divClass('visual-card landscape',
          h('img',{src:vis.src, alt:vis.alt, onerror:"this.style.display='none'", style:'flex:1'}),
          divClass('visual-placeholder-static', h('span',{}, vis.label)),
          divClass('visual-glow')
        )
      )
    })
    visualsRow.appendChild(v1); visualsRow.appendChild(rightCol)
    showcase.appendChild(visualsRow)

    showcase.appendChild(h('p',{style:'font-family:var(--mono);font-size:9px;color:var(--muted2);opacity:.4;margin-top:1.75rem;letter-spacing:.1em'},
      'Place reel1.mp4 · reel2.mp4 · reel3.mp4 · visual1.jpg · visual2.jpg · visual3.jpg in your project root.'
    ))
    page.appendChild(showcase)
    page.appendChild(hr())

    // NovaPad
    const np = pg.novapad
    const padGrid = h('div',{class:'novapad-grid', id:'novaGrid'})
    np.pads.forEach(p=>{
      padGrid.appendChild(h('div',{
        class:'nova-pad',
        'data-pitch': String(p.pitch),
        'data-trigger': p.trigger
      },
        h('span',{class:'pad-key'}, p.key),
        h('span',{class:'pad-note'}, p.note)
      ))
    })
    const novaWrapper = divClass('novapad-wrapper',
      h('div',{class:'novapad-title'}, np.title),
      h('p',{style:'font-size:12px;color:var(--muted);margin-bottom:2rem;text-align:center;font-family:var(--mono)'}, np.hint),
      padGrid
    )
    page.appendChild(divClass('section', secLabel('Interactive Synthesis'), novaWrapper))
    page.appendChild(hr())

    // Logs
    const logsDiv = divClass('section', secLabel('Theoretical Tracking Logs'),
      ...pg.logs.map(l=>
        divClass('log-entry',
          divClass('log-header', h('span',{},l.num), h('span',{},l.tag)),
          h('p',{class:'log-body'}, l.body)
        )
      )
    )
    page.appendChild(logsDiv)
    page.appendChild(footerEl(pg.footer))
  }

  // ── AGENT REPLY LOGIC ────────────────────────────────────
  window.getAgentReply = function(q){
    const A = D.agent
    const t = q.toLowerCase().trim()
    if(/^(hi|hello|hey|sup|yo|salam|assalam|good\s*(morning|evening|afternoon))/.test(t)) return A.greeting
    if(/who (is|are)|about (you|ammar)|introduce|tell me about/.test(t)||t==='ammar'||t==='who') return A.who
    if(/project(s)?|built|work(ed)?|portfolio|what (has|have|did) (he|ammar)/.test(t)&&!/spam|face|cifar|diabetes|heart|real.?estate|supermarket|hayviral|uraan|jawad|habitanova|gulacci|pixels|iss/.test(t)) return A.projects
    if(/spam/.test(t)) return A.spamscan
    if(/face|recognition/.test(t)) return A.face
    if(/cifar/.test(t)) return A.cifar
    if(/diabetes|ann|neural/.test(t)) return A.diabetes
    if(/heart/.test(t)) return A.heart
    if(/real.?estate|property/.test(t)) return A.realestate
    if(/supermarket|sales/.test(t)) return A.supermarket
    if(/hayviral|hay viral/.test(t)) return A.hayviral
    if(/uraan/.test(t)) return A.uraan
    if(/jawad/.test(t)) return A.jawad
    if(/habitanova|habit/.test(t)) return A.habitanova
    if(/gulacci|shoe/.test(t)) return A.gulacci
    if(/pixels/.test(t)) return A.pixels
    if(/iss|space|nasa|tracker/.test(t)) return A.iss
    if(/skill(s)?|stack|tech|tool(s)?|language(s)?|know|use|framework/.test(t)) return A.skills
    if(/python/.test(t)) return A.python
    if(/react/.test(t)) return A.react
    if(/educat|study|degree|university|college|course|smit|pitp|sindh/.test(t)) return A.education
    if(/experi|job|employ|position|role|career/.test(t)) return A.experience
    if(/hire|available|availab|open to|looking|recruit|remote/.test(t)) return A.hire
    if(/contact|email|phone|whatsapp|reach|message|call|number/.test(t)) return A.contact
    if(/github|repo|code|open.?source/.test(t)) return A.github
    if(/linkedin/.test(t)) return A.linkedin
    if(/twitter|x\.com|@ammar/.test(t)) return A.twitter
    if(/where|location|city|country|based|from|pakistan|hyderabad/.test(t)) return A.location
    if(/age|old|born|year/.test(t)) return A.age
    if(/hugging.?face|hf|spaces/.test(t)) return A.hf
    if(/thank|thanks|bye|goodbye|later|cya/.test(t)) return A.thanks
    if(/help|\?$|what can|commands|options/.test(t)||t.length<4) return A.help
    return A.fallback
  }

  // ── BUILD ALL PAGES ──────────────────────────────────────
  buildPageAI()
  buildPageWeb()
  buildPageExp()
  buildPageAbout()
  buildPagePersonal()

  // re-attach novapad events after DOM rebuild
  setTimeout(()=>{
    document.querySelectorAll('.nova-pad').forEach(p=>{
      const f = parseFloat(p.getAttribute('data-pitch'))
      p.addEventListener('mousedown', e=>{ e.preventDefault(); strikePad(f,p) })
      p.addEventListener('mouseup',   ()=> releasePad(f))
      p.addEventListener('mouseleave',()=> releasePad(f))
      p.addEventListener('touchstart', e=>{ e.preventDefault(); strikePad(f,p) }, {passive:false})
      p.addEventListener('touchend',  ()=> releasePad(f))
    })
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
  }, 0)

})()
