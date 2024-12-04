import { IoUmbrellaOutline } from "react-icons/io5";

export default function ShowWeather({city}) {
    return (
        <div className="content">
            {
                city.weatherElement[0].time.map((time, index) => {
                    return (
                        <div className="item2" key={index}>
                            {/* 日期 */}
                            <p>
                                {
                                    new Date(time.startTime).toLocaleString(undefined, {
                                        day: 'numeric'
                                    })
                                }
                            </p>
                            {/* 時間 */}
                            <p>
                                {
                                    new Date(time.startTime).toLocaleString(undefined, {
                                        hour: 'numeric',
                                        minute: 'numeric'
                                    })
                                }
                                <br />~<br />
                                {
                                    new Date(time.endTime).toLocaleString(undefined, {
                                        hour: 'numeric',
                                        minute: 'numeric'
                                    })
                                }
                            </p>

                            {/* 天氣圖 */}
                            <p><img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>

                            {/* 天氣圖名稱 */}
                            <p>{time.parameter.parameterName}</p>

                            {/* 降雨率 */}
                            {/* <p><IoUmbrellaOutline />30%</p> */}
                            <p>
                                <IoUmbrellaOutline />
                                {
                                    city.weatherElement[4].time[index].parameter.parameterName
                                }
                            </p>
                        </div>
                    )

                })
            }
        </div>

    )
}

