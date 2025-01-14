import { useState } from "react";
import { useEffect } from "react";

export default function App() {
    const [citys, setCitys]=useState([]);

    useEffect(() => {
        fetch("./json/F-C0032-001.json").then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            setCitys(data.cwaopendata.dataset.location);            
        });
    }, []);

    return (
        <>
            <h1>AJAX</h1>
            <div>
                {
                    citys.map((city,index)=>{
                        return(
                            <p key={index}>{city.locationName}</p>
                        )
                    })
                }
            </div>
        </>
    )
}
