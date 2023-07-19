<script>
import LinkItem from '../components/LinkItem.vue'
import { unagero } from "../data/unagero"


export default {
  components: {
    LinkItem
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
      <div class="page_title" > 
        <p>podcastのリンク一覧</p>
      </div>
      <LinkItem v-for="(nakami, key) in unagero2" :key="key">
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
      </LinkItem>
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

</style>
