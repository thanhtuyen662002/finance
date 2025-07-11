const partners = [
  {
    name: "CHỨNG KHOÁN VPS",
    logo: "images/vps/logo.webp",
    benefits: [
      "🌟 Cung cấp các sản phẩm đa dạng, chất lượng cao",
      "🌟 Đa dạng dịch vụ đầu tư",
      "🌟 Có đội ngũ tư vấn tài chính và phân tích",
      "🌟 Dễ dàng mở tài khoản",
    ],
    link: "https://shorten.asia/k5kNKuVW",
    guideSteps: [
      {
        img: "images/vps/Step1.png",
        text: "Khách hàng điền đầy đủ thông tin để mở tài khoản chứng khoán.",
      },
    ],
  },
  {
    name: "XWEALTH DATX",
    logo: "images/datx/logo.jpeg",
    benefits: [
      "🌟 Đón đầu kỷ nguyên đầu tư với AI, Big Data, Machine learning",
      "🌟 Công cụ đầu tư hữu ích, hỗ trợ nhà đầu tư ra quyết định hiệu quả",
      "🌟 Đã triển khai thành công ở thị trường Úc",
      "🌟 Đã chứng minh được hiệu suất đầu tư đột phá",
    ],
    link: "https://shorten.asia/1RDXpYHU",
    guideSteps: [
      {
        img: "images/datx/Step1.png",
        text: "Khách hàng điền thông tin để đăng ký tài khoản.",
      },
    ],
  },
  {
    name: "ENTRADE X BY DNSE",
    logo: "images/dnse/logo.png",
    benefits: [
      "🌟 20 năm kinh nghiệm trên thị trường chứng khoán",
      "🌟 Giúp khách hàng nắm bắt thị trường dễ dàng",
      "🌟 Đem đến trải nghiệm liền mạch cho mua bán, đầu tư tự tin",
      "🌟 Dễ dàng mở tài khoản",
    ],
    link: "https://shorten.asia/usTqdA82",
    guideSteps: [
      {
        img: "images/dnse/Step1.png",
        text: "Khách hàng tải ứng dụng DNSE và điền đầy đủ thông tin để tiến hành mở tài khoản.",
      },
    ],
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
    <a href="#" class="btn open-guide" data-index="${index}">Đăng ký ngay</a>
  `;
  container.appendChild(card);
});

// Modal logic
const modal = document.getElementById("guideModal");
const guideStep = document.getElementById("guide-step");
const prevBtn = document.getElementById("prevStep");
const nextBtn = document.getElementById("nextStep");
const closeBtn = document.querySelector(".modal .close");
const startBtn = document.getElementById("startRegister");

let currentStep = 0;
let currentPartner = null;

function showStep(stepIndex) {
  const step = currentPartner.guideSteps[stepIndex];
  guideStep.innerHTML = `
    <p>${step.text}</p>
    <img src="${step.img}" alt="Step ${stepIndex + 1}">
  `;

  // Ẩn bằng visibility để giữ layout
  prevBtn.classList.toggle("hidden-visibility", stepIndex === 0);
  nextBtn.classList.toggle(
    "hidden-visibility",
    stepIndex === currentPartner.guideSteps.length - 1
  );
  startBtn.classList.toggle(
    "hidden",
    stepIndex !== currentPartner.guideSteps.length - 1
  );
}

document.querySelectorAll(".open-guide").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const index = parseInt(btn.dataset.index);
    currentPartner = partners[index];
    currentStep = 0;
    showStep(currentStep);
    modal.classList.remove("hidden");
  });
});

nextBtn.onclick = () => {
  if (currentStep < currentPartner.guideSteps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
};

prevBtn.onclick = () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
};

closeBtn.onclick = () => {
  modal.classList.add("hidden");
};

startBtn.onclick = () => {
  window.open(currentPartner.link, "_blank");
  modal.classList.add("hidden");
};

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

document.getElementById("nextStep").classList.add("fade-slide-up");
document.getElementById("prevStep").classList.add("fade-slide-up");

