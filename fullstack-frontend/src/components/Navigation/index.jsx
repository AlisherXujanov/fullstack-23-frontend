"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import { LuHexagon } from "react-icons/lu"
import { SITE_LINKS, SITE_NAME, isActivePath } from "@/data/site"
import "./style.scss"

const NAV_LINKS = SITE_LINKS.filter((link) => link.href !== "/contacts")

function Navigation() {
    const pathname = usePathname()
    const panelId = useId()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8)
        }

        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    useEffect(() => {
        const onResize = () => {
            if (window.matchMedia("(min-width: 768px)").matches) {
                setMenuOpen(false)
            }
        }

        window.addEventListener("resize", onResize)

        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [])

    useEffect(() => {
        if (!menuOpen) {
            return undefined
        }

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false)
            }
        }

        document.addEventListener("keydown", onKeyDown)
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", onKeyDown)
            document.body.style.overflow = ""
        }
    }, [menuOpen])

    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>

            <nav className="site-nav" aria-label="Primary">
                <div className={`site-header${scrolled ? " is-scrolled" : ""}`}>
                    <div className="site-nav__bar">
                        <Link className="site-nav__brand" href="/">
                            <LuHexagon aria-hidden="true" className="site-nav__mark" />
                            <span>{SITE_NAME}</span>
                        </Link>

                        <ul className="site-nav__links">
                            {NAV_LINKS.map((link) => {
                                const isActive = isActivePath(pathname, link.href)

                                return (
                                    <li key={link.href}>
                                        <Link
                                            className="site-nav__link"
                                            href={link.href}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <Link className="site-nav__cta site-nav__cta--desktop" href="/contacts">
                            Get in touch
                        </Link>

                        <button
                            type="button"
                            className="site-nav__menu-btn"
                            aria-expanded={menuOpen}
                            aria-controls={panelId}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            {menuOpen ? (
                                <HiOutlineX aria-hidden="true" size={22} />
                            ) : (
                                <HiOutlineMenu aria-hidden="true" size={22} />
                            )}
                        </button>
                    </div>
                </div>

                <div
                    id={panelId}
                    className={`site-nav__panel${menuOpen ? " is-open" : ""}`}
                    aria-hidden={!menuOpen}
                    inert={!menuOpen ? true : undefined}
                >
                    <ul className="site-nav__panel-links">
                        {NAV_LINKS.map((link) => {
                            const isActive = isActivePath(pathname, link.href)

                            return (
                                <li key={link.href}>
                                    <Link
                                        className="site-nav__panel-link"
                                        href={link.href}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <Link className="site-nav__cta site-nav__cta--panel" href="/contacts">
                        Get in touch
                    </Link>
                </div>
            </nav>

            <button
                type="button"
                className={`site-nav__overlay${menuOpen ? " is-open" : ""}`}
                aria-label="Close menu"
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
            />
        </>
    )
}

export default Navigation
