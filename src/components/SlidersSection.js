import SliderFirst from "./SliderFirst";
import SliderSecond from "./SliderSecond";

import titleFirst from "../assets/images/title_01.png";
import titleSecond from "../assets/images/title_02.png";
import titleThird from "../assets/images/title_03.png";

import picture from "../assets/images/picture1.jpeg";

import topicPurin from "../assets/images/topic_purin.jpg";
import topicMissq from "../assets/images/topic_missq.jpg";

import topicYao from "../assets/images/topic_yao.jpg";

import topicShih from "../assets/images/topic_shih.jpg";
import topicLove from "../assets/images/topic_love.jpg";
import topicFish from "../assets/images/topic_fish.jpg";

import topicCheng from "../assets/images/topic_cheng.jpg";
import topicTrust from "../assets/images/topic_trust.jpg";


const topicsData = [
  {
    name: "打造財務自由",
    top: [
      {
        image: "https://doqvf81n9htmm.cloudfront.net/data/TommyHuang_147/all/LIU_1385a.jpg",
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202006120020/%E3%80%8C%E6%95%A3%E6%88%B6%E6%9C%83%E7%8A%AF%E7%9A%84%E9%8C%AF%EF%BC%8C%E6%88%91%E5%85%A8%E7%8A%AF%E4%BA%86%E2%80%A6%E3%80%8D%E6%9B%BE%E6%85%98%E8%B3%A0%E4%BA%94%E7%99%BE%E8%90%AC%E7%9A%84%E7%BE%8E%E5%A5%B3%E8%B2%A1%E7%B6%93%E4%B8%BB%E6%92%AD%E7%8E%8B%E5%BF%97%E9%83%81%E3%80%80%E5%A6%82%E4%BD%95%E9%9D%A0%E6%88%BF%E5%AD%90%E8%B7%9F%E5%9F%BA%E9%87%91%E7%B4%AF%E7%A9%8D%E5%8D%83%E8%90%AC%E8%BA%AB%E5%83%B9?",
        title: "曾慘賠500萬 財經主播王志郁靠房子跟基金累積千萬身價",
        contents: [
          "有著財經專業背景，卻還是在股海裡大賠五百萬！財經主播王志郁自嘲，「所有散戶會犯的錯，像是聽信明牌、追高殺低等，她全都犯過一輪了」。",
          "但是，在經過這堂「五百萬的投資理財課」之後，王志郁痛定思痛，找出開始重新審視、建立一套新的投資理財邏輯。她說，現在的資產配置非常簡單，分別是房子、股市及基金，各佔三分之一。",
          "經過幾年努力之後，不僅坐擁千萬身價，還因為痛過、賠過的經驗，決定以教導小資族投資理財為己任，讓所有曾跟她一樣在理財路上迷惘的年輕人，能找出屬於自己的理財方式。",
        ],
      },
      {
        image: topicPurin,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title:
          "一年存到第一桶金、坐擁2筆房產 26歲小資女：隨時保持最新狀態",
          contents: [
            "26歲的小資女Purin，來自單親家庭，在家中是獨生女，高三畢業、大學期間，積極利用課餘時間打工，一方面幫忙分擔家計，一方面賺取生活費。",
            "踏入職場後，Purin逼自己每個月至少存下一萬元，但她深知，理財不能單靠「節流」，更重要的是要懂得「開源」。",
            "一開始投資股票連K線都不懂，還曾賠了30萬元，到後來因工作關係接觸房地產，存下第一桶金、買房置產，甚至出門眼中只看得到看房廣告。",
            "從對理財一竅不通的門外漢，到如今能侃侃而談投資心法，甚至買房置產，Purin可說是同儕之間的勝利組，但她認為，「人際」才是成就她的最大關鍵，未來也不打算退休「要讓自己隨時保持在最新狀態。」",
          ],
      },
      {
        image: topicMissq,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title:
          "被動收入超過百萬 債券達人MissQ：財務獨立讓女性更自信",
          contents: [
            "「我有一個學員，她的學、經歷都很好，但嫁到國外去之後，為了家庭決定當全職主婦，時間久了開始覺得自己沒有價值。」這是個讓MissQ留下深刻印象的案例。",
            "MissQ靠著投資波動較低的債券、特別股、REITs（不動產投資信託）及高息股票，在38歲就累積超過千萬資產，目前每年被動收入逾百萬。",
            "她認為財務獨立能讓女性更有安全感與自信，她也建議，選擇適合自己的最強理財法，其實只需要熟悉一到兩種投資商品就夠了。",
          ],
      },
    ],
    bottom: [
      {
        image: topicYao,
        link:
          "https://www.businesstoday.com.tw/article/category/183012/post/202102220007/%E6%9B%BE%E6%98%AF%E6%9C%88%E6%94%B6%E4%B8%8D%E5%88%B03%E8%90%AC%E7%9A%84%E4%BD%8E%E6%94%B6%E5%85%A5%E6%88%B6%E2%86%92%E6%93%81%E5%8D%83%E8%90%AC%E8%B1%AA%E5%AE%85%EF%BC%81%E9%83%AD%E6%9B%B8%E7%91%A4%E5%A4%A7%E6%96%B9%E5%88%86%E4%BA%AB%E3%80%8C3%E6%8B%9B%E7%90%86%E8%B2%A1%E3%80%8D%E3%80%80%E7%86%AC7%E5%B9%B4%E5%BE%9E%E8%B0%B7%E5%BA%95%E7%BF%BB%E8%BA%AB",
        title: "曾月收不到3萬，現擁千萬豪宅！郭書瑤分享「3招理財」",
        contents: [
          "藝人郭書瑤自17歲時即為了分擔家計而踏入演藝圈，以「殺很大」廣告爆紅出道的她，如今在演藝界憑實力站穩腳步、表現亮眼。鮮為人知的是，郭書瑤過去曾是低收入戶，時至今日已變身為名下擁千萬豪宅的小富婆，這一路來她靠著穩扎穩打的理財方式，努力7年終於翻身。郭書瑤表示，「只有買房才是最奪不走、也最踏實的儲蓄方法」。",
          "她也分享自己的理財3招，「確實分配收入」、「少用信用卡，多用現金」、「強迫儲蓄、保守投資」，郭書瑤憑藉著這3招理財方式，一點一滴地攢下收入，並靠著穩當的錢滾錢獲利，終於讓她有能力存下屬於自己的買房基金。",
        ],
      },
      {
        image: 'https://doqvf81n9htmm.cloudfront.net/data/heidilin_146/2018.0721/2020.4.22/1140_LIU_1998.jpg',
        link:
          "https://www.businesstoday.com.tw/article/category/183012/post/202012300055/%E3%80%8C%E4%B8%8D%E8%A6%81%E5%B0%8F%E7%9C%8B%E6%AF%8F%E5%80%8B%E6%9C%88%E5%B9%BE%E5%8D%83%E5%85%83%E6%8A%95%E8%B3%87%E3%80%8D%20%20%E5%A4%96%E5%95%86%E6%8A%95%E4%BF%A1%E7%B8%BD%E5%BA%A7%E7%94%A8%E9%80%99%E6%8B%9B%E3%80%80%E7%82%BA%E5%AD%90%E5%A5%B3%E5%AD%98%E5%88%B0100%E8%90%AC%E5%85%83",
        title: "「不要小看每個月幾千元」 外商投信總座用這招為子女存百萬",
        contents: [
          "瀚亞投資台灣區總經理王伯莉投入金融業已近30年，是國內少數同時待過銀行、保險與投信業的總座。",
          "談起過去年輕時的投資經驗，她其實也跌過跤，一次就賠掉數個月的薪水。看過這麼多的保險與投資商品，王伯莉自己的理財做法卻非常簡單，「就是靠定期定額投資。我也跟大家一樣，在收入慢慢增加的同時，也多了照顧家庭、子女教育等支出，定期定額投資對我來說是最好的方法。」",
          "以王伯莉為子女規劃理財為例，她在兒女幼稚園時就帶著他們去開戶，每個月定期定額買入全球股票型基金「投資時間長，多半不會虧損。每個月的幾千元資金，經過十多年後已經幫他們累積了一桶金。」",
        ],
      },
    ],
  },
  {
    name: "探索自我價值",
    top: [
      {
        image: topicShih,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "外商經理變身指名度最高健身教練 施怡如：你怎麼看待自己，決定你能成為誰",
        contents: [
          "有著財經專業背景，卻還是在股海裡大賠五百萬！財經主播王志郁自嘲，「所有散戶會犯的錯，像是聽信明牌、追高殺低等，她全都犯過一輪了」。",
          "但是，在經過這堂「五百萬的投資理財課」之後，王志郁痛定思痛，找出開始重新審視、建立一套新的投資理財邏輯。她說，現在的資產配置非常簡單，分別是房子、股市及基金，各佔三分之一。",
          "經過幾年努力之後，不僅坐擁千萬身價，還因為痛過、賠過的經驗，決定以教導小資族投資理財為己任，讓所有曾跟她一樣在理財路上迷惘的年輕人，能找出屬於自己的理財方式。",
        ],
      },
      {
        image: topicLove,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title:
          "被叫瞎子、盲胞也不在意！視障心理師朱芯儀接納自己 還想帶更多人走出低谷",
          contents: [
            "有著財經專業背景，卻還是在股海裡大賠五百萬！財經主播王志郁自嘲，「所有散戶會犯的錯，像是聽信明牌、追高殺低等，她全都犯過一輪了」。",
            "但是，在經過這堂「五百萬的投資理財課」之後，王志郁痛定思痛，找出開始重新審視、建立一套新的投資理財邏輯。她說，現在的資產配置非常簡單，分別是房子、股市及基金，各佔三分之一。",
            "經過幾年努力之後，不僅坐擁千萬身價，還因為痛過、賠過的經驗，決定以教導小資族投資理財為己任，讓所有曾跟她一樣在理財路上迷惘的年輕人，能找出屬於自己的理財方式。",
          ],
      },
      {
        image: topicFish,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title:
          "獨自走過瀕死26小時、征服聖母峰 詹喬愉用「登山」復健：堅持做自己喜歡的事",
          contents: [
            "外號「三條魚」的詹喬愉，高中初接觸登山，大學加入登山社，發覺登山有許多技能要學，為何自己都不會，很想學好，不知不覺就會陷下去，開始真正對登山產生興趣。",
            "2015年，詹喬愉在一次海外登山意外中摔落冰河，獨自等候救援26小時，「那段時間一直在想下一步該怎麼辦，怎麼樣能撐越久、怎麼自救…。」",
            "意外導致詹喬愉左腳癱瘓，復健期間即使疼痛難耐，她仍強迫自己一天內要長時間進行復健，甚至將左腳綁起來，跟著友人們去登山。",
            "儘管左腳至今仍未完全復原，但在經歷意外後，詹喬愉更能體會待救者心情，在自己能決定範圍內較能改變，對於能用自身雙腿登山更滿懷感激。",
          ],
      },
    ],
    bottom: [
      {
        image: "https://doqvf81n9htmm.cloudfront.net/data/crop_article/110587/102.jpg_1140x855.jpg",
        link:
          "https://www.businesstoday.com.tw/article/category/183034/post/202102080011/%E9%9F%93%E5%9C%8B%E5%88%B0%E8%99%95%E9%83%BD%E6%98%AF%E7%82%B8%E9%9B%9E%E5%BA%97%EF%BC%8C%E7%AB%9F%E5%92%8C1997%E5%B9%B4%E9%87%91%E8%9E%8D%E9%A2%A8%E6%9A%B4%E6%9C%89%E9%97%9C%E2%80%A617%E5%B9%B4%E6%8E%A1%E8%A8%AA%E7%B6%93%E9%A9%97%E5%A5%B3%E4%B8%BB%E6%92%AD%E8%AE%8A%E6%92%AD%E5%AE%A2%EF%BC%8C%E8%AE%93%E5%93%88%E9%9F%93%E6%97%8F%E6%9B%B4%E6%87%82%E9%9F%93",
        title: "「個人風格很重要」 資深女主播變火紅播客",
        contents: [
          "人稱「水晶主播」的王宜安是立蕓集團副總經理兼銘傳新媒體暨傳播管理系講師，過去擁有前中天財經生活中心主任、主播、主持人等17年新聞人經歷，近期《從主播到直播：水晶主播王宜安獨家分享直播祕訣》新書剛上市，她工作之餘應前長官之邀當起播客，沒想到以韓國文化為主內容的節目竟創下收聽紀錄。",
          "問她有何收聽次數衝高的祕訣，她透露，呼應當前熱門話題以及標題取得好都很重要。",
          "「我是一個非常喜歡學新東西的人，沒想到有這樣成績，我會繼續做下去。」原以為要像廣播般咬文嚼字，後來發現：「個人風格很重要。」她也認為縱使Podcast現在很紅，但不要跟流行去做，「一定要找你自己喜歡的東西。」",
        ],
      },
      {
        image: "https://doqvf81n9htmm.cloudfront.net/data/TommyHuang_147/all/2f19e52c18ccd461f8ebc7b67b2a1b4f.png",
        link:
          "https://www.businesstoday.com.tw/article/category/183036/post/201911280019/%E3%80%8C%E5%9C%A8%E7%88%B6%E8%A6%AA%E8%B5%B0%E4%BA%86%E4%B9%8B%E5%BE%8C%EF%BC%8C%E6%88%91%E6%89%8D%E6%87%82%E5%BE%97%E5%8F%8A%E6%99%82%E8%AA%AA%E6%84%9B%E3%80%8D%E3%80%80%E8%A2%AB%E9%9C%B8%E5%87%8C%E3%80%81%E5%B0%8D%E5%B7%B2%E9%80%9D%E7%88%B6%E8%A6%AA%E7%9A%84%E9%81%BA%E6%86%BE...%E9%96%8B%E6%9C%97%E7%9A%84Youtuber%E5%8D%83%E5%8D%83%E8%A8%B4%E8%AA%AA%E5%85%A7%E5%BF%83%E6%B7%B1%E8%99%95%E7%9A%84%E7%97%9B%EF%BC%81",
        title: "網紅成名之路艱辛  千千：讓自己變得更強大",
        contents: [
          "千千開朗、樂觀的形象深植人心，但是，私底下她卻認為自己是個悲觀的人，只是不喜歡將內心的悲傷展現給外界。選擇不打安全牌的她，努力用影像搏網友眼球背後，其實包藏著強烈的自尊心，一直以來，她想要擁有自己的事業，而她對事業的渴求，與童年家境有關。千千坦言，小時候家中並不寬裕，因此造就在事業上的高自我要求。",
          "成為網紅路上，千千也曾遭遇網路霸凌，現在的她反而能正面思考：「在留言裡，有沒有能讓我改進的建議。」",
          "想變更強大的心，讓千千現在對於現況相當滿意，曾經打擊她的、摧毀她的，無地放矢的路人甲乙丙，都成了她的養份，她的網紅成名之路，絕對不是只有你看到的吃吃喝喝而已。",
        ],
      },
    ],
  },
  {
    name: "一同互助共好",
    top: [
      {
        image: topicCheng,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "從偏鄉小孩到台灣最大金控投資長 程淑芬：「我的貴人包括欺負我的人」",
        contents: [
          "「我小時家裡太窮，但因為成績好，老師有多幫一點忙，從課本、制服、鬧鐘、書桌到補習費…等，都是老師幫忙付的。」來自雲林虎尾偏僻小村落的國泰金控投資長程淑芬坦言，小時候因為跟別人家太不一樣，有點自卑。",
          "但她認為不應該把時間花在想：「為什麼別人有，我沒有」。她笑著說：「大家都會羨慕別人有這個、有那個，其實我的貴人，有一半以上都是逆增上緣，我的貴人包括欺負我的人，逆境會增進你的力量。」",
          "適時留些顏面給男人，同時保持自己的優雅堅持，這是程淑芬認為值得女性學習的課題，她說：「女人辛苦沒有關係，委屈就不必了。」",
        ],
      },
      {
        image: topicTrust,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title:
          "從小沙龍到媚登峰　莊雅清：當年我什麼都沒有，只有一顆膽！",
          contents: [
            "當年，一個18歲的女孩，帶著向朋友借來的10萬元，一支掃帚、一包洗衣粉和一台收音機，離開家鄉高雄，赴台南創業；當時的她，雖然心情忐忑，卻有著一股不怕輸的氣勢，「就賭賭看啊！輸了會怎樣嗎？我還年輕，怕什麼！」",
            "如今，這個不怕輸的女孩莊雅清，已成為媚登峯集團董事長，業務一路從美容、SPA、科學減重，到跨足健康管理及醫療產業，她大膽擘劃將旗下27家會館，逐步轉型為健康管理診所的藍圖，估計可讓業績翻一倍以上。",
            "從一間小沙龍起家，到擁有27家會館的健康管理王國，當年那個不怕輸的女孩，憑著自身膽識，一步步實現了創業之夢；如今，她懷抱著更遠大的目標，踏著堅定的步伐，帶領媚登峯繼續朝下個里程碑邁進。",
          ],
      },
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title:
          "3從台灣到矽谷、中東她們推動全球女性職涯發展全球女性職涯發展全球女性職涯發展",
          contents: [
            "有著財經專業背景，卻還是在股海裡大賠五百萬！財經主播王志郁自嘲，「所有散戶會犯的錯，像是聽信明牌、追高殺低等，她全都犯過一輪了」。",
            "但是，在經過這堂「五百萬的投資理財課」之後，王志郁痛定思痛，找出開始重新審視、建立一套新的投資理財邏輯。她說，現在的資產配置非常簡單，分別是房子、股市及基金，各佔三分之一。",
            "經過幾年努力之後，不僅坐擁千萬身價，還因為痛過、賠過的經驗，決定以教導小資族投資理財為己任，讓所有曾跟她一樣在理財路上迷惘的年輕人，能找出屬於自己的理財方式。",
          ],
      },
    ],
    bottom: [
      {
        image: "https://doqvf81n9htmm.cloudfront.net/data/crop_article/110493/0204-1.jpg_1140x855.jpg",
        link:
          "https://www.businesstoday.com.tw/article/category/183034/post/202102040013/%E8%8B%A6%E9%9B%A3%E8%83%8C%E5%BE%8C%E9%83%BD%E6%9C%89%E7%A5%9D%E7%A6%8F%E3%80%80%E6%8A%97%E7%99%8C%E8%B7%AF%E4%B8%8A%E5%8B%87%E6%95%A2%E8%BF%BD%E5%A4%A2%E3%80%80PHI%20ACADEMY%E5%8F%B0%E7%81%A3%E9%A6%96%E4%BD%8D%E7%B4%8B%E7%B9%A1Master",
        title: "抗癌路上勇敢追夢　PHI ACADEMY台灣首位紋繡Master",
        contents: [
          "DREAM’S BROWS負責人朱毓媵，兩年多前被醫生確診罹患乳癌，曾經徬徨、無助甚至想放棄夢想，因為許多人一路上的幫助，讓她非但沒有失去勇氣，還想到做化療後，頭髮和眉毛都會脫落，希望透過自己的紋繡技藝幫助到癌友們。經醫師評估確認可行後，便開始免費替癌友紋繡，讓她們重拾自信。她回想服務一百多位癌友們的收穫，就是累積癌友的笑容以及實務經驗，「我承諾她們，這一輩子回來，我都會一樣替她們服務，這是我們一期一會的約定。」",
          "「如果沒有病痛，我今天就無法獲得歐洲頂尖紋繡學院PHI ACADEMY所頒發的「MASTER」殊榮，成為該學院在台灣的第一位紋繡大師。」",
        ],
      },
      {
        image: "https://doqvf81n9htmm.cloudfront.net/data/annalu@btnet.com.tw_237/20201203%E6%9D%8E%E5%AE%9B%E8%93%89/%E6%9D%8E%E5%AE%9B%E8%93%891140x855.jpg",
        link:
          "https://www.businesstoday.com.tw/article/category/183034/post/202012030009/%E5%8F%B0%E7%81%A3%E5%A5%B3%E5%AD%A9%E5%8B%87%E9%97%96%E5%A5%BD%E8%90%8A%E5%A1%A2%20%E9%A6%96%E4%BD%8D%E5%8F%B0%E7%B1%8D%E9%A3%9F%E7%89%A9%E9%80%A0%E5%9E%8B%E5%B8%AB%EF%BC%81%20%E7%9F%A5%E5%90%8D%E9%9B%BB%E5%BD%B1%E4%B8%AD%E7%9A%84%E9%A3%9F%E7%89%A9%E9%83%BD%E5%87%BA%E8%87%AA%E3%80%8C%E5%A5%B9%E3%80%8D%E6%89%8B",
        title: "台籍好萊塢食物造型師　用料理創造被需要的價值",
        contents: [
          "李宛蓉－好萊塢電影首位台籍食物造型師，曾參與李安執導的《少年Pi的奇幻漂流》、史蒂芬．史匹柏監製的《異種》、影集《安眠書店》和有著大量食物場景的《丘奇先生》。",
          "食物造型是盛行於電影、電視產業，食物造型師接下任務，製作出符合演員與觀眾完美入戲的食物道具。而她遇過的挑戰可不少，製作可供素食演員食用的生蠔、嘗起來不辣的辣椒、還有用燕麥粥與楓糖漿混搭出美味嘔吐物…。她笑稱自己也算一名稱職的「食物造假師。」",
          "李宛蓉未來計畫要用拍片剩餘的食材，教導弱勢族群料理技巧，再向其他需要幫助的人分享所製作的料理，讓曾經迷失自我的人，找回「被需要的價值。」",
        ],
      },
      
    ],
  },
];

const SlidersSection = () => {
  return (
    <>
      <SliderFirst
        title={titleFirst}
        titleID={topicsData[0].name}
        topTopics={topicsData[0].top}
        bottomTopics={topicsData[0].bottom}
      />
      <SliderSecond
        title={titleSecond}
        titleID={topicsData[1].name}
        topTopics={topicsData[1].top}
        bottomTopics={topicsData[1].bottom}
      />
      <SliderFirst
        title={titleThird}
        titleID={topicsData[2].name}
        topTopics={topicsData[2].top}
        bottomTopics={topicsData[2].bottom}
      />
    </>
  );
};

export default SlidersSection;
