import React,{Component} from "react";
import "./Style.css"

export default class MyClassComponent3 extends Component{
    render(){
        return(
            <div className="cards">
            <img src="https://www.clipbot.gg/public/img/clipbotgg_logo.png" alt="not found"/>
            <h3>
                my name is {this.props.name} and i am {this .props.age} year old and i am from {this.props.country }!!! 
            </h3>
            <button>Anymore..</button>
            </div>
        )
    }

}