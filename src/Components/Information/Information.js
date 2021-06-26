import React, { useState,useEffect }  from 'react';
import fakeData from '../../fakeData/fakeData.json'
import Players from '../Players/Players';
import './Information.css'

import Collection from '../Collection/Collection';



const Information = () => {
    
  const [info,setInfo]=useState([]);
  useEffect(() =>  {
    setInfo(fakeData);
     
  }, [])
  const [collection, setCollection] = useState([])

  const handleAddPlayer = (player) => {
     const newCollection = [...collection, player];
     setCollection(newCollection)
  }
    
    return (
        <div className="information-container">

            
                    <div className="players-container" >
                    {
                            info.map(pl => <Players
                                
                               handleAddPlayer ={handleAddPlayer} 
                                player={pl}> </Players>)
                            
                        }
                    </div>

            <div className="collection-container">
                     <Collection collection={collection}></Collection>
            </div>
            
        </div>
    );
};

export default Information;