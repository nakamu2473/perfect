<script>
export default {
  data() {
    return {
      unagero_url: "https://jocr.jp/programsite/unagerorin/",
      mayurika_url: "https://www.mayurika-official.com/",
      renraku_url: "https://forms.gle/YM4n6SnEcWUAXwij9",
      bosyu_url: "https://forms.gle/WLoYSbaU2LYbpGgE9"
    }
  }
}
</script>

<template> 
  <div class="history" > 
    <div class="page_title" > 
      <p>HOME</p>
    </div>
    <ul>
      <li>マユリカとは？</li>
          <div class="description">
            <p>NSC33期生、3歳からの幼馴染コンビ。ビキニ写真集が累計5000部を突破した。</p>
            <p>
              <a :href="mayurika_url"  target="_blank" rel="noopener noreferrer">マユリカオフィシャルサイト</a>
            </p>
          <br>
          </div>
      <li>マユリカのうなげろりんとは？</li>
          <div class="description">
            <p>ラジオ関西で制作されている、マユリカのPodcastラジオ番組。毎週土曜日夜11時頃更新。</p>
            <p>
              <a :href="unagero_url"  target="_blank" rel="noopener noreferrer">ラジオ関西うなげろりん公式ページ</a>
            </p>
            <br>
          </div>
      <li>このサイトは？</li>
          <div class="description">
            <p>マユリカのうなげろりん!!100回を記念して、いちリスナーが作成したサイトです。</p>
            <p>
              <router-link to="/history">History</router-link>では二人の過去のエピソードを時系列に選んで聴くことができます！
            </p>
            <p>
              <router-link to="/rank2022">The Trendy Word of the Year 2022</router-link>では2022年のうなげろりん流行語大賞に選ばれたエピソードをその秒数から聴くことができます！
            </p>

            <p>現在はSpotifyのリンクにのみ対応しています。</p>
            <p>
              エピソードリンクは<a :href="bosyu_url"  target="_blank" rel="noopener noreferrer">こちら</a>から募集しています！
            </p>
            <p>
              何かありましたらご連絡は<a :href="renraku_url"  target="_blank" rel="noopener noreferrer">こちら</a>まで。
            </p>
          <br>
          </div>
    </ul>
</div>
</template>

<style scoped>
.description {
  /* width: 300px; */
  /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; */
  /* overflow: hidden; */
  font-size: 0.9rem;
}

img {
  margin-left: 3px;
  width: 15px;
}
.history_link{
  min-height: 30px;
}
li{
  font-size: 1.2rem;
}
</style>
