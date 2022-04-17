import React, {Component} from "react";

export default class Education extends Component{
    constructor(props){
        super(props);
    }
    submitData = (e) =>{
        e.preventDefault();
        this.props.handleEducationInformation(e);
    }
    render(){
        return(
            <div className="educationInfo">
                <p className="sectionHeader">Education</p>
                <form onSubmit = {this.submitData} className="formSection">
                    <input type="text" name="university" placeholder="University Name"/>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="degree" placeholder="Degree"/>
                    <input type="text" name="subject" placeholder="Subject"/>
                    <input type="text" name="from" placeholder="From"/>
                    <input type="text" name="to" placeholder="To"/>
                    <button type="submit">Submit Section</button>
                </form>
            </div>
        );
    }
}