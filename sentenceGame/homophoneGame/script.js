const sentenceProblems = [
  { sentence: "달리기를 하다가 다리를 (  )", answer: "다쳤다" },
  { sentence: "장난 치다가 손을 (  )", answer: "다쳤다" },
  { sentence: "넘어져서 팔을 (  )", answer: "다쳤다" },
  { sentence: "바람이 불어서 문이 (  )", answer: "닫혔다" },
  { sentence: "문이 자동으로 (  )", answer: "닫혔다" },
  { sentence: "교실 문이 이미 (  )", answer: "닫혔다" },
  { sentence: "조금 (  ) 친구랑 놀거야", answer: "이따가" },
  { sentence: "엄마가 (  ) 간식 주신대", answer: "이따가" },
  { sentence: "(  ) 비 온대, 우산 가져가", answer: "이따가" },
  { sentence: "학교에 잠간 (  ) 집에 갔어", answer: "있다가" },
  { sentence: "여기 (  ) 선생님 오시면 인사드려", answer: "있다가" },
  { sentence: "잠깐만 (  ) 가도 될까요?", answer: "있다가" },
  { sentence: "우리 (  ) 놀이터 갈래?", answer: "같이" },
  { sentence: "친구랑 (  ) 놀았어", answer: "같이" },
  { sentence: "아빠랑 (  ) 그림을 그렸어", answer: "같이" },
  { sentence: "이 책은 읽어볼 (  )가 있어", answer: "가치" },
  { sentence: "작은 일도 (  ) 있게 여겨야 해", answer: "가치" },
  { sentence: "그 그림은 예술적 (  )가 높아요", answer: "가치" },
  { sentence: "청소를 (  )", answer: "마치다" },
  { sentence: "공연을 무사히 (  ).", answer: "마치다" },
  { sentence: "할 일을 다 (  ).", answer: "마치다" },
  { sentence: "퀴즈 문제를 모두 (  ).", answer: "맞히다" },
  { sentence: "오늘 날짜를 정확히 (  ).", answer: "맞히다" },
  { sentence: "어려운 수수께끼를 (  ).", answer: "맞히다" },
  { sentence: "내 자리에 가방이 (  )", answer: "없다" },
  { sentence: "햄버거에 고기가 (  )", answer: "없다" },
  { sentence: "자동차에 바퀴가 (  )", answer: "없다" },
  { sentence: "엄마가가 동생을 (  )", answer: "업다" },
  { sentence: "아기를 등에 (  )", answer: "업다" },
  { sentence: "아빠가 아픈 할머니를 (  )", answer: "업다" },
  { sentence: "내가 쓴 정답이 정답이 (  )", answer: "맞다" },
  { sentence: "공에 얼굴을 (  )", answer: "맞다" },
  { sentence: "우산이 없어서 비를 (  )", answer: "맞다" },
  { sentence: "화장실 청소를 (  )", answer: "맡다" },
  { sentence: "연극에서 중요한 역할을 (  )", answer: "맡다" },
  { sentence: "고소한 냄새를 (  )", answer: "맡다" },
  { sentence: "옷에 냄새가 (  )", answer: "배다" },
  { sentence: "손에 고기 냄새가 (  )", answer: "배다" },
  { sentence: "같이 지내다 보니 정이 (  )", answer: "배다" },
  { sentence: "종이에 손을 (  )", answer: "베다" },
  { sentence: "침대에 누워서 베개를 (  )", answer: "베다" },
  { sentence: "엄마 무릎을 (  )", answer: "베다" },
  { sentence: "고무줄을 길게 (  )", answer: "늘이다" },
  { sentence: "스트레칭을 하여 뭄을 쭉 (  )", answer: "늘이다" },
  { sentence: "팔을 위로 쭉 (  )", answer: "늘이다" },
  { sentence: "운동 시간을 (  )", answer: "늘리다" },
  { sentence: "회사에서 근무 시간을 (  )", answer: "늘리다" },
  { sentence: "책을 읽어서 어휘력을 (  )", answer: "늘리다" },
  { sentence: "약속은 (  ) 지켜야 해요", answer: "반드시" },
  { sentence: "(  ) 안전벨트를 착용하세요", answer: "반드시" },
  { sentence: "수업 전에 (  ) 준비물을 챙기세요", answer: "반드시" },
  { sentence: "상자를 (  ) 쌓아 두었어요", answer: "반듯이" },
  { sentence: "글씨를 (  ) 써야 보기 좋아요", answer: "반듯이" },
  { sentence: "신발을 (  ) 정리해 놓았어요", answer: "반듯이" },
  { sentence: "닭이 알을 (  )", answer: "낳다" },
  { sentence: "그 경험이 자신감을 (  )", answer: "낳다" },
  { sentence: "노력은 좋은 결과를 (  )", answer: "낳다" },
  { sentence: "아픈 친구가 (  )", answer: "낫다" },
  { sentence: "상처가 빨리 (  )", answer: "낫다" },
  { sentence: "아프면 병원에 가는 것이 (  )", answer: "낫다" },
  { sentence: "책상 위에 책이 (  )", answer: "있다" },
  { sentence: "우리 집에는 강아지가 (  )", answer: "있다" },
  { sentence: "오늘은 할 일이 (  )", answer: "있다" },
  { sentence: "친구 생일을 깜빡 (  )", answer: "잊다" },
  { sentence: "지갑을 어디에 뒀는지 (  )", answer: "잊다" },
  { sentence: "슬픈 기억을 (  )", answer: "잊다" },

];

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

const distractorMap = {'다쳤다': '닫혔다', '닫혔다': '다쳤다', '이따가': '있다가', '있다가': '이따가', '같이': '가치', '가치': '같이', '마치다': '맞히다', '맞히다': '마치다', '없다': '업다', '업다': '없다', '맞다': '맡다', '맡다': '맞다', '배다': '베다', '베다': '배다', '늘이다': '늘리다', '늘리다': '늘이다', '반드시': '반듯이', '반듯이' : '반드시', '낳다' : '낫다', '낫다' : '낳다', '있다' : '잊다', '잊다' : '있다',};

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

function loadProblem(index) {
  const { sentence, answer } = selectedProblems[index];
  const color = "#a5b4fc";
  const distractor = distractorMap[answer] || "오답";

  const styledSentence = sentence.replace(
    "(  )",
    `<span class="blank-box" style="border-color: ${color};">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`
  );

  boxes.innerHTML = `<div class="sentence-box">${styledSentence}</div>`;

  const choices = shuffle([answer, distractor]);

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