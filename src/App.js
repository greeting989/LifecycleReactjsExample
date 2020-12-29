import React from "react";
import "./styles.css";

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        data:0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber(){
    this.setState({data:this.state.data+1});
  }
  render(){
    return(
          <div>
           <button onClick={this.setNewNumber}>Increment</button>
           <Content myNumber = {this.state.data}></Content>
          </div>
    );
  }
}

class Content extends React.Component{
  componentWillMount(){
    console.log("COmponent will mount");
  }
  componentDidMount(){
    console.log("Comp Did mount ");
  }
  componentWillReceiveProps(newProps){
      console.log("Component will mount");
  }
  shouldComponentUpdate(newProps,newState){
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log("COmponent will Update");
  }
  componentDidUpdate(prevProps,prevState){
    console.log("Compoent Did Update");
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
 }
 render() {
  return (
     <div>
        <h3>{this.props.myNumber}</h3>
     </div>
  );
}
}

export default App;