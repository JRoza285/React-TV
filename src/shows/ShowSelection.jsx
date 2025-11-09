import "./shows.css";

export default function ShowSelection({
    shows,
    selecetdShow,
    setSelectedShow,
}) {
    return (
        <nav className="shows">
            {shows.map((show) => (
                <a
                className={"show" + (show === selecetdShow ? " selected" : "")}
                key={show.name}
                onClick={() => setSelectedShow(show)}
                >
                    {show.name}
                </a>
            ))}
        </nav>
    );
}


