/* =========================
   ROMANTIC EFFECTS (HEART PAGE)
   ========================= */
let heartIntervalStarted = false;

function romanticEffects() {
  const heart = document.querySelector(".heart-wrapper");
  if (!heart || heartIntervalStarted) return;

  heartIntervalStarted = true;

  /* Sparkles */
  for (let i = 0; i < 12; i++) {
    let s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    heart.appendChild(s);
  }

  /* Mini floating hearts */
  setInterval(() => {
    let h = document.createElement("div");
    h.className = "mini-heart";
    h.innerText = "💖";
    h.style.left = Math.random() * 100 + "%";
    h.style.bottom = "0";
    heart.appendChild(h);
    setTimeout(() => h.remove(), 4000);
  }, 700);
}

/* =========================
   OBSERVE SCREEN CHANGES
   ========================= */
const observer = new MutationObserver(() => {
  const heartScreen = document.getElementById("s7");
  if (heartScreen && heartScreen.classList.contains("active")) {
    romanticEffects();
  }
});

observer.observe(document.body, {
  attributes: true,
  subtree: true,
  attributeFilter: ["class"]
});

/* =========================
   NO BUTTON HANDLER
   ========================= */
function handleNo() {
  const text = document.getElementById("noText");

  text.innerHTML =
    "😏 There is NO option for doing NO!<br>You HAVE to see it 💖";
  text.classList.add("no-warning");
}

/* =========================
   FINAL → SPECIAL PAGE FLOW
   ========================= */
function goToFinal() {
  show("final");

  setTimeout(() => {
    show("special");
  }, 3500);
}
