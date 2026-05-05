// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'Rafif Padhillah Wibowo Portfolio',
  description: 'Game Artist & Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}