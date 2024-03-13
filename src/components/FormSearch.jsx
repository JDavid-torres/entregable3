import { useRef } from "react"
import "./style/inputForm.css"

const FormSearch = ({setInputValue}) => {

const  rickAndMorty = useRef()


const hadleSubmit = e => {
 e.preventDefault()
    setInputValue(rickAndMorty?.current.value.trim())
}



  return (
    <div>
 <form className="form" onSubmit={hadleSubmit}>
  <input className="form__input" type="text"  ref={rickAndMorty}/>
 <button className="bottom">Search</button></form>
 </div>
  )
}

export default FormSearch