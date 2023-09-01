import { defineConfig,loadEnv } from 'vite';  
import moviJsx from "movijsx"   
 
export default defineConfig({
    plugins: [         
        moviJsx.vitePlugin()
    ],
    resolve: { 
        extensions: ['.js','.ts','.jsx', '.tsx'],
    } 
}) 