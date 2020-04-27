import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contact:[]
         }
    }
    
    componentDidMount(){
        Axios.get('http://localhost:4000/contacts').then(res=>this.setState({
            contact:res.data
        }))
    }
    componentDidUpdate(PrevProps,PrevState){
        if(PrevState.contact.length!==this.state.contact){
            Axios.get('http://localhost:4000/contacts').then(res=>this.setState({
                contact:res.data
            }))   
        }
    }
    delete=(id)=>{
        Axios.delete('http://localhost:4000/delete/'+id).catch(err=>console.log(err))
    }
    render() { 
        return ( <div className="total" >
        {this.state.contact.map((el,i)=><div className='contactList'>
        <span>name: {el.name}</span>
        <span>email: {el.email}</span>
        <span>phone: {el.phone}</span>
        <div>
       <Link to={`/Edit/${el._id}`}><button>Edit</button></Link> 
        <button onClick={()=>this.delete(el._id)}>Delete</button>
        </div>
        </div>)}


        </div>  );
    }
}
 
export default ContactList;