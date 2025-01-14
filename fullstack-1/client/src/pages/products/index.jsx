import React, { useState } from 'react'
import styles from "./index.module.scss"
import { BASE_URL } from '../../constants'



const Wines = () => {
    const [wines, setWines] = useState([])

    const getWines = async () =>{
        const res = await axios(`${BASE_URL}wines`)
        setWines(res.data)
    }
    useEffect(() => {
        getWines()
      
    }, [])
    
  return (
    <>
    <div className={styles["container"]}>
    <h2>Our Products</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
    <a href="#">View All Products</a>


    </div>
    
    </>
  )
}

export default Wines