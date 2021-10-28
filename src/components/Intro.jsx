import React from "react";
import policeImg from "../police-standing.png";

function Header() {
	return (
		<header className="Header">
			<div className="welcome">
				<p className="x-large">HI MJ!</p>
			</div>

			<div className="image-text">
        <div className="text">
        <p className="medium ">
					We need your help! The BAD MAN has stolen Super Chippy, the Super Hero
					Dog!
				</p>
        <p className="medium">
          Can you help us, MJ?
        </p>
        <button className="btn">YES</button>
        <button className="btn">NO</button>
        </div>
				<img src={policeImg} alt="police person" className="policeImg" />
			</div>
		</header>
	);
}

export default Header;
