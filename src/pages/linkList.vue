<script>
import WelcomeItem from '../components/WelcomeItem.vue'
import { unagero } from "../data/unagero"


export default {
  components: {
    WelcomeItem
   }
   ,
  data() {
    return {
      unagero2: unagero,
      unagero: {
        1: {
          date: "21.7.10",
          title: "#1　ショウタとカネ",
          description: "レギュラー冠ラジオが月1→年4になってしまったマユリカ。SNSや番組へのメール、局への手紙などで寄せられた「二人の番組が聴きたい！」という多くの声を受け、ついにPodcast番組をスタートすることとなりました。しかし、二人のトークはネガティブなトーンではじまります……--------------------------------------------●Twitterhttps://twitter.com/unagerorin●メールフォームhttps://jocr.jp/mailform/unagerorin/●公式YouTubeチャンネルhttps://www.youtube.com/channel/UCUi00Bia46ldMzwEqniEZRQ-------------------------------------------- See omnystudio.com/listener for privacy information.",
          info: {
            1: {
              point: "ショウタ",
              url: "https://open.spotify.com/episode/1J8IAW6S1oF0dtKMJIyLE5?si=P186dv4vSiKCY0Q_HnpQVQ&t=278&context=spotify%3Ashow%3A223Rj9cjUGjcCY1CUP4ahP",
            },
            2: {
              point: "写真集の構想",
              url: "https://open.spotify.com/episode/1J8IAW6S1oF0dtKMJIyLE5?si=lmmgy4WYQPSbe17FOBdaug&t=386&context=spotify%3Aepisode%3A1J8IAW6S1oF0dtKMJIyLE5"
            }
          }
        },
        2: {
          date: "21.7.24",
          title: "#2　小僧解体新書",
          description: "正直キツイです…。--------------------------------------------●Twitterhttps://twitter.com/unagerorin●メールフォームhttps://jocr.jp/mailform/unagerorin/●公式YouTubeチャンネルhttps://www.youtube.com/channel/UCUi00Bia46ldMzwEqniEZRQ-------------------------------------------- See omnystudio.com/listener for privacy information.",
          info: {
            1: {
              point: "中谷さんの黒歴史ブログ公開",
              url: "https://open.spotify.com/episode/0e1SozIxLTbirhmWuKayzC"
            } 
          }
        },
        3: {
          date: "21.8.7",
          title: "#3　救世主登場",
          description: "例の「写真集」に驚くべき救世主が現れました。--------------------------------------------●Twitterhttps://twitter.com/unagerorin●メールフォームhttps://jocr.jp/mailform/unagerorin/●公式YouTubeチャンネルhttps://www.youtube.com/channel/UCUi00Bia46ldMzwEqniEZRQ-------------------------------------------- See omnystudio.com/listener for privacy information.",
          info: {
            1: "写真集の救世主"
          }
        }
      }
    }
  }
}


</script>
<template> 
    <div class="linkList" > 
      <WelcomeItem v-for="(nakami, key) in unagero" :key="key">
        <template #icon >
          <i class="icon" />
        </template>
        <template #heading>{{ nakami.title }}</template>
        <div class="description">{{  nakami.description}}</div>
        <ul>
          <li v-for="(info, key) in nakami.info" :key="key">
            <a :href="info.url"   target="_blank" rel="noopener noreferrer">{{ info.point }}</a>
          </li>
        </ul>
      </WelcomeItem>
  </div>
</template>

<style scoped>
.description {
  /* width: 300px; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.icon {
  width: 0;
  height: 0;
  border-style: 1px solid;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 17px solid #89c0ff;
  border-right: 0;
}
</style>
