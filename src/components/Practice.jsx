import React, { useEffect, useRef } from "react";
import SuperMan from "../imgs/super-man.png";
import Batman from "../imgs/batman.png";
import WonderWoman from "../imgs/wonderWoman.png";
import Groot from "../imgs/groot.png";
import Turtle from "../imgs/turtle.png";
import CrazyGirl from "../imgs/crazyGirl.png";
import Spiderman from "../imgs/spiderman.png";
import HornWoman from "../imgs/hornWoman.png";
import Thor from "../imgs/thor.png";
import RedMan from "../imgs/redman.png";
import Wolverine from "../imgs/wolverine.png";
import { gsap } from "gsap";

function Practice() {
	const TL = gsap.timeline();
	const coverBox = useRef();

	const numOne = useRef();
	const numOnesItems = useRef();
	const numOneNums = useRef();

	const numTwo = useRef();
	const numTwoNum = useRef();
	const numTwoImgs = useRef([]);

	console.log(numTwoImgs);

	useEffect(() => {
		TL.to(numOneNums.current, { fontSize: "120%", delay: 1, duration: 1 })
			.to(numOnesItems.current, { height: "30%", width: "30%", duration: 1 })
			.to(numOne.current, { backgroundColor: "blue", duration: 0.5 })
			.to(numOne.current, { x: -2000, duration: 1 })
			.to(numOne.current, { display: "none", duration: 0 })

			.to(numTwo.current, { autoAlpha: 1, display: "block", duration: 1.3 })
			.to(numTwoNum.current, { fontSize: "120%", delay: 1, duration: 1 })
			.to(numTwoImgs.current, {
				rotation:360, y:-100, stagger:1
			}, [])
			.to(numTwo.current, { x: 2000, duration: 3, delay: 3 })
			.to(numTwo.current, { display: "none" });
	});
	return (
		<div>
			<div className="text">
				<p className="medium">
					Chippy Needs you, MJ. Let's practice before we start the challenge!
				</p>
			</div>

			<div className="cardsContainer">
				<div className="numberCard oneCard" ref={numOne}>
					<div className="half-half">
						<div className="num">
							<p ref={numOneNums}>1</p>
						</div>
						<div className="imgs">
							<img src={SuperMan} alt="cartoon superman" ref={numOnesItems} />
						</div>
					</div>
					<div className="flip f2" ref={coverBox}></div>
				</div>

				<div className="numberCard twoCard" ref={numTwo}>
					<div className="half-half">
						<div className="num">
							<p ref={numTwoNum}>2</p>
						</div>
						<div className="imgs">
							<img src={Batman} alt="cartoon superman" ref={element => {numTwoImgs.current[0] = element;}}  />
							<img src={Batman} alt="cartoon superman" ref={element => {numTwoImgs.current[1] = element;}} />
						</div>
					</div>
				</div>
				<div className="numberCard threeCard">
					<div className="half-half ">
						<div className="num">3</div>
						<div className="imgs">
							<img src={WonderWoman} alt="cartoon superman" />
							<img src={WonderWoman} alt="cartoon superman" />
							<img src={WonderWoman} alt="cartoon superman" />
						</div>
					</div>
				</div>
				<div className="numberCard fourCard">
					<div className="half-half ">
						<div className="num">4</div>
						<div className="imgs">
							<img src={Groot} alt="cartoon groot" />
							<img src={Groot} alt="cartoon groot" />
							<img src={Groot} alt="cartoon groot" />
							<img src={Groot} alt="cartoon groot" />
						</div>
					</div>
				</div>
				<div className="numberCard fiveCard">
					<div className="half-half ">
						<div className="num">5</div>
						<div className="imgs">
							<img src={Turtle} alt="cartoon turtle" />
							<img src={Turtle} alt="cartoon turtle" />
							<img src={Turtle} alt="cartoon turtle" />
							<img src={Turtle} alt="cartoon turtle" />
							<img src={Turtle} alt="cartoon turtle" />
						</div>
					</div>
				</div>
				<div className="numberCard sixCard">
					<div className="half-half ">
						<div className="num">6</div>
						<div className="imgs">
							<img src={Spiderman} alt="cartoon spiderman" />
							<img src={Spiderman} alt="cartoon spiderman" />
							<img src={Spiderman} alt="cartoon spiderman" />
							<img src={Spiderman} alt="cartoon spiderman" />
							<img src={Spiderman} alt="cartoon spiderman" />
							<img src={Spiderman} alt="cartoon spiderman" />
						</div>
					</div>
				</div>
				<div className="numberCard sevenCard">
					<div className="half-half ">
						<div className="num">7</div>
						<div className="imgs">
							<img src={CrazyGirl} alt="cartoon spiderman" />
							<img src={CrazyGirl} alt="cartoon spiderman" />
							<img src={CrazyGirl} alt="cartoon spiderman" />
							<img src={CrazyGirl} alt="cartoon spiderman" />
							<img src={CrazyGirl} alt="cartoon spiderman" />
							<img src={CrazyGirl} alt="cartoon spiderman" />
							<img src={CrazyGirl} alt="cartoon spiderman" />
						</div>
					</div>
				</div>
				<div className="numberCard eightCard">
					<div className="half-half ">
						<div className="num">8</div>
						<div className="imgs">
							<img src={Thor} alt="cartoon thor" />
							<img src={Thor} alt="cartoon thor" />
							<img src={Thor} alt="cartoon thor" />
							<img src={Thor} alt="cartoon thor" />
							<img src={Thor} alt="cartoon thor" />
							<img src={Thor} alt="cartoon thor" />
							<img src={Thor} alt="cartoon thor" />
							<img src={Thor} alt="cartoon thor" />
						</div>
					</div>
				</div>
				<div className="numberCard nineCard">
					<div className="half-half ">
						<div className="num">9</div>
						<div className="imgs">
							<img src={HornWoman} alt="cartoon hornwoman" />
							<img src={Thor} alt="cartoon thor" />
							<img src={HornWoman} alt="cartoon hornwoman" />
							<img src={Thor} alt="cartoon thor" />
							<img src={HornWoman} alt="cartoon hornwoman" />
							<img src={Thor} alt="cartoon thor" />
							<img src={HornWoman} alt="cartoon hornwoman" />
							<img src={Thor} alt="cartoon thor" />
							<img src={HornWoman} alt="cartoon hornwoman" />
						</div>
					</div>
				</div>
				<div className="numberCard tenCard">
					<div className="half-half ">
						<div className="num">10</div>
						<div className="imgs">
							<img src={Wolverine} alt="cartoon thor" />
							<img src={RedMan} alt="cartoon thor" />
							<img src={Wolverine} alt="cartoon thor" />
							<img src={RedMan} alt="cartoon thor" />
							<img src={Wolverine} alt="cartoon thor" />
							<img src={RedMan} alt="cartoon thor" />
							<img src={Wolverine} alt="cartoon thor" />
							<img src={RedMan} alt="cartoon thor" />
							<img src={Wolverine} alt="cartoon thor" />
							<img src={RedMan} alt="cartoon thor" />
						</div>
					</div>
				</div>
				<div className="numberCard elevenCard">
					<div className="half-half ">
						<div className="num">11</div>
						<div className="imgs">
							<img src={Groot} alt="cartoon thor" />
							<img src={Spiderman} alt="cartoon thor" />
							<img src={Groot} alt="cartoon thor" />
							<img src={Spiderman} alt="cartoon thor" />
							<img src={Groot} alt="cartoon thor" />
							<img src={Spiderman} alt="cartoon thor" />
							<img src={Groot} alt="cartoon thor" />
							<img src={Spiderman} alt="cartoon thor" />
							<img src={Groot} alt="cartoon thor" />
							<img src={Spiderman} alt="cartoon thor" />
							<img src={Groot} alt="cartoon thor" />
						</div>
					</div>
				</div>
				<div className="numberCard twelveCard">
					<div className="half-half">
						<div className="num">12</div>
						<div className="imgs">
							<img src={SuperMan} alt="cartoon thor" />
							<img src={Batman} alt="cartoon thor" />
							<img src={HornWoman} alt="cartoon thor" />
							<img src={Spiderman} alt="cartoon thor" />
							<img src={Groot} alt="cartoon thor" />
							<img src={CrazyGirl} alt="cartoon thor" />
							<img src={SuperMan} alt="cartoon thor" />
							<img src={Batman} alt="cartoon thor" />
							<img src={HornWoman} alt="cartoon thor" />
							<img src={Spiderman} alt="cartoon thor" />
							<img src={Groot} alt="cartoon thor" />
							<img src={CrazyGirl} alt="cartoon thor" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Practice;
