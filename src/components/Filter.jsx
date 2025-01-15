import React from 'react';

const Filter = ({ filter, setFilter }) => {
    return (
        <div className="filter">
            <button className="all" onClick={() => setFilter('all')}>Todas</button>
            <button className="completed" onClick={() => setFilter('completed')}>Completadas</button>
            <button className="pending" onClick={() => setFilter('pending')}>Pendientes</button>
        </div>
    );
};

export default Filter;