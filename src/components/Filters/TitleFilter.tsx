import { useContext } from 'preact/hooks';
import { ChangeEvent } from 'preact/compat';
import { AppStateContext } from '../../contexts/AppState';

export const TitleFilter = () => {
  const { filters } = useContext(AppStateContext);
  const { title } = filters.value;

  const updateTitle = (nextTitle: string) => {
    filters.value = {
      ...filters.value,
      title: nextTitle,
    };
  };

  return (
    <div className="title-filter headings">
      <h6>Название</h6>
      <input
        value={title}
        style={{ marginBottom: 0 }}
        onInput={(event: ChangeEvent<HTMLInputElement>) => {
          updateTitle(event.currentTarget.value);
        }}
      />
    </div>
  );
};
