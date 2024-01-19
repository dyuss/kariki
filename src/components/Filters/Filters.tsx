import { ConditionFilter } from './ConditionFilter';
import { Sorting } from './Sorting';
import { StatusFilter } from './StatusFilter';
import { TitleFilter } from './TitleFilter';

export const Filters = () => (
  <div className="filters">
    <Sorting />
    <TitleFilter />
    <StatusFilter />
    <ConditionFilter />
  </div>
);
