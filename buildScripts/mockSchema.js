const schema = {
  type:"object",
  properties:{
    users:{
      type:"array",
      minItems:1,
      maxItems:3,
      items:{
        type:"object",
        properties:{
          id:{
            type:"integer",
            unique:true,
            minimum:1
          },
          name:{
            type:"string",
            faker:"name.findName"
          },
          email:{
            type:"string",
            format:"email",
            faker:"internet.email"
          }
        }
      }
    }
  }
};

module.exports = schema;
