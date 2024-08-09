import React from 'react';

const TableOnePrice = ({ items, updateTotalPrice }) => {
    return (
        <>
            {
                items.map((item) =>
                    <div className="subtable">
                        <div className="subtable__title">
                            {`${item.id}. `}
                            <span>{item.title}</span>
                        </div>
                        <div className="subtable__price">
                            <div className='subtable__price-onePrice' onClick={() => updateTotalPrice(item.price)}>
                                {`${item.price} руб.`}
                            </div>
                        </div>
                    </div>
                )
            }        
        </>
    )
}

export default TableOnePrice;