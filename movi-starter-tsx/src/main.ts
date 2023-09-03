import { CreateMoviApp } from "movijs";
import router from "./config/router.ts";
import "./style/main.css";
const apps = new CreateMoviApp({
    Configuration(options) {
        options.ModelSettings.PageSize = 100;
        options.Route.router.gate = (next, e) => {
            next();
        }
        router.map((r) => {
            options.Route.add(r as any);
        })

    },
    ServiceConfiguration(services) {

    }

})
apps.run(document.getElementById("app") as HTMLElement);  