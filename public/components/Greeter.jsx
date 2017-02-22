var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterMessageForm = require('GreeterMessageForm');
var GreeterNameForm = require('GreeterNameForm');

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

module.exports = Greeter;
