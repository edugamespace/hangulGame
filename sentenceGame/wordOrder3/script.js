// ✅ 단어 3개로 문장을 완성하는 게임 (드래그 앤 드롭 버전)

const sentenceProblems = [
  ["나는", "사과를", "먹었어"],
  ["엄마가", "요리를", "하셔"],
  ["나는", "물을", "마셨어"],
  ["우리는", "집에", "갈거야"],
  ["나는", "할머니를", "사랑해"],
  ["고양이가", "조용히", "걸어가"],
  ["누나가", "노래를", "불러"],
  ["동생이", "울고", "있어"],
  ["아빠는", "책을", "읽어"],
  ["친구가", "활짝", "웃어"],
  ["강아지가", "멍멍", "짖어"],
  ["형이", "공을", "찼어"],
  ["아이들이", "춤을", "춰요"],
  ["나는", "우유를", "좋아해"],
  ["아기가", "자고", "있어"],
  ["바람이", "불고", "있어"],
  ["나는", "옷을", "입었어"],
  ["선생님께", "칭찬을", "받았어"],
  ["새가", "노래를", "불러요"],
  ["친구가", "손을", "흔들어"],
  ["우리는", "게임을", "했어"],
  ["비가", "많이", "와요"],
  ["엄마가", "청소를", "했어"],
  ["나는", "모자를", "썼어"]
];

const selectedProblems = sentenceProblems
  .map((problem, index) => ({ problem, index }))
  .sort(() => Math.random() - 0.5)
  .slice(0, 20);

const progressBar = document.getElementById('progress-bar');
const container = document.getElementById('game-container');
const boxes = document.getElementById('letter-boxes');
const celebration = document.getElementById('celebration');
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

let currentIndex = 0;
let results = Array(selectedProblems.length).fill(null);
let filledCount = 0;
let currentAnswer = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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

function handleClick(word, card) {
  if (filledCount >= 3) return;

  const targetWord = currentAnswer[filledCount];
  playSound(word);

  const box = boxes.children[filledCount];
  const originalIndex = selectedProblems[currentIndex].index;
  const wordIndex = selectedProblems[currentIndex].problem.indexOf(word);
  const img = document.createElement('img');
  img.src = `images/${originalIndex + 1}_${filledCount + 1}_${word}.png`;
  img.style.width = '100%';
  img.style.height = '100%';
  img.onerror = () => console.warn("이미지 로드 실패:", img.src);
  box.appendChild(img);

  if (word === targetWord) {
    filledCount++;
    card.classList.add("selected");
    if (filledCount === 3) {
      results[currentIndex] = true;
      correctSound.play();
      updateProgressBar();
      setTimeout(nextProblem, 700);
    }
  } else {
    results[currentIndex] = false;
    wrongSound.play();
    updateProgressBar();
    setTimeout(nextProblem, 700);
  }
}

function loadProblem(index) {
  const { problem, index: originalIndex } = selectedProblems[index];
  currentAnswer = problem;
  filledCount = 0;

  boxes.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const box = document.createElement('div');
    box.className = 'letter-box';
    box.style.width = '180px';
    box.style.height = '90px';
    box.style.border = '2px solid #888';
    box.style.borderRadius = '12px';
    box.style.backgroundColor = '#fff';
    box.style.marginBottom = '30px';
    boxes.appendChild(box);
  }

  container.innerHTML = '';
  const shuffled = shuffle([0, 1, 2]);

  shuffled.forEach((i) => {
    const word = currentAnswer[i];

    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '180px';
    card.style.height = '90px';
    card.style.margin = '10px';

    const img = document.createElement('img');
    img.src = `images/${originalIndex + 1}_${i + 1}_${word}.png`;
    img.alt = word;
    img.style.width = '100%';
    img.style.height = '100%';
    img.onerror = () => {
      console.warn("이미지 로드 실패:", img.src);
      card.innerHTML = `<span style="font-size: 20px">${word}</span>`;
    };

    card.appendChild(img);
    card.onclick = () => handleClick(word, card);
    container.appendChild(card);
  });
}

function nextProblem() {
  if (results.every(r => r !== null)) {
    const score = results.filter(r => r).length * 5;
    document.getElementById('final-score-text').textContent = `${score}점`;
    document.getElementById('final-score-message').textContent =
      score >= 55 ? '🎆 참 잘했어요!' : '😊 조금 더 연습해 볼까요?';
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
