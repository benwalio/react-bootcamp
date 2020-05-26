import Link from 'next/link'
import AppNavbar from '../components/AppNavbar'

const Index = () => (
    <div>
        <AppNavbar />
        <h1>index jawwn</h1>
        <Link href='/about'><a>about</a></Link>
    </div>
)

export default Index;