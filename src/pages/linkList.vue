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
    }
  }
}


</script>
<template> 
    <div class="linkList" > 
      <p>podcastのリンク一覧</p>
      <WelcomeItem v-for="(nakami, key) in unagero2" :key="key">
        <template #heading>
          <a :href="nakami.url"   target="_blank" rel="noopener noreferrer">
            {{ nakami.title }}
          </a>
        </template>
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
  font-size: 80%;
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
