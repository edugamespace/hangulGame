const sentenceProblems = [
  // 뿌듯해
  { sentence: "스스로 양말을 신을 수 있게 되어 ▢", answer: "뿌듯해" },
  { sentence: "도움을 받지 않고 문제를 풀어서 ▢", answer: "뿌듯해" },
  { sentence: "책을 끝까지 다 읽어서 ▢", answer: "뿌듯해" },
  { sentence: "다친 친구의 가방을 들어주니 ▢", answer: "뿌듯해" },
  { sentence: "동생을 잘 돌봐줘서 ▢", answer: "뿌듯해" },
  { sentence: "정리정돈을 스스로 다 해서 ▢", answer: "뿌듯해" },
  { sentence: "운동회에서 끝까지 달려서 ▢", answer: "뿌듯해" },
  { sentence: "선생님께 칭찬받아서 ▢", answer: "뿌듯해" },
  { sentence: "내가 만든 작품이 전시되어서 ▢", answer: "뿌듯해" },
  { sentence: "학교에 지각하지 않고 일찍 와서 ▢", answer: "뿌듯해" },

  // 신기해
  { sentence: "하늘에 뜬 무지개가 ▢", answer: "신기해" },
  { sentence: "자석이 철을 끌어당기는게 ▢", answer: "신기해" },
  { sentence: "컴퓨터가 말을 알아들어서 ▢", answer: "신기해" },
  { sentence: "비눗방울이 여러 색으로 보여서 ▢", answer: "신기해" },
  { sentence: "손가락으로 그림을 그릴 수 있어서 ▢", answer: "신기해" },
  { sentence: "컴퓨터에서 내 목소리가 나오는게 ▢", answer: "신기해" },
  { sentence: "사막에도 눈이 내린다니 정말 ▢", answer: "신기해" },
  { sentence: "식물이 햇빛을 따라 움직이는게 ▢", answer: "신기해" },
  { sentence: "입김을 불면 하얀 연기가 나오는게 ▢", answer: "신기해" },

  // 미안해
  { sentence: "친구의 연필을 부러뜨려서 ▢", answer: "미안해" },
  { sentence: "친구와 한 약속을 어겨서 ▢", answer: "미안해" },
  { sentence: "동생을 밀어서 ▢", answer: "미안해" },
  { sentence: "엄마 심부름을 잊어버려서 ▢", answer: "미안해" },
  { sentence: "친구의 그림을 망가뜨려서 ▢", answer: "미안해" },
  { sentence: "장난치다가 책상을 쓰러뜨려서 ▢", answer: "미안해" },
  { sentence: "친구에게 화를 내서 ▢", answer: "미안해" },
  { sentence: "선생님 말씀을 잘 안 들어서 ▢", answer: "미안해" },
  { sentence: "친구에게 나쁜 말을 해서 ▢", answer: "미안해" },
  { sentence: "넘어진 친구를 그냥 지나쳐서 ▢", answer: "미안해" },

  // 고마워
  { sentence: "친구가 우산을 빌려줘서 ▢", answer: "고마워" },
  { sentence: "형이 나를 데려다줘서 ▢", answer: "고마워" },
  { sentence: "동생이 장난감을 빌려줘서 ▢", answer: "고마워" },
  { sentence: "친구가 지우개를 빌려줘서 ▢", answer: "고마워" },
  { sentence: "친구가 내 가방을 들어줘서 ▢", answer: "고마워" },
  { sentence: "넘어졌을 때 손을 잡아줘서 ▢", answer: "고마워" },
  { sentence: "내 물건을 대신 찾아줘서 ▢", answer: "고마워" },
  { sentence: "친구가 간식을 나눠줘서 ▢", answer: "고마워" },
  { sentence: "내 말을 잘 들어줘서 ▢", answer: "고마워" },
  { sentence: "내 실수를 감싸줘서 ▢", answer: "고마워" },

  // 기뻐
  { sentence: "생일 선물을 받아서 ▢", answer: "기뻐" },
  { sentence: "친구와 같이 축구를 하니 ▢", answer: "기뻐" },
  { sentence: "좋아하는 간식이 나와서 ▢", answer: "기뻐" },
  { sentence: "시험을 잘 봐서 ▢", answer: "기뻐" },
  { sentence: "선생님이 칭찬해 주셔서 ▢", answer: "기뻐" },
  { sentence: "친구가 우리 집에 놀러와서 ▢", answer: "기뻐" },
  { sentence: "엄마가 나를 안아줘서 ▢", answer: "기뻐" },
  { sentence: "좋아하는 책을 선물 받아서 ▢", answer: "기뻐" },
  { sentence: "놀이공원으로 소풍을 가서 ▢", answer: "기뻐" },
  { sentence: "상을 받아서 ▢", answer: "기뻐" },

  // 미워
{ sentence: "친구가 내 물건을 함부로 써서 ▢", answer: "미워" },
{ sentence: "내 말을 무시해서 ▢", answer: "미워" },
{ sentence: "게임에서 나만 빼고 놀아서 ▢", answer: "미워" },
{ sentence: "친구가 나를 놀려서 ▢", answer: "미워" },
{ sentence: "친구가 나에게 거짓말을 해서 ▢", answer: "미워" },
{ sentence: "내 이름을 이상하게 불러서 ▢", answer: "미워" },
{ sentence: "내 그림을 비웃어서 ▢", answer: "미워" },
{ sentence: "동생이 몰래 내 간식을 먹어서 ▢", answer: "미워" },
{ sentence: "내 장난감을 빼앗아서 ▢", answer: "미워" },

// 힘들어
{ sentence: "무거운 가방을 메고 걸었더니 ▢", answer: "힘들어" },
{ sentence: "공부할 게 너무 많아서 ▢", answer: "힘들어" },
{ sentence: "달리기를 오래 해서 ▢", answer: "힘들어" },
{ sentence: "밤늦게까지 숙제를 하느라 ▢", answer: "힘들어" },
{ sentence: "산 정상까지 올라가려니 ▢", answer: "힘들어" },
{ sentence: "어려운 문제를 계속 풀어서 ▢", answer: "힘들어" },
{ sentence: "쉬지 않고 일했더니 ▢", answer: "힘들어" },
{ sentence: "친구와 같이 오래 걸었더니 ▢", answer: "힘들어" },
{ sentence: "계단을 계속 오르락내리락 해서 ▢", answer: "힘들어" },
{ sentence: "숙제가 너무 많아서 ▢", answer: "힘들어" },

// 슬퍼
{ sentence: "가장 친한 친구와 싸우게 되어서 ▢", answer: "슬퍼" },
{ sentence: "아끼던 장난감이 고장 나서 ▢", answer: "슬퍼" },
{ sentence: "강아지가 아파서 ▢", answer: "슬퍼" },
{ sentence: "내가 만든 작품이 망가져서 ▢", answer: "슬퍼" },
{ sentence: "소풍이 취소되어서 ▢", answer: "슬퍼" },
{ sentence: "혼자 밥을 먹게 되어서 ▢", answer: "슬퍼" },
{ sentence: "친구가 나를 무시해서 ▢", answer: "슬퍼" },
{ sentence: "친한 친구가 멀리 이사 가서 ▢", answer: "슬퍼" },
{ sentence: "누구도 내 말을 들어주지 않아서 ▢", answer: "슬퍼" },
{ sentence: "열심히 했는데 결과가 안 좋아서 ▢", answer: "슬퍼" },

// 사랑해
{ sentence: "나는 우리 엄마를 ▢", answer: "사랑해" },
{ sentence: "나는 우리 아빠를 ▢", answer: "사랑해" },
{ sentence: "나는 우리 가족을 ▢", answer: "사랑해" },
{ sentence: "나는 우리 할머니를 ▢", answer: "사랑해" },
{ sentence: "나는 우리 할아버지를 ▢", answer: "사랑해" },

];

const feelingsPool = ["뿌듯해", "신기해", "미안해", "고마워", "기뻐", "미워", "힘들어", "슬퍼", "사랑해"];

const pastelColors = ["#fde68a", "#fca5a5", "#a5b4fc", "#6ee7b7", "#fcd34d", "#f9a8d4", "#93c5fd", "#f8b4b4"];

const totalQuestions = 20;
const selectedProblems = sentenceProblems.sort(() => Math.random() - 0.5).slice(0, totalQuestions);
let results = Array(totalQuestions).fill(null);
let currentIndex = 0;

const progressBar = document.getElementById('progress-bar');
const container = document.getElementById('game-container');
const boxes = document.getElementById('letter-boxes');
const celebration = document.getElementById('celebration');
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 감정쌍 충돌 방지 맵
function getConflictingFeeling(feeling) {
  const conflictMap = {
    '뿌듯해': '기뻐',
    '기뻐': '뿌듯해',
    '미워': '슬퍼',
    '슬퍼': '미워'
  };
  return conflictMap[feeling] || null;
}



// 진행 바
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

// 문제 불러오기
function loadProblem(index) {
  const { sentence, answer } = selectedProblems[index];
  const color = pastelColors[index % pastelColors.length];

  const styledSentence = sentence.replace(
    '▢',
    `<span class="blank-box" style="border-color: ${color};">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`
  );
  boxes.innerHTML = `<div class="sentence-box">${styledSentence}</div>`;

  const conflict = getConflictingFeeling(answer);
  const distractors = feelingsPool.filter(f => f !== answer && f !== conflict);
  const choices = shuffle([answer, ...shuffle(distractors).slice(0, 3)]);

  container.innerHTML = '';
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.justifyContent = 'center';
  container.style.gap = '12px';

  choices.forEach((word) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = word;
    card.style.borderColor = color;
    card.onclick = () => handleAnswer(word === answer, word);
    container.appendChild(card);
  });
}

// 정답 처리
function handleAnswer(isCorrect, choice) {
  if (isCorrect) {
    correctSound.play();
    results[currentIndex] = true;
  } else {
    wrongSound.play();
    results[currentIndex] = false;
  }
  updateProgressBar();
  setTimeout(nextProblem, 700);
}

// 다음 문제
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
