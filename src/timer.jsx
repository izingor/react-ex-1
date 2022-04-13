import React from 'react';

export class Timer extends React.Component {
	state = {
		target: null,
		isLast: false,
	};

	intervalId;
	timeDiff;

	componentDidMount() {
		// console.log(this.props.targetTime);
		this.intervalId = setInterval(() => {
			const targetTime = this.props.targetTime;
			const timeNow = Date.now();
			this.timeDiff = new Date(targetTime - timeNow);
			if (this.timeDiff < 300) {
				clearInterval(this.intervalId);
				return;
			}
			this.setState({
				target: this.timeDiff.toLocaleTimeString([], {
					minute: '2-digit',
					second: '2-digit',
				}),
			});
		}, 1000);
	}

	get lastSeconds() {
		return this.timeDiff < 10 * 1000 ? true : false;
	}

	render() {
		// console.log('rendering');
		return (
			<>
				<div className="timer-container">
					<h3 className={this.lastSeconds ? 'last' : null}>
						{this.state.target}
					</h3>
				</div>
			</>
		);
	}
}
