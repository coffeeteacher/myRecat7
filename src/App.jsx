import { useEffect, useState } from "react"
import axios from 'axios'
import { IoUmbrellaOutline } from "react-icons/io5";

import './App.css'
import { CgHello } from "react-icons/cg";

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
      console.log(location);
      setWeatherList(location);
    })()
  }, [])

  return (
    // locationName =>縣市名
    // elementName => Wx => 天氣概況
    // elementName => PoP => 降雨率

    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        <div className="container">
          {
            weatherList.map((city) => {
              return (
                <div className="item" key={city.locationName}>
                  <h3>{city.locationName}</h3>
                  <div className="content">
                    {
                      city.weatherElement[0].time.map((time, index) => {
                        return (
                          <div key={index}>
                            {/* 日期 */}
                            {/* <p>2日</p> */}
                            <p>
                              {
                                new Date(time.startTime).toLocaleString(undefined, {
                                  day: 'numeric'
                                })
                              }
                            </p>
                            {/* 時間 */}
                            {/* <p>
                      上午6:00<br />
                      ~<br />
                      下午6:00
                    </p> */}
                            <p>
                              {
                                // 開始時間
                                new Date(time.startTime).toLocaleString(undefined, {
                                  hour: 'numeric',
                                  minute: 'numeric'
                                })
                              }
                              <br />~<br />
                              {
                                // 結束時間
                                new Date(time.endTime).toLocaleString(undefined, {
                                  hour: 'numeric',
                                  minute: 'numeric'
                                })
                              }
                            </p>
                            {/* 天氣圖 */}
                            {/* <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p> */}
                            <p><img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>
                            {/* 天氣圖名稱 */}
                            {/* <p>晴時多雲</p> */}
                            <p>{time.parameter.parameterName}</p>
                            {/* 降雨率 */}
                            {/* <p><IoUmbrellaOutline />10%</p> */}
                            <p><IoUmbrellaOutline />{city.weatherElement[4].time[index].parameter.parameterName}</p>
                          </div>
                        )
                      })
                    }

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default App