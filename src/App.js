import React, { Component } from 'react';

import Nav from './nav.js';
import Project from './project.js';
import pic from './images/pic.png';
import bach from './images/projects/bach.png';
import cfdb from './images/projects/cfdb.png';
import otl from './images/projects/otl.png';
import nextguide from './images/projects/nextguide.png';
import myguy from './images/projects/myguy.png';
import ocho from './images/projects/ocho.png';
import quips from './images/projects/quips.png';
import sideshow from './images/projects/sideshow.png';
import tndrbox from './images/projects/tndrbox.png';
import tokens from './images/projects/tokens.png';
import wedding from './images/projects/wedding.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 'bio' };
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({ page: page });
  }

  content(page) {
    if (page === 'bio') {
      return (
        <div className="App-contents">
          <h1>bio</h1>
          <img src={pic} alt="Andy" />
          <p>Professional programmer, master musician, television technician, willing writer, épée fencer emeritus.</p>
        </div>
      )
    }
    else if (page === 'projects') {
      return (
        <div className="App-contents">
          <h1>projects</h1>
          <h2>professional projects</h2>
          <p>Some of the most notable projects I've worked on. If the link takes you to press, the project is not accessable via the web.</p>
          <Project key="otl" name="Open Textbook Library" url="https://open.umn.edu/opentextbooks" subtitle="University of Minnesota, 2018-" description="The Open Textbook Library provides a growing catalog of free, peer-reviewed, and openly-licensed textbooks.<br/> Build with Ruby on Rails and Bootstrap." img={otl} />
          <Project key="myguy" name="MyGuy" url="https://www.yahoo.com/news/viggle-kicks-off-football-season-144900231.html" subtitle="Viggle, 2015" description="Rails platform that used live NFL play data to create single-game fantasy leagues." img={myguy} />
          <Project key="clorox" name="Clorox Matchmaker" url="https://www.mobilemarketer.com/ex/mobilemarketer/cms/news/strategy/22892.html" subtitle="Viggle, 2015" description="Rails platform for creating games where the player predicts who will be eliminated from competition reality shows. Debuted as part of a Clorox campaign around ABC's The Bachelorette, and most recently used by HGTV for Ellen's Design Challenge." img={bach}/>
          <Project key="ng" name="NextGuide" url="https://www.cnet.com/news/nextguide-for-ipad-tries-to-bridge-gap-between-live-streaming-tv/" subtitle="Dijit, 2014-2016" description="A television listings guide that notified you when your favorite shows were on, serving over one million reminders a month. Notable clients included FOX, HGTV, and History Channel." img={nextguide} />
          <Project key="quips" name="Quips" url="https://techcrunch.com/2012/11/05/miso-quips/" subtitle="Miso, 2012-2013" description="Quips lets you find a great scene from a TV show, caption it with your thoughts, and share it instantly!" img={quips} />
          <Project key="sideshows" name="SideShows" url="https://mashable.com/2012/02/02/hbo-miso-game-of-thrones/" subtitle="Miso, 2011-2012" description="A slide show of timed content playing along with TV shows. Notable clients included HBO, Showtime, and USA Network." img={sideshow}  />
          <h2>personal web projects</h2>
          <Project key="tokens" name="Tokens" url="https://www.tokensapp.co" subtitle="2017-" description="Board Game Check-in App.<br/> Website built with Ruby on Rails and Bootstrap, AMP available.<br/> Mobile apps built with React Native." img={tokens} />
          <Project key="andy" name="andy.seroff.co" url="https://andy.seroff.co" subtitle="2016-" description="Personal site and directory.<br/> Built with Middleman, rebuilt with React." />
          <Project key="boutcommittee" name="BoutCommittee" url="https://www.bout-committee.com" subtitle="2016-" description="NCAA fencing tournament administration platform and result database.<br/> Built with Ruby on Rails and Bootstrap, AMP available and uses Selectize.js" img={cfdb} />
          <Project key="ocho" name="Ocho" url="https://ocho.seroff.co" subtitle="2015-" description="Site for the rules to a silly card game.<br/> Built with Middleman, open-sourced on GitHub." img={ocho} />
          <Project key="wedding" name="Wedding" url="" subtitle="circa 2016" description="Site providing information for wedding guests." img={wedding} />
          <Project key="tndrbox" name="Tndrbox" url="https://www.tndrbox.com" subtitle="designer, 2012-2013" description="Community events board.<br/> Designed with Balsamiq, Photoshop" img={tndrbox} />
        </div>
      )
    }
    else if (page === 'links') {
      return (
        <div className="App-contents">
          <h1>around</h1>
          <h2>contact</h2>
          <p>For inquiries about web development work, or just to get in touch, <a href="mailto:andy@seroff.co">email</a> me.</p>

          <h2>professional</h2>
          <ul>
            <li><a href="https://www.github.com/aseroff">github</a></li>
            <li><a href="https://www.linkedin.com/in/aseroff">linkedin</a></li>
          </ul>

          <h2>social</h2>
          <ul>
            <li><a href="https://www.facebook.com/aseroff">facebook</a></li>
            <li><a href="https://www.twitter.com/aseroff">twitter</a></li>
            <li><a href="https://aseroff.tumblr.com/">tumblr</a></li>
            <li><a href="https://www.instagram.com/aseroff">instagram</a></li>
            <li><a href="https://www.pinterest.com/aseroff">pinterest</a></li>
            <li><a href="https://www.steamcommunity.com/id/rvaen">steam</a></li>
          </ul>

          <h2>music</h2>
          <ul>
            <li><a href="https://open.spotify.com/user/aseroff">spotify</a></li>
            <li><a href="https://soundcloud.com/aseroff-1">soundcloud</a></li>
            <li><a href="https://www.last.fm/user/rvaen17">last.fm</a></li>
          </ul>

          <h2>other</h2>
          <ul>
            <li><a href="https://keybase.io/aseroff">keybase</a></li>
          </ul>
        </div>
      )
    }
    else {
      return (<p>404</p>)
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">andy.seroff.co</h1>
        <nav>
        <ul className="nav">
          <Nav destination="bio" handler={this.changePage} active={this.state.page === "bio"} />
          <Nav destination="projects" handler={this.changePage} active={this.state.page === "projects"} />
          <Nav destination="links" handler={this.changePage} active={this.state.page === "links"} />
        </ul>
        </nav>
      </header><br />
      {this.content(this.state.page)}
      </div>
    );
  }
}

export default App;
