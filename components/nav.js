import React from 'react'
import { Nav } from 'react-bootstrap';
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function NavBar() {
  return (
    <div className={styles.navIndex}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/a1Report">A1.Report</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="A1Presentation">A1.Presentation</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="A2report">A2.Report</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="A2pres">A2.Presentation</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="A3Report">A3.Report</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="A3pres">A3.Presentation</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

