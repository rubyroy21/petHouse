import "./Navbar.css";
// import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from "react-router-dom";

export const Navbar = ()=>{
    return <div className="nav">
                  <div className="left">
                       PetHouse
                  </div>
                  <div className="right">
                        <Link className="Link" to="/">Home</Link>
                        <Link className="Link" to="/about">About</Link>
                        <Link className="Link" to="/create">Create Data</Link>
                  </div>
           </div>
}