import Accordion from "./components/Accordion";

const items = [
  {
    title: "ihfehqkghkqgjqe 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu luctus quam, at sollicitudin dolor.",
  },
  {
    title: "ringilla augue 2",
    content:
      "Duis fringilla augue ac velit laoreet, id pharetra dolor semper. Ut velit ante, ullamcorper in aliquet quis, commodo vel ex",
  },
  {
    title: "ringilla augue 3",
    content:
      "Praesent ut ipsum augue. Donec convallis commodo ex, quis auctor sem molestie nec. Phasellus eu turpis dictum, euismod velit sit amet, fermentum dolor.",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
