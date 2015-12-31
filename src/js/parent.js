var Child = require('./child');

var Parent = React.createClass({
  render: function(){
    return (
      <div>
        <div>This is the Parent component.</div>
        <Child name="child" />
      </div>
    )
  }
});

module.exports = Parent;