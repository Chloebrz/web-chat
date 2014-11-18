/*** @jsx React.DOM */

var React = require("react");

var Message = React.createClass({

    render: function() {
    
        return (
            <p>
                <span className="date">[{this.props.date.toLocaleTimeString()}] </span><em>{this.props.user}</em> - {this.props.text}
            </p>
        );
    }
});

module.exports = Message;