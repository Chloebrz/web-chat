/*** @jsx React.DOM */

var React = require("react");
var Message = require("./Message");

// the conversation, which is the list of messages from every person connected
var MessagesList = React.createClass({

    getMessageNodes : function() {
        
        return this.props.messages.map(function (message) {

            return (
                <Message date={message.date} user={message.user} text={message.text} />
            );
        });
    },

    render: function() {
        
        return (
            <div className="messageList">
                <h2>Conversation</h2>
                {this.getMessageNodes()}
            </div>
        );
    },

    componentDidUpdate: function () {
    
    	var messageList = $(this.getDOMNode());
	    messageList[0].scrollTop = messageList[0].scrollHeight;
    }
});

module.exports = MessagesList;