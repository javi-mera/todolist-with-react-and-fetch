import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}

	render() {
		let addTask = value => {
			if (value.keyCode == 13) {
				this.setState({
					todos: [...this.state.todos, value.target.value]
				});
			}
		};

		let removeItem = value => {
			this.setState({
				todos: this.state.todos.filter(element => element != value)
			});
		};

		let tasksToRender = this.state.todos.map(task => {
			return (
				<li
					className="list-group-item col justify-content-between"
					key={task}>
					<div className="row justify-content-between">
						<label className="col-11">{task}</label>
						<div className="col-1">
							<button
								onClick={() => removeItem(task)}
								className=""
								value="">
								x
							</button>
						</div>
					</div>
				</li>
			);
		});
		return (
			<div>
				<input
					placeholder="What needs to be done?"
					onKeyDown={event => addTask(event)}
				/>
				<ul>{tasksToRender}</ul>
				<h3 className="text-center">
					You have {this.state.todos.length} things to do!
				</h3>
			</div>
		);
	}
}
