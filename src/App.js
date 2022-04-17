import React, { Component } from 'react';
import Header from './components/header';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';

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
            experienceCity: "",
            experienceFrom: "",
            experienceTo: "",
            university: "",
            educationCity: "",
            degree: "",
            subject: "",
            educationFrom: "",
            educationTo: "",
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
            experienceCity: formState.target.city.value,
            experienceFrom: formState.target.from.value,
            experienceTo: formState.target.to.value,
        })
    }

    handleEducationInformation = (formState) => {
        this.setState({
            university: formState.target.university.value,
            educationCity: formState.target.city.value,
            degree: formState.target.degree.value,
            subject: formState.target.subject.value,
            educationFrom: formState.target.from.value,
            educationTo: formState.target.to.value,
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
                    <div className="city">{this.state.experienceCity}</div>
                    <div className="from">{this.state.experienceFrom}</div>
                    <div className="to">{this.state.experienceTo}</div>
                </div>
                <div className="educationInfo">
                    <div className="university">{this.state.university}</div>
                    <div className="city">{this.state.educationCity}</div>
                    <div className="degree">{this.state.degree}</div>
                    <div className="subject">{this.state.subject}</div>
                    <div className="from">{this.state.educationFrom}</div>
                    <div className="to">{this.state.educationTo}</div>
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
                <Education handleEducationInformation = {this.handleEducationInformation}/>
                {this.renderDetails()}
            </div>
        );
    }
}