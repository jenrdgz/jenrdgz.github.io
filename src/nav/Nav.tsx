import { useState } from "react";
import {
    Link, useNavigate
  } from "react-router-dom";
import { CustomLink } from "../sharedComponents/CustomLink";

  export interface NavProps {
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
  }


export function Nav(props: NavProps) {
    return (
      <div className="nav">
        <div className="title">
          <CustomLink linkTo="/work" customClass="navLink" setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
            Jenny Rodriguez
          </CustomLink>
        </div>
        <div className="rightNav">
          <CustomLink linkTo="/work" customClass="navLink" setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
            Work 
          </CustomLink>
          <CustomLink linkTo="/portfolio" customClass="navLink" setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
             Portfolio
          </CustomLink>
          <CustomLink linkTo="/about" customClass="navLink" setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
            About
          </CustomLink>
          <CustomLink linkTo="/resume" customClass="navLink" setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
            Résumé
          </CustomLink>
        </div>
      </div>  
      
    );
}