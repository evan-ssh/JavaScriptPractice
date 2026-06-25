import { Html } from "next/document";
import Link from "next/link";

export const metadata = {
  title: "Eric's Lottery", 
  description: "Lottery ticket checker"
};

export default function RootLayout({children}){
  return(
    <html>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </nav>

        {children}
      </body>
    </html>
  )
}