import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App/App'
import { reportWebVitals } from './reportWebVitals'
import './index.css'

const root = createRoot(window.document.getElementById('root') as HTMLElement)

root.render(
	// causes render twice in dev mode - https://stackoverflow.com/a/60619061
	// <StrictMode>
	<App />,
	// </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
