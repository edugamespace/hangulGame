const sentenceProblems = [
  { sentence: "다리를 (  )", answer: "다쳤다" },
  { sentence: "문이 (  )", answer: "닫혔다" },
  { sentence: "밥은 (  ) 먹자", answer: "이따가" },
  { sentence: "여기에 잠시만 (  ) 갈게", answer: "있다가" },
  { sentence: "친구와 (  ) 놀았어", answer: "같이" },
  { sentence: "이 책은 읽을 (  )가 있어", answer: "가치" },
  { sentence: "할 일을 다 (  ).", answer: "마치다" },
  { sentence: "친구가 정답을 (  ).", answer: "맞히다" },
  { sentence: "가방이 (  )", answer: "없다" },
  { sentence: "아기를 (  )", answer: "업다" },
  { sentence: "세탁기를 (  )", answer: "돌리다" },
  { sentence: "빙빙 (  )", answer: "돌다" },
  { sentence: "정답이 (  )", answer: "맞다" },
  { sentence: "자리를 (  )", answer: "맡다" },
  { sentence: "옷에 냄새가 (  )", answer: "배다" },
  { sentence: "베개를 (  )", answer: "베다" },
  { sentence: "고무줄을 길게 (  )", answer: "늘이다" },
  { sentence: "운동 시간을 (  )", answer: "늘리다" },
  { sentence: "비를 (  )", answer: "걷다" },
  { sentence: "구름이 (  )", answer: "걷히다" },
  { sentence: "눈을 (  )", answer: "감다" },
  { sentence: "머리가 (  )", answer: "감기다" },
  { sentence: "선으로 점을 (  )", answer: "잇다" },
  { sentence: "여기에 사람이 (  )", answer: "있다" },
  { sentence: "집을 (  )", answer: "짓다" },
  { sentence: "이불에 (  )", answer: "짓히다" },
  { sentence: "입을 (  )", answer: "벌리다" },
  { sentence: "장사를 (  )", answer: "벌이다" }
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

const distractorMap = {'다쳤다': '닫혔다', '닫혔다': '다쳤다', '이따가': '있다가', '있다가': '이따가', '같이': '가치', '가치': '같이', '마치다': '맞히다', '맞히다': '마치다', '없다': '업다', '업다': '없다', '돌리다': '돌다', '돌다': '돌리다', '맞다': '맡다', '맡다': '맞다', '배다': '베다', '베다': '배다', '늘이다': '늘리다', '늘리다': '늘이다', '붇다': '묻다', '걷다': '걷히다', '걷히다': '걷다', '감다': '감기다', '감기다': '감다', '잇다': '있다', '있다': '잇다', '짓다': '짓히다', '짓히다': '짓다', '벌리다': '벌이다', '벌이다': '벌리다'};

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