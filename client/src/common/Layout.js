import {Outlet}from "react-router-dom"
import Navigate from "./Navigate"

const Laout = () => {
    return <div className="page">
        <header><Navigate/></header>
        <main>
            <Outlet/>
        </main>
        <footer className="footer">full stack project created by Miri Grintzaig 0556737092</footer>
    </div>
}
export default Laout