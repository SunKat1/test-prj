export const documentDefinitionData = {
  "schema":{
    "fields":[
      {
        "_id": "cc4cb134-fda0-44d8-8e92-e42ebbceb415",
        "label": "Client Name",
        "name":"name",
        "type": "Text",
        "maxLength": 100
      },
      {
        "_id": "228b905f-4a43-4a40-b829-0c6a04ad4782",
        "label":"Client Age",
        "name": "age",
        "type": "number"
      }
    ]
  }
}

export const layoutData = {
  "header":{
    "rows":[
      {
        "columns":[
          {
            "type": "field",
            "fieldId": "cc4cb134-fda0-44d8-8e92-e42ebbceb415"
          },
          {
            "type": "field",
            "fieldId": "228b905f-4a43-4a40-b829-0c6a04ad4782"
          }
        ]
      },
      {
        "columns":[
          {
            "type": "button",
            "actionType": "save",
            "label": "Save"
          }
        ]
      }
    ]
  }
}