import React,{useState} from "react";

function ListingForm({onFormSubmit}){
const [formData,setFormData] = useState({description:"",
    location:"",
    image:""})
function handleFormChange(e){
    setFormData({...formData, 
        [e.target.name]:e.target.value})

}
function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/listings",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },body: JSON.stringify(formData)}).then(r => r.json()).then(newListing => onFormSubmit(newListing))
}
    return(
        <form onSubmit={e=>handleSubmit(e)}>
            <label>
        Description
        <input type="text" name="description" onChange={e =>handleFormChange(e)} value={formData.description} />
      </label>
      <label>
        Image
        <input type="text" name="image" onChange={e =>handleFormChange(e)} value={formData.image} />
      </label>
      <label>
        Location
        <input type="text" name="location" onChange={e =>handleFormChange(e)} value={formData.location} />
      </label>
      <input type="submit" value="Add listing" />
        </form>
    )
}

export default ListingForm