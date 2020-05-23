import React from "react"
import {Link} from "gatsby";

import style from "../styles/css.module.scss"

export default function Home() {
    return (
        <section className={style.feature}>
            <h1>Using CSS Modules</h1>
            <Link to="/">Back to main</Link>
        </section>
    )
}
