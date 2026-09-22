export const SITE_NAME = "Vetta"
export const SITE_TAGLINE = "Pet Care"

export const SITE_EMAIL = "info@vetta.com"
export const SITE_LOCATION = {
    label: "Our Location",
    value: "50- Design Street, Texas",
}
export const SITE_HOURS = {
    label: "Mon - Sat",
    value: "8 am - 10 pm",
}
export const SITE_PHONE = {
    label: "Call Us",
    value: "+1 (0) 234 56 789",
}

export const CART_COUNT = 10
export const CART_HREF = "/shop/cart"
export const APPOINTMENT_HREF = "/contacts"

export const SOCIAL_LINKS = [
    { id: "twitter", href: "#", label: "Twitter" },
    { id: "facebook", href: "#", label: "Facebook" },
    { id: "google", href: "#", label: "Google" },
    { id: "dribbble", href: "#", label: "Dribbble" },
    { id: "linkedin", href: "#", label: "LinkedIn" },
]

export const SITE_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contacts", label: "Contacts" },
]

export const HEADER_NAV = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    {
        href: "/shop",
        label: "Shop",
        children: [
            { href: "/shop/pets", label: "Pets List" },
            { href: "/shop/details", label: "Product Details" },
            { href: "/checkout", label: "Place Order" },
            { href: "/shop/cart", label: "My Cart" },
        ],
    },
    {
        href: "/pages",
        label: "Pages",
        children: [{ href: "/error", label: "Error" }],
    },
    {
        href: "/blog",
        label: "Blog",
        children: [{ href: "/blog/single", label: "Single Blog" }],
    },
    { href: "/contacts", label: "Contact Us" },
]

export function isActivePath(pathname, href) {
    if (!href || href === "#") {
        return false
    }

    if (href === "/") {
        return pathname === "/"
    }

    return pathname === href || pathname.startsWith(`${href}/`)
}

export function isActiveNavItem(pathname, item) {
    if (isActivePath(pathname, item.href)) {
        return true
    }

    return item.children?.some((child) => isActivePath(pathname, child.href)) ?? false
}
