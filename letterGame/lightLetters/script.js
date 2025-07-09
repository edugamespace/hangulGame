const animalWords = [
  "가위", "개", "개구리", "개미", "거미", "고구마", "고래", "과자", "구두",
  "귀", "기차", "나무", "나비", "나초", "너구리", "도로", "두더지", "두루미",
  "마스크", "매미", "모기", "모래", "모자", "무", "무지개", "바게트", "바구니",
  "바나나", "바다", "바지", "배", "배구", "버스", "비", "비누", "사과",
  "사자", "소", "스파게티", "아기", "아빠", "아파트", "야구", "여우", "오리",
  "오이", "오토바이", "요구르트", "우유", "의자", "제비", "주사기", "주스", "지우개",
  "초코파이", "치마", "치즈", "치타", "카메라", "커피", "케이크", "코", "코끼리",
  "쿠키", "테이프", "토끼", "토마토", "토스트", "티셔츠", "포도", "포크", "피아노",
  "피자", "하마", "해", "휴지"
];

const selectedProblems = animalWords.sort(() => Math.random() - 0.5).slice(0, 20);

const progressBar = document.getElementById('progress-bar');
const imageEl = document.getElementById('problemImage');
const container = document.getElementById('game-container');
const letterBoxes = document.getElementById('letter-boxes');
const celebration = document.getElementById('celebration');
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

let currentIndex = 0;
let results = Array(20).fill(null);
let currentAnswer = "";
let currentFilled = 0;

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

function playSound(name) {
  new Audio(`sounds/${name}.mp3`).play();
}

function loadProblem(index) {
  currentAnswer = selectedProblems[index];
  currentFilled = 0;

  imageEl.src = `images/${currentAnswer}.png`;
  playSound(currentAnswer);
  imageEl.onclick = () => playSound(currentAnswer);

  letterBoxes.innerHTML = '';
  for (let i = 0; i < currentAnswer.length; i++) {
    const box = document.createElement('div');
    box.className = 'letter-box';
    letterBoxes.appendChild(box);
  }

  // 보기 생성
  container.innerHTML = '';
  const answerLetters = currentAnswer.split('');
  const allLetters = new Set(answerLetters);
  while (allLetters.size < 6) {
    const randWord = animalWords[Math.floor(Math.random() * animalWords.length)];
    const randLetter = randWord[Math.floor(Math.random() * randWord.length)];
    allLetters.add(randLetter);
  }

  const shuffled = Array.from(allLetters).sort(() => Math.random() - 0.5);
  shuffled.forEach(letter => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = letter;
    card.onclick = () => handleClick(letter, card);
    container.appendChild(card);
  });
}

function handleClick(letter, card) {
  if (letter === currentAnswer[currentFilled]) {
    playSound(letter);
    const box = letterBoxes.children[currentFilled];
    box.textContent = letter;
    currentFilled++;
    if (currentFilled === currentAnswer.length) {
      results[currentIndex] = true;
      correctSound.play();
      updateProgressBar();
      setTimeout(nextProblem, 700);
    }
  } else {
    wrongSound.play();
    results[currentIndex] = false;
    updateProgressBar();
    setTimeout(nextProblem, 700);
  }
}

function nextProblem() {
  if (results.every(r => r !== null)) {
    const score = results.filter(r => r).length;
    const finalScore = score * 5;

    document.getElementById('final-score-text').textContent = `${finalScore}점`;
    document.getElementById('final-score-message').textContent =
      finalScore >= 55 ? '🎆 참 잘했어요!' : '😊 조금 더 연습해 볼까요?';

    celebration.style.display = 'flex';
    return;
  }

  if (currentIndex < results.length - 1) {
    currentIndex++;
    loadProblem(currentIndex);
  }
}

updateProgressBar();
loadProblem(currentIndex);
