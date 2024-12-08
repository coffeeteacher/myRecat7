import { useEffect } from 'react'
import $ from 'jquery'

export default function Jquery() {
    useEffect(() => {
        $('#btn1').on('click', function () {
            // console.log('hi')
            alert($('#btn1').text());
        })
    }, [])

    return (
        <div>
            <h1>jQuery</h1>
            <button id='btn1'>Click</button>            
        </div>
    )
}