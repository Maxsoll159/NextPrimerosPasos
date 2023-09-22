import { Metadata } from "next"

export const metadata: Metadata ={
    title: "Pricing Page",
    description: "Esta es la pagona de Pricing",
    keywords: "Pricing Page, Hola"
}

export default function PricingPage(){
    return(
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}