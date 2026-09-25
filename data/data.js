// Every fact on this site comes from a public page, collected 25 September 2026.
// Figures are each source's own claim. Nothing here is estimated unless it is labelled as an input you control.

const SRC = {
  toHome: "https://www.teamout.com/",
  toHost: "https://www.teamout.com/host",
  toCompany: "https://www.teamout.com/company",
  toDest: "https://www.teamout.com/corporate-retreat",
  toDeel: "https://www.teamout.com/blog-post/teamout-deel-partnership",
  toYC: "https://www.ycombinator.com/companies/teamout",
  skiftDMC: "https://meetings.skift.com/2025/12/11/a-closer-look-at-8-mega-dmcs/",
  troopEA: "https://trooptravel.com/blog/executive-assistant-events-2026",
  surfReport: "https://www.surfoffice.com/blog/company-offsites-report",
};

// TeamOut's own published numbers
const TEAMOUT_FACTS = [
  { k: "3,000+", l: "partnered properties (host page); the homepage says 4,000+ venues", src: SRC.toHost },
  { k: "$30K–$250K", l: "average booking value per retreat, as quoted to venues", src: SRC.toHost },
  { k: "10%", l: "flat commission on room bookings, pre-tax. Listing is free", src: SRC.toHost },
  { k: "500+", l: "corporate retreats organised; 95% of companies plan to return", src: SRC.toCompany },
  { k: "1", l: "public channel partnership: Deel, announced 9 July 2025", src: SRC.toDeel },
  { k: "10", l: "team size on the YC company profile", src: SRC.toYC },
];

// Destination pages on teamout.com/corporate-retreat, counted across every page of the listing on 25 Sep 2026
const DESTINATIONS = {
  counted: 77,
  groups: [
    { region: "United States", n: 59 },
    { region: "Canada", n: 4 },
    { region: "Europe", n: 9, list: "Europe, France, Italy, Lisbon, London, Portugal, Spain, Tuscany, UK" },
    { region: "Latin America", n: 3, list: "Cancún, Costa Rica, Mexico" },
    { region: "Asia", n: 2, list: "Bali, Thailand" },
  ],
  missing: [
    { place: "Greece", why: "Named a trending country in Surf Office's 2026 offsites report (Greece and Mexico: 850% demand surge)", src: SRC.surfReport },
    { place: "Japan", why: "Listed by Surf Office among its Asia destinations; Ovation Global DMC runs Japan in its 15 Asia-Pacific destinations", src: "https://ovationdmc.com/" },
    { place: "Croatia, Hungary, Vietnam", why: "Destinations where competitor NextRetreat shows retreats", src: "https://nextretreat.com" },
    { place: "Barcelona", why: "One of the two top offsite cities in Surf Office's report (with Lisbon). TeamOut has a Spain page but no Barcelona page", src: SRC.surfReport },
  ],
};

// ---------- CHANNEL PARTNERS ----------
// type: "HR & EOR platforms" | "Finance & perks marketplaces" | "Communities & events"
// priority: my judgement of fit and effort (explained in the "why" line), not a sourced fact
const CHANNEL = [
  // HR & EOR platforms
  { name: "Deel", type: "HR & EOR platforms", priority: "Expand",
    fact: "TeamOut already offers Deel customers discounts and packages (July 2025). Separately, Deel Rewards is a free perks marketplace open to every Deel account, with travel and hotel offers. No retreat partner is shown on that page.",
    offer: "Put the existing Deel discount inside Deel Rewards and co-market it to Deel's company admins, so the deal is seen where HR teams already work.",
    why: "Proven relationship; the next step is distribution, not a new deal.",
    src: "https://www.deel.com/solutions/benefits/perks-rewards/", src2: SRC.toDeel },
  { name: "Remote", type: "HR & EOR platforms", priority: "High",
    fact: "Runs a vetted partner perks marketplace (featured: Brex, HiBob, Ramp, Mercury, Notion) and standard partner programmes with options like customer discounts or referral bonuses. No offsite company is featured.",
    offer: "A Remote-customer offsite rate listed in the perks marketplace, matching the Deel package.",
    why: "Same buyer as Deel (distributed teams). Note: competitor Offsite's 2023 funding release lists co-founders and CEOs from Remote among its angels, so this one needs a sharp pitch.",
    src: "https://remote.com/en-in/partners/perks-marketplace", src2: "https://www.prnewswire.com/news-releases/offsite-raises-3-million-to-reconnect-remote-and-hybrid-companies-through-in-person-experiences-301879845.html" },
  { name: "Oyster", type: "HR & EOR platforms", priority: "High",
    fact: "Publishes a partner directory with categories such as workplace tools and operations. Oyster is also listed in Ramp's People Operations rewards.",
    offer: "Directory listing plus a customer-only offsite rate.",
    why: "An EOR for distributed teams: exactly the companies that need offsites to meet in person.",
    src: "https://partners.oysterhr.com/", src2: "https://ramp.com/rewards" },
  { name: "HiBob", type: "HR & EOR platforms", priority: "Medium",
    fact: "Runs tech and advisory partner programmes; the partner page mentions exclusive perks for partners and their clients.",
    offer: "Client perk for HiBob customers, co-marketed through the partner portal.",
    why: "Mid-market HR buyer in the US, UK and Europe. Perk route is lighter than a product integration.",
    src: "https://www.hibob.com/partner/" },
  { name: "Culture Amp", type: "HR & EOR platforms", priority: "Medium",
    fact: "Channel partnership programme with referral links, marketing support and automated commission payouts.",
    offer: "Two-way referral: engagement scores flag teams that need to meet; TeamOut refers People teams back.",
    why: "Employee-engagement data is the 'why' behind an offsite. A natural content partner.",
    src: "https://www.cultureamp.com/partnership-programs" },
  { name: "Lattice", type: "HR & EOR platforms", priority: "Low",
    fact: "Partner ecosystem of service partners, integrations and certified fractional HR leaders.",
    offer: "Referral arrangement with Lattice's fractional HR leaders, who advise many small companies at once.",
    why: "Reaches many startups through a few advisers, but the programme isn't built for perks.",
    src: "https://lattice.com/partners" },

  // Finance & perks marketplaces
  { name: "Brex", type: "Finance & perks marketplaces", priority: "High",
    fact: "Brex is a TeamOut customer. Its partner perks list 'hundreds of cardholder benefits', with HR partners such as Gusto, Deel and Warp. No offsite partner is listed on that page.",
    offer: "A Brex-cardholder offsite perk, pitched with the customer relationship as the warm intro.",
    why: "Existing customer = warm door. Card admins are often the people booking offsites.",
    src: "https://www.brex.com/support/brex-partner-perks", src2: SRC.toYC },
  { name: "Ramp", type: "Finance & perks marketplaces", priority: "High",
    fact: "Ramp Rewards claims $350,000+ in partner rewards. The Travel category lists Perk, Corporate Traveler and TravelBank. No offsite or retreat provider.",
    offer: "The first offsite offer in Ramp's Travel category.",
    why: "An empty slot in a category that already exists.",
    src: "https://ramp.com/rewards" },
  { name: "Mercury", type: "Finance & perks marketplaces", priority: "Medium",
    fact: "Mercury Perks shows 272 perks for Mercury customers, including Remote and Deel. The visible listing has no travel, events or offsite company.",
    offer: "A startup-stage perk (for example a small-team offsite package).",
    why: "Reaches early-stage startups, which fits TeamOut's small-group product.",
    src: "https://mercury.com/perks" },
  { name: "Secret", type: "Finance & perks marketplaces", priority: "Low",
    fact: "A software-deals marketplace for startups and small businesses.",
    offer: "A listed offer as a low-effort extra channel.",
    why: "Cheap to list; the audience is software buyers, so conversion is uncertain.",
    src: "https://www.joinsecret.com/explore" },

  // Communities & events
  { name: "Chief of Staff Network", type: "Communities & events", priority: "High",
    fact: "Sells partnerships through events and content. Past and current partners include competitor Offsite (quoted on the page), Notion and TriNet. Next event: Chief of Staff Connect, New York, 22–23 October 2026. A Europe edition ran in 2025.",
    offer: "Sponsor a session or a member perk, starting with the Europe edition where the competitor is less visible.",
    why: "Chiefs of Staff often own the offsite. A competitor already treats this as a channel.",
    src: "https://www.chiefofstaff.network/partnership", src2: "https://www.chiefofstaff.network/cos-connect/europe-2025" },
  { name: "EA Ignite", type: "Communities & events", priority: "High",
    fact: "Executive-assistant conference. EA Ignite Fall runs 2–4 November 2026 in Nashville; meeting-planning platform TROOP is its title sponsor.",
    offer: "A speaking slot or workshop on planning an offsite in 5 days, rather than a booth.",
    why: "Executive assistants appear in TeamOut's own homepage testimonials, and a competitor is already paying to reach them.",
    src: SRC.troopEA },
  { name: "PA Show & EA Campus (London)", type: "Communities & events", priority: "Medium",
    fact: "UK assistant events: PA Show (25–26 February 2026) and EA Campus Conference (22–24 April 2026), both in London. TROOP exhibited at PA Show.",
    offer: "Presence at the 2027 editions, tied to Europe venue content.",
    why: "The European assistant audience, which fits a Europe supply push.",
    src: SRC.troopEA },
  { name: "World Administrators Summit", type: "Communities & events", priority: "Medium",
    fact: "Berlin, 21–22 October 2026.",
    offer: "Attend, meet planners and test Europe demand before spending on sponsorship.",
    why: "Low-cost way to test the continental European assistant market.",
    src: SRC.troopEA },
  { name: "Running Remote", type: "Communities & events", priority: "Medium",
    fact: "Conference for people leading distributed teams: 10 conferences and 8,200+ attendees since 2018. The 2026 edition ran 27–29 April in Austin.",
    offer: "Sponsor the attendee offsite or a session on running retreats, for the 2027 edition.",
    why: "Audience of founders and People leaders at remote companies: TeamOut's buyer.",
    src: "https://runningremote.com/running-remote-faq/" },
];

// ---------- SUPPLY: DMC NETWORKS ----------
// One agreement with a network reaches many local destination management companies (DMCs) at once.
const DMC_NETWORKS = [
  { name: "Global DMC Partners", reach: "500+ destinations, 100+ DMC partners", note: "Serves 2,000+ businesses; 12,000+ programmes. Covers Europe, Asia and seven other regions.", src: "https://globaldmcpartners.com/" },
  { name: "Ovation Global DMC", reach: "150+ destinations, 60 owned offices", note: "DMC arm of MCI Group. 29 European and 15 Asia-Pacific destinations, including Japan and Singapore.", src: "https://ovationdmc.com/" },
  { name: "Global DMC Alliance", reach: "450+ destinations via 65 DMCs", note: "Operating since 2006, based in Malta.", src: SRC.skiftDMC },
  { name: "Hosts Global", reach: "450 destinations", note: "Founded 1958 as USA Hosts; expanding in Europe and APAC.", src: SRC.skiftDMC },
  { name: "DMC Network", reach: "100+ destinations", note: "Fully member-owned community of DMCs.", src: SRC.skiftDMC },
  { name: "Liberty International Tourism Group", reach: "100 destinations, 250 members", note: "Founded 1990; mostly owned offices.", src: SRC.skiftDMC },
  { name: "Euromic", reach: "About 50 destinations, one DMC each", note: "Non-profit, member-owned, invitation-only; founded 1973.", src: SRC.skiftDMC },
];

// ---------- SUPPLY: HOTEL GROUPS WITH PLANNER PROGRAMMES ----------
const HOTEL_GROUPS = [
  { name: "Meliá (MeliáPRO)", fact: "Up to 20% commission for agents, plus an extra 5% on meetings and events booked by 31 December 2026. Free group-booking microsites.", src: "https://meliapro.melia.com/en/meetings-events/offers", src2: "https://www.cotal.fr/wp-content/uploads/2024/01/EN-MELIAPRO-AGENTS-HANDBOOK.pdf" },
  { name: "NH / Minor Hotels (Minor PRO)", fact: "Instant online booking of meeting space and group rooms in under 5 minutes, plus private group-booking microsites.", src: "https://www.minorhotels.com/en/minor-pro/blog/trends/event-booking-tools-nh-hotels" },
  { name: "Pestana Hotel Group", fact: "100+ hotels across 4 brands (about 12,000 keys), with properties in Lisbon, Porto, Cascais, Sintra, the Algarve, Madeira and the Azores.", src: "https://en.wikipedia.org/wiki/Pestana_Group", src2: "https://www.pestana.com/en/meetings" },
  { name: "Accor (ALL Meeting Planner)", fact: "Free planner loyalty programme: 1 Reward point and 1 Status point per €2 spent on group bookings of 8+ rooms or attendees.", src: "https://all.accor.com/a/en/offers/meapac/all-meeting-planner.html" },
];

// ---------- MARKET PULSE ----------
const PULSE = [
  { date: "May 2026", title: "78% of remote-capable US workers aren't on-site full time",
    body: "Gallup: 52% hybrid, 26% fully remote, 22% on-site.",
    means: "Most of TeamOut's market still needs a reason and a place to meet in person.",
    src: "https://www.gallup.com/401384/indicator-hybrid-work.aspx", outlet: "Gallup" },
  { date: "Jan 2026", title: "Half of offsite organisers struggle to find the venue",
    body: "Surf Office's 2026 report (90 respondents, 200+ events): 91% are remote or hybrid, 62% hold offsites away from their main location, and 51% name location and venue sourcing as the top challenge. Groups over 100 people confirm 23 weeks ahead.",
    means: "Venue sourcing is the pain. Deeper Europe and Asia supply is what fixes it.",
    src: SRC.surfReport, outlet: "Surf Office (competitor research)" },
  { date: "Jan 2026", title: "Lisbon and Barcelona lead; Greece is surging",
    body: "The same report names Lisbon and Barcelona as top cities and Greece and Mexico as trending (850% demand surge).",
    means: "TeamOut has a Lisbon page but none for Barcelona or Greece.",
    src: SRC.surfReport, outlet: "Surf Office (competitor research)" },
  { date: "Sep 2025", title: "Meetings optimism hits a five-year high, but costs rise",
    body: "Amex GBT's 2026 forecast: 85% of meeting professionals are optimistic, 88% expect budgets to rise, cost per participant is expected to rise 6%, and cost is the top challenge (37%).",
    means: "Partner rates (hotel-group deals, DMC networks) are a direct answer to the top buyer worry.",
    src: "https://www.voyages-d-affaires.com/en/amex-gbt-meetings-events-forecast-2026", outlet: "Voyages d'Affaires on Amex GBT" },
  { date: "2026", title: "Competitors are buying the planner channels",
    body: "TROOP is title sponsor of EA Ignite Fall and exhibits at five other assistant events. Offsite is a named partner of the Chief of Staff Network.",
    means: "The buyers TeamOut targets are being courted in rooms where TeamOut isn't visible.",
    src: SRC.troopEA, src2: "https://www.chiefofstaff.network/partnership", outlet: "TROOP · Chief of Staff Network" },
  { date: "Jul 2025", title: "TeamOut × Deel: the proof the model works",
    body: "Deel customers get discounts and packages on TeamOut retreats. It is the only channel partnership on TeamOut's site, announced as a blog post, with no partners page.",
    means: "One partnership shows it can be done. A programme makes it repeatable.",
    src: SRC.toDeel, outlet: "TeamOut blog" },
];

// ---------- COMPETITORS ----------
const COMPETITORS = [
  { name: "Surf Office", base: "Lisbon", fact: "1,000+ retreats, 200+ destinations across the Americas, Europe and Asia (including Japan and Thailand).", src: "https://www.surfoffice.com" },
  { name: "NextRetreat", base: "Europe", fact: "30+ locations; retreats in Italy, Croatia, Spain, Hungary, Portugal, Vietnam and more.", src: "https://nextretreat.com" },
  { name: "Venue Retreat", base: "Valencia", fact: "Free venue-sourcing marketplace with its deepest inventory in Europe; features a Netflix case study.", src: "https://www.venueretreat.com" },
  { name: "Offsite", base: "US", fact: "Raised $3M in July 2023, when it had planned hundreds of retreats in 15+ countries. Partners with the Chief of Staff Network.", src: "https://www.prnewswire.com/news-releases/offsite-raises-3-million-to-reconnect-remote-and-hybrid-companies-through-in-person-experiences-301879845.html" },
  { name: "TROOP", base: "—", fact: "Meeting planning and travel logistics aimed at executive assistants; sponsors assistant conferences.", src: SRC.troopEA },
];
