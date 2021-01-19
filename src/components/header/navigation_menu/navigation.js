import './navigation.css'

export function Navigation() {
    return(
        <nav>
            <input id="btn-1" type="checkbox"/>
            <label htmlFor="btn-1">
                          <span className="hamburger">
                            <span className="line-1"/>
                            <span className="line-2"/>
                            <span className="line-3"/>
                            <span className="cross"/>
                          </span>
            </label>
        </nav>
    )
}