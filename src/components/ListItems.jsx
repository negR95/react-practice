import { React } from "react";
import { nanoid } from "nanoid";
import "./ListItem.css";

class ListItems extends React.Component {
  constructor(props) {
    super(props)


    this.state = [
      "Negar",
      "Asal",
      "Bagher",
      "Sadegh",
      "Kazem",
      "Nila"
    ]
  }

  render() {
    const { items } = this.state;
    const LiList = items.map(item => {
      return <li key={nanoid()}>{item}
        <button onClick={() => {
          const index = this.state.item.indexOf(item);
          const itemsCopy = [...this.state.item];
          this.state.items.splice(index, 1);
          this.setState({
            items: itemsCopy
          })
        }}>X</button>
      </li>
    })
    
    return (
      <div className="unorder-list">
        <h2>CHILDREN List</h2>
        <ul>{LiList}</ul>
      </div>
    );
  }
}

export default ListItems;