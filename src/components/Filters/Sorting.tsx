import { useContext } from 'preact/hooks';
import { AppStateContext, SortType } from '../../contexts/AppState';

export const Sorting = () => {
  const { sorting } = useContext(AppStateContext);

  return (
    <div className="title-filter headings">
      <h6>Сортировка</h6>
      <select
        value={sorting.value}
        onChange={(event) => {
          sorting.value = event.currentTarget.value as SortType;
        }}
      >
        <option value="id">По обновлению</option>
        <option value="price">По цене</option>
        <option value="title">По названию</option>
      </select>
    </div>
  );
};
