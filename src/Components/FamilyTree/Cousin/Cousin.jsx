import React, { useContext } from 'react';
import { MoneyContext } from '../FamilyTree';

const Cousin = ({name}) => {

    const [count , setCount ] = useContext(MoneyContext)
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Salman' && <p onClick={()=>{setCount(count+6)}}>{count}</p>
            }
        </div>
    );
};

export default Cousin;