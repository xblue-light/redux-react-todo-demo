import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class NewPost extends React.Component {

    state = {
        title: '',
        firstName: '',
        startDate: new Date(),
        body: ''
    };

    updateDatePickerState = (date) => {
        console.log(date.toISOString());
        this.setState({startDate: date});
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log("handleInputChange => " + e.target.value);
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim() && this.state.body.trim()) {
            // onAddPost() will trigger an action, that we have access 
            // to from higher order component './containers/CreatePost' and that action will
            // call the reducer and modify the global state.
            this.props.onAddPost(this.state);
            this.handleReset();
            console.log("handleSubmit => " + JSON.stringify(this.state));
        }
    };

    handleReset = () => {
        this.setState({
            title: '',
            firstName: '',
            body: ''
        });
        console.log("handleReset => Triggered! Resetting state of input fields.");
    };

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    name="title"
                    onChange={ this.handleInputChange }
                    value={ this.state.title }
                    />
                </div>
                <div className="form-group">
                    <DatePicker 
                        onChange={ this.updateDatePickerState }
                        selected={ this.state.startDate } 
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        className="form-control"
                        name="firstName"
                        onChange={ this.handleInputChange }
                        value={ this.state.firstName } 
                    />
                </div>

                <div className="form-group">
                    <textarea
                    cols="19"
                    rows="8"
                    placeholder="Body"
                    className="form-control"
                    name="body"
                    onChange={ this.handleInputChange }
                    value={ this.state.body }>
                    </textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Add Post</button>
                    <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
                    Reset
                    </button>
                </div>
                </form>
            </div>
        );
    }
}

export default NewPost;