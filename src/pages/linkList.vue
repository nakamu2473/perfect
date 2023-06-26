<script>
import WelcomeItem from '../components/WelcomeItem.vue'
export default {
  components: {
    WelcomeItem
   }
   ,
  data() {
    return {
      unagero: {
        1: {
          date: "21.7.10",
          title: "#1　ショウタとカネ",
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
          info: {
            1: "中谷さんの黒歴史ブログ公開"
          }
        },
        3: {
          date: "21.8.7",
          title: "#3　救世主登場",
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
    <div> linkList </div>
    <div > 
      <WelcomeItem v-for="(nakami, key) in unagero" :key="key">
        <template #icon>
          <!-- {{ item.date }} -->
        </template>
        <template #heading>{{ nakami.title }}</template>
        <ul>
          <li v-for="(info, key) in nakami.info" :key="key">
            <a :href="info.url"   target="_blank" rel="noopener noreferrer">{{ info.point }}</a>
          </li>
        </ul>
      </WelcomeItem>
  </div>
</template>