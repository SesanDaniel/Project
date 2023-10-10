import logo from "../assets/images/APPARELS.png";
import search from '../assets/images/magnifying-glass.png';

function Header() {
  return (
    <div className="header">
      <div className="header-items">
      <img src={logo} alt="logo" />
        <ul className="nav-list">
          <li><a href="">About</a></li>
          <li><a href="">Brands</a></li>
          <li><a href="">Aura</a></li>
          <li><a href="">Locations</a></li>
          <li><a href="">Customer Zones</a></li>
          <li><a href="">Media Centre</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Contact Us</a></li>
          <img src={search} alt="" style={{width: "2.5rem", marginLeft: "1.5rem", cursor: "pointer"}}/>
        </ul>
        </div>
    </div>
  );
}

export default Header;
