import React, {useEffect,useState} from "react";
import ListingCard from "./ListingCard";
import ListingForm from "./ListingForm";
// import ListingCard from "./ListingCard";

function ListingsContainer({searchString}) {
  const [listings,setListings] = useState([])
useEffect(() => {
  fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((listings) => setListings(listings),[]);
}, [])
function deleteItem(id){
  const updatedItems = listings.filter((listing) => listing.id !== id);
  setListings(updatedItems);
}
const listingsToDisplay = listings.filter(listing =>searchString===""? true: listing.description.includes(searchString))
const listingElements= listingsToDisplay.map(listing=> <ListingCard key={listing.id} 
  id={listing.id}
  description={listing.description}
  image={listing.image}
  location={listing.location}
  onItemDelete={deleteItem}
  ></ListingCard>)

  function sortListings(){
    let sortedListings = [...listings]
    sortedListings.sort((a, b) => (a.location > b.location) ? 1 : -1)
    setListings(sortedListings)
  }

  function addItem(newListing){
    const updatedListing = [...listings, newListing]
    setListings(updatedListing)
  }




  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        <div>
        <button onClick={sortListings}>Sort</button>
          </div>
        {listingElements}
      </ul>
      <ListingForm onFormSubmit={addItem}></ListingForm>
    </main>
  );
}

export default ListingsContainer;
