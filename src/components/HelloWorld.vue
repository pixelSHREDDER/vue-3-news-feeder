<script>
import { ref } from 'vue'
import Article from './Article.vue'

const count = ref(0)

export default {
  components: {
    Article
  },
  props: {
    msg: String,
  }
}
</script>

<template>
<b-container fluid>
<b-card-group>
  <Article
    body="Lorem Ipsum"
    imgAlt="Image Alt Text"
    imgSrc="https://picsum.photos/600/300/?image=25"
    link="https://cnn.com"
    meta="1/1/2023 | CNN.com Headlines"
    title="Testing 1" />
  <Article
    body="Lorem Ipsum"
    imgAlt="Image Alt Text"
    imgSrc="https://picsum.photos/600/300/?image=25"
    link="https://cnn.com"
    meta="1/1/2023 | CNN.com Headlines"
    title="Testing 2" />
  <Article
    body="Lorem Ipsum"
    imgAlt="Image Alt Text"
    imgSrc="https://picsum.photos/600/300/?image=25"
    link="https://cnn.com"
    meta="1/1/2023 | CNN.com Headlines"
    title="Testing 3" />
  </b-card-group>
</b-container>




  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>