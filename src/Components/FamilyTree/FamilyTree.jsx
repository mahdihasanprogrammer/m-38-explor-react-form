import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './family-tree.css'

export const FamilyContext = createContext();
export const MoneyContext = createContext(0);

const FamilyTree = () => {
const obj = {
  asset : 'Diamond',
 money : 500,
}

const [count , setCount] = useState(0);

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>

            <FamilyContext.Provider value={obj}>
                 <MoneyContext.Provider value={[count, setCount]}>
                     <Grandpa/>
                 </MoneyContext.Provider>
            </FamilyContext.Provider>
        </div>
    );
};

export default FamilyTree;