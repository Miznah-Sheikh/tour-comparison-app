import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

function Gallery({ tours, setTours, onRemove }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    try {
      // 👇 Fetching from your local file
      const response = await fetch("/src/tours.json");
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch failed:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <h2>Loading tours...</h2>;
  if (error) return <h2>There was an error loading tours.</h2>;

  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
}

export default Gallery;
