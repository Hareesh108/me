"use client"
import { createContext, JSX, useContext, useEffect, useRef, useState } from "react"

type WindowEvent = {
  scrollY: number
  scrollX: number
}
const WindowEvent = createContext<WindowEvent | null>(null)

function WindowEventProvider({ children }: { children: JSX.Element }) {
  const [scroll, setScroll] = useState<WindowEvent>({ scrollY: 0, scrollX: 0 })

  // Keep the latest scroll position in a ref so the beforeunload handler can
  // read it without being re-subscribed on every scroll.
  const scrollRef = useRef(scroll)
  scrollRef.current = scroll

  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      // Throttle to at most one update per animation frame.
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const scrollY = window.scrollY
        const scrollX = window.scrollX
        setScroll((prev) =>
          // Bail out when nothing changed so consumers don't re-render.
          prev.scrollY === scrollY && prev.scrollX === scrollX
            ? prev
            : { scrollY, scrollX }
        )
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // capture the initial position

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    // Registered once; reads the latest position from the ref.
    const onBeforeUnload = () => {
      localStorage.setItem("scrollX", scrollRef.current.scrollX.toString())
      localStorage.setItem("scrollY", scrollRef.current.scrollY.toString())
    }
    window.addEventListener("beforeunload", onBeforeUnload)
    return () => window.removeEventListener("beforeunload", onBeforeUnload)
  }, [])

  // `scroll` keeps a stable reference while values are unchanged (see bail-out
  // above), so it is safe to pass directly as the context value.
  return (
    <WindowEvent.Provider value={scroll}>
      {children}
    </WindowEvent.Provider>
  )
}

function useWindowEvent() {
  const windowEvent = useContext(WindowEvent)
  if(!windowEvent){
    throw new Error("useWindowEvent must be used within a <WindowEventProvider />")
  }
  return windowEvent
}

export { useWindowEvent, WindowEventProvider }
