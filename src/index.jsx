// ReactFacts Project from Learn React class on scrimba.com

import { createRoot } from "react-dom/client"

import Header from "./Header"
import MainContent from "./MainContent"

const root = createRoot(document.getElementById("root"))

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
