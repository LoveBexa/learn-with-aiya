/* AIYA session catalogue — single source of truth for classes.html + session.html */
window.AIYA_SESSIONS = {
  paths: [
    {
      id: 'discover',
      emoji: '🌱',
      name: 'Discover AI',
      tagline: "I'm completely new to AI.",
      format: 'Online',
      duration: '60 mins',
      price: '£5–10',
    },
    {
      id: 'build-sessions',
      emoji: '🛠',
      name: 'Build Sessions',
      tagline: 'I want to make something useful today.',
      format: 'In-person',
      duration: '2 hours',
      price: '£39–49',
    },
    {
      id: 'build-labs',
      emoji: '🚀',
      name: 'Build Labs',
      tagline: 'I have an idea. Help me launch it.',
      format: 'In-person',
      duration: '½–full day',
      price: '£99–299',
    },
  ],

  discover: [
    {
      slug: 'beyond-chatgpt',
      name: 'Beyond ChatGPT',
      outcome: 'See what AI can do beyond a chat box',
      format: 'Online',
      duration: '60 mins',
      price: '£5–10',
      level: 'Beginner',
      status: 'open',
      audience: [
        'Complete beginners who have only used ChatGPT as a search box.',
        'Curious professionals who want a low-stakes first step.',
        'Anyone wondering if AI workshops are actually for them.',
      ],
      outcomes: [
        'A personal list of 5 practical AI use cases for your work',
        'Hands-on experience with image, text and audio tools',
        'A simple prompt framework you can reuse tomorrow',
        'Confidence to move from browsing to building',
      ],
    },
    {
      slug: 'ai-for-everyday-life',
      name: 'AI for Everyday Life',
      outcome: 'Automate the boring bits of your week',
      format: 'Online',
      duration: '60 mins',
      price: '£5–10',
      level: 'Beginner',
      status: 'coming-soon',
      audience: [
        'Busy people who want AI to save time, not add complexity.',
        'Parents, freelancers and side-hustlers juggling too much.',
      ],
      outcomes: [
        'A meal-planning or scheduling workflow powered by AI',
        'Email drafts and replies tuned to your voice',
        'A personal knowledge base for family or household admin',
        'Templates for recurring weekly tasks',
      ],
    },
    {
      slug: 'getting-started-with-claude',
      name: 'Getting Started with Claude',
      outcome: 'Master Claude for writing, analysis and coding',
      format: 'Online',
      duration: '60 mins',
      price: '£5–10',
      level: 'Beginner',
      status: 'open',
      audience: [
        'People who want an alternative to ChatGPT with deeper reasoning.',
        'Writers, analysts and curious beginners ready to go beyond basics.',
      ],
      outcomes: [
        'A Claude Projects workspace set up for your work',
        'Document analysis and summarisation you can reuse',
        'A comparison cheat sheet: when to use Claude vs other tools',
        'Your first multi-step Claude workflow',
      ],
    },
  ],

  tracks: [
    {
      id: 'foundations',
      emoji: '🌱',
      name: 'Foundations Track',
      tagline: 'Build your first digital assets.',
      sessions: [
        {
          slug: 'build-a-logo',
          shortName: 'Logo',
          name: 'Build a Logo',
          fullName: 'Beyond the Prompt: Build a Logo',
          outcome: 'Walk out with a finished logo',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Beginner',
          status: 'open',
          audience: [
            'Founders and freelancers who need a logo yesterday.',
            'Complete beginners — no design experience required.',
            'Anyone who wants a real asset, not a Canva template.',
          ],
          outcomes: [
            'A finished logo in multiple formats (PNG, SVG)',
            'A simple brand colour palette to match',
            'Logo files ready for social profiles and email',
            'The prompt workflow to iterate and refine on your own',
          ],
        },
        {
          slug: 'build-a-brand',
          shortName: 'Brand',
          name: 'Build a Brand',
          fullName: 'Beyond the Prompt: Build a Brand',
          outcome: 'A brand identity kit',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Beginner',
          status: 'coming-soon',
          audience: [
            'People with a logo who need the rest of the identity.',
            'Side projects and micro-businesses finding their voice.',
          ],
          outcomes: [
            'A one-page brand guide (colours, fonts, tone)',
            'Social media profile templates',
            'Business card or letterhead design',
            'A brand voice cheat sheet for AI prompts',
          ],
        },
        {
          slug: 'build-a-website',
          shortName: 'Website',
          name: 'Build a Website',
          fullName: 'Beyond the Prompt: Build a Website',
          outcome: 'A live one-page site',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Beginner',
          status: 'coming-soon',
          audience: [
            'Non-technical founders who need a web presence fast.',
            'Consultants and creatives who want a portfolio link to share.',
          ],
          outcomes: [
            'A live one-page website with a shareable URL',
            'Mobile-responsive layout you built yourself',
            'Contact form or booking link wired up',
            'The confidence to update content without a developer',
          ],
        },
        {
          slug: 'build-a-landing-page',
          shortName: 'Landing Page',
          name: 'Build a Landing Page',
          fullName: 'Beyond the Prompt: Build a Landing Page',
          outcome: 'A converting landing page',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Intermediate',
          status: 'coming-soon',
          audience: [
            'People with a product or service ready to sell.',
            'Anyone who completed Build a Website and wants to convert visitors.',
          ],
          outcomes: [
            'A landing page with headline, proof and clear CTA',
            'Copy written and refined with AI assistance',
            'Analytics or conversion tracking set up',
            'A/B test ideas you can run next week',
          ],
        },
      ],
    },
    {
      id: 'business-systems',
      emoji: '⚙️',
      name: 'Business Systems Track',
      tagline: 'Save hours every week.',
      sessions: [
        {
          slug: 'build-an-email-workflow',
          shortName: 'Email Workflow',
          name: 'Build an Email Workflow',
          fullName: 'Beyond the Prompt: Build an Email Workflow',
          outcome: 'An automated email flow',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Beginner',
          status: 'coming-soon',
          audience: [
            'Founders drowning in inbox admin.',
            'Anyone sending the same emails every week.',
          ],
          outcomes: [
            'An automated welcome or follow-up sequence',
            'AI-drafted templates in your voice',
            'Triggers that send the right email at the right time',
            'A dashboard to monitor what is working',
          ],
        },
        {
          slug: 'build-your-first-automation',
          shortName: 'Automation',
          name: 'Build Your First Automation',
          fullName: 'Beyond the Prompt: Build Your First Automation',
          outcome: 'A working Make/Zapier automation',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Beginner',
          status: 'coming-soon',
          audience: [
            'Busy professionals who copy-paste between apps all day.',
            'Beginners curious about no-code automation.',
          ],
          outcomes: [
            'A live Make or Zapier automation connecting two apps',
            'Error handling so it does not break silently',
            'Documentation you can hand to a colleague',
            'Three more automation ideas mapped for next steps',
          ],
        },
        {
          slug: 'connect-your-crm',
          shortName: 'CRM',
          name: 'Connect Your CRM',
          fullName: 'Beyond the Prompt: Connect Your CRM',
          outcome: 'AI wired into your CRM',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Intermediate',
          status: 'coming-soon',
          audience: [
            'Sales-led businesses using HubSpot, Pipedrive or similar.',
            'Solo operators who lose leads in spreadsheets.',
          ],
          outcomes: [
            'AI-generated lead summaries on new contacts',
            'Automated follow-up task creation',
            'A pipeline view with smart prioritisation',
            'Integration docs for your specific CRM',
          ],
        },
        {
          slug: 'build-a-booking-system',
          shortName: 'Booking System',
          name: 'Build a Booking System',
          fullName: 'Beyond the Prompt: Build a Booking System',
          outcome: 'A self-serve booking system',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Beginner',
          status: 'coming-soon',
          audience: [
            'Coaches, consultants and service providers.',
            'Anyone tired of email ping-pong to schedule meetings.',
          ],
          outcomes: [
            'A live booking page clients can use today',
            'Calendar sync with your existing tools',
            'Automated confirmation and reminder emails',
            'Buffer times and availability rules configured',
          ],
        },
        {
          slug: 'build-a-customer-support-bot',
          shortName: 'Support Bot',
          name: 'Build a Customer Support Bot',
          fullName: 'Beyond the Prompt: Build a Customer Support Bot',
          outcome: 'A support bot for your business',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Intermediate',
          status: 'coming-soon',
          audience: [
            'Small businesses answering the same questions repeatedly.',
            'Founders who want 24/7 coverage without hiring.',
          ],
          outcomes: [
            'A trained support bot on your FAQ and docs',
            'Escalation rules for questions it cannot answer',
            'A test suite of 10 real customer scenarios',
            'Embed code or link ready for your website',
          ],
        },
      ],
    },
    {
      id: 'product-builder',
      emoji: '🤖',
      name: 'Product Builder Track',
      tagline: 'Turn ideas into software.',
      sessions: [
        {
          slug: 'build-a-dashboard',
          shortName: 'Dashboard',
          name: 'Build a Dashboard',
          fullName: 'Beyond the Prompt: Build a Dashboard',
          outcome: 'A live data dashboard',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Intermediate',
          status: 'coming-soon',
          audience: [
            'Founders tracking metrics across spreadsheets.',
            'Teams who need one view of what matters.',
          ],
          outcomes: [
            'A live dashboard pulling from your data source',
            'Key metrics visualised clearly',
            'Auto-refresh or scheduled updates configured',
            'Share link for stakeholders',
          ],
        },
        {
          slug: 'build-your-first-ai-app',
          shortName: 'AI App',
          name: 'Build Your First AI App',
          fullName: 'Beyond the Prompt: Build Your First AI App',
          outcome: 'A working AI app',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Intermediate',
          status: 'coming-soon',
          audience: [
            'Creators with an app idea but no coding background.',
            'People who completed Foundations and want to go further.',
          ],
          outcomes: [
            'A working AI-powered web app with a shareable link',
            'User input, AI processing and output wired together',
            'Basic error handling and loading states',
            'A roadmap for v2 features',
          ],
        },
        {
          slug: 'build-a-mobile-app',
          shortName: 'Mobile App',
          name: 'Build a Mobile App',
          fullName: 'Beyond the Prompt: Build a Mobile App',
          outcome: 'A mobile app prototype',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Intermediate',
          status: 'coming-soon',
          audience: [
            'Founders who want to test an app idea before hiring devs.',
            'Product thinkers ready to prototype on their phone.',
          ],
          outcomes: [
            'An interactive mobile app prototype',
            'Core screens and navigation mapped out',
            'Testable on your own device',
            'User flow diagram for feedback sessions',
          ],
        },
        {
          slug: 'build-an-ai-agent',
          shortName: 'AI Agent',
          name: 'Build an AI Agent',
          fullName: 'Beyond the Prompt: Build an AI Agent',
          outcome: 'An agent that acts for you',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Advanced',
          status: 'coming-soon',
          audience: [
            'Power users ready to move from chat to autonomous action.',
            'Founders who want AI to do tasks, not just answer questions.',
          ],
          outcomes: [
            'An AI agent that completes a multi-step task',
            'Tool connections (search, email, calendar or similar)',
            'Guardrails and approval steps built in',
            'Run log so you can see what it did and why',
          ],
        },
      ],
    },
    {
      id: 'growth',
      emoji: '📈',
      name: 'Growth Track',
      tagline: 'Get people to discover what you\'ve built.',
      sessions: [
        {
          slug: 'build-a-community',
          shortName: 'Community',
          name: 'Build a Community',
          fullName: 'Beyond the Prompt: Build a Community',
          outcome: 'A community space that runs itself',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Beginner',
          status: 'coming-soon',
          audience: [
            'Creators and founders building an audience.',
            'Anyone who wants members, not just followers.',
          ],
          outcomes: [
            'A live community space (Discord, Circle or similar)',
            'Welcome flow and onboarding automations',
            'AI-mod tools and FAQ bot configured',
            'A 30-day content and engagement plan',
          ],
        },
        {
          slug: 'build-a-newsletter',
          shortName: 'Newsletter',
          name: 'Build a Newsletter',
          fullName: 'Beyond the Prompt: Build a Newsletter',
          outcome: 'A newsletter engine',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Beginner',
          status: 'coming-soon',
          audience: [
            'Writers and experts who want owned audience.',
            'Founders who know they should newsletter but never start.',
          ],
          outcomes: [
            'Newsletter platform set up and branded',
            'First issue drafted with AI assistance',
            'Signup form embedded on your site',
            'Republishing workflow for social snippets',
          ],
        },
        {
          slug: 'build-your-content-machine',
          shortName: 'Content Machine',
          name: 'Build Your Content Machine',
          fullName: 'Beyond the Prompt: Build Your Content Machine',
          outcome: 'A repeatable content system',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Intermediate',
          status: 'coming-soon',
          audience: [
            'Solo marketers posting inconsistently.',
            'Founders who know their message but lack bandwidth.',
          ],
          outcomes: [
            'A content calendar with AI-generated drafts',
            'Repurposing workflow: one idea → five formats',
            'Brand voice guidelines for consistent output',
            'Scheduling automation hooked up',
          ],
        },
        {
          slug: 'build-your-social-media-workflow',
          shortName: 'Social Workflow',
          name: 'Build Your Social Media Workflow',
          fullName: 'Beyond the Prompt: Build Your Social Media Workflow',
          outcome: 'An automated social workflow',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Intermediate',
          status: 'coming-soon',
          audience: [
            'Business owners who post manually every day.',
            'Creators juggling LinkedIn, Instagram and more.',
          ],
          outcomes: [
            'Cross-platform posting automation',
            'AI caption and hashtag generation tuned to you',
            'Analytics snapshot dashboard',
            'Batch creation workflow for a week of content',
          ],
        },
      ],
    },
  ],

  labs: [
    {
      slug: 'build-your-ai-business',
      name: 'Build Your AI Business',
      outcome: 'Launch your AI-powered business in a day',
      format: 'In-person',
      duration: 'Full day',
      price: '£299',
      level: 'Intermediate',
      status: 'coming-soon',
      audience: [
        'Founders with a business idea ready to validate and launch.',
        'Consultants packaging AI services for clients.',
      ],
      outcomes: [
        'Business model canvas refined with AI market research',
        'MVP offer defined and priced',
        'Landing page, payment link and outreach plan live',
        '90-day roadmap with milestones',
        'Peer feedback from your cohort',
      ],
    },
    {
      slug: 'launch-your-first-ai-app',
      name: 'Launch Your First AI App',
      outcome: 'Ship a working app by end of day',
      format: 'In-person',
      duration: 'Full day',
      price: '£199',
      level: 'Intermediate',
      status: 'coming-soon',
      audience: [
        'Builders who completed Build Sessions and want to go end-to-end.',
        'Founders with a specific app idea and a laptop.',
      ],
      outcomes: [
        'Fully functional AI app deployed and shareable',
        'User authentication and basic data storage',
        'Feedback collection built in',
        'Launch checklist for the week after',
      ],
    },
    {
      slug: 'ai-sprint-day',
      name: 'AI Sprint Day',
      outcome: 'Solve your biggest AI problem in one day',
      format: 'In-person',
      duration: 'Half day',
      price: '£99',
      level: 'All levels',
      status: 'coming-soon',
      audience: [
        'Teams or individuals with one thorny problem to solve.',
        'Anyone who learns best with intensive focus and expert help.',
      ],
      outcomes: [
        'Problem scoped and solution architecture mapped',
        'Working prototype or automation by end of sprint',
        'Documentation and handoff notes',
        'Clear next steps for the following week',
      ],
    },
  ],
};

/* Helpers */
window.AIYA_getAllSessions = function () {
  const data = window.AIYA_SESSIONS;
  const all = [];

  data.discover.forEach((s) => {
    all.push({ ...s, category: 'discover', categoryName: 'Discover AI', trackId: null, trackName: null });
  });

  data.tracks.forEach((track) => {
    track.sessions.forEach((s, i) => {
      all.push({
        ...s,
        category: 'build-sessions',
        categoryName: 'Build Sessions',
        trackId: track.id,
        trackName: track.name,
        trackEmoji: track.emoji,
        step: i + 1,
        trackSessions: track.sessions,
      });
    });
  });

  data.labs.forEach((s) => {
    all.push({ ...s, category: 'build-labs', categoryName: 'Build Labs', trackId: null, trackName: null });
  });

  return all;
};

window.AIYA_getSession = function (slug) {
  return window.AIYA_getAllSessions().find((s) => s.slug === slug) || null;
};

window.AIYA_getTrack = function (trackId) {
  return window.AIYA_SESSIONS.tracks.find((t) => t.id === trackId) || null;
};

window.AIYA_getCategory = function (categoryId) {
  return window.AIYA_SESSIONS.paths.find((p) => p.id === categoryId) || null;
};

window.AIYA_getTracks = function (categoryId) {
  if (categoryId === 'build-sessions') {
    return AIYA_SESSIONS.tracks.map((t) => ({
      id: t.id,
      name: t.name,
      emoji: t.emoji,
      tagline: t.tagline,
    }));
  }
  if (categoryId === 'discover') {
    return [{ id: 'all', name: 'Discover AI', emoji: '🌱', tagline: 'Your first step into AI.' }];
  }
  if (categoryId === 'build-labs') {
    return [{ id: 'all', name: 'Build Labs', emoji: '🚀', tagline: 'Go deep and launch something big.' }];
  }
  return [];
};

window.AIYA_getWorkshops = function (categoryId, trackId) {
  if (categoryId === 'discover') return AIYA_SESSIONS.discover;
  if (categoryId === 'build-labs') return AIYA_SESSIONS.labs;
  if (categoryId === 'build-sessions') {
    const track = AIYA_getTrack(trackId);
    return track ? track.sessions : [];
  }
  return [];
};

window.AIYA_getCategoryIntro = function (categoryId) {
  const intros = {
    discover:
      'Short online sessions for complete beginners. No commitment, no jargon — just a clear first look at what AI can actually do for you.',
    'build-sessions':
      'Hands-on, in-person workshops where you build something useful in two hours. Pick a track, follow the journey, and walk out with a real asset every time.',
    'build-labs':
      'Full or half-day intensives for when you are ready to go deep. Launch a business, ship an app, or solve your biggest AI problem in one focused day.',
  };
  return intros[categoryId] || '';
};

window.AIYA_PATH_COPY = {
  discover: {
    description: 'Short online sessions for complete beginners. See what AI can do — no technical background needed.',
    strap: 'Zero code · start here',
  },
  'build-sessions': {
    description: 'In-person workshops where you build something useful in two hours. Leave with something real.',
    strap: 'Bring a laptop & an idea',
  },
  'build-labs': {
    description: 'Half or full-day intensives to launch something big. Go end-to-end in one sitting.',
    strap: 'For builders ready to ship',
  },
};

window.AIYA_trackUrl = function (categoryId, trackId) {
  let url = `track.html?c=${encodeURIComponent(categoryId)}`;
  if (trackId && trackId !== 'all') url += `&t=${encodeURIComponent(trackId)}`;
  return url;
};

window.AIYA_renderPathCards = function (container) {
  if (!container || !window.AIYA_SESSIONS) return;

  const escapeHtml = (str) =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  container.innerHTML = window.AIYA_SESSIONS.paths
    .map((path, i) => {
      const tracks = window.AIYA_getTracks(path.id);
      const firstTrack = tracks[0]?.id || 'all';
      const copy = window.AIYA_PATH_COPY[path.id] || { description: path.tagline, strap: path.tagline };
      const index = String(i + 1).padStart(2, '0');
      const metaLine = `${path.format} · ${path.duration}`;

      return `
        <article class="category-card rv">
          <span class="category-card-index mono">${index}</span>
          <div class="category-card-body">
            <h3>${escapeHtml(path.name)}</h3>
            <p>${escapeHtml(copy.description)}</p>
          </div>
          <div class="category-card-foot">
            <div class="category-card-meta mono">${escapeHtml(metaLine)}</div>
            <div class="category-card-strap mono dim">${escapeHtml(copy.strap)}</div>
            <a class="magnet category-card-cta" href="${window.AIYA_trackUrl(path.id, firstTrack)}"><span>More info</span><span>→</span></a>
          </div>
        </article>`;
    })
    .join('');
};

window.AIYA_renderHomeWcards = function (container) {
  if (!container || !window.AIYA_SESSIONS) return;

  const escapeHtml = (str) =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  container.innerHTML = window.AIYA_SESSIONS.paths
    .map((path, i) => {
      const tracks = window.AIYA_getTracks(path.id);
      const firstTrack = tracks[0]?.id || 'all';
      const copy = window.AIYA_PATH_COPY[path.id] || { description: path.tagline, strap: path.tagline };
      const index = String(i + 1).padStart(2, '0');
      const metaPrimary = `${path.format} · ${path.duration}`.toLowerCase();

      return `
        <a class="wcard" href="${window.AIYA_trackUrl(path.id, firstTrack)}">
          <div class="fill"></div>
          <div class="top">
            <div>
              <div class="num">${index}</div>
              <h3>${escapeHtml(path.name)}</h3>
              <p>${escapeHtml(copy.description)}</p>
            </div>
          </div>
          <div class="meta">
            <span class="mono">${escapeHtml(metaPrimary)}</span>
            <span class="mono dim">${escapeHtml(copy.strap)}</span>
          </div>
          <div class="arrow">→</div>
        </a>`;
    })
    .join('');
};

window.AIYA_getTrackIntro = function (categoryId, trackId) {
  if (categoryId === 'build-sessions') {
    const track = AIYA_getTrack(trackId);
    return track ? track.tagline : '';
  }
  return AIYA_getCategoryIntro(categoryId);
};
