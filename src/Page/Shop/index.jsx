import React,{Component} from 'react';
import SHOPDATA from './shopData';
import PreviewCollection from '../../Components/preview-collection';
class ShopPage extends Component{
    constructor(props){
        super(props);

        this.state={
            collections:SHOPDATA,
        }
    }

    render(){
        const {collections}=this.state;
        return(
            <div className="shop-page">
               {collections.map(({id,...othcollection})=>(
                   <PreviewCollection key={id} {...othcollection} />
               ))
               
               }
            </div>
        )
    }
};
export default ShopPage;