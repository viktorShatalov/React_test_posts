import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Header.module.scss"

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <nav className={style.header__nav}>
                    <ul>
                        <li><Link to="/">Посты</Link></li>
                        <li><Link to="/nextpage">Ещё Страница</Link></li>
                        <li><Link to="/nextpage">Новая Страница</Link></li>
                    </ul>
                </nav>
                <div>
                    <Link to="/registration">Регистрация</Link>
                </div>
            </div>
        </header>
    )
}
