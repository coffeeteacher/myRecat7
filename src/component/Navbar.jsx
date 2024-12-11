import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div id="nav">
            <ul>
                <li><Link to='/'>首頁</Link></li>
                <li><Link to='/about'>關於我</Link></li>
                <li><Link to='/news'>最新消息</Link></li>
                <li><Link to='/jquery'>jQuery</Link></li>                  
                <li><a href="./html/jquery2.html" target="_blank">html新分頁</a></li> 
                <li><a href="./html/jquery1.html">html不分頁</a></li> 
            </ul>
        </div>
    )
}