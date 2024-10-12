import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ImgGrid from "./components/ImgGrid";
import axios from "axios";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);

  const accessKey = "BdNtRpBKDveuvCT8h6KKO1rjRC7t4ntbIEXTuVa3bcQ";

  const handleSearch = async (term) => {
    setSearchTerm(term);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query: term,
            client_id: accessKey,
            per_page: 10,
          },
        }
      );
      console.log("response.data.results : ", response.data);
      setImages(response.data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    const fetchDefaultImages = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos`, {
          params: {
            client_id: accessKey,
            per_page: 200,
          },
        });
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching default images:", error);
      }
    };

    fetchDefaultImages();
  }, []);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <main>
        <ImgGrid images={images} />
      </main>
    </div>
  );
}

export default App;
