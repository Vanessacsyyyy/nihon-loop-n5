window.lessonPath = [
  {id:'pronunciation',label:'START',title:'発音・五十音',focus:'清音、撥音、濁音、半濁音、促音、長音、拗音',sources:'IMG_1786–1793',topics:['Pronunciation'],verified:true},
  {id:'lesson-1',label:'LESSON 1',title:'これ・それ・あれ',focus:'指示詞、物件、は／です',sources:'IMG_1796–1800',topics:['Basics','Things','Particles']},
  {id:'lesson-2',label:'LESSON 2',title:'この・その・あの',focus:'何、はい／いいえ、の、も、所有',sources:'IMG_1801–1809',topics:['Basics','Questions','Particles','People']},
  {id:'lesson-3',label:'LESSON 3',title:'數字與價錢',focus:'數字、円、いくら',sources:'IMG_1810–1814',topics:['Numbers']},
  {id:'lesson-4',label:'LESSON 4',title:'樓層與時間',focus:'何階、何時、量詞、から／まで',sources:'IMG_1815–1822',topics:['Numbers','Time','Particles']},
  {id:'lesson-5',label:'LESSON 5',title:'時間表',focus:'分鐘、營業時間、午前／午後',sources:'IMG_1823–1828',topics:['Numbers','Time']},
  {id:'lesson-6',label:'LESSON 6',title:'日期、星期與家人',focus:'年月日、曜日、過去式、自我介紹',sources:'IMG_1829–1867',topics:['Numbers','Time','Family','Family tree','People']},
  {id:'lesson-7',label:'LESSON 7',title:'場所與存在',focus:'ここ／そこ／あそこ、あります／います',sources:'IMG_1841–1867',topics:['Places','Directions','N5 Grammar']},
  {id:'lesson-8',label:'LESSON 8',title:'有、沒有、疑問詞',focus:'ありません／いません、何か／何が／何も',sources:'IMG_1868–1873',topics:['N5 Grammar','Questions']},
  {id:'lesson-9-10',label:'LESSON 9–10',title:'人物與位置',focus:'家族、方位、存在句',sources:'IMG_1876–1888',topics:['Family','Family tree','Directions','Places']},
  {id:'lesson-11-15',label:'LESSON 11–15',title:'動作與時態',focus:'動詞、時間、現在／過去／否定、移動',sources:'IMG_1888–1913',topics:['Actions','Verbs','Time','Particles','N5 Grammar']},
  {id:'workbook',label:'WORKBOOK',title:'圖片詞彙練習',focus:'由工作紙圖片抽出的 N5 詞彙',sources:'IMG_1921–1950',topics:['Photo vocab']}
];

const pronunciationRows = [
  ['かんたん','かんたん','簡單 · simple','撥音 ん'],['はんたい','はんたい','相反 · opposite','撥音 ん'],['にほん','にほん','日本 · Japan','撥音 ん'],['てんき','てんき','天氣 · weather','撥音 ん'],['あんない','あんない','帶路／指南 · guidance','撥音 ん'],
  ['てがみ','てがみ','信 · letter','濁音'],['のど','のど','喉嚨 · throat','濁音'],['うさぎ','うさぎ','兔仔 · rabbit','濁音'],['だれ','だれ','誰 · who','濁音'],['ゆび','ゆび','手指 · finger','濁音'],['だいがく','だいがく','大學 · university','濁音'],['かぜ','かぜ','風／感冒 · wind/cold','濁音'],
  ['てんぷら','てんぷら','天婦羅 · tempura','半濁音'],['さんぽ','さんぽ','散步 · walk','半濁音'],['たんぽぽ','たんぽぽ','蒲公英 · dandelion','半濁音'],['えんぴつ','えんぴつ','鉛筆 · pencil','半濁音'],
  ['まっすぐ','まっすぐ','直行 · straight','促音 っ'],['きって','きって','郵票 · stamp','促音 っ'],['ゆっくり','ゆっくり','慢慢地 · slowly','促音 っ'],['けっこん','けっこん','結婚 · marriage','促音 っ'],['きっぷ','きっぷ','車票 · ticket','促音 っ'],['いっぱい','いっぱい','一杯／很多 · full/many','促音 っ'],
  ['おかあさん','おかあさん','母親（尊稱）· mother','長音'],['おにいさん','おにいさん','哥哥（尊稱）· older brother','長音'],['すうじ','すうじ','數字 · number','長音'],['おねえさん','おねえさん','姐姐（尊稱）· older sister','長音'],['おばあさん','おばあさん','祖母（尊稱）· grandmother','長音'],['おじいさん','おじいさん','祖父（尊稱）· grandfather','長音'],['せんせい','せんせい','老師 · teacher','長音'],['おとうさん','おとうさん','父親（尊稱）· father','長音'],
  ['しゅみ','しゅみ','興趣 · hobby','拗音'],['りょこう','りょこう','旅行 · travel','拗音'],['おちゃ','おちゃ','茶 · tea','拗音'],['しょくじ','しょくじ','用餐 · meal','拗音'],['しゃしん','しゃしん','相片 · photo','拗音'],['じゅんび','じゅんび','準備 · preparation','拗音'],['ちょきん','ちょきん','儲蓄 · savings','拗音'],
  ['とうきょう','とうきょう','東京 · Tokyo','拗長音'],['ちょうさ','ちょうさ','調查 · survey','拗長音'],['しゅうにゅう','しゅうにゅう','收入 · income','拗長音'],['しょうばい','しょうばい','生意 · business','拗長音'],['ひょうばん','ひょうばん','評價 · reputation','拗長音'],['はっぴょう','はっぴょう','發表 · presentation','拗長音'],['ざいりょう','ざいりょう','材料 · material','拗長音']
];

window.pronunciationCards = pronunciationRows.map((x,i)=>({
  id:`p${i+1}`, jp:x[0], kana:x[1], meaning:x[2], topic:'Pronunciation',
  example:`${x[0]}。音のポイント：${x[3]}。`, pronunciationGroup:x[3],
  source:'IMG_1786–1793', sourceKind:'課本原文 · 人工核對', lesson:'pronunciation', custom:false
}));
