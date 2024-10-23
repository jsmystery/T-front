import Link from 'next/link'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={`${styles.sidebar} bg-dark-blue text-white h-full p-6`}>
      <ul className="flex flex-col space-y-4">
        <li className="rounded">
          <Link href="/admin-panel/users" className={`${styles.link}`}>
            Пользователи
          </Link>
        </li>
        <li className="rounded">
          <Link href="/admin-panel/brands" className={`${styles.link}`}>
            Бренды
          </Link>
        </li>
        <li className="rounded">
          <Link href="/admin-panel/brands" className={`${styles.link}`}>
            Услуги
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
