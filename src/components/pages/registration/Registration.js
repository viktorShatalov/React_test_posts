import React from 'react'
import style from './Registration.module.scss'
import className from "classnames"

export const Registration = () => {
    return (
        <section className={className(style.registration, style.container)}>
            <h2>Тут будет форма регистрации или еще что то </h2>
        </section>
    )
}
