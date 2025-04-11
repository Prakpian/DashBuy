import { useEffect } from "react";
import Card from "../components/Card";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { useProductFilters } from "../hooks/useFilterProducts";

function StorePage() {
  const { data, loading = false } = useOutletContext();
  const { displayData, handleFilterChange, filters, noItemsFound, setFilters } =
    useProductFilters(data);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const resetFilters = {
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
    };
    const category = searchParams.get("category");
    const price = searchParams.get("price");

    if (category) {
      resetFilters.categories[category] = true;
    }

    if (price) {
      resetFilters.priceRanges[price] = true;
    }

    setFilters(resetFilters);
  }, [searchParams, setFilters]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row max-w-[1200px] m-auto px-3 gap-10 mt-20 place-items-center md:place-items-start">
      <div className="max-w-[200px] w-full flex flex-col gap-4">
        <h1 className="font-medium">Filter</h1>
        <hr className="text-neutral-400" />
        <div>
          <h2 className="font-medium">Category</h2>
          <div className="flex gap-3">
            <input
              type="checkbox"
              name="clothes"
              onChange={handleFilterChange}
              checked={filters.categories.clothes}
            />
            <label htmlFor="clothes">Clothes</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              name="jewelery"
              onChange={handleFilterChange}
              checked={filters.categories.jewelery}
            />
            <label htmlFor="jewelery">Jewelery</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              name="electronics"
              onChange={handleFilterChange}
              checked={filters.categories.electronics}
            />
            <label htmlFor="electronics">Electronics</label>
          </div>
        </div>
        <hr className="text-neutral-400" />
        <div>
          <h2 className="font-medium">Price</h2>
          <div className="flex gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="price-range"
              value="0-20"
              id="0-20"
              onChange={handleFilterChange}
            />
            <label htmlFor="0-20">£0-£20</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              name="price-range"
              value="20-60"
              id="20-60"
              onChange={handleFilterChange}
            />
            <label htmlFor="20-60">£20-£60</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              name="price-range"
              value="60-plus"
              id="60+"
              onChange={handleFilterChange}
            />
            <label htmlFor="60+">£60+</label>
          </div>
        </div>
      </div>
      <div className="flex grow-2 gap-5 flex-wrap place-content-center md:place-content-start">
        {noItemsFound ? (
          <p>No items found matching your filters...</p>
        ) : displayData.length === 0 ? (
          data.map((element) => <Card itemDetails={element} key={element.id} />)
        ) : (
          displayData.map((element) => (
            <Card itemDetails={element} key={element.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default StorePage;
