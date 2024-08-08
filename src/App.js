import { useState } from "react";
import { NestedCategoriesSelector } from "./components/NestedCategoriesSelector";
import { data } from "./domain/Data";
import AppCss from './App.module.css';

function App() {
  const [selectedIds, setSelectedIds] = useState([]);

  return (
    <div className={AppCss.container}>
      <NestedCategoriesSelector data={data} setSelectedIds={setSelectedIds} selectedIds={selectedIds} />
      <div className={AppCss.selected}>
        <h3>Все выбранные категории</h3>
        <ul className={AppCss.selectedList}>
          {selectedIds.map(id => (
            <li className="topItems">{data.find(obj => obj.id === +id).name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;