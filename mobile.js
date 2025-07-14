const partners = [
    {
    name: "Mudee App",
    logo: "images/muadee/logo.png",
    benefits: [
      "🌟 Thuộc ngân hàng HD Bank",
      "🌟 Đăng ký tài khoản mới để tăng điểm tín dụng",
      "🌟 Cần định danh tài khoản bằng CCCD để tăng độ nhận diện",
      "🌟 Đợi 30 phút để ngân hàng nhận diện sau khi đăng ký xong",
    ],
    link: "https://shorten.asia/k6ftEaSU"
  },
  {
    name: "MB Bank IOS",
    logo: "images/mbbank/logo.png",
    benefits: [
      "🌟 Dành cho điện thoại IPhone",
      "🌟 Đăng ký tài khoản mới để tăng điểm tín dụng",
      "🌟 Cần định danh tài khoản bằng CCCD để tăng độ nhận diện",
      "🌟 Đợi 30 phút để ngân hàng nhận diện sau khi đăng ký xong",
    ],
    link: "https://shorten.asia/EcRVaNXz"
  },
  {
    name: "MB Bank Android",
    logo: "images/mbbank/logo.png",
    benefits: [
      "🌟 Dành cho điện thoại Android (Samsung, Xiaomi, Vivo, Oppo,...)",
      "🌟 Đăng ký tài khoản mới để tăng điểm tín dụng",
      "🌟 Cần định danh tài khoản bằng CCCD để tăng độ nhận diện",
      "🌟 Đợi 30 phút để ngân hàng nhận diện sau khi đăng ký xong",
    ],
    link: "https://shorten.asia/5tYF9aGs"
  },
];

// Tạo card
const container = document.getElementById("partners");

partners.forEach((p, index) => {
  const card = document.createElement("div");
  card.className = "partner-card";
  card.innerHTML = `
    <div class="logo"><img src="${p.logo}" alt="${p.name}"></div>
    <ul>${p.benefits.map((b) => `<li>${b}</li>`).join("")}</ul>
    <a href="${p.link}" class="btn open-guide" data-index="${index}">Đăng ký ngay</a>
  `;
  container.appendChild(card);
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

document.getElementById("nextStep").classList.add("fade-slide-up");
document.getElementById("prevStep").classList.add("fade-slide-up");
