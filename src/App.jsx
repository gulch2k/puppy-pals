import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'
import './index.css'


function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null); 

  function handleClick(e) {
    const clickedPuppy = e.target.innerText;
    const clickedPuppyId = puppyList.find(puppy => puppy.name === clickedPuppy).id;
    setFeatPupId(clickedPuppyId);
  } 
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);

  console.log(featuredPup);

  return (
    <div className="App">
      <div className='puppy-container'>
      {featPupId && (
        <div className='puppy-card'>
          <div className='puppy-info'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
          </div>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    <img src="https://cdn.discordapp.com/attachments/985476606137073734/1118459315662094346/iu.png" className="logo react" alt="Different logo" />
    </div>
    </div>

  );
}
export default App;
