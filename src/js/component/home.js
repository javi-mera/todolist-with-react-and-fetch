import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

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

		let deleteTask = value => {
			this.state.todos.map(element => {
				if (element != value.target.value) {
					this.state.todos.splice(element);
				}
			});
			this.setState({ todos: [...this.state.todos] });
		};

		let tasksToRender = this.state.todos.map(task => {
			return (
				<li key={task}>
					<div className="view">
						<label>{task}</label>
						<button
							onClick={() => deleteTask(event)}
							className="destroy"
							value="Destroy">
							x
						</button>
					</div>
				</li>
			);
		});
		return (
			<div>
				<input onKeyDown={event => addTask(event)} />
				<ul>{tasksToRender}</ul>
			</div>
		);
	}
}
