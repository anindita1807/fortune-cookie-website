const sampleFortunes = [
  "Small steps still move you toward beautiful places.",
  "The thing you are looking for is also looking for you.",
  "A new opportunity will arrive disguised as a small change.",
  "You do not need to have it all figured out to begin.",
  "Your kindness is making more of a difference than you know.",
  "A little courage today can open a very big door tomorrow.",
  "Make room for the unexpected; it has excellent timing.",
  "Trust the slow magic of becoming who you are.",
  "The answer may come when you stop forcing the question.",
  "Something you start today will make future-you grateful."
];

const cookieBtn = document.getElementById("cookieBtn");
const emptyState = document.getElementById("emptyState");
const fortuneState = document.getElementById("fortuneState");
const fortuneText = document.getElementById("fortuneText");
const fortuneLucky = document.getElementById("fortuneLucky");
const savedList = document.getElementById("savedList");
const savedCount = document.getElementById("savedCount");
const toast = document.getElementById("toast");
let currentFortune = "";
let savedFortunes = [];

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

async function getFortune() {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/fortune");
    if (!response.ok) throw new Error("API unavailable");
    const data = await response.json();
    return data.fortune;
  } catch {
    return sampleFortunes[Math.floor(Math.random() * sampleFortunes.length)];
  }
}

async function revealFortune() {
  cookieBtn.classList.add("cracking");
  currentFortune = await getFortune();
  fortuneText.textContent = currentFortune;
  fortuneLucky.textContent = `Lucky number: ${Math.floor(Math.random() * 99) + 1}  ·  Take what you need, leave the rest.`;
  emptyState.classList.add("hidden");
  fortuneState.classList.remove("hidden");
  cookieBtn.classList.remove("cracking");
}

function renderSaved() {
  savedCount.textContent = `${savedFortunes.length} SAVED`;
  if (!savedFortunes.length) {
    savedList.innerHTML = '<p class="saved-empty">Your favourite fortunes will appear here.</p>';
    return;
  }
  savedList.innerHTML = "";
  savedFortunes.forEach((fortune, index) => {
    const card = document.createElement("article");
    card.className = "saved-card";
    const quote = document.createElement("div");
    quote.textContent = `“${fortune}”`;
    const remove = document.createElement("button");
    remove.textContent = "REMOVE ×";
    remove.addEventListener("click", () => {
      savedFortunes.splice(index, 1);
      renderSaved();
    });
    card.append(quote, remove);
    savedList.appendChild(card);
  });
}

cookieBtn.addEventListener("click", revealFortune);
document.getElementById("anotherBtn").addEventListener("click", revealFortune);
document.getElementById("saveBtn").addEventListener("click", () => {
  if (!currentFortune) return;
  if (savedFortunes.includes(currentFortune)) return notify("That fortune is already saved.");
  savedFortunes.unshift(currentFortune);
  renderSaved();
  notify("Saved to your little collection ♡");
});
document.getElementById("copyBtn").addEventListener("click", async () => {
  if (!currentFortune) return;
  try {
    await navigator.clipboard.writeText(`My fortune: “${currentFortune}”`);
    notify("Fortune copied to clipboard!");
  } catch {
    notify("Your fortune: “" + currentFortune + "”");
  }
});
renderSaved();
