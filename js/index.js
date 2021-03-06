import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message, Button } from 'antd';
import 'antd/dist/antd.css'
import request from 'superagent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    request.get('/some-url')
      .end((err, res) => {
        if (err) {
          this.setState({
            date: 1111
          })
        }
      })
  }

  onClick() {
    this.setState({
      date: 2222
    })
  }

  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
        <Button onClick={e => this.onClick(e)}>kaksssa</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));