import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
    const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=f63dd49cf83e4cc6840f0f5ef586373b`);
    const detailData = await data.json();
    setDetails(detailData);
};

    useEffect(()=> {
        fetchDetails();
    },[params.name]);

  return (
    <div>{details.title}</div>
  )
}

export default Recipe;