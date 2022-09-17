import { cat } from "../api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async getCatPhoto() {
    try {
      const response = cat.get('images/search?mime_types=jpg,png', {
        headers: {
          "x-api-key": "live_hrMuCamEASpO9JeJTEcDS6u1YDrFfXjnLRQLd3Vp0wIry3JuW9nsHiUKqHnbTO9T"
        }
      });
      return response
    } catch (err) {
      console.log(err);
    }
  }
}