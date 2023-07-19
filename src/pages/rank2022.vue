<script>
import RankItem from '../components/RankItem.vue'
import { rank2022 } from "../data/rank2022"


export default {
  components: {
    RankItem
   }
   ,
  data() {
    return {
      rank2022: rank2022,
    }
  }
}


</script>

<template> 
  <div class="rank" > 
    <div class="page_title" > 
      <p>うなげろりん流行語大賞2022</p>
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
