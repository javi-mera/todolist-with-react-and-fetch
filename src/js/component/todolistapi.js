import React from "react";

export class ToDoListApi extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			value: []
		};
	}

	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/javi-mera", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				for (let x in data) {
					this.setState({ todos: [...this.state.todos, data[x]] });
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

	componentDidUpdate() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/javi-mera", {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(this.state.todos)
		});
	}

	addToList = e => {
		if (e.key === "Enter") {
			console.log(this.state.value);
			if (e.target.value.split(" ").join("").length > 0) {
				this.setState({
					todos: [
						...this.state.todos,
						{ label: e.target.value, done: false }
					]
				});
			}
			e.target.value = "";
		}
	};

	deleteFromList = index => {
		this.setState({
			todos: this.state.todos.filter((item, pos) => pos !== index)
		});
	};

	render() {
		return (
			<div>
				<label>
					<input
						type="text"
						placeholder="And now...?"
						onKeyPress={this.addToList}
					/>
				</label>

				<div>
					<ul>
						{this.state.todos.map((todo, index) => {
							return (
								<li key={index}>
									{todo.label}
									<button
										onClick={() =>
											this.deleteFromList(index)
										}>
										X
									</button>
								</li>
							);
						})}
					</ul>
					<h3 className="text-center">
						You have {this.state.todos.length} things to do!
					</h3>
				</div>
			</div>
		);
	}
}
