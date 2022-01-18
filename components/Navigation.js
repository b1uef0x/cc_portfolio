
import Link from "next/link"
import React from "react"
import ThemeSwitch from "../components/ThemeSwitch"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black navig-bar">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors hover:text-sky-500 uppercase navig-name"}
                    >
                        Chiara Corey
                    </a>
                </Link>
                <Link href="/svg_art">
                    <a
                        className={"font-medium tracking-wider transition-colors hover:text-sky-500 navig-element"}>
                        svg art
                    </a>
                </Link>
                <div className="separator-line dark:border-slate-200"/>
                <Link href="/posters">
                    <a
                        className={"font-medium tracking-wider transition-colors hover:text-sky-500 navig-element"}
                    >
                        social media/posters
                    </a>
                </Link>
                <div className="separator-line dark:border-slate-200"/>
                <Link href="/character_design">
                    <a
                        className={"font-medium tracking-wider transition-colors hover:text-sky-500 navig-element"}
                    >
                        character design
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Navigation;