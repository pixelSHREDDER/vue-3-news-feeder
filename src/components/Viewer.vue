<script>
import Article from './Article.vue'

export default {
  components: {
    Article
  },
  computed: {
	selectedArticles() {
		let selectedArticles = [...this.allArticles];
		
    if (this.selectedFeeds) {
      selectedArticles = selectedArticles.filter((a) => {
        return (this.selectedFeeds.includes(a.feedUrl));
      })
    }

		selectedArticles = selectedArticles.sort((a, b) => b.published - a.published);

    return selectedArticles;
	}
},
  data() {
		return {
      allArticles: [
    {
      pubDate: "Jan 19, 2023 11:16 PM",
      published: "2023-01-19T17:23:16-05:00",
      updated: "2023-01-19T17:23:16-05:00",
      title: "\nTwitter officially bans third-party clients with new developer rules\n",
      content: "Twitter has updated its developer rules to ban third-party clients, almost a week after it unceremoniously blocked the apps\u2019 access to its platform, offering almost no explanation to what was going on. The new rules state that you can\u2019t use Twitter\u2019s API or content to \u201ccreate or attempt to create a substitute or similar service or product to the Twitter Applications. The rules, updated on Thursday, make it clear what that means: \u201cTwitter Applications\u201d refers to the company\u2019s \u201cconsumer facing products, services, applications, websites, web pages, platforms, and other offerings, including without limitation, those offered via https://twitter.com and Twitter\u2019s mobile applications.\u201d The clause banning alternative services was...",
      imgAlt: "An illustration of the Twitter logo.",
      imgSrc: "https://cdn.vox-cdn.com/thumbor/3d4y5-GbVSl9TY-Q4ZZtl_GUI_8=/0x0:3000x2000/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/71885320/acastro_STK050_06.0.jpg",
      link: "https://www.theverge.com/2023/1/19/23562947/twitter-third-party-client-tweetbot-twitterific-ban-rules",
      id: "\nhttps://www.theverge.com/2023/1/19/23562947/twitter-third-party-client-tweetbot-twitterific-ban-rules\n",
      author: "Mitchell Clark",
      feedUrl: "https://www.theverge.com/web/rss/index.xml"
    },
    {
      pubDate: "Jan 19, 2023 4:41 PM",
      published: "2023-01-19T16:41:26-05:00",
      updated: "2023-01-19T16:41:26-05:00",
      title: "Inside CNET\u2019s AI-powered SEO money machine",
      content: "Fake bylines. Content farming. Affiliate fees. What happens when private equity takes over a storied news site and milks it for clicks?",
      imgAlt: "A search query graph that flatlines",
      imgSrc: "https://cdn.vox-cdn.com/thumbor/HjUoqpfizLhgoB-Y-8QHZywEaWo=/0x0:1800x1200/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/71885124/gbeard_180612_2662_seo_death_5mb.0.gif",
      link: "https://www.theverge.com/2023/1/19/23562966/cnet-ai-written-stories-red-ventures-seo-marketing",
      id: "\nhttps://www.theverge.com/2023/1/19/23562966/cnet-ai-written-stories-red-ventures-seo-marketing\n",
      author: "Mia Sato & James Vincent",
      feedUrl: "https://www.theverge.com/web/rss/index.xml"
    },
    {
      pubDate: "Jan 19, 2023 2:37 PM",
      published: "2023-01-19T14:37:11-05:00",
      updated: "2023-01-19T14:37:11-05:00",
      title: "\nThe State Department wants memos written in Calibri now, not Times New Roman\n",
      content: "The State Department is changing with the times. According to a report from The Washington Post, employees have been directed to use 14-point Calibri when writing certain documents instead of the traditional Times New Roman. The mandate is set to go into effect in February. In a memo cheekily titled \u201cThe Times (New Roman) are a-Changin,\u201d Secretary of State Antony Blinken reportedly told employees that the change is meant to make documents more accessible, saying that Times New Roman\u2019s serifs could \u201cintroduce accessibility issues for individuals with disabilities who use Optical Character Recognition technology or screen readers.\u201d",
      imgAlt: "Screenshot of a word document with the lyrics to Bob Dylan\u2019s \u201cThe Times They Are A-Changin\u2019\u201d written in Times New Roman.",
      imgSrc: "https://cdn.vox-cdn.com/thumbor/5OCbzFf6xc8M1_MhFtzO8RTqE9U=/0x0:1928x1285/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/71884563/Screenshot_2023_01_19_at_10.55.17.0.png",
      link: "https://www.theverge.com/2023/1/19/23562472/us-state-department-times-new-roman-calibri-accessibility",
      id: "\nhttps://www.theverge.com/2023/1/19/23562472/us-state-department-times-new-roman-calibri-accessibility\n",
      author: "Mitchell Clark",
      feedUrl: "https://www.theverge.com/web/rss/index.xml"
    },
    {
      pubDate: "Jan 22, 2023 11:34 PM",
      published: "2023-01-22T23:34:38+00:00",
      updated: "2023-01-22T23:34:38+00:00",
      title: "\nApple may have scrapped plans for a new HomePod mini\n",
      content: "With this week’s return of the HomePod, you might think it would make sense for Apple to start working on a new HomePod mini. After all, the company hasn’t announced a hardware refresh for the device since its introduction in 2020, and the smart speaker market is one of the most competitive in tech. However, it appears no such update is in the works.",
      imgAlt: "Image of an Apple HomePod.",
      imgSrc: "https://s.yimg.com/os/creatr-uploaded-images/2021-09/47acf9c0-1661-11ec-9b0f-ec0cc09f0ca9",
      link: "https://www.engadget.com/apple-may-have-scrapped-plans-for-a-new-homepod-mini-233428519.html?src=rss",
      id: "\nhttps://www.engadget.com/apple-may-have-scrapped-plans-for-a-new-homepod-mini-233428519.html?src=rss\n",
      author: "Igor Bonifacic",
      feedUrl: "https://www.engadget.com/rss-full.xml"
    },
      ],
			availableFeeds: ["https://www.theverge.com/web/rss/index.xml", "https://www.engadget.com/rss-full.xml"],
		}
	},
  props: {
    selectedFeeds: Array
  }
}
</script>

<template>
  <b-container fluid>
    <b-card-group>
        <Article
        v-for="article in selectedArticles" :key="article.link"
          :author=article.author  
          :content=article.content
          :imgAlt=article.imgAlt
          :imgSrc=article.imgSrc
          :link=article.link
          :pubDate=article.pubDate
          :title=article.title />  
      </b-card-group>
  </b-container>  
</template>