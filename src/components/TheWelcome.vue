<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      21.7.10
    </template>
    <template #heading>#1 ショウタとカネ</template>
    - podcastスタート
    - うなげろりん命名理由
    - 写真集の構想
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      21.7.24
    </template>
    <template #heading>#2 小僧解体新書</template>
    - 中谷さんの黒歴史ブログ公開
  </WelcomeItem>
</template>
