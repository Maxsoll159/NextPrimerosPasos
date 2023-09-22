import { Metadata } from "next"

export const metadata: Metadata={
    title: 'SEO ABOPUT',
    description: "SEO Title",
    keywords: ['About Page', 'Martin About']
}

export default function AboutPage(){
    return(
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}