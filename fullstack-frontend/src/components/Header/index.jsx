"use client"

import { useEffect, useId, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    FaAngleDown,
    FaDribbble,
    FaFacebookF,
    FaGooglePlusG,
    FaHourglassHalf,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhone,
    FaShoppingBasket,
    FaTwitter,
} from "react-icons/fa"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import {
    APPOINTMENT_HREF,
    CART_COUNT,
    CART_HREF,
    HEADER_NAV,
    SITE_EMAIL,
    SITE_HOURS,
    SITE_LOCATION,
    SITE_NAME,
    SITE_PHONE,
    SITE_TAGLINE,
    SOCIAL_LINKS,
    isActiveNavItem,
    isActivePath,
} from "@/data/site"
import "./style.scss"

const SOCIAL_ICONS = {
    twitter: FaTwitter,
    facebook: FaFacebookF,
    google: FaGooglePlusG,
    dribbble: FaDribbble,
    linkedin: FaLinkedinIn,
}

function Brand({ className }) {
    return (
        <Link className={className} href="/">
            <span className="header__brand-icon">
                <Image
                    src="/images/logo.png"
                    alt=""
                    width={200}
                    height={60}
                    className="header__brand-img"
                    priority
                />
            </span>
            <span className="header__wordmark">
                <span className="header__wordmark-name">{SITE_NAME}</span>
                <span className="header__wordmark-tag">{SITE_TAGLINE}</span>
            </span>
        </Link>
    )
}

function Header() {
    const pathname = usePathname()
    const panelId = useId()
    const [menuOpen, setMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)
    const [navPath, setNavPath] = useState(pathname)

    if (pathname !== navPath) {
        setNavPath(pathname)
        setMenuOpen(false)
        setOpenDropdown(null)
    }

    useEffect(() => {
        const onResize = () => {
            if (window.matchMedia("(min-width: 992px)").matches) {
                setMenuOpen(false)
                setOpenDropdown(null)
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
                setOpenDropdown(null)
            }
        }

        document.addEventListener("keydown", onKeyDown)

        return () => {
            document.removeEventListener("keydown", onKeyDown)
        }
    }, [menuOpen])

    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>

            <header className="header">
                <div className="header__top">
                    <div className="header__stripes" aria-hidden="true">
                        <span className="header__stripe header__stripe--red" />
                        <span className="header__stripe header__stripe--green" />
                        <span className="header__stripe header__stripe--yellow" />
                    </div>
                    <div className="header__inner header__top-inner">
                        <p className="header__message">
                            Leave A Message:{" "}
                            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                        </p>
                        <ul className="header__social">
                            {SOCIAL_LINKS.map((item) => {
                                const Icon = SOCIAL_ICONS[item.id]

                                return (
                                    <li key={item.id}>
                                        <a href={item.href} aria-label={item.label}>
                                            <Icon aria-hidden="true" />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="header__middle">
                    <div className="header__inner header__middle-inner">
                        <Brand className="header__brand" />
                        <div className="header__meta">
                            <div className="header__meta-item">
                                <FaMapMarkerAlt aria-hidden="true" className="header__meta-icon" />
                                <p>
                                    <span>{SITE_LOCATION.label}</span>
                                    {SITE_LOCATION.value}
                                </p>
                            </div>
                            <div className="header__meta-item">
                                <FaHourglassHalf aria-hidden="true" className="header__meta-icon" />
                                <p>
                                    <span>{SITE_HOURS.label}</span>
                                    {SITE_HOURS.value}
                                </p>
                            </div>
                            <div className="header__meta-item">
                                <FaPhone aria-hidden="true" className="header__meta-icon" />
                                <p>
                                    <span>{SITE_PHONE.label}</span>
                                    {SITE_PHONE.value}
                                </p>
                            </div>
                            <Link className="header__cart" href={CART_HREF} aria-label={`Cart, ${CART_COUNT} items`}>
                                <FaShoppingBasket aria-hidden="true" />
                                <span>{CART_COUNT}</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <nav className="header__nav" aria-label="Primary">
                    <div className="header__inner header__nav-inner">
                        <button
                            type="button"
                            className="header__menu-btn"
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

                        <div
                            id={panelId}
                            className={`header__panel${menuOpen ? " is-open" : ""}`}
                        >
                            <ul className="header__links">
                                {HEADER_NAV.map((item) => {
                                    const isActive = isActiveNavItem(pathname, item)
                                    const isOpen = openDropdown === item.href
                                    const hasChildren = Boolean(item.children?.length)

                                    return (
                                        <li
                                            key={item.href}
                                            className={`header__item${hasChildren ? " has-children" : ""}${isOpen ? " is-open" : ""}${isActive ? " is-active" : ""}`}
                                        >
                                            <Link
                                                href={item.href}
                                                aria-current={isActive ? "page" : undefined}
                                            >
                                                {item.label}
                                            </Link>
                                            {hasChildren ? (
                                                <>
                                                    <button
                                                        type="button"
                                                        className="header__ddl"
                                                        aria-expanded={isOpen}
                                                        aria-label={`${item.label} submenu`}
                                                        onClick={() =>
                                                            setOpenDropdown(isOpen ? null : item.href)
                                                        }
                                                    >
                                                        <FaAngleDown aria-hidden="true" />
                                                    </button>
                                                    <ul className="header__dropdown">
                                                        {item.children.map((child) => (
                                                            <li key={child.href}>
                                                                <Link
                                                                    href={child.href}
                                                                    aria-current={
                                                                        isActivePath(pathname, child.href)
                                                                            ? "page"
                                                                            : undefined
                                                                    }
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            ) : null}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <Link className="header__cta" href={APPOINTMENT_HREF}>
                            Get An Appointment
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
