import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function StatesandCities() {
  const [searchParams, setSearchParams] = useSearchParams();

  searchParams.get("posts");
  const { posts } = useParams();
  alert(posts);
  return (
    <div>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </div>
  );
}

export default StatesandCities;
