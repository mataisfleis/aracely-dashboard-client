import { useRouteError } from "react-router-dom";

export default function Error(){
	const error = useRouteError() as { status: string, statusText: string };
	console.log(error)
	return (
		<>
			<h1>Error {error.status} - {error.statusText}</h1>
		</>
	)
}