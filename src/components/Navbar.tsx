export default function NavBar() {
  return (
	<nav className="flex justify-around border-b border-zinc-700 py-5">
		<ul className="flex gap-5">
			<li><a className="font-semibold" href="/">Aracely Bot</a></li>
			<li><a className="font-semibold" href="/plugins">Soporte</a></li>
			<li><a className="font-semibold" href="/plugins">Comandos</a></li>
			<li><a className="font-semibold" href="/plugins">Wiki</a></li>
			<li><a className="font-semibold" href="/plugins">Estado</a></li>
		</ul>
		<ul className="flex gap-5">
			<li><a href="/" className="bg-transparent border-orchid-700 border-2 py-2 px-3 rounded-md text-orchid-700 hover:bg-orchid-700 hover:text-white transition-all">Login</a></li>
			<li><a className="bg-transparent border-yellow-500 border-2 py-2 px-3 rounded-md text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all" href="/plugins">Premium</a></li>
		</ul>
	</nav>
  );
}
