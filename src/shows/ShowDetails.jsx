import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  if (!selectedShow) {
  return (
  <div className="show-details">
  <h2>Show Details</h2>
  <p>Select a show to learn more!</p>
  </div>
  );
}
return (
  <div className="show-details">
    <h2>Episode {show.number}</h2>
    <h3>{show.title}</h3>
    <p>{show.description}</p>
  </div>
);
}
