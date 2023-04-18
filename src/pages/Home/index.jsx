import React from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <BlogList />
    </div>
  );
};

export default Home;
