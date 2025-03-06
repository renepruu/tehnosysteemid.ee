import React from "react";

// Define the props interface
interface ProductCardProps {
  name: string;
  details: string;
  externalLink: string;
  imageUrl: string; // Add imageUrl prop
}

// Functional component for the product card
const ProductCard: React.FC<ProductCardProps> = ({
  name,
  details,
  externalLink,
  imageUrl, // Destructure imageUrl
}) => {
  const handleButtonClick = () => {
    window.open(externalLink, "_blank");
  };

  return (
    <div className="product-card">
      <div className="flip-card-inner">
        {/* Front side of the card */}
        <div className="flip-card-front">
          <img src={imageUrl} alt={name} /> {/* Use imageUrl prop */}
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
