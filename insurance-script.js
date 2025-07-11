const partners = [
  {
    name: "Bảo hiểm CI Global Care",
    logo: "images/ciglobalcare/logo.svg",
    benefits: [
      "✔️ Thủ tục bồi thường nhanh, đơn giản, hỗ trợ khách hàng 24/7",
      "✔️ Không cần khám sức khỏe vẫn tham gia được gói Bệnh Hiểm Nghèo",
      "✔️ Thiết kế riêng cho bệnh Ung thư, Đau tim, Đột quỵ",
      "✔️ Dễ dàng sở hữu với gói bảo vệ 1, 5, 10 năm, tái tục đơn giản",
      "✔️ Phí bảo hiểm hợp lý – phù hợp độ tuổi, giới tính, thu nhập người Việt",
    ],
    link: "https://shorten.asia/QUVzyFvT",
    guideSteps: [
      {
        img: "images/ciglobalcare/Step1.png",
        text: "Khách hàng điền đầy đủ thông tin và nhân viên tư vấn sẽ chủ động liên hệ ngay sau đó.",
      },
    ],
  },
  {
    name: "Bảo hiểm Hùng Vương",
    logo: "images/hungvuong/logo.jpg",
    benefits: [
      "✔️ Đa dạng từ xe cộ, nhà cửa, sức khỏe, du lịch và tai nạn",
      "✔️ Bồi thường online 24/24",
      "✔️ Xử lý hồ sơ bồi thường trong vòng 5 ngày làm việc",
      "✔️ Khách hàng chỉ cần gửi yêu cầu bồi thường thông qua app BHV",
      "✔️ Chi phí hợp lý phù hợp với người Việt Nam",
    ],
    link: "https://shorten.asia/MyFsSccn",
    guideSteps: [
      {
        img: "images/hungvuong/Step1.png",
        text: "Khách hàng chọn gói bảo hiểm theo nhu cầu sau đó tiến hành điền thông tin và thanh toán.",
      },
    ],
  },
  {
    name: "Bảo hiểm Bảo Minh",
    logo: "images/baominh/logo.png",
    benefits: [
      "✔️ Bảo hiểm đa dạng: ô tô, xe máy, du lịch, nhà ở, tai nạn",
      "✔️ Mức trách nhiệm lên tới 150.000$",
      "✔️ Chi trả bảo hiểm 24/24",
      "✔️ Phạm vi rộng, kèm cứu hộ, sửa chữa, thay thế cao cấp",
      "✔️ Bảo vệ nhà khỏi hỏa hoạn, thiên tai, trộm cắp, sự cố khác",
    ],
    link: "https://shorten.asia/Mc8p1wtX",
    guideSteps: [
      {
        img: "images/baominh/Step1.png",
        text: "Khách hàng điền đầy đủ thông tin và nhân viên tư vấn sẽ chủ động liên hệ ngay sau đó.",
      },
    ],
  },
  {
    name: "Bảo hiểm VBI",
    logo: "images/vbi/logo.png",
    benefits: [
      "✔️ Chi trả ngay cả khi NDBH bị nhiễm dịch bệnh",
      "✔️ Thời hạn bảo hiểm ngắn, từ 3 - 6 tháng",
      "✔️ Hỗ trợ chi phí chữa bệnh nền có sẵn",
      "✔️ Thời gian chờ ngắn trong vòng 7 ngày",
      "✔️ Giá sản phẩm thấp - chỉ từ VND 210,000",
    ],
    link: "https://shorten.asia/swEqsxep",
    guideSteps: [
      {
        img: "images/vbi/Step1.png",
        text: "Khách hàng ấn vào <strong>MUA BẢO HIỂM</strong> sau đó chọn bảo hiểm theo nhu cầu.",
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
