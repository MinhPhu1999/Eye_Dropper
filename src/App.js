import { useState } from 'react';

import './App.css';

function App() {
	const [number, setNumber] = useState(1);
	const [color, setColor] = useState('');

	const randomNumber = () => {
		setColor('');
		const random = Math.floor(Math.random() * 200);
		setNumber(random);
	};

	const pickColor = async () => {
		const eyeDropper = new window.EyeDropper();
		const { sRGBHex } = await eyeDropper.open();
		setColor(sRGBHex);
	};

	const copyColor = () => {
		navigator.clipboard.writeText(color);
	};

	return (
		<div className="App">
			<div className="group_image">
				<img
					src={`https://picsum.photos/id/${number}/536/354`}
					alt="src"
				/>

				<div className="color">
					{color ? (
						<button
							className="button"
							type="button"
							onClick={copyColor}
							style={{ backgroundColor: color }}
						>
							{color}
						</button>
					) : null}
				</div>
			</div>
			<div className="group_button">
				<button className="button" type="button" onClick={randomNumber}>
					Random Image
				</button>
				<button className="button" type="button" onClick={pickColor}>
					Pick Color
				</button>
			</div>
		</div>
	);
}

export default App;
