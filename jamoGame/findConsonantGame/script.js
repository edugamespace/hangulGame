const startTime = Date.now();

const allProblems = [
  { letter: "가", consonant: "ㄱ" }, { letter: "거", consonant: "ㄱ" }, { letter: "고", consonant: "ㄱ" },
  { letter: "구", consonant: "ㄱ" }, { letter: "그", consonant: "ㄱ" }, { letter: "기", consonant: "ㄱ" },
  { letter: "개", consonant: "ㄱ" }, { letter: "게", consonant: "ㄱ" },
  { letter: "나", consonant: "ㄴ" }, { letter: "너", consonant: "ㄴ" }, { letter: "노", consonant: "ㄴ" },
  { letter: "누", consonant: "ㄴ" }, { letter: "느", consonant: "ㄴ" }, { letter: "니", consonant: "ㄴ" },
  { letter: "다", consonant: "ㄷ" }, { letter: "더", consonant: "ㄷ" }, { letter: "디", consonant: "ㄷ" }
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
  const imageContainer = document.getElementById("image-container");
  imageContainer.querySelectorAll(".sound-button").forEach(btn => btn.remove());

  const soundBtn = document.createElement("span");
  soundBtn.textContent = "🔊";
  soundBtn.style.fontSize = "40px";
  soundBtn.style.cursor = "pointer";
  soundBtn.style.marginLeft = "20px";
  soundBtn.className = "sound-button";
  soundBtn.onclick = () => playLetterSound(prob.letter);
  imageContainer.appendChild(soundBtn);

  const choices = new Set();
  choices.add(correct);
  while (choices.size < 5) {
    const rand = allConsonants[Math.floor(Math.random() * allConsonants.length)];
    choices.add(rand);
  }

  const shuffled = [...choices].sort(() => Math.random() - 0.5);
  container.innerHTML = '';

  const pastelColors = ['#fee1e1','#fce5ce','#fefbc2','#e4febd','#d2fee5','#e3e1fe','#dce3fd','#f3e1fe'];
  const problemColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];

  shuffled.forEach(con => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundColor = problemColor;

    const img = document.createElement('img');
    img.src = `images/answers/${con}.png`;
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