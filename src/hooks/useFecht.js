import axios from "axios"
import { useState } from "react"

const useFecht = (url) => {

const [response, setResponse] = useState()
const [hasError, setHasError] = useState(false)

const getApp = () => {
    
axios.get(url)
.then(resp => {
    setResponse(resp.data)
     setHasError(false)
})
.catch(err => {
    console.log(err)
    setHasError(true)})


}
return [response, getApp, hasError]
}

export default useFecht