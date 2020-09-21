import React from 'react';
import './styles.scss';
import CollectionItems from '../collection-item';

const PreviewCollection=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item,idx)=>idx<4).map(({id,...othItems})=>(
                <CollectionItems key={id} {...othItems}/>
            ))}
        </div>
    </div>
)

export default PreviewCollection;