import React, {Component} from "react";

export default class Experience extends Component{
    constructor(props){
        super(props);
    }
    submitData = (e) =>{
        e.preventDefault();
        this.props.handleExperienceInformation(e);
    }
    render(){
        return(
            <div className="experienceInfo">
                <p className="sectionHeader">Experience</p>
                <form onSubmit = {this.submitData}>
                    <input type="text" name="position" placeholder="Position"/>
                    <input type="text" name="company" placeholder="Company"/>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="from" placeholder="From"/>
                    <input type="text" name="to" placeholder="To"/>
                    <button type="submit">Submit Section</button>
                </form>
            </div>
        );
    }
}