import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
//import photolist to gallery
import PhotoList from "../Photolist"

function Gallery({ currentCategory }) {

    const { name, description } = currentCategory;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name}></PhotoList>
        </section>
    );
}

export default Gallery;