<script>
import ListItem from '../components/ListItem.vue'
import { unagero } from "../data/unagero"


export default {
  components: {
    ListItem
   }
   ,
  data() {
    return {
      unagero_history: unagero,
    }
  }
}


</script>

<template> 
  <div class="history" > 
      <p>二人の歴史</p>
    <ListItem v-for="(nakami, key) in unagero_history" :key="key">
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
    </ListItem>
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
