import React from 'react';

const TableTwoPrice = ({ items, updateTotalPrice }) => {
    return (
        <>
            {
                items.map((item, index) =>
                    <div key={index} className="subtable">
                        <div className="subtable__title">
                            {`${item.id}. `}
                            <span>{item.title}</span>
                        </div>
                        <div className="subtable__price">
                            <div className="subtable__price-economy" onClick={() => updateTotalPrice(item, 'economy')}>
                                {`${item.price} руб. \u00A0 `}
                            </div>
                            <div className="subtable__price-premium" onClick={() => updateTotalPrice(item, 'premium')}>
                                {`${item.pricePremium} руб.`}
                            </div>
                        </div>
                    </div>
                )
            }    
        </>
    );
};

export default TableTwoPrice;