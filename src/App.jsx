import React from 'react';
// import ReactDOM from 'react-dom/client';
import './App.css';
import { Home } from './home.jsx';
import { Timer } from './timer.jsx';

// function App() {

//   return (
//     <div className="app-container">
//       <h1>Hello</h1>
//     </div>
//   );
// }

// export default App;

export class App extends React.Component {

	state =  {


	}
	render() {
		return (
			<>
				<div className="app-container">
					<h1>Hello World</h1>
					<Home />
					<Timer targetTime = {Date.now() + 1000 * 15} />
				</div>
			</>
		);
	}
}
