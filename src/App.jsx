import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ImgGrid from "./components/ImgGrid";
import axios from "axios";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]); // Stores the fetched images
  const [page, setPage] = useState(1); // Tracks the current page for pagination
  const [loading, setLoading] = useState(false); // Tracks loading state for fetching images
  const [hasMore, setHasMore] = useState(true); // To check if more images are available

  const accessKey = "BdNtRpBKDveuvCT8h6KKO1rjRC7t4ntbIEXTuVa3bcQ";

  // Fetch images based on search term or default images
  const fetchImages = async (newSearchTerm = searchTerm, newPage = page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/${
          newSearchTerm ? "search/photos" : "photos"
        }`,
        {
          params: {
            query: newSearchTerm,
            client_id: accessKey,
            page: newPage,
            per_page: 10,
          },
        }
      );

      const newImages = newSearchTerm ? response.data.results : response.data;

      setImages((prevImages) => [...prevImages, ...newImages]); // Append new images
      setHasMore(newImages.length > 0); // If no more images, stop further requests
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
    }
  };

  // Trigger when the user searches a new term
  const handleSearch = (term) => {
    setSearchTerm(term);
    setImages([]); // Clear the previous images
    setPage(1); // Reset the page number
    fetchImages(term, 1); // Fetch new images based on search term
  };

  // Initial fetch of default images
  useEffect(() => {
    fetchImages();
  }, []);

  // Infinite Scroll: Fetch more images when scrolled near the bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        if (!loading && hasMore) {
          setPage((prevPage) => prevPage + 1); // Increment page number to fetch next page
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  // Fetch more images when the page state changes
  useEffect(() => {
    if (page > 1) {
      fetchImages(searchTerm, page);
    }
  }, [page]);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <main>
        <ImgGrid images={images} />
        {loading && <div className="loading">Loading...</div>}
      </main>
    </div>
  );
}

export default App;
