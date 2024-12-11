import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            我是About頁
            <Link to='/news'>最新消息</Link>
        </div>
    )
}