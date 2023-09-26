import { useState } from "react";

function Nav() {
  const [nav_bars, setBars] = useState("menue-bars unclicked");
  const [menue_Clicked, setMenueClicked] = useState(false);

  function menuUpdate() {
    if (!menue_Clicked) {
      setBars("menue-bars clicked");
    } else {
      setBars("menue-bars unclicked");
    }
    setMenueClicked(false);
  }

  return (
    <>
      <div className="burger-bars" onClick={menuUpdate}>
        <div className={nav_bars} ></div>
        <div className={nav_bars}></div>
        <div className={nav_bars}></div>
      </div>
    </>
  );
}

export default Nav;
