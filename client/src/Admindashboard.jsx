import { NavLink } from "react-router-dom";
import "./admindashboard.css"

function Admindashboard(){
    return(
        <div className="dashboard">
            <div className="adminheader">
                <h1>Welcome Admin!</h1>
                <p>You can edit places here</p>
            </div>
            <div className="placesoption">
                <NavLink to="/beaches" className="category-link">
                <p>BEACHES</p>
                </NavLink>

                <NavLink to="/malls" className="category-link">
                <p>MALLS</p>
                </NavLink>

                <NavLink to="/theatres" className="category-link">
                <p>THEATRES</p>
                </NavLink>

                <NavLink to="/parks&zoos" className="category-link">
                <p>PARKS & ZOOS</p>
                </NavLink>

                <NavLink to="/museums" className="category-link">
                <p>MUSEUMS</p>
                </NavLink>

                <NavLink to="/foods" className="category-link">
                <p>FOODS</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Admindashboard;