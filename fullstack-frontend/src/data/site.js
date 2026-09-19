export const SITE_NAME = "Logo"

export const SITE_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contacts", label: "Contacts" },
]

export function isActivePath(pathname, href) {
    if (href === "/") {
        return pathname === "/"
    }

    return pathname.startsWith(href)
}
