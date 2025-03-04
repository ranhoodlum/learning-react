import { Component } from "react";
import { Fragment } from "react";

// props to constructor
class ClassInput extends Component {
  constructor(props) {
    super(props);
    // states are initialized as part of constructor
    // but since states shouldn't be mutated, we use
    // pre defined setState() to change this state
    // Q: should this name be *state* or can it be
    // something different?
    this.state = {
      todos: [],
      inputVal: "",
    };

    // bind the methods to the *class*
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteButtonHandler = this.deleteButtonHandler.bind(this);
  }

  handleInputChange(e) {
    // also, the setState receives a *callback* as parameter
    // every time, and takes current state as input
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    // all functions are bound to this component but the
    // state variables are unique to each instance of this
    // component
    this.setState((state) => ({
      todos: state.todos.concat({
        id: crypto.randomUUID(),
        todo: state.inputVal,
      }),
      inputVal: "",
    }));
  }

  deleteButtonHandler(e) {
    e.preventDefault();
    const id = e.target.id;
    this.setState((state) => ({
      // i guess the "this" for state comes from the "this" of setState?
      // beacuse array functions don't have `this`.
      todos: state.todos.toSpliced(
        state.todos.indexOf(state.todos.find((todo) => todo.id === id)),
        1,
      ),
    }));
  }

  // jsx goes inside render() method
  // react calls this method to get the jsx ?
  render() {
    return (
      <section>
        <h3>my implementation</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <Fragment key={todo.id}>
                <li>{todo.todo}</li>
                <button
                  className="delete"
                  id={todo.id}
                  onClick={this.deleteButtonHandler}
                >
                  Delete
                </button>
              </Fragment>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
