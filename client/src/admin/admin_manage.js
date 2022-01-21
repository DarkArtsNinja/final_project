import React, {useEffect, useState} from "react";
import { useNavigate, useParams, Prompt } from "react-router-dom";
import '../css/Admin.css'
import axios from "axios";



export default function Manage() {

  const navigate = useNavigate();

  const params = useParams()
  console.log(params)

  function handleClickAdd() {
    navigate(`/${params.user_id}/add`);
  }

  
  const [amenities, setAmenities] = useState([])
  
  useEffect(() => {
    axios
    .get(`/api/admin/amenities`) // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        setAmenities(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      
  },[]);


  const amenities_name_list = amenities.map((room, index) => {return(<option value={room.id}>{room.name}</option>)})

  console.log("this is the name of the amenities in server:", amenities.map((room, index) => room.name ) );

  const [selectedAmenity, setSelectedAmenity] = useState(null)


  const deleteAmenity = (amenity_id) => {

    const confirmation = window.confirm(`Are you sure you want to delete ${amenity_id}?`)
    
    if (confirmation){
      //send delete request to backend servers
      axios.delete(`/api/admin/amenities/${amenity_id}`)
      return
    } else {
      return
    }
  }
  const updateAmenity = (amenity_id) => {

    const confirmation = window.confirm(`Are you sure you want to update ${amenity_id}?`)
    
    if (confirmation){
      //send delete request to backend servers
      axios.put(`/api/admin/amenities/${amenity_id}`, )
      return
    } else {
      return
    }
  }
  
//create post request 
  return (

    <section className="Admin">
      <div className="Admin-box">
        <h1 className="Admin-title">Manage Amenities</h1>

        <table className="table">
          <tbody id="customers">
            <tr>
              <td>Select Amenity Room</td>
              <td>
                <select name="rooms" id="rooms" onChange= {(event) => setSelectedAmenity(event.target.value)}>
                  <option value="option0">Choose From Options</option> 
                  {amenities_name_list}
                </select>
              </td>
            </tr>
            <tr>
              <td>Change Times Available</td>
              <td>
                <select name="rooms" id="rooms">
                  <option value="option0">Calendar to Choose Day</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Max Capacity for Bookings (Per Hour)</td>
              <td>
              <select name="rooms" id="rooms">
                  <option value="option0">1</option>
                  <option value="option1">2</option>
                  <option value="option2">5</option>
                  <option value="option3">10</option>
                  <option value="option4">20</option>
                  <option value="option2">50</option>
                  <option value="option3">100</option>
                </select>
                </td>
            </tr>
          </tbody>
        </table>
        <div className="edit_amenities">
          <button className="add" onClick={() => updateAmenity(selectedAmenity)}>Save Changes</button>
          <button className="add" onClick={() => deleteAmenity(selectedAmenity)}>Delete Amenity</button>
        </div>
        
        <button className="back"onClick={() => navigate(-1)}>Back</button>

      </div>
    </section>

  )
}