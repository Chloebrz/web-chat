/*** @jsx React.DOM */

var React = require("react");
var ChatBox = require("./components/ChatBox");

React.render(
    <ChatBox />,
    document.getElementById('content')
);