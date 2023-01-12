import { useState } from 'react';
import ClothesFolder from './ClothesFolder';
import {data} from './data';
import './App.css';
import Buttons from './Buttons';

function Home (){
const [clothes, setClothes] = useState(data);
const chosenClothes = (searchTerm) => {
  const newClothes = data.filter(element => element.searchTerm === searchTerm);
  setClothes(newClothes);
}

return (
  <div>
<div className = "cont">
<h2 className="back">Free Standard Shipping</h2>
  </div>

    <Buttons filteredClothes = {chosenClothes}/>
    <ClothesFolder shop={clothes}/>
  </div>
);
}
export default Home;