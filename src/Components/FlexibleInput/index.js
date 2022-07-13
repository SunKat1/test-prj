import React from "react";
import { useSelector } from "react-redux";
import './index.scss'

export const FlexibleInput = ({fieldId, fieldValue, setFieldValue}) => {
  const { fields } = useSelector(state => state.layout.documentDefinition.schema)

  const currentField = fields.find(field => field._id === fieldId)

  const onchange = (e) => {
    setFieldValue({
      ...fieldValue,
      [e.target.name]: e.target.value
    })
  }

  return (
      <div>
        <label>{currentField.label}</label>
        <input
            name={currentField.name}
            type={currentField.type}
            maxLength={currentField.maxLength}
            value={fieldValue[currentField.name]}
            onChange={e => onchange(e)}
        />
      </div>
  )
}