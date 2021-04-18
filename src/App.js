import {useEffect,useState} from 'react'
import logo from './logo.svg';
import './App.css';
import LazyLoad from 'react-lazyload';
import axios from 'axios'

function App() {
  const [images,setImages] = useState([])
  const url = 'https://api.unsplash.com/photos/?client_id=6QtAovKkHMIH_Z4KMFNKYOWkIM685b-SQisRUkShoC0'
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
        <LazyLoad height={500}><img src={i.urls.regular} key={i.id} height="500px" widhth="500px"/></LazyLoad>
      )})}
    </div>
  );
}

export default App;
