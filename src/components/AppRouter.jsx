import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Services from '../pages/Services';
import Examples from '../pages/Examples';
import Contacts from '../pages/Contacts';
import About from '../pages/About';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='*' element={<Main/>}></Route>
            <Route path='services' element={<Services/>}></Route>
            <Route path='examples' element={<Examples/>}></Route>
            <Route path='contacts' element={<Contacts/>}></Route>
            <Route path='about' element={<About/>}></Route>
        </Routes>
    );
};

export default AppRouter;