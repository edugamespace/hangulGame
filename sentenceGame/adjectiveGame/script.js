const sentenceProblems = [

{ sentence: "▢ 햇살이 창문으로 들어와서 방 안이 포근해요.", answer: "따뜻한" },
{ sentence: "엄마가 건네준 ▢ 물을 마시니 기분이 좋아졌어요.", answer: "따뜻한" },
{ sentence: "차가운 손을 ▢ 장갑 속에 넣으니 금세 녹았어요.", answer: "따뜻한" },
{ sentence: "▢ 이불을 덮고 자니까 밤새 푹 잘 수 있었어요.", answer: "따뜻한" },
{ sentence: "선생님의 ▢ 말 한마디에 마음이 편안해졌어요.", answer: "따뜻한" },
{ sentence: "▢ 국을 한 모금 마시니 기분이 좋아졌어요.", answer: "따뜻한" },
{ sentence: "친구가 ▢ 미소로 인사해 주었어요.", answer: "따뜻한" },

{ sentence: "산속에서 ▢ 공기를 마시니 기분이 상쾌했어요.", answer: "맑은" },
{ sentence: "▢ 하늘을 보며 드넓은 들판을 걸었어요.", answer: "맑은" },
{ sentence: "아기의 ▢ 눈을 보니 마음이 편안해졌어요.", answer: "맑은" },
{ sentence: "▢ 물이 흐르는 개울가에 작은 돌을 던졌어요.", answer: "맑은" },
{ sentence: "오늘은 ▢ 날씨라서 운동하기 딱 좋아요.", answer: "맑은" },
{ sentence: "아이가 ▢ 얼굴로 환하게 웃으며 인사했어요.", answer: "맑은" },

{ sentence: "▢ 아이가 밥을 허겁지겁 먹어요.", answer: "배고픈" },
{ sentence: "▢ 강아지가 간식을 찾으며 짖어요.", answer: "배고픈" },
{ sentence: "▢ 친구가 도시락을 다 먹었어요.", answer: "배고픈" },
{ sentence: "강아지가 ▢ 얼굴로 나를 쳐다봐요.", answer: "배고픈" },
{ sentence: "▢ 동생이 간식을 달라고 졸랐어요.", answer: "배고픈" },

{ sentence: "▢ 노래가 흘러나오자 아이들이 춤을 추기 시작했어요.", answer: "신나는" },
{ sentence: "모두가 ▢ 얼굴로 놀이를 즐기고 있었어요.", answer: "신나는" },
{ sentence: "▢ 이야기를 들으니 금세 기분이 좋아졌어요.", answer: "신나는" },
{ sentence: "▢ 소풍 날이라 아침부터 들뜬 마음이었어요.", answer: "신나는" },
{ sentence: "▢ 게임을 하며 아이들이 웃음을 멈추지 않았어요.", answer: "신나는" },
{ sentence: "▢ 음악에 맞춰 손뼉을 치며 놀았어요.", answer: "신나는" },
{ sentence: "친구들과 ▢ 시간을 보내서 하루가 금방 지나갔어요.", answer: "신나는" },

{ sentence: "혼자 집에 있으니 ▢ 기분이 들었어요.", answer: "심심한" },
{ sentence: "할 일이 없어서 ▢ 얼굴로 누워 있었어요.", answer: "심심한" },
{ sentence: "▢ 날에는 창밖만 바라보게 돼요.", answer: "심심한" },
{ sentence: "아무도 놀아주지 않아 ▢ 시간을 보냈어요.", answer: "심심한" },
{ sentence: "텔레비전도 안 나오니 더 ▢ 기분이었어요.", answer: "심심한" },

{ sentence: "창밖으로 ▢ 무지개가 선명하게 보였어요.", answer: "아름다운" },
{ sentence: "▢ 노을을 보며 가족들과 산책을 했어요.", answer: "아름다운" },
{ sentence: "그림 속에는 ▢ 풍경이 담겨 있었어요.", answer: "아름다운" },
{ sentence: "▢ 꽃들이 정원 가득 피어 있었어요.", answer: "아름다운" },
{ sentence: "선생님께 ▢ 미소로 인사드렸어요.", answer: "아름다운" },
{ sentence: "▢ 추억이 담긴 사진을 보며 웃었어요.", answer: "아름다운" },
{ sentence: "그날의 ▢ 하늘이 아직도 기억에 남아요.", answer: "아름다운" },

{ sentence: "▢ 풍선들이 천장에 매달려 있어요.", answer: "알록달록한" },
{ sentence: "아이들이 ▢ 솜사탕을 손에 쥐고 있어요.", answer: "알록달록한" },
{ sentence: "▢ 색연필로 그림을 그리니 기분이 좋아졌어요.", answer: "알록달록한" },
{ sentence: "▢ 옷을 입은 인형이 아주 귀여워요.", answer: "알록달록한" },
{ sentence: "▢ 우산을 쓰고 걸으니 비 오는 날도 즐거워요.", answer: "알록달록한" },
{ sentence: "▢ 종이로 교실을 꾸미니 분위기가 환해졌어요.", answer: "알록달록한" },
{ sentence: "▢ 나비가 꽃밭 위를 날고 있어요.", answer: "알록달록한" },

{ sentence: "▢ 종이 한 장이 바람에 날아갔어요.", answer: "얇은" },
{ sentence: "▢ 옷을 입고 나갔더니 바람이 들어와 추웠어요.", answer: "얇은" },
{ sentence: "햇빛이 ▢ 커튼 사이로 스며들었어요.", answer: "얇은" },
{ sentence: "▢ 나뭇잎 위에 이슬이 맺혀 있었어요.", answer: "얇은" },
{ sentence: "▢ 종이를 접어서 종이비행기를 만들었어요.", answer: "얇은" },

{ sentence: "정원에 ▢ 꽃들이 활짝 피어 있었어요.", answer: "예쁜" },
{ sentence: "친구가 ▢ 머리핀을 하고 왔어요.", answer: "예쁜" },
{ sentence: "그림일기를 ▢ 색으로 꾸몄어요.", answer: "예쁜" },
{ sentence: "▢ 나비가 꽃 사이를 날아다녀요.", answer: "예쁜" },
{ sentence: "내 방에 ▢ 조명이 반짝이고 있어요.", answer: "예쁜" },
{ sentence: "선물을 ▢ 종이에 정성껏 포장했어요.", answer: "예쁜" },
{ sentence: "소풍날 ▢ 원피스를 입고 학교에 갔어요.", answer: "예쁜" },

{ sentence: "▢ 지도를 보며 길을 찾았어요.", answer: "자세한" },
{ sentence: "책에 ▢ 설명이 있어서 이해하기 쉬웠어요.", answer: "자세한" },
{ sentence: "▢ 계획을 세워서 발표를 준비했어요.", answer: "자세한" },
{ sentence: "선생님이 ▢ 예시를 들어 설명해 주셨어요.", answer: "자세한" },

{ sentence: "▢ 새가 나뭇가지 위에 조용히 앉아 있었어요.", answer: "작은" },
{ sentence: "책상 위에 ▢ 상자 하나가 놓여 있었어요.", answer: "작은" },
{ sentence: "▢ 손으로 정성껏 편지를 썼어요.", answer: "작은" },
{ sentence: "▢ 돌멩이를 모아 높이 쌓았어요.", answer: "작은" },
{ sentence: "▢ 실수였지만 친구에게 바로 사과했어요.", answer: "작은" },
{ sentence: "▢ 꽃봉오리가 햇빛을 받아 피었어요.", answer: "작은" },
{ sentence: "▢ 행동 하나에도 진심이 느껴졌어요.", answer: "작은" },

{ sentence: "▢ 골목길을 갈 땐 조심조심 걸어요.", answer: "좁은" },
{ sentence: "두 사람이 나란히 걷기엔 ▢ 길이었어요.", answer: "좁은" },
{ sentence: "▢ 문을 열고 들어가니 커다란 방이 나왔어요.", answer: "좁은" },
{ sentence: "▢ 의자 사이를 지나가려니 몸을 돌려야 했어요.", answer: "좁은" },
{ sentence: "▢ 틈 사이로 햇빛이 들어왔어요.", answer: "좁은" },
{ sentence: "▢ 공간이었지만 친구들과 함께 있어서 좋았어요.", answer: "좁은" },
{ sentence: "▢ 계단을 따라 위층으로 올라갔어요.", answer: "좁은" },

{ sentence: "나는 ▢ 색으로 그림을 자주 그려요.", answer: "좋아하는" },
{ sentence: "동생은 ▢ 장난감을 꼭 안고 잠들어요.", answer: "좋아하는" },
{ sentence: "친구는 ▢ 가수를 만나서 정말 기뻐했어요.", answer: "좋아하는" },
{ sentence: "엄마는 내가 ▢ 음식을 만들어 주셨어요.", answer: "좋아하는" },
{ sentence: "나는 ▢ 책을 반복해서 읽곤 해요.", answer: "좋아하는" },
{ sentence: "▢ 노래가 들리면 기분이 좋아져요.", answer: "좋아하는" },
{ sentence: "아이들이 ▢ 놀이를 하며 신나게 웃었어요.", answer: "좋아하는" },

{ sentence: "친구들과 함께한 소풍은 정말 ▢ 시간이었어요.", answer: "즐거운" },
{ sentence: "가족과 함께한 여행은 ▢ 추억으로 남았어요.", answer: "즐거운" },
{ sentence: "▢ 마음으로 게임을 하니 시간 가는 줄 몰랐어요.", answer: "즐거운" },
{ sentence: "수업이 끝난 뒤 친구와 ▢ 이야기를 나누었어요.", answer: "즐거운" },
{ sentence: "▢ 표정을 지으며 아이들이 놀이터에서 놀았어요.", answer: "즐거운" },
{ sentence: "새로운 친구를 만나서 ▢ 하루를 보냈어요.", answer: "즐거운" },

{ sentence: "▢ 머리를 자르니 더 짧아졌어요.", answer: "짧은" },
{ sentence: "선생님이 ▢ 이야기를 들려주셨어요.", answer: "짧은" },
{ sentence: "▢ 편지를 받았지만 마음이 따뜻해졌어요.", answer: "짧은" },
{ sentence: "▢ 순간이었지만 행복했어요.", answer: "짧은" },
{ sentence: "▢ 소매 때문에 손목이 다 드러났어요.", answer: "짧은" },
{ sentence: "▢ 여행이었지만 많은 것을 보고 느꼈어요.", answer: "짧은" },
{ sentence: "그 친구와는 ▢ 인사를 나누고 헤어졌어요.", answer: "짧은" },

{ sentence: "▢ 곰인형을 선물 받아서 너무 기뻤어요.", answer: "커다란" },
{ sentence: "놀이터에는 ▢ 미끄럼틀이 하나 있어요.", answer: "커다란" },
{ sentence: "▢ 나무 아래에서 시원한 그늘을 즐겼어요.", answer: "커다란" },
{ sentence: "▢ 구름이 하늘을 천천히 지나가고 있었어요.", answer: "커다란" },
{ sentence: "▢ 소망 하나를 마음에 담았어요.", answer: "커다란" },

{ sentence: "▢ 목소리로 친구를 불렀어요.", answer: "큰" },
{ sentence: "▢ 가방을 메고 등굣길에 나섰어요.", answer: "큰" },
{ sentence: "시험에서 ▢ 실수를 해서 아쉬웠어요.", answer: "큰" },
{ sentence: "▢ 눈망울로 나를 바라보는 강아지가 귀여웠어요.", answer: "큰" },
{ sentence: "▢ 그림을 그리기 위해 도화지를 펼쳤어요.", answer: "큰" },
{ sentence: "나는 ▢ 꿈을 꾸고 있어요.", answer: "큰" },
{ sentence: "▢ 문제를 해결하고 나니 자신감이 생겼어요.", answer: "큰" },

{ sentence: "아빠가 ▢ 의자를 만들어 주셨어요.", answer: "튼튼한" },
{ sentence: "▢ 다리를 가진 탁자라서 흔들리지 않았어요.", answer: "튼튼한" },
{ sentence: "나는 ▢ 몸을 만들기 위해 운동을 시작했어요.", answer: "튼튼한" },
{ sentence: "우리는 ▢ 다리 위를 천천히 건넜어요.", answer: "튼튼한" },
{ sentence: "▢ 줄로 만든 그네를 타고 놀았어요.", answer: "튼튼한" },

{ sentence: "산 위에는 ▢ 하늘이 펼쳐져 있어요.", answer: "푸른" },
{ sentence: "▢ 잔디밭 위에서 친구들과 뛰어놀았어요.", answer: "푸른" },
{ sentence: "바다에는 ▢ 파도가 넘실거려요.", answer: "푸른" },
{ sentence: "멀리 ▢ 산이 겹겹이 보였어요.", answer: "푸른" },
{ sentence: "아침 햇살 아래 ▢ 나뭇잎이 반짝였어요.", answer: "푸른" },
{ sentence: "▢ 하늘을 날아가는 새를 바라봤어요.", answer: "푸른" },
{ sentence: "여름이면 ▢ 숲 속에서 시원한 바람이 불어요.", answer: "푸른" },

{ sentence: "▢ 눈송이가 조용히 땅 위에 내려앉았어요.", answer: "하얀" },
{ sentence: "▢ 구름이 푸른 하늘 위에 떠 있어요.", answer: "하얀" },
{ sentence: "▢ 종이에 색연필로 그림을 그렸어요.", answer: "하얀" },
{ sentence: "강아지가 ▢ 털을 흔들며 다가왔어요.", answer: "하얀" },
{ sentence: "▢ 꽃잎이 바람에 흩날리고 있어요.", answer: "하얀" },

{ sentence: "아침마다 ▢ 인사를 나누며 하루를 시작해요.", answer: "힘찬" },
{ sentence: "운동장에 ▢ 발걸음 소리가 울려 퍼졌어요.", answer: "힘찬" },
{ sentence: "응원단이 ▢ 목소리로 선수들을 응원해요.", answer: "힘찬" },
{ sentence: "새가 ▢ 날갯짓으로 하늘을 날아올라요.", answer: "힘찬" },
{ sentence: "아이들이 ▢ 함성을 지르며 달려와요.", answer: "힘찬" },
{ sentence: "산을 향해 ▢ 발걸음을 내딛었어요.", answer: "힘찬" },
{ sentence: "▢ 시작을 위해 모두가 한자리에 모였어요.", answer: "힘찬" },

{ sentence: "매일 아침 운동을 하며 ▢ 몸을 유지해요.", answer: "건강한" },
{ sentence: "채소와 과일을 골고루 먹으면 ▢ 식사가 돼요.", answer: "건강한" },
{ sentence: "햇볕 아래 뛰노는 아이들의 모습이 정말 ▢ 것 같았어요.", answer: "건강한" },
{ sentence: "올바른 자세는 ▢ 생활을 도와줘요.", answer: "건강한" },
{ sentence: "▢ 마음을 가지면 친구들과 잘 지낼 수 있어요.", answer: "건강한" },
{ sentence: "일찍 자고 일찍 일어나는 것은 ▢ 습관이에요.", answer: "건강한" },

{ sentence: "▢ 줄을 사용해서 그네를 만들었어요.", answer: "굵은" },
{ sentence: "▢ 펜으로 글씨로 쓰니 눈에 잘 띄었어요.", answer: "굵은" },
{ sentence: "할아버지는 ▢ 나무토막으로 의자를 만드셨어요.", answer: "굵은" },
{ sentence: "그림을 그릴 때 ▢ 크레파스를 사용했어요.", answer: "굵은" },
{ sentence: "▢ 나뭇가지가 바람에 부러졌어요.", answer: "굵은" },
{ sentence: "▢ 빗방울이 창문을 두드렸어요.", answer: "굵은" },
{ sentence: "나는 ▢ 밧줄을 꽉 잡고 올라갔어요.", answer: "굵은" },

{ sentence: "▢ 강아지가 꼬리를 흔들며 다가와요.", answer: "귀여운" },
{ sentence: "인형 가게에는 ▢ 장난감들이 가득해요.", answer: "귀여운" },
{ sentence: "▢ 표정을 짓는 동생이 정말 사랑스러워요.", answer: "귀여운" },
{ sentence: "친구가 ▢ 목소리로 인사했어요.", answer: "귀여운" },
{ sentence: "▢ 토끼가 풀밭을 뛰어다녀요.", answer: "귀여운" },
{ sentence: "나는 ▢ 캐릭터가 그려진 필통을 샀어요.", answer: "귀여운" },

{ sentence: "▢ 머리카락을 단정하게 묶었어요.", answer: "긴" },
{ sentence: "할머니는 ▢ 이야기를 들려주셨어요.", answer: "긴" },
{ sentence: "나는 ▢줄넘기를 하고 놀았어요.", answer: "긴" },
{ sentence: "▢ 나뭇가지에 새들이 앉아 있어요.", answer: "긴" },
{ sentence: "▢ 터널을 지나가니 갑자기 시야가 밝아졌어요.", answer: "긴" },
{ sentence: "▢ 강이 마을을 휘감아 흐르고 있었어요.", answer: "긴" },
{ sentence: "▢ 기차가 천천히 역을 빠져나갔어요.", answer: "긴" },

{ sentence: "▢ 밤하늘에 별이 반짝여요.", answer: "깜깜한" },
{ sentence: "▢ 동굴 속에서는 앞이 잘 보이지 않아요.", answer: "깜깜한" },
{ sentence: "정전이 되어 방 안이 ▢ 상태였어요.", answer: "깜깜한" },
{ sentence: "▢ 골목길을 걸을 때 조금 무서웠어요.", answer: "깜깜한" },
{ sentence: "▢ 바다를 바라보니 파도 소리만 들렸어요.", answer: "깜깜한" },
{ sentence: "▢ 방에서 손전등을 켜고 책을 읽었어요.", answer: "깜깜한" },

{ sentence: "▢ 돌을 주워 물수제비를 떴어요.", answer: "납작한" },
{ sentence: "바닥에 ▢ 종이를 붙여 그림을 그렸어요.", answer: "납작한" },
{ sentence: "▢ 쿠키를 한입 베어 물었어요.", answer: "납작한" },
{ sentence: "동생이 ▢ 베개를 베고 잠들었어요.", answer: "납작한" },
{ sentence: "책상 위에 ▢ 상자를 올려두었어요.", answer: "납작한" },
{ sentence: "나는 ▢ 돌멩이를 모아 화분에 장식했어요.", answer: "납작한" },

{ sentence: "▢ 목소리로 조용히 이야기를 나눴어요.", answer: "낮은" },
{ sentence: "▢ 의자에 앉으니 책상이 너무 높았어요.", answer: "낮은" },
{ sentence: "▢ 구름이 하늘에 걸려 있었어요.", answer: "낮은" },
{ sentence: "▢ 계단을 올라가는 건 아주 쉬워요.", answer: "낮은" },
{ sentence: "▢ 담 너머로 친구가 손을 흔들어요.", answer: "낮은" },
{ sentence: "▢ 산을 넘자마자 작은 마을이 나왔어요.", answer: "낮은" },
{ sentence: "▢ 지붕 위에 고양이가 앉아 있어요.", answer: "낮은" },

{ sentence: "▢ 의자는 고쳐서 다시 사용할 수 있어요.", answer: "낡은" },
{ sentence: "할머니는 ▢ 책을 소중히 간직하고 계셨어요.", answer: "낡은" },
{ sentence: "▢ 운동화는 버려야 겠어요.", answer: "낡은" },
{ sentence: "▢ 가방에서 오래된 편지가 나왔어요.", answer: "낡은" },
{ sentence: "나는 ▢ 담장을 따라 걷고 있어요.", answer: "낡은" },
{ sentence: "▢ 인형을 보자 어릴 적 생각이 났어요.", answer: "낡은" },
{ sentence: "▢ 창문이 삐걱거리며 열렸어요.", answer: "낡은" },

{ sentence: "▢ 운동장에서 친구들과 함께 달렸어요.", answer: "넓은" },
{ sentence: "▢ 마당에 꽃을 심고 물을 주었어요.", answer: "넓은" },
{ sentence: "우리는 ▢ 잔디밭에 돗자리를 펼쳤어요.", answer: "넓은" },
{ sentence: "▢ 강물이 천천히 흐르고 있었어요.", answer: "넓은" },
{ sentence: "▢ 공간에서 자유롭게 그림을 그렸어요.", answer: "넓은" },
{ sentence: "▢ 들판에 노란 꽃이 가득 피었어요.", answer: "넓은" },
{ sentence: "▢ 강당에서 체육 수업을 했어요.", answer: "넓은" },

{ sentence: "▢ 해바라기가 해를 바라보고 피었어요.", answer: "노란" },
{ sentence: "정원에 ▢ 꽃들이 활짝 피었어요.", answer: "노란" },
{ sentence: "아이들이 ▢ 모자를 쓰고 소풍을 갔어요.", answer: "노란" },
{ sentence: "▢ 나비가 꽃 위를 날아다녔어요.", answer: "노란" },
{ sentence: "엄마가 ▢ 레몬으로 주스를 만들어 주셨어요.", answer: "노란" },
{ sentence: "▢ 바람개비가 햇빛에 반짝였어요.", answer: "노란" },
{ sentence: "▢ 장화 덕분에 비 오는 날도 신났어요.", answer: "노란" },

{ sentence: "▢ 산꼭대기에서 아래를 내려다보았어요.", answer: "높은" },
{ sentence: "▢ 건물 옥상에 올라가 바람을 느꼈어요.", answer: "높은" },
{ sentence: "그는 ▢ 목표를 세우고 열심히 노력했어요.", answer: "높은" },
{ sentence: "▢ 계단을 올라가니 멋진 풍경이 보였어요.", answer: "높은" },
{ sentence: "나는 ▢ 탑 위에서 사진을 찍었어요.", answer: "높은" },
{ sentence: "▢ 담장을 넘어서 공을 주워 왔어요.", answer: "높은" },
{ sentence: "▢ 하늘을 나는 새들이 자유로워 보여요.", answer: "높은" },

{ sentence: "▢ 바위를 넘지 못해 다른 길로 돌아갔어요.", answer: "단단한" },
{ sentence: "그는 ▢ 의지로 어려움을 이겨냈어요.", answer: "단단한" },
{ sentence: "▢ 벽에 공이 튕겨 나왔어요.", answer: "단단한" },
{ sentence: "▢ 나무판 위에서 망치질을 했어요.", answer: "단단한" },
{ sentence: "▢ 땅이라 삽이 잘 들어가지 않아요.", answer: "단단한" },
{ sentence: "▢ 갑옷을 입은 병사가 용감해 보였어요.", answer: "단단한" },

{ sentence: "하늘에 ▢ 달이 밝게 떠 있어요.", answer: "둥근" },
{ sentence: "▢ 풍선을 불어서 파티 장소를 꾸몄어요.", answer: "둥근" },
{ sentence: "아이들이 ▢ 공을 굴리며 놀았어요.", answer: "둥근" },
{ sentence: "▢ 안경을 쓴 친구가 인사를 건넸어요.", answer: "둥근" },
{ sentence: "▢ 돌을 주워 주머니에 넣었어요.", answer: "둥근" },
{ sentence: "책상 위에 ▢ 사과가 놓여 있었어요.", answer: "둥근" },
{ sentence: "▢ 테이블을 중심으로 모두 둘러앉았어요.", answer: "둥근" },

{ sentence: "▢ 외투를 입고 나가니 바람이 차갑지 않았어요.", answer: "두꺼운" },
{ sentence: "나는 ▢ 책을 들고 도서관에 갔어요.", answer: "두꺼운" },
{ sentence: "▢ 이불을 덮고 잤더니 푹 잘 수 있었어요.", answer: "두꺼운" },
{ sentence: "겨울에는 ▢ 장갑이 꼭 필요해요.", answer: "두꺼운" },
{ sentence: "▢ 유리창을 닦으니 햇살이 잘 들어와요.", answer: "두꺼운" },
{ sentence: "▢ 종이로 만든 책은 조금 무거워요.", answer: "두꺼운" },

{ sentence: "엄마가 만들어 주신 ▢ 반찬을 남김없이 먹었어요.", answer: "맛있는" },
{ sentence: "점심시간에 ▢ 도시락을 친구와 나눠 먹었어요.", answer: "맛있는" },
{ sentence: "▢ 냄새가 나서 금방 배가 고파졌어요.", answer: "맛있는" },
{ sentence: "할머니 댁에서 ▢ 밥을 잔뜩 먹고 왔어요.", answer: "맛있는" },
{ sentence: "▢ 과일을 먹으니 기분까지 좋아졌어요.", answer: "맛있는" },
{ sentence: "식당에서 ▢ 음식을 배불리 먹었어요.", answer: "맛있는" },
{ sentence: "▢ 간식을 친구들과 함께 나눠 먹었어요.", answer: "맛있는" },

{ sentence: "오빠가 ▢ 옷을 입고 약속 장소에 나갔어요.", answer: "멋진" },
{ sentence: "▢ 풍경을 보니 감탄이 절로 나왔어요.", answer: "멋진" },
{ sentence: "그림 속에는 ▢ 성이 그려져 있었어요.", answer: "멋진" },
{ sentence: "우리는 ▢ 공연을 보며 박수를 쳤어요.", answer: "멋진" },
{ sentence: "친구가 ▢ 춤을 추자 모두가 놀랐어요.", answer: "멋진" },
{ sentence: "선생님은 ▢ 말씀으로 우리를 감동시켰어요.", answer: "멋진" },
{ sentence: "▢ 하루를 보내고 나니 뿌듯했어요.", answer: "멋진" },

{ sentence: "아기가 ▢ 담요를 덮고 잠들었어요.", answer: "부드러운" },
{ sentence: "▢ 바람이 살며시 얼굴을 스쳤어요.", answer: "부드러운" },
{ sentence: "엄마의 ▢ 손길에 마음이 편안해졌어요.", answer: "부드러운" },
{ sentence: "▢ 쿠션에 기대어 책을 읽었어요.", answer: "부드러운" },
{ sentence: "나는 ▢ 목소리로 이야기해 주는 걸 좋아해요.", answer: "부드러운" },
{ sentence: "▢ 빵을 한입 베어 물었더니 정말 맛있었어요.", answer: "부드러운" },
{ sentence: "강아지의 ▢ 털을 쓰다듬으며 놀았어요.", answer: "부드러운" },

{ sentence: "달리기에서 ▢ 친구가 1등을 했어요.", answer: "빠른" },
{ sentence: "형은 ▢ 걸음으로 금방 집에 도착했어요.", answer: "빠른" },
{ sentence: "엄마는 ▢ 손놀림으로 음식을 금방 만들어요.", answer: "빠른" },
{ sentence: "▢ 판단이 필요한 순간이에요.", answer: "빠른" },
{ sentence: "그 친구는 ▢ 속도로 문제를 척척 풀어요.", answer: "빠른" },
{ sentence: "▢ 강물이 흘러 바위가 깎여 나갔어요.", answer: "빠른" },

];

const adjectiveDistractorMap = {
  "따뜻한": ["빠르게", "높이", "깡충깡충", "조용히", "신나게"],
  "맑은": ["단단한", "빠른", "깡충깡충", "시끄러운", "느릿느릿"],
  "배고픈": ["부드러운", "무서운", "작은", "멋진", "따뜻한"],
  "신나는": ["낮은", "알록달록한", "조용한", "느린", "맛있는"],
  "심심한": ["높은", "빠른", "두꺼운", "살랑살랑", "뻣뻣한"],
  "아름다운": ["느릿느릿", "좁은", "똑똑", "빠르게", "두껍게"],
  "알록달록한": ["뚝뚝", "단단한", "단단한", "맑게", "심심한"],
  "얇은": ["크게", "귀여운", "신나는", "높이", "살랑살랑"],
  "예쁜": ["강하게", "짧은", "깜깜한", "무거운", "맵기만한"],
  "자세한": ["빠르게", "부드럽게", "푸른", "귀여운", "짧은"],
  "작은": ["빨리", "높이", "아름답게", "덩치 큰", "푸른"],
  "좁은": ["빠르게", "두껍게", "푸르게", "알록달록하게", "짧게"],
  "좋아하는": ["지루한", "무서운", "시끄러운", "딱딱한", "힘차게"],
  "즐거운": ["딱딱한", "푸르게", "날카로운", "배고픈", "좁은"],
  "짧은": ["높이", "깜깜하게", "빠르게", "푸르게", "부드럽게"],
  "커다란": ["빨리", "맑게", "깡충깡충", "심심한", "짧은"],
  "큰": ["맛있게", "높이", "반짝반짝", "쑥쑥", "데굴데굴"],
  "튼튼한": ["사르르", "심심한", "맑게", "잊다", "두근두근"],
  "푸른": ["힘차게", "심심한", "쑥쑥", "주륵주륵", "엉금엉금"],
  "하얀": ["깡충깡충", "맑게", "동그랗게", "씽씽", "후드득"],
  "힘찬": ["사르르", "두리번두리번", "주렁주렁", "맑게", "심심한"],
  "건강한": ["알록달록한", "맵기만한", "좁은", "짧은", "덜 익은"],
  "굵은": ["따뜻한", "깜깜한", "살랑살랑", "얇게", "길게"],
  "귀여운": ["부드럽게", "빠르게", "깔깔", "덜 자란", "무섭게"],
  "긴": ["따뜻한", "예쁜", "두리번두리번", "짧은", "깨끗한"],
  "깜깜한": ["쨍한", "뜨거운", "느린", "단단한", "따뜻한"],
  "납작한": ["살랑살랑", "맑게", "두근두근", "알록달록한", "씽씽"],
  "낮은": ["맑게", "쑥쑥", "짧게", "두리번두리번", "커다란"],
  "낡은": ["맑게", "빠르게", "주륵주륵", "부드러운", "긴"],
  "넓은": ["단단한", "두근두근", "힘차게", "소중한", "쑥쑥"],
  "노란": ["두리번두리번", "심심한", "짧게", "둥글게", "튼튼하게"],
  "높은": ["맑게", "얇게", "짧게", "빠르게", "느릿느릿"],
  "단단한": ["느릿느릿", "깔깔", "맑게", "두리번두리번", "알록달록한"],
  "둥근": ["덜 자란", "살랑살랑", "짜디짠", "두리번두리번", "빠르게"],
  "두꺼운": ["데굴데굴", "날카로운", "느릿느릿", "얇게", "좁게"],
  "맛있는": ["느릿느릿", "알록달록한", "뻣뻣한", "주륵주륵", "얇게"],
  "멋진": ["알록달록한", "심심한", "두리번두리번", "조용한", "맑게"],
  "부드러운": ["단단한", "날카로운", "딱딱한", "지저분한", "느릿느릿"],
  "빠른": ["느릿느릿", "살랑살랑", "부드럽게", "신나게", "얇게"]
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

  const distractors = adjectiveDistractorMap[answer] || [];
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
