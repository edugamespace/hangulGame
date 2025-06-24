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
let currentAnswer = [];
let dropCount = 0;

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

function handleDrop(word, box) {
  if (box.hasChildNodes()) return;

  const { index: originalIndex } = selectedProblems[currentIndex];
  const boxIndex = parseInt(box.dataset.index) - 1;

  playSound(word);
  const img = document.createElement('img');
  img.src = `images/${originalIndex + 1}_${box.dataset.index}_${word}.png`;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.borderRadius = '12px';
  img.onerror = () => console.warn("이미지 로드 실패:", img.src);
  box.appendChild(img);

  // 즉시 오답 처리
  if (word !== currentAnswer[boxIndex]) {
    results[currentIndex] = false;
    wrongSound.play();
    updateProgressBar();
    setTimeout(nextProblem, 700);
    return;
  }

  box.dataset.filled = word;
  dropCount++;

  if (dropCount === 3) {
    const isCorrect = Array.from(boxes.children).every((box, idx) => box.dataset.filled === currentAnswer[idx]);
    results[currentIndex] = isCorrect;
    (isCorrect ? correctSound : wrongSound).play();
    updateProgressBar();
    setTimeout(nextProblem, 700);
  }
}

function loadProblem(index) {
  const { problem, index: originalIndex } = selectedProblems[index];
  currentAnswer = problem;
  dropCount = 0;

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
    box.dataset.index = i + 1;
    box.addEventListener('dragover', e => e.preventDefault());
    box.addEventListener('drop', e => {
      e.preventDefault();
      const word = e.dataTransfer.getData('text/plain');
      handleDrop(word, box);
    });
    boxes.appendChild(box);
  }

  container.innerHTML = '';
  const shuffled = shuffle([0, 1, 2]);

  shuffled.forEach((i) => {
    const word = currentAnswer[i];
    const img = document.createElement('img');
    img.src = `images/${originalIndex + 1}_${i + 1}_${word}.png`;
    img.alt = word;
    img.draggable = true;
    img.style.width = '180px';
    img.style.height = '90px';
    img.style.margin = '10px';
    img.style.borderRadius = '12px';
    img.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', word);
    });
    img.onerror = () => {
      console.warn("이미지 로드 실패:", img.src);
      img.remove();
      const fallback = document.createElement('div');
      fallback.textContent = word;
      fallback.draggable = true;
      fallback.style.width = '180px';
      fallback.style.height = '90px';
      fallback.style.margin = '10px';
      fallback.style.display = 'flex';
      fallback.style.justifyContent = 'center';
      fallback.style.alignItems = 'center';
      fallback.style.border = '1px solid #ccc';
      fallback.style.borderRadius = '12px';
      fallback.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', word);
      });
      container.appendChild(fallback);
    };
    container.appendChild(img);
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
