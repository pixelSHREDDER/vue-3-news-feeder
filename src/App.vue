<script src="/node_modules/rss-parser/dist/rss-parser.min.js"></script>
<script>
import HelloWorld from './components/HelloWorld.vue';
//import RSSParser from 'rss-parser';

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default {
  data() {
		return {
      allArticles: [],
			availableFeeds: [],
			selectedFeeds: [],
      showLoader: false,
		}
	},
  computed: {
		articles: function() {
			if (this.allArticles.length === 0) return [];

			let articles = [];

      if (this.selectedFeeds.length) {
				articles = this.allArticles.filter(article => article.feedUrl === this.selectedFeed.feedUrl);
			} else {
				articles = this.allArticles;
			}

      articles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));

			return articles;
		}
	},
  created() {
    let parser = new RSSParser();
    this.loadFeeds(parser);
    //this.loadFeeds();
    this.showLoader = true;
  },
  methods: {
    loadFeeds: (parser) => {
      //let feed = await parser.parseURL('https://www.reddit.com/.rss');
      /*fetch(encodeURIComponent('https://www.reddit.com/.rss'))
				.then(res => res.json())
				.then(res => {*/
          parser.parseURL(CORS_PROXY + 'https://www.reddit.com/.rss', function(err, feed) {
            if (err) throw err;
            feed.items.forEach(item => {
            this.articles.push({
              body: item.contentSnippet,
              date: item.isoDate,
              link: item.link,
              meta: `${item.pubDate} | ${item.creator}`,
              feedUrl: feed.feedUrl,
              title: item.title,
            });
            console.log(item);
          });
          this.showLoader = false;
        });
				/*fetch(rssAPI+encodeURIComponent(this.addURL))
				.then(res => res.json())
				.then(res => {
					// ok for now, assume no error, cuz awesome
					this.addURL = '';

					//assign a color first
					res.feed.color = colors[this.feeds.length % (colors.length-1)];

					// ok, add the items (but we append the url as a fk so we can filter later)
					res.feed.items.forEach(item => {
						item.feedPk = this.addURL;
						item.feedColor = res.feed.color;
						this.allItems.push(item);
					});

					// delete items
					delete res.feed.items;

					// add the original rss link
					res.feed.rsslink = this.addURL;

					this.feeds.push(res.feed);
					this.addFeedDialog = false;

					//always hide intro
					this.showIntro = false;

					//persist the feed, but not the items
					this.storeFeeds();
				});
			}*/
    }
  }
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :articles=articles />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
