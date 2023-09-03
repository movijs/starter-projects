
import { Component } from "movijs"; 

export default class HomePage extends Component {
    model = this.useModel({ count: 0 })
    view() {
        return <button onClick={() => { this.model.count++ }}>{'Count is ' + this.model.count} </button>
    }
}