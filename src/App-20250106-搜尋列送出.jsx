<<<<<<< HEAD
import { useState } from "react"

export default function App() {
    const [search, setSearch] = useState('');
    // 使用表單送出
    const formHandleSubmit = (e) => {
        e.preventDefault();
        console.log('使用form submit送出:', search)
    }

    // 使用鍵盤事件=>Enter送出
    const enterHandleSubmit = (e) => {
        console.dir(e);
        if (e.key === 'Enter') {
            console.log('使用Enter送出:', search);
        }
    }

    return (
        <>
            <div>
                {/* 使用表單送出方式：適用於單一欄位 */}
                <form onSubmit={formHandleSubmit}>
                    {/* 搜尋1 */}
                    <div>
                        <label htmlFor="search1">搜尋1</label>
                        <input type="search" id="search1" name="mySearch"
                            value={search} onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </form>

                {/* 搜尋2：不使用表單送出 */}
                <div>
                    <label htmlFor="search2">搜尋2</label>
                    <input type="search" id="search2" name="mySearch2"
                        value={search} onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={enterHandleSubmit}
                    />
                </div>

            </div>
        </>
    )
}
=======
import { Auth } from "./component/auth"


function App() {
  return (
    <div>
      <Auth/>
      
    </div>
  )
}

export default App
>>>>>>> 7d560779772f0a7c154611431403b173b715ef19
