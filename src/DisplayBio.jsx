//import React, { Component } from 'react'
import Developer from './Developer'
import DeveloperBio from './DeveloperBio'

import React from 'react'

export default function DisplayBio(props) {
    return (
        props.developers.map(dev => <DeveloperBio developer={dev} key={dev.id} />)
    )
}


/*export class DisplayBios extends Component {
    constructor(props) {
      super(props)
      this.state = {
         developers:[
            new Developer(1,"Nikhil","Jeeva","JavaScript",2000),
            new Developer(2,"Ryan","Smith","Python",2025)
         ]
      }
    }
  render() {
    return (
      this.state.developers.map(dev => <DeveloperBio developer={dev} key={dev.id} /> )
    )
  }
}
export default DisplayBios
*/