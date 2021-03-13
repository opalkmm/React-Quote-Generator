class Application extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        quote: '',
        author:''
      }
      this.handleClick = this.handleClick.bind(this);
  }
  
   //fetch API, quotes in my github gist
  componentDidMount() {
    this.randomQuote()
  }
  
   randomQuote() {
     let source = 'https://gist.githubusercontent.com/opalkmm/8bb044921d386194311f3b20e87bce42/raw/92a0b81129669887ae42c9fd6fcb9ab26de097d1/quotes-for-react.json' 
     
     axios.get(source).then(res => {
       let data = res.data.quotes
       let quoteIndex =  Math.floor(Math.random() * data.length)
       let randomQuote = data[quoteIndex]
       
       //set state to change the state prop
       //update DOM
       this.setState({
       quote: randomQuote['quote'],
       author: randomQuote['author']
     })
     })
  }

 handleClick = (e) => {
    this.randomQuote();
  }
   
 
    
  render() {
    //store variable
    const{quote, author} = this.state
    return (
       <div id='container'>
          <div id="quote-box">
  
              <div id="text"><p>'{quote}'</p></div>
              <div id="author"><p>- {author} </p></div>
      
            <div id="buttons">
               <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote}${author}`} target='_blank'> 
               <i className="fab fa-twitter-square fa-3x"></i>
               </a>
              <span><button className="btn btn-dark" id="new-quote" onClick={this.handleClick}>New Quote</button></span>
              
            </div> 
          </div>
        </div>
    )
  }
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));
