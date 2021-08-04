<template>
  <div class="container">
    <div class="row">
      <div
        v-for="item in videos"
        :key="item.cover"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <div class="box">
          <div
            class="box__image"
            :style="{
              backgroundImage: `url(${require(`@/assets/images/${item.cover}.jpg`)}) `
            }"
          >
            <div class="box__duration">
              <span>{{ item.duration }}</span>
            </div>
          </div>
        </div>

        <div class="details">
          <!-- 頻道頭像 -->
          <div class="details__avatar">
            <img src="~/assets/images/avatar.jpg" />
          </div>

          <!-- 頻道標題 -->
          <div class="details__content">
            <div class="details__title">
              {{ item.title }}
            </div>

            <div class="details__subtitle">
              {{ item.subtitle }}
            </div>
          </div>

          <!-- 工具鈕 -->
          <div class="details__tool">
            <fa-icon :icon="['fas', 'ellipsis-v']" class="details__icon"></fa-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',

  data: () => ({
    videos: [
      {
        title:
          '2021年最火的英文歌曲 + 歐美流行音樂 + 超好聽中文+英文歌曲(精心挑選) 2021最近很火的英文歌 + KKBOX綜合排行榜 2021',
        subtitle: '超好聽的英文歌•觀看次數：1.9萬次•直播時間：4 個月前',
        duration: '11:54:56',
        cover: '1'
      },
      {
        title:
          '3小時50首特選最佳抒情歌 任然 - 飛鳥和蟬 / 阿冗 - 你的答案 / 火羊瞌睡了 - 夏天的风 / 少年 - 夢然',
        subtitle: '甜美的旋律 Sweet Melody•觀看次數：34萬次•1 個月前',
        duration: '10:54:56',
        cover: '2'
      },
      {
        title: '에스파(aespa) - Next Level 교차편집(stage mix)',
        subtitle: '강민혁 X 차누•觀看次數：384萬次•2 週前',
        duration: '03:25',
        cover: '3'
      },
      {
        title: '【太妍】再跳經典《再次重逢的世界》 網羨慕嘆「出道十幾年完全沒變!」',
        subtitle: '達人秀新聞•觀看次數：23萬次•1 個月前',
        duration: '05:20',
        cover: '4'
      },
      {
        title: '"到底什麼時候韓國才能趕上..."韓國素食者只能住在台灣的理由',
        subtitle: 'KT story•觀看次數：79萬次•4 週前',
        duration: '06:56',
        cover: '5'
      },
      {
        title: '전소연(JEON SOYEON) - \'삠삠 (BEAM BEAM)\' Official Music Video',
        subtitle: 'KT story•觀看次數：79萬次•4 週前',
        duration: '04:45',
        cover: '6'
      },
      {
        title: '發現科學-隱形缺氧 新冠病毒致命殺手',
        subtitle: 'TTV台視新聞節目•觀看次數：1.8萬次•10 小時前',
        duration: '08:12',
        cover: '7'
      },
      {
        title: '【LIVE】8/4 北市本土+5例 柯文哲最新說明',
        subtitle: 'ETtoday新聞雲•觀看次數：1.3萬次•直播時間：7 小時前',
        duration: '17:56',
        cover: '8'
      },
      {
        title: '武漢肺炎將"流感化"?! 美國醫學專家呼籲全球應該要"學習與病毒共存" 泰國累計60萬確診防疫警戒至8月底｜記者 陳姵如｜【國際大現場】20210802｜三立新聞台',
        subtitle: '從台灣看見世界的故事•觀看次數：3.9萬次•2 天前',
        duration: '25:30',
        cover: '9'
      },
      {
        title: 'Kpop Playlist - Kpop Songs : BTS, GFriend, STAYC, TWICE, TXT, aespa, BLACKPINK, SEVENTEEN, JBJ95,...',
        subtitle: '한국 팝_KPOP•觀看次數：10萬次•8 個月前',
        duration: '07:30:56',
        cover: '10'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  padding-bottom: 56.25%;

  &__image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center;
    background-size: cover;
  }

  &__duration {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: white;
    padding: 2px 4px;
    background-color: rgba(0,0,0,0.8);
    border-radius: 2px;
  }
}

.details {
  display: flex;
  margin-top: 12px;
  margin-bottom: 24px;

  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    flex-grow: 1;
  }

  &__title {
    font-size: 14px;
    line-height: 1.25;
    margin: 0 12px 8px 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    cursor: pointer;
  }

  &__subtitle {
    margin: 0 12px;
    font-size: 12px;
    color: #686868;
  }

  &__tool {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  &__icon {
    font-size: 16px;
  }
}
</style>
