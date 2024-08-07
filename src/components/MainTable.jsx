import React from 'react';

const MainTable = ({table, switchTable, props}) => {
    return (
        <div className="price__table">
            <div className="price__table-name">
                {props}
            </div>
            <div className={table ? 'price__table-button-active' : 'price__table-button'} onClick={switchTable}>
                {`>`}
            </div>
        </div>
    );
};

export default MainTable;