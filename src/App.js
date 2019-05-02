import React from 'react';
import './App.css';
import axios from 'axios';
import ChatList from './ChatList';
import ChatForm from './ChatForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: '',
    };
  }
 componentDidMount() {
    setInterval( async () => {
      const { data } = await axios.get('/api');
      // console.log(data);
      this.setState({
        messages: data,
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chat App</h1>
          <ChatList messages={this.state.messages} />
          <ChatForm 
            text={this.state.text}
            handleChange={this._setText}
            handleSend={this._sendMessage}
          />
        </header>
      </div>
    );
  }
  _setText = () => {
    console.log('App _setText');
  }
  _sendMessage = () => {
    console.log('App: _sendMessage');
  }
}


export default App;
