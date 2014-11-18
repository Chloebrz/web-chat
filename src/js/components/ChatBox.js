/*** @jsx React.DOM */


var socket = io.connect();
var React = require("react");
var ChatForm = require("./ChatForm");
var MessagesList = require("./MessagesList");
var UsersList = require("./UsersList");

var Messages = [];
var Users = [];

var pseudo;

var ChatBox = React.createClass({
    
    getInitialState: function() {
        
        pseudo = prompt("What's your username?");
        Messages.push({user: 'CONNECTION', text: 'You\'re online, ' + pseudo, date: new Date()});
        socket.emit('new_client', pseudo);
        socket.on('init', this.initialize);
        Users.push(pseudo);
        
        socket.on('message', this.newMessage);
        
        socket.on('new_client', this.newUser);
        
        socket.on('client_left', this.userDisconnect);
        
        return {messages: Messages, users: Users};
    },
    
    initialize: function(data) {
        
        Users = data.users;
        this.setState({users: Users});
    },
    
    newMessage: function(data) {
        
        Messages.push({user: data.user, text: data.text, date: new Date()});
        
        console.log("users", this.state.users);
        console.log("messages", this.state.messages);
        
        this.setState({messages: Messages});
    },
    
    newUser: function(data) {
        
        Messages.push({user: 'NEW USER: ', text: data.pseudo + ' is now online', date: new Date()});
        Users.push(data.pseudo);
        this.setState({messages: Messages, users: Users});
    },
    
    userDisconnect: function(data) {
        
        Messages.push({user: 'USER LEFT', text: data.pseudo + ' is now offline', date: new Date()});
        var index = Users.indexOf(data.pseudo);
        Users.splice(index, 1);
        this.setState({messages: Messages, users: Users});
    },
    
    handleMessageSubmit: function(message) {
        
        Messages.push({user: pseudo, text: message.text, date: new Date()});
        this.setState({messages: Messages});
        socket.emit('message', message.text);
    },
    
    render: function() {
        
        return (
            <div className="messagelist">
                <h1>Super Chat</h1>
                <h3>Using socket.io and react.js</h3>
                
                <UsersList users={this.state.users} />
            
                <MessagesList messages={this.state.messages} />
            
                <ChatForm onMessageSubmit={this.handleMessageSubmit} />
            </div>
        )
    }
});

module.exports = ChatBox;