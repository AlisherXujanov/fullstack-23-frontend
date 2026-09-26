"use client"

import "./globals.scss";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CONTEXT, initialState } from "@/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <CONTEXT.Provider value={initialState}>
          <main id="main">{children}</main>
        </CONTEXT.Provider>
        <Footer />
      </body>
    </html>
  );
}
