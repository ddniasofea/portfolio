/* =========================================================================
   1. THEME STORAGE & AUTO-EXTENSION FALLBACK FOR LOCAL IMAGES
========================================================================= */
const THEME_STORAGE_KEY = 'dania-editorial-theme-v4';
const IMG_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG'];

function tryNextExt(img, fallbackId) {
  const base = img.dataset.base;
  const nextIdx = parseInt(img.dataset.extIdx || '0', 10) + 1;
  if (base && nextIdx < IMG_EXTENSIONS.length) {
    img.dataset.extIdx = String(nextIdx);
    img.src = base + IMG_EXTENSIONS[nextIdx];
  } else {
    img.onerror = null;
    img.style.display = 'none';
    if (fallbackId) {
      const fb = document.getElementById(fallbackId);
      if (fb) fb.classList.remove('hidden');
    }
  }
}

/* =========================================================================
   2. PROJECTS DATA (INCLUDES REKASAWANG INTERNSHIP & UTeM WORK)
========================================================================= */
const projectsData = [
  {
    id: 'zibeline-journals',
    shortLabel: '67 Journals',
    title: '67 Academic Journal Websites Platform',
    subtitle: 'Multi-Site WordPress Publishing & Editorial Architecture',
    category: 'web',
    categoryLabel: 'Web & UI/UX',
    timeline: 'Jan 2025 – Oct 2026 • Zibeline Int. Publishing',
    role: 'Junior Web Developer (Full-time & Remote)',
    tools: ['WordPress', 'HTML/CSS', 'Editorial UI', 'Microsoft Word'],
    shortDesc: 'Managed, updated, and maintained 67 international peer-reviewed journal portals under Zibeline International Publishing with unified navigation and performance optimization.',
    heroGradient: 'from-[#8B2E4A] via-[#4C1A2B] to-[#141014]',
    challenge: 'Operating 67 distinct academic journal websites requires strict visual consistency, reliable uptime, responsive mobile readability, and error-free issue publication across tight editorial schedules.',
    solution: 'Standardized WordPress theme administration, page templates, and navigation menus across all 67 journal sites while pairing web releases with structured Microsoft Word manuscript formatting.',
    hciPrinciples: [
      { name: 'Consistency', detail: 'Unified header hierarchy, typography scale, and archive tables across all 67 journal websites.' },
      { name: 'Mapping', detail: 'Clear volume, issue, and article archive paths so international researchers locate papers instantly.' },
      { name: 'Visibility', detail: 'Prominent submission guidelines, ISSN metadata, and PDF download controls above the fold.' }
    ],
    impactMetrics: [
      { value: '67', label: 'Live Journal Sites Managed' },
      { value: '17 mos', label: 'Full-time + Remote Tenure' },
      { value: '100%', label: 'Publishing Continuity' }
    ],
    github: 'https://github.com/ddniasofea',
    renderThumb: () => `
      <div class="zoom-target w-full h-full bg-gradient-to-br from-[#8B2E4A] via-[#511B2D] to-[#171216] p-5 flex flex-col justify-between text-white">
        <div class="flex items-center justify-between font-mono text-[10px]">
          <span class="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm uppercase">Web &amp; UI/UX</span>
          <span class="text-champagne-dark">Industry</span>
        </div>
        <div class="rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 p-3.5 space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="font-semibold">Zibeline Publishing</span>
            <span class="font-mono text-[10px] px-2 py-0.5 rounded-full bg-champagne-dark/25 text-champagne-dark">67 Sites</span>
          </div>
          <div class="grid grid-cols-3 gap-1.5 font-mono text-[9px] text-white/80">
            <span class="bg-white/10 rounded px-1.5 py-1 text-center">WordPress</span>
            <span class="bg-white/10 rounded px-1.5 py-1 text-center">Templates</span>
            <span class="bg-white/10 rounded px-1.5 py-1 text-center">Editorial</span>
          </div>
        </div>
      </div>
    `,
    renderShowcase: () => `
      <div class="rounded-3xl bg-[#121015] text-white p-5 sm:p-7 border border-white/10 space-y-5">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-wine-rose"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-champagne-dark"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-white/30"></span>
            <span class="ml-2 font-mono text-[11px] text-white/50">zibeline-publishing.com/network</span>
          </div>
          <span class="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-wine-rose/20 text-wine-rose">67 Portals Active</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="sm:col-span-2 rounded-2xl bg-white/[0.04] border border-white/10 p-4 space-y-3">
            <p class="font-mono text-[10px] uppercase tracking-widest text-champagne-dark">Multi-Site Publishing Console</p>
            <div class="p-3 rounded-xl bg-black/40 border border-wine-rose/30 flex items-center justify-between gap-2">
              <div>
                <p class="text-sm font-semibold">Theme &amp; Responsive Layout Sync</p>
                <p class="text-[11px] text-white/55">Consistent journal navigation, article metadata &amp; mobile readability</p>
              </div>
              <span class="font-mono text-[10px] px-2.5 py-1 rounded-full bg-wine-rose text-noir-bg font-bold">Synced</span>
            </div>
            <div class="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center justify-between gap-2">
              <div>
                <p class="text-sm font-semibold">Issue Formatting &amp; Performance Audit</p>
                <p class="text-[11px] text-white/55">Structured Microsoft Word publishing standards &amp; asset caching</p>
              </div>
              <span class="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-champagne-dark">Verified</span>
            </div>
          </div>
          <div class="rounded-2xl bg-gradient-to-b from-wine/40 to-white/[0.03] border border-wine-rose/25 p-4 flex flex-col justify-between">
            <p class="font-mono text-[10px] uppercase tracking-widest text-champagne-dark">Portfolio Scope</p>
            <div>
              <p class="font-display text-4xl font-bold tracking-tight">67 Sites</p>
              <p class="text-[11px] text-white/70 mt-1">Managed full-time &amp; remote</p>
            </div>
            <div class="h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
              <div class="h-full w-full bg-gradient-to-r from-wine-rose to-champagne-dark rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'rekasawang-web',
    shortLabel: 'Klinik Akhi & PACU',
    title: 'Klinik Akhi & PACU — Figma-to-WordPress Client Sites',
    subtitle: 'Responsive Clinic, NGO & Brand Portals with QC & Speed Reporting',
    category: 'web',
    categoryLabel: 'Web & UI/UX',
    timeline: 'Jul – Nov 2024 • Rekasawang Sdn. Bhd.',
    role: 'Web Developer Intern',
    tools: ['WordPress', 'Elementor', 'Figma', 'PageSpeed & SEO'],
    shortDesc: 'Built and refined responsive client websites including klinikakhi.com.my, pacuummah.com, promosi.unipsas.edu.my, pemikir.sawang.dev, and jejakvacation.sawang.dev from Figma layouts.',
    heroGradient: 'from-[#6D2B52] via-[#3A1930] to-[#120E14]',
    challenge: 'Translating designer prototypes into consistent multi-device WordPress pages—including mobile responsiveness, service/branch directories, Umrah package grids, and bilingual translations—while meeting client QC and speed benchmarks.',
    solution: 'Implemented layouts in WordPress and Elementor using global site settings, padding/margin spacing, Smart Slider 3, and Yoast SEO, followed by designer Quality Control (QC), mobile fixes, and Google Docs speed/SEO reports.',
    hciPrinciples: [
      { name: 'Consistency', detail: 'Unified global colors, typography, and six-card package layouts across Umrah, clinic, and NGO sections.' },
      { name: 'Visibility', detail: 'Clear service categories, clinic branches, FAQ accordions, and direct enquiry/booking actions.' },
      { name: 'Feedback', detail: 'Validated mobile responsiveness, PageSpeed metrics, and SEO scores in client progress reports.' }
    ],
    impactMetrics: [
      { value: '8+ Sites', label: 'Client & Internal Portals Built' },
      { value: 'QC + UAT', label: 'Designer Review & Client Testing' },
      { value: 'SEO & Speed', label: 'Client Performance Reports' }
    ],
    github: 'https://github.com/ddniasofea',
    renderThumb: () => `
      <div class="zoom-target w-full h-full bg-gradient-to-br from-[#6F2D54] via-[#3A1930] to-[#141016] p-5 flex flex-col justify-between text-white">
        <div class="flex items-center justify-between font-mono text-[10px]">
          <span class="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm uppercase">Web &amp; UI/UX</span>
          <span class="text-champagne-dark">Rekasawang LI</span>
        </div>
        <div class="rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 p-3.5 space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="font-semibold">Klinik Akhi &bull; PACU</span>
            <span class="font-mono text-[10px] px-2 py-0.5 rounded-full bg-wine-rose/25 text-wine-rose">Figma &rarr; WP</span>
          </div>
          <p class="font-mono text-[9px] text-white/80">Elementor &bull; Responsive QC &bull; SEO</p>
        </div>
      </div>
    `,
    renderShowcase: () => `
      <div class="rounded-3xl bg-[#121015] text-white p-5 sm:p-7 border border-white/10 space-y-5">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <span class="font-mono text-[11px] text-wine-rose">Rekasawang Web Delivery &amp; QC Pipeline</span>
          <span class="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-champagne-dark/20 text-champagne-dark">Jul – Nov 2024</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-white/50">Healthcare &amp; NGO</p>
            <p class="font-display text-lg font-bold text-wine-rose">Klinik Akhi &amp; PACU</p>
            <p class="text-xs text-white/60">Services, branches, contact flows &amp; responsive mobile QC.</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-white/50">Education &amp; Travel</p>
            <p class="font-display text-lg font-bold text-champagne-dark">UNIPSAS &amp; JejakVacation</p>
            <p class="text-xs text-white/60">APEL FAQ, application forms, Umrah &amp; destination grids.</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-white/50">Audit &amp; Localization</p>
            <p class="font-display text-lg font-bold text-white">Speed, SEO &amp; UAT</p>
            <p class="text-xs text-white/60">PageSpeed, Site Kit analytics &amp; EN/BM site translations.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'woocommerce-commerce',
    shortLabel: 'WooCommerce',
    title: 'WooCommerce Shipping & toyyibPay Payment Integration',
    subtitle: 'Multi-Region Weight Shipping, EasyParcel & Payment Gateway Setup',
    category: 'web',
    categoryLabel: 'Web & UI/UX',
    timeline: 'Oct 2024 • Rekasawang Sdn. Bhd.',
    role: 'Web Developer Intern',
    tools: ['WooCommerce', 'toyyibPay', 'EasyParcel', 'WordPress'],
    shortDesc: 'Configured weight-based international shipping zones, EasyParcel logistics support, and toyyibPay payment gateway credentials for e-commerce client storefronts.',
    heroGradient: 'from-[#6C4A33] via-[#3A281E] to-[#120F12]',
    challenge: 'Online stores selling skincare and children health products require accurate weight-based shipping rates across regional/international markets and reliable checkout payment processing.',
    solution: 'Set up WooCommerce weight-tiered shipping for nuuhabeauty.com (including Thailand, Vietnam, New Zealand, and South Africa) alongside EasyParcel and toyyibPay Brand ID / Secret Key integration on superkidzz.com.my.',
    hciPrinciples: [
      { name: 'Visibility', detail: 'Clear shipping and checkout options so buyers see transparent delivery terms before paying.' },
      { name: 'Constraints', detail: 'Weight-based shipping rules and verified payment keys prevent miscalculated or failed orders.' },
      { name: 'Feedback', detail: 'Structured client reports documented WooCommerce updates, speed checks, and checkout readiness.' }
    ],
    impactMetrics: [
      { value: '4+ Regions', label: 'International Shipping Zones' },
      { value: 'toyyibPay', label: 'Payment Gateway Configured' },
      { value: 'EasyParcel', label: 'Logistics Integration Support' }
    ],
    github: 'https://github.com/ddniasofea',
    renderThumb: () => `
      <div class="zoom-target w-full h-full bg-gradient-to-br from-[#7A573B] via-[#3B2A1E] to-[#161214] p-5 flex flex-col justify-between text-white">
        <div class="flex items-center justify-between font-mono text-[10px]">
          <span class="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm uppercase">Web &amp; UI/UX</span>
          <span class="text-champagne-dark">WooCommerce</span>
        </div>
        <div class="rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 p-3.5 space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="font-semibold">NuuhaBeauty &bull; SuperKidzz</span>
            <span class="font-mono text-[10px] px-2 py-0.5 rounded-full bg-champagne-dark/25 text-champagne-dark">toyyibPay</span>
          </div>
          <p class="font-mono text-[9px] text-white/80">Weight Shipping &bull; EasyParcel &bull; Checkout</p>
        </div>
      </div>
    `,
    renderShowcase: () => `
      <div class="rounded-3xl bg-[#121015] text-white p-5 sm:p-7 border border-white/10 space-y-5">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <span class="font-mono text-[11px] text-champagne-dark">WooCommerce Storefront &amp; Checkout Configuration</span>
          <span class="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-champagne-dark/20 text-champagne-dark">Production Ready</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-white/50">Weight Shipping</p>
            <p class="font-display text-lg font-bold text-champagne-dark">nuuhabeauty.com</p>
            <p class="text-xs text-white/60">Rate tiers by order weight across TH, VN, NZ &amp; ZA.</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-white/50">Payment Gateway</p>
            <p class="font-display text-lg font-bold text-wine-rose">toyyibPay</p>
            <p class="text-xs text-white/60">Brand ID &amp; Secret Key setup for superkidzz.com.my.</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-white/50">Fulfilment</p>
            <p class="font-display text-lg font-bold text-white">EasyParcel</p>
            <p class="text-xs text-white/60">Shipment integration &amp; UI button/font alignment.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'laragigs-laravel',
    shortLabel: 'LaraGigs',
    title: 'LaraGigs — Laravel & MySQL Job / Gig Web App',
    subtitle: 'Authentication, Dynamic Gig Forms, Search & CRUD Database',
    category: 'software',
    categoryLabel: 'Software & AI',
    timeline: 'Aug 2024 • Rekasawang Sdn. Bhd.',
    role: 'Web Developer Intern (Laravel & MySQL)',
    tools: ['Laravel', 'MySQL', 'phpMyAdmin', 'CRUD'],
    shortDesc: 'Built a Laravel and MySQL gig/job listing web application supporting user registration, login/logout, keyword search, gig creation, detail viewing, and listing management.',
    heroGradient: 'from-[#2D2A38] via-[#1C1A24] to-[#0E0D12]',
    challenge: 'Connecting dynamic web forms and search filters to a structured relational database while handling framework errors cleanly during early Laravel development.',
    solution: 'Implemented authentication flows, search and dynamic gig creation forms, detail pages, and edit/delete management backed by MySQL tables (users and listings) in phpMyAdmin, resolving package issues such as missing traits.',
    hciPrinciples: [
      { name: 'Mapping', detail: 'Intuitive navigation from gig search and detail pages to authenticated posting and listing management.' },
      { name: 'Feedback', detail: 'Clear session status banners for login/logout states and structured listing cards.' },
      { name: 'Constraints', detail: 'Account authentication and structured form inputs keep listing records organized in MySQL.' }
    ],
    impactMetrics: [
      { value: 'Full CRUD', label: 'Create, View, Edit & Delete' },
      { value: 'MySQL', label: 'Relational Users & Listings' },
      { value: 'Auth + Search', label: 'Account & Keyword Filtering' }
    ],
    github: 'https://github.com/ddniasofea',
    renderThumb: () => `
      <div class="zoom-target w-full h-full bg-gradient-to-br from-[#342F42] via-[#1D1A26] to-[#0F0E14] p-5 flex flex-col justify-between text-white">
        <div class="flex items-center justify-between font-mono text-[10px]">
          <span class="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm uppercase">Software &amp; AI</span>
          <span class="text-champagne-dark">Laravel + MySQL</span>
        </div>
        <div class="rounded-2xl bg-black/45 border border-white/10 p-3 font-mono text-[10px] space-y-1">
          <p class="text-wine-rose">&gt; LARAGIGS &bull; Auth &amp; Search</p>
          <p class="text-white/75">&gt; MySQL: users &amp; listings</p>
          <p class="text-champagne-dark">&gt; Create &bull; Edit &bull; Delete [OK]</p>
        </div>
      </div>
    `,
    renderShowcase: () => `
      <div class="rounded-3xl bg-[#121015] text-white p-5 sm:p-7 border border-white/10 space-y-4">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <span class="font-mono text-[11px] text-champagne-dark">LaraGigs Web Application &amp; MySQL Schema</span>
          <span class="font-mono text-[10px] text-white/50">Laravel &bull; phpMyAdmin</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-wine-rose">Access &amp; Discovery</p>
            <p class="font-display text-lg font-bold">Auth &amp; Search</p>
            <p class="text-white/65">User registration, login/logout session feedback &amp; gig keyword search.</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-champagne-dark">Gig Workflows</p>
            <p class="font-display text-lg font-bold">Dynamic Forms &amp; CRUD</p>
            <p class="text-white/65">Create a Gig form, full detail view, and Manage Gigs edit/delete actions.</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-white/50">Persistence</p>
            <p class="font-display text-lg font-bold">MySQL Tables</p>
            <p class="text-white/65">Structured relational records for users and job/gig listings.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'rideutem',
    shortLabel: 'RideUTeM',
    title: 'RideUTeM — Smart Campus Eco-Carpooling System',
    subtitle: 'SME 4.0 & Green Transition Transit Web Application',
    category: 'web',
    categoryLabel: 'Web & UI/UX',
    timeline: '2026 • UTeM Workshop 2',
    role: 'UI/UX Designer & Full-Stack Developer',
    tools: ['Figma', 'Laravel', 'MySQL', 'PHP'],
    shortDesc: 'Matric-verified campus eco-carpooling platform connecting UTeM commuters with structured seat booking, fair cost splitting, and Green Point cafeteria rewards.',
    heroGradient: 'from-[#6C4A33] via-[#3A281E] to-[#120F12]',
    challenge: 'UTeM commuters traveling between Durian Tunggal, Ayer Keroh, and main campus relied on scattered chat groups with no student verification, seat constraints, or eco-riding incentives.',
    solution: 'Designed high-fidelity interactive prototypes in Figma and built a Laravel + MySQL web platform featuring matric verification, real-time seat limits, route filtering, and campus SME Green Points.',
    hciPrinciples: [
      { name: 'Constraints', detail: 'Enforces available seat limits and valid campus routes to prevent booking slips.' },
      { name: 'Feedback', detail: 'Instant booking confirmation cards, live seat indicators, and Green Point balance updates.' },
      { name: 'Visibility', detail: 'Clear pickup hubs, departure times, and fare badges scannable at a glance.' }
    ],
    impactMetrics: [
      { value: 'Track 2', label: 'SME 4.0 & Green Transition' },
      { value: '100%', label: 'Matric-Verified Riders' },
      { value: 'Hi-Fi', label: 'Figma + Laravel Build' }
    ],
    github: 'https://github.com/ddniasofea',
    renderThumb: () => `
      <div class="zoom-target w-full h-full bg-gradient-to-br from-[#7A573B] via-[#3B2A1E] to-[#161214] p-5 flex flex-col justify-between text-white">
        <div class="flex items-center justify-between font-mono text-[10px]">
          <span class="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm uppercase">Web &amp; UI/UX</span>
          <span class="text-champagne-dark">Laravel + Figma</span>
        </div>
        <div class="rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 p-3.5 space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="font-semibold">Ayer Keroh &rarr; FTMK</span>
            <span class="font-mono text-[10px] px-2 py-0.5 rounded-full bg-champagne-dark/25 text-champagne-dark">+25 Green Pts</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-1.5 flex-grow rounded-full bg-white/20 overflow-hidden">
              <div class="h-full w-3/4 bg-champagne-dark rounded-full"></div>
            </div>
            <span class="font-mono text-[9px] text-white/80">3/4 Seats</span>
          </div>
        </div>
      </div>
    `,
    renderShowcase: () => `
      <div class="rounded-3xl bg-[#121015] text-white p-5 sm:p-7 border border-white/10 space-y-5">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <span class="font-mono text-[11px] text-champagne-dark">rideutem.app/campus-routes</span>
          <span class="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-champagne-dark/20 text-champagne-dark">Matric Verified</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="sm:col-span-2 rounded-2xl bg-white/[0.04] border border-white/10 p-4 space-y-3">
            <p class="font-mono text-[10px] uppercase tracking-widest text-wine-rose">Active Eco-Rides</p>
            <div class="p-3 rounded-xl bg-black/40 border border-champagne-dark/30 flex items-center justify-between">
              <div>
                <p class="text-sm font-semibold">Taman Tasik Utama &rarr; FTMK</p>
                <p class="text-[11px] text-white/55">08:05 AM &bull; 3 Seats Open &bull; +25 Green Pts</p>
              </div>
              <span class="font-mono text-xs px-3 py-1 rounded-full bg-champagne-dark text-noir-bg font-bold">RM 3.00</span>
            </div>
            <div class="p-3 rounded-xl bg-black/25 border border-white/10 flex items-center justify-between">
              <div>
                <p class="text-sm font-semibold">Durian Tunggal &rarr; Library</p>
                <p class="text-[11px] text-white/55">09:30 AM &bull; 2 Seats Open &bull; SME Voucher</p>
              </div>
              <span class="font-mono text-xs px-3 py-1 rounded-full bg-white/10 text-white">RM 2.50</span>
            </div>
          </div>
          <div class="rounded-2xl bg-gradient-to-b from-champagne/25 to-white/[0.03] border border-champagne-dark/25 p-4 flex flex-col justify-between">
            <p class="font-mono text-[10px] uppercase tracking-widest text-champagne-dark">Eco Wallet</p>
            <div>
              <p class="font-display text-4xl font-bold tracking-tight">340 pts</p>
              <p class="text-[11px] text-white/70 mt-1">Redeemable at Campus SMEs</p>
            </div>
            <div class="h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
              <div class="h-full w-4/5 bg-champagne-dark rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'sanctguard',
    shortLabel: 'SanctGuard',
    title: 'SanctGuard — IoT Smart Donation Box Security System',
    subtitle: 'Biometric Access & Real-Time Blynk Telemetry (Diploma FYP)',
    category: 'iot-data',
    categoryLabel: 'IoT & Data',
    timeline: '2024 • POLIMAS Diploma FYP',
    role: 'Project Lead & Embedded IoT Developer',
    tools: ['ESP32', 'Fingerprint', 'Solenoid Lock', 'Blynk'],
    shortDesc: 'Embedded IoT security prototype protecting charity donation boxes with biometric fingerprint recognition, solenoid locking, and instant mobile tamper alerts.',
    heroGradient: 'from-[#4A2538] via-[#261620] to-[#100E13]',
    challenge: 'Conventional padlocked donation boxes remain vulnerable to physical break-ins, leaving administrators unaware of tampering until after losses occur.',
    solution: 'Engineered an ESP32-powered security system combining an optical fingerprint sensor, 12V solenoid lock, vibration/tamper sensors, and instant Wi-Fi push alerts via the Blynk mobile app.',
    hciPrinciples: [
      { name: 'Constraints', detail: 'Biometric fingerprint matching physically restricts unlocking strictly to authorized committee members.' },
      { name: 'Feedback', detail: 'Sub-2-second smartphone push alerts and status LEDs confirm lock and tamper states immediately.' },
      { name: 'Visibility', detail: 'Live lock & sensor telemetry surfaced cleanly on the remote Blynk mobile dashboard.' }
    ],
    impactMetrics: [
      { value: '< 2s', label: 'Tamper Push Alert Latency' },
      { value: 'ESP32', label: 'Real-Time IoT Telemetry' },
      { value: '3.82', label: 'Graduating Diploma CGPA' }
    ],
    github: 'https://github.com/ddniasofea',
    renderThumb: () => `
      <div class="zoom-target w-full h-full bg-gradient-to-br from-[#59263F] via-[#2B1520] to-[#120E12] p-5 flex flex-col justify-between text-white">
        <div class="flex items-center justify-between font-mono text-[10px]">
          <span class="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm uppercase">IoT &amp; Data</span>
          <span class="text-wine-rose">ESP32 + Blynk</span>
        </div>
        <div class="rounded-2xl bg-black/35 backdrop-blur-md border border-white/15 p-3.5 space-y-1.5">
          <div class="flex items-center justify-between text-xs">
            <span class="font-semibold text-champagne-dark">Biometric Armed</span>
            <span class="w-2 h-2 rounded-full bg-wine-rose"></span>
          </div>
          <p class="font-mono text-[9px] text-white/70">Solenoid: LOCKED &bull; Tamper: 0 &bull; WiFi: LIVE</p>
        </div>
      </div>
    `,
    renderShowcase: () => `
      <div class="rounded-3xl bg-[#121015] text-white p-5 sm:p-7 border border-white/10 space-y-5">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <span class="font-mono text-[11px] text-wine-rose">SanctGuard ESP32 Telemetry</span>
          <span class="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-wine-rose/20 text-wine-rose">Online &bull; Armed</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-white/50">Authentication</p>
            <p class="font-display text-xl font-bold text-champagne-dark">Fingerprint ID</p>
            <p class="text-xs text-white/60">Optical biometric scanner restricts physical access.</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-white/50">Remote Alert</p>
            <p class="font-display text-xl font-bold text-wine-rose">Blynk Push</p>
            <p class="text-xs text-white/60">Instant mobile warning upon unauthorized vibration.</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 space-y-1">
            <p class="font-mono text-[10px] uppercase text-white/50">Actuator</p>
            <p class="font-display text-xl font-bold text-white">12V Solenoid</p>
            <p class="text-xs text-white/60">Automatic relocking bolt after collection.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'masakgram',
    shortLabel: 'MasakGram',
    title: 'MasakGram — AI Culinary Client-Server Application',
    subtitle: 'Java Multithreaded TCP/IP Sockets & Local Ollama LLMs',
    category: 'software',
    categoryLabel: 'Software & AI',
    timeline: '2026 • UTeM',
    role: 'Distributed Systems & Backend Developer',
    tools: ['Java TCP/IP', 'Local Ollama LLMs', 'Relational DB'],
    shortDesc: 'Distributed Java client-server recipe platform pairing multithreaded TCP sockets, local Ollama large language models, and relational database persistence.',
    heroGradient: 'from-[#2D2A38] via-[#1C1A24] to-[#0E0D12]',
    challenge: 'Cloud AI recipe tools depend on paid APIs and external servers, whereas basic desktop apps lack multi-user real-time socket communication.',
    solution: 'Built a multithreaded Java TCP/IP client-server architecture backed by a relational database and connected directly to local Ollama LLMs (llama3.1 & qwen2.5) for private, zero-cost culinary AI.',
    hciPrinciples: [
      { name: 'Feedback', detail: 'Clear asynchronous loading indicators and status logs during local LLM recipe generation.' },
      { name: 'Consistency', detail: 'Uniform structured recipe cards across AI-generated and community-stored dishes.' },
      { name: 'Constraints', detail: 'Validated socket payloads and sanitized query inputs protect relational DB integrity.' }
    ],
    impactMetrics: [
      { value: '4+', label: 'Local LLM Models Tested' },
      { value: 'TCP/IP', label: 'Concurrent Multi-Client' },
      { value: 'RM 0', label: 'External AI API Cost' }
    ],
    github: 'https://github.com/ddniasofea',
    renderThumb: () => `
      <div class="zoom-target w-full h-full bg-gradient-to-br from-[#342F42] via-[#1D1A26] to-[#0F0E14] p-5 flex flex-col justify-between text-white">
        <div class="flex items-center justify-between font-mono text-[10px]">
          <span class="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm uppercase">Software &amp; AI</span>
          <span class="text-champagne-dark">Java + Ollama</span>
        </div>
        <div class="rounded-2xl bg-black/45 border border-white/10 p-3 font-mono text-[10px] space-y-1">
          <p class="text-wine-rose">&gt; TCP Socket :8080 Ready</p>
          <p class="text-white/75">&gt; Ollama: llama3.1:8b [OK]</p>
          <p class="text-champagne-dark">&gt; Output: Asam Pedas Melaka</p>
        </div>
      </div>
    `,
    renderShowcase: () => `
      <div class="rounded-3xl bg-[#121015] text-white p-5 sm:p-7 border border-white/10 font-mono text-xs space-y-4">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <span class="text-champagne-dark font-semibold">MasakGram Socket &amp; Local LLM Stream</span>
          <span class="text-[10px] text-white/50">Threads: Active</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="rounded-2xl bg-black/50 p-4 border border-white/10 space-y-1.5">
            <p class="text-white/40">// Java TCP/IP Server Log</p>
            <p class="text-champagne-dark">[SERVER] Listening on 127.0.0.1:8080</p>
            <p class="text-white/80">[CLIENT] Prompt: chicken, ginger, rice</p>
            <p class="text-wine-rose">[OLLAMA] Inference completed (1.2s)</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10 font-sans space-y-2">
            <p class="font-mono text-[10px] uppercase tracking-wider text-wine-rose">Stored Recipe Card</p>
            <p class="font-display text-xl font-bold">Hainanese Chicken Rice</p>
            <p class="text-xs text-white/65">Saved directly to relational database and synced across connected clients.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'clinic-billing',
    shortLabel: 'Clinic Billing',
    title: 'Clinic Patient Billing & Analytics System',
    subtitle: 'Modular C++ Desktop Application & MySQL Backend',
    category: 'software',
    categoryLabel: 'Software & AI',
    timeline: '2026 • UTeM',
    role: 'C++ & Database Developer',
    tools: ['C++', 'MySQL', 'OOP', 'Analytics'],
    shortDesc: 'Object-oriented C++ clinic management application backed by MySQL for patient registration, service catalogs, automated invoicing, and revenue summaries.',
    heroGradient: 'from-[#3B3331] via-[#211C1B] to-[#110F10]',
    challenge: 'Paper-based clinic billing creates arithmetic slips, slow patient lookups, and limited visibility into daily service volume and revenue.',
    solution: 'Developed a modular C++ and MySQL system unifying Patient Records, Medical Services, Automated Itemized Billing, and Clinic Revenue Analytics.',
    hciPrinciples: [
      { name: 'Constraints', detail: 'Strict input checks reject invalid IDs, empty fields, and negative amounts before database writes.' },
      { name: 'Consistency', detail: 'Standardized menu flows and tabular formatting across all four management modules.' },
      { name: 'Visibility', detail: 'Instant invoice subtotals and revenue summary tables aid rapid front-desk decisions.' }
    ],
    impactMetrics: [
      { value: '4', label: 'Integrated Core Modules' },
      { value: '99.8%', label: 'Automated Billing Accuracy' },
      { value: 'CRUD', label: 'Full MySQL Integration' }
    ],
    github: 'https://github.com/ddniasofea',
    renderThumb: () => `
      <div class="zoom-target w-full h-full bg-gradient-to-br from-[#3F3634] via-[#221D1C] to-[#121011] p-5 flex flex-col justify-between text-white">
        <div class="flex items-center justify-between font-mono text-[10px]">
          <span class="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm uppercase">Software &amp; AI</span>
          <span class="text-champagne-dark">C++ &amp; MySQL</span>
        </div>
        <div class="rounded-2xl bg-black/35 border border-white/15 p-3.5 space-y-1.5">
          <div class="flex justify-between font-mono text-[11px]">
            <span class="text-champagne-dark">INV-2026-0418</span>
            <span class="font-bold">RM 85.00</span>
          </div>
          <p class="text-[10px] text-white/70">Consultation + Medication &bull; Paid</p>
        </div>
      </div>
    `,
    renderShowcase: () => `
      <div class="rounded-3xl bg-[#121015] text-white p-5 sm:p-7 border border-white/10 space-y-4">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <span class="font-mono text-[11px] text-champagne-dark">Clinic Billing &amp; Analytics Suite</span>
          <span class="font-mono text-[10px] text-white/50">MySQL Connector/C++</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div class="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
            <p class="font-display text-2xl font-bold text-wine-rose">1,240</p>
            <p class="font-mono text-[10px] text-white/55 mt-1">Patients</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
            <p class="font-display text-2xl font-bold text-white">28</p>
            <p class="font-mono text-[10px] text-white/55 mt-1">Services</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
            <p class="font-display text-2xl font-bold text-champagne-dark">99.8%</p>
            <p class="font-mono text-[10px] text-white/55 mt-1">Accuracy</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
            <p class="font-display text-2xl font-bold text-white">4</p>
            <p class="font-mono text-[10px] text-white/55 mt-1">Modules</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'zus-bi',
    shortLabel: 'ZUS Power BI',
    title: 'ZUS Coffee Intelligent Business Dashboard',
    subtitle: 'Interactive Power BI Retail Analytics & Sales Forecasting',
    category: 'iot-data',
    categoryLabel: 'IoT & Data',
    timeline: '2026 • UTeM',
    role: 'BI Analyst & Dashboard Designer',
    tools: ['Power BI', 'Sales Forecasting', 'KPI Modeling'],
    shortDesc: 'Executive Power BI intelligence dashboard analyzing ZUS Coffee retail beverage performance, category comparisons, and statistical sales forecasting.',
    heroGradient: 'from-[#28334A] via-[#171E2E] to-[#0E1016]',
    challenge: 'Raw multi-sheet retail sales logs obscure top-selling beverage lines, regional performance, and forward inventory planning.',
    solution: 'Modeled cleaned ZUS Coffee transaction datasets in Power BI to craft cross-filtered KPI cards, comparative bar/line visuals, and 95% confidence-interval demand forecasting.',
    hciPrinciples: [
      { name: 'Visibility', detail: 'Layer-cake scanning layout places headline revenue KPIs and trend peaks at top visual priority.' },
      { name: 'Feedback', detail: 'Dynamic cross-filtering instantly highlights correlated category slices upon selection.' },
      { name: 'Mapping', detail: 'Clear color encoding separates historical actuals from dashed statistical forecast curves.' }
    ],
    impactMetrics: [
      { value: '95%', label: 'Forecast Confidence Interval' },
      { value: '3-Mo', label: 'Sales Demand Projection' },
      { value: 'Live', label: 'Interactive BI Slicers' }
    ],
    github: 'https://github.com/ddniasofea',
    renderThumb: () => `
      <div class="zoom-target w-full h-full bg-gradient-to-br from-[#2B3752] via-[#181F30] to-[#0F1118] p-5 flex flex-col justify-between text-white">
        <div class="flex items-center justify-between font-mono text-[10px]">
          <span class="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm uppercase">IoT &amp; Data</span>
          <span class="text-champagne-dark">Power BI</span>
        </div>
        <div class="rounded-2xl bg-black/35 border border-white/15 p-3 flex items-end justify-between gap-1.5 h-16">
          <div class="w-1/6 bg-wine-rose/50 rounded-t h-1/2"></div>
          <div class="w-1/6 bg-wine-rose/70 rounded-t h-2/3"></div>
          <div class="w-1/6 bg-wine-rose/60 rounded-t h-3/5"></div>
          <div class="w-1/6 bg-champagne-dark/80 rounded-t h-4/5"></div>
          <div class="w-1/6 bg-champagne-dark rounded-t h-full"></div>
          <div class="w-1/6 bg-champagne-dark/45 border border-dashed border-champagne-dark rounded-t h-[88%]"></div>
        </div>
      </div>
    `,
    renderShowcase: () => `
      <div class="rounded-3xl bg-[#121015] text-white p-5 sm:p-7 border border-white/10 space-y-5">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <span class="font-mono text-[11px] text-champagne-dark">ZUS Coffee BI Analytics &amp; Forecasting</span>
          <span class="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-champagne-dark/20 text-champagne-dark">SISP Aligned</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10">
            <p class="font-mono text-[10px] text-white/50 uppercase">Top Beverage</p>
            <p class="font-display text-xl font-bold mt-1">Spanish Latté</p>
            <p class="text-xs text-wine-rose mt-1">+22.4% growth trend</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10">
            <p class="font-mono text-[10px] text-white/50 uppercase">Forecast Window</p>
            <p class="font-display text-xl font-bold mt-1">3-Month Curve</p>
            <p class="text-xs text-champagne-dark mt-1">95% confidence bounds</p>
          </div>
          <div class="rounded-2xl bg-white/[0.04] p-4 border border-white/10">
            <p class="font-mono text-[10px] text-white/50 uppercase">Decision Layer</p>
            <p class="font-display text-xl font-bold mt-1">Live Slicers</p>
            <p class="text-xs text-white/65 mt-1">Cross-filtered visuals</p>
          </div>
        </div>
      </div>
    `
  }
];

/* =========================================================================
   3. CURATED GALLERY (12 MODELING + 9 CANON PHOTOGRAPHY + 8 VIDEO REELS)
========================================================================= */
const galleryData = [
  // --- APPAREL MODELING (LOOK 01 - LOOK 12) ---
  { id: 'gal-1', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 01', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 01 — Apparel Modeling Series.', photoBase: 'images/photo1' },
  { id: 'gal-2', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 02', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 02 — Apparel Modeling Series.', photoBase: 'images/photo2' },
  { id: 'gal-3', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 03', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 03 — Apparel Modeling Series.', photoBase: 'images/photo3' },
  { id: 'gal-4', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 04', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 04 — Apparel Modeling Series.', photoBase: 'images/photo4' },
  { id: 'gal-5', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 05', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 05 — Apparel Modeling Series.', photoBase: 'images/photo5' },
  { id: 'gal-6', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 06', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 06 — Apparel Modeling Series.', photoBase: 'images/photo6' },
  { id: 'gal-7', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 07', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 07 — Apparel Modeling Series.', photoBase: 'images/photo7' },
  { id: 'gal-8', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 08', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 08 — Apparel Modeling Series.', photoBase: 'images/photo8' },
  { id: 'gal-9', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 09', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 09 — Apparel Modeling Series.', photoBase: 'images/photo9' },
  { id: 'gal-10', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 10', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 10 — Apparel Modeling Series.', photoBase: 'images/photo10' },
  { id: 'gal-11', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 11', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 11 — Apparel Modeling Series.', photoBase: 'images/photo11' },
  { id: 'gal-12', type: 'photo', category: 'modeling', categoryLabel: 'Apparel Modeling', title: 'Look 12', role: 'Editorial Model', gear: 'Apparel Modeling • Lookbook', caption: 'Look 12 — Apparel Modeling Series.', photoBase: 'images/photo12' },

  // --- CANON PHOTOGRAPHY (FRAME 01 - FRAME 09) ---
  { id: 'gal-13', type: 'photo', category: 'photography', categoryLabel: 'Canon Photography', title: 'Frame 01', role: 'Canon G7 X Mark III', gear: 'Canon PowerShot G7 X Mark III', caption: 'Frame 01 — Canon Photography Series.', photoBase: 'images/photo13' },
  { id: 'gal-14', type: 'photo', category: 'photography', categoryLabel: 'Canon Photography', title: 'Frame 02', role: 'Canon G7 X Mark III', gear: 'Canon PowerShot G7 X Mark III', caption: 'Frame 02 — Canon Photography Series.', photoBase: 'images/photo14' },
  { id: 'gal-15', type: 'photo', category: 'photography', categoryLabel: 'Canon Photography', title: 'Frame 03', role: 'Canon G7 X Mark III', gear: 'Canon PowerShot G7 X Mark III', caption: 'Frame 03 — Canon Photography Series.', photoBase: 'images/photo15' },
  { id: 'gal-16', type: 'photo', category: 'photography', categoryLabel: 'Canon Photography', title: 'Frame 04', role: 'Canon G7 X Mark III', gear: 'Canon PowerShot G7 X Mark III', caption: 'Frame 04 — Canon Photography Series.', photoBase: 'images/photo16' },
  { id: 'gal-17', type: 'photo', category: 'photography', categoryLabel: 'Canon Photography', title: 'Frame 05', role: 'Canon G7 X Mark III', gear: 'Canon PowerShot G7 X Mark III', caption: 'Frame 05 — Canon Photography Series.', photoBase: 'images/photo17' },
  { id: 'gal-18', type: 'photo', category: 'photography', categoryLabel: 'Canon Photography', title: 'Frame 06', role: 'Canon G7 X Mark III', gear: 'Canon PowerShot G7 X Mark III', caption: 'Frame 06 — Canon Photography Series.', photoBase: 'images/photo18' },
  { id: 'gal-19', type: 'photo', category: 'photography', categoryLabel: 'Canon Photography', title: 'Frame 07', role: 'Canon G7 X Mark III', gear: 'Canon PowerShot G7 X Mark III', caption: 'Frame 07 — Canon Photography Series.', photoBase: 'images/photo19' },
  { id: 'gal-20', type: 'photo', category: 'photography', categoryLabel: 'Canon Photography', title: 'Frame 08', role: 'Canon G7 X Mark III', gear: 'Canon PowerShot G7 X Mark III', caption: 'Frame 08 — Canon Photography Series.', photoBase: 'images/photo20' },
  { id: 'gal-21', type: 'photo', category: 'photography', categoryLabel: 'Canon Photography', title: 'Frame 09', role: 'Canon G7 X Mark III', gear: 'Canon PowerShot G7 X Mark III', caption: 'Frame 09 — Canon Photography Series.', photoBase: 'images/photo21' },

  // --- VIDEO & REELS (8 VIDEO PROMO RESTORAN — SOKONG .MOV & .MP4) ---
  {
    id: 'vid-1',
    type: 'video',
    category: 'video',
    categoryLabel: 'Video & Reels',
    title: 'Handi Roti Reel 01',
    role: 'Content Creator • F&B',
    gear: 'Vertical Promo Reel',
    caption: 'Reel 01 — Promotional restaurant video crafted for Handi Roti.',
    videoBase: 'videos/video1'
  },
  {
    id: 'vid-2',
    type: 'video',
    category: 'video',
    categoryLabel: 'Video & Reels',
    title: 'Handi Roti Reel 02',
    role: 'Content Creator • F&B',
    gear: 'Vertical Promo Reel',
    caption: 'Reel 02 — Promotional restaurant video crafted for Handi Roti.',
    videoBase: 'videos/video2'
  },
  {
    id: 'vid-3',
    type: 'video',
    category: 'video',
    categoryLabel: 'Video & Reels',
    title: 'Handi Roti Reel 03',
    role: 'Content Creator • F&B',
    gear: 'Vertical Promo Reel',
    caption: 'Reel 03 — Promotional restaurant video crafted for Handi Roti.',
    videoBase: 'videos/video3'
  },
  {
    id: 'vid-4',
    type: 'video',
    category: 'video',
    categoryLabel: 'Video & Reels',
    title: 'Handi Roti Reel 04',
    role: 'Content Creator • F&B',
    gear: 'Vertical Promo Reel',
    caption: 'Reel 04 — Promotional restaurant video crafted for Handi Roti.',
    videoBase: 'videos/video4'
  },
  {
    id: 'vid-5',
    type: 'video',
    category: 'video',
    categoryLabel: 'Video & Reels',
    title: 'Handi Roti Reel 05',
    role: 'Content Creator • F&B',
    gear: 'Vertical Promo Reel',
    caption: 'Reel 05 — Promotional restaurant video crafted for Handi Roti.',
    videoBase: 'videos/video5'
  },
  {
    id: 'vid-6',
    type: 'video',
    category: 'video',
    categoryLabel: 'Video & Reels',
    title: 'Handi Roti Reel 06',
    role: 'Content Creator • F&B',
    gear: 'Vertical Promo Reel',
    caption: 'Reel 06 — Promotional restaurant video crafted for Handi Roti.',
    videoBase: 'videos/video6'
  },
  {
    id: 'vid-7',
    type: 'video',
    category: 'video',
    categoryLabel: 'Video & Reels',
    title: 'Handi Roti Reel 07',
    role: 'Content Creator • F&B',
    gear: 'Vertical Promo Reel',
    caption: 'Reel 07 — Promotional restaurant video crafted for Handi Roti.',
    videoBase: 'videos/video7'
  },
  {
    id: 'vid-8',
    type: 'video',
    category: 'video',
    categoryLabel: 'Video & Reels',
    title: 'Handi Roti Reel 08',
    role: 'Content Creator • F&B',
    gear: 'Vertical Promo Reel',
    caption: 'Reel 08 — Promotional restaurant video crafted for Handi Roti.',
    videoBase: 'videos/video8'
  }
];

function renderGalleryVisual(item, isLightbox = false) {
  if (item.type === 'video') {
    const thumbHash = isLightbox ? '' : '#t=0.5';
    const sources = `
      <source src="${item.videoBase}.mp4${thumbHash}" />
      <source src="${item.videoBase}.mov${thumbHash}" />
      <source src="${item.videoBase}.MP4${thumbHash}" />
      <source src="${item.videoBase}.MOV${thumbHash}" />
    `;
    if (isLightbox) {
      return `
        <video
          controls
          autoplay
          playsinline
          class="w-full h-full object-contain bg-black"
        >
          ${sources}
          Your browser does not support HTML5 video playback.
        </video>
      `;
    }
    return `
      <video
        muted
        loop
        playsinline
        preload="metadata"
        onmouseenter="this.play().catch(() => {})"
        onmouseleave="this.pause()"
        class="zoom-target w-full h-full object-cover"
      >
        ${sources}
      </video>
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <span class="w-14 h-14 rounded-full bg-black/55 backdrop-blur-md border border-white/25 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <svg class="w-6 h-6 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
        </span>
      </div>
    `;
  }

  const fitClass = isLightbox
    ? 'w-full h-full object-contain bg-black'
    : 'zoom-target w-full h-full object-cover object-top';
  return `
    <img
      src="${item.photoBase}.jpg"
      data-base="${item.photoBase}"
      data-ext-idx="0"
      onerror="tryNextExt(this)"
      alt="${item.title}"
      class="${fitClass}"
    />
  `;
}

/* =========================================================================
   4. APPLICATION STATE & URL HASH ROUTING
========================================================================= */
const VALID_PAGES = ['home', 'about', 'experience', 'projects', 'casestudy', 'gallery', 'contact'];
let currentPage = 'home';
let currentCaseStudyId = 'zibeline-journals';
let activeExpFilter = 'all';
let activeProjectFilter = 'all';
let activeGalleryFilter = 'all';
let lightboxItems = [];
let lightboxIndex = 0;
let metricsAnimated = false;

/* =========================================================================
   5. NAVIGATION, SLIDING PILLS, REVEAL & METRIC COUNTERS
========================================================================= */
function positionSlidingPill(containerId, pillId, activeSelector) {
  const container = document.getElementById(containerId);
  const pill = document.getElementById(pillId);
  if (!container || !pill) return;
  const activeBtn = container.querySelector(activeSelector);
  if (activeBtn && container.offsetWidth > 0) {
    pill.style.left = `${activeBtn.offsetLeft}px`;
    pill.style.width = `${activeBtn.offsetWidth}px`;
    pill.style.opacity = '1';
  }
}

function updateAllIndicators() {
  positionSlidingPill('desktop-nav', 'nav-indicator', `button[data-nav="${currentPage}"]`);
  positionSlidingPill('exp-filter-bar', 'exp-filter-pill', `button[data-exp-filter="${activeExpFilter}"]`);
  positionSlidingPill('project-filter-bar', 'project-filter-pill', `button[data-project-filter="${activeProjectFilter}"]`);
  positionSlidingPill('gallery-filter-bar', 'gallery-filter-pill', `button[data-gallery-filter="${activeGalleryFilter}"]`);
}

function navigateTo(pageId, skipHashUpdate = false) {
  const safePage = VALID_PAGES.includes(pageId) ? pageId : 'home';
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(`page-${safePage}`);
  if (target) {
    target.classList.add('active');
    currentPage = safePage;
  }

  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active-nav', btn.dataset.nav === safePage);
  });
  document.querySelectorAll('.mobile-nav-link').forEach(btn => {
    btn.classList.toggle('active-nav', btn.dataset.nav === safePage);
  });

  if (!skipHashUpdate) {
    const hashVal = safePage === 'casestudy' ? `#casestudy/${currentCaseStudyId}` : `#${safePage}`;
    if (window.location.hash !== hashVal) {
      history.replaceState(null, '', hashVal);
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(() => {
    updateAllIndicators();
    observeRevealElements();
    bindBentoInteractions();
  }, 60);
}

function animateMetricCounters() {
  if (metricsAnimated) return;
  metricsAnimated = true;
  document.querySelectorAll('.metric-counter').forEach(el => {
    const target = parseFloat(el.dataset.target || '0');
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1150;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = `${decimals > 0 ? val.toFixed(decimals) : Math.round(val)}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

let revealObserver = null;
function observeRevealElements() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), idx * 65);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  const activeSec = document.getElementById(`page-${currentPage}`);
  if (!activeSec) return;
  activeSec.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    revealObserver.observe(el);
  });
}

/* =========================================================================
   6. CYCLING ROLE SUBTITLE, 3D BENTO TILT, SPOTLIGHT & CUSTOM CURSOR
========================================================================= */
function initCyclingRole() {
  const roles = [
    'Junior Web Developer',
    'UI/UX Designer',
    'Content Creator',
    'Freelance Clothing Model',
    'Canon Photographer'
  ];
  const el = document.getElementById('cycling-role');
  if (!el) return;
  let idx = 0;
  setInterval(() => {
    el.classList.add('out');
    setTimeout(() => {
      idx = (idx + 1) % roles.length;
      el.textContent = roles[idx];
      el.classList.remove('out');
    }, 320);
  }, 2900);
}

function bindBentoInteractions() {
  const isFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  document.querySelectorAll('.bento-card').forEach(card => {
    if (card.dataset.bentoBound === '1') return;
    card.dataset.bentoBound = '1';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);

      const rx = ((y / rect.height) - 0.5) * -5.5;
      const ry = ((x / rect.width) - 0.5) * 5.5;
      card.style.transform = `perspective(950px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-3px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(950px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

function initCustomCursor() {
  const isFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const cursor = document.getElementById('custom-cursor');
  const label = document.getElementById('cursor-label');
  if (!isFinePointer || !cursor || !label) return;

  let mouseX = -100, mouseY = -100, curX = -100, curY = -100;
  let visible = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!visible) {
      visible = true;
      curX = mouseX;
      curY = mouseY;
      cursor.style.opacity = '1';
    }
    const target = e.target.closest('[data-cursor]');
    if (target) {
      label.textContent = target.getAttribute('data-cursor');
      cursor.classList.add('has-label');
    } else {
      cursor.classList.remove('has-label');
    }
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    visible = false;
  });

  function renderCursor() {
    curX += (mouseX - curX) * 0.22;
    curY += (mouseY - curY) * 0.22;
    cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
}

/* =========================================================================
   7. THEME TOGGLE & EXPERIENCE FILTER
========================================================================= */
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  try { localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light'); } catch (e) {}
  showToast(isDark ? 'Velvet Noir (Dark) activated' : 'Editorial Pearl (Light) activated');
}

function initTheme() {
  try {
    if (localStorage.getItem(THEME_STORAGE_KEY) === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
}

function toggleMobileMenu() { document.getElementById('mobile-menu').classList.toggle('hidden'); }
function closeMobileMenu() { document.getElementById('mobile-menu').classList.add('hidden'); }

function filterExperience(mode) {
  activeExpFilter = mode;
  document.querySelectorAll('.exp-filter-btn').forEach(btn => {
    const active = btn.dataset.expFilter === mode;
    btn.classList.toggle('text-white', active);
    btn.classList.toggle('dark:text-noir-bg', active);
    btn.classList.toggle('text-pearl-muted', !active);
    btn.classList.toggle('dark:text-noir-muted', !active);
  });

  const workBlock = document.getElementById('timeline-work-block');
  const acadBlock = document.getElementById('timeline-academic-block');
  if (workBlock) workBlock.classList.toggle('hidden', mode === 'academic');
  if (acadBlock) acadBlock.classList.toggle('hidden', mode === 'work');

  positionSlidingPill('exp-filter-bar', 'exp-filter-pill', `button[data-exp-filter="${mode}"]`);
}

/* =========================================================================
   8. PROJECTS RENDERING, FILTERING & CASE STUDY PAGE
========================================================================= */
function buildProjectCardHTML(project) {
  return `
    <article
      onclick="openCaseStudy('${project.id}')"
      data-cursor="VIEW"
      class="bento-card glass-surface zoom-frame group cursor-pointer rounded-[1.8rem] overflow-hidden flex flex-col"
    >
      <div class="h-44 overflow-hidden">
        ${project.renderThumb()}
      </div>
      <div class="p-6 flex-grow flex flex-col justify-between space-y-5 relative z-10">
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="font-mono text-[10px] uppercase tracking-wider text-wine dark:text-wine-rose font-semibold">${project.categoryLabel}</span>
            <span class="font-mono text-[10px] text-pearl-muted dark:text-noir-muted truncate">${project.timeline.split('•')[0].trim()}</span>
          </div>
          <h3 class="font-display text-xl font-bold tracking-tight leading-snug group-hover:text-wine dark:group-hover:text-wine-rose transition-colors">
            ${project.title}
          </h3>
          <p class="text-xs sm:text-sm text-pearl-muted dark:text-noir-muted leading-relaxed">
            ${project.shortDesc}
          </p>
        </div>
        <div class="space-y-4">
          <div class="flex flex-wrap gap-1.5">
            ${project.tools.map(t => `<span class="font-mono text-[10px] px-2.5 py-1 rounded-full bg-pearl-soft dark:bg-white/[0.06] border border-pearl-border dark:border-white/10">${t}</span>`).join('')}
          </div>
          <div class="pt-3 border-t border-pearl-border dark:border-white/10 flex items-center justify-between">
            <span class="text-xs font-semibold text-wine dark:text-wine-rose group-hover:underline">Read Case Study &rarr;</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedWorks() {
  const container = document.getElementById('featured-works-grid');
  if (!container) return;
  const featured = ['zibeline-journals', 'rekasawang-web', 'laragigs-laravel']
    .map(id => projectsData.find(p => p.id === id))
    .filter(Boolean);
  container.innerHTML = featured.map(buildProjectCardHTML).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const list = activeProjectFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeProjectFilter);
  grid.innerHTML = list.map(buildProjectCardHTML).join('');
  bindBentoInteractions();
}

function filterProjects(category) {
  activeProjectFilter = category;
  document.querySelectorAll('.project-filter-btn').forEach(btn => {
    const active = btn.dataset.projectFilter === category;
    btn.classList.toggle('text-white', active);
    btn.classList.toggle('dark:text-noir-bg', active);
    btn.classList.toggle('text-pearl-muted', !active);
    btn.classList.toggle('dark:text-noir-muted', !active);
  });
  renderProjects();
  positionSlidingPill('project-filter-bar', 'project-filter-pill', `button[data-project-filter="${category}"]`);
}

function openCaseStudy(projectId, skipHashUpdate = false) {
  const idx = projectsData.findIndex(p => p.id === projectId);
  const project = idx >= 0 ? projectsData[idx] : projectsData[0];
  const prevProject = projectsData[(idx - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(idx + 1) % projectsData.length];
  currentCaseStudyId = project.id;

  document.getElementById('cs-breadcrumb-title').textContent = project.title;

  document.getElementById('cs-switcher-pills').innerHTML = projectsData.map(p => `
    <button
      onclick="openCaseStudy('${p.id}')"
      class="font-mono text-[10px] px-3 py-1.5 rounded-full font-semibold transition-all ${
        p.id === project.id
          ? 'bg-wine text-white dark:bg-wine-rose dark:text-noir-bg'
          : 'glass-surface text-pearl-muted dark:text-noir-muted hover:border-wine dark:hover:border-wine-rose'
      }"
    >
      ${p.shortLabel}
    </button>
  `).join('');

  document.getElementById('casestudy-content').innerHTML = `
    <div class="rounded-[2.2rem] bg-gradient-to-br ${project.heroGradient} p-7 sm:p-11 text-white space-y-4 shadow-xl border border-white/10">
      <span class="inline-block font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-champagne-dark">
        ${project.categoryLabel} Case Study
      </span>
      <h1 class="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.08]">${project.title}</h1>
      <p class="text-sm sm:text-base text-white/80 max-w-3xl">${project.subtitle}</p>
      <div class="flex flex-wrap gap-2 pt-2">
        ${project.tools.map(t => `<span class="font-mono text-[10px] px-3 py-1 rounded-full bg-white/15">${t}</span>`).join('')}
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="glass-surface rounded-2xl p-5">
        <p class="font-mono text-[10px] uppercase tracking-wider text-pearl-muted dark:text-noir-muted">Role</p>
        <p class="text-sm font-bold mt-1">${project.role}</p>
      </div>
      <div class="glass-surface rounded-2xl p-5">
        <p class="font-mono text-[10px] uppercase tracking-wider text-pearl-muted dark:text-noir-muted">Timeline</p>
        <p class="text-sm font-bold mt-1">${project.timeline}</p>
      </div>
      <div class="glass-surface rounded-2xl p-5">
        <p class="font-mono text-[10px] uppercase tracking-wider text-pearl-muted dark:text-noir-muted">Stack</p>
        <p class="text-sm font-bold text-wine dark:text-wine-rose mt-1">${project.tools.join(' • ')}</p>
      </div>
    </div>

    <div class="space-y-3">
      <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-wine dark:text-wine-rose font-semibold">Interactive Visual Preview</p>
      ${project.renderShowcase()}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      <div class="lg:col-span-7 flex flex-col gap-6">
        <div class="glass-surface rounded-3xl p-7 space-y-2.5 flex-1">
          <h2 class="font-display text-2xl font-bold tracking-tight">The Challenge</h2>
          <p class="text-sm sm:text-base text-pearl-muted dark:text-noir-muted leading-relaxed">${project.challenge}</p>
        </div>
        <div class="glass-surface rounded-3xl p-7 space-y-2.5 flex-1">
          <h2 class="font-display text-2xl font-bold tracking-tight">Solution &amp; Execution</h2>
          <p class="text-sm sm:text-base text-pearl-muted dark:text-noir-muted leading-relaxed">${project.solution}</p>
        </div>
      </div>

      <div class="lg:col-span-5 flex flex-col gap-6">
        <div class="glass-surface rounded-3xl p-7 space-y-4 flex-1">
          <h2 class="font-display text-2xl font-bold tracking-tight">HCI Design Principles Applied</h2>
          <ul class="space-y-3.5">
            ${project.hciPrinciples.map(h => `
              <li class="space-y-0.5">
                <span class="font-mono text-[10px] uppercase tracking-widest text-wine dark:text-wine-rose font-semibold">${h.name}</span>
                <p class="text-xs sm:text-sm text-pearl-muted dark:text-noir-muted leading-relaxed">${h.detail}</p>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="glass-surface rounded-3xl p-6 flex items-center justify-between gap-4 shrink-0">
          <div>
            <p class="font-display text-xl font-bold tracking-tight">Repository</p>
            <p class="font-mono text-[10px] text-pearl-muted dark:text-noir-muted">github.com/ddniasofea</p>
          </div>
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" data-cursor="OPEN" class="px-4 py-2.5 rounded-full bg-pearl-ink text-pearl-bg dark:bg-noir-ink dark:text-noir-bg text-xs font-semibold hover:bg-wine dark:hover:bg-wine-rose transition-colors">
            Open &nearr;
          </a>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-champagne dark:text-champagne-dark font-semibold">Key Outcomes &amp; Impact</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        ${project.impactMetrics.map(m => `
          <div class="bento-card glass-surface rounded-3xl p-6 text-center">
            <p class="font-display text-4xl font-bold tracking-tight text-wine dark:text-wine-rose">${m.value}</p>
            <p class="font-mono text-[11px] text-pearl-muted dark:text-noir-muted mt-1.5">${m.label}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="pt-6 border-t border-pearl-border dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
      <button onclick="openCaseStudy('${prevProject.id}')" class="px-5 py-3 rounded-full text-xs font-semibold glass-surface hover:border-wine dark:hover:border-wine-rose transition-all">
        &larr; ${prevProject.shortLabel}
      </button>
      <button onclick="openCaseStudy('${nextProject.id}')" class="px-5 py-3 rounded-full text-xs font-semibold bg-wine dark:bg-wine-rose text-white dark:text-noir-bg hover:opacity-90 transition-all">
        Next: ${nextProject.shortLabel} &rarr;
      </button>
    </div>
  `;

  navigateTo('casestudy', skipHashUpdate);
}

/* =========================================================================
   9. CREATIVE PHOTO & VIDEO GALLERY + FULL-SCREEN LIGHTBOX
========================================================================= */
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  const list = activeGalleryFilter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeGalleryFilter);

  grid.innerHTML = list.map(item => `
    <div
      onclick="openLightbox('${item.id}')"
      data-cursor="${item.type === 'video' ? 'PLAY' : 'VIEW'}"
      class="bento-card glass-surface zoom-frame group cursor-pointer relative rounded-[1.8rem] overflow-hidden aspect-[3/4] bg-[#161318]"
    >
      ${renderGalleryVisual(item, false)}

      <div class="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5">
        <span class="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-white">
          ${item.categoryLabel}
        </span>
        ${item.type === 'video' ? '<span class="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-wine/85 text-white">REEL</span>' : ''}
      </div>

      <div class="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 text-white pointer-events-none">
        <h3 class="font-display text-xl font-bold tracking-tight leading-tight">${item.title}</h3>
        <p class="font-mono text-[10px] text-champagne-dark uppercase tracking-wider mt-1">${item.role}</p>
      </div>
    </div>
  `).join('');

  bindBentoInteractions();
}

function filterGallery(category) {
  activeGalleryFilter = category;
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    const active = btn.dataset.galleryFilter === category;
    btn.classList.toggle('text-white', active);
    btn.classList.toggle('dark:text-noir-bg', active);
    btn.classList.toggle('text-pearl-muted', !active);
    btn.classList.toggle('dark:text-noir-muted', !active);
  });
  renderGallery();
  positionSlidingPill('gallery-filter-bar', 'gallery-filter-pill', `button[data-gallery-filter="${category}"]`);
}

function openLightbox(itemId) {
  const filtered = activeGalleryFilter === 'all'
    ? galleryData.slice()
    : galleryData.filter(item => item.category === activeGalleryFilter);

  const idxInFiltered = filtered.findIndex(p => p.id === itemId);
  if (idxInFiltered >= 0) {
    lightboxItems = filtered;
    lightboxIndex = idxInFiltered;
  } else {
    lightboxItems = galleryData.slice();
    lightboxIndex = Math.max(0, lightboxItems.findIndex(p => p.id === itemId));
  }

  syncLightbox();
  document.getElementById('lightbox-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function syncLightbox() {
  const item = lightboxItems[lightboxIndex];
  if (!item) return;
  document.getElementById('lb-category').textContent = item.categoryLabel;
  document.getElementById('lb-title').textContent = item.title;
  document.getElementById('lb-visual').innerHTML = renderGalleryVisual(item, true);
  document.getElementById('lb-caption').textContent = item.caption;
  document.getElementById('lb-role').textContent = item.role;
  document.getElementById('lb-gear').textContent = item.gear;
}

function stepLightbox(dir) {
  if (!lightboxItems.length) return;
  lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
  syncLightbox();
}

function closeLightbox(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('lightbox-modal').classList.remove('open');
  document.getElementById('lb-visual').innerHTML = '';
  document.body.style.overflow = '';
}

/* =========================================================================
   10. RESUME MODAL, CLIPBOARD COPY, TOAST & CONTACT VALIDATION
========================================================================= */
function openResumeModal() {
  document.getElementById('resume-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('resume-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function copyToClipboard(text, msg) {
  const temp = document.createElement('textarea');
  temp.value = text;
  temp.style.position = 'fixed';
  temp.style.opacity = '0';
  document.body.appendChild(temp);
  temp.select();
  try {
    document.execCommand('copy');
    showToast(msg);
  } catch (err) {
    showToast(text);
  }
  document.body.removeChild(temp);
}

let toastTimer = null;
function showToast(msg) {
  const box = document.getElementById('toast-box');
  document.getElementById('toast-msg').textContent = msg;
  box.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => box.classList.remove('show'), 3000);
}

function selectInquiryPill(val) {
  document.getElementById('form-inquiry').value = val;
  document.querySelectorAll('.inquiry-pill').forEach(btn => {
    const active = btn.dataset.inquiry === val;
    if (active) {
      btn.className = 'inquiry-pill px-4 py-2 rounded-full text-xs font-semibold border transition-all bg-wine text-white border-wine dark:bg-wine-rose dark:text-noir-bg dark:border-wine-rose';
    } else {
      btn.className = 'inquiry-pill px-4 py-2 rounded-full text-xs font-semibold border transition-all bg-pearl-soft dark:bg-white/[0.04] border-pearl-border dark:border-white/10 text-pearl-muted dark:text-noir-muted hover:border-wine dark:hover:border-wine-rose';
    }
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const nameEl = document.getElementById('form-name');
  const emailEl = document.getElementById('form-email');
  const emailBadge = document.getElementById('email-live-badge');
  const msgEl = document.getElementById('form-message');
  const counter = document.getElementById('char-counter');

  msgEl.addEventListener('input', () => {
    counter.textContent = `${msgEl.value.length} / 500`;
    if (msgEl.value.trim().length >= 10) document.getElementById('error-message').classList.add('hidden');
  });

  nameEl.addEventListener('input', () => {
    if (nameEl.value.trim().length >= 2) document.getElementById('error-name').classList.add('hidden');
  });

  emailEl.addEventListener('input', () => {
    const val = emailEl.value.trim();
    if (!val) { emailBadge.classList.add('hidden'); return; }
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    emailBadge.classList.remove('hidden');
    emailBadge.textContent = ok ? 'VALID' : 'CHECK FORMAT';
    emailBadge.className = ok
      ? 'font-mono text-[10px] font-semibold text-wine dark:text-wine-rose'
      : 'font-mono text-[10px] font-semibold text-champagne dark:text-champagne-dark';
    if (ok) document.getElementById('error-email').classList.add('hidden');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    if (nameEl.value.trim().length < 2) { document.getElementById('error-name').classList.remove('hidden'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) { document.getElementById('error-email').classList.remove('hidden'); valid = false; }
    if (msgEl.value.trim().length < 10) { document.getElementById('error-message').classList.remove('hidden'); valid = false; }

    if (!valid) { showToast('Please check the highlighted fields.'); return; }

    document.getElementById('success-sender-name').textContent = nameEl.value.trim();
    document.getElementById('success-inquiry-type').textContent = document.getElementById('form-inquiry').value;
    form.classList.add('hidden');
    document.getElementById('form-success').classList.remove('hidden');
    showToast('Message sent successfully!');
  });
}

function resetContactForm() {
  const form = document.getElementById('contact-form');
  form.reset();
  selectInquiryPill('Internship Opportunity');
  document.getElementById('char-counter').textContent = '0 / 500';
  document.getElementById('email-live-badge').classList.add('hidden');
  document.getElementById('form-success').classList.add('hidden');
  form.classList.remove('hidden');
}

/* =========================================================================
   11. HASH SYNC, SCROLL & BOOTSTRAP
========================================================================= */
function syncFromHash() {
  const raw = (window.location.hash || '#home').replace(/^#/, '');
  if (raw.startsWith('casestudy/')) {
    const id = raw.split('/')[1];
    openCaseStudy(id || currentCaseStudyId, true);
  } else if (raw === 'casestudy') {
    openCaseStudy(currentCaseStudyId, true);
  } else if (VALID_PAGES.includes(raw)) {
    navigateTo(raw, true);
  } else {
    navigateTo('home', true);
  }
}

window.addEventListener('hashchange', syncFromHash);

window.addEventListener('scroll', () => {
  const top = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const pct = height > 0 ? (top / height) * 100 : 0;
  document.getElementById('scroll-progress').style.width = `${pct}%`;
  document.getElementById('back-to-top').classList.toggle('show', top > 260);
});

window.addEventListener('resize', updateAllIndicators);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeResumeModal();
    closeLightbox();
  }
  if (document.getElementById('lightbox-modal').classList.contains('open')) {
    if (e.key === 'ArrowRight') stepLightbox(1);
    if (e.key === 'ArrowLeft') stepLightbox(-1);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCyclingRole();
  initCustomCursor();
  renderFeaturedWorks();
  filterExperience('all');
  filterProjects('all');
  filterGallery('all');
  setupContactForm();
  syncFromHash();
  setTimeout(() => {
    updateAllIndicators();
    animateMetricCounters();
    bindBentoInteractions();
  }, 140);
});

/* =========================================================================
   12. INTERACTIVE UPGRADE PACK
   (DS. Preloader, Ctrl+K Command Palette, Magnetic Buttons,
    Case Study Desktop/Mobile Toggle & Live Melaka MYT Clock)
========================================================================= */
(function initPortfolioEnhancements() {
  // 1. Inject dedicated CSS for Preloader, Command Palette, Magnetic & Mobile Frame
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    /* Preloader Curtain */
    #ds-preloader {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 18px;
      background: #FBF9F6;
      color: #171514;
      transition: transform 0.7s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.45s ease;
    }
    html.dark #ds-preloader {
      background: #0C0A0F;
      color: #F5F2EE;
    }
    #ds-preloader.hide-curtain {
      transform: translateY(-100%);
      pointer-events: none;
    }
    .ds-loader-bar {
      width: 140px;
      height: 2.5px;
      border-radius: 999px;
      overflow: hidden;
      background: rgba(139, 46, 74, 0.16);
    }
    html.dark .ds-loader-bar {
      background: rgba(212, 138, 158, 0.18);
    }
    .ds-loader-fill {
      height: 100%;
      width: 0%;
      border-radius: 999px;
      background: linear-gradient(90deg, #8B2E4A, #B08D57);
      animation: dsLoadFill 0.72s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    html.dark .ds-loader-fill {
      background: linear-gradient(90deg, #D48A9E, #D6B886);
    }
    @keyframes dsLoadFill {
      from { width: 0%; }
      to { width: 100%; }
    }

    /* Command Palette Modal */
    #cmd-palette {
      position: fixed;
      inset: 0;
      z-index: 60;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 12vh 16px 24px;
      background: rgba(10, 8, 13, 0.62);
      backdrop-filter: blur(8px);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.22s ease;
    }
    #cmd-palette.open {
      opacity: 1;
      pointer-events: auto;
    }
    #cmd-palette .cmd-box {
      width: 100%;
      max-width: 560px;
      border-radius: 1.6rem;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.94);
      border: 1px solid rgba(23, 21, 20, 0.12);
      box-shadow: 0 30px 70px -20px rgba(0, 0, 0, 0.35);
      transform: translateY(-10px) scale(0.98);
      transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1);
    }
    html.dark #cmd-palette .cmd-box {
      background: rgba(20, 18, 24, 0.96);
      border-color: rgba(255, 255, 255, 0.12);
      box-shadow: 0 32px 80px -20px rgba(0, 0, 0, 0.8);
    }
    #cmd-palette.open .cmd-box {
      transform: translateY(0) scale(1);
    }
    .cmd-item.selected {
      background: rgba(139, 46, 74, 0.1);
      color: #8B2E4A;
    }
    html.dark .cmd-item.selected {
      background: rgba(212, 138, 158, 0.16);
      color: #D48A9E;
    }

    /* Magnetic Button Spring Transition */
    .magnetic-btn {
      transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
      will-change: transform;
    }

    /* Case Study Responsive Preview Toggle */
    .cs-preview-frame {
      transition: max-width 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-radius 0.35s ease;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }
    .cs-preview-frame.cs-mobile-mode {
      max-width: 380px !important;
      border-radius: 2.2rem !important;
      box-shadow: 0 24px 60px -15px rgba(0, 0, 0, 0.55), 0 0 0 6px rgba(139, 46, 74, 0.25);
    }
    .cs-preview-frame.cs-mobile-mode .grid {
      grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    }
    .cs-preview-frame.cs-mobile-mode [class*="sm:col-span-2"] {
      grid-column: span 1 / span 1 !important;
    }

    @media print {
      #ds-preloader, #cmd-palette, #cmd-trigger { display: none !important; }
    }
    @media (prefers-reduced-motion: reduce) {
      #ds-preloader { display: none !important; }
    }
  `;
  document.head.appendChild(styleEl);

  // 2. DS. Opening Curtain Preloader
  function mountPreloader() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (document.getElementById('ds-preloader')) return;

    const loader = document.createElement('div');
    loader.id = 'ds-preloader';
    loader.setAttribute('aria-hidden', 'true');
    loader.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="width:46px;height:46px;border-radius:999px;background:#8B2E4A;color:#fff;font-family:'Outfit',sans-serif;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center;letter-spacing:-0.02em;">DS</span>
        <span style="font-family:'Outfit',sans-serif;font-weight:700;font-size:26px;letter-spacing:-0.03em;">Dania Sofea<span style="color:#8B2E4A;">.</span></span>
      </div>
      <div class="ds-loader-bar"><div class="ds-loader-fill"></div></div>
      <span style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.24em;text-transform:uppercase;opacity:0.55;">Digital Portfolio &bull; 2026</span>
    `;
    document.body.appendChild(loader);

    setTimeout(() => {
      loader.classList.add('hide-curtain');
      setTimeout(() => loader.remove(), 750);
    }, 820);
  }

  // 3. Command Palette (Ctrl + K / Cmd + K)
  let cmdSelectedIndex = 0;
  let cmdFiltered = [];

  function getCommandItems() {
    const pages = [
      { group: 'Pages', label: 'Home', hint: '01', run: () => navigateTo('home') },
      { group: 'Pages', label: 'About & Personal Qualities', hint: '02', run: () => navigateTo('about') },
      { group: 'Pages', label: 'Experience & Academic History', hint: '03', run: () => navigateTo('experience') },
      { group: 'Pages', label: 'Projects Showcase', hint: '04', run: () => navigateTo('projects') },
      { group: 'Pages', label: 'Creative Gallery & Lookbook', hint: '06', run: () => navigateTo('gallery') },
      { group: 'Pages', label: 'Contact & Inquiry Form', hint: '07', run: () => navigateTo('contact') }
    ];

    const projectCmds = (typeof projectsData !== 'undefined' ? projectsData : []).map(p => ({
      group: 'Case Studies',
      label: p.title,
      hint: p.categoryLabel,
      run: () => openCaseStudy(p.id)
    }));

    const quickActions = [
      { group: 'Quick Actions', label: 'Watch Handi Roti Video Reels', hint: 'Gallery', run: () => { navigateTo('gallery'); setTimeout(() => filterGallery('video'), 80); } },
      { group: 'Quick Actions', label: 'View Apparel Modeling Lookbook', hint: 'Gallery', run: () => { navigateTo('gallery'); setTimeout(() => filterGallery('modeling'), 80); } },
      { group: 'Quick Actions', label: 'View Canon G7 X Photography', hint: 'Gallery', run: () => { navigateTo('gallery'); setTimeout(() => filterGallery('photography'), 80); } },
      { group: 'Quick Actions', label: 'Open Printable Resume / CV', hint: 'PDF', run: () => openResumeModal() },
      { group: 'Quick Actions', label: 'Toggle Light / Dark Theme', hint: 'Theme', run: () => toggleTheme() },
      { group: 'Quick Actions', label: 'Copy Email (ddaniasofeaaa@email.com)', hint: 'Copy', run: () => copyToClipboard('ddaniasofeaaa@email.com', 'Email copied to clipboard!') }
    ];

    return [...quickActions, ...pages, ...projectCmds];
  }

  function renderCmdList(query = '') {
    const listEl = document.getElementById('cmd-list');
    if (!listEl) return;
    const q = query.trim().toLowerCase();
    const all = getCommandItems();
    cmdFiltered = q
      ? all.filter(item => item.label.toLowerCase().includes(q) || item.group.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q))
      : all;

    cmdSelectedIndex = 0;

    if (!cmdFiltered.length) {
      listEl.innerHTML = `<div class="px-5 py-8 text-center text-xs text-pearl-muted dark:text-noir-muted font-mono">No matching page, project, or action found.</div>`;
      return;
    }

    let lastGroup = '';
    listEl.innerHTML = cmdFiltered.map((item, idx) => {
      const header = item.group !== lastGroup
        ? `<p class="px-4 pt-3 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-pearl-muted dark:text-noir-muted">${item.group}</p>`
        : '';
      lastGroup = item.group;
      return `
        ${header}
        <button
          type="button"
          data-cmd-idx="${idx}"
          class="cmd-item ${idx === 0 ? 'selected' : ''} w-full text-left px-4 py-2.5 rounded-xl flex items-center justify-between gap-3 text-xs sm:text-sm font-medium transition-colors hover:bg-wine/10 dark:hover:bg-wine-rose/15"
        >
          <span class="truncate">${item.label}</span>
          <span class="font-mono text-[10px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 opacity-75 shrink-0">${item.hint}</span>
        </button>
      `;
    }).join('');

    listEl.querySelectorAll('.cmd-item').forEach(btn => {
      btn.addEventListener('click', () => executeCmd(parseInt(btn.dataset.cmdIdx, 10)));
      btn.addEventListener('mouseenter', () => {
        cmdSelectedIndex = parseInt(btn.dataset.cmdIdx, 10);
        highlightCmdSelection();
      });
    });
  }

  function highlightCmdSelection() {
    document.querySelectorAll('#cmd-list .cmd-item').forEach((el, idx) => {
      const active = idx === cmdSelectedIndex;
      el.classList.toggle('selected', active);
      if (active) el.scrollIntoView({ block: 'nearest' });
    });
  }

  function executeCmd(idx) {
    const item = cmdFiltered[idx];
    if (!item) return;
    closeCommandPalette();
    item.run();
  }

  function openCommandPalette() {
    const modal = document.getElementById('cmd-palette');
    const input = document.getElementById('cmd-input');
    if (!modal || !input) return;
    input.value = '';
    renderCmdList('');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 40);
  }

  function closeCommandPalette() {
    const modal = document.getElementById('cmd-palette');
    if (!modal || !modal.classList.contains('open')) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function mountCommandPalette() {
    // Add trigger button next to Theme Toggle in Header
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn && !document.getElementById('cmd-trigger')) {
      const trigger = document.createElement('button');
      trigger.id = 'cmd-trigger';
      trigger.type = 'button';
      trigger.setAttribute('aria-label', 'Quick Command Search');
      trigger.setAttribute('title', 'Quick Search (Ctrl + K)');
      trigger.className = 'magnetic-btn inline-flex items-center gap-2 px-3 py-2 rounded-full border border-pearl-border dark:border-white/10 bg-pearl-soft/70 dark:bg-white/[0.05] text-pearl-muted dark:text-noir-muted hover:border-wine dark:hover:border-wine-rose hover:text-wine dark:hover:text-wine-rose transition-all text-xs';
      trigger.innerHTML = `
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span class="hidden md:inline font-mono text-[10px] tracking-wider">Ctrl K</span>
      `;
      trigger.addEventListener('click', openCommandPalette);
      themeBtn.parentNode.insertBefore(trigger, themeBtn);
    }

    // Create Command Palette Overlay
    if (!document.getElementById('cmd-palette')) {
      const palette = document.createElement('div');
      palette.id = 'cmd-palette';
      palette.innerHTML = `
        <div class="cmd-box" role="dialog" aria-modal="true" aria-label="Quick Navigation Menu">
          <div class="flex items-center gap-3 px-5 py-4 border-b border-pearl-border dark:border-white/10">
            <svg class="w-4 h-4 text-wine dark:text-wine-rose shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input id="cmd-input" type="text" placeholder="Search pages, projects, reels, or actions..." autocomplete="off" class="w-full bg-transparent text-sm focus:outline-none placeholder:text-pearl-muted/70 dark:placeholder:text-noir-muted/70" />
            <kbd class="font-mono text-[10px] px-2 py-0.5 rounded-md border border-pearl-border dark:border-white/15 opacity-65">ESC</kbd>
          </div>
          <div id="cmd-list" class="max-h-[55vh] overflow-y-auto p-2 space-y-0.5"></div>
          <div class="px-5 py-2.5 border-t border-pearl-border dark:border-white/10 flex items-center justify-between font-mono text-[10px] text-pearl-muted dark:text-noir-muted">
            <span>&uarr;&darr; Navigate &middot; Enter to Open</span>
            <span>HCI Quick Command</span>
          </div>
        </div>
      `;
      palette.addEventListener('click', (e) => {
        if (e.target === palette) closeCommandPalette();
      });
      document.body.appendChild(palette);

      const input = document.getElementById('cmd-input');
      input.addEventListener('input', () => renderCmdList(input.value));
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const modal = document.getElementById('cmd-palette');
        if (modal && modal.classList.contains('open')) closeCommandPalette();
        else openCommandPalette();
        return;
      }

      const modal = document.getElementById('cmd-palette');
      if (!modal || !modal.classList.contains('open')) return;

      if (e.key === 'Escape') {
        closeCommandPalette();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (cmdFiltered.length) {
          cmdSelectedIndex = (cmdSelectedIndex + 1) % cmdFiltered.length;
          highlightCmdSelection();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (cmdFiltered.length) {
          cmdSelectedIndex = (cmdSelectedIndex - 1 + cmdFiltered.length) % cmdFiltered.length;
          highlightCmdSelection();
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executeCmd(cmdSelectedIndex);
      }
    });
  }

  // 4. Magnetic Hover Effect on Primary Buttons
  function bindMagneticButtons() {
    const isFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const selectors = [
      '#cmd-trigger',
      '#theme-toggle',
      'header button[onclick*="openResumeModal"]',
      '#page-home button[onclick*="navigateTo(\'projects\')"]',
      '#page-home button[onclick*="openResumeModal"]',
      '#contact-form button[type="submit"]',
      '#casestudy-content button[onclick*="openCaseStudy"]'
    ];

    document.querySelectorAll(selectors.join(',')).forEach(btn => {
      if (btn.dataset.magneticBound === '1') return;
      btn.dataset.magneticBound = '1';
      btn.classList.add('magnetic-btn');

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
        btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate3d(0px, 0px, 0)';
      });
    });
  }

  // 5. Case Study Desktop / Mobile Interactive Preview Toggle
  function enhanceCaseStudyPreview() {
    const container = document.getElementById('casestudy-content');
    if (!container) return;

    const heading = Array.from(container.querySelectorAll('p')).find(
      p => p.textContent.trim() === 'Interactive Visual Preview'
    );
    if (!heading || heading.dataset.toggleAdded === '1') return;
    heading.dataset.toggleAdded = '1';

    const previewBox = heading.nextElementSibling;
    if (!previewBox) return;
    previewBox.classList.add('cs-preview-frame');

    const bar = document.createElement('div');
    bar.className = 'flex flex-wrap items-center justify-between gap-3';
    heading.parentNode.insertBefore(bar, heading);
    bar.appendChild(heading);

    const toggleWrap = document.createElement('div');
    toggleWrap.className = 'inline-flex items-center gap-1 p-1 rounded-full glass-surface';
    toggleWrap.innerHTML = `
      <button type="button" data-vp="desktop" class="vp-btn px-3 py-1 rounded-full font-mono text-[10px] font-semibold bg-wine dark:bg-wine-rose text-white dark:text-noir-bg transition-all">Desktop</button>
      <button type="button" data-vp="mobile" class="vp-btn px-3 py-1 rounded-full font-mono text-[10px] font-semibold text-pearl-muted dark:text-noir-muted transition-all">Mobile</button>
    `;
    bar.appendChild(toggleWrap);

    toggleWrap.querySelectorAll('.vp-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isMobile = btn.dataset.vp === 'mobile';
        previewBox.classList.toggle('cs-mobile-mode', isMobile);
        toggleWrap.querySelectorAll('.vp-btn').forEach(b => {
          const active = b === btn;
          b.className = active
            ? 'vp-btn px-3 py-1 rounded-full font-mono text-[10px] font-semibold bg-wine dark:bg-wine-rose text-white dark:text-noir-bg transition-all'
            : 'vp-btn px-3 py-1 rounded-full font-mono text-[10px] font-semibold text-pearl-muted dark:text-noir-muted transition-all';
        });
      });
    });
  }

  // 6. Live Melaka (MYT) Digital Clock in Hero Availability Pill
  function initLiveMelakaClock() {
    const pillSpan = document.querySelector('#page-home .inline-flex.items-center.gap-2\\.5 span.font-mono');
    if (!pillSpan || document.getElementById('live-myt-clock')) return;

    const clockEl = document.createElement('span');
    clockEl.id = 'live-myt-clock';
    clockEl.className = 'ml-2 pl-2 border-l border-pearl-border dark:border-white/15 text-wine dark:text-wine-rose font-semibold';
    pillSpan.appendChild(clockEl);

    function updateClock() {
      try {
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat('en-MY', {
          timeZone: 'Asia/Kuala_Lumpur',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(now);
        clockEl.textContent = `${timeStr} MYT`;
      } catch (e) {}
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // Hook openCaseStudy so Desktop/Mobile toggle & Magnetic buttons attach automatically
  if (typeof openCaseStudy === 'function') {
    const originalOpenCaseStudy = openCaseStudy;
    openCaseStudy = function(projectId, skipHashUpdate = false) {
      originalOpenCaseStudy(projectId, skipHashUpdate);
      enhanceCaseStudyPreview();
      bindMagneticButtons();
    };
  }

  // Boot everything cleanly
  function bootEnhancements() {
    mountPreloader();
    mountCommandPalette();
    bindMagneticButtons();
    enhanceCaseStudyPreview();
    initLiveMelakaClock();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootEnhancements);
  } else {
    bootEnhancements();
  }
})();