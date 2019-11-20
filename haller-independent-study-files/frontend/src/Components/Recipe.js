import React from 'react';
import "../RecipeApp.css";

import {Link} from "react-router-dom";

const API_KEY = "44005b3b2deaad35b8a90458ca2b2e5c";

class Recipe extends React.Component {
    
    state = {
        activeRecipe: [],
    }

    componentDidMount = async() => {
        const title = this.props.location.state.recipe;
        const request = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        
        const response = await request.json();
        this.setState({activeRecipe: response.recipes[0]})
        console.log(this.state.activeRecipe)
    }

    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div className="container">
                {this.state.activeRecipe.length !== 0 && 
                <div className="active-recipe">
                    <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
                    <div className="active-recipe-text">
                    <h3 className="active-recipe__title">{recipe.title}</h3>
                    <h4 className="active-recipe__publisher">Publisher: <span>{recipe.publisher}</span></h4>
                    <p className="active-recipe__website">Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
                    <button className="my-button active-recipe__button">
                        <Link to="/">Go Home</Link>
                    </button>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Recipe;