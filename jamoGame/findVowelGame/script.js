const startTime = Date.now();

const allProblems = [
  // ㅏ
  { letter: "가", vowel: "ㅏ" }, { letter: "나", vowel: "ㅏ" }, { letter: "다", vowel: "ㅏ" }, { letter: "라", vowel: "ㅏ" }, { letter: "마", vowel: "ㅏ" }, { letter: "바", vowel: "ㅏ" }, { letter: "사", vowel: "ㅏ" }, { letter: "아", vowel: "ㅏ" },
  { letter: "자", vowel: "ㅏ" }, { letter: "차", vowel: "ㅏ" }, { letter: "카", vowel: "ㅏ" }, { letter: "타", vowel: "ㅏ" },
  { letter: "파", vowel: "ㅏ" }, { letter: "하", vowel: "ㅏ" },

  // ㅓ
  { letter: "거", vowel: "ㅓ" }, { letter: "너", vowel: "ㅓ" }, { letter: "더", vowel: "ㅓ" }, { letter: "러", vowel: "ㅓ" }, { letter: "머", vowel: "ㅓ" }, { letter: "버", vowel: "ㅓ" }, { letter: "서", vowel: "ㅓ" }, { letter: "어", vowel: "ㅓ" },
  { letter: "저", vowel: "ㅓ" }, { letter: "처", vowel: "ㅓ" }, { letter: "커", vowel: "ㅓ" }, { letter: "터", vowel: "ㅓ" },
  { letter: "퍼", vowel: "ㅓ" }, { letter: "허", vowel: "ㅓ" },

  // ㅗ
  { letter: "고", vowel: "ㅗ" }, { letter: "노", vowel: "ㅗ" }, { letter: "도", vowel: "ㅗ" }, { letter: "로", vowel: "ㅗ" }, { letter: "모", vowel: "ㅗ" }, { letter: "보", vowel: "ㅗ" }, { letter: "소", vowel: "ㅗ" }, { letter: "오", vowel: "ㅗ" },
  { letter: "조", vowel: "ㅗ" }, { letter: "초", vowel: "ㅗ" }, { letter: "코", vowel: "ㅗ" }, { letter: "토", vowel: "ㅗ" },
  { letter: "포", vowel: "ㅗ" }, { letter: "호", vowel: "ㅗ" },

  // ㅜ
  { letter: "구", vowel: "ㅜ" }, { letter: "누", vowel: "ㅜ" }, { letter: "두", vowel: "ㅜ" }, { letter: "루", vowel: "ㅜ" }, { letter: "무", vowel: "ㅜ" }, { letter: "부", vowel: "ㅜ" }, { letter: "수", vowel: "ㅜ" }, { letter: "우", vowel: "ㅜ" },
  { letter: "주", vowel: "ㅜ" }, { letter: "추", vowel: "ㅜ" }, { letter: "쿠", vowel: "ㅜ" }, { letter: "투", vowel: "ㅜ" },
  { letter: "푸", vowel: "ㅜ" }, { letter: "후", vowel: "ㅜ" },

  // ㅡ
  { letter: "그", vowel: "ㅡ" }, { letter: "느", vowel: "ㅡ" }, { letter: "드", vowel: "ㅡ" }, { letter: "르", vowel: "ㅡ" }, { letter: "므", vowel: "ㅡ" }, { letter: "브", vowel: "ㅡ" }, { letter: "스", vowel: "ㅡ" }, { letter: "으", vowel: "ㅡ" },
  { letter: "즈", vowel: "ㅡ" }, { letter: "츠", vowel: "ㅡ" }, { letter: "크", vowel: "ㅡ" }, { letter: "트", vowel: "ㅡ" },
  { letter: "프", vowel: "ㅡ" }, { letter: "흐", vowel: "ㅡ" },

  // ㅣ
  { letter: "기", vowel: "ㅣ" }, { letter: "니", vowel: "ㅣ" }, { letter: "디", vowel: "ㅣ" }, { letter: "리", vowel: "ㅣ" }, { letter: "미", vowel: "ㅣ" }, { letter: "비", vowel: "ㅣ" }, { letter: "시", vowel: "ㅣ" }, { letter: "이", vowel: "ㅣ" },
  { letter: "지", vowel: "ㅣ" }, { letter: "치", vowel: "ㅣ" }, { letter: "키", vowel: "ㅣ" }, { letter: "티", vowel: "ㅣ" },
  { letter: "피", vowel: "ㅣ" }, { letter: "히", vowel: "ㅣ" },

  // ㅐ
  { letter: "개", vowel: "ㅐ" }, { letter: "내", vowel: "ㅐ" }, { letter: "대", vowel: "ㅐ" }, { letter: "래", vowel: "ㅐ" }, { letter: "매", vowel: "ㅐ" }, { letter: "배", vowel: "ㅐ" }, { letter: "새", vowel: "ㅐ" }, { letter: "재", vowel: "ㅐ" },
  { letter: "채", vowel: "ㅐ" }, { letter: "캐", vowel: "ㅐ" }, { letter: "태", vowel: "ㅐ" }, { letter: "패", vowel: "ㅐ" },
  { letter: "해", vowel: "ㅐ" },

  // ㅔ
  { letter: "게", vowel: "ㅔ" }, { letter: "네", vowel: "ㅔ" }, { letter: "데", vowel: "ㅔ" }, { letter: "레", vowel: "ㅔ" }, { letter: "메", vowel: "ㅔ" }, { letter: "베", vowel: "ㅔ" }, { letter: "세", vowel: "ㅔ" }, { letter: "제", vowel: "ㅔ" },
  { letter: "체", vowel: "ㅔ" }, { letter: "케", vowel: "ㅔ" }, { letter: "테", vowel: "ㅔ" }, { letter: "페", vowel: "ㅔ" },
  { letter: "헤", vowel: "ㅔ" }
];



const allVowels = ['ㅏ','ㅓ','ㅗ','ㅜ','ㅡ','ㅣ','ㅐ','ㅔ'];

const problems = allProblems.sort(() => Math.random() - 0.5).slice(0, 20);

const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

const progressBar = document.getElementById('progress-bar');
const imageEl = document.getElementById('problemImage');
const container = document.getElementById('game-container');
const celebration = document.getElementById('celebration');

let currentIndex = 0;
const results = Array(problems.length).fill(null);

function updateProgressBar() {
  progressBar.innerHTML = '';
  results.forEach((res, i) => {
    const box = document.createElement('div');
    box.className = 'progress-box';
    if (res === true) box.classList.add('correct');
    else if (res === false) box.classList.add('incorrect');
    box.onclick = () => {
      currentIndex = i;
      loadProblem(currentIndex);
    };
    progressBar.appendChild(box);
  });
}

function playLetterSound(letter) {
  const audio = new Audio(`sounds/${letter}.mp3`);
  audio.play();
}

function loadProblem(index) {
  const prob = problems[index];
  const correct = prob.vowel;

  imageEl.src = `images/problems/${prob.letter}.png`;
  imageEl.alt = prob.letter;

  // 자동 음성 재생
  playLetterSound(prob.letter);

  // 문제 카드 옆에 🔊 이모지 추가
 const problemCard = document.getElementById("problem-card");
problemCard.querySelectorAll(".sound-button").forEach(btn => btn.remove());

const soundBtn = document.createElement("span");
soundBtn.textContent = "🔊";
soundBtn.className = "sound-button"; // 스타일 적용을 위해 이 클래스 유지
soundBtn.onclick = () => playLetterSound(prob.letter);

problemCard.appendChild(soundBtn); // ✅ 문제카드에 붙이기


   // 모든 보기 초기화 및 생성
  container.innerHTML = '';

  allVowels.forEach(vow => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundColor = 'transparent';
    card.style.boxShadow = 'none';

    const img = document.createElement('img');
    img.src = `images/answers/${vow}.png`;
    img.alt = vow;
    card.appendChild(img);

    card.onclick = () => {
      if (vow === correct) {
        correctSound.play();
        results[index] = true;
        updateProgressBar();
        setTimeout(nextProblem, 700);
      } else {
        wrongSound.play();
        results[index] = false;
        updateProgressBar();
        setTimeout(nextProblem, 700);
      }
    };

    container.appendChild(card);
  });
}

updateProgressBar();
loadProblem(currentIndex);

function nextProblem() {
  if (results.every(r => r !== null)) {
    const score = results.filter(r => r).length;
    const finalScore = score * 5;

    const scoreText = document.getElementById('final-score-text');
    const messageText = document.getElementById('final-score-message');

    scoreText.textContent = `${finalScore}점`;
    messageText.textContent = finalScore >= 55 ? '🎆 참 잘했어요!' : '😊 조금 더 연습해 볼까요?';

    const endTime = Date.now();
    const elapsedSec = Math.floor((endTime - startTime) / 1000);
    const timeText = document.createElement('div');
    timeText.textContent = `⏱ 걸린 시간: ${elapsedSec}초`;
    timeText.style.marginTop = '60px';
    messageText.insertAdjacentElement('afterend', timeText);

    celebration.style.display = 'flex';
    return;
  }
  if (currentIndex < problems.length - 1) {
    currentIndex++;
    loadProblem(currentIndex);
  }
}