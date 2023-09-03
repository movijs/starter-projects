import { LogoLinkBase } from "./LogoLink.base.ts";

export class LogoLink extends LogoLinkBase {

    view() {
        return <a href={this.props.link} target="_blank"><img class="logo" src={this.props.logo}></img></a>
    }
}