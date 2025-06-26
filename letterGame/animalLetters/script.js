
const animalWords = [
  "강아지","거북","고슴도치","고양이","곰","기린","너구리","다람쥐","닭","독수리",
  "돼지","두더지","말","뱀","사슴","사자","새","소","악어","얼룩말",
  "여우","원숭이","치타","코끼리","코뿔소","코알라","타조","토끼","판다","펭귄","하마","호랑이"
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

     // ✅ 클릭하면 해당 문제로 이동
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

  // 이미지 설정
  imageEl.src = `images/pictures/${currentAnswer}.png`;
  playSound(currentAnswer); //문제 출제 시 자동 재생
  imageEl.onclick = () => playSound(currentAnswer); // ✅ 이미지 클릭 시 재생


  // 글자 박스 생성
  letterBoxes.innerHTML = '';
  for (let i = 0; i < currentAnswer.length; i++) {
    const box = document.createElement('div');
    box.className = 'letter-box';
    letterBoxes.appendChild(box);
  }

  // 보기 만들기
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
    card.appendChild(img);
    card.onclick = () => handleClick(letter, card);
    container.appendChild(card);
  });
}

function handleClick(letter, card) {
  if (letter === currentAnswer[currentFilled]) {
    playSound(letter);
    const box = letterBoxes.children[currentFilled];
    const img = document.createElement('img');
    img.src = `images/letters/${letter}.png`;
    img.style.width = "100%";
    img.style.height = "100%";
    box.appendChild(img);
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
