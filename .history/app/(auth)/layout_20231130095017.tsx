import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
    title: 'Threads',
    description: 'A Next.JS 14 Meta Threads Application'
}

export default function RootLayout({children} : {children:React.ReactNode}){
    return 
    <ClerkProvider></ClerkProvider>
}