// 駅データのリスト
const stationList = [
    { id: "KS-01", name: "上野（うえの）" },
    { id: "KS-02", name: "日暮里（にっぽり）" },
    { id: "KS-03", name: "新三河島（しんみかわしま）" },
    { id: "KS-04", name: "町屋（まちや）" },
    { id: "KS-05", name: "千住大橋（せんじゅおおはし）" },
    { id: "KS-06", name: "関屋（せきや）" },
    { id: "KS-07", name: "堀切菖蒲園（ほりきりしょうぶえん）" },
    { id: "KS-08", name: "お花茶屋（おはなぢゃや）" },
    { id: "KS-09", name: "青砥（あおと）" },
    { id: "KS-10", name: "高砂（たかさご）" },
    { id: "KS-11", name: "小岩（こいわ）" },
    { id: "KS-12", name: "江戸川（えどがわ）" },
    { id: "KS-13", name: "国府台（こうのだい）" },
    { id: "KS-14", name: "市川真間（いちかわまま）" },
    { id: "KS-15", name: "菅野（すがの）" },
    { id: "KS-16", name: "八幡（やわた）" },
    { id: "KS-17", name: "鬼越（おにごえ）" },
    { id: "KS-18", name: "中山（なかやま）" },
    { id: "KS-19", name: "東中山（ひがしなかやま）" },
    { id: "KS-20", name: "西船（にしふな）" },
    { id: "KS-21", name: "海神（かいじん）" },
    { id: "KS-22", name: "船橋（ふなばし）" },
    { id: "KS-23", name: "大神宮下（だいじんぐうした）" },
    { id: "KS-24", name: "船橋競馬場（ふなばしけいばじょう）" },
    { id: "KS-25", name: "谷津（やつ）" },
    { id: "KS-26", name: "京成津田沼（けいせいつだぬま）" },
    { id: "KS-27", name: "大久保（おおくぼ）" },
    { id: "KS-28", name: "実粐（みもみ）" },
    { id: "KS-29", name: "八千代台（やちよだい）" },
    { id: "KS-30", name: "大和田（おおわだ）" },
    { id: "KS-31", name: "勝田台（かつただい）" },
    { id: "KS-32", name: "志津（しづ）" },
    { id: "KS-33", name: "ユーカリが丘（ゆーかりがおか）" },
    { id: "KS-34", name: "臼井（うすい）" },
    { id: "KS-35", name: "佐倉（さくら）" },
    { id: "KS-36", name: "大佐倉（おおさくら）" },
    { id: "KS-37", name: "酒々井（しすい）" },
    { id: "KS-38", name: "宗吾参道（そうごさんどう）" },
    { id: "KS-39", name: "公津の杜（こうづのもり）" },
    { id: "KS-40", name: "成田（なりた）" },
    { id: "KS-41", name: "空港第2ビル（くうこうだいにびる）" },
    { id: "KS-42", name: "成田空港（なりたくうこう）" },
    { id: "KS-43", name: "成田湯川（なりたゆかわ）" },
    { id: "KS-44", name: "東成田（ひがしなりた）" },
    { id: "KS-45", name: "押上（おしあげ）" },
    { id: "KS-46", name: "曳舟（ひきふね）" },
    { id: "KS-47", name: "八広（やひろ）" },
    { id: "KS-48", name: "四ツ木（よつぎ）" },
    { id: "KS-49", name: "立石（たていし）" },
    { id: "KS-50", name: "柴又（しばまた）" },
    { id: "KS-51", name: "金町（かなまち）" },
    { id: "KS-52", name: "幕張本郷（まくはりほんごう）" },
    { id: "KS-53", name: "幕張（まくはり）" },
    { id: "KS-54", name: "検見川（けみがわ）" },
    { id: "KS-55", name: "稲毛（いなげ）" },
    { id: "KS-56", name: "みどり台（みどりだい）" },
    { id: "KS-57", name: "西登戸（にしのぶと）" },
    { id: "KS-58", name: "新千葉（しんちば）" },
    { id: "KS-59", name: "千葉（ちば）" },
    { id: "KS-60", name: "千葉中央（ちばちゅうおう）" },
    { id: "KS-61", name: "千葉寺（ちばでら）" },
    { id: "KS-62", name: "大森台（おおもりだい）" },
    { id: "KS-63", name: "学園前（がくえんまえ）" },
    { id: "KS-64", name: "おゆみ野（おゆみの）" },
    { id: "KS-65", name: "ちはら台（ちはらだい）" }
];

// ゲーム状態の管理
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];
const totalQuestions = 10;

// DOM要素
const titleScreen = document.getElementById('title-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const currentQuestionElement = document.getElementById('current-question');
const scoreElement = document.getElementById('score');
const stationNameDisplay = document.getElementById('station-name-display');
const optionButtons = document.querySelectorAll('.option-btn');
const feedbackElement = document.getElementById('result-feedback');
const feedbackTextElement = document.getElementById('feedback-text');
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');

// 画面の切り替え
function showScreen(screen) {
    // すべての画面を非表示
    titleScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    // 指定した画面を表示
    screen.classList.remove('hidden');
}

// ランダムな数値の生成（min以上max未満）
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 配列のシャッフル
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// クイズの問題を生成（駅名表示→駅ナンバー選択の形式）
function generateQuizQuestions() {
    // 駅リストのインデックスをランダムにシャッフル
    const shuffledIndices = [...Array(stationList.length).keys()];
    shuffleArray(shuffledIndices);
    
    // 最初の10問を選択
    quizQuestions = shuffledIndices.slice(0, totalQuestions).map(index => {
        const correctStation = stationList[index];
        
        // 選択肢を生成（正解を含む4つ）
        let optionIndices = [index]; // 正解の駅のインデックス
        
        // 他の3つの選択肢をランダムに選ぶ
        while (optionIndices.length < 4) {
            const randomIndex = getRandomInt(0, stationList.length);
            if (!optionIndices.includes(randomIndex)) {
                optionIndices.push(randomIndex);
            }
        }
        
        // 選択肢をシャッフル
        shuffleArray(optionIndices);
        
        return {
            stationId: correctStation.id,
            stationName: correctStation.name,
            correctAnswer: correctStation.id,
            options: optionIndices.map(i => stationList[i].id),
            correctIndex: optionIndices.indexOf(index)
        };
    });
}

// 現在の問題を表示
function displayCurrentQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    
    // 問題番号と得点を更新
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    scoreElement.textContent = score;
    
    // 駅名を京成線看板デザインで表示
    const stationFullName = question.stationName;
    const parts = stationFullName.split('（');
    const stationName = parts[0];
    const stationReading = parts.length > 1 ? parts[1].replace('）', '') : '';
    
    // 駅看板の駅名表示をセット
    stationNameDisplay.innerHTML = `
        <div class="station-name-main">${stationName}</div>
        <div class="station-name-reading">${stationReading}</div>
    `;
    
    // 選択肢（駅ナンバー画像）を設定
    optionButtons.forEach((button, index) => {
        const stationId = question.options[index];
        const image = button.querySelector('.station-number-image');
        image.src = `images/${stationId}.png`;
        image.alt = stationId;
        
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
    });
    
    // フィードバック領域を非表示に
    feedbackElement.classList.add('hidden');
}

// 紙吹雪エフェクトを作成
function createConfetti() {
    const confettiCount = 100;
    const colors = ['#ffcc00', '#ffdd33', '#ffe066', '#fff9cc', '#ffffff'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 + 'px';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.opacity = Math.random() + 0.5;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        // アニメーション
        const animation = confetti.animate(
            [
                { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
                { transform: `translate(${Math.random() * 100 - 50}px, ${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ],
            {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            }
        );
        
        animation.onfinish = () => confetti.remove();
    }
}

// 正解・不正解のエフェクトを表示
function showAnswerEffect(isCorrect) {
    if (isCorrect) {
        // 正解エフェクト
        createConfetti();
        // 正解の効果音を再生
        const correctSound = new Audio('sounds/seikai.m4a');
        correctSound.play();
    } else {
        // 不正解エフェクト
        document.body.classList.add('shake');
        setTimeout(() => {
            document.body.classList.remove('shake');
        }, 500);
        // 不正解の効果音を再生
        const incorrectSound = new Audio('sounds/fuseikai.m4a');
        incorrectSound.play();
    }
}

// 回答を処理
function handleAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex;
    
    // ボタンの色を変更
    optionButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === question.correctIndex) {
            button.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            button.classList.add('incorrect');
        }
    });
    
    // スコア加算
    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
    }
    
    // 正解の駅ナンバー
    const correctStationId = question.correctAnswer;
    
    // フィードバック表示
    feedbackElement.classList.remove('hidden');
    if (isCorrect) {
        const praises = [
            `大正解！「${correctStationId}」が正解です！🎉`,
            `さすが！「${correctStationId}」が正解です！✨`,
            `素晴らしい！「${correctStationId}」です！👍`,
            `完璧！「${correctStationId}」ですね！🌟`
        ];
        feedbackTextElement.textContent = praises[Math.floor(Math.random() * praises.length)];
        feedbackElement.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
        feedbackElement.style.color = 'white';
    } else {
        const encouragements = [
            `残念！正解は「${correctStationId}」です。次は当てよう！`,
            `惜しい！正解は「${correctStationId}」でした。次頑張って！`,
            `ざんねん！正解は「${correctStationId}」です。次回に期待！`,
            `おしい！正解は「${correctStationId}」でした。次問に挑戦！`
        ];
        feedbackTextElement.textContent = encouragements[Math.floor(Math.random() * encouragements.length)];
        feedbackElement.style.backgroundColor = 'rgba(244, 67, 54, 0.9)';
        feedbackElement.style.color = 'white';
    }
    
    // エフェクト表示
    showAnswerEffect(isCorrect);
    
    // 次の問題へ進むか結果画面を表示
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            displayCurrentQuestion();
        } else {
            showResults();
        }
    }, 2000);
}

// 結果画面を表示
function showResults() {
    finalScoreElement.textContent = score;
    
    // 得点に応じたメッセージを表示
    let message = '';
    if (score === totalQuestions) {
        message = '完璧！あなたは京成線マスターです！🏆✨';
        // 大量の紙吹雪エフェクト
        createConfetti();
        setTimeout(createConfetti, 500);
    } else if (score >= totalQuestions * 0.8) {
        message = 'すごい！あなたは京成線のエキスパートです！🥇';
        createConfetti();
    } else if (score >= totalQuestions * 0.6) {
        message = 'なかなかの知識です！京成線通ですね！👍';
    } else if (score >= totalQuestions * 0.4) {
        message = 'まずまずの成績です。もう少し京成線を利用しましょう！😊';
    } else if (score >= totalQuestions * 0.2) {
        message = '京成線の駅をもっと覚えましょう！もう一度挑戦してみては？🌟';
    } else {
        message = '京成線の旅に出かけて、駅をもっと知りましょう！次は頑張って！✨';
    }
    
    resultMessageElement.textContent = message;
    showScreen(resultScreen);
}

// イベントリスナーの設定
startButton.addEventListener('click', () => {
    // クイズを初期化
    currentQuestionIndex = 0;
    score = 0;
    generateQuizQuestions();
    displayCurrentQuestion();
    showScreen(quizScreen);
});

restartButton.addEventListener('click', () => {
    showScreen(titleScreen);
});

optionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        handleAnswer(index);
    });
});

// 初期表示はタイトル画面
showScreen(titleScreen);
