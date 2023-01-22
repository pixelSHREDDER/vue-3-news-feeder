<script>
export default {
    props: {
        body: String,
        imgAlt: String,
        imgSrc: String,
        link: String,
        meta: String,
        title: String
    }
};
</script>

<template>
  <b-card
    :img-alt="imgAlt"
    :img-src=imgSrc
    :sub-title="meta"
    :title="title"
    class="mb-2"
    img-top
    style="max-width: 20rem;"
    tag="article"
  >
    <b-card-text>
      {{body}}
    </b-card-text>

    <b-button :href="link" variant="primary">Read more</b-button>
  </b-card>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>