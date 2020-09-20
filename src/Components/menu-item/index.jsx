import React from 'react';
import './styles.scss';

const MenuItem=({title,subTitle,imageUrl,size})=>{
    return(
    <div className={`${size} menu-item`} style={{
        backgroundImage:`url(${imageUrl})`
    }}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{subTitle}</span>
        </div>
    </div>
    )
}

export default MenuItem;