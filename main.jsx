class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <Gorilla tweet={this.state.value}/>
      
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} rows='5' cols='30' />
        </label>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
