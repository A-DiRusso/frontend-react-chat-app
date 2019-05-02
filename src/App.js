import React from 'react';
import './App.css';
import axios from 'axios';
import ChatList from './ChatList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
 componentDidMount() {
    setInterval( async () => {
      const { data } = await axios.get('/api');
      console.log(data);
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
        </header>
      </div>
    );
  }
}


export default App;
