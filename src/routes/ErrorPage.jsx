import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <h2>Oops you did it again!</h2>
            <p>{error.statusText || error.message}</p>
        </>
    );
}