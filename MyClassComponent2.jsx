import React,{Component} from "react";
import "./Style.css"

export default class MyClassComponent2 extends Component{
    render(){
        return(
            <div className="my-cards">
            <h3>
                my name is {this.props.name} and i am {this .props.age} year old and i am from {this.props.country }!!! 
            </h3>
            </div>
        )
    }

}
