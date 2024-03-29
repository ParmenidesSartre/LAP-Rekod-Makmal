module.exports = {
  swagger: '2.0',
  info: {
    description:
      'Sterelisation data usually have to be key in twice and also copy of records are being kept physically. This causes problem when trying to retrive old records. This API is built is to solve this problem. It is used to powered a React Native app that is used to reduce feedback time by water treatment plant operator.',
    version: '1.0.0',
    title: 'LAP Strelise Records API',
    contact: {
      email: 'faizalazman88@gmail.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  host: 'makmal-lap.herokuapp.com/',
  tags: [
    {
      name: 'Strelisation Records',
      description:
        'Records of all strelisation that has been done in the past in Larut Matang Selama',
    },
  ],
  paths: {
    '/api/rekod-strelise': {
      get: {
        tags: ['Records'],
        summary: 'GET all records of strelisation',
        description: 'GET all records of strelisation',
        operationId: 'getRecords',
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'Records object returned',
          },
        },
      },
    },
    '/api/rekod-strelise/{id}': {
      get: {
        tags: ['Records'],
        summary: 'GET a single record of strelisation',
        description: 'GET a single record of strelisation',
        operationId: 'getRecordById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/definitions/Records/id',
            },
            required: true,
            description: "Id of minion's required",
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'Records object returned',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/definitions/Records',
                },
              },
            },
          },
        },
      },
      put: {
        tags: ['Records'],
        summary: 'Update an existing record of strelisation',
        description: '',
        operationId: 'updateRecordById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/definitions/Records/id',
            },
          },
        ],
        consumes: ['application/json'],
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'Records object returned',
          },
        },
      },
      delete: {
        tags: ['Records'],
        summary: 'Delete an existing record of strelisation',
        description: '',
        operationId: 'deleteRecordById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/definitions/Records/id',
            },
            required: true,
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'Records object returned',
            example: {
              status: 'success',
              message: 'Record has been deleted',
            },
          },
        },
      },
    },
    '/api/machine-learning': {
      post: {
        tags: ['Optimal Dosage'],
        summary: 'GET optimal dosage',
        description: '',
        operationId: 'getOptimalDosage',
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Parameters of water quality that need predictions',
            required: true,
            schema: {
              $ref: '#/definitions/Dosage',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'Optimal dosage object returned',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    dosage: '1.5',
                  },
                },
              },
            },
          },
        },
      },
    },
    // "/pet/findByStatus": {
    //   "get": {
    //     "tags": [
    //       "pet"
    //     ],
    //     "summary": "Finds Pets by status",
    //     "description": "Multiple status values can be provided with comma separated strings",
    //     "operationId": "findPetsByStatus",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "status",
    //         "in": "query",
    //         "description": "Status values that need to be considered for filter",
    //         "required": true,
    //         "type": "array",
    //         "items": {
    //           "type": "string",
    //           "enum": [
    //             "available",
    //             "pending",
    //             "sold"
    //           ],
    //           "default": "available"
    //         },
    //         "collectionFormat": "multi"
    //       }
    //     ],
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "schema": {
    //           "type": "array",
    //           "items": {
    //             "$ref": "#/definitions/Pet"
    //           }
    //         }
    //       },
    //       "400": {
    //         "description": "Invalid status value"
    //       }
    //     },
    //     "security": [
    //       {
    //         "petstore_auth": [
    //           "write:pets",
    //           "read:pets"
    //         ]
    //       }
    //     ]
    //   }
    // },
    // "/pet/findByTags": {
    //   "get": {
    //     "tags": [
    //       "pet"
    //     ],
    //     "summary": "Finds Pets by tags",
    //     "description": "Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.",
    //     "operationId": "findPetsByTags",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "tags",
    //         "in": "query",
    //         "description": "Tags to filter by",
    //         "required": true,
    //         "type": "array",
    //         "items": {
    //           "type": "string"
    //         },
    //         "collectionFormat": "multi"
    //       }
    //     ],
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "schema": {
    //           "type": "array",
    //           "items": {
    //             "$ref": "#/definitions/Pet"
    //           }
    //         }
    //       },
    //       "400": {
    //         "description": "Invalid tag value"
    //       }
    //     },
    //     "security": [
    //       {
    //         "petstore_auth": [
    //           "write:pets",
    //           "read:pets"
    //         ]
    //       }
    //     ],
    //     "deprecated": true
    //   }
    // },
    // "/pet/{petId}": {
    //   "get": {
    //     "tags": [
    //       "pet"
    //     ],
    //     "summary": "Find pet by ID",
    //     "description": "Returns a single pet",
    //     "operationId": "getPetById",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "petId",
    //         "in": "path",
    //         "description": "ID of pet to return",
    //         "required": true,
    //         "type": "integer",
    //         "format": "int64"
    //       }
    //     ],
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "schema": {
    //           "$ref": "#/definitions/Pet"
    //         }
    //       },
    //       "400": {
    //         "description": "Invalid ID supplied"
    //       },
    //       "404": {
    //         "description": "Pet not found"
    //       }
    //     },
    //     "security": [
    //       {
    //         "api_key": []
    //       }
    //     ]
    //   },
    //   "post": {
    //     "tags": [
    //       "pet"
    //     ],
    //     "summary": "Updates a pet in the store with form data",
    //     "description": "",
    //     "operationId": "updatePetWithForm",
    //     "consumes": [
    //       "application/x-www-form-urlencoded"
    //     ],
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "petId",
    //         "in": "path",
    //         "description": "ID of pet that needs to be updated",
    //         "required": true,
    //         "type": "integer",
    //         "format": "int64"
    //       },
    //       {
    //         "name": "name",
    //         "in": "formData",
    //         "description": "Updated name of the pet",
    //         "required": false,
    //         "type": "string"
    //       },
    //       {
    //         "name": "status",
    //         "in": "formData",
    //         "description": "Updated status of the pet",
    //         "required": false,
    //         "type": "string"
    //       }
    //     ],
    //     "responses": {
    //       "405": {
    //         "description": "Invalid input"
    //       }
    //     },
    //     "security": [
    //       {
    //         "petstore_auth": [
    //           "write:pets",
    //           "read:pets"
    //         ]
    //       }
    //     ]
    //   },
    //   "delete": {
    //     "tags": [
    //       "pet"
    //     ],
    //     "summary": "Deletes a pet",
    //     "description": "",
    //     "operationId": "deletePet",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "api_key",
    //         "in": "header",
    //         "required": false,
    //         "type": "string"
    //       },
    //       {
    //         "name": "petId",
    //         "in": "path",
    //         "description": "Pet id to delete",
    //         "required": true,
    //         "type": "integer",
    //         "format": "int64"
    //       }
    //     ],
    //     "responses": {
    //       "400": {
    //         "description": "Invalid ID supplied"
    //       },
    //       "404": {
    //         "description": "Pet not found"
    //       }
    //     },
    //     "security": [
    //       {
    //         "petstore_auth": [
    //           "write:pets",
    //           "read:pets"
    //         ]
    //       }
    //     ]
    //   }
    // },
    // "/pet/{petId}/uploadImage": {
    //   "post": {
    //     "tags": [
    //       "pet"
    //     ],
    //     "summary": "uploads an image",
    //     "description": "",
    //     "operationId": "uploadFile",
    //     "consumes": [
    //       "multipart/form-data"
    //     ],
    //     "produces": [
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "petId",
    //         "in": "path",
    //         "description": "ID of pet to update",
    //         "required": true,
    //         "type": "integer",
    //         "format": "int64"
    //       },
    //       {
    //         "name": "additionalMetadata",
    //         "in": "formData",
    //         "description": "Additional data to pass to server",
    //         "required": false,
    //         "type": "string"
    //       },
    //       {
    //         "name": "file",
    //         "in": "formData",
    //         "description": "file to upload",
    //         "required": false,
    //         "type": "file"
    //       }
    //     ],
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "schema": {
    //           "$ref": "#/definitions/ApiResponse"
    //         }
    //       }
    //     },
    //     "security": [
    //       {
    //         "petstore_auth": [
    //           "write:pets",
    //           "read:pets"
    //         ]
    //       }
    //     ]
    //   }
    // },
    // "/store/inventory": {
    //   "get": {
    //     "tags": [
    //       "store"
    //     ],
    //     "summary": "Returns pet inventories by status",
    //     "description": "Returns a map of status codes to quantities",
    //     "operationId": "getInventory",
    //     "produces": [
    //       "application/json"
    //     ],
    //     "parameters": [],
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "schema": {
    //           "type": "object",
    //           "additionalProperties": {
    //             "type": "integer",
    //             "format": "int32"
    //           }
    //         }
    //       }
    //     },
    //     "security": [
    //       {
    //         "api_key": []
    //       }
    //     ]
    //   }
    // },
    // "/store/order": {
    //   "post": {
    //     "tags": [
    //       "store"
    //     ],
    //     "summary": "Place an order for a pet",
    //     "description": "",
    //     "operationId": "placeOrder",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "in": "body",
    //         "name": "body",
    //         "description": "order placed for purchasing the pet",
    //         "required": true,
    //         "schema": {
    //           "$ref": "#/definitions/Order"
    //         }
    //       }
    //     ],
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "schema": {
    //           "$ref": "#/definitions/Order"
    //         }
    //       },
    //       "400": {
    //         "description": "Invalid Order"
    //       }
    //     }
    //   }
    // },
    // "/store/order/{orderId}": {
    //   "get": {
    //     "tags": [
    //       "store"
    //     ],
    //     "summary": "Find purchase order by ID",
    //     "description": "For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions",
    //     "operationId": "getOrderById",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "orderId",
    //         "in": "path",
    //         "description": "ID of pet that needs to be fetched",
    //         "required": true,
    //         "type": "integer",
    //         "maximum": 10,
    //         "minimum": 1,
    //         "format": "int64"
    //       }
    //     ],
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "schema": {
    //           "$ref": "#/definitions/Order"
    //         }
    //       },
    //       "400": {
    //         "description": "Invalid ID supplied"
    //       },
    //       "404": {
    //         "description": "Order not found"
    //       }
    //     }
    //   },
    //   "delete": {
    //     "tags": [
    //       "store"
    //     ],
    //     "summary": "Delete purchase order by ID",
    //     "description": "For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors",
    //     "operationId": "deleteOrder",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "orderId",
    //         "in": "path",
    //         "description": "ID of the order that needs to be deleted",
    //         "required": true,
    //         "type": "integer",
    //         "minimum": 1,
    //         "format": "int64"
    //       }
    //     ],
    //     "responses": {
    //       "400": {
    //         "description": "Invalid ID supplied"
    //       },
    //       "404": {
    //         "description": "Order not found"
    //       }
    //     }
    //   }
    // },
    // "/user": {
    //   "post": {
    //     "tags": [
    //       "user"
    //     ],
    //     "summary": "Create user",
    //     "description": "This can only be done by the logged in user.",
    //     "operationId": "createUser",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "in": "body",
    //         "name": "body",
    //         "description": "Created user object",
    //         "required": true,
    //         "schema": {
    //           "$ref": "#/definitions/User"
    //         }
    //       }
    //     ],
    //     "responses": {
    //       "default": {
    //         "description": "successful operation"
    //       }
    //     }
    //   }
    // },
    // "/user/createWithArray": {
    //   "post": {
    //     "tags": [
    //       "user"
    //     ],
    //     "summary": "Creates list of users with given input array",
    //     "description": "",
    //     "operationId": "createUsersWithArrayInput",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "in": "body",
    //         "name": "body",
    //         "description": "List of user object",
    //         "required": true,
    //         "schema": {
    //           "type": "array",
    //           "items": {
    //             "$ref": "#/definitions/User"
    //           }
    //         }
    //       }
    //     ],
    //     "responses": {
    //       "default": {
    //         "description": "successful operation"
    //       }
    //     }
    //   }
    // },
    // "/user/createWithList": {
    //   "post": {
    //     "tags": [
    //       "user"
    //     ],
    //     "summary": "Creates list of users with given input array",
    //     "description": "",
    //     "operationId": "createUsersWithListInput",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "in": "body",
    //         "name": "body",
    //         "description": "List of user object",
    //         "required": true,
    //         "schema": {
    //           "type": "array",
    //           "items": {
    //             "$ref": "#/definitions/User"
    //           }
    //         }
    //       }
    //     ],
    //     "responses": {
    //       "default": {
    //         "description": "successful operation"
    //       }
    //     }
    //   }
    // },
    // "/user/login": {
    //   "get": {
    //     "tags": [
    //       "user"
    //     ],
    //     "summary": "Logs user into the system",
    //     "description": "",
    //     "operationId": "loginUser",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "username",
    //         "in": "query",
    //         "description": "The user name for login",
    //         "required": true,
    //         "type": "string"
    //       },
    //       {
    //         "name": "password",
    //         "in": "query",
    //         "description": "The password for login in clear text",
    //         "required": true,
    //         "type": "string"
    //       }
    //     ],
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "schema": {
    //           "type": "string"
    //         },
    //         "headers": {
    //           "X-Rate-Limit": {
    //             "type": "integer",
    //             "format": "int32",
    //             "description": "calls per hour allowed by the user"
    //           },
    //           "X-Expires-After": {
    //             "type": "string",
    //             "format": "date-time",
    //             "description": "date in UTC when token expires"
    //           }
    //         }
    //       },
    //       "400": {
    //         "description": "Invalid username/password supplied"
    //       }
    //     }
    //   }
    // },
    // "/user/logout": {
    //   "get": {
    //     "tags": [
    //       "user"
    //     ],
    //     "summary": "Logs out current logged in user session",
    //     "description": "",
    //     "operationId": "logoutUser",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [],
    //     "responses": {
    //       "default": {
    //         "description": "successful operation"
    //       }
    //     }
    //   }
    // },
    // "/user/{username}": {
    //   "get": {
    //     "tags": [
    //       "user"
    //     ],
    //     "summary": "Get user by user name",
    //     "description": "",
    //     "operationId": "getUserByName",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "username",
    //         "in": "path",
    //         "description": "The name that needs to be fetched. Use user1 for testing. ",
    //         "required": true,
    //         "type": "string"
    //       }
    //     ],
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "schema": {
    //           "$ref": "#/definitions/User"
    //         }
    //       },
    //       "400": {
    //         "description": "Invalid username supplied"
    //       },
    //       "404": {
    //         "description": "User not found"
    //       }
    //     }
    //   },
    //   "put": {
    //     "tags": [
    //       "user"
    //     ],
    //     "summary": "Updated user",
    //     "description": "This can only be done by the logged in user.",
    //     "operationId": "updateUser",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "username",
    //         "in": "path",
    //         "description": "name that need to be updated",
    //         "required": true,
    //         "type": "string"
    //       },
    //       {
    //         "in": "body",
    //         "name": "body",
    //         "description": "Updated user object",
    //         "required": true,
    //         "schema": {
    //           "$ref": "#/definitions/User"
    //         }
    //       }
    //     ],
    //     "responses": {
    //       "400": {
    //         "description": "Invalid user supplied"
    //       },
    //       "404": {
    //         "description": "User not found"
    //       }
    //     }
    //   },
    //   "delete": {
    //     "tags": [
    //       "user"
    //     ],
    //     "summary": "Delete user",
    //     "description": "This can only be done by the logged in user.",
    //     "operationId": "deleteUser",
    //     "produces": [
    //       "application/xml",
    //       "application/json"
    //     ],
    //     "parameters": [
    //       {
    //         "name": "username",
    //         "in": "path",
    //         "description": "The name that needs to be deleted",
    //         "required": true,
    //         "type": "string"
    //       }
    //     ],
    //     "responses": {
    //       "400": {
    //         "description": "Invalid username supplied"
    //       },
    //       "404": {
    //         "description": "User not found"
    //       }
    //     }
    //   }
    // }
  },
  definitions: {
    Records: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          example: 1,
        },
        name: {
          type: 'string',
          example: 'John',
        },
        date: {
          type: 'string',
          format: 'date-time',
        },
        place: {
          type: 'string',
          example: 'London',
        },
        location: {
          type: 'array',
          example: [25.2084, 55.2719],
          items: {
            type: 'number',
          },
        },
        record: {
          type: 'array',
          example: [10, 15, 20],
          items: {
            type: 'number',
          },
        },
      },
      xml: {
        name: 'Order',
      },
    },
    Dosage: {
      type: 'object',
      properties: {
        pH: {
          type: 'number',
          example: 7.5,
        },
        Kekeruhan: {
          type: 'number',
          example: 0.5,
        },
        Warna: {
          type: 'number',
          example: 0.5,
        },
      },
    },
    //   "Category": {
    //     "type": "object",
    //     "properties": {
    //       "id": {
    //         "type": "integer",
    //         "format": "int64"
    //       },
    //       "name": {
    //         "type": "string"
    //       }
    //     },
    //     "xml": {
    //       "name": "Category"
    //     }
    //   },
    //   "User": {
    //     "type": "object",
    //     "properties": {
    //       "id": {
    //         "type": "integer",
    //         "format": "int64"
    //       },
    //       "username": {
    //         "type": "string"
    //       },
    //       "firstName": {
    //         "type": "string"
    //       },
    //       "lastName": {
    //         "type": "string"
    //       },
    //       "email": {
    //         "type": "string"
    //       },
    //       "password": {
    //         "type": "string"
    //       },
    //       "phone": {
    //         "type": "string"
    //       },
    //       "userStatus": {
    //         "type": "integer",
    //         "format": "int32",
    //         "description": "User Status"
    //       }
    //     },
    //     "xml": {
    //       "name": "User"
    //     }
    //   },
    //   "Tag": {
    //     "type": "object",
    //     "properties": {
    //       "id": {
    //         "type": "integer",
    //         "format": "int64"
    //       },
    //       "name": {
    //         "type": "string"
    //       }
    //     },
    //     "xml": {
    //       "name": "Tag"
    //     }
    //   },
    //   "Pet": {
    //     "type": "object",
    //     "required": [
    //       "name",
    //       "photoUrls"
    //     ],
    //     "properties": {
    //       "id": {
    //         "type": "integer",
    //         "format": "int64"
    //       },
    //       "category": {
    //         "$ref": "#/definitions/Category"
    //       },
    //       "name": {
    //         "type": "string",
    //         "example": "doggie"
    //       },
    //       "photoUrls": {
    //         "type": "array",
    //         "xml": {
    //           "name": "photoUrl",
    //           "wrapped": true
    //         },
    //         "items": {
    //           "type": "string"
    //         }
    //       },
    //       "tags": {
    //         "type": "array",
    //         "xml": {
    //           "name": "tag",
    //           "wrapped": true
    //         },
    //         "items": {
    //           "$ref": "#/definitions/Tag"
    //         }
    //       },
    //       "status": {
    //         "type": "string",
    //         "description": "pet status in the store",
    //         "enum": [
    //           "available",
    //           "pending",
    //           "sold"
    //         ]
    //       }
    //     },
    //     "xml": {
    //       "name": "Pet"
    //     }
    //   },
    //   "ApiResponse": {
    //     "type": "object",
    //     "properties": {
    //       "code": {
    //         "type": "integer",
    //         "format": "int32"
    //       },
    //       "type": {
    //         "type": "string"
    //       },
    //       "message": {
    //         "type": "string"
    //       }
    //     }
    //   }
  },
  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'http://swagger.io',
  },
}
