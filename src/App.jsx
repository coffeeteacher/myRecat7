import { useEffect, useState } from "react"
import axios from 'axios'
import { IoUmbrellaOutline } from "react-icons/io5";

import './App.css'

function App() {
  const [weatherList, setWeatherList] = useState([]);
  
  useEffect(() => {
    (async () => {
      // 本地端要在web-server伺服器下才可以執行
      // const data = await axios.get('./F-C0032-001.json');

      // json的連結必須是公開網址下的來源
      const data = await axios.get('https://coffeeteacher.github.io/myRecat7/json/F-C0032-001.json');
      // console.log(data);
      const { location } = data.data.cwaopendata.dataset;
      // console.log(location);
      setWeatherList(location);
    })()
  }, [])

  return (
    // locationName =>縣市名
    // elementName[0] => Wx => 天氣概況
    // elementName[4] => PoP => 降雨率

    <div className="wrap">
      <h2>36小時天氣預報</h2>
    </div>

  )
}
export default App