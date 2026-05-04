import { useEffect, useState } from 'react'

function useThemeMode() {
	const [isDark, setIsDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

	useEffect(() => {
		const media = window.matchMedia('(prefers-color-scheme: dark)')

		const listener = (e: MediaQueryListEvent) => {
			setIsDark(e.matches)
		}

		media.addEventListener('change', listener)

		return () => media.removeEventListener('change', listener)
	}, [])

	return isDark
}

export default useThemeMode
