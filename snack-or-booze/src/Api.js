import axios from "axios";

//const BASE_API_URL = "http://localhost:5000";
const BASE_API_URL = "http://192.168.5.129:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getItemsOfCategory(category) {
    const result = await axios.get(`${BASE_API_URL}/${category}`);
    return result.data;
  }
  static async setNewItemOfCategory(item, category) {
    // console.log("inserting new item: ", item, " into category: ", category);
    const result = await axios.post(`${BASE_API_URL}/${category}`, item);
    return result;
  }
}

export default SnackOrBoozeApi;
