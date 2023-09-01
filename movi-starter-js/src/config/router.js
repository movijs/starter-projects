import MainLayout from "../layout/index";
import Home from "../pages/home";

export default [
    {
        path: '/',
        control: MainLayout,
        childs: [
            {
                path: '/',
                control: Home
            } 
        ]
    }
]
