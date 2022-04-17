import React, { Component } from 'react';

export default class PersonalInfo extends Component{
    constructor(props){
        super(props);
    }

    submitData = (e) =>{
        e.preventDefault();
        this.props.handlePersonalInformation(e);
    }

    render(){
        return(
            <div className="personalInfo">
                <p className="sectionHeader">Personal Information</p>
                <form onSubmit = {this.submitData}>
                    <input type="text" name="firstName" placeholder="First Name"/>
                    <input type="text" name="lastName" placeholder="Last Name"/>
                    <input type="text" name="title" placeholder="Title"/>
                    <input type="text" name="address" placeholder="Address"/>
                    <input type="text" name="phoneNo" placeholder="Phone Number"/>
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="text" name="description" placeholder="Description"/>
                    <button type="submit">Submit Section</button>
                </form>
            </div>
        );
    }

}