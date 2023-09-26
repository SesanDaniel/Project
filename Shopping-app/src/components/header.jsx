import Button from "./buttons";
import logo from "../assets/images/APPARELS.png";

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
    </div>
  );
}

export default Header;
