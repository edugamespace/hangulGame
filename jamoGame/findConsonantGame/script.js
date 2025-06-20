const startTime = Date.now();

const allProblems = [
  { letter: "가", consonant: "ㄱ" }, { letter: "거", consonant: "ㄱ" }, { letter: "고", consonant: "ㄱ" }, { letter: "구", consonant: "ㄱ" }, { letter: "그", consonant: "ㄱ" }, { letter: "기", consonant: "ㄱ" }, { letter: "개", consonant: "ㄱ" }, { letter: "게", consonant: "ㄱ" },
  { letter: "나", consonant: "ㄴ" }, { letter: "너", consonant: "ㄴ" }, { letter: "노", consonant: "ㄴ" }, { letter: "누", consonant: "ㄴ" }, { letter: "느", consonant: "ㄴ" }, { letter: "니", consonant: "ㄴ" }, { letter: "내", consonant: "ㄴ" }, { letter: "네", consonant: "ㄴ" },
  { letter: "다", consonant: "ㄷ" }, { letter: "더", consonant: "ㄷ" }, { letter: "도", consonant: "ㄷ" }, { letter: "두", consonant: "ㄷ" }, { letter: "드", consonant: "ㄷ" }, { letter: "디", consonant: "ㄷ" }, { letter: "대", consonant: "ㄷ" }, { letter: "데", consonant: "ㄷ" },
  { letter: "라", consonant: "ㄹ" }, { letter: "러", consonant: "ㄹ" }, { letter: "로", consonant: "ㄹ" }, { letter: "루", consonant: "ㄹ" }, { letter: "르", consonant: "ㄹ" }, { letter: "리", consonant: "ㄹ" }, { letter: "래", consonant: "ㄹ" }, { letter: "레", consonant: "ㄹ" },
  { letter: "마", consonant: "ㅁ" }, { letter: "머", consonant: "ㅁ" }, { letter: "모", consonant: "ㅁ" }, { letter: "무", consonant: "ㅁ" }, { letter: "므", consonant: "ㅁ" }, { letter: "미", consonant: "ㅁ" }, { letter: "매", consonant: "ㅁ" }, { letter: "메", consonant: "ㅁ" },
  { letter: "바", consonant: "ㅂ" }, { letter: "버", consonant: "ㅂ" }, { letter: "보", consonant: "ㅂ" }, { letter: "부", consonant: "ㅂ" }, { letter: "브", consonant: "ㅂ" }, { letter: "비", consonant: "ㅂ" }, { letter: "배", consonant: "ㅂ" }, { letter: "베", consonant: "ㅂ" },
  { letter: "사", consonant: "ㅅ" }, { letter: "서", consonant: "ㅅ" }, { letter: "소", consonant: "ㅅ" }, { letter: "수", consonant: "ㅅ" }, { letter: "스", consonant: "ㅅ" }, { letter: "시", consonant: "ㅅ" }, { letter: "새", consonant: "ㅅ" }, { letter: "세", consonant: "ㅅ" },
  { letter: "아", consonant: "ㅇ" }, { letter: "어", consonant: "ㅇ" }, { letter: "오", consonant: "ㅇ" }, { letter: "우", consonant: "ㅇ" }, { letter: "으", consonant: "ㅇ" }, { letter: "이", consonant: "ㅇ" }, { letter: "애", consonant: "ㅇ" }, { letter: "에", consonant: "ㅇ" },
  { letter: "자", consonant: "ㅈ" }, { letter: "저", consonant: "ㅈ" }, { letter: "조", consonant: "ㅈ" }, { letter: "주", consonant: "ㅈ" }, { letter: "즈", consonant: "ㅈ" }, { letter: "지", consonant: "ㅈ" }, { letter: "재", consonant: "ㅈ" }, { letter: "제", consonant: "ㅈ" },
  { letter: "차", consonant: "ㅊ" }, { letter: "처", consonant: "ㅊ" }, { letter: "초", consonant: "ㅊ" }, { letter: "추", consonant: "ㅊ" }, { letter: "츠", consonant: "ㅊ" }, { letter: "치", consonant: "ㅊ" }, { letter: "채", consonant: "ㅊ" }, { letter: "체", consonant: "ㅊ" },
  { letter: "카", consonant: "ㅋ" }, { letter: "커", consonant: "ㅋ" }, { letter: "코", consonant: "ㅋ" }, { letter: "쿠", consonant: "ㅋ" }, { letter: "크", consonant: "ㅋ" }, { letter: "키", consonant: "ㅋ" }, { letter: "캐", consonant: "ㅋ" }, { letter: "케", consonant: "ㅋ" },
  { letter: "타", consonant: "ㅌ" }, { letter: "터", consonant: "ㅌ" }, { letter: "토", consonant: "ㅌ" }, { letter: "투", consonant: "ㅌ" }, { letter: "트", consonant: "ㅌ" }, { letter: "티", consonant: "ㅌ" }, { letter: "태", consonant: "ㅌ" }, { letter: "테", consonant: "ㅌ" },
  { letter: "파", consonant: "ㅍ" }, { letter: "퍼", consonant: "ㅍ" }, { letter: "포", consonant: "ㅍ" }, { letter: "푸", consonant: "ㅍ" }, { letter: "프", consonant: "ㅍ" }, { letter: "피", consonant: "ㅍ" }, { letter: "패", consonant: "ㅍ" }, { letter: "페", consonant: "ㅍ" },
  { letter: "하", consonant: "ㅎ" }, { letter: "허", consonant: "ㅎ" }, { letter: "호", consonant: "ㅎ" }, { letter: "후", consonant: "ㅎ" }, { letter: "흐", consonant: "ㅎ" }, { letter: "히", consonant: "ㅎ" }, { letter: "해", consonant: "ㅎ" }, { letter: "헤", consonant: "ㅎ" }
];


const allConsonants = ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

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
  const correct = prob.consonant;

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

  allConsonants.forEach(con => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundColor = 'transparent';
    card.style.boxShadow = 'none';

    const img = document.createElement('img');
    img.src = `images/answers/${con}.png`;
    img.alt = con;
    card.appendChild(img);

    card.onclick = () => {
      if (con === correct) {
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