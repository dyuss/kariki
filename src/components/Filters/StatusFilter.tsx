import { useContext } from 'preact/hooks';
import { AppStateContext } from '../../contexts/AppState';

export const StatusFilter = () => {
  const { availableStatuses, filters } = useContext(AppStateContext);
  const { statuses: selectedStatuses } = filters.value;

  const updateStatuses = (nextStatuses: string[]) => {
    filters.value = {
      ...filters.value,
      statuses: nextStatuses,
    };
  };

  return (
    <div className="status-filter headings">
      <h6>Статус</h6>
      {
        availableStatuses.map((status) => (
          <label
            htmlFor={status}
            key={status}
          >
            <input
              type="checkbox"
              id={status}
              checked={selectedStatuses.includes(status)}
              onChange={() => {
                updateStatuses(
                  selectedStatuses.includes(status)
                    ? selectedStatuses.filter((item) => item !== status)
                    : selectedStatuses.concat(status),
                );
              }}
            />
            <span className="checkable">{status}</span>
          </label>
        ))
      }
    </div>
  );
};
