import { nanoid } from "nanoid";
import { Component } from "react";
import "./ListItem.css";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  state = {
    items: [
      { name: "Negar", id: nanoid() },
      { name: "Emad", id: nanoid() },
      { name: "Naser", id: nanoid() },
      { name: "Mahsa", id: nanoid() },
      { name: "Mani", id: nanoid() },
      { name: "Bahram", id: nanoid() },
    ],
  };

  handleDelete(id) {
    this.setState((prev) => ({
      items: prev.items.filter((item) => item.id !== id),
    }));
  }

  render() {
    const { items } = this.state;

    return (
      <div className="unorder-list">
        <h2>CHILDREN List</h2>

        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => this.handleDelete(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListItems;
