var React = require('react');

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

module.exports = GreeterMessageForm;
