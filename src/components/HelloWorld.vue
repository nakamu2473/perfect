<script>
export default {
  props: {
     msg :{
        type: String,
        required: true
     }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="title">{{ msg }}</h1>
    <h3>
      うなげろりんのファンサイトです。
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  color: #1b2f33;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
