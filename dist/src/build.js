(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/clhenrick/tutorials/react-tutorial-app-guide/src/js/app.js":[function(require,module,exports){
var Parent = require('./parent');

React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./parent":"/Users/clhenrick/tutorials/react-tutorial-app-guide/src/js/parent.js"}],"/Users/clhenrick/tutorials/react-tutorial-app-guide/src/js/child.js":[function(require,module,exports){
var Child = React.createClass({displayName: "Child",
  render: function() {
    return (
      React.createElement("div", null, 
        "and this is the cray ", React.createElement("b", null, this.props.name)
      )
    )
  }
});

module.exports = Child;

},{}],"/Users/clhenrick/tutorials/react-tutorial-app-guide/src/js/parent.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2xoZW5yaWNrL3R1dG9yaWFscy9yZWFjdC10dXRvcmlhbC1hcHAtZ3VpZGUvc3JjL2pzL2FwcC5qcyIsIi9Vc2Vycy9jbGhlbnJpY2svdHV0b3JpYWxzL3JlYWN0LXR1dG9yaWFsLWFwcC1ndWlkZS9zcmMvanMvY2hpbGQuanMiLCIvVXNlcnMvY2xoZW5yaWNrL3R1dG9yaWFscy9yZWFjdC10dXRvcmlhbC1hcHAtZ3VpZGUvc3JjL2pzL3BhcmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFakMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxNQUFNLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUNGeEQsSUFBSSwyQkFBMkIscUJBQUE7RUFDN0IsTUFBTSxFQUFFLFdBQVc7SUFDakI7TUFDRSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO0FBQUEsUUFBQSx1QkFBQSxFQUNrQixvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBUyxDQUFBO01BQ3pDLENBQUE7S0FDUDtHQUNGO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLOzs7QUNWdEIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUUvQixJQUFJLDRCQUE0QixzQkFBQTtFQUM5QixNQUFNLEVBQUUsVUFBVTtJQUNoQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7UUFDSCxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBLHFCQUF5QixDQUFBLEVBQUE7UUFDOUIsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxPQUFPLENBQUEsQ0FBRyxDQUFBO01BQ2xCLENBQUE7S0FDUDtHQUNGO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBQYXJlbnQgPSByZXF1aXJlKCcuL3BhcmVudCcpO1xuXG5SZWFjdC5yZW5kZXIoPFBhcmVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJ2YXIgQ2hpbGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIGFuZCB0aGlzIGlzIHRoZSBjcmF5IDxiPnt0aGlzLnByb3BzLm5hbWV9PC9iPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZDsiLCJ2YXIgQ2hpbGQgPSByZXF1aXJlKCcuL2NoaWxkJyk7XG5cbnZhciBQYXJlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5UaGlzIGlzIHRoZSBQYXJlbnQuPC9kaXY+XG4gICAgICAgIDxDaGlsZCBuYW1lPVwiY2hpbGRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJlbnQ7Il19
