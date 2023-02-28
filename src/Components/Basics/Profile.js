// Propes Example 

// import React from 'react'

// const Profile = (prop) => {
//   return (
//     <>
//     <div>
//         <h1>{prop.text.name}</h1>
//         <h1>{prop.data}</h1>

//     </div>
//     </>
//   )
// }

// export default Profile


import React from 'react'

export default  class Profile extends React.Component 
{
    render()
    {
        return(
            <div>
                <h1> Hellow, {this.props.data}</h1>
                <h1> Hellow, {this.props.text.name}</h1>
            </div>
        )
    }
}



