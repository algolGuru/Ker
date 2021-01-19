import './header.css'
import {Navigation} from "./navigation_menu/navigation";

export function MyHeader() {


    return(
        <>
            <header>
                <div className="logo">
                    <h1>Голландия</h1>
                    <h2>торговый центр</h2>
                </div>
                <Navigation/>
            </header>
        </>
    )
}