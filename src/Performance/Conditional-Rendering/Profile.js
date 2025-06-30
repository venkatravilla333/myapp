import React from 'react'

function Profile(props) {
  return (
    <div>
      <h4>Profile</h4>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/800px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg" alt="" width='250px' height='200px'/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet labore pariatur repudiandae sint exercitationem quos accusamus, explicabo animi assumenda ex laudantium nemo maiores, debitis tempora sapiente totam, fugit natus? Saepe laboriosam reprehenderit sint, possimus fuga quos molestias quo aliquam tenetur perspiciatis minima repellendus impedit tempore at hic cum, necessitatibus nihil nulla rerum pariatur cupiditate. Voluptatibus enim possimus porro voluptate quisquam officia labore excepturi consequatur fugit! Cupiditate harum perspiciatis quae quas assumenda quaerat enim expedita ducimus, velit vel! Ratione, quis. Numquam blanditiis modi ipsum voluptatem dolorum voluptates, in, ad assumenda illo eius provident animi reiciendis corrupti, neque ipsa fuga voluptate dolores!</p>
      <button onClick={()=>props.setLogin(false)}>Logout</button>
    </div>
  )
}

export default Profile