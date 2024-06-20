import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import DisplayData from "./DisplayData";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const FetchButton = () => {
  const [fetchData, setFetchData] = useState(false);
  const { data, isLoading, isError, refetch } = useQuery("posts", fetchPosts, {
    enabled: false,
  });

  const handleFetchData = () => {
    setFetchData(true);
    refetch();
  };

  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading data</p>}
      {fetchData && !isLoading && data && <DisplayData data={data} />}
    </div>
  );
};

export default FetchButton;
