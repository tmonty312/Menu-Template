import React, {Component} from 'react'
import axios from 'axios'

class Create extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0
        }
    }
        handleName = (e) => {
            this.setState({name: e.target.value})
        }
        handlePrice = (e) => {
            this.setState({price: e.target.value})
        }
    addPie= () => {
        const {name, price} = this.state
        const newPie = {name, price}
        axios.post('/api/pies', newPie).then(results =>{
            this.props.updatePies(results.data)
        })
    }

    
    

    render(){
    return(
        <div className="Create">
        <h2 className= 'App-title'>Small Town Pie Co.</h2>
            <input className= "name-css" type= "text" placeholder='Name' value={this.state.name} onChange={this.handleName}/>
            <input className= "name-css" type= "number"  value={this.state.price} onChange={this.handlePrice}/>
            <button className= "create-button" onClick={this.addPie}>Add New Pie</button>
        </div>
    )
    }

}

export default Create