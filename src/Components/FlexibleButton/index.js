import React from "react";
import './index.scss'
import { makeRequest } from "../../utils/requestUtil";

export const FlexibleButton = ({type, label, actionType, data}) => {
  const saveDataToServer = () => {
    makeRequest({
      url: '/createdDocuments',
      method: 'post',
      body: data
    })
  }

  const getProperOnClick = () => {
    switch (actionType) {
      case 'save': return saveDataToServer()
      default: return console.log(data)
    }
  }

  return (
      <div>
        <button type={type} onClick={getProperOnClick}>{label}</button>
      </div>
  )
}