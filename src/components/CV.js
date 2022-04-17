import React, { Component } from "react";
import './result.css'

export default class CV extends Component{
    render(){
        return(
            <div className="result">
                <div className="personalInfo division">
                    <div className="name">{this.props.data.firstName + ' ' + this.props.data.lastName}</div>
                    <div className="address">{this.props.data.address}</div>
                    <div className="phoneNo">{this.props.data.phoneNo}</div>
                    <div className="email">{this.props.data.email}</div>
                    <div className="description">{this.props.data.description}</div>
                </div>
                <div className="workExperience division">
                    <div className="title">{this.props.data.position}</div>
                    <div className="duration">{this.props.data.experienceFrom + '-' + this.props.data.experienceTo}</div>
                    <div className="company">{this.props.data.company}</div>
                    <div className="jobCity">{this.props.data.experienceCity}</div>
                </div>
                <div className="education division">
                    <div className="title">{this.props.data.university}</div>
                    <div className="duration">{this.props.data.educationFrom + '-' + this.props.data.educationTo}</div>
                    <div className="studyCity">{this.props.data.educationCity}</div>
                    <div className="degree">{this.props.data.degree}</div>
                    <div className="subject">{this.props.data.subject}</div>
                </div>
            </div>
        );
    }
}