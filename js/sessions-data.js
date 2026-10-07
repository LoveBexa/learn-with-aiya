/* AIYA session catalogue — single source of truth for classes.html + session.html */
window.AIYA_SESSIONS = {
  paths: [
    {
      id: 'discover',
      emoji: '🌱',
      name: 'Discover AI',
      tagline: "I'm completely new to AI.",
      // Homepage tile links out to the Eventbrite organiser page
      homeHref: 'https://www.eventbrite.co.uk/o/aiya-121581275861',
      homeExternal: true,
      format: 'Online',
      duration: '60 mins',
      price: '£5–10',
    },
    {
      id: 'build-sessions',
      emoji: '🛠',
      name: 'Build Sessions',
      pageTitle: 'Beyond the Prompt',
      tagline: 'I want to make something useful today.',
      // Homepage tile links to the event landing page
      homeHref: 'beyond-the-prompt.html',
      format: 'In-person',
      duration: '2 hours',
      price: '£39–49',
    },
    {
      id: 'build-labs',
      emoji: '🚀',
      name: 'Build Labs',
      tagline: 'I have an idea. Help me launch it.',
      // Not bookable yet — homepage tile renders as a non-clickable "Coming soon" card
      comingSoon: true,
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
      status: 'open',
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
      status: 'coming-soon',
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
          slug: 'design-a-logo',
          shortName: 'Logo',
          name: 'Design a Logo',
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
          outcome: 'A brand identity kit',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Beginner',
          status: 'open',
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
          outcome: 'A live one-page site',
          format: 'In-person',
          duration: '2 hrs',
          price: '£39–49',
          level: 'Beginner',
          status: 'open',
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
        // {
        //   slug: 'build-a-landing-page',
        //   shortName: 'Landing Page',
        //   name: 'Build a Landing Page',
        //   outcome: 'A converting landing page',
        //   format: 'In-person',
        //   duration: '2 hrs',
        //   price: '£39–49',
        //   level: 'Intermediate',
        //   status: 'coming-soon',
        //   audience: [
        //     'People with a product or service ready to sell.',
        //     'Anyone who completed Build a Website and wants to convert visitors.',
        //   ],
        //   outcomes: [
        //     'A landing page with headline, proof and clear CTA',
        //     'Copy written and refined with AI assistance',
        //     'Analytics or conversion tracking set up',
        //     'A/B test ideas you can run next week',
        //   ],
        // },
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
        // {
        //   slug: 'connect-your-crm',
        //   shortName: 'CRM',
        //   name: 'Connect Your CRM',
        //   outcome: 'AI wired into your CRM',
        //   format: 'In-person',
        //   duration: '2 hrs',
        //   price: '£39–49',
        //   level: 'Intermediate',
        //   status: 'coming-soon',
        //   audience: [
        //     'Sales-led businesses using HubSpot, Pipedrive or similar.',
        //     'Solo operators who lose leads in spreadsheets.',
        //   ],
        //   outcomes: [
        //     'AI-generated lead summaries on new contacts',
        //     'Automated follow-up task creation',
        //     'A pipeline view with smart prioritisation',
        //     'Integration docs for your specific CRM',
        //   ],
        // },

        // {
        //   slug: 'build-a-booking-system',
        //   shortName: 'Booking System',
        //   name: 'Build a Booking System',
        //   outcome: 'A self-serve booking system',
        //   format: 'In-person',
        //   duration: '2 hrs',
        //   price: '£39–49',
        //   level: 'Beginner',
        //   status: 'coming-soon',
        //   audience: [
        //     'Coaches, consultants and service providers.',
        //     'Anyone tired of email ping-pong to schedule meetings.',
        //   ],
        //   outcomes: [
        //     'A live booking page clients can use today',
        //     'Calendar sync with your existing tools',
        //     'Automated confirmation and reminder emails',
        //     'Buffer times and availability rules configured',
        //   ],
        // },
        {
          slug: 'build-a-customer-support-bot',
          shortName: 'Support Bot',
          name: 'Build a Customer Support Bot',
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
          slug: 'build-a-mobile-app',
          shortName: 'App',
          name: 'Build An App',
          outcome: 'An app prototype you can test',
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
      name: 'Launch Your First Web App',
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
      slug: 'ai-support-club',
      name: 'AI Support Club',
      outcome: 'Work through your AI problems together — with help when you need it',
      format: 'In-person · Community',
      duration: 'Sundays · 2–4pm',
      price: '£25',
      level: 'All levels',
      status: 'coming-soon',
      audience: [
        'Anyone building with ChatGPT, Claude or no-code AI tools who gets stuck along the way.',
        'Freelancers, founders and creators who want a regular space to work alongside others.',
      ],
      outcomes: [
        'Dedicated time to make progress on your own project',
        'Peer support from others working on real AI problems',
        'On-hand help from AIYA when you hit a wall',
        'A friendly, low-pressure way to build AI skills together',
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

window.AIYA_getCategoryPageTitle = function (categoryId) {
  const category = window.AIYA_getCategory(categoryId);
  return category?.pageTitle || category?.name || '';
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
    if (!trackId || trackId === 'all') {
      return AIYA_SESSIONS.tracks.flatMap((track) => track.sessions);
    }
    const track = AIYA_getTrack(trackId);
    return track ? track.sessions : [];
  }
  return [];
};

window.AIYA_getCategoryIntro = function (categoryId) {
  return '';
};

window.AIYA_getCategoryIntroHtml = function (categoryId) {
  if (categoryId === 'discover') {
    return `
      <p>AIYA is an AI school that teaches practical artificial intelligence skills through hands-on workshops and courses. Our <strong>Discover AI</strong> programme is designed for complete beginners and anyone who&rsquo;s already tried ChatGPT but wants to learn what more it can do.</p>
      <p>Learn how to use ChatGPT, Claude and other AI tools with confidence through practical sessions that go far beyond asking questions. You&rsquo;ll discover how AI can help you save time, create content, build simple apps, connect with other tools, automate everyday tasks and solve real-world problems.</p>
      <p>Our beginner AI workshops are taught step by step in a friendly classroom environment, with short online sessions that fit around busy lives. No technical background is required. All you need is curiosity, a willingness to learn and a laptop. Whether you&rsquo;re looking for a <strong>ChatGPT course for beginners</strong>, an introduction to Gen AI tools, or your first AI workshop, Discover AI is the perfect place to start.</p>`;
  }
  if (categoryId === 'build-sessions') {
    return `
      <p><strong>Beyond the Prompt</strong> is AIYA&rsquo;s programme of hands-on build sessions for people who have already tried using ChatGPT or Claude and are ready to build something real. In just two hours, each build session gives you a practical project to work on. Whether that&rsquo;s a website, automation, AI agent, dashboard, app, brand or content system, you&rsquo;ll leave with a finished asset.</p>
      <p>Designed for busy professionals, freelancers, founders and creators, every build session is practical, instructor-led and focused on learning by doing rather than just listening to lectures. Bring your laptop, follow along step by step, ask questions as you go, and walk away with new AI skills, greater confidence, and something you&rsquo;ve built yourself.</p>
      <p>Whether you&rsquo;re looking for an AI workshop in London, a hands-on ChatGPT course, a Claude workshop, or practical training in AI automation and no-code tools, AIYA build sessions help you turn ideas into working projects&hellip;one workshop at a time.</p>`;
  }
  if (categoryId === 'build-labs') {
    return `
      <p><strong>Build Labs</strong> are immersive AI and no-code workshops for people who are ready to dedicate half or a full day to building something bigger. Whether you want to launch an AI-powered business, build your first web app, create a SaaS product, or turn an idea into something real, you&rsquo;ll learn by doing with expert guidance every step of the way.</p>
      <p>Designed for founders, freelancers, professionals and creators, our hands-on AI workshops combine practical teaching with dedicated build time so you can make meaningful progress in a single day. You&rsquo;ll leave with a working project, practical AI and no-code skills, and the confidence to keep building on your own.</p>
      <p>Whether you&rsquo;re looking for an AI workshop in London or practical training to build no-code apps, websites and AI-powered products, AIYA Build Labs help you turn ambitious ideas into reality.</p>`;
  }
  const text = window.AIYA_getCategoryIntro(categoryId);
  return text ? `<p>${text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>` : '';
};

window.AIYA_getPathMetaLine = function (pathId) {
  if (pathId === 'discover') return 'Beginner-Friendly · Online';
  const path = window.AIYA_SESSIONS.paths.find((p) => p.id === pathId);
  if (!path) return '';
  return path.format;
};

window.AIYA_PATH_COPY = {
  discover: {
    example: 'Beyond ChatGPT',
    description: 'Short online sessions for complete beginners. See what ChatGPT can do — no technical background needed.',
    strap: 'Zero code · start here',
  },
  'build-sessions': {
    example: 'Build Sessions',
    description: 'In-person workshops where you build something useful using Gen AI in two hours. Leave with something real.',
    strap: 'Bring a laptop & an idea',
  },
  'build-labs': {
    example: 'Launch Your First Product',
    description: 'Half or full-day intensives to launch something big. Go end-to-end in one sitting.',
    strap: 'For builders ready to ship',
  },
};

/* Workshop photos — images/workshop-photos (by slug; unmapped workshops keep text placeholder) */
window.AIYA_WORKSHOP_PHOTOS = {
  'beyond-chatgpt': 'images/workshop-photos/ai-workshop-discussion.png',
  'getting-started-with-claude': 'images/workshop-photos/ai-presentation.png',
  'ai-for-everyday-life': 'images/workshop-photos/ai-workshop-presentation-chatting.png',
  'design-a-logo': 'images/workshop-photos/ai-logo-workshop.png',
  'build-a-brand': 'images/workshop-photos/ai-workshop-presentation-chatting.png',
  'build-a-website': 'images/workshop-photos/ai-website-workshop.png',
  'build-a-landing-page': 'images/workshop-photos/ai-website-workshop.png',
  'build-an-email-workflow': 'images/workshop-photos/ai-email-design-workshop.png',
  'build-your-first-automation': 'images/workshop-photos/ai-workshop-make-automation.png',
  'connect-your-crm': 'images/workshop-photos/ai-workshop-make-automation.png',
  'build-a-booking-system': 'images/workshop-photos/ai-workshop-discussion.png',
  'build-a-customer-support-bot': 'images/workshop-photos/ai-workshop-chatting.png',
  'build-a-dashboard': 'images/workshop-photos/ai-group-meeting.png',
  'build-a-mobile-app': 'images/workshop-photos/ai-app-workshop.png',
  'build-an-ai-agent': 'images/workshop-photos/ai-workshop-make-automation.png',
  'build-a-community': 'images/workshop-photos/ai-group-meeting.png',
  'build-a-newsletter': 'images/workshop-photos/ai-email-workshop.png',
  'build-your-content-machine': 'images/workshop-photos/ai-presentation.png',
  'build-your-social-media-workflow': 'images/workshop-photos/ai-workshop-chatting.png',
  'build-your-ai-business': 'images/workshop-photos/ai-group-meeting.png',
  'launch-your-first-ai-app': 'images/workshop-photos/ai-close-up-laptop-working.png',
  'ai-support-club': 'images/workshop-photos/ai-workshop-presentation-chatting.png',
};

window.AIYA_getWorkshopPhoto = function (slug) {
  return window.AIYA_WORKSHOP_PHOTOS[slug] || null;
};

window.AIYA_getWorkshopPhotoAlt = function (slug) {
  const session = window.AIYA_getSession(slug);
  if (!session) return 'AIYA hands-on AI workshop in London';
  const title = session.fullName || session.name;
  const outcome = session.outcome;
  if (outcome) {
    return `${title} — ${outcome}, AIYA AI workshop London`;
  }
  return `${title} — hands-on AI workshop at AIYA London`;
};

window.AIYA_getDefaultTrackId = function (categoryId) {
  if (categoryId === 'build-sessions') return 'all';
  const tracks = window.AIYA_getTracks(categoryId);
  return tracks[0]?.id || 'all';
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
      const firstTrack = window.AIYA_getDefaultTrackId(path.id);
      const copy = window.AIYA_PATH_COPY[path.id] || { description: path.tagline, strap: path.tagline };
      const index = String(i + 1).padStart(2, '0');
      const metaLine = window.AIYA_getPathMetaLine(path.id);

      return `
        <article class="category-card rv">
          <span class="category-card-index mono">${index}</span>
          <div class="category-card-body">
            <h3>
              <span class="category-card-path">${escapeHtml(path.pageTitle || path.name)}</span>
              ${copy.example ? `<span class="category-card-example">${escapeHtml(copy.example)}</span>` : ''}
            </h3>
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
      const firstTrack = window.AIYA_getDefaultTrackId(path.id);
      const copy = window.AIYA_PATH_COPY[path.id] || { description: path.tagline, strap: path.tagline };
      const index = String(i + 1).padStart(2, '0');
      const metaPrimary = path.comingSoon ? 'Coming soon' : window.AIYA_getPathMetaLine(path.id);
      const href = path.homeHref || window.AIYA_trackUrl(path.id, firstTrack);
      const external = path.homeExternal ? ' target="_blank" rel="noopener"' : '';
      const tag = path.comingSoon ? 'div' : 'a';
      const attrs = path.comingSoon
        ? ' class="wcard is-soon" aria-disabled="true"'
        : ` class="wcard" href="${escapeHtml(href)}"${external}`;

      return `
        <${tag}${attrs}>
          <div class="fill"></div>
          <div class="top">
            <div>
              <div class="num">${index}</div>
              <h3>
                <span class="wcard-path">${escapeHtml(path.pageTitle || path.name)}</span>
                ${copy.example ? `<span class="wcard-example">${escapeHtml(copy.example)}</span>` : ''}
              </h3>
              <p>${escapeHtml(copy.description)}</p>
            </div>
          </div>
          <div class="meta">
            <span class="mono">${escapeHtml(metaPrimary)}</span>
            <span class="mono dim">${escapeHtml(copy.strap)}</span>
          </div>
          ${path.comingSoon ? '' : '<div class="arrow">→</div>'}
        </${tag}>`;
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
