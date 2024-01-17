import { Sorting } from './Sorting';
import { StatusFilter } from './StatusFilter';
import { TitleFilter } from './TitleFilter';

export const Filters = () => (
  <div className="filters">
    <Sorting />
    <TitleFilter />
    <StatusFilter />
  </div>
);
