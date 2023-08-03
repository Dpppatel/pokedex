import React, { useEffect, useState} from "react";
import { Virtuoso } from 'react-virtuoso';

const Images = ({id}) =>{
    const [images, setImages] = useState([]);


    return (<img src=""/>);
    //     <Virtuoso
    //     style={{ 
    //       height: '400px',
    //       background: '#f8f8f8'
    //     }}
    //     totalCount={10000}
    //     itemContent={index => (
    //       <div style={{ 
    //         background: index % 2 === 0 ? '#ffbb00' : '#ffcc33',
    //         color: '#333',
    //         padding: '10px',
    //         fontSize: '16px',
    //         fontFamily: 'Arial, sans-serif',
    //         border: '1px solid #ccc',
    //         borderRadius: '4px',
    //         margin: '5px 0',
    //         display: 'flex',
    //         alignItems: 'center'
    //       }}>
    //         <img src={images[index % 100]} alt={`Item ${index}`} style={{ marginRight: '10px', width: '50px', height: '50px', borderRadius: '50%' }} />
    //         Item {index}
    //       </div>
    //     )}
    //   />
        
    

}
export default Images;