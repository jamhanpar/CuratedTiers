import React from "react";
import '../stylesheets/content.css';
import '../stylesheets/reset.css';
import Search from "../universal/search/search";
import '../universal/search/search.css';
import './home.css';

class HomePage extends React.Component {
  render() {
    return (
      <section className="content-container">
        <div className="home-container">
          <div className="home-search-container">
            <Search searchClass="home-search-bar" />
          </div>
          <h1 className="home-search-description">
            Our search curates Amazon products into tiers using our algorithm to
            help you find only the best
          </h1>
        </div>
      </section>
    );
  }
}

export default HomePage;
