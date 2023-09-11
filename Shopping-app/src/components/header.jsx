import Button from "./buttons";
import logo from "../../assets/images/APPARELS.png";
import Nav from "./navbar";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="btn-group">
        <Button text="Home" />
        <Button text="Signup/Login" />
        <Button text="About" />
        <Button text="Contact" />
      </div>
      <Nav />
    </div>
  );
}

export default Header;
