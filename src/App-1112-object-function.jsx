

function App() {

    const person = {
        name: "同學1",
        age: 10,
    }

    // 一般寫法
    function showName(obj) {
        console.log(obj);
        console.log(obj.name);
        console.log(obj.age);
    }

    // 將物件屬性直接解構給函式參數
    function showName({ name, age }) {
        console.log(name);
        console.log(age);
    }
    showName(person);

    return (
        <>
            <h1>將物件屬性直接解構給函式參數</h1>
        </>
    )
}

export default App
