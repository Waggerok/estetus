import React from 'react';

const TableTwoPrice = ({ items }) => {
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
                            <div className="subtable__price-economy">
                                {`${item.priceEconomy} руб. \u00A0 `}
                            </div>
                            <div className="subtable__price-premium">
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