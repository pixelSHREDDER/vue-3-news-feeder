<script>
import Viewer from './components/Viewer.vue';

export default {
  components: {
    Viewer
  },
  data() {
		return {
      feedOptions: [
        { text: 'The Verge', value: 'https://www.theverge.com/web/rss/index.xml' },
        { text: 'Engadget', value: 'https://www.engadget.com/rss-full.xml' },
      ],
      selectedFeeds: ["https://www.theverge.com/web/rss/index.xml", "https://www.engadget.com/rss-full.xml"],
      loading: true,
		}
	},
  created() { setTimeout(() => this.loading = false, 2000) }
}
</script>

<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
    <b-navbar-brand>State-of-the-Art RSS Reader 2000</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav right>
      <b-navbar-nav>
        <b-nav-form>
          <b-form-group
            v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                v-model="selectedFeeds"
                :options="feedOptions"
                :aria-describedby="ariaDescribedby"
                switches
              ></b-form-checkbox-group>
            </b-form-group>
          </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-skeleton-wrapper :loading="loading">
    <template #loading>
      <b-spinner variant="primary" type="grow" class="mt-2"></b-spinner>
    </template>
    <Viewer :selectedFeeds="selectedFeeds" />
  </b-skeleton-wrapper>
</template>

<style>
.navbar-brand {
  margin-left: 1rem;
}
.navbar-nav .form-inline {
  padding-left: 1rem;
}
.container-fluid {
  margin-top: 60px;
}
.b-skeleton-wrapper {
  padding-top: 60px;
  text-align: center;
}
.b-spinner {
  position: absolute;
  top: 60px;
  left: 50%;
}
</style>
