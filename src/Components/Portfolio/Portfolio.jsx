import { portfolio } from "../Portfolio/data";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="cards">
        {portfolio.map((card) => (
          <div className="card" key={card.id}>
            <div className="container">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="details">
              <h3>{card.title}</h3>
              <div className="buttons">
                <a href={card.github} target="blank">
                  <button>GITHUB</button>
                </a>
                <a href={card.demo} target="blank">
                  <button>DEMO LINK</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
