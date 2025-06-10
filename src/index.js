

import App from "./App";
import ReactDom from 'react-dom/client'

var div = document.getElementById('root')
// console.log(div)

var root = ReactDom.createRoot(div)
// console.log(root)
// root.render(App())
root.render(<App/>)

