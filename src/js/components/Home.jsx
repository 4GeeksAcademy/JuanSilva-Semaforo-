import React, { useState } from "react";

const Home = () => {
	const [verdeEncendido, setVerdeEncendido] = useState(false);
	const [rojoEncendido, setRojoEncendido] = useState(false);
	const [amarilloEncendido, setAmarilloEncendido] = useState(false);

	const encenderRojo = () => {
		setVerdeEncendido(false);
		setRojoEncendido(true);
		setAmarilloEncendido(false);
	};

	const encenderAmarillo = () => {
		setVerdeEncendido(false);
		setRojoEncendido(false);
		setAmarilloEncendido(true);
	};

	const encenderVerde = () => {
		setVerdeEncendido(true);
		setRojoEncendido(false);
		setAmarilloEncendido(false);
	};

	return (
		<div className="text-center min-vh-100"
			style={{
				background: "linear-gradient(to bottom, #a3a3a3ff, #313233ff)"
			}}>

			<div className="bg-dark rounded-3 p-4 flex-column align-items-center d-inline-block my-5">

				<div
					onClick={encenderRojo}
					className="rounded-circle my-3"
					style={{
						width: 90,
						height: 90,
						backgroundColor: "red",
						boxShadow: rojoEncendido ? "0 0 25px 10px rgba(255, 0, 0, 0.9)" : "none"
					}}
				></div>

				<div
					onClick={encenderAmarillo}
					className="rounded-circle my-3"
					style={{
						width: 90,
						height: 90,
						backgroundColor: "yellow",
						boxShadow: amarilloEncendido ? "0 0 25px 10px rgba(255, 255, 0, 0.9)" : "none"
					}}
				></div>

				<div
					onClick={encenderVerde}
					className="rounded-circle my-3"
					style={{
						width: 90,
						height: 90,
						backgroundColor: "green",
						boxShadow: verdeEncendido ? "0 0 25px 10px rgba(0, 255, 0, 0.9)" : "none"
					}}
				></div>
			</div>

		</div >

	);
};

export default Home;