import { useContext } from 'preact/hooks';
import { AppStateContext } from '../../contexts/AppState';
import { Game } from '../../types/Game';
import { translateCondition } from '../List/List';

export const ConditionFilter = () => {
  const { filters } = useContext(AppStateContext);
  const { conditions: selectedConditions } = filters.value;

  const updateConditions = (nextConditions: Game['condition'][]) => {
    filters.value = {
      ...filters.value,
      conditions: nextConditions,
    };
  };

  return (
    <div className="status-filter headings">
      <h6>Состояние</h6>
      {
        ['new', 'used'].map((condition: Game['condition']) => (
          <label
            htmlFor={condition}
            key={condition}
          >
            <input
              type="checkbox"
              id={condition}
              checked={selectedConditions.includes(condition)}
              onChange={() => {
                updateConditions(
                  selectedConditions.includes(condition)
                    ? selectedConditions.filter((item) => item !== condition)
                    : selectedConditions.concat(condition),
                );
              }}
            />
            <span className="checkable">{translateCondition(condition)}</span>
          </label>
        ))
      }
    </div>
  );
};
