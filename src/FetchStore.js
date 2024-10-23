import { makeAutoObservable } from "mobx";
import FetchService from "./FetchService";

class FetchStore {
  data = null;
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchData = async () => {
    this.loading = true;
    try {
      this.data = await FetchService.fetchData();
    } catch (error) {
      this.error = "Failed to fetch data";
    } finally {
      this.loading = false;
    }
  };
}

const fetchStore = new FetchStore();
export default fetchStore;
