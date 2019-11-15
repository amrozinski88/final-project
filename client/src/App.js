import React, { Component } from 'react';
import './App.css';
import LoginScreen from "./container/LoginScreen";
import API from "./utils/API"
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[],
      currentUser: null
    }
  }
  // componentWillMount(){
  //   var loginPage =[];
  //   loginPage.push(<LoginScreen appContext={this} key={"login-screen"}/>);
  //   this.setState({
  //                 loginPage:loginPage
  //                   })
  // }
  // TODO: here are examples of your api utilities---------------
  // componentDidMount() {
  //   API.getUsersInfo("adam1@gmail.com")
  //   .then(response=>{
  //     this.setState({currenUser:response.data})
  //   });

    // API.createUser({
    //   email: `diditwork10@yes.com`,
    //   password: `yes it did`
    // }).then(response=>console.log(response.data));

    // FIXME: not working yet
    // API.deleteUser({email:"diditwork2@yes.com"}).then(response=>response.data)
  // }


  render() {
    return (
      <div className="App">
      {this.state.loginPage}
      {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;