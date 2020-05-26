import Link from 'next/link'

const AppNavbar = () => (
    <div>
        <Link href='/'><a>home</a></Link>
        <Link href='/about'><a>aboot</a></Link>
    </div>
)

export default AppNavbar;