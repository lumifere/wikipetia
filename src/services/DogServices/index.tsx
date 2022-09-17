import { dog } from "../api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async getDogPhoto() {
    try {
      const response = dog.get('images/search?mime_types=jpg,png', {
        headers: {
          "x-api-key": "live_jSmZmKIZnBZoEzW6mP54JJEaMs9UHrp1JOTYW7jozwoOXNGSaG8YmBxG5RfpsT4v"
        }
      });
      return response
    } catch (err) {
      console.log(err);
    }
  }
}