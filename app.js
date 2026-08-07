const baseCards = [
  ['これ','これ','這個 · this (near me)','Basics','これは本です。'],
  ['それ','それ','那個 · that (near you)','Basics','それは辞書です。'],
  ['あれ','あれ','那個 · that (over there)','Basics','あれは学校です。'],
  ['この','この','這個～ · this …','Basics','この本は日本語の本です。'],
  ['その','その','那個～ · that …','Basics','その人は先生です。'],
  ['あの','あの','那個～ · that … over there','Basics','あの建物は病院です。'],
  ['ここ','ここ','這裡 · here','Places','ここは教室です。'],
  ['そこ','そこ','那裡 · there','Places','そこは食堂です。'],
  ['あそこ','あそこ','那邊 · over there','Places','あそこは図書館です。'],
  ['どこ','どこ','哪裡 · where','Places','トイレはどこですか。'],
  ['教室','きょうしつ','課室 · classroom','Places','教室に学生がいます。'],
  ['食堂','しょくどう','飯堂 · dining hall','Places','食堂で昼ご飯を食べます。'],
  ['事務所','じむしょ','辦公室 · office','Places','事務所は二階です。'],
  ['会議室','かいぎしつ','會議室 · meeting room','Places','会議室はあちらです。'],
  ['受付','うけつけ','接待處 · reception','Places','受付は一階です。'],
  ['図書館','としょかん','圖書館 · library','Places','図書館へ行きます。'],
  ['病院','びょういん','醫院 · hospital','Places','病院は駅の近くです。'],
  ['学校','がっこう','學校 · school','Places','学校は九時からです。'],
  ['駅','えき','車站 · station','Places','駅で友達に会います。'],
  ['会社','かいしゃ','公司 · company','People','会社へ行きます。'],
  ['社員','しゃいん','公司職員 · employee','People','私は会社員です。'],
  ['銀行員','ぎんこういん','銀行職員 · bank employee','People','姉は銀行員です。'],
  ['先生','せんせい','老師 · teacher','People','先生は日本人です。'],
  ['学生','がくせい','學生 · student','People','私は学生です。'],
  ['医者','いしゃ','醫生 · doctor','People','父は医者です。'],
  ['家族','かぞく','家人 · family','Family','家族は五人です。'],
  ['父','ちち','我父親 · my father','Family','父は会社員です。'],
  ['母','はは','我母親 · my mother','Family','母は先生です。'],
  ['お父さん','おとうさん','父親（別人的／尊稱）','Family','お父さんはお元気ですか。'],
  ['お母さん','おかあさん','母親（別人的／尊稱）','Family','お母さんはどちらですか。'],
  ['兄','あに','我哥哥 · my older brother','Family','兄は大学生です。'],
  ['姉','あね','我姐姐 · my older sister','Family','姉は銀行員です。'],
  ['弟','おとうと','我弟弟 · my younger brother','Family','弟は十六歳です。'],
  ['妹','いもうと','我妹妹 · my younger sister','Family','妹は学生です。'],
  ['本','ほん','書 · book','Things','机の上に本があります。'],
  ['辞書','じしょ','字典 · dictionary','Things','これは日本語の辞書です。'],
  ['新聞','しんぶん','報紙 · newspaper','Things','新聞を読みます。'],
  ['時計','とけい','鐘／手錶 · clock/watch','Things','この時計はいくらですか。'],
  ['傘','かさ','雨傘 · umbrella','Things','これは私の傘です。'],
  ['鍵','かぎ','鎖匙 · key','Things','鍵は机の上です。'],
  ['机','つくえ','書桌 · desk','Things','机の下に鞄があります。'],
  ['椅子','いす','椅子 · chair','Things','椅子に座ります。'],
  ['鞄','かばん','袋／書包 · bag','Things','鞄の中に本があります。'],
  ['何','なん／なに','甚麼 · what','Questions','これは何ですか。'],
  ['誰','だれ','誰 · who','Questions','あの人は誰ですか。'],
  ['どちら','どちら','哪一邊／哪位 · which way/person','Questions','お国はどちらですか。'],
  ['いくら','いくら','多少錢 · how much','Questions','これはいくらですか。'],
  ['何時','なんじ','幾點 · what time','Time','今、何時ですか。'],
  ['今日','きょう','今日 · today','Time','今日は水曜日です。'],
  ['明日','あした','聽日 · tomorrow','Time','明日、学校へ行きます。'],
  ['昨日','きのう','昨日 · yesterday','Time','昨日、勉強しました。'],
  ['毎日','まいにち','每日 · every day','Time','毎日、日本語を勉強します。'],
  ['起きます','おきます','起身 · wake up','Verbs','毎朝七時に起きます。'],
  ['寝ます','ねます','瞓覺 · sleep','Verbs','十一時に寝ます。'],
  ['働きます','はたらきます','工作 · work','Verbs','会社で働きます。'],
  ['休みます','やすみます','休息／請假 · rest','Verbs','日曜日に休みます。'],
  ['勉強します','べんきょうします','學習 · study','Verbs','図書館で勉強します。'],
  ['行きます','いきます','去 · go','Verbs','学校へ行きます。'],
  ['来ます','きます','來 · come','Verbs','友達が家に来ます。'],
  ['帰ります','かえります','返去 · return','Verbs','六時に家へ帰ります。'],
  ['食べます','たべます','食 · eat','Verbs','パンを食べます。'],
  ['飲みます','のみます','飲 · drink','Verbs','水を飲みます。'],
  ['見ます','みます','看 · see/watch','Verbs','映画を見ます。'],
  ['聞きます','ききます','聽／問 · listen/ask','Verbs','音楽を聞きます。'],
  ['読みます','よみます','讀 · read','Verbs','本を読みます。'],
  ['書きます','かきます','寫 · write','Verbs','手紙を書きます。'],
  ['話します','はなします','說話 · speak','Verbs','日本語で話します。'],
  ['は','は（wa）','主題助詞 · topic marker','Particles','私は学生です。'],
  ['の','の','所屬／連接名詞 · possession','Particles','これは私の本です。'],
  ['を','を（o）','動作對象 · object marker','Particles','日本語を勉強します。'],
  ['に','に','時間／目的地 · time/destination','Particles','七時に起きます。'],
  ['へ','へ（e）','方向 · direction','Particles','日本へ行きます。'],
  ['で','で','動作地點／手段 · at/by','Particles','図書館で勉強します。'],
  ['も','も','也 · also','Particles','私も学生です。'],
  ['から','から','由／從 · from','Particles','九時から働きます。'],
  ['まで','まで','到 · until','Particles','五時まで勉強します。'],
  ['か','か','疑問助詞 · question marker','Particles','これは本ですか。']
].map((x, i) => ({ id: `s${i+1}`, jp:x[0], kana:x[1], meaning:x[2], topic:x[3], example:x[4], custom:false }));

const extraCards = [
  // Numbers and counters
  ['零／ゼロ','れい／ゼロ','零 · zero','Numbers','りんごはゼロです。'],
  ['一','いち','一 · one','Numbers','りんごが一つあります。'],
  ['二','に','二 · two','Numbers','猫が二匹います。'],
  ['三','さん','三 · three','Numbers','三人で行きます。'],
  ['四','よん／し','四 · four','Numbers','四時です。'],
  ['五','ご','五 · five','Numbers','五分待ってください。'],
  ['六','ろく','六 · six','Numbers','六時に起きます。'],
  ['七','なな／しち','七 · seven','Numbers','七月に日本へ行きます。'],
  ['八','はち','八 · eight','Numbers','八百円です。'],
  ['九','きゅう／く','九 · nine','Numbers','九時から勉強します。'],
  ['十','じゅう','十 · ten','Numbers','十人います。'],
  ['十一','じゅういち','十一 · eleven','Numbers','十一時に寝ます。'],
  ['二十','にじゅう','二十 · twenty','Numbers','私は二十歳です。'],
  ['百','ひゃく','一百 · one hundred','Numbers','百円です。'],
  ['三百','さんびゃく','三百 · three hundred','Numbers','三百円です。'],
  ['六百','ろっぴゃく','六百 · six hundred','Numbers','六百円です。'],
  ['八百','はっぴゃく','八百 · eight hundred','Numbers','八百円です。'],
  ['千','せん','一千 · one thousand','Numbers','千円です。'],
  ['三千','さんぜん','三千 · three thousand','Numbers','三千円です。'],
  ['八千','はっせん','八千 · eight thousand','Numbers','八千円です。'],
  ['一万','いちまん','一萬 · ten thousand','Numbers','一万円です。'],
  ['一人','ひとり','一個人 · one person','Numbers','部屋に一人います。'],
  ['二人','ふたり','兩個人 · two people','Numbers','家族は二人です。'],
  ['三人','さんにん','三個人 · three people','Numbers','学生が三人います。'],
  ['一つ','ひとつ','一個（一般物件）','Numbers','質問が一つあります。'],
  ['二つ','ふたつ','兩個（一般物件）','Numbers','りんごを二つください。'],
  ['一日','ついたち','一號／第一日 · first day','Numbers','今日は五月一日です。'],
  ['二日','ふつか','二號／兩日 · second/two days','Numbers','二日休みます。'],
  ['七日','なのか','七號／七日 · seventh/seven days','Numbers','七日に会いましょう。'],
  ['二十日','はつか','二十號／二十日 · twentieth','Numbers','今日は二十日です。'],

  // Family tree
  ['祖父','そふ','我祖父／外祖父 · my grandfather','Family tree','祖父は七十歳です。'],
  ['祖母','そぼ','我祖母／外祖母 · my grandmother','Family tree','祖母は料理が上手です。'],
  ['お祖父さん','おじいさん','祖父／老伯（尊稱）','Family tree','お祖父さんはお元気ですか。'],
  ['お祖母さん','おばあさん','祖母／老婆婆（尊稱）','Family tree','お祖母さんは東京に住んでいます。'],
  ['両親','りょうしん','父母 · parents','Family tree','両親は香港に住んでいます。'],
  ['夫','おっと','我丈夫 · my husband','Family tree','夫は会社員です。'],
  ['妻','つま','我妻子 · my wife','Family tree','妻は日本語を勉強しています。'],
  ['ご主人','ごしゅじん','別人的丈夫 · husband','Family tree','ご主人はおいくつですか。'],
  ['奥さん','おくさん','別人的妻子 · wife','Family tree','奥さんは先生です。'],
  ['息子','むすこ','我兒子 · my son','Family tree','息子は五歳です。'],
  ['娘','むすめ','我女兒 · my daughter','Family tree','娘は学校へ行きます。'],
  ['お子さん','おこさん','別人的孩子 · child','Family tree','お子さんは何歳ですか。'],
  ['兄弟','きょうだい','兄弟姊妹 · siblings','Family tree','兄弟が二人います。'],
  ['叔父／伯父','おじ','我叔父／伯父／舅父 · uncle','Family tree','叔父は大阪に住んでいます。'],
  ['叔母／伯母','おば','我叔母／伯母／姨母 · aunt','Family tree','叔母は看護師です。'],
  ['いとこ','いとこ','表／堂兄弟姊妹 · cousin','Family tree','いとこと映画を見ます。'],

  // Directions and position
  ['上','うえ','上面 · above/on','Directions','机の上に本があります。'],
  ['下','した','下面 · below/under','Directions','椅子の下に猫がいます。'],
  ['前','まえ','前面 · front','Directions','駅の前で会いましょう。'],
  ['後ろ','うしろ','後面 · behind','Directions','学校の後ろに公園があります。'],
  ['右','みぎ','右邊 · right','Directions','次の角を右へ曲がってください。'],
  ['左','ひだり','左邊 · left','Directions','銀行は郵便局の左です。'],
  ['中','なか','裡面 · inside','Directions','鞄の中に鍵があります。'],
  ['外','そと','外面 · outside','Directions','外で待っています。'],
  ['隣','となり','隔離／旁邊 · next to','Directions','コンビニは銀行の隣です。'],
  ['近く','ちかく','附近 · nearby','Directions','家の近くにスーパーがあります。'],
  ['間','あいだ','中間 · between','Directions','駅と学校の間にあります。'],
  ['北','きた','北 · north','Directions','北海道は日本の北にあります。'],
  ['南','みなみ','南 · south','Directions','沖縄は日本の南にあります。'],
  ['東','ひがし','東 · east','Directions','東京は日本の東にあります。'],
  ['西','にし','西 · west','Directions','大阪は東京の西にあります。'],
  ['まっすぐ','まっすぐ','直行 · straight','Directions','この道をまっすぐ行ってください。'],
  ['曲がります','まがります','轉彎 · turn','Directions','交差点を左へ曲がります。'],
  ['渡ります','わたります','橫過 · cross','Directions','橋を渡ってください。'],
  ['交差点','こうさてん','十字路口 · intersection','Directions','交差点の右に銀行があります。'],
  ['角','かど','街角／轉角 · corner','Directions','次の角を右へ曲がります。'],

  // Actions happening now and core N5 actions
  ['歩きます','あるきます','步行 · walk','Actions','今、駅まで歩いています。'],
  ['走ります','はしります','跑 · run','Actions','公園で走っています。'],
  ['座ります','すわります','坐低 · sit','Actions','椅子に座っています。'],
  ['立ちます','たちます','企 · stand','Actions','ドアの前に立っています。'],
  ['開けます','あけます','打開 · open','Actions','窓を開けています。'],
  ['閉めます','しめます','關上 · close','Actions','ドアを閉めてください。'],
  ['買います','かいます','買 · buy','Actions','今、スーパーで野菜を買っています。'],
  ['売ります','うります','賣 · sell','Actions','この店は本を売っています。'],
  ['待ちます','まちます','等待 · wait','Actions','駅で友達を待っています。'],
  ['使います','つかいます','使用 · use','Actions','今、パソコンを使っています。'],
  ['作ります','つくります','製作／煮 · make','Actions','母は晩ご飯を作っています。'],
  ['洗います','あらいます','清洗 · wash','Actions','手を洗っています。'],
  ['歌います','うたいます','唱歌 · sing','Actions','妹は歌を歌っています。'],
  ['泳ぎます','およぎます','游水 · swim','Actions','プールで泳いでいます。'],
  ['遊びます','あそびます','玩 · play','Actions','子どもが公園で遊んでいます。'],
  ['電話します','でんわします','打電話 · call','Actions','今、友達に電話しています。'],
  ['料理します','りょうりします','煮食 · cook','Actions','父は台所で料理しています。'],
  ['掃除します','そうじします','打掃 · clean','Actions','部屋を掃除しています。'],
  ['結婚します','けっこんします','結婚 · marry','Actions','姉は結婚しています。'],
  ['住んでいます','すんでいます','居住 · live','Actions','香港に住んでいます。'],
  ['知っています','しっています','知道 · know','Actions','田中さんを知っています。'],
  ['持っています','もっています','持有／帶住 · have/hold','Actions','傘を持っています。'],

  // Useful N5 descriptions and grammar
  ['大きい','おおきい','大 · big','N5 Grammar','東京は大きい町です。'],
  ['小さい','ちいさい','細 · small','N5 Grammar','小さい犬がいます。'],
  ['新しい','あたらしい','新 · new','N5 Grammar','新しい本を買いました。'],
  ['古い','ふるい','舊 · old','N5 Grammar','これは古いお寺です。'],
  ['高い','たかい','高／貴 · high/expensive','N5 Grammar','この時計は高いです。'],
  ['安い','やすい','便宜 · cheap','N5 Grammar','この店は安いです。'],
  ['暑い','あつい','熱（天氣）· hot','N5 Grammar','今日は暑いです。'],
  ['寒い','さむい','凍 · cold','N5 Grammar','北海道は寒いです。'],
  ['好き','すき','喜歡 · like','N5 Grammar','私は猫が好きです。'],
  ['嫌い','きらい','討厭 · dislike','N5 Grammar','弟は野菜が嫌いです。'],
  ['上手','じょうず','擅長 · skillful','N5 Grammar','母は料理が上手です。'],
  ['下手','へた','不擅長 · unskillful','N5 Grammar','私は歌が下手です。'],
  ['あります','あります','有（無生命）· there is','N5 Grammar','机の上に本があります。'],
  ['います','います','有（人／動物）· there is','N5 Grammar','部屋に猫がいます。'],
  ['〜ています','〜ています','正在～／持續狀態 · be doing','N5 Grammar','今、日本語を勉強しています。'],
  ['〜てください','〜てください','請～ · please do','N5 Grammar','ここに名前を書いてください。'],
  ['〜てもいいです','〜てもいいです','可以～ · may do','N5 Grammar','写真を撮ってもいいです。'],
  ['〜てはいけません','〜てはいけません','不可以～ · must not','N5 Grammar','ここで写真を撮ってはいけません。'],
  ['〜たいです','〜たいです','想～ · want to do','N5 Grammar','日本へ行きたいです。'],
  ['〜ませんか','〜ませんか','一起～嗎 · invitation','N5 Grammar','いっしょに映画を見ませんか。']
].map((x, i) => ({ id: `e${i+1}`, jp:x[0], kana:x[1], meaning:x[2], topic:x[3], example:x[4], custom:false }));

const starterCards = [...baseCards, ...extraCards, ...(window.photoCards || [])];

const photos = [
  ...Array.from({length:56}, (_,i) => `IMG_${1786+i}.jpg`),
  ...[1863,1864,1865,1866,1867,1868,1869,1870,1873,1876,1878,1879,1888,1892,1898,1901,1904,1909,1910,1911,1912,1913,1921,1922,1924,1926,1928,1929,1930,1932,1936,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1950].map(n=>`IMG_${n}.jpg`)
];
const STORE = 'nihon-loop-v1';
const freshState = () => ({ progress:{}, custom:[], sessions:0, reviews:0, xp:0, hearts:5, streak:0, lastStudy:'', studiedPages:[], direction:'jp', session:null, drill:null });
const defaultState = freshState();
let state = load();
let currentView = 'home';
let libraryRotation = 0;
let activePhoto = '';

function load(){
  try { return {...freshState(), ...(JSON.parse(localStorage.getItem(STORE)) || {})}; }
  catch { return freshState(); }
}
function save(){ localStorage.setItem(STORE, JSON.stringify(state)); }
function allCards(){ return [...starterCards, ...state.custom]; }
function progress(id){ return state.progress[id] || {level:0, due:0, seen:0, lapses:0}; }
function isDue(card){ return progress(card.id).due <= Date.now(); }
function mastered(card){ return progress(card.id).level >= 4; }
function dayKey(date=new Date()){ return date.toISOString().slice(0,10); }
function registerStudy(){
  const today=dayKey(); if(state.lastStudy===today) return;
  const yesterday=new Date(); yesterday.setDate(yesterday.getDate()-1);
  state.streak = state.lastStudy===dayKey(yesterday) ? state.streak+1 : 1;
  state.lastStudy=today;
}
function toast(message){ const el=document.querySelector('#toast'); el.textContent=message; el.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove('show'),1800); }
function esc(value=''){ return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function toRomaji(input=''){
  const pairs={
    'きゃ':'kya','きゅ':'kyu','きょ':'kyo','しゃ':'sha','しゅ':'shu','しょ':'sho','ちゃ':'cha','ちゅ':'chu','ちょ':'cho','にゃ':'nya','にゅ':'nyu','にょ':'nyo','ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo','みゃ':'mya','みゅ':'myu','みょ':'myo','りゃ':'rya','りゅ':'ryu','りょ':'ryo','ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo','じゃ':'ja','じゅ':'ju','じょ':'jo','びゃ':'bya','びゅ':'byu','びょ':'byo','ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo','てぃ':'ti','でぃ':'di','ふぁ':'fa','ふぃ':'fi','ふぇ':'fe','ふぉ':'fo'
  };
  const single={'あ':'a','い':'i','う':'u','え':'e','お':'o','か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko','さ':'sa','し':'shi','す':'su','せ':'se','そ':'so','た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to','な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no','は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho','ま':'ma','み':'mi','む':'mu','め':'me','も':'mo','や':'ya','ゆ':'yu','よ':'yo','ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro','わ':'wa','を':'o','ん':'n','が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go','ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo','だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do','ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo','ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po','ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o','ー':'-'};
  const text=String(input).replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60));
  let out='', doubleNext=false;
  for(let i=0;i<text.length;i++){
    if(text[i]==='っ'){ doubleNext=true; continue; }
    const pair=text.slice(i,i+2); let sound=pairs[pair]; if(sound)i++;
    else sound=single[text[i]] ?? text[i];
    if(doubleNext && /^[a-z]/.test(sound)){ sound=sound[0]+sound; doubleNext=false; }
    if(sound==='-' && out){ const vowel=(out.match(/[aeiou](?!.*[aeiou])/i)||[''])[0]; sound=vowel; }
    out+=sound;
  }
  return out.replace(/n([bmp])/g,'m$1').replace(/\s*／\s*/g,' / ').replace(/〜/g,'~');
}
function romajiFor(card){ return card.romaji || toRomaji(card.kana); }
function japaneseAnswer(card){ return `${card.jp} · ${romajiFor(card)}`; }

function setView(view, options={}){
  currentView=view;
  document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active', b.dataset.view===view));
  if(view==='home') renderHome();
  if(view==='review') options.start ? startReview(options) : renderPracticeHub();
  if(view==='library') renderLibrary();
  if(view==='cards') renderCards();
  document.querySelector('#app').focus({preventScroll:true});
  window.scrollTo({top:0, behavior:'smooth'});
}

function renderHome(){
  const cards=allCards(), due=cards.filter(isDue).length, done=cards.filter(mastered).length;
  const pct=Math.round(done/cards.length*100);
  const topics=[['Basics','あ'],['Numbers','一'],['Family tree','家'],['Directions','↗'],['Actions','今'],['N5 Grammar','文'],['Places','駅'],['People','人'],['Family','族'],['Things','本'],['Questions','？'],['Time','時'],['Verbs','動'],['Particles','を']];
  document.querySelector('#app').innerHTML=`
    <section class="hero"><p class="eyebrow">30-DAY N5 EXAM PATH</p><h1>每日答到熟。<br>錯題不停返嚟。</h1><p class="lead">根據你影的課本頁製作：vocab、日期、星期、價錢、助詞、存在句、過去式、否定句及日文問句。</p></section>
    <section class="today-card">
      <div class="today-top"><div><p class="eyebrow">TODAY'S LOOP</p><h2>${due ? 'Ready when you are.' : 'Queue cleared!'}</h2><p>${due ? `${due} cards are waiting. Missed ones loop back until you remember them.` : 'You remembered every card due now. Try a full cram or browse your lesson pages.'}</p></div><div class="due-badge"><span>${due}<small>DUE</small></span></div></div>
      <button class="primary-button" data-start-review>開始今日 Duolingo 式填充 →</button>
      <div class="progress-track"><i style="width:${pct}%"></i></div>
    </section>
    <div class="section-head"><h2>Your rhythm</h2><p>Saved on this phone</p></div>
    <section class="stats-grid">
      <div class="stat"><strong>🔥 ${state.streak}</strong><span>day streak</span></div>
      <div class="stat"><strong>⭐ ${state.xp||0}</strong><span>XP earned</span></div>
      <div class="stat"><strong>💚 ${state.hearts||5}</strong><span>hearts</span></div>
    </section>
    <div class="section-head"><h2>Study by topic</h2><p>${cards.length} cards</p></div>
    <section class="topic-grid">${topics.map(([t,icon])=>{const n=cards.filter(c=>c.topic===t).length; return `<button class="topic-card" data-topic="${t}"><span class="topic-icon">${icon}</span><span><strong>${t}</strong><small>${n} cards</small></span></button>`}).join('')}</section>
  `;
  document.querySelector('[data-start-review]').onclick=()=>startDrill('cloze');
  document.querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>startReview({topic:b.dataset.topic,all:true,mode:'flip'}));
}

function renderPracticeHub(){
  const due=allCards().filter(isDue).length;
  const modes=[
    ['flip','LEVEL 1','Flip cards','Chinese → Japanese','Tap to reveal Japanese, romaji, and a sentence.'],
    ['mcMeaning','LEVEL 2','Meaning MC','Japanese → Chinese','Build fast recognition with four choices.'],
    ['mcJapanese','LEVEL 3','Japanese MC','Chinese → Japanese','Recall the Japanese from its Chinese meaning.'],
    ['written','LEVEL 4','Written answer','Chinese → type Japanese','Type Japanese or romaji. Mistakes show the answer and loop back.'],
    ['cloze','LEVEL 5','重組句子','Chinese → build Japanese','Tap the boxes in the correct order. Wrong sentences are explained and return.'],
    ['grammarMC','LEVEL 6','Grammar challenge','Particles · tense · existence','Choose は・に・と・や・も and the correct verb form from your notes.']
  ];
  document.querySelector('#app').innerHTML=`
    <section class="hero compact-hero"><p class="eyebrow">N5 PRACTICE LAB</p><h1>Choose your challenge.</h1><p class="lead">Start with recognition, then work up to writing from memory. Every wrong answer returns in the same loop.</p></section>
    <section class="mode-grid">${modes.map(([mode,level,title,route,desc])=>`<button class="mode-card" data-mode="${mode}"><span class="mode-level">${level}</span><strong>${title}</strong><em>${route}</em><p>${desc}</p><span class="mode-arrow">→</span></button>`).join('')}</section>
    <div class="section-head"><h2>Family map</h2><p>learn the relationships, then test yourself</p></div>
    <section class="family-tree" aria-label="Japanese family tree">
      <div class="family-generation"><span>祖父<br><small>sofu</small></span><span>祖母<br><small>sobo</small></span></div>
      <i></i><div class="family-generation"><span>父<br><small>chichi</small></span><span>母<br><small>haha</small></span></div>
      <i></i><div class="family-generation three"><span>兄／姉<br><small>ani / ane</small></span><span>私<br><small>watashi</small></span><span>弟／妹<br><small>otōto / imōto</small></span></div>
    </section>
    <div class="quick-decks"><button class="secondary-button" data-quick="Family tree">家 Family tree</button><button class="secondary-button" data-quick="Numbers">一 Numbers</button><button class="secondary-button" data-quick="Directions">↗ Directions</button><button class="secondary-button" data-quick="Actions">今 Actions</button></div>
    <p class="practice-note">${due} cards are due. Practice modes use the due queue first; choose a quick deck to cram one topic.</p>`;
  document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>['cloze','grammarMC'].includes(b.dataset.mode)?startDrill(b.dataset.mode):startReview({mode:b.dataset.mode,all:false}));
  document.querySelectorAll('[data-quick]').forEach(b=>b.onclick=()=>startReview({mode:'flip',topic:b.dataset.quick,all:true}));
}

function makeQueue(options={}){
  let pool=allCards().filter(c=>!options.topic || c.topic===options.topic);
  if(!options.all) pool=pool.filter(isDue);
  if(!pool.length) pool=allCards().filter(c=>!options.topic || c.topic===options.topic);
  return pool.sort(()=>Math.random()-.5).map(c=>c.id);
}
function startReview(options={}){
  currentView='review';
  document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active', b.dataset.view==='review'));
  if(options.mode || !state.session || options.all || options.topic){
    const queue=makeQueue(options);
    state.session={queue, initial:queue.length, completed:0, topic:options.topic||'', mode:options.mode||'flip', revealed:false, feedback:null, optionIds:null}; save();
  }
  renderReview();
}

function startDrill(mode){
  currentView='review';
  const wanted=mode==='cloze'?'cloze':'mc';
  const pool=(window.lessonDrills||[]).filter(d=>d.t===wanted).map((d,i)=>({...d,id:`${wanted}-${i}`}));
  state.drill={mode,queue:pool.sort(()=>Math.random()-.5),initial:pool.length,clear:0,chosen:[],feedback:null};
  save(); renderDrill();
}
function renderDrill(){
  const d=state.drill;
  if(!d||!d.queue.length){state.drill=null;state.sessions++;save();document.querySelector('#app').innerHTML=`<section class="review-wrap"><div class="empty-state"><div class="big">🏆</div><h2>Lesson cleared!</h2><p class="muted">答錯的題目已經全部再做一次。今日完成 +${d?d.clear*10:0} XP。</p><button class="primary-button" data-back>返回練習</button></div></section>`;document.querySelector('[data-back]').onclick=()=>setView('review');return;}
  const q=d.queue[0],pct=Math.round(d.clear/Math.max(1,d.initial)*100);
  let body='';
  if(q.t==='cloze'){
    const shuffled=q._shuffled||(q._shuffled=[...q.parts].sort(()=>Math.random()-.5));
    const available=shuffled.map((p,i)=>({p,i})).filter(x=>!d.chosen.includes(x.i));
    body=`<article class="quiz-card"><span class="card-topic">${esc(q.topic)}</span><p class="prompt-label">重組成正確日文句子</p><h2 class="sentence-prompt">${esc(q.q)}</h2><div class="sentence-answer">${d.chosen.map(i=>`<button data-remove="${i}">${esc(shuffled[i])}</button>`).join('')||'<span>按下面的字詞填入答案</span>'}</div><div class="word-bank">${available.map(x=>`<button data-word="${x.i}">${esc(x.p)}</button>`).join('')}</div>${d.feedback?drillFeedback(q,d.feedback):`<button class="primary-button full" data-check ${d.chosen.length?'':'disabled'}>檢查答案</button>`}</article>`;
  }else{
    body=`<article class="quiz-card"><span class="card-topic">${esc(q.topic)}</span><p class="prompt-label">選擇正確答案</p><h2 class="sentence-prompt">${esc(q.q)}</h2><div class="mc-options">${q.opts.map(o=>`<button data-gchoice="${esc(o)}" ${d.feedback?'disabled':''} class="${d.feedback?(o===q.a?'correct-option':o===d.feedback.selected?'wrong-option':''):''}">${esc(o)}</button>`).join('')}</div>${d.feedback?drillFeedback(q,d.feedback):''}</article>`;
  }
  document.querySelector('#app').innerHTML=`<section class="review-wrap"><div class="duo-status"><span>🔥 ${state.streak}</span><span>💚 ${state.hearts}</span><span>⭐ ${state.xp||0} XP</span></div><div class="review-meta"><button class="chip" data-end-drill>← Modes</button><span>${d.clear} clear · ${d.queue.length} in loop</span></div><div class="review-bar"><i style="width:${pct}%"></i></div>${body}</section>`;
  document.querySelector('[data-end-drill]').onclick=()=>{state.drill=null;save();setView('review')};
  document.querySelectorAll('[data-word]').forEach(b=>b.onclick=()=>{d.chosen.push(Number(b.dataset.word));save();renderDrill()});
  document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{d.chosen=d.chosen.filter(i=>i!==Number(b.dataset.remove));save();renderDrill()});
  const check=document.querySelector('[data-check]');if(check)check.onclick=()=>{const answer=d.chosen.map(i=>q._shuffled[i]).join('');d.feedback={correct:answer===q.a.join(''),selected:answer};if(!d.feedback.correct){state.hearts=Math.max(0,state.hearts-1)}save();renderDrill()};
  document.querySelectorAll('[data-gchoice]').forEach(b=>b.onclick=()=>{d.feedback={correct:b.dataset.gchoice===q.a,selected:b.dataset.gchoice};if(!d.feedback.correct)state.hearts=Math.max(0,state.hearts-1);save();renderDrill()});
  const next=document.querySelector('[data-drill-next]');if(next)next.onclick=()=>finishDrill(q,d.feedback.correct);
}
function drillFeedback(q,fb){return `<div class="answer-feedback ${fb.correct?'correct-feedback':'wrong-feedback'}"><strong>${fb.correct?'✓ 答啱！ +10 XP':'再試一次 — 點解會錯？'}</strong><h3>${q.t==='cloze'?esc(q.a.join('')):esc(q.a)}</h3><p>${esc(q.why)}</p><button class="primary-button full" data-drill-next>${fb.correct?'下一題':'明白，稍後再考我'}</button></div>`}
function finishDrill(q,correct){
  const d=state.drill;d.queue.shift();state.reviews++;registerStudy();
  if(correct){d.clear++;state.xp=(state.xp||0)+10;state.hearts=Math.min(5,(state.hearts||0)+1)}else{d.queue.splice(Math.min(3,d.queue.length),0,{...q,_shuffled:undefined});}
  d.chosen=[];d.feedback=null;save();renderDrill();
}
function chineseOnly(card){ return card.meaning.split('·')[0].trim(); }
function normalizeAnswer(value=''){ return String(value).toLowerCase().replace(/[\s。、，,.!?！？~〜・]/g,'').replace(/ō/g,'ou').replace(/ū/g,'uu'); }
function acceptedAnswers(card){
  return [...card.jp.split(/[／/]/), ...romajiFor(card).split(/[／/]/)].map(normalizeAnswer);
}
function buildOptions(card){
  const same=allCards().filter(c=>c.id!==card.id && c.topic===card.topic).sort(()=>Math.random()-.5);
  const other=allCards().filter(c=>c.id!==card.id && c.topic!==card.topic).sort(()=>Math.random()-.5);
  return [card,...same,...other].filter((c,i,a)=>a.findIndex(x=>x.id===c.id)===i).slice(0,4).sort(()=>Math.random()-.5).map(c=>c.id);
}
function renderReview(){
  const s=state.session;
  if(!s || !s.queue.length){ renderComplete(); return; }
  const card=allCards().find(c=>c.id===s.queue[0]);
  if(!card){ s.queue.shift(); save(); renderReview(); return; }
  const pct=Math.round(s.completed/Math.max(1,s.initial)*100);
  const modeNames={flip:'Flip card',mcMeaning:'Meaning MC',mcJapanese:'Japanese MC',written:'Written answer'};
  if((s.mode==='mcMeaning'||s.mode==='mcJapanese')&&!s.optionIds){s.optionIds=buildOptions(card);save();}
  const optionCards=(s.optionIds||[]).map(id=>allCards().find(c=>c.id===id)).filter(Boolean);
  let activity='';
  if(s.mode==='flip'){
    activity=`<button class="flashcard flip-button ${s.revealed?'is-flipped':''}" data-reveal data-ghost="${esc(card.jp.slice(0,1))}">
      <span class="card-topic">${esc(card.topic)}</span><p class="prompt-label">${s.revealed?'ANSWER':'CHINESE → JAPANESE · TAP TO FLIP'}</p>
      ${s.revealed?`<h2 class="card-jp">${esc(card.jp)}</h2><p class="card-kana">${esc(card.kana)}</p><p class="card-romaji">${esc(romajiFor(card))}</p><div class="answer"><strong>${esc(card.meaning)}</strong><p class="example">${esc(card.example)}</p></div>`:`<h2 class="card-meaning">${esc(chineseOnly(card))}</h2><p class="tap-hint">Tap the card when you have answered aloud</p>`}
    </button>${s.revealed?`<div class="rating-row"><button class="again" data-rate="again">Again<small>keep in loop</small></button><button class="hard" data-rate="hard">Hard<small>show soon</small></button><button class="got" data-rate="got">Got it<small>move forward</small></button></div>`:''}`;
  } else if(s.mode==='mcMeaning'||s.mode==='mcJapanese'){
    const recall=s.mode==='mcJapanese';
    activity=`<article class="quiz-card"><span class="card-topic">${esc(card.topic)}</span><p class="prompt-label">${recall?'CHINESE → CHOOSE JAPANESE':'JAPANESE → CHOOSE CHINESE'}</p><h2 class="quiz-prompt">${recall?esc(chineseOnly(card)):esc(card.jp)}</h2>${!recall?`<p class="card-romaji muted-romaji">${esc(romajiFor(card))}</p>`:''}
      <div class="mc-options">${optionCards.map(c=>`<button data-option="${c.id}" ${s.feedback?'disabled':''} class="${s.feedback?(c.id===card.id?'correct-option':c.id===s.feedback.selected?'wrong-option':''):''}">${recall?`<strong>${esc(c.jp)}</strong><small>${esc(romajiFor(c))}</small>`:esc(chineseOnly(c))}</button>`).join('')}</div>
      ${s.feedback?feedbackHtml(card,s.feedback.correct):''}</article>`;
  } else {
    activity=`<article class="quiz-card"><span class="card-topic">${esc(card.topic)}</span><p class="prompt-label">CHINESE → TYPE JAPANESE OR ROMAJI</p><h2 class="quiz-prompt">${esc(chineseOnly(card))}</h2>
      ${s.feedback?feedbackHtml(card,s.feedback.correct):`<form class="written-form" id="written-form"><label for="written-answer">Your answer</label><input id="written-answer" autocomplete="off" autocapitalize="off" placeholder="日本語 or romaji" required><button class="primary-button" type="submit">Check answer</button></form>`}</article>`;
  }
  document.querySelector('#app').innerHTML=`
    <section class="review-wrap">
      <div class="review-meta"><button class="chip" data-end>← Modes</button><span>${s.completed} clear · ${s.queue.length} in loop</span><span class="chip mode-chip">${modeNames[s.mode]}</span></div>
      <div class="review-bar"><i style="width:${pct}%"></i></div>
      ${activity}
    </section>`;
  document.querySelector('[data-end]').onclick=()=>{state.session=null;save();setView('review')};
  if(s.mode==='flip') document.querySelector('[data-reveal]').onclick=()=>{if(!s.revealed){s.revealed=true;save();renderReview()}};
  document.querySelectorAll('[data-rate]').forEach(b=>b.onclick=()=>rate(card,b.dataset.rate));
  document.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>{s.feedback={correct:b.dataset.option===card.id,selected:b.dataset.option};save();renderReview()});
  const written=document.querySelector('#written-form');
  if(written) written.onsubmit=e=>{e.preventDefault();const value=document.querySelector('#written-answer').value;s.feedback={correct:acceptedAnswers(card).includes(normalizeAnswer(value)),selected:value};save();renderReview()};
  const next=document.querySelector('[data-next]'); if(next) next.onclick=()=>finalizeQuiz(card,s.feedback.correct);
}
function feedbackHtml(card,correct){
  return `<div class="answer-feedback ${correct?'correct-feedback':'wrong-feedback'}"><strong>${correct?'✓ Correct!':'Not quite — here is the answer'}</strong><h3>${esc(card.jp)}</h3><p class="card-kana">${esc(card.kana)}</p><p class="card-romaji">${esc(romajiFor(card))}</p><p>${esc(card.meaning)}</p><p class="example">${esc(card.example)}</p><button class="primary-button full" data-next>${correct?'Next card':'Got it — show me again later'}</button></div>`;
}
function finalizeQuiz(card,correct){
  const p=progress(card.id),now=Date.now(),day=86400000,s=state.session;
  p.seen++;state.reviews++;registerStudy();s.queue.shift();
  if(correct){p.level=Math.min(5,p.level+1);p.due=now+[0,1,3,7,14,30][p.level]*day;s.completed++;}
  else{p.level=Math.max(0,p.level-1);p.lapses++;p.due=now+10*60*1000;s.queue.splice(Math.min(3,s.queue.length),0,card.id);}
  state.progress[card.id]=p;s.feedback=null;s.optionIds=null;save();renderReview();
}
function rate(card, rating){
  const p=progress(card.id), now=Date.now(), day=86400000;
  p.seen++; state.reviews++; registerStudy();
  state.session.queue.shift();
  if(rating==='again'){
    p.level=Math.max(0,p.level-1); p.lapses++; p.due=now+10*60*1000;
    const insert=Math.min(3,state.session.queue.length); state.session.queue.splice(insert,0,card.id);
  } else if(rating==='hard') {
    p.level=Math.max(1,p.level); p.due=now+day;
    if(state.session.queue.length) state.session.queue.push(card.id); else state.session.completed++;
  } else {
    p.level=Math.min(5,p.level+1); p.due=now+[0,1,3,7,14,30][p.level]*day; state.session.completed++;
  }
  state.progress[card.id]=p; state.session.revealed=false; state.session.feedback=null; state.session.optionIds=null; save(); renderReview();
}
function renderComplete(){
  state.sessions++; state.session=null; save();
  document.querySelector('#app').innerHTML=`<section class="review-wrap"><div class="empty-state"><div class="big">よくできました</div><h2>Loop cleared.</h2><p class="muted">Nothing left in this round. Your next review dates are saved automatically.</p><button class="primary-button" data-home>Back home</button> <button class="secondary-button" data-cram>Cram again</button></div></section>`;
  document.querySelector('[data-home]').onclick=()=>setView('home');
  document.querySelector('[data-cram]').onclick=()=>startReview({all:true,mode:'flip'});
}

function renderLibrary(){
  const studied=new Set(state.studiedPages);
  document.querySelector('#app').innerHTML=`
    <section class="hero"><p class="eyebrow">YOUR SOURCE MATERIAL</p><h1>Lesson pages.</h1><p class="lead">All ${photos.length} photos are here. Tap one to zoom, rotate, or mark it studied.</p></section>
    <div class="section-head"><h2>Photo library</h2><p>${studied.size} studied</p></div>
    <section class="photo-grid">${photos.map((p,i)=>`<button class="photo-tile" data-photo="${p}"><img loading="lazy" src="${p}" alt="Japanese lesson page ${i+1}"><span>${studied.has(p)?'✓ ':''}Page ${i+1}</span></button>`).join('')}</section>
    <div class="viewer" id="viewer" hidden><div class="viewer-head"><span id="viewer-name"></span><button data-close-viewer>Close</button></div><div class="viewer-stage"><img id="viewer-image" alt="Enlarged lesson page"></div><div class="viewer-actions"><button data-rotate>↻ Rotate</button><button data-studied>✓ Mark studied</button></div></div>`;
  document.querySelectorAll('[data-photo]').forEach(b=>b.onclick=()=>openPhoto(b.dataset.photo));
}
function openPhoto(photo){
  activePhoto=photo; libraryRotation=0;
  const v=document.querySelector('#viewer'); v.hidden=false;
  document.querySelector('#viewer-name').textContent=`Page ${photos.indexOf(photo)+1} · ${photo.replace('.jpg','')}`;
  const img=document.querySelector('#viewer-image'); img.src=photo; img.style.transform='rotate(0deg)';
  document.querySelector('[data-close-viewer]').onclick=()=>{v.hidden=true;renderLibrary()};
  document.querySelector('[data-rotate]').onclick=()=>{libraryRotation=(libraryRotation+90)%360;img.style.transform=`rotate(${libraryRotation}deg)`};
  document.querySelector('[data-studied]').onclick=()=>{if(!state.studiedPages.includes(photo))state.studiedPages.push(photo);save();toast('Marked as studied ✓')};
}

function renderCards(){
  const cards=allCards();
  document.querySelector('#app').innerHTML=`
    <section class="hero"><p class="eyebrow">YOUR DECK</p><h1>${cards.length} things to remember.</h1><p class="lead">Search the starter deck or add exactly what your teacher says.</p></section>
    <input class="search" id="card-search" type="search" placeholder="Search Japanese, reading, or meaning…">
    <div class="filters" id="card-filters"><button class="chip active" data-filter="All">All</button>${[...new Set(cards.map(c=>c.topic))].map(t=>`<button class="chip" data-filter="${t}">${t}</button>`).join('')}</div>
    <div class="section-head"><h2>Cards</h2><p id="card-count">${cards.length} shown</p></div>
    <section class="card-list" id="card-list"></section><button class="fab" id="add-card" aria-label="Add card">＋</button>`;
  let filter='All';
  const update=()=>{
    const q=document.querySelector('#card-search').value.toLowerCase();
    const shown=cards.filter(c=>(filter==='All'||c.topic===filter)&&[c.jp,c.kana,romajiFor(c),c.meaning,c.example].join(' ').toLowerCase().includes(q));
    document.querySelector('#card-list').innerHTML=shown.map(c=>`<article class="list-card"><div><strong>${esc(c.jp)}</strong><p>${esc(c.kana)} · ${esc(romajiFor(c))}<br>${esc(c.meaning)}</p></div><span class="mini-state">${mastered(c)?'Mastered':progress(c.id).seen?'Learning':'New'}</span></article>`).join('')||'<div class="empty-state">No matching cards.</div>';
    document.querySelector('#card-count').textContent=`${shown.length} shown`;
  };
  document.querySelector('#card-search').oninput=update;
  document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));update()});
  document.querySelector('#add-card').onclick=()=>document.querySelector('#card-dialog').showModal(); update();
}

document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
document.querySelector('#settings-button').onclick=()=>document.querySelector('#settings-dialog').showModal();
document.querySelector('[data-close-settings]').onclick=()=>document.querySelector('#settings-dialog').close();
document.querySelector('#card-form').addEventListener('submit',e=>{
  if(e.submitter?.value==='cancel') return;
  e.preventDefault(); const fd=new FormData(e.currentTarget);
  state.custom.push({id:`c${Date.now()}`,jp:fd.get('jp').trim(),kana:fd.get('kana').trim(),meaning:fd.get('meaning').trim(),example:fd.get('example').trim(),topic:'My cards',custom:true});
  save(); e.currentTarget.reset(); document.querySelector('#card-dialog').close(); toast('Card added'); renderCards();
});
document.querySelector('#export-button').onclick=()=>{
  const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}), a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='nihon-loop-backup.json'; a.click(); URL.revokeObjectURL(a.href); toast('Backup exported');
};
document.querySelector('#import-input').onchange=async e=>{try{state={...freshState(),...JSON.parse(await e.target.files[0].text())};save();toast('Backup imported');document.querySelector('#settings-dialog').close();setView('home')}catch{toast('That backup could not be read')}};
document.querySelector('#reset-button').onclick=()=>{if(confirm('Reset all review progress and custom cards?')){state=freshState();save();document.querySelector('#settings-dialog').close();setView('home');toast('Progress reset')}};
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
renderHome();
