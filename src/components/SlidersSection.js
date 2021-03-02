import SliderFirst from "./SliderFirst";
import SliderSecond from "./SliderSecond";
import titleFirst from "../assets/images/title_01.png";
import titleFirstMobile from "../assets/images/title_01_mobile.png";

import titleSecond from "../assets/images/title_02.png";
import titleSecondMobile from "../assets/images/title_02_mobile.png";

import titleThird from "../assets/images/title_03.png";
import titleThirdMobile from "../assets/images/title_03_mobile.png";


import picture from "../assets/images/picture1.jpeg";
import topicWang from "../assets/images/topic_wang.jpg";
import topicPurin from "../assets/images/topic_purin.jpg";
import topicMissq from "../assets/images/topic_missq.jpg";

const topicsData = [
  {
    name: "打造財務自由",
    top: [
      {
        image: topicWang,
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
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "L1從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
      },
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "L2從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
      },
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "L3從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
      },
    ],
  },
  {
    name: "探索身心靈，發現自我價值",
    top: [
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "曾慘賠500萬 財經主播王志郁靠房子跟基金累積千萬身價",
        contents: [
          "有著財經專業背景，卻還是在股海裡大賠五百萬！財經主播王志郁自嘲，「所有散戶會犯的錯，像是聽信明牌、追高殺低等，她全都犯過一輪了」。",
          "但是，在經過這堂「五百萬的投資理財課」之後，王志郁痛定思痛，找出開始重新審視、建立一套新的投資理財邏輯。她說，現在的資產配置非常簡單，分別是房子、股市及基金，各佔三分之一。",
          "經過幾年努力之後，不僅坐擁千萬身價，還因為痛過、賠過的經驗，決定以教導小資族投資理財為己任，讓所有曾跟她一樣在理財路上迷惘的年輕人，能找出屬於自己的理財方式。",
        ],
      },
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title:
          "2從台灣到矽谷、中東她們推動全球女性職涯發展全球女性職涯發展全球女性職涯發展",
          contents: [
            "有著財經專業背景，卻還是在股海裡大賠五百萬！財經主播王志郁自嘲，「所有散戶會犯的錯，像是聽信明牌、追高殺低等，她全都犯過一輪了」。",
            "但是，在經過這堂「五百萬的投資理財課」之後，王志郁痛定思痛，找出開始重新審視、建立一套新的投資理財邏輯。她說，現在的資產配置非常簡單，分別是房子、股市及基金，各佔三分之一。",
            "經過幾年努力之後，不僅坐擁千萬身價，還因為痛過、賠過的經驗，決定以教導小資族投資理財為己任，讓所有曾跟她一樣在理財路上迷惘的年輕人，能找出屬於自己的理財方式。",
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
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "L1從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
      },
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "L2從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
      },
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "L3從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
      },
    ],
  },
  {
    name: "不能只我好，也要大家一起好",
    top: [
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "曾慘賠500萬 財經主播王志郁靠房子跟基金累積千萬身價",
        contents: [
          "有著財經專業背景，卻還是在股海裡大賠五百萬！財經主播王志郁自嘲，「所有散戶會犯的錯，像是聽信明牌、追高殺低等，她全都犯過一輪了」。",
          "但是，在經過這堂「五百萬的投資理財課」之後，王志郁痛定思痛，找出開始重新審視、建立一套新的投資理財邏輯。她說，現在的資產配置非常簡單，分別是房子、股市及基金，各佔三分之一。",
          "經過幾年努力之後，不僅坐擁千萬身價，還因為痛過、賠過的經驗，決定以教導小資族投資理財為己任，讓所有曾跟她一樣在理財路上迷惘的年輕人，能找出屬於自己的理財方式。",
        ],
      },
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title:
          "2從台灣到矽谷、中東她們推動全球女性職涯發展全球女性職涯發展全球女性職涯發展",
          contents: [
            "有著財經專業背景，卻還是在股海裡大賠五百萬！財經主播王志郁自嘲，「所有散戶會犯的錯，像是聽信明牌、追高殺低等，她全都犯過一輪了」。",
            "但是，在經過這堂「五百萬的投資理財課」之後，王志郁痛定思痛，找出開始重新審視、建立一套新的投資理財邏輯。她說，現在的資產配置非常簡單，分別是房子、股市及基金，各佔三分之一。",
            "經過幾年努力之後，不僅坐擁千萬身價，還因為痛過、賠過的經驗，決定以教導小資族投資理財為己任，讓所有曾跟她一樣在理財路上迷惘的年輕人，能找出屬於自己的理財方式。",
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
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "L1從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
      },
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "L2從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
      },
      {
        image: picture,
        link:
          "https://www.businesstoday.com.tw/article/category/183027/post/202009100038/",
        title: "L3從台灣到矽谷、中東她們推動全球女性職涯發展",
        contents:
          "即便現今社會強調兩性平權，但女性職場的友善環境仍有改善空間，其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人其中，為女性科技人提供創業平台的WeTogether創辦人石舫亘，是一位職業婦女和母親，為了開創夢想從眾人稱羨的矽谷打包回台；而為中東難民與受壓迫女性創造工作機會的，為了實踐夢想遠走陌生異鄉。",
      },
    ],
  },
];

const SlidersSection = () => {
  return (
    <>
      <SliderFirst
        title={titleFirst}
        titleMobile={titleFirstMobile}
        titleID={topicsData[0].name}
        topTopics={topicsData[0].top}
        bottomTopics={topicsData[0].bottom}
      />
      <SliderSecond
        title={titleSecond}
        titleMobile={titleSecondMobile}
        titleID={topicsData[1].name}
        topTopics={topicsData[1].top}
        bottomTopics={topicsData[1].bottom}
      />
      <SliderFirst
        title={titleThird}
        titleMobile={titleThirdMobile}
        titleID={topicsData[2].name}
        topTopics={topicsData[2].top}
        bottomTopics={topicsData[2].bottom}
      />
    </>
  );
};

export default SlidersSection;
