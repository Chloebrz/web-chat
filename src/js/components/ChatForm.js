/*** @jsx React.DOM */

var React = require("react");

var ChatForm = React.createClass({
    
    handleSubmit: function(e) {
    
        e.preventDefault();
        var new_message = this.refs.new_message.getDOMNode().value.trim();
        
        if (!new_message) {
            return;
        }
        
        this.props.onMessageSubmit({text: new_message});
        this.refs.new_message.getDOMNode().value = '';
        return;
    },
    
    render: function() {
        
        return (
            <form className="chatForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your message..." size="50" ref="new_message" />
                <br/>
                <input type="submit" value="Send" className="button" />
            </form>
        );
    }
});

module.exports = ChatForm;