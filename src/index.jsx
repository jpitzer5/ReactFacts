// ReactFacts Project from Learn React class on scrimba.com

import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Header() {
    return (
        <header className="header">
            <img src="/src/assets/react-logo.png" className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
        </>
    )
}

root.render(
    <Page />
)
