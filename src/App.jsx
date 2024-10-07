import { useEffect, useState } from "react";
import "./App.css";
import Title from "./title.jsx";
import Entry from "./entry.jsx";
import Info from "./info.jsx";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const pokemon = encodeURIComponent(name.toLowerCase());
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [name]);

  return (
    <div className="App">
      <Title text="Poké Finder" />
      <Entry action={setName} />
      <Info name={name} data={data} />
    </div>
  );
}
