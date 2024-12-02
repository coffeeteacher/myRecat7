// import banner from '../public/images/banner.jpg'
// 載入app.css
import './App.css'
import ShowContent from './ShowContent.jsx'
import ShowContentClass from './ShowContentClass.jsx'

function App() {

    return (
        <>
            <div className="wrap">
                {/* 頁首廣告區 */}
                <header>
                    <img src="images/banner.jpg" alt="" />
                </header>

                {/* 特色區 */}
                <div className="content">
                    <ShowContent />
                </div>

                {/* 主標 */}
                <div className="slogan">
                    <h3>讓學習成為一種習慣</h3>
                </div>

                {/* 推薦課程 */}
                <div className="content2">
                    <h1>推薦課程</h1>
                    <div className="contentClass">
                        <ShowContentClass />
                    </div>

                </div>

                {/* 頁尾 */}
                <footer>
                    <p>&copy; 2024.11.12 coffeeteacher</p>
                </footer>
            </div>
        </>
    )
}

export default App
