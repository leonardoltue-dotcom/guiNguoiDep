// ====== CHỈNH NỘI DUNG Ở ĐÂY ======
const CONFIG = {
  toName: "Cham",
  fromName: "Tuệ",
  songLabel: "🎵 Nhạc: Sinh Trưởng Ngoài Thời Gian",
  text: ` Tuệ Có đọc được cái này hay lắm chia sẻ Cham nèeee:
  4 NGÀY CUỐI CÙNG và ĐIỀU 2K8 BẮT BUỘC PHẢI LÀM TRƯỚC KỲ THI TN THPT 2026  
Nhiều bạn nghĩ 5 ngày cuối phải cày điên cuồng mới tăng điểm. Thực tế, giai đoạn này giống như những phút cuối của một trận bóng: người thắng thường không phải người chạy nhiều nhất mà là người hạn chế sai lầm tốt nhất.

* Tập trung câu dễ trước
Nhiều bạn mắc bệnh:
"Tôi phải hạ boss cuối trước."
Rồi ngồi vật lộn 20 phút với một câu khó.
Chiến thuật đúng:
- Ăn chắc câu dễ.
- Xử lý câu trung bình.
- Cuối cùng mới đánh câu khó.

* Bắt đầu ngủ đúng giờ
6 ngày cuối phải ngủ giống ngày thi.
Ví dụ:
- 22h30 ngủ.
- 6h dậy.
Không nên:
- 3h sáng ngủ.
- 11h trưa dậy.
Não sẽ lag trong ngày thi.
* Tập thức dậy vào giờ thi
Nếu môn đầu thi lúc 7h35:
Hãy tập cho não hoạt động mạnh từ 7h sáng.
Đừng để ngày thi mới bật chế độ "online".
* Giảm thời gian mạng xã hội
TikTok 10 phút:
TikTok 2 tiếng: 
Những ngày cuối, thuật toán còn khiến bạn:
- So sánh bản thân.
- Lo lắng.
- Hoảng điểm.
* Tránh nghe điểm số của người khác
Có đứa:
"Tao vừa làm đề được 29 điểm."
Nghe xong:
- Tim đập nhanh.
- Mất tự tin.
Nhớ rằng:
Điểm đề thử ≠ điểm thi thật.

* Xây dựng chiến thuật phòng thi
Ví dụ:
Toán
- 30 câu đầu: 20 phút.
- 15 câu giữa: 40 phút.
- Câu khó: thời gian còn lại.
Có chiến thuật sẽ đỡ hoảng.
* Luyện tô đáp án
Nghe buồn cười nhưng nhiều bạn mất điểm vì:
- Lệch dòng.
- Tô nhầm câu.
Hãy luyện thao tác này.
* Ăn uống an toàn
Không nên:
 Trà sữa quá nhiều.
 Đồ cay.
 Đồ sống.
 Ăn uống thất thường.
Mục tiêu:
Không đau bụng trước ngày thi.
* Giảm khối lượng học
2 ngày cuối:
Không cần học 12 tiếng/ngày.
Hãy giảm còn:
* 4–6 tiếng chất lượng.
Não cần thời gian sắp xếp kiến thức.
* Đọc lại sổ lỗi sai
Đây là tài liệu giá trị nhất.
Một lỗi tránh được = một câu điểm giữ lại.
20. Kiểm tra giấy tờ
Checklist:
 CCCD.
 Phiếu dự thi.
 Bút.
 Thước.
 Máy tính.
 Pin máy tính.
*. Xem đường đến điểm thi
Đi trước trên Google Maps.
Ước lượng:
- Thời gian.
- Đường tắc.
Không ai muốn sáng thi mới lạc đường.
* Chỉ ôn kiến thức cốt lõi vào ngày cuối
Không học:
- Chuyên đề mới.
- Đề siêu khó.
Chỉ xem:
- Công thức.
- Lỗi sai.
- Ghi chú quan trọng.
* Đi ngủ sớm trước ngày thi
Nếu không ngủ được:
- Đừng cố ép.
- Nằm thư giãn.
- Tránh điện thoại.
Chỉ cần nằm nghỉ vẫn tốt hơn thức khuya học.
* Giữ tâm lý khi gặp câu khó
Khi gặp câu khó:
 "Toang rồi."
 "Mình trượt mất."
 "Câu này khó với nhiều người."
 "Làm câu khác trước."
Một câu khó không quyết định cả kỳ thi.
Điều quan trọng nhất
Trong 5 ngày cuối, mục tiêu không phải là:
"Biến học lực 7 điểm thành 10 điểm."
Mà là:
"Giữ vững những gì đã học để vào phòng thi phát huy đúng năng lực."
Rất nhiều bạn mất 1–3 điểm không phải vì thiếu kiến thức mà vì:
- Thiếu ngủ.
- Hoảng loạn.
- Đọc nhầm đề.
- Quản lý thời gian kém.
Nếu em duy trì được sức khỏe, giấc ngủ và tâm lý ổn định trong 4 ngày cuối, đó đã là một lợi thế rất lớn so với nhiều thí sinh khác.  Chúc các nhỏ 2k8 có một kỳ thi THPT 2026 thật bình tĩnh và đạt đúng mục tiêu mình đặt ra. Ẩn bớt
`
};
// ================================

const $ = (s) => document.querySelector(s);

const typedEl = $("#typed");
const openBtn = $("#openBtn");
const toggleBtn = $("#toggleMusic");
const replayBtn = $("#replay");
const audio = $("#audio");

$("#toName").textContent = CONFIG.toName;
$("#fromName").textContent = `— from: ${CONFIG.fromName}`;
$("#songLabel").textContent = CONFIG.songLabel;

let typing = false;
let i = 0;
let raf = null;

function typeWriter(speed = 22) {
  cancelAnimationFrame(raf);
  typing = true;
  i = 0;
  typedEl.textContent = "";

  const text = CONFIG.text;
  const step = (t) => {
    // random nhẹ cho tự nhiên
    const jitter = Math.random() * 18;
    const chunk = (Math.random() < 0.12) ? 2 : 1;

    typedEl.textContent += text.slice(i, i + chunk);
    i += chunk;

    if (i < text.length) {
      raf = requestAnimationFrame(() => setTimeout(step, speed + jitter));
    } else {
      typing = false;
      confettiBurst();
    }
  };
  step();
}

async function startAudio() {
  // Trình duyệt thường chặn autoplay có tiếng nếu chưa có "user gesture"
  // Nên ta chỉ gọi play() sau khi người dùng bấm nút. (MDN + Chrome policy)
  try {
    audio.volume = 0.75;
    await audio.play();
    toggleBtn.textContent = "⏸️ Tạm dừng";
  } catch (e) {
    // Nếu vẫn bị chặn, hiện hướng dẫn đơn giản
    toggleBtn.textContent = "▶️ Bật nhạc";
  }
}

function toggleAudio() {
  if (audio.paused) {
    startAudio();
  } else {
    audio.pause();
    toggleBtn.textContent = "▶️ Bật nhạc";
  }
}

openBtn.addEventListener("click", async () => {
  openBtn.disabled = true;
  toggleBtn.disabled = false;
  replayBtn.disabled = false;

  await startAudio();
  typeWriter();
});

toggleBtn.addEventListener("click", toggleAudio);
replayBtn.addEventListener("click", () => typeWriter(18));

// ====== HIỆU ỨNG CONFETTI CANVAS (nhẹ, mượt) ======
const canvas = $("#fx");
const ctx = canvas.getContext("2d");

function resize() {
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resize);
resize();

let particles = [];
function confettiBurst() {
  const n = 140;
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  for (let k = 0; k < n; k++) {
    particles.push({
      x: cx + (Math.random() - 0.5) * 30,
      y: cy + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 10,
      vy: -Math.random() * 9 - 2,
      r: Math.random() * 4 + 2,
      a: 1,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.2
    });
  }
  if (!looping) {
    looping = true;
    requestAnimationFrame(loop);
  }
}

let looping = false;
function loop() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles = particles.filter(p => p.a > 0.02);
  for (const p of particles) {
    p.vy += 0.15;      // gravity
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.a *= 0.985;

    ctx.save();
    ctx.globalAlpha = p.a;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    // không set màu cố định: dùng gradient ngẫu nhiên
    const g = ctx.createLinearGradient(-p.r, 0, p.r, 0);
    g.addColorStop(0, "rgba(255,79,216,.95)");
    g.addColorStop(1, "rgba(124,246,255,.95)");
    ctx.fillStyle = g;
    ctx.fillRect(-p.r, -p.r * 0.55, p.r * 2, p.r * 1.1);
    ctx.restore();
  }

  if (particles.length > 0) {
    requestAnimationFrame(loop);
  } else {
    looping = false;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}
