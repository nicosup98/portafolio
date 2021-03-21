import React, { useState } from "react"
import { Modal } from "../modal/modal"
import "../styles/index.css"
import "@fortawesome/fontawesome-free/js/fontawesome.js"
import "@fortawesome/fontawesome-free/js/regular"


export const App = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <header>
                <h1>Portafolio</h1>
                <button className="boton-header" onClick={() => {
                    setShowModal(true)
                }}><i className="far fa-user"></i></button>
            </header>
            <section>
                <article>
                    <div className="spacing-art style-box rounded">
                        <h3>Presentacion</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque adipisci blanditiis quae eos sed accusantium sunt asperiores delectus praesentium, porro eius amet possimus. Sapiente doloribus cupiditate voluptatum assumenda libero.</p>
                    </div>
                    <div className="spacing-art style-box rounded">
                        <h3>Habilidades</h3>
                        <div className="flex-column">
                            java
                            <progress value="3" max="5">jav</progress>
                        </div>
                        <div className="flex-column">
                            js
                            <progress value="3" max="5">jav</progress>
                        </div>
                    </div>
                </article>
            </section>
            <section className="rounded spacing style-box">
                <h3>seccion 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur iure sint aut praesentium unde, est vitae! Assumenda ea cum velit, recusandae, ducimus quo voluptatem saepe consequatur, aliquid eaque eveniet provident.</p>
            </section>
            <section className="rounded spacing style-box">
                <h3>seccion 2</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ut consectetur amet eius, saepe explicabo et dicta aliquam. Quidem blanditiis explicabo eius illo natus nemo minima placeat a aperiam doloribus.</p>
            </section>
            {
                showModal &&
                <Modal>
                    <div className="modal">
                        <div className=" spacing-modal style-box">
                            <h2>Contacto</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ullam quaerat delectus, totam nihil iure distinctio iste laudantium eligendi! Amet aut ab incidunt natus magni consequuntur inventore numquam cupiditate voluptatem.</p>
                            <button className="boton-modal" onClick={() => setShowModal(false)}>salir</button>
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
}