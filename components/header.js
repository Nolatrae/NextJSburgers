import Link from 'next/link';
import { GiHamburger } from 'react-icons/Gi'

const Header = () => {
  return (
    <header>
      <div>
        <GiHamburger/>
      </div>
      <nav>
        <Link href='/'>Домой</Link>
        <Link href="/about">О нас</Link>
        <Link href="/reviews">Отзывы</Link>
        <Link href="/burgers">Бургеры</Link>
      </nav>
    </header>
  )
}

export default Header