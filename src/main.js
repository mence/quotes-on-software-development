React = require('react');
ReactDOM = require('react-dom');

QuoteComponent = require('./quote');
FooterComponent = require('./footer');

var quotesJSON = require('./assets/quotes.json');

var IndexPage = React.createClass({
  getInitialState: function () {
    return {
      quote: '',
      author: ''
    };
  },

  componentDidMount: function () {
    var randomQuote = quotesJSON.quotes[Math.floor(Math.random() * quotesJSON.quotes.length)];
    this.setQuote(randomQuote);
  },

  setQuote: function (data) {
    this.setState({
      quote: data.quote.text,
      author: data.quote.author
    });
  },

  render: function () {
    return (
      <div id='main'>
        <QuoteComponent quote={this.state.quote}
                        author={this.state.author} />
        <p>
          <a href='./index.html'>Pick another software development quote</a>
        </p>
        <FooterComponent />
      </div>
    );
  }
});

ReactDOM.render(
  <IndexPage />,
  document.getElementById('container')
);
