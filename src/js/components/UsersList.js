/*** @jsx React.DOM */

var React = require("react");

// the list of the online users
var UsersList = React.createClass({

    getUserNodes : function() {
        
        return this.props.users.map(function (user) {
            return (
                <li>{user}</li>
            );
        });
    },

    render: function() {
        
        return (
            <div className="usersList">
                <h2>Users</h2>
                <ul>
                    {this.getUserNodes()}
                </ul>
            </div>
        );
    }
});

module.exports = UsersList;