import React from "react";
import '../stylesheets/content.css';
import '../stylesheets/reset.css';
import Search from "../universal/search/search_container";

class HomePage extends React.Component {
  render() {
    return (
      <section className="content-container">
        <div className="home-search-container">
          <Search/> 
        </div>
      </section>
    );
  }
}

export default HomePage;
