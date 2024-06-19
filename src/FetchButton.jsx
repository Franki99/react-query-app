// import React from "react";
import { useQueryClient } from "react-query";

const FetchButton = () => {
  const queryClient = useQueryClient();

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    queryClient.setQueryData("posts", data);
  };

  return <button onClick={fetchData}>Fetch Data</button>;
};

export default FetchButton;
