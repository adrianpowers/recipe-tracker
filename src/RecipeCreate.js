import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  
  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  }
  
  const [formData, setFormData] = useState(initialFormState);
  
  const handleChange = (event) => {
    let target = event.target
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormState);
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" onChange={handleChange} value={formData.name} placeholder="Name"/>
            </td>
            <td>
              <input name="cuisine" onChange={handleChange} value={formData.cuisine} placeholder="Cuisine"/>
            </td>
            <td>
              <input name="photo" onChange={handleChange} value={formData.photo} placeholder="URL"/>
            </td>
            <td>
              <textarea name="ingredients" onChange={handleChange} value={formData.ingredients} placeholder="Ingredients"/>
            </td>
            <td>
              <textarea name="preparation" onChange={handleChange} value={formData.preparation} placeholder="Preparation"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
