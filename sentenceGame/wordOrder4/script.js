const sentenceProblems = [
  ["호두의", "껍질은", "아주", "단단해요"],
  ["거북의", "등껍질은", "아주", "단단해요"],
  ["사슴의", "뿔은", "아주", "멋져요"],
  ["하마의", "입은", "매우", "커요"],
  ["내", "눈은", "정말", "예뻐요"],
  ["나는", "몸이", "아주", "튼튼해요"],
  ["내", "눈은", "반짝반짝", "빛나요"],
  ["기차를", "타고", "여행을", "가요"],
  ["배를", "타고", "놀러", "가요"],
  ["비행기를", "타고", "여행을", "가요"],
  ["나는", "자전거를", "타고", "놀아요"],
  ["나는", "킥보드를", "타고", "놀아요"],
  ["보라색", "꽃이", "예쁘게", "피었습니다"],
  ["노란색", "꽃이", "아름답게", "피었어요"],
  ["엄마는", "진한", "커피를", "마셔요"],
  ["맛있는", "치킨이", "먹고", "싶어요"],
  ["나는", "라면이", "먹고", "싶어요"],
  ["맛있는", "피자를", "주문해", "주세요"],
  ["하얀", "두부는", "고소하고", "부드러워요"],
  ["노란", "단무지는", "아삭하고", "새콤달콤해요"],
  ["빨간", "사과는", "상큼하고", "맛있어요"],
  ["커다란", "수박을", "잘라서", "먹어요"],
  ["여우는", "귀가", "커다랗고", "길어요"],
  ["나는", "불고기", "피자를", "좋아합니다"],
  ["나는", "새우", "버거를", "먹어요"],
  ["누나는", "아주", "빨리", "달려요"],
  ["친구의", "파란색", "모자가", "멋져요"],
  ["아빠는", "빨간색", "넥타이를", "맸어요"],
  ["나는", "검정색", "바지를", "입었어요"],
  ["티셔츠에", "공룡", "그림이", "있어요"],
  ["노란", "나비가", "팔랑팔랑", "날아와요"],
  ["뚱뚱한", "하마", "가족을", "봤어요"],
  ["개미", "열", "마리가", "기어가요"],
  ["너는", "나무", "위에", "사니?"],
  ["노란색", "버스를", "타고", "가요"],
  ["버스를", "타고", "소풍을", "가요"],
  ["많이", "걸어서", "다리가", "아파"],
  ["나는", "빵과", "우유를", "먹었어요"],
  ["엄마", "구두는", "굽이", "뾰족해요"],
  ["야구", "경기를", "보러", "가요"],
  ["커다란", "나무", "앞에서", "만나자"],
  ["이따가", "학교", "앞에서", "만날래?"],
  ["마트에", "가서", "오이를", "사요"],
  ["우리", "가족은", "바다를", "좋아해"],
  ["타조는", "정말", "빨리", "달려"],
  ["감기에", "걸리면", "마스크를", "써요"],
  ["우리", "가족은", "아파트에", "살아요"],
  ["더러운", "손을", "깨끗하게", "씻어요"],
  ["눈이", "나빠지면", "안경을", "씁니다"],
  ["봄이", "되면", "꽃이", "핍니다"],
  ["감기에", "걸리면", "병원에", "갑니다"],
  ["이가", "아프면", "치과에", "갑니다"],
  ["나는", "노란색", "바나나를", "좋아합니다"],
  ["두더지는", "땅속에", "사는", "동물입니다"],
  ["올챙이는", "자라서", "개구리가", "됩니다"],
  ["비가", "오면", "우산을", "씁니다"],
  ["물이", "얼면", "얼음이", "됩니다"],
  ["냉장고는", "음식을", "차갑게", "만듭니다"],
  ["여름이", "되면", "날씨가", "더워집니다"],
  ["겨울이", "되면", "눈이", "내립니다"],
  ["핸드폰은", "많이", "보지", "않습니다"],
  ["오늘의", "날씨는", "매우", "추워요"],
  ["하얀", "강아지를", "키우고", "싶어요"],
  ["수업을", "마치면", "집으로", "갑니다"],
  ["김치는", "우리나라", "전통", "음식입니다"],
  ["사탕을", "먹고", "양치를", "합니다"],
  ["책을", "읽고", "그림을", "그립니다"],
  ["푹신한", "침대에서", "잠을", "잡니다"]
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
    if (filledCount === 4) {
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
  for (let i = 0; i < 4; i++) {
    const box = document.createElement('div');
    box.className = 'letter-box';
    box.style.width = '140px';
    box.style.height = '100px';
    box.style.border = '2px solid #888';
    box.style.borderRadius = '12px';
    box.style.backgroundColor = '#fff';
    box.style.fontSize = '22px';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';
    box.style.fontWeight = 'bold';
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
    card.style.fontSize = '22px';
    card.style.fontWeight = 'bold';
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
