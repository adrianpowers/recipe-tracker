import React from "react";
import RecipeGenerate from './RecipeGenerate'

function RecipeList({recipes, deleteRecipe}) {

  return (
    <div className="recipe-list"> 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
          recipes.map((recipe, index) => {
            return <RecipeGenerate
                     key={index}
                     recipe={recipe}
                     deleteRecipe={deleteRecipe}
                   />
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
