<script>
import HistoryItem from '../components/HistoryItem.vue'
import { history } from "../data/history"


export default {
  components: {
    HistoryItem
   }
   ,
  data() {
    return {
      history: history,
      ten:5
    }
  }
}
</script>

<template> 
  <div class="history" > 
    <div class="page_title" > 
      <p>マユリカの歴史</p>
    </div>
    <HistoryItem v-for="(nakami, key) in history" :key="key">
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
        <a v-if="nakami.t6" :href="nakami.u6"   target="_blank" rel="noopener noreferrer">{{ nakami.t6 }}</a><br v-if="nakami.t6">
        <a v-if="nakami.t7" :href="nakami.u7"   target="_blank" rel="noopener noreferrer">{{ nakami.t7 }}</a><br v-if="nakami.t7">
        <a v-if="nakami.t8" :href="nakami.u8"   target="_blank" rel="noopener noreferrer">{{ nakami.t8 }}</a><br v-if="nakami.t8">
        <a v-if="nakami.t9" :href="nakami.u9"   target="_blank" rel="noopener noreferrer">{{ nakami.t9 }}</a><br v-if="nakami.t9">
        <a v-if="nakami.t10" :href="nakami.u10"   target="_blank" rel="noopener noreferrer">{{ nakami.t10 }}</a><br v-if="nakami.t10">
      </div>
    </HistoryItem>
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
