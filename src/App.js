import React,{useState} from "react";
import axios from "axios";
function App() {
  const [data,setData]=useState({})
  const [location,setLocation] =useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=60a7c5bc645643892b14d669d19f0a03`
  

  const serchLocation =(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((Response) =>{
        setData(Response.data)
        console.log(Response.data)
      })
      setLocation("")
    }
}
    
  
  return (
  
    <div className="app">
    
      <div className="container">
        <div className="search">
          <input 
          type="text"
          value ={location}
          onChange={event =>setLocation(event.target.value)}
          onKeyUpCapture={serchLocation}
          className="text"
          placeholder="EnterLocation" />

          </div>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main? <h1>{data.main.temp.toFixed()}°C</h1>:null} 
          </div>      
          <div className="discription">
            {data.weather ?<p>{data.weather[0].main}</p>:null}
            
          </div>
        </div>

{data.name !=undefined &&
  <div className="bottem">
  <div className="feels">
    {data.main? <p className="bold">{data.main.feels_like.toFixed()}°C</p>:null}
    
    <p className="bold">Feels like</p>
  </div>
  <div className="humidity">
    {data.main ? <p className="bold">{data.main.humidity}%</p>:null}
    <p className="bold">humidity</p>
  </div>
  <div className="wind">
    {data.wind?<p className="bold">{data.wind.speed.toFixed()}MPH</p> :null}
   
    <p className="bold">wind</p>
  </div>
</div>

}

      



      </div>
    </div>
  );
}

export default App;
