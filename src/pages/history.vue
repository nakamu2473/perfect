<script>
import ListItem from '../components/ListItem.vue'
import RankItem from '../components/RankItem.vue'
import { history } from "../data/history"
import { rank2022 } from "../data/rank2022"


export default {
  components: {
    ListItem,
    RankItem
   }
   ,
  data() {
    return {
      history: history,
      rank2022: rank2022,
    }
  }
}


</script>

<template> 
  <div class="rank" > 
    <div class="rank_title" style="background-color: rgb(254, 236, 236); height: 50px;" > 
      <p>流行語大賞2022</p>
    </div>

    <RankItem msg="Hello" v-for="(item, key) in rank2022" :key="key">
        <!-- <div class="body" style="padding-left: 50px; padding-right: 50px;"></div> -->
        <template #icon >
          <img src="../icons/crown.png" style=" width: 60px; position:absolute;" />
          <span style="position:absolute;top:16px;left:28px;font-family:monospace;">{{ item.no }}</span>
        </template>
        <template #heading>
          <div style=" display:flex;">
            <div>
              <div style="">{{ item.podcasttitle }}</div>
              <a v-if=" item.title" :href="item.url"   target="_blank" rel="noopener noreferrer">{{ item.title }}</a><br v-if=" item.title">
          </div>
        </div>
        </template>
    </RankItem>
  </div>
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
