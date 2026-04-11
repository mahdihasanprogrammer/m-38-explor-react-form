import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';


const Grandpa = () => {
    return (
        <div>
          <section className='flex'>
             <Dad/>
             <Uncle/>
             <Aunt/>
          </section>
        </div>
    );
};

export default Grandpa;