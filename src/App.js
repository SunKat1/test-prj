import React, { useState, useEffect } from "react";
import { makeRequest } from './utils/requestUtil'
import { useDispatch, useSelector } from "react-redux";
import {
  getLayoutData,
  getDocumentDefinitionData
} from './Redux/MainSlice'
import { documentDefinitionData, layoutData } from './data'
import { AppLayout } from './Components/Layouts/AppLayout'
import { RowContainer } from './Components/RowContainer'
import { ColumnContainer } from './Components/ColumnContainer'
import { FlexibleInput } from './Components/FlexibleInput'
import { FlexibleButton } from "./Components/FlexibleButton";
import './App.css';

const App = () => {
  const { layout } = useSelector(state => state.layout)
  const [fieldState, setFieldState] = useState({
    name: '',
    age: Number('')
  })
  const dispatch = useDispatch()

  useEffect(() => {
    makeRequest({
      url: '/documentDefinition',
      dispatch,
      reducer: getDocumentDefinitionData,
      mockData: documentDefinitionData
    })
    makeRequest({
      url: '/layout',
      dispatch,
      reducer: getLayoutData,
      mockData: layoutData
    })
  }, [dispatch])

  const getFields = (fieldId = '', type, actionType, label) => {
    switch (type) {
      case "field":
        return <FlexibleInput fieldValue={fieldState} setFieldValue={setFieldState} fieldId={fieldId} />
      case "button": return <FlexibleButton data={fieldState} type={type} actionType={actionType} label={label} />
      default: break;
    }
  }

  return (
  <AppLayout>
    <div className="App">
      {layout.header?.rows.map(row => (
        <RowContainer key={JSON.stringify(row)}>
          {row.columns.map(column => (
              <ColumnContainer key={column.fieldId || column.actionType}>
                {getFields(column.fieldId, column.type, column.actionType, column.label)}
              </ColumnContainer>
          ))}
        </RowContainer>
      ))}
    </div>
  </AppLayout>
  );
}

export default App;
