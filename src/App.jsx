

import { useEffect, useState } from 'react'
import './App.css'
import useFecht from './hooks/useFecht'
import getRamdonNumber from './services/getRamdonNumber'
import InfoUsers from './components/InfoUsers'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'


function App() {
  
  const ramdon = getRamdonNumber(126)


const [inputValue, setInputValue] = useState(ramdon)


const url = `https://rickandmortyapi.com/api/location/${inputValue || getRamdonNumber(126)}`


  const [location, getLocation, hasError] = useFecht(url)

useEffect(() =>{
  getLocation()
}, [inputValue])



  return (
  <div className='app'>
    <div>
   <img src="/Untitled.png" alt="" />
   </div>
    <FormSearch
    setInputValue={setInputValue}
    />

    { 
    hasError ? (<h1 className='app__error'>❌Hey! you must provide an id from 1 to 126💔</h1>)
    
    :
    
    (
    <>
    <InfoUsers
    location={location}/>
    <div className='container-resident'>
      {location?.residents?.map(url => (
        <ResidentCard
        key={url}
        url={url}/>
      ))}
    </div>
    </>
    )}
  </div>
  );
}

export default App
