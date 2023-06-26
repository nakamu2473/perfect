<script>
import WelcomeItem from './WelcomeItem.vue'
export default {
  components: {
    WelcomeItem
   }
   ,
  data() {
    return {
      unagero: {
        1: {
          date: "2021年7月10日",
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
          date: "2021年7月24日",
          title: "#2　小僧解体新書",
          info: {
            1: "中谷さんの黒歴史ブログ公開"
          }
        },
        3: {
          date: "2021年8月7日",
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



</template>
