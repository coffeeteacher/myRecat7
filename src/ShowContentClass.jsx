function ShowContentClass() {
    // 推薦課程資料
    const contentClassData = [
        {
            id: 1,
            imgURL: "images/unity.jpg",
            title: "Unity 5",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quibusdam.",
            teacher: "xxx",
            hour: "4",
            price: "NT$1600",
            priceSale: "NT$1200",
        },
        {
            id: 2,
            imgURL: "images/gamesalad.jpg",
            title: "gamesalad",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quibusdam.",
            teacher: "xxx",
            hour: "8",
            price: "NT$3200",
            priceSale: "NT$1600",
        },
        {
            id: 3,
            imgURL: "images/gwd.jpg",
            title: "gwd",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quibusdam.",
            teacher: "xxx",
            hour: "8",
            price: "NT$3200",
            priceSale: "NT$1600",
        }
    ]

    return (
        <>
            {
                contentClassData.map((item) => {
                    return (
                        <div className="box2" key={item.id}>
                            <p><img src={item.imgURL} alt="" /></p>
                            <h3>{item.title}</h3>
                            <p className="p-blue">{item.desc}</p>
                            <p>講師:{item.teacher}</p>
                            <p>時數:{item.hour}小時</p>
                            <p><span className='span1'>原價 {item.price}</span><span className='span2'>{item.priceSale}</span></p>
                            <button>付款上課去</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ShowContentClass