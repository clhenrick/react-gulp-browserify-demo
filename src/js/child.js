var Child = React.createClass({
  render: function() {
    return (
      <div>
        and this is the cray <b>{this.props.name}</b>
      </div>
    )
  }
});

module.exports = Child;