const sentenceProblems = [
  ["나"], ["너"], ["우리"], ["엄마"], ["아빠"],
  ["형"], ["누나"], ["동생"], ["할머니"], ["할아버지"],
  ["친구"], ["선생님"], ["아기"], ["아이"], ["사람"],
  ["손"], ["발"], ["눈"], ["코"], ["입"],
  ["귀"], ["머리"], ["배"], ["다리"], ["손가락"],
  ["학교"], ["집"], ["방"], ["문"], ["창문"],
  ["책"], ["연필"], ["지우개"], ["가방"], ["의자"],
  ["책상"], ["시계"], ["공"], ["사과"], ["바나나"],
  ["딸기"], ["포도"], ["수박"], ["오렌지"], ["귤"],
  ["빵"], ["밥"], ["물"], ["우유"], ["주스"],
  ["버스"], ["자동차"], ["자전거"], ["기차"], ["비행기"],
  ["나무"], ["꽃"], ["풀"], ["산"], ["바다"],
  ["하늘"], ["구름"], ["해"], ["달"], ["별"],
  ["비"], ["눈"], ["바람"], ["번개"], ["소리"],
  ["노래"], ["춤"], ["그림"], ["색"], ["모양"],
  ["강아지"], ["고양이"], ["토끼"], ["곰"], ["사자"],
  ["호랑이"], ["코끼리"], ["기린"], ["원숭이"], ["다람쥐"],
  ["개미"], ["나비"], ["벌"], ["새"], ["물고기"],
  ["공룡"], ["로봇"], ["자동문"], ["텔레비전"], ["컴퓨터"],
  ["전화기"], ["냉장고"], ["침대"], ["이불"], ["베개"]
];

const backgroundColors = [
  "#fcfa9b", "#d9fc9b", "#c3fce9", "#c3f1fc", "#d5dafb",
  "#e2d5fb", "#f3d5fb", "#ffdaea", "#fbbaad", "#fdf0d8"
];

const progressBar = document.getElementById('progress-bar');
const container = document.getElementById('game-container');
const boxes = document.getElementById('letter-boxes');
const celebration = document.getElementById('celebration');
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

let currentIndex = 0;
let results = [];
let selectedProblems = [];
let filledCount = 0;
let currentAnswer = [];
let currentColor = '';
let startTime;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function filterProblemsByLength(n) {
  return sentenceProblems.filter(problem => problem.length === n);
}

function startStage(numWords) {
  document.getElementById('stage-select').style.display = 'none';
  document.getElementById('progress-bar').style.display = 'grid';
  document.getElementById('letter-boxes').style.display = 'flex';
  document.getElementById('game-container').style.display = 'flex';

  const filtered = filterProblemsByLength(numWords);
  const shuffled = shuffle([...filtered]).slice(0, 10);
  selectedProblems = shuffled;
  results = Array(shuffled.length).fill(null);
  currentIndex = 0;
  startTime = Date.now();

  updateProgressBar();
  loadProblem(currentIndex);
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
  if (filledCount >= currentAnswer.length) return;

  const box = boxes.children[filledCount];
  box.textContent = word;
  box.style.backgroundColor = currentColor;
  playSound(word);

  if (word === currentAnswer[filledCount]) {
    filledCount++;
    card.classList.add("selected");
    if (filledCount === currentAnswer.length) {
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
  const problem = selectedProblems[index];
  currentAnswer = problem;
  filledCount = 0;
  currentColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  boxes.innerHTML = '';
  for (let i = 0; i < problem.length; i++) {
    const box = document.createElement('div');
    box.className = 'letter-box';
    boxes.appendChild(box);
  }

  container.innerHTML = '';
  const shuffled = shuffle([...problem]);
  shuffled.forEach(word => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = word;
    card.style.backgroundColor = currentColor;
    card.onclick = () => handleClick(word, card);
    container.appendChild(card);
  });
}

function nextProblem() {
  if (results.every(r => r !== null)) {
    const endTime = Date.now();
    const totalSeconds = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const score = results.filter(r => r).length * 10;

    document.getElementById('final-score-text').textContent = `${score}점`;
    document.getElementById('final-score-message').textContent = `${minutes}분 ${seconds}초 걸렸어요`;
    celebration.style.display = 'flex';
    return;
  }

  if (currentIndex < results.length - 1) {
    currentIndex++;
    loadProblem(currentIndex);
  }
}
