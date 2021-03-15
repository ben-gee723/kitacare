import React, {Link} from 'react'

export default function Register() {
    return (
        <div>
            <h1>Choose your Account!</h1>
          <Link to="/kgregister"><button>Register a Kindergarten</button></Link>  
          <Link to="/tregister"><button>Register as Teacher</button></Link>  
        </div>
    )
}
