import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import { Fashion } from './Fashion'
import {HomeAndAppliance} from './HomeAndAppliance'
import { LeftNav } from './LeftNav'
import { Mobiles } from './Mobiles'
import { Electronics } from './Electronics'
import { Grocery } from './Grocery'
export const Landing = () => {
  return (
    <React.Fragment>
        <BrowserRouter>
            <Routes>
                <Route path='/grocery' element={<Grocery/>}/>
                <Route path='/faishon' element={<Fashion/>}/>
                <Route path='/electronics' element={<Electronics/>}/>
                <Route path='/appliances' element={<HomeAndAppliance/>}/>
                <Route path='/mobiles' element={<Mobiles/>}/>
            </Routes>
        </BrowserRouter>

    </React.Fragment>
  )
}
