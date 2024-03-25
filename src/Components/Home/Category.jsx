import React from 'react';
import hooks from '../Hooks/hooks';
import CardIteam from './CardIteam';

const Category = () => {
    const {data, loading}=hooks();
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                data.map((item=><CardIteam key={item.id} item={item}></CardIteam>))
            }
        </div>
    );
};

export default Category;