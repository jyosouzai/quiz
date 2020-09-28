const quiz = [
  {
    question: 'Q1：日本で1番高い山は「富士山」ですが、世界で1番高い山は？',
    answers:  [ 'エベレスト', 'K2', 'カンチェンジュンガ', 'ローツェ'],
    correct: 'エベレスト'
  }, {
  question: 'Q2：クラーク博士は言った「少年よ○○を抱け。」○○に入る言葉は？',
    answers: [ '大志', '鯛と石', '太子', '太志'],
    correct: '大志'
  }, {
    question: 'Q3：色相環において、正反対に位置する関係の色の組み合わせの事を何という？',
    answers: [ '反対色', '補色', '対色', '反色'],
    correct: '補色'
  }, {
    question: 'Q4：任天堂のゲームソフト【ポケットモンスター】が海外では【Pokémon】と表記されるのは何故？',
    answers: [ 'pocketmonsterだと文字数が多いから', 'pocketmonsterは男性器を表す隠語だから', 'かわいい印象にしたかったから'],
    correct: 'pocketmonsterは男性器を表す隠語だから'
  }, {
    question: 'Q5：「2年半、この時を待ち続けていた」から始まる、ある発明家が発表した機械は？',
    answers: [ 'Andloid', 'ipod', 'Apple', ' iPhone'],
    correct: 'iPhone'
  }, {
    question: 'Q6：パンはパンでも食べれないパンはフライパンですが、電車屋根にとりつけて架線の電流を導き入れる装置の事を何という？',
    answers: [ 'パンダグラフ', 'パンタグラフ', 'パンナコッタ', ' グラタンパン'],
    correct: 'パンタグラフ'
  }, {
    question: 'Q7：1935年にオーストリアのとある物理学者が発表した「物理学的実在の量子力学的記述が不完全である」という事を説明するために用いた思考実験の名称は？',
    answers: [ 'スワンプマン', '双子のパラドックス', 'シュレーディンガーの猫', 'マクスウェルの悪魔'],
    correct: 'シュレーディンガーの猫'
  }, {
    question: 'Q8：第二次世界大戦において、日本の敗戦へのきっかけになった「運命の15分間」と言われる出来事が起きた海戦はどれ？',
    answers: [ ' マリアナ沖海戦', 'レイテ沖海戦', '第三次ソロモン海戦', 'ミッドウェー海戦'],
    correct: 'ミッドウェー海戦'
  }, {
    question: 'Q9：マリー・アントワネットが当時7歳だった時に自身に告白をしてきたという逸話がある、「魔笛」「アイネ・クライネ・ナハトムジーク」「俺の尻をなめろ」で有名な作曲家は？',
    answers: [ 'ヴォルフガング・アマデウス・モーツァルト', 'ヨハン・ゼバスティアン・バッハ', 'ルートヴィヒ・ヴァン・ベートーヴェン', 'フランツ・シューベルト'],
    correct: 'ヴォルフガング・アマデウス・モーツァルト'
  }, {
    question: 'Q10：バイエルン王ルートヴィヒ2世によって19世紀に建築された、カリフォルニアにあるオリジナルのディズニーランドのモデルにもなっている、「ドイツ国南部・バイエルン州バイエルン・シュヴァーベン地方・オストアルゴイ郡シュヴァンガウ町ホーエンシュヴァンガウ地区」にある城の名称は？',
    answers: [ 'ハイデルベルク城', 'ホーエンツォレルン城', 'ノイシュバンシュタイン城', 'フランケンシュタイン城'],
    correct: 'ノイシュバンシュタイン城'

  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;
//定数の文字列をHTMLに反映させる
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！！' )
    score++;
  } else {
    window.alert('不正解！！' );
  }
  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は'+　score + '/' + quizLength + 'です！')
    window.alert(answer)

  }


};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e)=> {
  clickHandler(e);
  });
  handlerIndex++;
}
