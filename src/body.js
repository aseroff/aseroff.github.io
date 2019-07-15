import React, { Component } from 'react';

export class Body extends Component {

  constructor(props) {
    super(props);
    this.page = 'bio';
  }

  content(page) {
    if (page === 'bio') {
      return (<p>Professional programmer, master musician, television technician, willing writer, épée fencer emeritus.</p>)
    }
    else if (page === 'projects') {
      return ("")
    }
    else if (page === 'links') {
      return (
        <div>
          <h1>around</h1>
          <h2>contact</h2>
          <p>For inquiries about web development work, or just to get in touch, <a href="mailto:andy@seroff.co">email</a> me.</p>

          <h2>professional</h2>
          <ul>
            <li><a href="http://www.github.com/aseroff">github</a></li>
            <li><a href="http://www.linkedin.com/in/aseroff">linkedin</a></li>
            <li><a href="https://angel.co/andrew-seroff">angel.co</a></li>
            <li><a href="https://localsolo.com/san-francisco-ca/profile/43559/">localsolo</a></li>
            <li><a href="https://www.freelancer.com/u/aseroff.html">freelancer</a></li>
            <li><a href="https://www.upwork.com/freelancers/~01e6b4cf5819bdc937">upwork</a></li>
            <li><a href="https://www.thumbtack.com/-Oakland-CA/service/2817158">thumbtack</a></li>
          </ul>

          <h2>social</h2>
          <ul>
            <li><a href="http://www.facebook.com/aseroff">facebook</a></li>
            <li><a href="http://www.twitter.com/aseroff">twitter</a></li>
            <li><a href="http://aseroff.tumblr.com/">tumblr</a></li>
            <li><a href="http://www.instagram.com/aseroff">instagram</a></li>
            <li><a href="http://www.pinterest.com/aseroff">pinterest</a></li>
            <li><a href="http://www.steamcommunity.com/id/rvaen">steam</a></li>
          </ul>

          <h2>music</h2>
          <ul>
            <li><a href="http://open.spotify.com/user/aseroff">spotify</a></li>
            <li><a href="https://soundcloud.com/aseroff-1">soundcloud</a></li>
            <li><a href="http://www.last.fm/user/rvaen17">last.fm</a></li>
          </ul>

          <h2>other</h2>
          <ul>
            <li><a href="https://keybase.io/aseroff">keybase</a></li>
          </ul>
        </div>
      )
    }
    else {
      return (<p>{this.props.page}</p>)
    }
  }

  render() {
    return (
		  <div className="App-content">
        {this.content(this.page)}
      </div>
    );
  }
}

export default Body;
