(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/clhenrick/tutorials/react-tutorial-app-guide/src/js/app.js":[function(require,module,exports){
var Parent = require('./parent');

React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./parent":"/Users/clhenrick/tutorials/react-tutorial-app-guide/src/js/parent.js"}],"/Users/clhenrick/tutorials/react-tutorial-app-guide/src/js/child.js":[function(require,module,exports){
// var React = require('react');

var Child = React.createClass({displayName: "Child",
  render: function() {
    return (
      React.createElement("div", null, 
        "and this is the ", React.createElement("b", null, this.props.name)
      )
    )
  }
});

module.exports = Child;

},{}],"/Users/clhenrick/tutorials/react-tutorial-app-guide/src/js/parent.js":[function(require,module,exports){
// var React = require('react');
var Child = require('./child');

var Parent = React.createClass({displayName: "Parent",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", null, "This is the Parent."), 
        React.createElement(Child, {name: "child"})
      )
    )
  }
});

module.exports = Parent;

},{"./child":"/Users/clhenrick/tutorials/react-tutorial-app-guide/src/js/child.js"}]},{},["/Users/clhenrick/tutorials/react-tutorial-app-guide/src/js/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2xoZW5yaWNrL3R1dG9yaWFscy9yZWFjdC10dXRvcmlhbC1hcHAtZ3VpZGUvc3JjL2pzL2FwcC5qcyIsIi9Vc2Vycy9jbGhlbnJpY2svdHV0b3JpYWxzL3JlYWN0LXR1dG9yaWFsLWFwcC1ndWlkZS9zcmMvanMvY2hpbGQuanMiLCIvVXNlcnMvY2xoZW5yaWNrL3R1dG9yaWFscy9yZWFjdC10dXRvcmlhbC1hcHAtZ3VpZGUvc3JjL2pzL3BhcmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFakMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxNQUFNLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUNGeEQsZ0NBQWdDOztBQUVoQyxJQUFJLDJCQUEyQixxQkFBQTtFQUM3QixNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7QUFBQSxRQUFBLGtCQUFBLEVBQ2Esb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQVMsQ0FBQTtNQUNwQyxDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSzs7O0FDWnRCLGdDQUFnQztBQUNoQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRS9CLElBQUksNEJBQTRCLHNCQUFBO0VBQzlCLE1BQU0sRUFBRSxVQUFVO0lBQ2hCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtRQUNILG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUEscUJBQXlCLENBQUEsRUFBQTtRQUM5QixvQkFBQyxLQUFLLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLE9BQU8sQ0FBQSxDQUFHLENBQUE7TUFDbEIsQ0FBQTtLQUNQO0dBQ0Y7QUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFBhcmVudCA9IHJlcXVpcmUoJy4vcGFyZW50Jyk7XG5cblJlYWN0LnJlbmRlcig8UGFyZW50IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyIsIi8vIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDaGlsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgYW5kIHRoaXMgaXMgdGhlIDxiPnt0aGlzLnByb3BzLm5hbWV9PC9iPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZDsiLCIvLyB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENoaWxkID0gcmVxdWlyZSgnLi9jaGlsZCcpO1xuXG52YXIgUGFyZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+VGhpcyBpcyB0aGUgUGFyZW50LjwvZGl2PlxuICAgICAgICA8Q2hpbGQgbmFtZT1cImNoaWxkXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyZW50OyJdfQ==
