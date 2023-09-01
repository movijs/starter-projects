import { CreateMoviApp } from "movijs";
import router from "./config/router";
import "./style/main.css";
const apps = new CreateMoviApp({
    Configuration(options) {
        options.ModelSettings.PageSize = 100;
        options.Route.router.gate = (next, e) => {
            next();
        }
        router.map((r:any) => {
            options.Route.add(r);
        })

    },
    ServiceConfiguration(services) {

    }

})
apps.run(document.getElementById("app") as HTMLElement); 