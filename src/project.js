import React, { Component } from 'react';

export class Project extends Component {

  image() {
  	var img = this.props.img
  	if (img != null) {
  		return <img src={this.props.img} alt={this.props.description} className="project" />
  	} else {
  		return <div className="filler"></div>
  	}
  }

  render() {
    return (
      <div className="project-image">
			{this.image()}
			<div className="caption">
				<h3><a href={this.props.url}>{this.props.name}</a></h3>
				<h4>{ this.props.subtitle }</h4>
				{ this.props.description.split('<br/>').map(i => {return <p key={i}>{i}</p>}) }
 			</div>
		</div>
    );
  }
}

export default Project;
