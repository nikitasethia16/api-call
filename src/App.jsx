import React from "react";
import { observer } from "mobx-react";
import fetchStore from "./FetchStore";

const App =() => {
  const handleFetchData = () => {
    fetchStore.fetchData();
  };

  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>

      {fetchStore.loading && <p>Loading...</p>}
      {fetchStore.error && <p>Error: {fetchStore.error}</p>}
      {fetchStore.data && (
        <div>
          <h3>Data:</h3>
           <p>{fetchStore.data[2].title}</p>  
        </div>
      )}
    </div>
  );
};

export default observer(App);
