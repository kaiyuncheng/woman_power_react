import SliderFirst from "./SliderFirst";
import SliderSecond from "./SliderSecond.js";

import titleFirst from "../../../assets/images/title_01.png";
import titleSecond from "../../../assets/images/title_02.png";
import titleThird from "../../../assets/images/title_03.png";

// import topicYao from "../../../assets/images/topic_yao.jpg";

// const topicsData = [
//   {
//     name: "打造財務自由",
//     top: [
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/TommyHuang_147/all/LIU_1385a.jpg",
//         link:
//           "https://www.businesstoday.com.tw/article/category/183008/post/202006120020/%E3%80%8C%E6%95%A3%E6%88%B6%E6%9C%83%E7%8A%AF%E7%9A%84%E9%8C%AF%EF%BC%8C%E6%88%91%E5%85%A8%E7%8A%AF%E4%BA%86%E2%80%A6%E3%80%8D%E6%9B%BE%E6%85%98%E8%B3%A0%E4%BA%94%E7%99%BE%E8%90%AC%E7%9A%84%E7%BE%8E%E5%A5%B3%E8%B2%A1%E7%B6%93%E4%B8%BB%E6%92%AD%E7%8E%8B%E5%BF%97%E9%83%81%E3%80%80%E5%A6%82%E4%BD%95%E9%9D%A0%E6%88%BF%E5%AD%90%E8%B7%9F%E5%9F%BA%E9%87%91%E7%B4%AF%E7%A9%8D%E5%8D%83%E8%90%AC%E8%BA%AB%E5%83%B9?",
//         title: "曾慘賠500萬　財經主播王志郁靠房子跟基金　累積千萬身價",
//         contents: [
//           "有著財經專業背景，卻還是在股海裡大賠五百萬！財經主播王志郁自嘲，「所有散戶會犯的錯，像是聽信明牌、追高殺低等，她全都犯過一輪了」。",
//           "但是，在經過這堂「五百萬的投資理財課」之後，王志郁痛定思痛，開始重新審視、建立一套新的投資理財邏輯。她說，現在的資產配置非常簡單，分別是房子、股市及基金，各佔三分之一。",
//           "經過幾年努力之後，不僅坐擁千萬身價，還因為痛過、賠過的經驗，決定以教導小資族投資理財為己任，讓所有曾跟她一樣在理財路上迷惘的年輕人，能找出屬於自己的理財方式。",
//         ],
//       },
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/jamiesu_149/2021FEB/0225/pd01.JPG",
//         link:
//           "https://www.businesstoday.com.tw/article/category/183012/post/202102230037/%E4%B8%80%E5%B9%B4%E5%AD%98%E5%88%B0%E7%AC%AC%E4%B8%80%E6%A1%B6%E9%87%91%E3%80%81%E5%9D%90%E6%93%812%E7%AD%86%E6%88%BF%E7%94%A2%E3%80%8026%E6%AD%B2%E5%B0%8F%E8%B3%87%E5%A5%B3%E6%9B%9D%E5%85%89%E5%BF%83%E6%B3%95%EF%BC%9A%E3%80%8C%E8%AE%93%E8%87%AA%E5%B7%B1%E9%9A%A8%E6%99%82%E4%BF%9D%E6%8C%81%E6%9C%80%E6%96%B0%E7%8B%80%E6%85%8B%E3%80%8D",
//         title:
//           "一年存一桶金、擁2房產　26歲小資女：「保持最新狀態」",
//           contents: [
//             "26歲的小資女Purin，來自單親家庭，在家中是獨生女，高三畢業、大學期間，積極利用課餘時間打工，一方面幫忙分擔家計，一方面賺取生活費。",
//             "踏入職場後，Purin逼自己每個月至少存下一萬元，但她深知，理財不能單靠「節流」，更重要的是要懂得「開源」。",
//             "一開始投資股票連K線都不懂，還曾賠了30萬元，到後來因工作關係接觸房地產，存下第一桶金、買房置產，甚至出門眼中只看得到看房廣告。",
//             "從對理財一竅不通的門外漢，到如今能侃侃而談投資心法，甚至買房置產，Purin可說是同儕之間的勝利組，但她認為，「人際」才是成就她的最大關鍵，未來也不打算退休「要讓自己隨時保持在最新狀態。」",
//           ],
//       },
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/heidilin_146/2018.0721/2021.01.08/022603.png",
//         link:
//           "https://www.businesstoday.com.tw/article/category/80407/post/202102260025/%E6%8A%95%E8%B3%87%E7%B6%93%E9%A9%9716%E5%B9%B4%E3%80%81%E8%A2%AB%E5%8B%95%E6%94%B6%E5%85%A5%E8%B6%85%E9%81%8E%E7%99%BE%E8%90%AC%E3%80%80%E5%82%B5%E5%88%B8%E9%81%94%E4%BA%BAMiss%20Q%EF%BC%9A%E3%80%8C%E8%B2%A1%E5%8B%99%E7%8D%A8%E7%AB%8B%E8%AE%93%E5%A5%B3%E6%80%A7%E6%9B%B4%E6%9C%89%E8%87%AA%E4%BF%A1%E3%80%81%E5%AE%89%E5%85%A8%E6%84%9F%E3%80%8D",
//         title:
//           "被動收入超過百萬　Miss Q：「財務獨立讓女性更自信」",
//           contents: [
//             "「我有一個學員，她的學、經歷都很好，但嫁到國外去之後，為了家庭決定當全職主婦，時間久了開始覺得自己沒有價值。」這是個讓MissQ留下深刻印象的案例。",
//             "MissQ靠著投資波動較低的債券、特別股、REITs（不動產投資信託）及高息股票，在38歲就累積超過千萬資產，目前每年被動收入逾百萬。",
//             "她認為財務獨立能讓女性更有安全感與自信，她也建議，選擇適合自己的最強理財法，其實只需要熟悉一到兩種投資商品就夠了。",
//           ],
//       },
//     ],
//     bottom: [
//       {
//         image: topicYao,
//         link:
//           "https://www.businesstoday.com.tw/article/category/183012/post/202102220007/%E6%9B%BE%E6%98%AF%E6%9C%88%E6%94%B6%E4%B8%8D%E5%88%B03%E8%90%AC%E7%9A%84%E4%BD%8E%E6%94%B6%E5%85%A5%E6%88%B6%E2%86%92%E6%93%81%E5%8D%83%E8%90%AC%E8%B1%AA%E5%AE%85%EF%BC%81%E9%83%AD%E6%9B%B8%E7%91%A4%E5%A4%A7%E6%96%B9%E5%88%86%E4%BA%AB%E3%80%8C3%E6%8B%9B%E7%90%86%E8%B2%A1%E3%80%8D%E3%80%80%E7%86%AC7%E5%B9%B4%E5%BE%9E%E8%B0%B7%E5%BA%95%E7%BF%BB%E8%BA%AB",
//         title: "曾月收不到3萬，現擁千萬豪宅！郭書瑤分享「3招理財」",
//         contents: [
//           "藝人郭書瑤17歲即為了分擔家計而踏入演藝圈，如今在演藝界憑實力站穩腳步。鮮為人知的是，郭書瑤曾是低收入戶，時至今日已變身為名下擁千萬豪宅的小富婆。",
//           "這一路她穩扎穩打的理財方式，努力7年終於翻身。郭書瑤表示「只有買房才是最踏實的儲蓄方法」。她也分享自己的理財3招，「確實分配收入」、「少用信用卡，多用現金」、「強迫儲蓄、保守投資」。她靠3招攢下收入，並靠著穩當的錢滾錢獲利，終於讓她有能力存下買房基金。",
//         ],
//       },
//       {
//         image: 'https://doqvf81n9htmm.cloudfront.net/data/heidilin_146/2018.0721/2020.4.22/1140_LIU_1998.jpg',
//         link:
//           "https://www.businesstoday.com.tw/article/category/183012/post/202012300055/%E3%80%8C%E4%B8%8D%E8%A6%81%E5%B0%8F%E7%9C%8B%E6%AF%8F%E5%80%8B%E6%9C%88%E5%B9%BE%E5%8D%83%E5%85%83%E6%8A%95%E8%B3%87%E3%80%8D%20%20%E5%A4%96%E5%95%86%E6%8A%95%E4%BF%A1%E7%B8%BD%E5%BA%A7%E7%94%A8%E9%80%99%E6%8B%9B%E3%80%80%E7%82%BA%E5%AD%90%E5%A5%B3%E5%AD%98%E5%88%B0100%E8%90%AC%E5%85%83",
//         title: "「不要小看每個月幾千元」　外商投信總座用這招為子女存百萬",
//         contents: [
//           "瀚亞投資台灣區總經理王伯莉投入金融業已近30年，是國內少數同時待過銀行、保險與投信業的總座。談起過去的投資經驗，其實也一次就賠掉數個月薪水的經驗。",
//           "王伯莉的理財做法非常簡單，「靠定期定額投資。因為多了家庭、子女等支出，這樣對我來說是最好的方法。」 以子女規劃理財為例，她在兒女幼稚園時就帶他們去開戶，每個月定期定額買入全球股票型基金「投資時間長，多半不會虧。每個月幾千元，經過十多年後已累積了一桶金。」",
//         ],
//       },
//     ],
//   },
//   {
//     name: "探索自我價值",
//     top: [
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/linhsinnan1_196/1612610406023.jpg",
//         link:
//           "https://www.businesstoday.com.tw/article/category/183034/post/202102090024/%E5%A4%96%E5%95%86%E7%B6%93%E7%90%86%E8%AE%8A%E8%BA%AB%E6%8C%87%E5%90%8D%E5%BA%A6%E6%9C%80%E9%AB%98%E5%81%A5%E8%BA%AB%E6%95%99%E7%B7%B4%E3%80%80%E6%96%BD%E6%80%A1%E5%A6%82%EF%BC%9A%E3%80%8C%E4%BD%A0%E6%80%8E%E9%BA%BC%E7%9C%8B%E5%BE%85%E8%87%AA%E5%B7%B1%EF%BC%8C%E6%B1%BA%E5%AE%9A%E4%BD%A0%E8%83%BD%E6%88%90%E7%82%BA%E8%AA%B0%E3%80%8D",
//         title: "外商經理變身指名度最高健身教練　施怡如：「你怎麼看待自己，決定你能成為誰」",
//         contents: [
//           "台大工商管理學系畢業，擊敗眾多競爭者，進入寶僑工作的施怡如，一路走來，都符合外界對「高材生」的想像；然而，被健身點燃的熱情，卻讓她開始反思，「現在的工作，是我以後想要的嗎？」",
//           "從外商公司到健身產業，對於這個似乎不太符合主流價值觀的轉變，施怡如認為，「這項轉變，它是平行的，就算大家覺得低（指健身教練工作不如外商），但怎麼讓它變高，在於我自己。」",
//           "如今，施怡如已是GYMEFIT指名度最高的教練，回顧這條「做自己」的轉職路，她說，「當我去滿足別人要的樣子時，我不可能成為最好的自己；在這個市場上，最後能成為誰，取決於你怎麼看待自己。」",
//         ],
//       },
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/TommyHuang_147/all/KENS4472.jpg",
//         link:
//           "https://www.businesstoday.com.tw/article/category/183036/post/202102240033/%E8%A2%AB%E5%8F%AB%E7%9E%8E%E5%AD%90%E3%80%81%E7%9B%B2%E8%83%9E%E4%B9%9F%E4%B8%8D%E5%9C%A8%E6%84%8F%EF%BC%81%E8%A6%96%E9%9A%9C%E5%BF%83%E7%90%86%E5%B8%AB%E6%9C%B1%E8%8A%AF%E5%84%80%E6%8E%A5%E7%B4%8D%E8%87%AA%E5%B7%B1%E3%80%80%E9%82%84%E6%83%B3%E5%B8%B6%E6%9B%B4%E5%A4%9A%E4%BA%BA%E8%B5%B0%E5%87%BA%E4%BD%8E%E8%B0%B7",
//         title:
//           "被叫盲胞也不在乎　朱芯儀如何帶更多人走出情緒低谷？",
//           contents: [
//             "坦然自嘲自己「目中無人」的視障心理諮商師朱芯儀，在罹患腦瘤，歷經失明後，花了多年的時間才得已接納自己，甚至還成為全台以視障者身分考取高考心理諮商師的第一人，帶領許多人走出情緒低谷。",
//             "現在，對朱芯儀而言，「不管別人知不知道」，她內心早已接受如此獨一無二的自己，也因為走過中途失明的磨難，她才能做好諮商心理師的工作，更希望用自己的力量，與世界共好，讓每個人都可以成為他人的諮商師。",
//           ],
//       },
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/jamiesu_149/2021FEB/0225/tri01.jpg",
//         link:
//           "https://www.businesstoday.com.tw/article/category/80392/post/202102050027/%E5%8F%AA%E6%83%B3%E6%B4%BB%E4%B8%8B%E5%8E%BB%EF%BC%81%20%E7%8D%A8%E8%87%AA%E8%B5%B0%E9%81%8E%E7%80%95%E6%AD%BB26%E5%B0%8F%E6%99%82%E3%80%81%E5%BE%81%E6%9C%8D%E8%81%96%E6%AF%8D%E5%B3%B0%E3%80%80%E8%A9%B9%E5%96%AC%E6%84%89%E7%94%A8%E7%99%BB%E5%B1%B1%E5%BE%A9%E5%81%A5%EF%BC%9A%E3%80%8C%E5%A0%85%E6%8C%81%E5%81%9A%E8%87%AA%E5%B7%B1%E5%96%9C%E6%AD%A1%E7%9A%84%E4%BA%8B%E3%80%8D",
//         title:
//           "曾瀕死26小時、征服聖母峰　詹喬愉：「堅持做喜歡的事」",
//           contents: [
//             "外號「三條魚」的詹喬愉，高中初接觸登山，大學加入登山社，發覺登山有許多技能要學，為何自己都不會，很想學好，不知不覺就會陷下去，開始真正對登山產生興趣。",
//             "2015年，詹喬愉在一次海外登山意外中摔落冰河，獨自等候救援26小時，「那段時間一直在想下一步該怎麼辦，怎麼樣能撐越久、怎麼自救…。」",
//             "意外導致詹喬愉左腳癱瘓，復健期間即使疼痛難耐，她仍強迫自己一天內要長時間進行復健，甚至將左腳綁起來，跟著友人們去登山。",
//             "儘管左腳至今仍未完全復原，但在經歷意外後，詹喬愉更能體會待救者心情，在自己能決定範圍內較能改變，對於能用自身雙腿登山更滿懷感激。",
//           ],
//       },
//     ],
//     bottom: [
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/annalu@btnet.com.tw_237/20201203%E6%9D%8E%E5%AE%9B%E8%93%89/%E6%9D%8E%E5%AE%9B%E8%93%891140x855.jpg",
//         link:
//           "https://www.businesstoday.com.tw/article/category/183034/post/202012030009/%E5%8F%B0%E7%81%A3%E5%A5%B3%E5%AD%A9%E5%8B%87%E9%97%96%E5%A5%BD%E8%90%8A%E5%A1%A2%20%E9%A6%96%E4%BD%8D%E5%8F%B0%E7%B1%8D%E9%A3%9F%E7%89%A9%E9%80%A0%E5%9E%8B%E5%B8%AB%EF%BC%81%20%E7%9F%A5%E5%90%8D%E9%9B%BB%E5%BD%B1%E4%B8%AD%E7%9A%84%E9%A3%9F%E7%89%A9%E9%83%BD%E5%87%BA%E8%87%AA%E3%80%8C%E5%A5%B9%E3%80%8D%E6%89%8B",
//         title: "台籍好萊塢食物造型師　用料理創造被需要的價值",
//         contents: [
//           "李宛蓉－好萊塢電影首位台籍食物造型師，曾參與《少年Pi的奇幻漂流》、《異種》、《安眠書店》和有著大量食物場景的《丘奇先生》。食物造型是盛行於影視產業，接下任務後，就要製作符合演員與觀眾完美入戲的食物道具。她曾製作素食的生蠔、不辣的辣椒、用燕麥粥與楓糖漿混搭的美味嘔吐物…。",
//           "李宛蓉未來計畫用拍片剩餘的食材，教導弱勢族群料理技巧，再向其他需要幫助的人分享所製作的料理，讓曾迷失自我的人，找回「被需要的價值。」",
//         ],
//       },
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/TommyHuang_147/all/2f19e52c18ccd461f8ebc7b67b2a1b4f.png",
//         link:
//           "https://www.businesstoday.com.tw/article/category/183036/post/201911280019/%E3%80%8C%E5%9C%A8%E7%88%B6%E8%A6%AA%E8%B5%B0%E4%BA%86%E4%B9%8B%E5%BE%8C%EF%BC%8C%E6%88%91%E6%89%8D%E6%87%82%E5%BE%97%E5%8F%8A%E6%99%82%E8%AA%AA%E6%84%9B%E3%80%8D%E3%80%80%E8%A2%AB%E9%9C%B8%E5%87%8C%E3%80%81%E5%B0%8D%E5%B7%B2%E9%80%9D%E7%88%B6%E8%A6%AA%E7%9A%84%E9%81%BA%E6%86%BE...%E9%96%8B%E6%9C%97%E7%9A%84Youtuber%E5%8D%83%E5%8D%83%E8%A8%B4%E8%AA%AA%E5%85%A7%E5%BF%83%E6%B7%B1%E8%99%95%E7%9A%84%E7%97%9B%EF%BC%81",
//         title: "網紅成名之路艱辛　千千：「讓自己變得更強大」",
//         contents: [
//           "千千開朗、樂觀的形象深植人心，努力用影像搏網友眼球背後，其實包藏著強烈的自尊心。一直以來，她想要擁有自己的事業，而她對事業的渴求，與童年家境有關。千千坦言，小時候家中並不寬裕，因此造就在事業上的高自我要求。",
//           "成為網紅路上，千千也曾遭遇網路霸凌，現在的她反而能正面思考：「在留言裡，有沒有能讓我改進的建議。」曾經打擊她的、無地放矢的路人甲乙丙，都成了她的養份，她的網紅成名之路，絕對不是只有你看到的吃吃喝喝而已。",
//         ],
//       },
//     ],
//   },
//   {
//     name: "一同互助共好",
//     top: [
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/heidilin_146/0financial/cathay/1140_HT_6010.jpg",
//         link:
//           "https://www.businesstoday.com.tw/article/category/80407/post/202102260017/%E5%BE%9E%E8%AA%B2%E6%9C%AC%E3%80%81%E5%88%B6%E6%9C%8D%E9%83%BD%E4%BB%B0%E8%B3%B4%E8%80%81%E5%B8%AB%E8%B3%87%E5%8A%A9%E7%9A%84%E5%81%8F%E9%84%89%E5%B0%8F%E5%AD%A9%EF%BC%8C%E5%88%B0%E5%8F%B0%E7%81%A3%E6%9C%80%E5%A4%A7%E9%87%91%E6%8E%A7%E6%8A%95%E8%B3%87%E9%95%B7%E3%80%80%E7%A8%8B%E6%B7%91%E8%8A%AC%EF%BC%9A%E3%80%8C%E6%88%91%E7%9A%84%E8%B2%B4%E4%BA%BA%E5%8C%85%E6%8B%AC%E6%AC%BA%E8%B2%A0%E6%88%91%E7%9A%84%E4%BA%BA%EF%BC%81%E3%80%8D",
//         title: "從偏鄉小孩到台灣最大金控投資長　程淑芬：「我的貴人包括欺負我的人！」",
//         contents: [
//           "「我小時家裡太窮，但因為成績好，老師有多幫一點忙，從課本、制服、鬧鐘、書桌到補習費…等，都是老師幫忙付的。」來自雲林虎尾偏僻小村落的國泰金控投資長程淑芬坦言，小時候因為跟別人家太不一樣，有點自卑。",
//           "但她認為不應該把時間花在想：「為什麼別人有，我沒有」。她笑著說：「大家都會羨慕別人有這個、有那個，其實我的貴人，有一半以上都是逆增上緣，我的貴人包括欺負我的人，逆境會增進你的力量。」",
//           "適時留些顏面給男人，同時保持自己的優雅堅持，這是程淑芬認為值得女性學習的課題，她說：「女人辛苦沒有關係，委屈就不必了。」",
//         ],
//       },
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/linhsinnan1_196/PKH_9368_.jpg",
//         link:
//           "https://www.businesstoday.com.tw/article/category/183034/post/202103020032/%E5%BE%9E%E4%B8%80%E9%96%93%E5%B0%8F%E6%B2%99%E9%BE%8D%E5%88%B0%E5%85%A8%E5%8F%B027%E5%AE%B6%E6%9C%83%E9%A4%A8%E7%9A%84%E5%81%A5%E5%BA%B7%E7%AE%A1%E7%90%86%E7%8E%8B%E5%9C%8B%E3%80%80%E5%AA%9A%E7%99%BB%E5%B3%AF%E8%91%A3%E5%BA%A7%E8%8E%8A%E9%9B%85%E6%B8%85%EF%BC%9A%E3%80%8C%E7%95%B6%E5%B9%B4%E6%88%91%E4%BB%80%E9%BA%BC%E9%83%BD%E6%B2%92%E6%9C%89%EF%BC%8C%E5%8F%AA%E6%9C%89%E4%B8%80%E8%BA%AB%E8%86%BD%EF%BC%81%E3%80%8D",
//         title:
//           "從小沙龍到媚登峯　莊雅清：「當年我什麼都沒有，只有一身膽！」",
//           contents: [
//             "當年，一個18歲的女孩，帶著向朋友借來的10萬元，一支掃帚、一包洗衣粉和一台收音機，離開家鄉高雄，赴台南創業；當時的她，雖然心情忐忑，卻有著一股不怕輸的氣勢，「就賭賭看啊！輸了會怎樣嗎？我還年輕，怕什麼！」",
//             "如今，這個不怕輸的女孩莊雅清，已成為媚登峯集團董事長，業務一路從美容、SPA、科學減重，到跨足健康管理及醫療產業，她大膽擘劃將旗下27家會館，逐步轉型為健康管理診所的藍圖，估計可讓業績翻一倍以上。",
//             "從一間小沙龍起家，到擁有27家會館的健康管理王國，當年那個不怕輸的女孩，憑著自身膽識，一步步實現了創業之夢；如今，她懷抱著更遠大的目標，踏著堅定的步伐，帶領媚登峯繼續朝下個里程碑邁進。",
//           ],
//       },
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/andreahsiao_234/2020.11.27-2020.12.30/2021.3/3_5-1.jpg",
//         link:
//           "https://www.businesstoday.com.tw/article/category/183035/post/202103050012/%E6%8F%AA%E5%A4%A7%E5%AE%B6%E5%B9%AB%E5%81%8F%E9%84%89%E6%95%99%E8%82%B2%E6%83%B3%E8%A7%A3%E6%96%B9%EF%BC%81%20TFT%E5%89%B5%E8%BE%A6%E4%BA%BA%E5%8A%89%E5%AE%89%E5%A9%B7%EF%BC%9A%E3%80%8C%E8%AE%93%E4%B8%8D%E6%BB%BF%E7%8F%BE%E7%8B%80%E7%9A%84%E6%89%80%E6%9C%89%E4%BA%BA%EF%BC%8C%E9%83%BD%E6%9C%89%E6%94%B9%E8%AE%8A%E7%9A%84%E5%8B%95%E6%A9%9F%E3%80%8D",
//         title:
//           "揪大家幫偏鄉教育想解方！ TFT創辦人劉安婷：「讓不滿現狀的所有人，都有改變的動機」",
//           contents: [
//             "為解決台灣偏鄉教育師資缺乏的問題，2013年甫從美國普林斯頓校園的劉安婷揮別高薪工作與舒適圈，毅然回台成立非營利組織Teach For Taiwan（TFT/為台灣而教），現為TFT董事長。",
//             "許多人對劉安婷的印象，是在TED演講上，自信談論教育資源不均的正妹高材生，以及曾獲《Forbes》亞洲版百大有影響力的年輕人之一。",
//             "如今，7年過去，劉安婷身上的標籤顯已轉淡；TFT也從「偏鄉教師荒」解決者的角色，增加公私部門與各式人才串接橋樑的角色。",
//             "今年3月初，總統蔡英文也參訪TFT與均一平台教育基金會、誠致教育基金會共同成立的「教育創新合作社 Education CoLab」。並肯定合作社補足了社會和教育中最艱困的「城鄉差距」。",
//           ],
//       },
//     ],
//     bottom: [
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/christina_155/%E5%91%A8%E7%8E%89%E8%8B%B11140x855.jpg",
//         link:
//           "https://www.businesstoday.com.tw/article/category/154769/post/202012240032/%E8%83%8C20%E5%85%AC%E6%96%A4%E9%97%96%E6%96%B7%E8%B7%AF%E5%8F%AA%E7%82%BA%E6%95%91%E4%BA%BA%20%E5%A5%89%E7%8D%BB%E5%81%8F%E9%84%8940%E5%B9%B4%20%E6%96%B0%E7%AB%B91/3%E5%85%A8%E9%9D%A0%E5%A5%B9%E5%9C%A8%E7%BD%A9",
//         title: "背20公斤闖斷路、奉獻偏鄉40年　新竹1/3全靠她在罩",
//         contents: [
//           "周玉英是第30屆醫療奉獻獎得主中，唯一一位護理人員，38年前的一段因緣，讓她來到醫療資源極度缺乏的尖石鄉。新竹縣尖石鄉全面積占整個新竹的1/3，但這裡的醫療資源卻長年不足，不管是車禍、接生、插管、居家照護，全靠她勇闖第一線，跑遍整座山頭！風災路斷她總是衝第一，不喊苦累只想救人也讓她成為什麼都要會的超級護士。",
//           "「照亮別人奉獻自己，所以只要我能做的，我都會想辦法去幫忙。」周玉英把護士職志銘刻在心。",
//         ],
//       },
//       {
//         image: "https://doqvf81n9htmm.cloudfront.net/data/crop_article/99357/1140_KENS8625aa.jpg_1140x855.jpg",
//         link:
//           "https://www.businesstoday.com.tw/article/category/154769/post/202003090020/%E5%81%9A%E5%85%AC%E7%9B%8A%E8%A1%9D%E7%AC%AC%E4%B8%80%E7%B7%9A%20%20%E5%8F%B0%E7%A9%8D%E9%9B%BB%E5%BC%B5%E6%B7%91%E8%8A%AC%EF%BC%9A%E6%84%9F%E6%81%A9%E5%9C%A8%E5%B9%AB%E5%8A%A9%E5%88%A5%E4%BA%BA%E5%90%8C%E6%99%82%EF%BC%8C%E6%9C%89%E6%A9%9F%E6%9C%83%E8%AE%93%E8%87%AA%E5%B7%B1%E6%88%90%E9%95%B7",
//         title: "做公益衝第一線　張淑芬：「幫助別人同時，也能讓自己成長」",
//         contents: [
//           "率性、即知即行的張淑芬，有時張忠謀在找她時，才發現已在前往公益現場的路上。因為張淑芬做公益的方式，不是捐捐錢、拍拍廣告，而是喜歡衝到第一線、給予需要幫助的人最直接的關心，因為如此，她才能真正知道錢要花在哪、怎麼幫？因此，從2014年高雄氣爆到2018年花蓮震災，每當台灣出現天災人禍時，現場總能看到張淑芬與台積電慈善基金會。",
//           "「我很感恩在幫助別人的同時，有機會讓自己成長，並試著影響更多人，一起讓社會更加溫暖、更有愛。」張淑芬說。",
//         ],
//       },
//     ],
//   },
// ];

const Sliders = ({topicsData}) => {
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

export default Sliders;
