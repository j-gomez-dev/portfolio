import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for managing dropdown state and behavior
 * 
 * Handles:
 * - Open/close state
 * - Click outside detection to auto-close
 * - Reference to the dropdown container element
 * 
 * @returns Object containing dropdown state and control methods
 */
export const useDropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const toggle = () => setIsOpen(prev => !prev)
    const close = () => setIsOpen(false)
    const open = () => setIsOpen(true)

    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                close()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return {
        isOpen,
        toggle,
        close,
        open,
        dropdownRef
    }
}