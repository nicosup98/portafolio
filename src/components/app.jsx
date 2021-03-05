import React from "react"
import "../styles/index.css"
export const App = ()=>{
    return (
        <div>
            <header>
                <h2>Portafolio</h2>
            </header>
            <article >
                <div className="spacing">presentacion</div>
                <div className="spacing">habilidades</div>
            </article>
            <section className="rounded spacing">
                <h3>seccion 1</h3>
            </section>
            <section className="rounded spacing">
                <h3>seccion 2</h3>
            </section>
        </div>
    )
}