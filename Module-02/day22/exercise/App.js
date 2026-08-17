const API = "https://open.er-api.com/v6/latest/ETB";
const state = {
  base: "ETB",
  rates: {},
  watchlist: [],
  currency: "USD",
};
const form = document.querySelector("#convert-form");
const amount = document.querySelector("#amount");
const select = document.querySelector("#currency");
const result = document.querySelector("#result");
const addBtn = document.querySelector("#watch");
const watchUl = document.querySelector("#watchlist");

async function loadRates() {
  status.textContent = "Loading rates...";
  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    state.rates = data.rates; // into state
    status.textContent = "Rate loaded sucessfully";
    render();
  } catch (err) {
    status.textContent = "Could not load rates.";
  }
}
function render() {
  // fill the dropdown from the live rates
  const codes = Object.keys(state.rates);
  select.innerHTML = codes.map((c) => `<option>${c}</option>`).join("");
  select.value = state.currency;
  renderWatchlist();
}
// function render() {
//   renderwatchlist();
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const amt = Number(amount.value);
  if (!amt || amt <= 0) {
    result.textContent = "Enter a valid amount.";
    return;
  }
  state.currency = select.value;
  const rate = state.rates[state.currency];
  const out = (amt * rate).toFixed(2);
  result.textContent = `${amt} ETB = ${out} ${state.currency}`;
});

addBtn.addEventListener("click", () => {
  const c = select.value;
  // no duplicates
  if (state.watchlist.includes(c)) return;
  state.watchlist.push(c);
  save(); // persist (next section)
  renderWatchlist();
});

function renderWatchlist() {
  if (state.watchlist.length === 0) {
    watchUl.innerHTML = "<li>No currencies yet</li>";
    return;
  }
  watchUl.innerHTML = state.watchlist
    .map((c) => {
      const r = state.rates[c];
      return `<li data-c="${c}">1 ETB = ${r} ${c}
      <button class="rm">×</button></li>`;
    })
    .join("");
}

watchUl.addEventListener("click", (e) => {
  if (!e.target.matches(".rm")) return;
  const c = e.target.closest("li").dataset.c;
  state.watchlist = state.watchlist.filter((x) => x !== c);
  save();
  renderWatchlist();
});

const KEY = "birrwatch";
// save the parts worth keeping
function save() {
  localStorage.setItem(
    KEY,
    JSON.stringify({
      watchlist: state.watchlist,
      currency: state.currency,
    }),
  );
}
// load on startup, before the first render
function load() {
  const saved = localStorage.getItem(KEY);
  if (saved) Object.assign(state, JSON.parse(saved));
}

async function init() {
  load(); // restore saved choices
  await loadRates(); // fetch live rates
  render(); // draw everything
}
init();
