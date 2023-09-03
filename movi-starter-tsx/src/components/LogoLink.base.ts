import { Component, ControlProps } from "movijs";

export interface LogoLinkProps { 
    link: string,
    logo:string
}
export abstract class LogoLinkBase extends Component<any,LogoLinkProps> {
    constructor(props:ControlProps<any,LogoLinkProps>) {
        super(props);
    } 
}