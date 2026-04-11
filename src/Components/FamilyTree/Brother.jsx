import React, {  useContext } from 'react';
import { FamilyContext } from './FamilyTree';

const Brother = () => {
    const hiBj = useContext(FamilyContext);
   
  


    return (
        <div>
            <h3>Brother</h3>
            <p>{hiBj.asset}</p>
            <p>{hiBj.money}</p>
        </div>
    );
};

export default Brother;