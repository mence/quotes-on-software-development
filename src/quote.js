var React = require('react');

var Quote = React.createClass({
  propTypes: {
    quote: React.PropTypes.string.isRequired,
    author: React.PropTypes.string,
    url: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="quote">
        <div className="quote" id="text">
          <a href={this.props.url}>
            <h1>{"“" + this.props.quote + "”"}
            </h1>
            <p>{"—" + this.props.author}</p>
          </a>
        </div>
      </div>
    );
  }
});

module.exports = Quote;
