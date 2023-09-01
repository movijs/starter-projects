import { Component, RouterLink, RouterView } from "movijs";
import viteLogo from "/vite.svg";
import moviLogo from "/movi.svg";
import { LogoLink } from "../components/LogoLink";
export default class MainLayout extends Component {
    constructor(props) {
        super('div', props);
    }

    setup() {

        /*
        <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
        */
        const vite = new LogoLink({
            props: {
                link: 'https://vitejs.dev',
                logo: viteLogo
            }
        });
        const movi = new LogoLink({
            props: {
                link: 'https://movijs.com',
                logo: moviLogo
            }
        });
        this.add(vite, movi, new RouterView());
    }
}
