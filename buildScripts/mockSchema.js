const schema = {
  "type":"object",
  "properties":{
    "users":{
      "type":"array",
      "minItems":1,
      "maxItems":3,
      "items":{
        "type":"object",
        "properties":{
          "id":{
            "type":"number",
            "unique":true,
            "minimum":1
          }
        }
      }
    }
  }
};

module.exports = schema;
