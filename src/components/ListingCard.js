import React, {useState} from "react";

function ListingCard({description,image,location,id,onItemDelete}) {
  const [favorited,setFavorited]= useState(false)
  function clickHandler(){
    setFavorited(favorited=>!favorited)
  }

  function deleteHandler(){
fetch(`http://localhost:6001/listings/${id}`,{
  method: "DELETE",}).then(r=>r.json()).then(onItemDelete(id))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={clickHandler}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={clickHandler}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteHandler}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
