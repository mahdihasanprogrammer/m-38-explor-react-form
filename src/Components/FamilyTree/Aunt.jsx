import React from 'react';
import Cousin from './Cousin/Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Aftab' />
                <Cousin name='Mustafizur' />
            </section>
        </div>
    );
};

export default Aunt;