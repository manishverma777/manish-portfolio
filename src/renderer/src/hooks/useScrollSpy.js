import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view for nav highlighting.
 * @param {string[]} ids - element ids to observe.
 * @param {Element|null} root - optional scroll container.
 * @returns {string} the id of the active section.
 */
export function useScrollSpy(ids, root = null) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { root, rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, root])

  return activeId
}
