import { useState } from "react";
import { NestedCategoriesSelector } from "./components/NestedCategoriesSelector";
import { data } from "./domain/Data";
import AppCss from './App.module.css';

function App() {
  const [selectedIds, setSelectedIds] = useState([]);

  return (
    <div className={AppCss.container}>
      <h3>Выберите категории:</h3>
      <NestedCategoriesSelector data={data} setSelectedIds={setSelectedIds} selectedIds={selectedIds} />
      {/* <div className={AppCss.selected}>
        <h3>Все выбранные категории</h3>
        <ul className={AppCss.selectedList}>
          {selectedIds.map(id => {
            const category = data.find(obj => obj.id === +id);
            if (!category) return null;
            return <li className="topItems" key={id}>{category.name}</li>;
          })}
        </ul>
      </div> */}
    </div>
  );
}

export default App;