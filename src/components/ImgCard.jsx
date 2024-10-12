import React, { useState } from "react";

const ImageCard = ({ image }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const toggleLike = () => setIsLiked(!isLiked);
  const toggleAdd = () => setIsAdded(!isAdded);

  console.log("img :", image.user);
  return (
    <div className="relative img-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="h-[30rem] w-full object-cover rounded-lg"
      />
      <div className="overlay space-x-2 absolute top-2 right-2 flex">
        <button
          className="like-icon bg-white opacity-80 text-black p-2 rounded-lg"
          onClick={toggleLike}
        >
          {isLiked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              // width="1em"
              // height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="red"
                fillRule="evenodd"
                d="M4.536 5.778a5 5 0 0 1 7.07 0q.275.274.708.682q.432-.408.707-.682a5 5 0 0 1 7.125 7.016L13.02 19.92a1 1 0 0 1-1.414 0L4.48 12.795a5 5 0 0 1 .055-7.017z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                fillRule="evenodd"
                d="M4.536 5.778a5 5 0 0 1 7.07 0q.275.274.708.682q.432-.408.707-.682a5 5 0 0 1 7.125 7.016L13.02 19.92a1 1 0 0 1-1.414 0L4.48 12.795a5 5 0 0 1 .055-7.017z"
              />
            </svg>
          )}
        </button>

        <button
          className="add-icon bg-white opacity-80 text-black p-2 rounded-lg"
          onClick={toggleAdd}
        >
          {isAdded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="red"
                  d="M11 20a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7z"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M11 20a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7z"
                />
              </g>
            </svg>
          )}
        </button>
      </div>
      <div className="bottom-overlay rounded-b-md">
        <div className="text-white flex items-center space-x-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer fill-gray-500"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 48 48"
            >
              <g>
                <path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0" />
                <path
                  fillRule="evenodd"
                  d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20h-.274q-.272 0-.542-.016M11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.94 17.94 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621"
                  clipRule="evenodd"
                />
              </g>
            </svg>
          </span>
          <div>
            <h4 className="text-sm font-bold">
              {image.user.total_likes >= 150 ? "Unsplash+" : ""}
            </h4>
            <p className="text-xs">{image.user.name}</p>
          </div>
        </div>
        <button className="Download-button bg-gray-800 text-sm text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          Download
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
