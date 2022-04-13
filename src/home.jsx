import React from 'react';

// import ReactDOM from 'react-dom';

export class Home extends React.Component {
	state = {
		timeNow: null,
		isClicked: false,
		season: null,
	};
	intervalId;

	componentDidMount() {
		console.log('Mounted');

		this.intervalId = setInterval(() => {
			this.setState({ timeNow: this.getTimeNow });
		}, 1000);

		this.setState({ season: this.getSeasonNow });
	}

	componentWillUnmount(){ 
		clearInterval(this.intervalId);
	}
	get getTimeNow() {
		var timeStamp = new Date();

		return timeStamp.toLocaleTimeString([], {
			minute: '2-digit',
			second: '2-digit',
		});
	}

	get getSeasonNow() {
		const timeNow = new Date();
		const month = timeNow.getMonth();
		if (month < 3) {
			return 'winter season-image';
		}else if(3 <= month && month <= 5){
			return 'spring season-image'
		}else if(5 < month && month <= 8){
			return 'summer season-image'
		} else{
			return 'autumn season-image'
		}	
	}

	handleClick = () => {
		this.setState({isClicked: !this.state.isClicked});
	};

	render() {
		return (
			<>
				<div
					className={
						this.state.isClicked ? 'clock-container clicked' : 'clock-container'
					}
					onClick={this.handleClick}
				>
					<h2>Hello I am home page</h2>
					<p>{this.state.timeNow}</p>
					<div className={this.state.season}></div>
				</div>
			</>
		);
	}
}
