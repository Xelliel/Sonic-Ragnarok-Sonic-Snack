import React, {useState, useEffect, useContext} from reactRouterDom;
import {reducer} from './reducer';

const AppContext = React.createcontext();

export const AppProvider = {(children)} => {


    const [allData, setAllData] = useState([]);


    //Functions

    const fetchData = () =>
}