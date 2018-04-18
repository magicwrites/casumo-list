import React from 'react';

import CONSTANTS from './../constants'
import Discriminators from './discriminators/component';
import Sorter from './sorter/component';
import Spinner from './spinner/component';

import './style.css';

const Filters = ({ filters, onSortByBookName, onSortByBookAuthor, onFilterByBookGenre, onFilterByAuthorGender }) => {
  return (
    <div className="row">
      <div className="col-3">
        <h4>Sort by</h4>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'row' }}>
          <Sorter isActive={filters.sortBy === 'name'} onChange={onSortByBookName}>Book name</Sorter>
          <Sorter isActive={filters.sortBy === 'author.name'} onChange={onSortByBookAuthor}>Author name</Sorter>

          { filters.isUpdating && <Spinner>Sorting in progress...</Spinner> }
        </div>
      </div>

      <div className="col-9">
        <h4>Visible</h4>
        <div className="row">
          <div className="col-9">
            <Discriminators
              options={CONSTANTS.BOOK.GENRES}
              optionsActive={filters.filterBy.genres}
              onChange={onFilterByBookGenre}
              disabled={filters.isUpdating}
            />
          </div>
          <div className="col-3" style={{ textAlign: 'right' }}>
            <Discriminators
              options={[CONSTANTS.GENDERS.MALE, CONSTANTS.GENDERS.FEMALE]}
              optionsActive={filters.filterBy.genders}
              onChange={onFilterByAuthorGender}
              disabled={filters.isUpdating}
              style={{ justifyContent: 'flex-end' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
