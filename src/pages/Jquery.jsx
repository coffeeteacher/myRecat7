import { useEffect } from 'react'
import $ from 'jquery'

export default function Jquery() {

    useEffect(() => {
        $('#btn1').on('click', function () {
            // console.log('hi')
            alert($('#btn1').text());
        })

        $('p').on('mouseover', function () {
            $('p').animate({ fontSize: '22px' }, 300)
        }).on('mouseout', function () {
            $('p').animate({ fontSize: '16px' }, 300)
        })
    }, [])

    return (
        <div>
            <h1 onMouseEnter={() => {
                console.log($('h1').text())
            }}>jQuery</h1>

            <button id='btn1' onClick={() => {
                console.log($('#btn1').text())
            }}>Click</button>

            <p>onMouseEnter</p>
        </div>
    )
}