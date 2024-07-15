import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>Yeu nhieu lam</h2>
            <h3>Thanh cong roi</h3>
        </div>
    )
}

// Render component App vào #root element
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
//ReactDOM.render(<App />, document.getElementById('root'))

