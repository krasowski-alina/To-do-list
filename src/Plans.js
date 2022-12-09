import { Component } from "react";
import check from './check.png';

export class Plans extends Component {
    state = {
        userInput: "",
        arrayList: []
    }
    inputField(event){
        this.setState({userInput: event});
    }
    addItem(input){
        if(input === ""){
            alert("Please, enter your plans!")
        }
        else{
            let newItem = this.state.arrayList
            newItem.push(input )
            this.setState({arrayList: newItem, userInput: ""})
        }
    }
    crossedWord(event){
        const li = event.target;
        li.classList.toggle("crossed")
    }
    deleteAll(){
        let ourArray = this.state.arrayList;
        ourArray = [];
        this.setState({arrayList: ourArray})
    }
    enterKey(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.enterKey}>
                <div className="container">
                    <input type="text" placeholder="What are you going to do today?"
                    value={this.state.userInput}
                    onChange={(e) =>{this.inputField(e.target.value)}}/>
                </div>
                <div className="container">
                    <button className="btn add"
                    onClick={()=> this.addItem(this.state.userInput)}>ADD</button>
                </div>
                    <ul>
                        {this.state.arrayList.map((item, index) => 
                        (<li key={index} onClick={this.crossedWord}>
                            <img src={check} alt="checkmark"className="check"/>  {item}
                        </li>))}
                    </ul>
                
                <div className="container">
                    <button className="btn delete"
                    onClick={() => this.deleteAll()}>DELETE</button>
                </div>
                </form>
            </div>
        )
    }
}