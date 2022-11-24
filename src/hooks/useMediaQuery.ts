import { useEffect, useState } from 'react'

export const useMediaQuery = (mediaQuery: string) => {
  const [matches, setMatches] = useState(() => {
    return typeof window !== 'undefined'
      ? window?.matchMedia?.(mediaQuery)?.matches
      : false
  })

  useEffect(() => {
    function onResize() {
      setMatches(() =>
        typeof window !== 'undefined'
          ? window?.matchMedia?.(mediaQuery)?.matches
          : false
      )
    }

    window?.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return matches
}
