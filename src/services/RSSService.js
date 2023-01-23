//import axios from "axios"

export default {
  async getFeeds() {
    //let res = await axios.get("http://localhost:8000/events");
    let res = fetch("http://localhost:8000/events");
    return res.data;
  },
  async getFeedSingle(feedId) {
    //let res = await axios.get("http://localhost:8000/events/" + eventId);
    let res = fetch("http://localhost:8000/events/" + feedId);
    return res.data;
  }
}