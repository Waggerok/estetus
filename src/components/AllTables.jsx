import React from 'react';
import TableOnePrice from './TableOnePrice';
import TableTwoPrice from './TableTwoPrice';
import MainTable from './MainTable';

const AllTables = ({tableState , switchTable, updateTotalPrice, services}) => {
    return (
        <>
            <MainTable 
                    table={tableState.zro2} 
                    switchTable={() => switchTable('zro2')} 
                    props='Безметалловые коронки ZrO2(KATANA, PRIME)'
                />
                {tableState.zro2 && <TableTwoPrice items={services.ZrO2} updateTotalPrice={updateTotalPrice}/>}
                
                <MainTable 
                    table={tableState.noritake} 
                    switchTable={() => switchTable('noritake')} 
                    props='Металокерамика (Noritake)'
                />
                {tableState.noritake && <TableTwoPrice items={services.Noritake} updateTotalPrice={updateTotalPrice}/>}

                <MainTable
                    table={tableState.emax}
                    switchTable={() => switchTable('emax')} 
                    props='Безметалловые коронки на E.max'
                />
                {tableState.emax && <TableOnePrice items={services.Emax} updateTotalPrice={updateTotalPrice}/>}

                <MainTable
                    table={tableState.abatments}
                    switchTable={() => switchTable('abatments')}
                    props='Абатменты'
                />
                {tableState.abatments && <TableOnePrice items={services.Abatments} updateTotalPrice={updateTotalPrice}/>}

                <MainTable
                    table={tableState.tabs}
                    switchTable={() => switchTable('tabs')}
                    props='Вкладки'
                />
                {tableState.tabs && <TableOnePrice items={services.Tabs} updateTotalPrice={updateTotalPrice}/>}

                <MainTable
                    table={tableState.diagnostics}
                    switchTable={() => switchTable('diagnostics')}
                    props='Диагностика'
                />
                {tableState.diagnostics && <TableOnePrice items={services.Diagnostics} updateTotalPrice={updateTotalPrice}/>}

                <MainTable
                    table={tableState.temporary}
                    switchTable={() => switchTable('temporary')}
                    props='Временные пластмассовые коронки и сплинты'
                />
                {tableState.temporary && <TableOnePrice items={services.Temporary} updateTotalPrice={updateTotalPrice}/>}

                <MainTable
                    table={tableState.telescopic}
                    switchTable={() => switchTable('telescopic')}
                    props='Телескопические коронки'
                />
                {tableState.telescopic && <TableOnePrice items={services.Telescopic} updateTotalPrice={updateTotalPrice}/>}

                <MainTable
                    table={tableState.byugelnoe}
                    switchTable={() => switchTable('byugelnoe')}
                    props='Бюгельное протезирование'
                />
                {tableState.byugelnoe && <TableOnePrice items={services.Byugelnoe} updateTotalPrice={updateTotalPrice}/>}

                <MainTable
                    table={tableState.thermoplastics}
                    switchTable={() => switchTable('thermoplastics')}
                    props='Термопласты'
                />
                {tableState.thermoplastics && <TableOnePrice items={services.Thermoplastics} updateTotalPrice={updateTotalPrice}/>}

                <MainTable
                    table={tableState.melodient}
                    switchTable={() => switchTable('melodient')}
                    props='Съемное протезирование (MELIODENT Kulzer Германия):'
                />
                {tableState.melodient && <TableOnePrice items={services.Melodient} updateTotalPrice={updateTotalPrice}/>}
        
        </>
    )
}

export default AllTables;