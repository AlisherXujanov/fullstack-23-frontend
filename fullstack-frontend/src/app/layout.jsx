import { Montserrat, Oxygen } from "next/font/google"
import "./globals.scss"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const oxygen = Oxygen({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    display: "swap",
    variable: "--font-sans",
})

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-nav",
})

export const metadata = {
    title: {
        default: "Vetta",
        template: "%s | Vetta",
    },
    description: "Vetta pet care",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${oxygen.variable} ${montserrat.variable}`}>
            <body className={oxygen.className}>
                <Header />
                <main id="main">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
