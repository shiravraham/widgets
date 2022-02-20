// import Accordion from "./components/Accordion";
import { useState } from "react";
import Dropdown from "./components/Dropdown";
// import Search from "./components/Search";

// const items = [
//   {
//     title: "ihfehqkghkqgjqe 1",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu luctus quam, at sollicitudin dolor.",
//   },
//   {
//     title: "ringilla augue 2",
//     content:
//       "Duis fringilla augue ac velit laoreet, id pharetra dolor semper. Ut velit ante, ullamcorper in aliquet quis, commodo vel ex",
//   },
//   {
//     title: "ringilla augue 3",
//     content:
//       "Praesent ut ipsum augue. Donec convallis commodo ex, quis auctor sem molestie nec. Phasellus eu turpis dictum, euismod velit sit amet, fermentum dolor.",
//   },
// ];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "Blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="App">
      {/* <Accordion items={items} /> */}
      {/* <Search></Search> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        ></Dropdown>
      ) : null}
    </div>
  );
}

export default App;
