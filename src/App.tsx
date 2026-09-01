import { useState, useEffect } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import { Analytics } from "@vercel/analytics/react"
import Home from "./Home"
import RingsInShadows from "./RingsInShadows"
import FluidityIsKing from "./FludityIsKing"
import AgentMaxing from "./AgentMaxing"
import ToolsDontMatter from "./ToolsDontMatter"
import type { Location } from "./types"
import Layout from "./Layout"


export default function App() {
  const [location, setLocation] = useState<Location | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://ipwho.is/")
      .then((res) => res.json())
      .then((data) => {
        setLocation({ city: data.city || "", country: data.country || "" })
      })
      .catch(() => setError(true))
  }, [])


  const router = createBrowserRouter([
    {
      element: <Layout />,      // ← the layout wraps everything, no path of its own
      children: [
        { path: "/", element: <Home location={location} error={error} /> },
        { path: "/rings-in-shadows", element: <RingsInShadows /> },
        { path: "/fluidity-is-king", element: <FluidityIsKing /> },
        { path: "/agent-maxing", element: <AgentMaxing /> },
        { path: "/tools-dont-matter", element: <ToolsDontMatter /> },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  )
}
