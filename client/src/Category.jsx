import {useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Template from "./Template"
import "./category.css"
import Errorhandler from "./Errorhandler";
import Skeleton from "./Skeleton";

function Category({ category }) {
  const [places,setPlaces]=useState([]);
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(false)

  useEffect(() => {
  setLoading(true)
  fetch(`http://localhost:5000/places/${category}`)
    .then(async(res)=>{
      const data = await res.json();
      if (!res.ok) {
      throw new Error(data.message);
    }
      return data;
    })
    .then((data) => {
      setPlaces(data),
      setError("")})
    .catch((err) => {
      setPlaces([]);

      if (err instanceof TypeError) {
        setError("Unable to connect to the server. Please try again later.");
      } else {
        setError(err.message);
      }
    })
    .finally(() => {
      setLoading(false);
    });
}, [category]);

  return (
    <div className="category-page">
      {loading ? (

    <>
      <Header />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>

  ) : error ? (
        <Errorhandler message={error}/>
      ):(
        <div className="category-body">
        <Header />
        {places.map((place, index) => (
          <Template
            key={place._id}
            image={place.image}
            title={place.title}
            overview={place.overview}
            tips={place.tips}
            location={place.location}
            opening={place.opening}
          />
        ))}
      <Footer />
      </div>
      )
      }

    </div>
  );
}
export default Category;