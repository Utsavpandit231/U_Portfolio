import React, { useEffect } from 'react'
import { cn } from '../lib/utils' 
import { useState } from 'react'
const navItems = [
    {name: "Home", href:"#hero"},
    {name: "About", href:"#about"},
    {name: "Skills", href:"#skills"},
    {name: "Projects", href:"#projects"},
    {name: "Contact", href:"#contact"},
]

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen , setIsMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-none shadow-none">
        <div className="container flex items-center justify-between border-0">
        <a className="text-xl font-bold text-white flex items-center">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Utsav
            </span>
            <span className="text-gray-1000 dark:text-gray-500"> Portfolio</span>

        </a>

        <div className='hidden md:flex space-x-8'>
            {navItems.map((item,key)=>(
                <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                    {item.name}</a>
            ))}
        </div>

        

        <button
            onClick={()=> setIsMenuOpen((prev)=> !prev)}
            className='md:hidden p-2 text-foreground z-50'
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
            ☰
        </button>


        <div className={cn(
            "fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-background/95 backdrop-blur-md",          
             "transition-all duration-300 md:hidden",
            isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
            )}>
             <div className='flex flex-col space-y-8 text-xl'>
            {navItems.map((item,key)=>(
                <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'
                onClick={()=>setIsMenuOpen(false)}>
                    {item.name}</a>
            ))}
            </div>
        </div>

        </div>
        </nav>

    )
}

export default Navbar;
