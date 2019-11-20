import React, { Component } from 'react';
import Form from './Form';
import Recipes from './Recipes';
import Footer from "./Footer";
import "../RecipeApp.css";
import Menu from "./Menu";

const API_KEY = "44005b3b2deaad35b8a90458ca2b2e5c";

class RecipeSearch extends Component {

  state = {
    recipes: [],
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=6`);
    
    const data = await api_call.json();
    this.setState({recipes: data.recipes})
    console.log(this.state.recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes: recipes})
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
        <div className="box recipeSearch">
          <Menu />
            <div className="hero hero-recipe-search">
            <h2 className="hero-text-1 hero-text-search-1">Recipe</h2>
            <h2 className="hero-text-2 hero-text-search-2">SEARCH</h2>
            <p>Enter in a key term to search for a recipe.</p>
            <Form getRecipe={this.getRecipe} />
        </div>
        <div className="recipes"><Recipes recipes={this.state.recipes}/></div>
        <Footer />
      </div>
    );
  }
}

export default RecipeSearch;

