import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class NewPost extends React.Component {

    state = {
        title: '',
        firstName: '',
        startDate: new Date(),
        isA: false,
        isB: false,
        isC: false,
        body: ''
    };

    toggleCheckboxIsA = () => {
        this.setState(prevState => ({
            // basically means set the value to be NOT the previous state value
            // example if checkbox was false previously, set it to true 
            // because prev. state was false
            isA: !prevState.isA,
        }));
    }

    toggleCheckboxIsB = () => {
        this.setState(prevState => ({
            isB: !prevState.isB,
        }));
    }
    toggleCheckboxIsC = () => {
        this.setState(prevState => ({
            isC: !prevState.isC,
        }));
    }

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

        // for all the keys(checkboxes) in current state with values equal to true(checked)
        // store those keys into the empty array 'arr'
        let arr = [];
        for (var key in this.state) {
            if(this.state[key] === true) {
                arr.push(key);
            }
        }
        console.log(arr);

        // cast/convert the array 'arr' from above into an object with toString()
        let checkBoxArrayData = {
            check: arr.toString() 
        };
        console.log("checkBoxArrayData => " + JSON.stringify(checkBoxArrayData))
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
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="checkbox"
                           checked={this.state.isA}
                           onChange={this.toggleCheckboxIsA}
                           className="form-check-input"
                    />
                    Checkbox = A
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="checkbox"
                           checked={this.state.isB}
                           onChange={this.toggleCheckboxIsB}
                           className="form-check-input"
                    />
                    Checkbox = B
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="checkbox"
                           checked={this.state.isC}
                           onChange={this.toggleCheckboxIsC}
                           className="form-check-input"
                    />
                    Checkbox = C
                    </label>
                </div>
                <br/>
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