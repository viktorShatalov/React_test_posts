import React, { useEffect, useState } from 'react'
import style from "./PostPages.module.scss"
import className from "classnames"

import axios from "axios"
import { postsUrl, usersUrl } from "../../../api/web"

import { Users } from './user/Users'
import classNames from 'classnames'

export const PostsPages = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(true)
    const [showMore, setShowMore] = useState(10)
    const [showMoreHide, setShowMoreHide] = useState(false)
    const [search, setSearch] = useState("")
    const [inputOnBlur, setInputOnBlur] = useState(false)

    useEffect(() => {
        axios.get(postsUrl)
            .then(res => {
                setTimeout(() => {
                    setPosts(res.data)
                    setLoader(false)
                }, 1000)
            })
            .catch(err => console.log(err))

        axios.get(usersUrl)
            .then(res =>
                setUsers(res.data)
            )
            .catch(err => console.log(err))

    }, [])

    const showMoreHandleClick = () => {
        setShowMore()
        setShowMoreHide(true)
    }
    const onBlurHandleClick = () => {
        setInputOnBlur(true)
        setShowMore()
        setShowMoreHide(true)
    }

    return (
        <section className={className(style.posts, style.container)}>

            <div className={!inputOnBlur ? classNames(style.posts__search) : classNames(style.posts__search, style.hover)}>
                <input
                    onChange={(e) => { setSearch(e.target.value) }}
                    onFocus={onBlurHandleClick}
                    type="text"
                    placeholder="Поиск по заголовку поста" />
            </div>

            <ul className={style.posts__items}>
                {loader && <span>Loading...</span>}
                {posts
                    .slice(0, showMore)
                    .filter((serachValue) => {
                        if (search === "") {
                            return serachValue
                        }
                        else if (serachValue.title.toLowerCase().includes(search.toLowerCase())) {
                            return serachValue
                        }
                        else { return null }
                    })
                    .map(post => {
                        return <li
                            key={post.id}
                            className={style.posts__item}
                        >
                            <Users
                                users={users}
                                postsId={post.userId}
                                className={style.posts__item_autor}
                            />
                            <div className={style.posts__item_content}>
                                <div className={style['posts__item_content-title']}>
                                    <h3>{post.title}</h3>
                                </div>
                                <div className={style['posts__item_content-body']}>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        </li>
                    })}
            </ul>
            {!showMoreHide &&
                <div className={posts.length === 0 ? classNames(style.hide, style.posts__showMore) : style.posts__showMore}>
                    <span onClick={showMoreHandleClick}>Показать ещё</span>
                </div>
            }

        </section>
    )
}
