import React from "react";
import Sword from "../imgs/sword.png";

function Instructions() {
	return (
		<div>
			
			<div className="image-text">
				<div className="text"><p className="large">FANTASTIC!</p>

					<p className="medium">To save chippy you need to find 10 swords.</p>
					<p className="medium">
						The Swords are hidding inside of special questions.
					</p>
					<p className="medium">
						If you answer a question correctly, you find the sword!
					</p>
				</div>
        <div className="image">
          <img src={Sword} alt="cartoon sword" />
        </div>
			</div>
		</div>
	);
}
export default Instructions;
