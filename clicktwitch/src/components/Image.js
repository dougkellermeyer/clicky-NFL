import React from 'react';

const Image = (props) => (

    <img className={"img-thumbnail"} src={require(`../../public/img/${props.imgSrc}.png`)} alt={props.imgSrc}/>

);

export default Image;