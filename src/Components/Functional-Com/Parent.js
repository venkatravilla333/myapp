
import Child from "./Child"

function Parent() {
  var x = 100
  var name = 'sachin' 

  return <div>
    <h1>Functional parent</h1>
    {/* {Child()} */}
    <Child x = {x} />
    <Child name = {name} />
  </div>
}

export default Parent