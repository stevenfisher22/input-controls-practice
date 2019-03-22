import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Example extends React.Component {
    state = { 
        text: 'try typing something'
    };

    handleChange = (event) => {
        let text = event.target.value;
        text = text.replace(/[0-9]/g, '')
        this.setState({
            text
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

class RefInput extends React.Component {
    showValue = () => {
        alert(`Input contains: ${this.input.value}`);
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    ref={input => this.input = input}
                />
                <button onClick={this.showValue}>
                    Alert the Value!
                </button>
            </div>
        );
    }
}

// Easy Input - Uncontrolled Input
// const EasyInput = () => (
//     <input type="text"/>
// )

ReactDOM.render(<RefInput />, document.getElementById('root'))