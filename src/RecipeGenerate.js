import React from 'react'

export default function RecipeGenerate({ recipe, deleteRecipe }){

return (
  <tr>
    <td>
      {recipe.name}
    </td>
    <td>
      {recipe.cuisine}
    </td>
    <td>
      <img src={recipe.photo} style={{objectFit:"scale-down", width: "100%", height: "100%",}} />
    </td>
    <td className="content_td">
      <p>{recipe.ingredients}</p>
    </td>
    <td className="content_td">
      <p>{recipe.preparation}</p>
    </td>
    <td>
      <button name="delete" onClick={() => deleteRecipe(recipe.name)}>Delete</button>
    </td>
  </tr>
)

}