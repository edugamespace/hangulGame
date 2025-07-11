const sentenceProblems = [
  ["나는", "사과를", "먹었어"],
  ["엄마가", "요리를", "하셔"],
  ["나는", "물을", "마셨어"],
  ["나는", "사과를", "먹었어"],
  ["우리는", "집에", "갈거야"],
  ["나는", "할머니를", "사랑해"],
  ["나는", "우유를", "마셨어"],
  ["고양이가", "조용히", "걸어가"],
  ["동생이", "조용히", "걸어가"],
  ["친구가", "조용히", "걸어가"],
  ["동생이", "울고", "있어"],
  ["누나가", "노래를", "불러"],
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
  ["아빠는", "청소를", "하셔"],
  ["나는", "모자를", "썼어"],
  ["엄마가", "활짝", "웃어"],
  ["산에", "나무가", "많아"],
  ["바람이", "불어서", "추워"],
  ["눈이", "많이", "와"],
  ["우리는", "눈사람을", "만들었어"],
  ["커다란", "눈사람", "만들자"],
  ["같이", "청소", "하자"],
  ["내", "침대는", "푹신해"],
  ["나는", "동생을", "사랑해"],
  ["우리는", "계곡에", "왔어요"],
  ["시원한", "수박을", "먹어요"],
  ["친구가", "나를", "불러"],
  ["아빠가", "나를", "부르셔"],
  ["엄마가", "나를", "부르셔"],
  ["할머니", "심부름을", "했어"],
  ["식물이", "쑥쑥", "자라"],
  ["나무에서", "열매를", "땄어"],
  ["과일을", "따서", "먹어"],
  ["딸기", "케이크를", "만들자"],
  ["고양이가", "자고", "있어"],
  ["나는", "강아지를", "좋아해"],
  ["모자를", "쓰고", "나가자"],
  ["우산을", "쓰고", "가자"],
  ["학교", "앞에서", "만나"],
  ["우리", "집에", "놀러와"],
  ["같이", "떡볶이", "먹자"],
  ["너는", "무엇을", "좋아하니"],
  ["나는", "정직하게", "말해"],
  ["거짓말을", "하면", "안돼"],
  ["아빠랑", "자전거를", "타"],
  ["무거운", "가방을", "들었다"],
  ["엄마가", "나를", "부르신다"],
  ["아기가", "크게", "울었다"],
  ["우리는", "학교에", "간다"],
  ["비가", "많이", "온다"],
  ["나는", "우산을", "챙겼어"],
  ["달리던", "아이가", "넘어졌다"],
  ["언니는", "노래를", "부른다"],
  ["우리", "같이", "놀자"],
  ["나는", "편지를", "썼다"],
  ["선생님이", "자세히", "알려주신다"],
  ["아기가", "장난감을", "만진다"],
  ["아이는", "공을", "찬다"],
  ["언니가", "피아노를", "친다"],
  ["엄마가", "마트에", "간다"],
  ["나는", "선물을", "받았다"],
  ["선생님이", "책을", "읽어주신다"],
  ["강아지가", "꼬리를", "흔든다"],
  ["친구의", "전화를", "받았다"],
  ["선생님의", "칭찬을", "들었다"],
  ["엄마의", "전화를", "받았다"],
  ["나는", "과자를", "먹었어"],
  ["누나는", "요리를", "잘해"],
  ["고양이가", "나를", "봤다"],
  ["강아지가", "인형을", "물었어"],
  ["엄마가", "나를", "안았어"],
  ["나는", "공을", "받았다"],
  ["아이가", "물을", "흘렸다"],
  ["나는", "숙제를", "끝냈다"]
];



const backgroundColors = [
  "#fcfa9b", "#d9fc9b", "#c3fce9", "#c3f1fc", "#d5dafb",
  "#e2d5fb", "#f3d5fb", "#ffdaea", "#fbbaad", "#fdf0d8"
];

const selectedProblems = sentenceProblems
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
let currentColor = '';
let startTime = Date.now();

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
  if (filledCount >= 4) return;

  const box = boxes.children[filledCount];
  box.textContent = word;
  box.style.backgroundColor = currentColor;
  playSound(word);

  if (word === currentAnswer[filledCount]) {
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
  const problem = selectedProblems[index];
  currentAnswer = problem;
  filledCount = 0;
  currentColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  // 문제 박스 초기화
  boxes.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const box = document.createElement('div');
    box.className = 'letter-box';
    box.style.width = '180px';
    box.style.height = '100px';
    box.style.border = '1px solid #888';
    box.style.borderRadius = '12px';
    box.style.backgroundColor = '#fff';
    box.style.fontSize = '28px';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';
    boxes.appendChild(box);
  }

  // 보기 카드 생성
  container.innerHTML = '';
  const shuffled = shuffle([...problem]);

  shuffled.forEach(word => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = word;
    card.style.backgroundColor = currentColor;
    card.style.fontSize = '28px';
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

    const score = results.filter(r => r).length * 5;
    document.getElementById('final-score-text').textContent = `${score}점`;
    document.getElementById('final-score-message').textContent =
      `${minutes}분 ${seconds}초 걸렸어요`;

    celebration.style.display = 'flex';
    return;
  }

  if (currentIndex < results.length - 1) {
    currentIndex++;
    loadProblem(currentIndex);
  }
}

// 초기 실행
updateProgressBar();
loadProblem(currentIndex);
