import { StatusFilter } from './StatusFilter';
import { TitleFilter } from './TitleFilter';

export const Filters = () => (
  <div className="filters">
    <TitleFilter />
    <StatusFilter />
  </div>
);
