import axios from 'axios';
let apiUrl = "https://jsonplaceholder.typicode.com/posts";

const FetchService = {
  fetchData: async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};

export default FetchService;
