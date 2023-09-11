import React, { useState } from "react";

function Nav() {
  const [nav_bars, setBars] = useState("menue-bars unclicked");
  const [nav_menue, setNavMenue] = useState("menue hidden");
  const [menue_Clicked, setMenueClicked] = useState(false);

  function menuUpdate() {
    if (!menue_Clicked) {
      setBars("menue-bars clicked");
      setNavMenue("menue visible");
    } else {
      setBars("menue-bars unclicked");
      setNavMenue("menue hidden");
    }
  }

  return (
    <div className="navigation">
      <div className="burger-bars" onClick={menuUpdate}>
        <div className={nav_bars}></div>
        <div className={nav_bars}></div>
        <div className={nav_bars}></div>
      </div>
      <div className={nav_menue}></div>
    </div>
  );
}

export default Nav;
