import React, {Component} from 'react';
//import InputUser from './Components/Inputuser';
import OutputUser from './Components/Outputuser';
import './App.css';

class App extends Component {
state={
userName: '',
address: '',
phoneNumber: '',
email: '',
city: 'Goa',
object: {}
}
  
onChangeHandler = (event) =>
{
  this.setState(
    {
      userName: event.target.value
    
    }
  )
    
  }
  onChangeHandlerAddress = (event) =>
{
  this.setState(
    {
      address: event.target.value
    
    }
  )
    
  }
  onChangeHandlerEmail = (event) =>
{
  this.setState(
    {
      email: event.target.value
    
    }
  )
    
  }

  onChangeHandlerPhoneNumber = (event) =>
  {
    this.setState(
      {
        phoneNumber: event.target.value
      
      }
    )
      
    }

    handleSubmit = (event) =>
  {
    
  //  alert('The form was submitted by ' + this.state.userName )
   event.preventDefault();

   this.setState(
    {
      object: 
      {city: this.state.city, userName: this.state.userName, address: this.state.address, email: this.state.email, phoneNumber:this.state.phoneNumber}
    
    }
  )

    }

    onSubmit = (props) =>
    {
      return(
        <div>
      <p>You have entered City: {props.city}</p>
      <p>You have entered username: {props.userName}</p>
      <p>You have entered Address: {props.address}</p>
      <p>You have entered Email: {props.email}</p>
      <p>You have entered PhoneNumber: {props.phoneNumber}</p></div>
      )      }

    handleChange(event) {
      this.setState({city: event.target.value});
    }

render()
{
  const form={
margin:'5px',
border: '2px solid black',
maxWidth: '40%',
padding:'10px',
fontSize: '14px',
fontStyle: 'italic',
textAlign: 'left',
display: 'inlineBlock'
  };
  const h={
textAlign: 'center'

  };
  const button = {
    fontSize: '17px',
    fontStyle: 'italic',
    padding: '10px',
    textAlign: 'center'
  }

  const f = {
    marginLeft: '450px'
  }
  const b = {
    marginLeft: '180px'
  }
  const s = {
    fontSize: '14px',
    fontStyle: 'italic'
  }
  return (
    <div style={f}>
    
       <form style={form} onSubmit={this.handleSubmit.bind(this)}>
         <br/>
         <h1 style={h}>Login Form</h1>
         <br/>
         <p>Please Enter your details below:</p>
         <br/>
    <label>Name&nbsp;&nbsp;&nbsp;</label><br/>
    <label><input type="text"  onChange={this.onChangeHandler.bind(this)}/>
    </label><br/><br/><br/>
    

    <label>Address&nbsp;&nbsp;&nbsp;</label><br/>
    <label><input type="text"  onChange={this.onChangeHandlerAddress.bind(this)}/>
    </label><br/><br/><br/>

    <label>Email&nbsp;&nbsp;&nbsp;</label><br/>
    <label><input type="text"  onChange={this.onChangeHandlerEmail.bind(this)}/>
    </label><br/><br/><br/>

    <label>Phone number&nbsp;&nbsp;&nbsp;</label><br/>
    <label><input type="text"  onChange={this.onChangeHandlerPhoneNumber.bind(this)}/>
    </label>
<br/><br/><br/>
<label>
          Pick your City name:<br/><br/>
          <select style={s} value={this.state.city} onChange={this.handleChange.bind(this)}>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Goa">Goa</option>
          </select>
        </label><br/><br/><br></br>
<div style={b}>
  {/* <input style={button} type="submit" value="submit" onChange={this.onSubmit.bind(this)}/></div> */}
  <input style={button} type="submit" value="submit"/></div>
  </form> 
  <div>
      <p>You have entered City: {this.state.object.city}</p>
      <p>You have entered username: {this.state.object.userName}</p>
      <p>You have entered Address: {this.state.object.address}</p>
      <p>You have entered Email: {this.state.object.email}</p>
      <p>You have entered PhoneNumber: {this.state.object.phoneNumber}</p></div>
 
  {/* <OutputUser userName={this.state.userName} address={this.state.address} email={this.state.email} phoneNumber={this.state.phoneNumber} city={this.state.city}/> */}
    </div>
  );
};
}

export default App;
