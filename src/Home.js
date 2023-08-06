import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import wind1 from "./images/wind1.jpg.avif"
import './home.css'
import search from './images/search.png'
import cloud1 from './images/cloud1.png'
import humidity1 from './images/humidity1.png'

function Home(){
    const[data,setData]=useState({
        celsius:10,
        name:'london',
        humidity:10,
        speed:2
    })

    const [name,setName]= useState("")

    useEffect(()=>{
        
       
    },[])

    const handleClick=()=>
    {
        if(name !=="")
        {
            const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&a ppid=56f9a771dc4347798fca21a7e1ac8d80&&units=metric`;
        axios.get(apiUrl)
           .then(res=>
               {
                setData({...data,celsius:res.data.main.temp, name:res.data.name , humidity:res.data.main.humidity , speed:res.data.wind.speed})
               })
           .catch(err=>console.log(err));

        }
    }



    return(
    <div className='container'>
        <div className="weather">     
                <div className="search">
                <input type="text" placeholder='Enter city name'onChange={(e)=>setName(e.target.value)}/> 
                <button className='search-button'>
               <img src={search} alt="search" onClick={handleClick}/></button>
            </div>

            <div className="winfo">
               <img  className='icon' src={cloud1} alt="clouds"/>
                <h2>{data.celsius}</h2>
                <h2>{data.name}</h2>
            </div>

            <div className="details">
                <div className="col">
                    <img src={humidity1} alt="humidity"/>
                    <div className='humidity'>
                        <p>{data.humidity}</p>
                         <p>Humidity</p>
                    </div>
                </div>    

        
                <div className="col">
                    <img  className="wind1"src={wind1} alt="wind"/>
                        <div className='wind'>
                            <p>{data.speed}km/hr</p>
                           <p>Wind</p>
                       </div>
                </div>
            </div> 

       </div>
    </div>
        )
    }

export default Home