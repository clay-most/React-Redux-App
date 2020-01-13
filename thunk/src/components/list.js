import React, { useEffect } from "react";
import { conenct } from "react-redux";
import Card from "./Card";
import { getPokemon, getNextPage } from "../actions/index";

const List=(props)=> {
  useEffect(() => {
    props.getPokemon();
    console.log(props.pokemon)
  }, []);
  return (
    <div className="List">
      this is a list <Card></Card>
    </div>
  );
}
export default List;
