import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Example extends React.Component {
    state = { text: ''};

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        return (
            <input 
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
            />
        )
    }
}

ReactDOM.render(<Example />, document.getElementById('root'))