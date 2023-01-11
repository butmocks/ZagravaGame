import { useEffect, useRef } from 'react'

export function useTimeout(cb, ms) {
  const cbRef = useRef()

  useEffect(() => {
    cbRef.current = cb
  }, [cb])

  useEffect(() => {
    function tick() {
      cbRef.current()
    }
    if (ms > 1) {
      const id = setTimeout(tick, ms)
      return () => {
        clearTimeout(id)
      }
    }
  }, [ms])
}

export function useInterval(cb, ms) {
  const cbRef = useRef()

  useEffect(() => {
    cbRef.current = cb
  }, [cb])

  useEffect(() => {
    function tick() {
      cbRef.current()
    }
    if (ms > 1) {
      const id = setInterval(tick, ms)
      return () => {
        clearInterval(id)
      }
    }
  }, [ms])
}