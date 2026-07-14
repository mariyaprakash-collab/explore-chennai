import "./home.css";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-body">
      <Header />
      <div className="homebody">
        <div className="bodyhead">
          <div className="headline">
            <h1>Welcome to Chennai</h1>
            <p>
              Chennai — where golden beaches meet timeless culture. A city
              filled with vibrant streets, historic temples, and warm hearts.
              From Marina’s waves to the aroma of South Indian cuisine, every
              corner tells a story. Experience the spirit, tradition, and modern
              life of Namma Chennai. This website is your guide to exploring the
              best of Chennai. Discover famous landmarks, fascinating history,
              popular attractions, scenic parks, and hidden gems that make the
              city special. Whether you're a tourist planning a visit or a local
              looking to learn more about your city, start your journey here and
              experience the rich heritage and charm of Chennai.
            </p>
          </div>
          <div className="chennaiariel">
            <img src="/images/nammachennai.jpg" />
          </div>
        </div>

        <div className="facts">
          <h2>Chennai at a glance</h2>

          <ul>
            <li>Chennai is formerly known Madras until 1996</li>
            <li>
              Marina Beach is one of the longest urban beaches in the world,
              stretching about 13 km.
            </li>
            <li>
              Chennai is known as the “Detroit of India” because many automobile
              companies manufacture cars there.
            </li>
            <li>
              The city is the cultural capital of South India and is famous for
              Bharatanatyam, Carnatic music, and classical arts.
            </li>
            <li>
              The city is home to one of India’s oldest universities: University
              of Madras, founded in 1857.
            </li>
            <li>
              Chennai’s film industry, known as Kollywood, is one of India’s
              biggest movie industries.
            </li>
            <li>
              Chennai is one of the few Indian cities that naturally combines
              modern IT hubs with deep-rooted traditions and ancient culture.
            </li>
          </ul>
        </div>
        <hr />
        <div className="history">
          <h2>From Madras to Chennai</h2>
          <div className="paras">
            <div className="para1">
              <img src="/images/labours.jpg" />
              <p>
                The area that is now Chennai has a rich history dating back more
                than two thousand years. It was part of several powerful South
                Indian kingdoms, including the Pallavas, Cholas, and
                Vijayanagara Empire. These rulers contributed to the region's
                growth through trade, architecture, literature, and religion.
                Ancient ports along the Coromandel Coast connected the region
                with traders from Southeast Asia, Rome, and the Middle East,
                making it an important center of commerce.
              </p>
            </div>

            <div className="para2">
              <p>
                A major turning point came in 1639 when the British East India
                Company obtained land from the local rulers. They established a
                trading post and built Fort St. George in 1644, the first major
                British fortress in India. The settlement around the fort
                gradually expanded, attracting merchants, craftsmen, and
                workers. This marked the beginning of the city then known as
                Madras.
              </p>
              <img src="/images/central.jpg" />
            </div>

            <div className="para3">
              <img src="/images/marina.jpg" />
              <p>
                After India's independence in 1947, Madras continued to expand
                as a major metropolitan city. In 1996, the city was officially
                renamed Chennai, reflecting its historical and cultural
                identity. Today, Chennai is one of India's largest cities and is
                known for its thriving automobile industry, information
                technology sector, world-class healthcare facilities,
                educational institutions, and vibrant cultural traditions. The
                city successfully blends its rich heritage with modern
                development, making it one of the most important urban centers
                in the country.
              </p>
            </div>

            <div className="para4">
              <p>
                After India's independence in 1947, Madras continued to expand
                as a major metropolitan city. In 1996, the city was officially
                renamed Chennai, reflecting its historical and cultural
                identity. Today, Chennai is one of India's largest cities and is
                known for its thriving automobile industry, information
                technology sector, world-class healthcare facilities,
                educational institutions, and vibrant cultural traditions. The
                city successfully blends its rich heritage with modern
                development, making it one of the most important urban centers
                in the country.
              </p>
              <img src="/images/mural.jpg" />
            </div>
          </div>
        </div>
        <hr />
        <div className="options">
          <h2>Explore more</h2>
          <div className="banner">
            <NavLink to="/beaches" className="category-link">
              <p>BEACHES</p>
              <p>&gt;</p>
            </NavLink>

            <NavLink to="/malls" className="category-link">
              <p>MALLS</p>
              <p>&gt;</p>
            </NavLink>

            <NavLink to="/theatres" className="category-link">
              <p>THEATRES</p>
              <p>&gt;</p>
            </NavLink>

            <NavLink to="/parks&zoos" className="category-link">
              <p>PARKS & ZOOS</p>
              <p>&gt;</p>
            </NavLink>

            <NavLink to="/museums" className="category-link">
              <p>MUSEUMS</p>
              <p>&gt;</p>
            </NavLink>

            <NavLink to="/foods" className="category-link">
              <p>FOODS</p>
              <p>&gt;</p>
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
