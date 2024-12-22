// rfce => 自動帶出下方App元件結構

import { useState } from 'react';
import img1 from '/images2/01.jpg';
import img2 from '/images2/02.jpg';
import img3 from '/images2/03.jpg';
import img4 from '/images2/04.jpg';


function App() {
  const [currentImg, setCurrentImg] = useState(0);
  const arrPhotos = [img1, img2, img3, img4];

  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* 
            <img src={arrPhotos[0]} alt="photos" width={100} height={100} onMouseOver={e => setCurrentImg(0)} style={{ cursor: "pointer" }} />
            <img src={arrPhotos[1]} alt="photos" width={100} height={100} onMouseOver={e => setCurrentImg(1)} style={{ cursor: "pointer" }} />
            <img src={arrPhotos[2]} alt="photos" width={100} height={100} onMouseOver={e => setCurrentImg(2)} style={{ cursor: "pointer" }} />
            <img src={arrPhotos[3]} alt="photos" width={100} height={100} onMouseOver={e => setCurrentImg(3)} style={{ cursor: "pointer" }} /> 
            */}
            {
              arrPhotos.map((photo, index) => {
                return (
                  <img
                    key={index} src={photo} alt="photos" width={100} height={100}
                    onMouseOver={e => setCurrentImg(index)} style={{ cursor: "pointer" }}
                  />
                )
              })
            }
          </div>
          <div>
            <img src={arrPhotos[currentImg]} alt="photos" width={480} height={480} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App