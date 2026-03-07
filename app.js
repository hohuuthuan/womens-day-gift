(function () {
  const setVH = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };
  setVH();
  window.addEventListener("resize", setVH);
})();

const wishes = [
  { icon: "🎀", title: "Mãi xinh đẹp", message: "Chúc bạn luôn xinh đẹp, tự tin và tỏa sáng theo cách riêng của mình, nhan sắc giữ mãi tuổi mười tám đôi mươi nhá!", color: "from-rose-400 to-pink-500" },
  { icon: "🏆", title: "Thành công", message: "Chúc bạn gặt hái nhiều thành công, thuận lợi và suôn sẻ trong công việc và \" nhau it thoi nha \" :))", color: "from-amber-400 to-orange-500" },
  { icon: "💝", title: "Hạnh phúc", message: "Mong bạn luôn được chiều chuộng, yêu thương, chở che và có cuộc sống hạnh phúc trọn vẹn!", color: "from-pink-400 to-rose-500" },
  { icon: "❤️", title: "Sức khỏe", message: "Chúc bạn luôn tràn đầy năng lượng, ăn ngon, ngủ ngon, tinh thần lúc nào cũng nhẹ nhõm và tích cực.", color: "from-green-400 to-emerald-500" },
  { icon: "🍀", title: "May mắn", message: "Chúc mọi điều may mắn và tốt đẹp nhất sẽ đến với bạn trong những ngày sắp tới, đi đâu cũng thuận, làm gì cũng \"trúng\", chuyện không vui sẽ nhanh chóng trôi qua.", color: "from-purple-400 to-pink-500" },
  { icon: "😊", title: "Niềm vui mỗi ngày", message: "Mong rằng mỗi ngày của bạn đều tràn ngập niềm vui và tiếng cười, người ta nói \"Một nụ cười bằng mười thang thuốc bổ\" nên hãy cười lên nhé!", color: "from-fuchsia-400 to-pink-500" },
  { icon: "🦋", title: "Tự do", message: "Chúc bạn luôn tự do theo đuổi đam mê và sống đúng với khát khao ước muốn của chính mình!", color: "from-sky-400 to-indigo-500" },
  { icon: "🌟", title: "Tỏa sáng", message: "Bạn đã là một ngôi sao rất sáng rồi nên hãy cứ tiếp tục tỏa sáng nha, một ngày nào đó trở thành mặt trời thì ngol lun :))", color: "from-yellow-400 to-amber-500" },
  { icon: "🍀", title: "Bình an", message: "Chúc bạn và gia đình luôn bình an và hạnh phúc, mỗi ngày trôi qua nhẹ nhàng, ít lo nghĩ, ít muộn phiền luôn có cảm giác yên tâm về ngày mai và tương lai.", color: "from-teal-400 to-green-500" },
  { icon: "🌙", title: "Ước mơ", message: "Chúc bạn luôn giữ được những ước mơ của mình, đủ kiên nhẫn để theo đuổi, đủ can đảm để đối mặt với thử thách và rồi sẽ có ngày mọi cố gắng đều được đền đáp thật xứng đáng.", color: "from-violet-400 to-fuchsia-500" }
];

const specialLetter = {
  title: "Lời Chúc Đặc Biệt",
  to: "Dear TT",
  body: [
    "Hôm nay là ngày 8/3 — tui muốn gửi cho embe một lời chúc thật dài, thật là đặc biệtttt. Nhưng mà......",
    "Màn hình thì có hạn cho nên sẽ không đủ để chứa hết những điều cần nói, nên là tui sẽ tóm gọn lại ha",
    "Tui mong rằng embe sẽ luôn xinh đẹp theo cách của mình, luôn rạng rỡ tự tin và hạnh phúc không chỉ hôm nay mà là tất cả những ngày sau này nữa.",
    "Chúc embe luôn thuận lợi trong công việc, mọi nỗ lực đều được ghi nhận, cố gắn nào cũng có thành quả xứng đáng, bớt áp lực, mỗi ngày đi làm đều nhẹ nhàng hơn chút.",
    "Để được như vậy thì cũng phải giữ gìn sức khỏe nữa, chúc cho embe và gia đình luôn bình an, khỏe mạnh, tinh thần lúc nào cũng tích cực và vui vẻ nhe.",
    "Bên cạnh đó thì chúc cho embe sẽ luôn gặp được những điều tử tế trong tình cảm, gặp được người đủ chân thành để có thể cảm thấy an tâm, tất cả là do mình tự quyết định đừng phó mặc cho \"ý trời\" nha.",
    "Nếu có lúc mệt mỏi, hãy nghỉ ngơi một chút… rồi lại tiếp tục....✨"
  ],
  from: "From: HT"
};

let clickCount = 0;
let isOpening = false;

function clickGift() {
  if (isOpening) return;

  clickCount++;
  const giftBox = document.getElementById("gift-box");
  const dots = [dot1, dot2, dot3];

  if (clickCount <= 3) {
    dots[clickCount - 1].classList.remove("bg-pink-200");
    dots[clickCount - 1].classList.add("bg-pink-500", "scale-125");
  }

  giftBox.classList.remove("gift-float");
  giftBox.classList.add("gift-shake");
  setTimeout(() => {
    giftBox.classList.remove("gift-shake");
    if (clickCount < 3) giftBox.classList.add("gift-float");
  }, 500);

  if (clickCount === 3) {
    isOpening = true;
    setTimeout(openGift, 600);
  }
}

function openGift() {
  const introScreen = document.getElementById("intro-screen");
  const giftBox = document.getElementById("gift-box");
  const giftLid = document.getElementById("gift-lid");

  giftLid.style.transform = "translateY(-50px) rotate(-30deg)";
  giftLid.style.opacity = "0";

  createConfetti();
  setTimeout(() => giftBox.classList.add("gift-explode"), 500);

  setTimeout(() => {
    introScreen.style.transition = "opacity 0.8s ease-out";
    introScreen.style.opacity = "0";

    setTimeout(() => {
      introScreen.classList.add("hidden");
      const ws = document.getElementById("wishes-screen");
      ws.classList.remove("hidden");
      renderScreens();
      setupToTop(ws);
      createFallingElements();
    }, 800);
  }, 1200);
}

function createConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#ec4899", "#f472b6", "#f9a8d4", "#fbcfe8", "#fdf2f8", "#ff6b9d", "#ff85a1"];
  const shapes = ["🎀", "💕", "✨", "💗", "🎉", "💖", "⭐"];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti-piece";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = Math.random() * 50 + "%";
    confetti.style.animationDelay = Math.random() * 0.5 + "s";
    confetti.style.animationDuration = Math.random() * 1 + 1.5 + "s";

    if (Math.random() > 0.5) {
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    } else {
      confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
      confetti.style.fontSize = Math.random() * 20 + 10 + "px";
      confetti.style.background = "none";
    }
    container.appendChild(confetti);
  }

  setTimeout(() => (container.innerHTML = ""), 3000);
}

function createFallingElements() {
  const elements = ["🎁", "🎀", "💐", "🌹", "🌷", "💝", "💖", "✨", "⭐", "🦋"];

  // Create initial falling elements
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const falling = document.createElement("div");
      falling.className = "falling-element " + (Math.random() > 0.5 ? "sway" : "");
      falling.textContent = elements[Math.floor(Math.random() * elements.length)];
      falling.style.left = Math.random() * 100 + "%";
      falling.style.animationDuration = 8 + Math.random() * 4 + "s";
      falling.style.animationDelay = Math.random() * 2 + "s";

      document.body.appendChild(falling);

      setTimeout(() => falling.remove(), (8 + Math.random() * 4 + 2) * 1000);
    }, i * 300);
  }

  // Continue creating falling elements periodically while on wishes screen
  const fallingInterval = setInterval(() => {
    const ws = document.getElementById("wishes-screen");
    if (ws.classList.contains("hidden")) {
      clearInterval(fallingInterval);
      return;
    }

    const falling = document.createElement("div");
    falling.className = "falling-element " + (Math.random() > 0.5 ? "sway" : "");
    falling.textContent = elements[Math.floor(Math.random() * elements.length)];
    falling.style.left = Math.random() * 100 + "%";
    falling.style.animationDuration = 8 + Math.random() * 4 + "s";

    document.body.appendChild(falling);

    setTimeout(() => falling.remove(), (8 + Math.random() * 4) * 1000);
  }, 500);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderWishCardHTML(wish) {
  return `
    <div class="wish-card p-[1px] shadow-xl relative overflow-hidden">
      <div class="card-inner rounded-2xl p-6 relative overflow-hidden">
        <div class="shine"></div>
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${wish.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <div class="relative z-10">
          <div class="flex items-center gap-4 mb-4">
            <span class="text-5xl">${wish.icon}</span>
            <h3 class="font-dancing text-3xl" style="color:#ec4899">${escapeHtml(wish.title)}</h3>
          </div>

          <p class="text-lg leading-relaxed" style="color:#831843">${escapeHtml(wish.message)}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
              style="background-color: rgba(244,114,182,.12); color:#ec4899">
              ✨ #8Tháng3
            </span>
            <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
              style="background-color: rgba(244,114,182,.12); color:#ec4899">
              💗 #NgàyCủaPhụNữ
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderScreens() {
  const root = document.getElementById("screens-root");
  root.innerHTML = "";

  const pairs = [];
  for (let i = 0; i < wishes.length; i += 2) pairs.push(wishes.slice(i, i + 2));

  const makeArrow = (type, onClick) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `nav-arrow ${type}`;
    btn.setAttribute("aria-label", type === "down" ? "Cuộn xuống" : "Cuộn lên");
    btn.innerHTML = `<span class="chev">${type === "down" ? "⌄" : "⌃"}</span>`;
    btn.addEventListener("click", onClick);
    return btn;
  };

  pairs.forEach((pair, idx) => {
    const screen = document.createElement("section");
    screen.className = `screen snap-start ${idx === 0 ? "screen-1" : ""}`;
    screen.id = `screen-${idx + 1}`;

    const inner = document.createElement("div");
    inner.className = "screen-inner";

    if (idx === 0) {
      inner.innerHTML = `
        <header class="text-center">
          <div class="header-badge mx-auto mb-2">
            <span class="text-xl heart-beat">💗</span>
            <span class="text-pink-700 font-medium tracking-wide">International Women's Day</span>
            <span class="text-xl heart-beat" style="animation-delay:.25s">💖</span>
          </div>

          <h1 class="font-dancing gradient-text one-line-title mb-3">Chúc Mừng Ngày 8/3</h1>
          <p class="text-pink-700 text-lg md:text-2xl font-medium">⭐⭐</p>

          <div class="flex items-center justify-center gap-3 opacity-90">
            <span class="h-px w-10 bg-pink-300/70"></span>
            <span class="text-pink-600">❤</span>
            <span class="h-px w-10 bg-pink-300/70"></span>
          </div>
        </header>
      `;
    }

    const cardsWrap = document.createElement("div");
    cardsWrap.className = "cards-2";
    cardsWrap.innerHTML = pair.map(renderWishCardHTML).join("");
    inner.appendChild(cardsWrap);

    screen.appendChild(inner);

    // DOWN: go to next screen or letter
    screen.appendChild(
      makeArrow("down", () => {
        const nextId = idx + 1 < pairs.length ? `screen-${idx + 2}` : "screen-letter";
        document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      })
    );

    // UP: from screen 2 onward
    if (idx >= 1) {
      screen.appendChild(
        makeArrow("up", () => {
          const prevId = idx - 1 >= 0 ? `screen-${idx}` : "screen-1";
          document.getElementById(prevId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        })
      );
    }

    root.appendChild(screen);
  });

  // Letter screen
  const letter = document.createElement("section");
  letter.className = "screen snap-start";
  letter.id = "screen-letter";
  letter.innerHTML = `
    <div class="screen-inner" style="margin-top: -50px;">
      <div class="letter-paper">
        <div class="letter-stamp">💌</div>

        <div class="text-center mb-3">
          <h2 class="font-dancing text-5xl md:text-6xl gradient-text">${escapeHtml(specialLetter.title)}</h2>
          <p class="text-pink-700 mt-2 opacity-90">Một chút dịu dàng, dành riêng cho bạn</p>
        </div>

        <div class="letter-line"></div>

        <div class="text-lg leading-relaxed" style="color:#831843">
          <p class="font-medium mb-3">${escapeHtml(specialLetter.to)}</p>
          ${specialLetter.body.map((p) => `<p class="mb-3">${escapeHtml(p)}</p>`).join("")}
        </div>

        <div class="letter-line"></div>

        <div class="letter-sign" style="color:#ec4899">
          <p class="font-medium">${escapeHtml(specialLetter.from)}</p>
        </div>
      </div>
    </div>
  `;

  // Letter: up to last pair screen
  letter.appendChild(
    (() => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nav-arrow up";
      btn.setAttribute("aria-label", "Cuộn lên");
      btn.innerHTML = `<span class="chev">⌃</span>`;
      btn.addEventListener("click", () => {
        const lastPair = Math.ceil(wishes.length / 2);
        document.getElementById(`screen-${lastPair}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return btn;
    })()
  );

  root.appendChild(letter);
}

function setupToTop(scrollEl) {
  const toTop = document.getElementById("to-top");
  const onScroll = () => {
    const y = scrollEl.scrollTop;
    if (y > 400) toTop.classList.add("show");
    else toTop.classList.remove("show");
  };
  scrollEl.addEventListener("scroll", onScroll);

  toTop.addEventListener("click", () => {
    scrollEl.scrollTo({ top: 0, behavior: "smooth" });
  });
}