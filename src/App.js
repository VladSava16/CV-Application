import React, { Component } from 'react';
import Header from './components/header';
import PersonalInfo from './components/PersonalInfo';

export default class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            address: "",
            phoneNo: "",
            email: "",
            description: "",
        }
    }
    
    handlePersonalInfo = (formState) => {
        this.setState({
            firstName: formState.target.firstName.value,
            lastName: formState.target.lastName.value,
            title: formState.target.title.value,
            address: formState.target.address.value,
            phoneNo: formState.target.phoneNo.value,
            email: formState.target.email.value,
            description: formState.target.description.value,
        })
    }

    renderPersonalDetails = () => {
        return(
            <div className="personalInfo">
                <div className="firstName">{this.state.firstName}</div>
                <div className="lastName">{this.state.lastName}</div>
                <div className="title">{this.state.title}</div>
                <div className="address">{this.state.address}</div>
                <div className="phoneNo">{this.state.phoneNo}</div>
                <div className="email">{this.state.email}</div>
                <div className="description">{this.state.description}</div>
            </div>
        );
    }

    render(){
        return(
            <div id="content">
                <Header />
                <PersonalInfo handlePersonalInformation = {this.handlePersonalInfo}/>
                {this.renderPersonalDetails()}
            </div>
        );
    }
}