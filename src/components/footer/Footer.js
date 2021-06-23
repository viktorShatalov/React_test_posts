import React from 'react'
import style from "./Footer.module.scss"

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <span><small>2021 Viktor. Все права защищены.</small></span>
            </div>
        </footer>
    )
}
