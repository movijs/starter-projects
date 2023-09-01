import { Component } from "movijs";

export class LogoLink extends Component<any, any> {
    constructor(props: any) {
        super('a', props);
    }
    setup() {
        this.attr.add({ href: this.props.link, target: '_blank' });
        const logo = new Component('img');
        logo.attr.add({ src: this.props.logo });
        logo.class.add('logo');
        this.add(logo);
    }
}