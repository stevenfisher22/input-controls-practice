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

const EasyInput = () => (
    <input type="text"/>
)

ReactDOM.render(<EasyInput />, document.getElementById('root'))