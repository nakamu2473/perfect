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
        <img src="../icons/10815.png" />
      </template>

      <div class="history_link" > 
        <a v-if="nakami.t1" :href="nakami.u1"   target="_blank" rel="noopener noreferrer">{{ nakami.t1 }}</a><br v-if="nakami.t1">
        <a v-if="nakami.t2" :href="nakami.u2"   target="_blank" rel="noopener noreferrer">{{ nakami.t2 }}</a><br v-if="nakami.t2">
        <a v-if="nakami.t3" :href="nakami.u3"   target="_blank" rel="noopener noreferrer">{{ nakami.t3 }}</a><br v-if="nakami.t3">
        <a v-if="nakami.t4" :href="nakami.u4"   target="_blank" rel="noopener noreferrer">{{ nakami.t4 }}</a><br v-if="nakami.t4">
        <a v-if="nakami.t5" :href="nakami.u5"   target="_blank" rel="noopener noreferrer">{{ nakami.t5 }}</a><br v-if="nakami.t5">

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

img {
  margin-left: 3px;
  width: 15px;
}
.history_link{
  min-height: 30px;
}
</style>
