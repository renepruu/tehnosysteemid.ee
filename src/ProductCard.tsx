import React, { useState } from "react";

// Define the props interface
interface ProductCardProps {
  name: string;
  details: string;
  externalLink: string;
  imageUrl: string;
}

// Functional component for the product card
const ProductCard: React.FC<ProductCardProps> = ({
  name,
  details,
  externalLink,
  imageUrl, // Destructure imageUrl
}) => {
  // State to track whether the card is flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle card click to toggle the flipped state
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Handle button click to open the external link
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card from flipping when the button is clicked
    window.open(externalLink, "_blank");
  };

  return (
    <div
      className={`product-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="flip-card-inner">
        {/* Front side of the card */}
        <div className="flip-card-front">
          <img src={imageUrl} alt={name} />
        </div>

        {/* Back side of the card */}
        <div className="flip-card-back">
          <h1>{name}</h1>
          <p>{details}</p>
          <button onClick={handleButtonClick}>Rohkem infot</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
