import type { ReactNode } from "react"
import NavBar from "../components/Navbar"

export default function mainLayout({ children }:{ children: ReactNode}){
	return (
		<div className="text-white">
			<header>
				<NavBar />
			</header>
			<main className="flex flex-col items-center">
				{children}
			</main>
		</div>
	)
}