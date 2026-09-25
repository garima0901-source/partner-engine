const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const host = (u) => new URL(u).hostname.replace(/^www\./, "");
const link = (u, label) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(label || host(u))}</a>`;
const sources = (o) => [o.src, o.src2].filter(Boolean).map((u) => link(u)).join(" · ");
const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");
const usdShort = (n) => (n >= 1e6 ? "$" + (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + "M" : "$" + Math.round(n / 1000) + "K");

// ---------- hero stats ----------
const asia = DESTINATIONS.groups.find((g) => g.region === "Asia").n;
$("#hero-stats").innerHTML = [
  [1, "public channel partnership today"],
  [CHANNEL.length, "channel partners mapped, each sourced"],
  [DMC_NETWORKS.length, "DMC networks for Europe and Asia delivery"],
  [asia, "Asia destination pages on teamout.com"],
].map(([n, l]) => `<div class="stat"><span class="stat-n">${n}</span><span class="stat-l">${l}</span></div>`).join("");

// ---------- 01 gap ----------
$("#facts").innerHTML = TEAMOUT_FACTS.map((f) => `
  <div class="fact"><span class="fact-k">${esc(f.k)}</span><span class="fact-l">${esc(f.l)}</span><span class="src">${link(f.src)}</span></div>`).join("");

$("#dest-note").innerHTML = `${DESTINATIONS.counted} pages, counted across every page of the ${link(SRC.toDest, "listing")} on 25 September 2026.`;
const maxN = Math.max(...DESTINATIONS.groups.map((g) => g.n));
$("#dest-bars").innerHTML = DESTINATIONS.groups.map((g) => `
  <div class="bar-row" ${g.list ? `title="${esc(g.list)}"` : ""}>
    <span class="bar-l">${esc(g.region)}</span>
    <span class="bar-track"><span class="bar-fill${g.region === "Asia" || g.region === "Europe" ? " bar-hot" : ""}" style="width:${(g.n / maxN) * 100}%"></span></span>
    <span class="bar-n">${g.n}</span>
  </div>${g.list ? `<p class="bar-list">${esc(g.list)}</p>` : ""}`).join("");

$("#missing").innerHTML = DESTINATIONS.missing.map((m) => `
  <li><strong>${esc(m.place)}</strong><span>${esc(m.why)}</span><span class="src">${link(m.src)}</span></li>`).join("");

$("#competitors tbody").innerHTML = COMPETITORS.map((c) => `
  <tr><td><strong>${esc(c.name)}</strong></td><td>${esc(c.base)}</td><td>${esc(c.fact)}</td><td class="src">${link(c.src)}</td></tr>`).join("");

// ---------- 02 channel ----------
const TYPES = ["All", ...new Set(CHANNEL.map((c) => c.type))];
const PRIOS = ["Any priority", "Expand", "High", "Medium", "Low"];
const state = { type: "All", prio: "Any priority" };

function chips(el, options, key) {
  el.innerHTML = options.map((o) => `<button type="button" class="chip" data-v="${esc(o)}" aria-pressed="${state[key] === o}">${esc(o)}</button>`).join("");
  el.onclick = (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    state[key] = b.dataset.v;
    chips(el, options, key);
    renderChannel();
  };
}

function renderChannel() {
  const rows = CHANNEL.filter((c) => (state.type === "All" || c.type === state.type) && (state.prio === "Any priority" || c.priority === state.prio));
  $("#channel-cards").innerHTML = rows.length ? rows.map((c) => `
    <article class="card">
      <div class="card-top">
        <h4>${esc(c.name)}</h4>
        <span class="prio prio-${c.priority.toLowerCase()}">${esc(c.priority)}</span>
      </div>
      <p class="card-type">${esc(c.type)}</p>
      <dl>
        <dt>What's public</dt><dd>${esc(c.fact)}</dd>
        <dt>Proposed offer</dt><dd>${esc(c.offer)}</dd>
        <dt>Why this priority</dt><dd>${esc(c.why)}</dd>
      </dl>
      <p class="src">Source: ${sources(c)}</p>
    </article>`).join("") : `<p class="muted">No partners match those filters.</p>`;
}
chips($("#type-chips"), TYPES, "type");
chips($("#prio-chips"), PRIOS, "prio");
renderChannel();

// ---------- 03 supply ----------
$("#dmc tbody").innerHTML = DMC_NETWORKS.map((d) => `
  <tr><td><strong>${esc(d.name)}</strong></td><td>${esc(d.reach)}</td><td>${esc(d.note)}</td><td class="src">${link(d.src)}</td></tr>`).join("");

$("#hotels").innerHTML = HOTEL_GROUPS.map((h) => `
  <article class="card card-sm">
    <h4>${esc(h.name)}</h4>
    <p>${esc(h.fact)}</p>
    <p class="src">Source: ${sources(h)}</p>
  </article>`).join("");

// ---------- 04 maths ----------
const inp = { b: $("#i-bookings"), v: $("#i-value"), t: $("#i-take"), r: $("#i-repeat") };
function calc() {
  const perQ = +inp.b.value, value = +inp.v.value, take = +inp.t.value / 100, repeat = inp.r.checked;
  const perYear = perQ * 4;
  const total = perYear * (repeat ? 2 : 1);
  const gmv = total * value, rev = gmv * take;
  $("#o-bookings").textContent = perQ;
  $("#o-value").textContent = usdShort(value);
  $("#o-take").textContent = Math.round(take * 100) + "%";
  $("#r-bookings").textContent = repeat ? `${perYear} + ${perYear} repeat` : perYear;
  $("#r-gmv").textContent = usd(gmv);
  $("#r-rev").textContent = usd(rev);
  const per = value * take;
  const need = per > 0 ? Math.ceil(100000 / per) : 0;
  $("#r-note").textContent = per > 0
    ? `Each booking at these settings is worth ${usd(per)} to TeamOut, so every $100K of revenue takes ${need} partner-sourced bookings a year${repeat ? " (before repeats)" : ""}.`
    : "";
}
Object.values(inp).forEach((el) => el.addEventListener("input", calc));
calc();

// ---------- 05 pulse ----------
$("#pulse-list").innerHTML = PULSE.map((p) => `
  <article class="pulse-item">
    <p class="pulse-meta"><span>${esc(p.date)}</span><span>${esc(p.outlet)}</span></p>
    <h4>${esc(p.title)}</h4>
    <p>${esc(p.body)}</p>
    <p class="means"><strong>For partnerships:</strong> ${esc(p.means)}</p>
    <p class="src">Source: ${sources(p)}</p>
  </article>`).join("");
