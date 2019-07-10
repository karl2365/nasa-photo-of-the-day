import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Title from './components/Title';
import Image from './components/Image';
import Copy from './components/Copy';
import Date from './components/Date';
function App() {

  const [data, setData] = useState({});
  const fetchData = () => {
    Axios.get(`https://api.nasa.gov/planetary/apod?api_key=yQb9FfH5iS3G8fZ5h1Sf4Kqqy5ydzCi8e3vFI82y&date=2012-03-14`)
      .then(res => {
        console.log(res);
        setData(res.data);

      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, [])
  if (!data) return <h3>Loading Data</h3>
  return (
    <div className="App">
        <Title data={data} />
        <Date data={data} />
        <Copy data={data} />
        <Image data={data} />
    </div>
  );
}

export default App;
