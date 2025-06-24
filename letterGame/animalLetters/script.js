const animalWords = [
  "강아지", "거북", "고슴도치", "고양이", "곰", "기린", "너구리", "다람쥐", "닭", "독수리",
  "돼지", "두더지", "말", "뱀", "사슴", "사자", "새", "소", "악어", "얼룩말",
  "여우", "원숭이", "치타", "코끼리", "코뿔소", "코알라", "타조", "토끼", "판다", "펭귄",
  "하마", "호랑이"
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
let filledMap = {};

function updateProgressBar() {
  progressBar.innerHTML = '';
  results.forEach((res, i) => {
    const box = document.createElement('div');
    box.className = 'progress-box';
    if (res === true) box.classList.add('correct');
    else if (res === false) box.classList.add('incorrect');
    box.onclick = () => {
      currentIndex = i;
      loadProblem(i);
    };
    progressBar.appendChild(box);
  });
}

function playSound(name) {
  new Audio(`sounds/${name}.mp3`).play();
}

function loadProblem(index) {
  currentAnswer = selectedProblems[index];
  filledMap = {};

  imageEl.src = `images/pictures/${currentAnswer}.png`;
  imageEl.onerror = () => imageEl.alt = '문제';
  playSound(currentAnswer);
  imageEl.onclick = () => playSound(currentAnswer);

  // 정답칸 초기화
letterBoxes.innerHTML = '';
for (let i = 0; i < currentAnswer.length; i++) {
  const box = document.createElement('div');
  box.className = 'letter-box';
  box.dataset.index = i;

  box.ondragover = e => {
    e.preventDefault();
    box.style.transform = 'translateY(-5px)';
    box.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  };

  box.ondragleave = () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = 'none';
  };

  box.ondrop = e => {
    e.preventDefault();
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = 'none';

    const letter = e.dataTransfer.getData('text/plain');
    if (box.hasChildNodes()) return;

    const expected = currentAnswer[i];

    // ❌ 틀린 글자 처리
    if (letter !== expected) {
      results[currentIndex] = false;
      wrongSound.play();
      updateProgressBar();
      setTimeout(nextProblem, 700);
      return;
    }

    // ✅ 맞는 글자 처리
    const img = document.createElement('img');
    img.src = `images/letters/${letter}.png`;
    img.alt = letter;
    img.style.width = '100%';
    img.style.height = '100%';
    box.appendChild(img);

    filledMap[i] = letter;
    playSound(letter);
    checkAnswer();
  };

  letterBoxes.appendChild(box);
}


  // 보기 카드 만들기
  container.innerHTML = '';
  const answerLetters = currentAnswer.split('');
  const allLetters = new Set(answerLetters);
  while (allLetters.size < 10) {
    const randWord = animalWords[Math.floor(Math.random() * animalWords.length)];
    const randLetter = randWord[Math.floor(Math.random() * randWord.length)];
    allLetters.add(randLetter);
  }

  const shuffled = Array.from(allLetters).sort(() => Math.random() - 0.5);
  shuffled.forEach(letter => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = `images/letters/${letter}.png`;
    img.alt = letter;
    img.draggable = true;
    img.ondragstart = e => e.dataTransfer.setData('text/plain', letter);

    card.appendChild(img);
    container.appendChild(card);
  });
}

function checkAnswer() {
  if (Object.keys(filledMap).length !== currentAnswer.length) return;

  const isCorrect = currentAnswer.split('').every((ch, i) => filledMap[i] === ch);

  results[currentIndex] = isCorrect;
  (isCorrect ? correctSound : wrongSound).play();
  updateProgressBar();
  setTimeout(nextProblem, 700);
}

function nextProblem() {
  if (results.every(r => r !== null)) {
    const score = results.filter(r => r).length * 5;
    document.getElementById('final-score-text').textContent = `${score}점`;
    document.getElementById('final-score-message').textContent =
      score >= 55 ? '🎉 잘했어요!' : '😊 조금 더 연습해봐요';
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
