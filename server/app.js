const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const host = '127.0.0.1'
const port = 8000;

const documentDefinitionData = {
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

const layoutData = {
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

const corsOptions = {
  origin: "http://localhost:3000"
}
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/documentDefinition', (req, res) => {
  res.status(200)
  res.json(documentDefinitionData)
});

app.post('/createdDocuments',
    body('name').isString(),
    body('age').isNumeric(),
    (req, res) => {
      const errors = validationResult(req);
      if(Object.keys(req.body).map(field => documentDefinitionData.schema.fields.some(item => field === item.name)).includes(false)) {
        res.status(400).json({ error: "Document contains fields that not in document definition" })
      } else {
        if (!errors.isEmpty()) {
          return res.status(400).json({errors: errors.array()});
        } else {
          return res.status(200).json({message: 'Everything is ok'})
        }
      }
});

app.get('/layout', (req, res) => {
  res.status(200).json(layoutData)
});

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`))