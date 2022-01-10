import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from "react-router-dom"
import 'css.gg/icons/css/chart.css'
import 'css.gg/icons/css/user.css'
import 'css.gg/icons/css/file-document.css'
import 'css.gg/icons/css/file.css'
import 'css.gg/icons/css/toolbox.css'

export default function Sidebar() {
    const sections = [{
        title: 'Podsumowanie',
        icon: 'gg-chart',
        link: '/'
    },
    {
        title: 'Pacjenci',
        icon: 'gg-user',
        link: '/patients'
    },
    {
        title: 'Projekty badawcze',
        icon: 'gg-file-document',
        link: '/projects'
    },
    {
        title: 'Zlecenia badań',
        icon: 'gg-file',
        link: '/orders'
    },
    {
        title: 'Wyniki badań',
        icon: 'gg-toolbox',
        link: '/results'
    }
];

    return (
        <div className='sidebar'>
            <header>
                <img src={logo} alt="logo" />
            </header>
            <nav className="sidebarLinks">
                <ul>
                {
                    sections.map(item => {
                        return (
                            <li>
                                <NavLink to={item.link} className={({ isActive }) => "sidebarLinksItem" + (isActive ? " activated" : "")}>
                                    <i className={item.icon}></i>
                                    <div className="sidebarLinksTitle">{item.title}</div>
                                </NavLink>
                            </li>
                        )
                    })
                }
                </ul>
            </nav>
        </div>
    )
}
