import React, { FC } from 'react';
import './loader.css'

const Loader: FC = () => {
    return (
        <div className='loader'>
            <img className='loader__img' src="./loader.gif" alt=""/>
        </div>
    );
};

export default Loader;
