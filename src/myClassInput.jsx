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
      count: 0,
      editingTodoId: -1,
      editingInputVal: "",
    };

    // bind the methods to the *class*
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteButtonHandler = this.deleteButtonHandler.bind(this);
    this.editButtonHandler = this.editButtonHandler.bind(this);
    this.reSubmitHandler = this.reSubmitHandler.bind(this);
    this.handleEditValChange = this.handleEditValChange.bind(this);
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
      ...state,
      todos: state.todos.concat({
        id: crypto.randomUUID(),
        todo: state.inputVal,
      }),
      count: state.count + 1,
    }));
  }

  deleteButtonHandler(e) {
    e.preventDefault();
    const id = e.target.id;
    this.setState((state) => ({
      ...state,
      // i guess the "this" for state comes from the "this" of setState?
      // beacuse array functions don't have `this`.
      // OR react itself passes the state, binding the `this` for particular
      // component. (I prefer the first solution)
      todos: state.todos.toSpliced(
        state.todos.indexOf(state.todos.find((todo) => todo.id === id)),
        1,
      ),
      count: state.count - 1,
    }));
  }

  handleEditValChange(e) {
    // also, the setState receives a *callback* as parameter
    // every time, and takes current state as input
    this.setState((state) => ({
      ...state,
      editingInputVal: e.target.value,
    }));
  }

  editButtonHandler(e) {
    e.preventDefault();
    const id = e.target.id;
    this.setState((state) => ({
      ...state,
      editingTodoId: id,
    }));
  }

  reSubmitHandler(e) {
    e.preventDefault();
    const id = e.target.id;
    this.setState((state) => ({
      ...state,
      todos: state.todos.toSpliced(
        state.todos.indexOf(state.todos.find((todo) => todo.id === id)),
        1,
        {
          id: state.todos.find((todo) => todo.id === id).id,
          todo: state.editingInputVal,
        },
      ),
      editingInputVal: "",
      editingTodoId: -1,
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
        <div className="count">Todos count: {this.state.count}</div>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <Fragment key={todo.id}>
                <li>
                  {todo.id === this.state.editingTodoId ? (
                    <input
                      type="text"
                      id={todo.id}
                      placeholder="New task"
                      value={this.state.editingInputVal}
                      onChange={this.handleEditValChange}
                    />
                  ) : (
                    todo.todo
                  )}
                </li>
                <button
                  className="delete"
                  id={todo.id}
                  onClick={this.deleteButtonHandler}
                >
                  Delete
                </button>
                {this.state.editingTodoId === todo.id ? (
                  <button
                    className="reSubmit"
                    id={todo.id}
                    onClick={this.reSubmitHandler}
                  >
                    Resubmit{" "}
                  </button>
                ) : (
                  <button
                    className="edit"
                    id={todo.id}
                    onClick={this.editButtonHandler}
                  >
                    Edit
                  </button>
                )}
              </Fragment>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
