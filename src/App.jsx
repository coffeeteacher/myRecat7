import { useEffect, useState } from "react"

export default function App() {
  // 建立目前背景圖的變數
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // 建立輪播圖片的陣列物件
  const slides = [
    { url: "./images2/06.jpg", title: "photo-1" },
    { url: "./images2/07.jpg", title: "photo-2" },
    { url: "./images2/08.jpg", title: "photo-3" },
    { url: "./images2/09.jpg", title: "photo-4" },
  ]
  
  // 當currentImgIndex改變時，會觸發useEffect
  useEffect(() => {
    // 每3秒呼叫nextSlide()換下一張圖
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);

    // 每3秒後，移除autoplay，這樣才能取得最新的索引編號
    return () => clearInterval(autoplay);
  }, [currentImgIndex]);

  // 下一張
  const nextSlide = () => {
    // 取得前一張的索引編號，檢查是否為最後一個編號
    // 是=>回到第一張
    // 否=>跳到下一張
    setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <>
      {/* 滿版最外層 */}
      <div className="wrapper" style={{
        maxWidth: "100vw",
        height: "100vh",
        margin: "auto",
      }}>
        {/* 滿版背景輪播區 */}
        <div style={{
          backgroundImage: `url(${slides[currentImgIndex].url})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          margin: "auto"
        }}>
          <h2 style={{ color: "red" }}>{slides[currentImgIndex].title}</h2>
        </div>
      </div>
    </>
  )
}