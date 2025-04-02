import React from "react"
import { Outlet } from "react-router-dom"
import "./Layout.css"

export default function Layout() {
    return (
      <div className="site-wrapper">
        <h1 className="tenzies-logo">Tenzies!</h1>
        <Outlet />
      </div>
    )
}