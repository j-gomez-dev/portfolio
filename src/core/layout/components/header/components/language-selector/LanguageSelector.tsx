import { LANGUAGE_INFO, SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/core/config/i18n/i18n.recources'
import { useTranslation } from 'react-i18next'
import world from '@/assets/icon/ui/world-svgrepo-com.svg'
import styles from './language-selector.module.scss'
import { useDropdown } from '@/shared/hook/useDropdown'
        
export const LanguajeSelector = () => {
  const { i18n } = useTranslation()
  const { dropdownRef, isOpen, toggle, close } = useDropdown()
  const currentLang = i18n.language as SupportedLanguage

  const handleLanguageChange = (lang: SupportedLanguage) => () => {
    i18n.changeLanguage(lang)
    close()
  }

  return (
    <div className={styles.languageSelector} ref={dropdownRef}>
      <button onClick={toggle}>
          <img src={world} alt="" />
          |
          <span>{currentLang.toUpperCase()}</span>
        </button>

      {isOpen && 
        <div className={styles.dropdown}>
          <ul className={styles.list}>
            {SUPPORTED_LANGUAGES.map(lang => (
              <li key={lang}>
                <button onClick={handleLanguageChange(lang)}>
                  {LANGUAGE_INFO[lang].name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}
