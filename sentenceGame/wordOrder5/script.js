const sentenceProblems = [
  ["하마는", "물속에서", "헤엄을", "잘", "칩니다"],
  ["샴푸로", "거품을", "만들어", "머리를", "감습니다"],
  ["토끼는", "앞다리가", "짧고", "뒷다리는", "깁니다"],
  ["장미꽃", "줄기에는", "뾰족한", "가시가", "있습니다"],
  ["잠든든", "아기가", "유모차에", "누워", "있습니다"],
  ["엄마가", "나를", "안아주면", "기분이", "좋습니다"],
  ["눈이", "많이", "오면", "눈썰매를", "탑니다"],
  ["문구점에", "가서", "연필과", "지우개를", "샀습니다"],
  ["의자에", "바르게", "앉아", "책을", "읽습니다"],
  ["설날에는", "세배를", "하고", "떡국을", "먹습니다"],
  ["책은", "찢지", "않고", "깨끗하게", "봅니다"],
  ["거북이는", "딱딱한", "등껍질을", "가지고", "있습니다"],
  ["열심히", "공부하고", "맛있는", "피자를", "먹습니다"],
  ["뱀은", "다리가", "없고", "몸통이", "깁니다"],
  ["커다란", "나무", "한", "그루가", "있습니다"],
  ["첫째", "날에는", "기차", "여행을", "했어"],
  ["내가", "심은", "토마토에", "물을", "줍니다"],
  ["뜨거운", "음식을", "먹으면", "땀이", "납니다"],
  ["나는", "강아지에게", "집을", "만들어", "주었습니다"],
  ["4", "더하기", "3은", "7과", "같습니다"],
  ["5", "빼기", "2는", "3과", "같습니다"],
  ["기차를", "타고", "여행을", "가고", "싶어요"],
  ["배를", "타고", "먼", "바다로", "나가요"],
  ["저녁을", "먹고", "자전거를", "탈", "거예요"],
  ["학교를", "마치면", "걸어서", "집에", "가요"],
  ["나는", "떡볶이와", "김밥을", "먹고", "싶어요"],
  ["오늘", "저녁에는", "피자를", "시켜", "먹을까요"],
  ["나는", "햄버거와", "콜라를", "많이", "먹었어요"],
  ["커다란", "수박을", "잘라서", "나눠", "먹어요"],
  ["겨울에는", "따뜻한", "물을", "자주", "마셔요"],
  ["땅속에는", "많은", "동물들이", "살고", "있어요"],
  ["영화를", "보면서", "팝콘과", "콜라를", "먹어요"],
  ["피아노", "학원에서", "새로운", "곡을", "배웠어요"],
  ["언니가", "준", "간식을", "맛있게", "먹었어요"],
  ["자전거를", "타다가", "넘어져서", "무릎을", "다쳤어요"],
  ["생일", "선물로", "예쁜", "인형을", "받았어요"],
  ["생일", "선물로", "예쁜", "인형을", "주었어요"],
  ["엄마랑", "마트에", "가서", "과자를", "샀어요"],
  ["새로", "산", "운동화를", "처음", "신었어요"],
  ["강아지가", "나를", "보고", "꼬리를", "흔들어요"],
  ["학교", "마치고", "친구와", "놀기로", "했어요"]
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
  if (filledCount >= 5) return;

  const box = boxes.children[filledCount];
  box.textContent = word;
  box.style.backgroundColor = currentColor;
  playSound(word);

  if (word === currentAnswer[filledCount]) {
    filledCount++;
    card.classList.add("selected");
    if (filledCount === 5) {
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
  for (let i = 0; i < 5; i++) {
    const box = document.createElement('div');
    box.className = 'letter-box';
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
