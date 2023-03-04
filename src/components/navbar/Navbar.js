import React, { useState } from 'react'
import styles from './navbar.module.css'
import User from '../user/User'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [pages, setPages] = useState([
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Blog',
            url: '/blog'
        },
        {
            name: 'Contact',
            url: '/contact'
        },
    ])
    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <div className={styles.brand}>
                    <Logo />
                </div>
                <nav className={styles.navbar}>
                    <ul className={styles.menu}>
                        {pages.map((page) => (
                            <Link to={page.url}>{page.name}</Link>
                        ))}
                    </ul>
                </nav>
                <div className={styles.profile}>
                    <User />
                </div>
            </div>

        </header>
    )
}

export default Navbar