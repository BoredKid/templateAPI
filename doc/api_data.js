define({ "api": [
  {
    "type": "get",
    "url": "/hello/:name",
    "title": "Say hello to someone",
    "name": "GetHelloWithName",
    "group": "BonjourAvecNom",
    "description": "<p>Cette route dit bonjour à une personne bien précise</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Prénom ou Pseudo de la personne à qui il faut dire bonjour</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "String Request-Example:",
          "content": "name: Jackie",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Hello {your name here}&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": true,\n  \"message\": \"Hello Jackie!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./route/api/hello.route.js",
    "groupTitle": "BonjourAvecNom",
    "sampleRequest": [
      {
        "url": "localhost:8080/hello/:name"
      }
    ]
  },
  {
    "type": "post",
    "url": "/hello",
    "title": "Say hello to someone also but with a post",
    "name": "PostHelloWithName",
    "group": "BonjourAvecNom",
    "description": "<p>Cette route dit bonjour à une personne bien précise en utilisant un post</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Prénom ou Pseudo de la personne à qui il faut dire bonjour</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\" : \"Jackie\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Hello {your name here}&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": true,\n  \"message\": \"Hello Jackie!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./route/api/hello.route.js",
    "groupTitle": "BonjourAvecNom",
    "sampleRequest": [
      {
        "url": "localhost:8080/hello"
      }
    ]
  },
  {
    "type": "get",
    "url": "/hello",
    "title": "Say hello",
    "name": "GetHello",
    "group": "Bonjour",
    "description": "<p>Cette route dit bonjour.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Hello World&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": true,\n  \"message\": \"Hello World!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./route/api/hello.route.js",
    "groupTitle": "Bonjour",
    "sampleRequest": [
      {
        "url": "localhost:8080/hello"
      }
    ]
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "c__Users_cikane_Desktop_Pour_un_plus_joli_bureau_templateAPI_doc_main_js",
    "groupTitle": "c__Users_cikane_Desktop_Pour_un_plus_joli_bureau_templateAPI_doc_main_js",
    "name": ""
  }
] });
