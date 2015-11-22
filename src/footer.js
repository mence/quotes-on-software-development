const React = require('react');

const Footer = React.createClass({
  render: function() {
    return (
      <div id="small">
        <p>
          A <a href="http://facebook.github.io/react/" title="React.js">React</a> experiment.
          Quotes picked by <a href="http://www.timhordern.com" title="Tim Hordern">Tim Hordern</a>.
        </p>
      </div>
    );
  },
});

module.exports = Footer;
