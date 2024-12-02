// 特色區元件
function ShowContent() {
    // 特色區資料
    const contentData = [
        {
            id: 1,
            title: "教學影音",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?",
        },
        {
            id: 2,
            title: "良性互動",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?",
        },
        {
            id: 3,
            title: "趨勢分享",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?",
        },
    ]
    return (
        <>
            {
                contentData.map((item) => {
                    return (
                        <div className="box" key={item.id}>
                            <h2><strong>{item.title}</strong></h2>
                            <p>{item.desc}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ShowContent