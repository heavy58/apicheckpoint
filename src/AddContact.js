import React, { Component } from 'react';
import Axios from 'axios';
class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            email:'',
            phone:''
         }
    }
    ajouter=()=>{
Axios.post('http://localhost:4000/ajouterContact',{...this.state}).catch(err=>console.log(err))
    }
    render() { 
        return ( <div className="EditInterface">
        <input type='text' placeholder="name" onChange={(e)=>this.setState({name:e.target.value})}/>
        <input type='text' placeholder="email" onChange={(e)=>this.setState({email:e.target.value})}/>
        <input type='text' placeholder="phone" onChange={(e)=>this.setState({phone:e.target.value})}/>
        <button onClick={this.ajouter}>Ajouter Contact</button>
        </div> );
    }
}
 
export default AddContact;