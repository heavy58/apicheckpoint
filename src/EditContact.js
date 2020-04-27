import React, { Component } from 'react';
import Axios from 'axios';
class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        name:'',
        email:'',
        phone:'',
        contact:[]
         }
    }
    componentDidMount(){
        Axios.get('http://localhost:4000/contacts').then(res=>{this.setState({contact:res.data})
        this.state.contact.map(el=>(el._id===this.props.match.params.id)&&
        this.setState({
            name:el.name,
            email:el.email,
            phone:el.phone
        }))
   
    
    })
    }
     
    modifier=()=>{
        Axios.put('http://localhost:4000/modifier/'+this.props.match.params.id,{...this.state})
    }
    render() { 
        console.log(this.state.name)
        return ( <div>
            <input type='text' placeholder="name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
           <input type='text' placeholder="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
           <input type='text' placeholder="phone" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})}/>
           <button onClick={this.modifier}>Modifier</button>
       </div> );
    }

}
 
export default EditContact;