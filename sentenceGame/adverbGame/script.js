const sentenceProblems = [

{ sentence: "햇빛이 방 안을 ▢ 비추고 있어요.", answer: "따뜻하게" },
{ sentence: "엄마가 ▢ 끓여 주신 국을 먹었어요.", answer: "따뜻하게" },
{ sentence: "친구가 ▢ 웃으며 인사해요.", answer: "따뜻하게" },
{ sentence: "선생님이 ▢ 안아주셔서 기분이 좋아요.", answer: "따뜻하게" },
{ sentence: "할머니가 담요로 ▢ 감싸 주셨어요.", answer: "따뜻하게" },
{ sentence: "아빠가 나를 ▢ 바라보며 웃어 주셨어요.", answer: "따뜻하게" },

{ sentence: "하늘이 아침부터 ▢ 개었어요.", answer: "맑게" },
{ sentence: "강물이 ▢ 흐르고 있어요.", answer: "맑게" },
{ sentence: "아이의 눈동자가 ▢ 빛나고 있어요.", answer: "맑게" },
{ sentence: "그림 속 호수가 ▢ 그려져 있었어요.", answer: "맑게" },
{ sentence: "노래 소리가 ▢ 울려 퍼졌어요.", answer: "맑게" },
{ sentence: "아침 공기가 ▢ 느껴졌어요.", answer: "맑게" },

{ sentence: "아이들이 운동장에서 ▢ 뛰어놀았어요.", answer: "신나게" },
{ sentence: "음악에 맞춰 ▢ 춤을 췄어요.", answer: "신나게" },
{ sentence: "친구들과 ▢ 소풍을 다녀왔어요.", answer: "신나게" },
{ sentence: "우리는 놀이기구를 타며 ▢ 소리쳤어요.", answer: "신나게" },
{ sentence: "강아지가 공을 물고 ▢ 달렸어요.", answer: "신나게" },
{ sentence: "▢ 노래를 부르며 걷고 있어요.", answer: "신나게" },

{ sentence: "바구니에 사과를 ▢ 담았어요.", answer: "가득히" },
{ sentence: "꽃병에 꽃이 ▢ 꽂혀 있어요.", answer: "가득히" },
{ sentence: "웃음이 얼굴에 ▢ 번졌어요.", answer: "가득히" },
{ sentence: "상자에 책을 ▢ 채워 넣었어요.", answer: "가득히" },
{ sentence: "컵에 물을 ▢ 따랐어요.", answer: "가득히" },
{ sentence: "향기가 방 안에 ▢ 퍼졌어요.", answer: "가득히" },

{ sentence: "혼자 집에 있으니 ▢ 느껴졌어요.", answer: "심심하게" },
{ sentence: "아무 일도 없이 ▢ 시간을 보냈어요.", answer: "심심하게" },
{ sentence: "혼자서 ▢ 텔레비전을 봤어요.", answer: "심심하게" },
{ sentence: "수업이 너무 쉬워서 ▢ 느껴졌어요.", answer: "심심하게" },
{ sentence: "TV도 안 나와서 ▢ 앉아 있었어요.", answer: "심심하게" },
{ sentence: "▢ 앉아서 창밖만 보고 있었어요.", answer: "심심하게" },

// 아름답게
  { sentence: "정원을 ▢ 가꾸어 놓았어요.", answer: "아름답게" },
  { sentence: "꽃들이 ▢ 피어 있어요.", answer: "아름답게" },
  { sentence: "풍경이 창밖으로 ▢ 펼쳐졌어요.", answer: "아름답게" },
  { sentence: "그림을 ▢ 그려 보았어요.", answer: "아름답게" },
  { sentence: "하늘이 저녁노을로 ▢ 물들었어요.", answer: "아름답게" },
  { sentence: "무대가 ▢ 꾸며져 있었어요.", answer: "아름답게" },

  // 알록달록하게
  { sentence: "벽을 ▢ 색칠했어요.", answer: "알록달록하게" },
  { sentence: "풍선이 ▢ 떠 있어요.", answer: "알록달록하게" },
  { sentence: "일기장을 스티커로 ▢ 꾸몄어요.", answer: "알록달록하게" },
  { sentence: "생일 파티장이 ▢ 꾸며져 있었어요.", answer: "알록달록하게" },
  { sentence: "가방을 ▢ 꾸며 보았어요.", answer: "알록달록하게" },

  // 얇게
  { sentence: "고기를 ▢ 썰어 주세요.", answer: "얇게" },
  { sentence: "종이를 ▢ 접었어요.", answer: "얇게" },
  { sentence: "빵을 ▢ 자르세요.", answer: "얇게" },
  { sentence: "빵 위에 치즈를 ▢ 올려 주세요.", answer: "얇게" },
  { sentence: "얼음을 ▢ 갈아 주세요.", answer: "얇게" },

  // 예쁘게
  { sentence: "꽃을 ▢ 꽂아 두었어요.", answer: "예쁘게" },
  { sentence: "편지를 ▢ 접었어요.", answer: "예쁘게" },
  { sentence: "상자를 ▢ 포장했어요.", answer: "예쁘게" },
  { sentence: "그림을 ▢ 그려 주었어요.", answer: "예쁘게" },
  { sentence: "머리를 ▢ 묶었어요.", answer: "예쁘게" },
  { sentence: "옷을 ▢ 입었어요.", answer: "예쁘게" },
  { sentence: "카드를 ▢ 꾸며 보았어요.", answer: "예쁘게" },

  // 자세하게
  { sentence: "설명을 ▢ 해 주셨어요.", answer: "자세하게" },
  { sentence: "문제를 ▢ 풀이했어요.", answer: "자세하게" },
  { sentence: "내용을 ▢ 들려주었어요.", answer: "자세하게" },
  { sentence: "일정을 ▢ 알려주었어요.", answer: "자세하게" },
  { sentence: "계획을 ▢ 세워 보았어요.", answer: "자세하게" },
  { sentence: "경험담을 ▢ 나누었어요.", answer: "자세하게" },

  // 작게
  { sentence: "좁은 칸에 글씨를 ▢ 썼어요.", answer: "작게" },
  { sentence: "늦은 시간이어서 소리를 ▢ 줄였어요.", answer: "작게" },
  { sentence: "친구와 같이 먹으려고 빵을 ▢ 나누었어요.", answer: "작게" },
  { sentence: "그림을 ▢ 잘라 붙였어요.", answer: "작게" },

  // 좁게
  { sentence: "길이 ▢ 나 있었어요.", answer: "좁게" },
  { sentence: "통로가 ▢ 만들어졌어요.", answer: "좁게" },
  { sentence: "문이 ▢ 열려 있었어요.", answer: "좁게" },
  { sentence: "책장이 ▢ 배치되어 있었어요.", answer: "좁게" },
  { sentence: "골목이 ▢ 이어졌어요.", answer: "좁게" },
  { sentence: "침대가 ▢ 놓여 있어요.", answer: "좁게" },

  // 즐겁게
  { sentence: "생일파티를 ▢ 보냈어요.", answer: "즐겁게" },
  { sentence: "놀이동산에서 하루를 ▢ 지냈어요.", answer: "즐겁게" },
  { sentence: "가족과 시간을 ▢ 보냈어요.", answer: "즐겁게" },
  { sentence: "친구들과 ▢ 소풍을 다녀왔어요.", answer: "즐겁게" },
  { sentence: "음악을 들으며 ▢ 하루를 마무리했어요.", answer: "즐겁게" },
  { sentence: "선생님과 ▢ 수업을 했어요.", answer: "즐겁게" },

  // 짧게
  { sentence: "편지를 ▢ 썼어요.", answer: "짧게" },
  { sentence: "답장을 ▢ 보냈어요.", answer: "짧게" },
  { sentence: "휴식을 ▢ 가졌어요.", answer: "짧게" },
  { sentence: "머리를 ▢ 자르기로 했어요.", answer: "짧게" },
  { sentence: "시간이 없으니 설명을 ▢ 해 주세요.", answer: "짧게" },
  { sentence: "시간이 없어서 발표를 ▢ 마쳤어요.", answer: "짧게" },
  { sentence: "질문을 ▢ 했어요.", answer: "짧게" },

  // 커다랗게
  { sentence: "풍선을 ▢ 불었어요.", answer: "커다랗게" },
  { sentence: "눈을 ▢ 떴어요.", answer: "커다랗게" },
  { sentence: "하품을 ▢ 했어요.", answer: "커다랗게" },
  { sentence: "햄버거를 먹으려고 입을 ▢ 벌렸어요.", answer: "커다랗게" },
  { sentence: "넓은 칸에 글씨를 ▢ 썼어요.", answer: "커다랗게" },

  // 크게
  { sentence: "음악을 ▢ 틀었더니 모두 신났어요.", answer: "크게" },
  { sentence: "목소리를 ▢ 내어 발표했어요.", answer: "크게" },
  { sentence: "간판을 ▢ 걸어 두었어요.", answer: "크게" },
  { sentence: "창문을 ▢ 열어 바람을 들였어요.", answer: "크게" },
  { sentence: "풍선을 ▢ 부풀렸어요.", answer: "크게" },
  { sentence: "깜짝 놀라서 눈을 ▢ 떴어요.", answer: "크게" },
  { sentence: "하품을 ▢ 하고 기지개를 켰어요.", answer: "크게" },

  // 튼튼하게
  { sentence: "의자를 ▢ 만들어 주세요.", answer: "튼튼하게" },
  { sentence: "바람이 불어서 천막을 ▢ 묶어서 고정했어요.", answer: "튼튼하게" },
  { sentence: "집을 ▢ 지었어요.", answer: "튼튼하게" },
  { sentence: "가방을 ▢ 꿰매어 고쳤어요.", answer: "튼튼하게" },
  { sentence: "기둥을 ▢ 세워 두었어요.", answer: "튼튼하게" },

    // 하얗게
  { sentence: "눈이 온 세상을 ▢ 뒤덮었어요.", answer: "하얗게" },
  { sentence: "구름이 ▢ 피어올랐어요.", answer: "하얗게" },
  { sentence: "벽이 ▢ 칠해져 있었어요.", answer: "하얗게" },
  { sentence: "도화지가 ▢ 펼쳐져 있었어요.", answer: "하얗게" },

  // 힘차게
  { sentence: "팔을 ▢ 뻗어 인사했어요.", answer: "힘차게" },
  { sentence: "발을 ▢ 구르며 노래했어요.", answer: "힘차게" },
  { sentence: "페달을 ▢ 밟으며 자전거를 탔어요.", answer: "힘차게" },
  { sentence: "깃발을 ▢ 흔들었어요.", answer: "힘차게" },
  { sentence: "달리기를 ▢ 시작했어요.", answer: "힘차게" },
  { sentence: "두꺼운 문을 문을 ▢ 밀어 열었어요.", answer: "힘차게" },
  { sentence: "응원의 목소리를 ▢ 외쳤어요.", answer: "힘차게" },

  // 건강하게
{ sentence: "채소를 먹고 ▢ 자랐어요.", answer: "건강하게" },
{ sentence: "매일 운동하며 ▢ 지냈어요.", answer: "건강하게" },
{ sentence: "햇볕을 쬐며 ▢ 뛰어놀았어요.", answer: "건강하게" },
{ sentence: "밥을 잘 먹고 ▢ 자랐어요.", answer: "건강하게" },
{ sentence: "잠을 충분히 자서 ▢ 되었어요.", answer: "건강하게" },

  // 굵게
  { sentence: "글씨를 ▢ 써 보았어요.", answer: "굵게" },
  { sentence: "선을 ▢ 그어 표시했어요.", answer: "굵게" },
  { sentence: "눈썹을 ▢ 그리고 있어요.", answer: "굵게" },
  { sentence: "펜으로 ▢ 표시해 주세요.", answer: "굵게" },

  // 길게
  { sentence: "줄을 ▢ 늘어뜨렸어요.", answer: "길게" },
  { sentence: "발표를 ▢ 이어 갔어요.", answer: "길게" },
  { sentence: "휴가를 ▢ 다녀왔어요.", answer: "길게" },
  { sentence: "리본을 ▢ 잘라 붙였어요.", answer: "길게" },
  { sentence: "선을 ▢ 그어 나누었어요.", answer: "길게" },
  { sentence: "숨을 ▢ 내쉬었어요.", answer: "길게" },
  { sentence: "편지를 ▢ 썼어요.", answer: "길게" },

  // 깜깜하게
  { sentence: "전기가 나가서 방 안이 ▢ 되었어요.", answer: "깜깜하게" },
  { sentence: "캠프파이어가 꺼지자 주변이 ▢ 변했어요.", answer: "깜깜하게" },
  { sentence: "전등이 꺼지면 ▢ 느껴져요.", answer: "깜깜하게" },
  { sentence: "방을 ▢ 해 두고 잤어요.", answer: "깜깜하게" },
  { sentence: "구석이 ▢ 보여서 무서웠어요.", answer: "깜깜하게" },

// 납작하게
  { sentence: "반죽을 ▢ 눌러서 구웠어요.", answer: "납작하게" },
  { sentence: "빵을 ▢ 눌러서 샌드위치를 만들었어요.", answer: "납작하게" },
  { sentence: "종이 가방을 ▢ 접어서 보관했어요.", answer: "납작하게" },
  { sentence: "쿠션을 ▢ 눌러 앉았어요.", answer: "납작하게" },
  { sentence: "반죽을 ▢ 만들어 오븐에 구웠어요.", answer: "납작하게" },

  // 낮게
  { sentence: "목소리를 ▢ 유지했어요.", answer: "낮게" },
  { sentence: "라디오 볼륨을 ▢ 조절했어요.", answer: "낮게" },
  { sentence: "노래를 ▢ 불러보았어요.", answer: "낮게" },
  { sentence: "담을 ▢ 쌓았어요.", answer: "낮게" },
  { sentence: "책상을 ▢ 배치했어요.", answer: "낮게" },
  { sentence: "천장을 ▢ 설치했어요.", answer: "낮게" },

  // 넓게
  { sentence: "팔을 ▢ 벌려 보았어요.", answer: "넓게" },
  { sentence: "길을 ▢ 닦아 놓았어요.", answer: "넓게" },
  { sentence: "운동장을 ▢ 만들었어요.", answer: "넓게" },
  { sentence: "공간을 ▢ 활용했어요.", answer: "넓게" },
  { sentence: "지도에 ▢ 표시했어요.", answer: "넓게" },

  // 노랗게
  { sentence: "잎이 ▢ 물들었어요.", answer: "노랗게" },
  { sentence: "벽을 ▢ 칠했어요.", answer: "노랗게" },
  { sentence: "천을 ▢ 염색했어요.", answer: "노랗게" },
  { sentence: "꽃이 ▢ 피었어요.", answer: "노랗게" },
  { sentence: "조명을 ▢ 밝혔어요.", answer: "노랗게" },

  // 높이
  { sentence: "깃발을 ▢ 올렸어요.", answer: "높이" },
  { sentence: "공을 ▢ 던졌어요.", answer: "높이" },
  { sentence: "팔을 ▢ 들었어요.", answer: "높이" },
  { sentence: "산에 ▢ 올라갔어요.", answer: "높이" },
  { sentence: "사다리를 ▢ 놓았어요.", answer: "높이" },
  { sentence: "종이를 ▢ 붙였어요.", answer: "높이" },
  { sentence: "상자를 ▢ 쌓았어요.", answer: "높이" },

// 단단하게
  { sentence: "땅을 ▢ 다져 튼튼한 기초를 만들었어요.", answer: "단단하게" },
  { sentence: "벽을 ▢ 쌓아서 무너지지 않았어요.", answer: "단단하게" },
  { sentence: "박스를 ▢ 묶어 보냈어요.", answer: "단단하게" },
  { sentence: "마음을 ▢ 먹고 공부를 시작했어요.", answer: "단단하게" },
  { sentence: "기둥을 ▢ 고정했어요.", answer: "단단하게" },
  { sentence: "도자기를 ▢ 구워 완성했어요.", answer: "단단하게" },

  // 둥글게
  { sentence: "반죽을 ▢ 빚었어요.", answer: "둥글게" },
  { sentence: "'오'는 입을 ▢ 오므려서 소리를 내요.", answer: "둥글게" },
  { sentence: "▢ 원을 그리며 빙글빙글 돌았어요.", answer: "둥글게" },

  // 두껍게
  { sentence: "이불을 ▢ 덮었어요.", answer: "두껍게" },
  { sentence: "옷을 ▢ 입고 나갔어요.", answer: "두껍게" },
  { sentence: "종이를 ▢ 겹쳐 붙였어요.", answer: "두껍게" },

  // 맛있게
  { sentence: "아이가 밥을 ▢ 먹었어요.", answer: "맛있게" },
  { sentence: "간식을 ▢ 나누어 먹었어요.", answer: "맛있게" },
  { sentence: "스파게티를 ▢ 만들었어요.", answer: "맛있게" },
  { sentence: "샌드위치를 ▢ 준비했어요.", answer: "맛있게" },

  // 멋지게
  { sentence: "무대를 ▢ 꾸몄어요.", answer: "멋지게" },
  { sentence: "옷을 ▢ 차려입었어요.", answer: "멋지게" },
  { sentence: "그림을 ▢ 완성했어요.", answer: "멋지게" },
  { sentence: "춤을 ▢ 췄어요.", answer: "멋지게" },
  { sentence: "공연을 ▢ 마무리했어요.", answer: "멋지게" },
  { sentence: "집을 ▢ 꾸며 놓았어요.", answer: "멋지게" },

  // 부드럽게
  { sentence: "아빠가 내 머리를 ▢ 쓰다듬었어요.", answer: "부드럽게" },
  { sentence: "카페에 음악이 ▢ 흐르고 있어요.", answer: "부드럽게" },
  { sentence: "조용한 친구가 ▢ 말을 이어 갔어요.", answer: "부드럽게" },
  { sentence: "손길이 ▢ 느껴졌어요.", answer: "부드럽게" },

  // 빠르게
  { sentence: "발걸음을 ▢ 옮겼어요.", answer: "빠르게" },
  { sentence: "자전거를 ▢ 달렸어요.", answer: "빠르게" },
  { sentence: "답장을 ▢ 보냈어요.", answer: "빠르게" },
  { sentence: "계단을 ▢ 내려갔어요.", answer: "빠르게" },
  { sentence: "공을 ▢ 던졌어요.", answer: "빠르게" },
  { sentence: "손을 ▢ 움직였어요.", answer: "빠르게" },
];

const adverbDistractorMap = {
  "따뜻하게": ["빠른", "높이", "깡충깡충", "시끄럽게", "노랗게"],
  "맑게": ["두꺼운", "깜깜하게", "느릿느릿", "알록달록하게", "주렁주렁"],
  "신나게": ["부드러운", "노래하는", "폴짝폴짝", "심심하게", "단단한"],
  "가득히": ["빠른", "두꺼운", "큰", "납작한", "푸르게"],
  "심심하게": ["힘차게", "쑥쑥", "짧게", "신나게", "즐겁게"],

  "아름답게": ["높이", "빠른", "깔깔", "짧게", "강하게"],
  "알록달록하게": ["단단하게", "조용하게", "심심하게", "크게", "후드득"],
  "얇게": ["크게", "깜깜하게", "짧게", "훨훨", "힘차게"],
  "예쁘게": ["시끄럽게", "조용하게", "강하게", "두껍게", "힘찬"],
  "자세하게": ["데굴데굴", "두껍게", "예쁜", "작은", "푸르게"],

  "작게": ["큰", "힘차게", "가득히", "단단하게", "즐거운"],
  "좁게": ["사르르", "푸르게", "신나게", "푸른", "멋진"],
  "즐겁게": ["슬픈", "느릿느릿", "주륵주륵", "예쁜", "빠르게"],
  "짧게": ["단단한", "높이", "빠르게", "두껍게", "동그란"],
  "커다랗게": ["데굴데굴", "좁게", "짧게", "씽씽", "예쁜"],

  "크게": ["얇은", "큰", "맑게", "살랑살랑", "좁은"],
  "튼튼하게": ["노란", "부드럽게", "맑게", "조용하게", "느릿느릿"],
  "푸르게": ["두꺼운", "심심한", "붉게", "멋지게", "빠르게"],
  "하얗게": ["검게", "노랗게", "푸르게", "단단하게", "덜 자란"],
  "힘차게": ["느릿느릿", "살랑살랑", "가득히", "좋아하는", "좁은"],

  "건강하게": ["작은", "피곤하게", "노랗게", "슬프게", "낮게"],
  "굵게": ["사르르", "작게", "노랗게", "맑게", "푸르게"],
  "귀엽게": ["둥실둥실", "짧게", "깔깔", "둥글게", "좋아하는"],
  "길게": ["살랑살랑", "얇게", "빠르게", "둥근", "단단하게"],
  "깜깜하게": ["납작한", "환하게", "맑게", "두껍게", "노래하는"],

  "납작하게": ["느린", "길게", "얇게", "두꺼운", "깜깜하게"],
  "낮게": ["즐거운", "길게", "짧게", "빠른", "조용하게"],
  "넓게": ["좋아하는", "짧게", "작게", "빠르게", "살랑살랑"],
  "노랗게": ["두꺼운", "씽씽", "푸른", "깜깜하게", "낮게"],
  "높이": ["작은", "짧게", "조용하게", "빠르게", "느릿느릿"],

  "단단하게": ["부드럽게", "심심한", "느릿느릿", "알록달록하게", "살랑살랑"],
  "둥글게": ["납작하게", "길게", "얇게", "부드럽게", "노랗게"],
  "두껍게": ["얇게", "작게", "짧게", "씽씽", "느릿느릿"],
  "맛있게": ["느릿느릿", "알록달록하게", "주륵주륵", "뻣뻣하게", "매운"],
  "멋지게": ["심심하게", "단단하게", "알록달록하게", "둥글게", "짧은"],

  "부드럽게": ["단단하게", "빠르게", "조용하게", "짧게", "멋진"],
  "빠르게": ["느릿느릿", "살랑살랑", "부드럽게", "둥글게", "짧게"],
};


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
  const color = pastelColors[index % pastelColors.length];

  const styledSentence = sentence.replace(
    '▢',
    `<span class="blank-box" style="border-color: ${color};">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`
  );
   boxes.innerHTML = `<div class="sentence-box">${styledSentence}</div>`;

  const distractors = adverbDistractorMap[answer] || [];
  const sampledDistractors = shuffle(distractors).slice(0, 3);
  const choices = shuffle([answer, ...sampledDistractors]);


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
