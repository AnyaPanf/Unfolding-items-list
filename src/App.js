import { useState } from "react";
import { NestedCategoriesSelector } from "./components/NestedCategoriesSelector";
import { data } from "./Data";


function App() {
  const [selectedIds, setSelectedIds] = useState([12669, 12723]);

  return (
    <div className="container">
      <NestedCategoriesSelector data={data} />
      <div>
        <h3>Все выбранные категории</h3>
        <ul>
          {selectedIds.map(id => (
            <li>{id} {data.find(obj => obj.id === id).name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
