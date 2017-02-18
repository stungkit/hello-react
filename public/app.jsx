var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}!</p>
      </div>
    );
  }
});

var GreeterMessageForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var message = this.refs.message.value;
    if (message.length > 0) {
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <textarea ref="message"></textarea>
        <button>Set Message</button>
      </form>
    );
  }
});

var GreeterNameForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    );
  }
})

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from the component'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  handleNewMessage: function(message) {
    this.setState({
      message: message
    });
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterNameForm onNewName={this.handleNewName}/>
        <GreeterMessageForm onNewMessage={this.handleNewMessage}/>
      </div>
    );
  }
});

var firstName = 'Smati';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
