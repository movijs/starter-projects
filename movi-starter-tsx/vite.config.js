import { defineConfig } from 'vite';  
import moviJsx from "movijsx"   
 
export default defineConfig({ 
    plugins: [         
        moviJsx.vitePlugin()
    ],
    resolve: { 
        extensions: [ '.jsx', '.tsx'],
    } 
}) 