"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    HiOutlineArrowUpRight,
    HiOutlineClock,
    HiOutlineEnvelope,
    HiOutlineGlobeAlt,
} from "react-icons/hi2"
import { LuHexagon } from "react-icons/lu"
import { SITE_LINKS, SITE_NAME, isActivePath } from "@/data/site"
import "./style.scss"

function Footer() {
    const pathname = usePathname()
    const year = new Date().getFullYear()

    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <div className="site-footer__cta">
                    <div className="site-footer__cta-row">
                        <p className="site-footer__cta-title">Have something in mind?</p>
                        <Link className="site-footer__cta-button" href="/contacts">
                            Get in touch
                            <HiOutlineArrowUpRight aria-hidden="true" size={16} />
                        </Link>
                    </div>
                    <p className="site-footer__cta-text">
                        Tell us what you are building. We will come back with a clear next
                        step.
                    </p>
                </div>

                <div className="site-footer__grid">
                    <div className="site-footer__brand">
                        <Link className="site-footer__logo" href="/">
                            <LuHexagon aria-hidden="true" className="site-footer__mark" />
                            <span>{SITE_NAME}</span>
                        </Link>
                        <p className="site-footer__purpose">
                            A considered home for the work that lasts — quiet craft, clear
                            thinking, and interfaces that earn their keep.
                        </p>
                    </div>

                    <nav className="site-footer__column" aria-label="Explore">
                        <p className="site-footer__heading">Explore</p>
                        <ul>
                            {SITE_LINKS.map((link) => {
                                const isActive = isActivePath(pathname, link.href)

                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    <div className="site-footer__column">
                        <p className="site-footer__heading">Contact</p>
                        <ul>
                            <li>
                                <Link className="site-footer__contact" href="/contacts">
                                    <HiOutlineEnvelope aria-hidden="true" size={16} />
                                    <span>Start a conversation</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing">See plans</Link>
                            </li>
                            <li>
                                <Link href="/about">How we work</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="site-footer__column site-footer__column--meta">
                        <p className="site-footer__heading">Presence</p>
                        <p className="site-footer__status">
                            <span className="site-footer__pulse" aria-hidden="true" />
                            Open for new work
                        </p>
                        <p className="site-footer__meta">
                            <HiOutlineClock aria-hidden="true" size={16} />
                            Replies within two days
                        </p>
                        <p className="site-footer__meta">
                            <HiOutlineGlobeAlt aria-hidden="true" size={16} />
                            Remote, worldwide
                        </p>
                    </div>
                </div>

                <div className="site-footer__legal">
                    <p>
                        © {year} {SITE_NAME}
                    </p>
                    <nav aria-label="Footer">
                        {SITE_LINKS.map((link) => {
                            const isActive = isActivePath(pathname, link.href)

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>

            <p className="site-footer__wordmark" aria-hidden="true">
                {SITE_NAME}
            </p>
        </footer>
    )
}

export default Footer
