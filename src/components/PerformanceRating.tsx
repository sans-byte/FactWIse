import React from "react";
import { Star } from "lucide-react";

interface PerformanceRatingProps {
  rating: number;
}

export const PerformanceRating: React.FC<PerformanceRatingProps> = ({
  rating,
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const getStarColor = (rating: number) => {
    if (rating >= 4.5) return "text-green-500";
    if (rating >= 4.0) return "text-blue-500";
    if (rating >= 3.5) return "text-yellow-500";
    return "text-orange-500";
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? `${getStarColor(rating)} fill-current`
                : i === fullStars && hasHalfStar
                ? `${getStarColor(rating)} fill-current opacity-50`
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-2">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};
