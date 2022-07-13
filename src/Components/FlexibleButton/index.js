import React from "react";
import './index.scss'

export const FlexibleButton = ({type, label, actionType, data}) => {
  const getProperOnClick = () => {
    switch (actionType) {
      case 'save': return console.log(data)
      default: return console.log(data)
    }
  }

  return (
      <div>
        <button type={type} onClick={getProperOnClick}>{label}</button>
      </div>
  )
}