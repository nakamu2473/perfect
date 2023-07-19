<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<template> 
  <div class="history" > 
    <div class="page_title" > 
      <p>このサイトは、マユリカのうなげろりんのファンサイトです</p>
    </div>
    <ul>
      <li>マユリカのうなげろりんとは？</li>
          <div class="description">
            <p>ラジオ関西で制作されている、マユリカのPodcastラジオ番組。毎週土曜日夜11時頃更新。
            ラジオ関西公式ページhttps://jocr.jp/programsite/unagerorin/
            </p>
          </div>
      <li>マユリカとは？</li>
          <div class="description">
            <p>NSC33期生、3歳からの幼馴染コンビ。ビキニ写真集が累計5000部を突破した。</p>
          </div>
    </ul>
</div>
</template>

<style scoped>
.description {
  /* width: 300px; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 0.9rem;
}

img {
  margin-left: 3px;
  width: 15px;
}
.history_link{
  min-height: 30px;
}
</style>
