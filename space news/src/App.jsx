import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data,setdata] = useState([])
  useEffect(()=>{
   fetch("https://api.spaceflightnewsapi.net/v3/articles").then(response=>response.json()).then(data=>setdata(data))
  },[])
console.log(data)
  return (
    <div className="App">
      <h1 className="title">Space News</h1>
       {data.map(news=>{
        return <div className="news-container" key={news.id} onClick={()=>{ window.location.href= news.url}}>
          <img src={news.imageUrl} alt="" />
          <h1>{news.title}</h1>
          <p className="summary">summary: {news.summary}</p>
          <h3>from: {news.newsSite}</h3>
          <h4>{news.updatedAt}</h4>
          </div>
       })}
     
    </div>
  )
}

export default App
