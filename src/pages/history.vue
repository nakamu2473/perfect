<script>
import ListItem from '../components/ListItem.vue'
import { history } from "../data/history"


export default {
  components: {
    ListItem
   }
   ,
  data() {
    return {
      history: history,
    }
  }
}


</script>

<template> 
  <div class="history" > 
      <p>二人の歴史</p>
    <ListItem v-for="(nakami, key) in history" :key="key">
      <template #icon >
        {{ nakami.age }}
      </template>

      <div class="history_link" > 
        <a :href="nakami.u1"   target="_blank" rel="noopener noreferrer">{{ nakami.t1 }}</a>
      </div>
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

.history_link{
  min-height: 30px;
}
</style>
