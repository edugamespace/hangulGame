// ✅ 단어 3개로 문장을 완성하는 게임

const sentenceProblems = [
  ["나는", "사과를", "먹었어"],
  ["누나가", "노래를", "불러"],
  ["아이가", "웃으며", "달린다"],
  ["선생님은", "책을", "읽어요"],
  ["우리는", "공원에서", "놀았어"]
];

const selectedProblems = sentenceProblems.sort(() => Math.random() - 0.5).slice(0, 10);

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
  filledCount = 0;

  // 문제 카드 초기화
  boxes.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const box = document.createElement('div');
    box.className = 'letter-box';
    box.style.width = '180px';
    box.style.height = '90px';
    box.style.border = '2px solid #888';
    box.style.borderRadius = '12px';
    box.style.backgroundColor = '#fff';
    boxes.appendChild(box);
  }

  // 보기 카드 섞기
  container.innerHTML = '';
  const shuffled = [...currentAnswer].sort(() => Math.random() - 0.5);
  shuffled.forEach(word => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '180px';
    card.style.height = '90px';
    const img = document.createElement('img');
    img.src = `images/${word}.png`;
    img.alt = word;
    card.appendChild(img);
    card.onclick = () => handleClick(word, card);
    container.appendChild(card);
  });
}

function handleClick(word, card) {
  if (filledCount >= 3) return;

  const targetWord = currentAnswer[filledCount];
  playSound(word);

  const box = boxes.children[filledCount];
  const img = document.createElement('img');
  img.src = `images/${word}.png`;
  img.style.width = '100%';
  img.style.height = '100%';
  box.appendChild(img);

  if (word === targetWord) {
    filledCount++;
    card.remove();
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
