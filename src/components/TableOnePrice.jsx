import React from 'react';

const TableOnePrice = ({ items, updatePrice }) => {
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
                            <div className='subtable__price-onePrice' onClick={() => updatePrice(item.price)}>
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