import React,{Component} from 'react'
import axios from 'axios'
import Pies from './Pies'

function Menue(props){
    let piesMap = props.pies.map(s => {
        return <Pies key={s.name} updatePies={props.updatePies} s={s}/>
      })
    return(
        <div className= "menu">
            {piesMap}
            <h2 className= "footer">Open 5pm-10pm Monday - Saturday</h2>
        </div>
    )
}

export default Menue