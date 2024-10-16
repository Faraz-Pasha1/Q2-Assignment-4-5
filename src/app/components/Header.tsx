import Link from "next/link"

export default function Header () {
    return (
        <div className = "header">
            <h1 className="title-Header">Food , Health & Nutritions</h1>
            <ul className = "header-Options">
                <Link href = "/"><li>Home</li></Link>
                <Link href= "/blog"><li>Blog</li></Link>
                <Link href = "/about"><li>About</li></Link>
            </ul>
        </div>
    )
}