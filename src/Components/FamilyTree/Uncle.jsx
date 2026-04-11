import React, { useContext } from 'react';
import Cousin from './Cousin/Cousin';
import { MoneyContext } from './FamilyTree';


const Uncle = () => {
const names = useContext(MoneyContext);
console.log(names)
   


    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='Abid'/>
                <Cousin name='Salman'/>
            </section>
        </div>
    );
};

export default Uncle;