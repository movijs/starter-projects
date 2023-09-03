import { Component, RouterLink, RouterView } from "movijs";
import viteLogo from "/vite.svg";
import moviLogo from "/movi.svg";
import { LogoLink } from "../components/LogoLink";
export default class MainLayout extends Component {
    constructor(props) {
        super(props);
    }
    view() {
        return <div>
            <LogoLink props={{
                link: 'https://vitejs.dev',
                logo: viteLogo
            }}></LogoLink>
            <LogoLink props={{
                link: 'https://movijs.com',
                logo: moviLogo
            }}></LogoLink>
             
            <div>
                <RouterView></RouterView>
            </div>
        </div>
    }
}
