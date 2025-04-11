import { useState, useEffect } from "react";

export const useProductFilters = (initialData = []) => {
  const [filters, setFilters] = useState({
    categories: {
      clothes: false,
      jewelery: false,
      electronics: false,
    },
    priceRanges: {
      "0-20": false,
      "20-60": false,
      "60-plus": false,
    },
  });

  const [displayData, setDisplayData] = useState(initialData);
  const [noItemsFound, setNoItemsFound] = useState(false);

  useEffect(() => {
    const activeCategories = [];
    for (const category in filters.categories) {
      if (filters.categories[category] === true) {
        activeCategories.push(category);
      }
    }

    const activePriceRanges = [];
    for (const range in filters.priceRanges) {
      if (filters.priceRanges[range] === true) {
        activePriceRanges.push(range);
      }
    }

    const filteredProducts = initialData.filter((product) => {
      const matchesCategory =
        activeCategories.length === 0 ||
        activeCategories.some((cat) =>
          cat === "clothes"
            ? product.category.includes("clothing")
            : cat === product.category
        );

      const matchesPrice =
        activePriceRanges.length === 0 ||
        activePriceRanges.some((range) => {
          const price = product.price;
          switch (range) {
            case "0-20":
              return price >= 0 && price <= 20;
            case "20-60":
              return price > 20 && price <= 60;
            case "60-plus":
              return price > 60;
            default:
              return false;
          }
        });

      return matchesCategory && matchesPrice;
    });

    setDisplayData(filteredProducts);
    setNoItemsFound(
      filteredProducts.length === 0 &&
        (activeCategories.length > 0 || activePriceRanges.length > 0)
    );
  }, [initialData, filters]);

  const handleFilterChange = (e) => {
    const { name, checked, type, value } = e.target;

    setFilters((prev) => {
      if (name in prev.categories) {
        return {
          ...prev,
          categories: {
            ...prev.categories,
            [name]: checked,
          },
        };
      } else if (type === "checkbox" && value in prev.priceRanges) {
        return {
          ...prev,
          priceRanges: {
            ...prev.priceRanges,
            [value]: checked,
          },
        };
      }
      return prev;
    });
  };

  return {
    displayData,
    handleFilterChange,
    filters,
    noItemsFound,
    setFilters,
  };
};
