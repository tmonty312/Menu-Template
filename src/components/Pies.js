import React,{Component} from 'react'
import Menue from './Menue'
import axios from 'axios'


class Pies extends Component{
    constructor(props){
        super(props);
        
        this.state =
        {
            name: props.s.name,
            price: props.s.price,
            edit: false
        }
    
    }
    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    handlePrice = (e) => {
        this.setState({price: e.target.value})
    }
    
    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    sendUpdate = (id) => {
        let {name, price} = this.state
        let pies = {name, price}
        axios.put('/api/pies/'+id, pies).then(results=> {
            this.props.updatePies(results.data)
            // this.setState({
                // edit: false,
               
            // })
        })
    }
    deletePie = (id) => {
        let {name, price} = this.state
        let pies = {name, price}
        axios.delete('/api/pies/'+id, pies).then(results=> {
            this.props.updatePies(results.data)
            this.setState({
                edit: false,
                name: '',
                price:''
            })
        })
    }

render(){
    const { s } = this.props
    

        return(
         <div>
            <div>
        
                <input className= "mypies" value={this.state.name} disabled onChange={this.handleName}/>
                <input className= "mypies-price" value={this.state.price} disabled={!this.state.edit} onChange={this.handlePrice}/>
                <button className= "buttons" onClick={()=> this.sendUpdate(s.id)}>Save</button>
                <button className= "buttons" onClick={ this.toggleEdit}>Change Price</button>
                <button className= "buttons" onClick={()=> this.deletePie(s.id)}>Remove Pie</button>
             </div>

        </div>
        )
}
}

export default Pies