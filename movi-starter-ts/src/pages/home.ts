
import { Component } from "movijs";

export default class HomePage extends Component<any,any> {
    constructor() {
        super('div');
    }
    model = this.useModel({ count: 0 })
    setup() {
        this.add(new Component('button', {
            setup: (sender) => {
                sender.bind.text(() => 'Count is ' + this.model.count);
                sender.addHandler('click', () => {
                    this.model.count++;
                })
            }
        }))
    }
}