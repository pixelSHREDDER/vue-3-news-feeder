<script>
export default {
    props: {
        author: String,
        content: String,
        imgAlt: String,
        imgSrc: String,
        link: String,
        pubDate: String,
        title: String
    }
};
</script>

<template>
  <b-card
    :img-alt=imgAlt
    :img-src=imgSrc
    :title=title
    img-top
    tag="article"
  >
    <b-card-text>
        <small class="text-muted">{{pubDate}}<br/>By {{author}}</small>
        <hr>
      {{content}}
    </b-card-text>

    
    <template #footer>
        <b-button :href=link target="_blank" variant="primary">Read more</b-button>
      </template>
  </b-card>
</template>

<style>
.card-body {
    display: grid;
    grid-template-rows: 1fr auto;
}
.btn {
    width: 100%;
}
.card-text {
    max-height: 48vh;
    overflow: hidden;
}
</style>