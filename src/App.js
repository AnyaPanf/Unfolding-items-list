import { useState } from "react";
import { NestedCategoriesSelector } from "./components/NestedCategoriesSelector";
import { data } from "./Data";


function App() {
  const [selectedIds, setSelectedIds] = useState([]);

  return (
    <div className="container">
      <NestedCategoriesSelector data={data} setSelectedIds={setSelectedIds} selectedIds={selectedIds} />
      <div>
        <h3>Все выбранные категории</h3>
        <ul>
          {selectedIds.flatMap(id => (
            <li>{id} {data.find(obj => obj.id === +id).name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
