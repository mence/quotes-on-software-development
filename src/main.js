const React = require('react');
const ReactDOM = require('react-dom');

const QuoteComponent = require('./quote');
const FooterComponent = require('./footer');

const quotesJSON = require('./assets/quotes.json');

const IndexPage = React.createClass({
  getInitialState: function() {
    return {
      quote: '',
      author: '',
    };
  },

  componentDidMount: function() {
    const randomQuote = quotesJSON.quotes[Math.floor(Math.random() * quotesJSON.quotes.length)];
    this.setQuote(randomQuote);
  },

  setQuote: function(data) {
    this.setState({
      quote: data.quote.text,
      author: data.quote.author,
    });
  },

  render: function() {
    return (
      <div id="main">
        <QuoteComponent quote={this.state.quote}
                        author={this.state.author} />
        <p>
          <a href="./index.html">Pick another software development quote</a>
        </p>
        <FooterComponent />
      </div>
    );
  },
});

ReactDOM.render(
  <IndexPage />,
  document.getElementById('container')
);
