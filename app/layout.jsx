import '@/assets/styles/globals.css';
import HomePage from "./page";
export const metadata={
    title: ' Pulse property',
    keywords:'Propoerty seller , rental',
    description:'Best place to buy property'
}

const MainLayout = ({children}) => {
    return ( <html>
        <body>
            <main><HomePage></HomePage></main>
        </body>
    </html> );
}
 
export default MainLayout
