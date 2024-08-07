import React, { useState } from 'react';

//Components
import TableTwoPrice from '../components/TableTwoPrice';
import TableOnePrice from '../components/TableOnePrice';
import MainTable from '../components/MainTable';

//ServiceFolder
import ZrO2 from '../ServicesFolder/Service1';
import Emax from '../ServicesFolder/Service2';
import Abatments from '../ServicesFolder/Service3';
import Noritake from '../ServicesFolder/Service4';
import Tabs from '../ServicesFolder/Service5';
import Diagnostics from '../ServicesFolder/Service6';
import Temporary from '../ServicesFolder/Service7';
import Telescopic from '../ServicesFolder/Service8';
import Byugelnoe from '../ServicesFolder/Service9';
import Thermoplastics from '../ServicesFolder/Service10';
import Melodient from '../ServicesFolder/Service11';

const Price = () => {

    const [table, setTable] = useState({
        zro2: false,
        emax: false,
        abatments: false,
        noritake: false,
        tabs: false,
        diagnostics: false,
        temporary: false,
        telescopic: false,
        byugelnoe: false,
        thermoplastics: false,
        melodient: false,
    })


    const switchTable = (tableName) => {
        setTable(prevState => ({
          ...prevState,
          [tableName]: !prevState[tableName]
        }));
      };
    
    return (
        <div className='App'>
            <section className='price'>
                <div className="price__title">
                    Цены на наши услуги
                </div>
                <div className="price__description">
                    Здесь вы можете ознакомиться со всеми спецификациями наших изделий, а также узнать цены на интересующие услуги.
                </div>
                
                <MainTable 
                    table={table.zro2} 
                    switchTable={() => switchTable('zro2')} 
                    props='Безметалловые коронки ZrO2(KATANA, PRIME)'
                />
                {table.zro2 && <TableTwoPrice items={ZrO2}/>}
                
                <MainTable 
                    table={table.noritake} 
                    switchTable={() => switchTable('noritake')} 
                    props='Металокерамика (Noritake)'
                />
                {table.noritake && <TableTwoPrice items={Noritake}/>}

                <MainTable
                    table={table.emax}
                    switchTable={() => switchTable('emax')} 
                    props='Безметалловые коронки на E.max'
                />
                {table.emax && <TableOnePrice items={Emax}/>}

                <MainTable
                    table={table.abatments}
                    switchTable={() => switchTable('abatments')}
                    props='Абатменты'
                />
                {table.abatments && <TableOnePrice items={Abatments}/>}

                <MainTable
                    table={table.tabs}
                    switchTable={() => switchTable('tabs')}
                    props='Вкладки'
                />
                {table.tabs && <TableOnePrice items={Tabs}/>}

                <MainTable
                    table={table.diagnostics}
                    switchTable={() => switchTable('diagnostics')}
                    props='Диагностика'
                />
                {table.diagnostics && <TableOnePrice items={Diagnostics}/>}

                <MainTable
                    table={table.temporary}
                    switchTable={() => switchTable('temporary')}
                    props='Временные пластмассовые коронки и сплинты'
                />
                {table.temporary && <TableOnePrice items={Temporary}/>}

                <MainTable
                    table={table.telescopic}
                    switchTable={() => switchTable('telescopic')}
                    props='Телескопические коронки'
                />
                {table.telescopic && <TableOnePrice items={Telescopic}/>}

                <MainTable
                    table={table.byugelnoe}
                    switchTable={() => switchTable('byugelnoe')}
                    props='Бюгельное протезирование'
                />
                {table.byugelnoe && <TableOnePrice items={Byugelnoe}/>}

                <MainTable
                    table={table.thermoplastics}
                    switchTable={() => switchTable('thermoplastics')}
                    props='Термопласты'
                />
                {table.thermoplastics && <TableOnePrice items={Thermoplastics}/>}

                <MainTable
                    table={table.melodient}
                    switchTable={() => switchTable('melodient')}
                    props='Съемное протезирование (MELIODENT Kulzer Германия):'
                />
                {table.melodient && <TableOnePrice items={Melodient}/>}

            </section>
        </div>
    )
};

export default Price;