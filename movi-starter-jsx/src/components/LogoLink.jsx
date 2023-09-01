import { Component } from "movijs";

export class LogoLink extends Component {
    constructor(props) {
        super(props);
    }
   
    view() { 
        return <a  href={this.props.link} target="_blank"><img class="logo" src={this.props.logo}></img></a>
    }
}