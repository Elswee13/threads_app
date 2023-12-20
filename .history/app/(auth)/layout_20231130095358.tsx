import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

export const metadata = {
    title: 'Threads',
    description: 'A Next.JS 14 Meta Threads Application'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({children} : {children:React.ReactNode}){
    return (
        <ClerkProvider>
            <html lang="en" >
                <body className={} ></body>
            </html>
        </ClerkProvider>
    )
}