import "./shows.css";
import {useState} from "../data";
import {tvShows} from "../data";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({selectedShow, setSelectedShow}) {
  const [shows] = useState(showList);
  return (
  <nav className="shows">
    <h2>Shows</h2>
    <ol>
      {shows.map((show) => (
        <showListItem
        key={show.name}
        genre={show.genre}
        selectedShow={selectedShow}
        setSelectedShow={setSelectedShow}
        />
      ))}
    </ol>
  </nav>
  );
}
