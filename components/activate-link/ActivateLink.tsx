"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import style from './ActivateLink.module.css'


interface Props {
    path: string,
    text: string
}

export const ActivateLink = ({ path, text }: Props) => {
    const pathName = usePathname()
  
    return (
        <Link key={path} className={`${style.link} ${(pathName === path) && style['activate-link']}`} href={path}>{text}</Link>
    )
}
