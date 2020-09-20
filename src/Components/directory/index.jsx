import React,{Component} from 'react';
import MenuItem from '../menu-item';
import './styles.scss';

class  Directory extends Component{
    constructor(){
        super();
        
        this.state={
            sections:
            [
                {
                  title: 'Hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats',
                  subTitle: 'SHOP NOW',
                },
                {
                  title: 'Jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets',
                  subTitle: 'SHOP NOW',
                },
                {
                  title: 'Sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers',
                  subTitle: 'SHOP NOW',
                },
                {
                  title: 'Womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens',
                  subTitle: 'SHOP NOW',
                },
                {
                  title: 'Mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens',
                  subTitle: 'SHOP NOW',
                }
              ]
            }
    }
    render(){
        const {sections}=this.state;
        return(
            <div className='directory-menu'>
                {sections.map(({id, ...othSectionProps})=>{
                    return(
                        <MenuItem key={id} {...othSectionProps}/>
                    )
                })
                }
            </div>
        )
    }
}

export default Directory;