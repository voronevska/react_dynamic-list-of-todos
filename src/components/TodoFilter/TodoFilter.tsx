import { FC } from 'react';
import { Statuses } from '../../types/Statuses';

interface Props {
  status: string;
  query: string;
  onStatusChange: (status: Statuses) => void;
  onQueryChange: (query: string) => void;
}

export const TodoFilter: FC<Props> = ({
  status,
  query,
  onStatusChange,
  onQueryChange,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          value={status}
          onChange={(event) => onStatusChange(event.target.value as Statuses)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {query.length > 0 && (
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => onQueryChange('')}
          />
        </span>
      )}
    </p>
  </form>
);
