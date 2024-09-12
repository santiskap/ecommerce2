import './globals.css'
import type { Metadata } from 'next'
import {Inter, Roboto} from 'next/font/google'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proyecto en Next',
  description: 'Generated by create next app',
}
const roboto = Roboto(
    {
        weight: ["300", "400"],
        style: ["normal", "italic"],
        subsets: ["latin"],
    }
)

function Chakraprovider() {
    return null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">

      <div className={roboto.className}>
          <Navbar></Navbar>

          <hr/>
          <br/>
          <div className="my-20 mx-5">
              {children}
          </div>

      </div>
      </body>
    </html>
  )
}
