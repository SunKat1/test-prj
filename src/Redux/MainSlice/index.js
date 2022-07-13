import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  documentDefinition: {},
  layout: {}
}

export const layoutSlice = createSlice({
  name: 'layoutSlice',
  initialState,
  reducers: {
    getDocumentDefinitionData: (state, action) => {
      state.documentDefinition = action.payload
    },
    getLayoutData: (state, action) => {
      state.layout = action.payload
    },
    setLayoutData: (state, action) => {
      state.layout = action.payload
    }
  }
})


export const { getDocumentDefinitionData, getLayoutData } = layoutSlice.actions
export default layoutSlice.reducer