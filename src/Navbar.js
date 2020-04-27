import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='navbar'>
      <Link to='/contacts'><button>Contact List</button></Link>    
     <Link to='/Ajouter'><button>Add Contact</button></Link>     
        </div> );
    }
}
 
export default Navbar;