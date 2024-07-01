import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

function ListGroup() {
  let items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  /*  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };*/

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
