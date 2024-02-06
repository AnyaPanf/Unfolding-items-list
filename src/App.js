import { useState } from "react";
import { NestedCategoriesSelector } from "./components/NestedCategoriesSelector";
import { data } from "./domain/Data";

function App() {
  const [selectedIds, setSelectedIds] = useState([]);

  return (
    <div className="container">
      <NestedCategoriesSelector data={data} setSelectedIds={setSelectedIds} selectedIds={selectedIds} />
      <div className="selected">
        <h3>Все выбранные категории</h3>
        <ul className="selected__list">
          {selectedIds.map(id => (
            <li>{data.find(obj => obj.id === +id).name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
