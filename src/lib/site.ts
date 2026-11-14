/**
 * Central content + configuration for the IIM Marketers site.
 * Copy is carried over from the original WordPress site so it can be edited in one place.
 */

export const siteConfig = {
  name: "IIM Marketers",
  shortName: "IIM Marketers",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://digitalmarketing.iimmarketers.com",
  title: "IIM Marketers — Performance-Driven Digital Marketing Agency in Bengaluru",
  description:
    "5-star rated digital marketing agency founded by IIT-IIM alumni. Guaranteed lead generation, SEO, PPC, social media, video production and AI consulting for 150+ brands over 9+ years.",
  tagline: "We triple your business in 6 months.",
  email: "hello@iimmarketers.com",
  phones: {
    primary: { label: "+91 62913 92772", href: "tel:+916291392772" },
    secondary: { label: "+91 99367 84019", href: "tel:+919936784019" },
  },
  footerBlurb:
    "At IIM Marketers, we redefine digital success through our comprehensive digital marketing services. Choose us for an all-in-one business solution that encompasses IT, Marketing, AI-based Automation and Security — propelling your business to new heights in the digital realm.",
  affiliates: [
    { region: "United Kingdom", name: "Dukes for You, Brighton & Hove" },
    { region: "India", name: "Estrelligent Technology Pvt Ltd" },
    { region: "Netherlands", name: "Sound Board" },
  ],
} as const

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
] as const

export const heroHighlights = [
  "Trusted by 150+ satisfied brands",
  "Performance-driven digital marketing solutions",
  "ROI-centric experts you can count on",
  "Innovative strategies to maximise campaign success",
]

export const stats = [
  { value: 9, suffix: "+", label: "Years of proven track record" },
  { value: 2, suffix: " lac", label: "Leads generated" },
  { value: 24, suffix: " hrs", label: "Minimum turnaround time" },
  { value: 150, suffix: "+", label: "Projects completed" },
]

export const capabilities = [
  { title: "SEO", icon: "/images/icons/seo.webp" },
  { title: "Website & App Development", icon: "/images/icons/web.webp" },
  { title: "Motion Graphics", icon: "/images/icons/motion.webp" },
  { title: "Lead Generation", icon: "/images/icons/leads.webp" },
  { title: "Stunning Videos", icon: "/images/icons/video.webp" },
  { title: "AI Consulting", icon: "/images/icons/ai.webp" },
]

export const coreServices = [
  {
    title: "Social Media Marketing",
    subtitle: "with Advanced Video Strategy",
    icon: "Megaphone",
    description:
      "Build brand awareness and foster engagement across Instagram, Facebook, LinkedIn and more — powered by scroll-stopping video.",
  },
  {
    title: "Search Engine Optimization",
    subtitle: "On-page, off-page & technical",
    icon: "Search",
    description:
      "Enhance your website’s visibility on Google with on-page, off-page and technical SEO strategies that compound over time.",
  },
  {
    title: "Pay-Per-Click Advertising",
    subtitle: "Google, YouTube & paid social",
    icon: "MousePointerClick",
    description:
      "Drive instant traffic and leads through Google Ads, YouTube Ads and paid social campaigns tuned for cost-per-lead.",
  },
  {
    title: "Website Design & Development",
    subtitle: "Fast, mobile-first, SEO-ready",
    icon: "MonitorSmartphone",
    description:
      "We create fast, mobile-friendly and SEO-optimised websites that reflect your brand and drive conversions.",
  },
  {
    title: "Influencer & Video Marketing",
    subtitle: "Content that converts",
    icon: "Clapperboard",
    description:
      "We produce valuable, search-optimised content and creator collaborations that inform, engage and attract your ideal customers.",
  },
  {
    title: "Email Marketing & Automation",
    subtitle: "Nurture & retain",
    icon: "Mail",
    description:
      "Nurture leads and boost retention with high-converting email sequences and automation workflows.",
  },
  {
    title: "Brand Strategy & Design",
    subtitle: "Identity & positioning",
    icon: "Palette",
    description:
      "Craft a unique brand identity with logo design, visual branding and sharp market positioning.",
  },
  {
    title: "Analytics & Performance Tracking",
    subtitle: "Measure every move",
    icon: "ChartNoAxesCombined",
    description:
      "Data-driven insights and transparent reporting to optimise campaigns for maximum ROI.",
  },
] as const

export const solutions = [
  {
    number: "01",
    symbol: "Md",
    title: "Media Solutions",
    description:
      "Strategic media planning and data-driven execution for strong brand impact via social media.",
  },
  {
    number: "02",
    symbol: "Br",
    title: "Brand Solutions",
    description: "Build a brand that stands out with strategic identity and design.",
  },
  {
    number: "03",
    symbol: "Tc",
    title: "Tech Solutions",
    description:
      "Tech-driven solutions for seamless operations, including e-commerce website development.",
  },
  {
    number: "04",
    symbol: "Pr",
    title: "PR & Media Coverage",
    description: "Strengthening brand credibility with strategic PR and media coverage.",
  },
  {
    number: "05",
    symbol: "Fp",
    title: "Films & Photography",
    description:
      "A video production company creating compelling visuals that captivate and connect.",
  },
  {
    number: "06",
    symbol: "Rs",
    title: "Research Solutions",
    description:
      "Market research services delivering insights to drive strategic business decisions.",
  },
]

export const processSteps = [
  {
    title: "Analyse",
    description: "Our team of IIM graduates analyses your business, market and competitors.",
  },
  {
    title: "Strategise",
    description:
      "We create the right business strategy and positioning statement for your business.",
  },
  {
    title: "Review & Perfect",
    description: "We make revisions until you’re 100% satisfied with the plan and creatives.",
  },
  {
    title: "Deliver & Shine",
    description: "We launch campaigns that actually deliver your results — and keep optimising.",
  },
]

export const studioFeatures = [
  {
    title: "Innovative Branding & Marketing",
    description:
      "Creative branding solutions and impactful social media strategies that drive engagement, foster business growth and enhance your brand’s online presence.",
  },
  {
    title: "Tailored Strategies for Growth",
    description:
      "Customised strategies aligned with your brand’s vision. By leveraging data, creativity and market expertise, we build campaigns that deliver measurable results.",
  },
  {
    title: "Performance-Driven Insights",
    description:
      "We blend creative thinking with strategic planning to boost visibility, optimise campaigns and maximise long-term ROI.",
  },
]

export const socialGuarantees = [
  "Top-tier editing with precision cuts and seamless transitions",
  "Dynamic motion graphics and perfectly synced sound engineering",
  "Perfectly synced music & sound design",
  "Fast turnaround times and custom revisions",
  "A 100% satisfaction guarantee",
]

export const aboutFeatures = [
  { title: "Best quality support", icon: "Headset" },
  { title: "Money-back guarantee", icon: "BadgeIndianRupee" },
  { title: "Serve the best", icon: "Sparkles" },
  { title: "Trusted professionals", icon: "ShieldCheck" },
] as const

export const testimonials = [
  {
    name: "Michael Baxter",
    role: "Host of The ESG Show",
    image: "/images/testimonials/michael-baxter.webp",
    quote:
      "I had an outstanding experience with IIM Marketers, who helped us transform our lead generation and social media presence. Their lead generation strategy is nothing short of exceptional — highly targeted, results-driven and tailored to our business goals. We saw a significant increase in qualified leads, directly boosting our sales pipeline.",
  },
  {
    name: "Arunendu Chakraborty",
    role: "Channel Partner, Melbourne AUS",
    image: "/images/testimonials/arunendu-chakraborty.webp",
    quote:
      "Exceptional service! IIM Marketers transformed our digital presence with their complete marketing solutions. Their expertise in SEO skyrocketed our visibility, and the personalised approach to email marketing brought remarkable results. A dedicated team that delivers on their promises.",
  },
  {
    name: "Habib Reza",
    role: "Peak Studio",
    image: "/images/testimonials/habib-reza.webp",
    quote:
      "IIM Marketers has been a game-changer for our business! Their expertise in SEO has significantly boosted our online visibility, bringing in more organic traffic than ever before. Kudos to the team for their exceptional work!",
  },
  {
    name: "Peek Thakul",
    role: "ESG Discourse",
    image: "/images/testimonials/peek-thakul.webp",
    quote:
      "Their team demonstrated exceptional expertise in crafting a visually stunning and highly functional website and mobile app tailored to our needs. What truly sets IIM Marketers apart is their strategic approach — from SEO and social media to targeted campaigns, our online presence and engagement grew significantly.",
  },
  {
    name: "Kenny",
    role: "Marketing Head, Praxis",
    image: "/images/testimonials/kenny.webp",
    quote:
      "We’ve been working with IIM Marketers for a while now, and the results speak for themselves. Their PPC campaigns have been instrumental in driving targeted leads to our business. A reliable partner in our digital marketing journey.",
  },
]

export const caseStudies = [
  {
    client: "Apollo 24|7",
    result: "10,000 footfall in 3 months",
    metric: "10,000",
    metricLabel: "footfall",
    timeline: "3 months",
    brief: "Event promotion",
    detail: "Event promotion and on-ground lead generation campaign.",
    image: "/images/brand/hero-banner.webp",
    width: 1600,
    height: 800,
  },
  {
    client: "nalva",
    result: "100+ orders per day within 3 months",
    metric: "100+",
    metricLabel: "orders per day",
    timeline: "3 months",
    brief: "E-commerce launch",
    detail: "Profitable e-commerce launch for Vanitha Textiles — website, ads and content.",
    image: "/images/brand/team-banner.webp",
    width: 3780,
    height: 1890,
  },
]

export const clientLogos = [
  ...Array.from({ length: 8 }, (_, i) => `/images/clients/a${i + 1}.webp`),
  ...Array.from({ length: 15 }, (_, i) => `/images/clients/b${i + 1}.webp`),
]

export const studioPhotos = [
  { src: "/images/studio/s1.webp", alt: "The IIM Marketers team together", width: 1280, height: 960 },
  { src: "/images/studio/s2.webp", alt: "Team members at the IIM Marketers office", width: 1280, height: 960 },
  { src: "/images/studio/s4.webp", alt: "Behind the scenes at a shoot", width: 720, height: 1599 },
  { src: "/images/studio/s3.webp", alt: "Inside the in-house video studio", width: 1600, height: 1197 },
]

export const team = [
  {
    name: "Soumini Basu",
    role: "Ex EY, IBM",
    bio: "Ex Digital Performance Improvement, EY, Emerging Markets.",
    image: "/images/team/soumini-basu.webp",
  },
]

export const faqs = [
  {
    q: "What services does IIM Marketers offer?",
    a: "We offer a full suite of digital marketing services including SEO, social media marketing, PPC advertising, content marketing, email marketing, website design and branding strategies tailored to your business goals.",
  },
  {
    q: "How is IIM Marketers different from other digital marketing agencies?",
    a: "We combine data-driven strategies with creative execution to deliver measurable results. Our team focuses on performance, ROI, and aligning every campaign with your brand’s unique identity and goals.",
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "Yes! We work with startups, small businesses and large enterprises. Our strategies are scalable and customised to fit your budget, industry and specific growth needs.",
  },
  {
    q: "How long before we see results from digital marketing?",
    a: "It depends on the service. SEO can take 3–6 months for noticeable impact, while PPC and social media campaigns may show results within weeks. We focus on building sustainable, long-term growth.",
  },
  {
    q: "What industries do you specialise in?",
    a: "We’ve worked with brands across e-commerce, healthcare, education, tech, hospitality, fashion, real estate and more. Whatever your niche, we tailor our strategies to your market.",
  },
  {
    q: "Can you help with brand strategy and design?",
    a: "Absolutely. In addition to marketing, we offer branding, logo design and website development services to help you establish a strong, professional digital identity.",
  },
]

export const footerServices = [
  "Brand Solutions",
  "Media Solutions",
  "PR & Media Coverage",
  "Films & Photography",
  "Video Editing",
  "Motion Graphics",
  "Research Solutions",
]
