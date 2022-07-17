import "./ListItem.css";
import { nanoid } from "nanoid";

function ListItem ({name}) {
const names = [
  "Negar",
  "Asal",
  "Bagher",
  "Sadegh",
  "Kazem",
  "Nila"
]

const LiList = names.map(item => {
  return <li key={nanoid()}>{item}</li>
})

console.log(LiList);

  return (
    <div className="unorder-list">
    <h2>CHILDREN List</h2>
    <ul>{LiList}</ul>
    </div>
  );
} 


export default ListItem;

