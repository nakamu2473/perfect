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
          name: "#1　ショウタとカネ",
          info: "podcastスタート/うなげろりん命名理由/写真集の構想"
        },
        2: {
          date: "2021年7月24日",
          name: "#2　小僧解体新書",
          info: "中谷さんの黒歴史ブログ公開"
        },
        3: {
          date: "2021年8月7日",
          name: "#3　救世主登場",
          info: "写真集の救世主"
        }
      }
    }
  }
}
</script>

<template>

  <div v-for="(item, key) in unagero" :key="key">
      <WelcomeItem>
        <template #icon>
          {{ item.date }}
        </template>
        <template #heading>{{ item.name }}</template>
        {{ item.info }}
      </WelcomeItem>
  </div>

</template>
