import {useEffect,useState} from 'react'
import logo from './logo.svg';
import './App.css';
import LazyLoad from 'react-lazyload';
import axios from 'axios'
require('dotenv').config()

function App() {
  const [images,setImages] = useState([])
  const url = process.env.REACT_APP_IMG_API_URL
  console.log(url)
  useEffect(()=>{
    axios({
      method:'GET',
      url:url
    }).then(res=>{
      setImages(res.data)
      console.log(images)
    })

  },[])
  if(!images){
    return (<div>Loading....</div>)
  }
  return (
    <div>
      {images.map(i=>{return(
        <LazyLoad height={500}><img src={i.urls.regular} key={i.id}/></LazyLoad>
      )})}
    </div>
  );
}

export default App;
