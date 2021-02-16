import React from "react";
import './about.css'
import { FaGithub, FaLinkedin, FaAngellist  } from "react-icons/fa";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <div className="about-main">
          <div className="about-app">
            <h1>About</h1>
            <br/> 
            
            <p>CuratedTiers solves the problem of decision fatique by sorting through product search results from Amazon into three pricing tiers, Value, Mid-Tier, and High-End. We rank the results of each tier by a combination of ratings and number of reviews. This way, you are able to shop with ease by picking the best product for your suited price range.
            <br/> 
            <br/> 
            We have also made shopping fun with the SurpriseMe tab that allows you to search for the most popular products on Amazon along with other shopping categories that will...Surprise You! 
            <br/> 
            <br/> 
            Best of all, we have the Deals tab that scans Amazon for the best deals of the day and presents the results ordered by ratings--perfect for all you bargain hunters out there.</p>
          </div>
          <div className="about-team">
              <h1>Team Members</h1>
              <br/>
              <div className="member-list">
                  <div className="team-member">
                    <span>James Park</span>
                    <div className="member-links">
                    <a href="https://www.linkedin.com/in/jameshansungpark/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="github-icon" size={27} />
                    </a>
                    <a href="https://github.com/jamhanpar" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="github-icon" size={27} />
                    </a>
                    <a href="https://github.com/jamhanpar" target="_blank" rel="noopener noreferrer">
                      <FaAngellist className="github-icon" size={27} />
                    </a>
                    </div>
                  </div>
                  <div className="team-member">
                    <span>David Suh</span>
                    <div className="member-links">
                    <a href="https://www.linkedin.com/in/david-i-suh" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="github-icon" size={27} />
                    </a>
                    <a href="https://github.com/dsuh93" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="github-icon" size={27} />
                    </a>
                    <a href="https://angel.co/u/david-i-suh" target="_blank" rel="noopener noreferrer">
                      <FaAngellist className="github-icon" size={27} />
                    </a>
                    </div>
                  </div>
                  <div className="team-member">
                    <span>Jung Park</span>
                    <div className="member-links">
                    <a href="https://www.linkedin.com/in/jung-park-817580141/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="github-icon" size={27} />
                    </a>
                    <a href="https://github.com/Junghyun2006" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="github-icon" size={27} />
                    </a>
                    <a href="https://github.com/Junghyun2006" target="_blank" rel="noopener noreferrer">
                      <FaAngellist className="github-icon" size={27} />
                    </a>
                    </div>
                  </div>
                  <div className="team-member">
                    <span>Philip Kor</span>
                    <div className="member-links">
                    <a href="https://www.linkedin.com/in/philip-kor-83870a155/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="github-icon" size={27} />
                    </a>
                    <a href="https://github.com/philipk8" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="github-icon" size={27} />
                    </a>
                    <a href="https://angel.co/u/philip-k" target="_blank" rel="noopener noreferrer">
                      <FaAngellist className="github-icon" size={27} />
                    </a>
                    </div>
                  </div>
              </div>

          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage