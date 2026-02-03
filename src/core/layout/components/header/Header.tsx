import { LanguajeSelector } from './components/language-selector/LanguageSelector'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header >
      <LanguajeSelector />
    </header>
  )
}