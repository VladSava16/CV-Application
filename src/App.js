import React, { Component } from 'react';
import Header from './components/header';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';

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
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
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

    handleExperienceInformation = (formState) => {
        this.setState({
            position: formState.target.position.value,
            company: formState.target.company.value,
            city: formState.target.city.value,
            from: formState.target.from.value,
            to: formState.target.to.value,
        })
    }

    renderDetails = () => {
        return(
            <div className="result">
                <div className="personalInfo">
                    <div className="firstName">{this.state.firstName}</div>
                    <div className="lastName">{this.state.lastName}</div>
                    <div className="title">{this.state.title}</div>
                    <div className="address">{this.state.address}</div>
                    <div className="phoneNo">{this.state.phoneNo}</div>
                    <div className="email">{this.state.email}</div>
                    <div className="description">{this.state.description}</div>
                </div>
                <div className="experienceInfo">
                    <div className="position">{this.state.position}</div>
                    <div className="company">{this.state.company}</div>
                    <div className="city">{this.state.city}</div>
                    <div className="from">{this.state.from}</div>
                    <div className="to">{this.state.to}</div>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div id="content">
                <Header />
                <PersonalInfo handlePersonalInformation = {this.handlePersonalInfo}/>
                <Experience handleExperienceInformation = {this.handleExperienceInformation} />
                {this.renderDetails()}
            </div>
        );
    }
}