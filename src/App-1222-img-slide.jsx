import { useState, useEffect } from "react"
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "./images2/06.jpg" },
    { url: "./images2/07.jpg" },
    { url: "./images2/08.jpg" },
    { url: "./images2/09.jpg" },
  ]

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [currentIndex]);

  // 前一張
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  // 下一張
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  // 按鈕控制
  const Arrow = ({ direction, onClick }) => (
    <div style={{
      position:"absolute",
      top:"50%",
      cursor:"pointer",
      color:"white",
      [direction]: "20px",
    }}>
      {
        direction === "left" ? (
          <FaCircleChevronLeft onClick={onClick} size={50} />
        ) : (
          <FaCircleChevronRight onClick={onClick} size={50} />
        )
      }
    </div>
  );

  return (
    <div style={{
      maxWidth: "100vw",
      height: "100vh",
      margin: "auto",
    }}>
      <div style={{
        backgroundImage: `url(${slides[currentIndex].url})`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
      }}></div>

      {/* 上一張 */}
      <Arrow direction="left" onClick={prevSlide} />
      {/* 下一張 */}
      <Arrow direction="right" onClick={nextSlide} />
    </div>
  )
}

export default App
