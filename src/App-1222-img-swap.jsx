
import { useState } from 'react';
import img1 from '/images2/01.jpg';
import img2 from '/images2/02.jpg';
import img3 from '/images2/03.jpg';
import img4 from '/images2/04.jpg';

export default function App() {

  // 建立目前縮圖的變數
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  // 建立圖片陣例
  const arrPhotos = [img1, img2, img3, img4];

  return (
    <>
      <div className="wrapper">
        <div style={{
          // display: "flex",
          width: "700px",
          // justifyContent: "space-around",
          margin: "50px auto",
          textAlign: "center",
        }}>

          {/* 大圖區 */}
          <div>
            <img src={arrPhotos[currentImgIndex]} alt="photos" width={580} height={400} />
          </div>

          {/* 縮圖區 */}
          <div style={{
            display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            marginTop: "20px",
          }}>
            {/* 
            <img src={arrPhotos[0]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[1]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[2]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[3]} alt="photos" width={100} height={80} />
            */}

            {
              arrPhotos.map((photo, index) => {
                return (
                  <img key={index} src={photo} alt="photos" width={100} height={80}
                    onMouseOver={(e) => setCurrentImgIndex(index)}
                    style={{
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                  />
                )
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}