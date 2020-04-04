define({ "api": [
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
    "filename": "./docs/main.js",
    "group": "/home/madra/Personal/Projects/Go/src/github.com/MahdiRazaqi/nevees-backend/docs/main.js",
    "groupTitle": "/home/madra/Personal/Projects/Go/src/github.com/MahdiRazaqi/nevees-backend/docs/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/v1/post",
    "title": "Add post",
    "version": "1.0.0",
    "name": "addPost",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>post title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>post content</p>"
          },
          {
            "group": "Parameter",
            "type": "[]String",
            "optional": false,
            "field": "tags",
            "description": "<p>post tags</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "post",
            "description": "<p>post model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>error message</p>"
          }
        ]
      }
    },
    "filename": "./web/v1/post.go",
    "groupTitle": "Post"
  },
  {
    "type": "put",
    "url": "/api/v1/post/:id",
    "title": "Edit post",
    "version": "1.0.0",
    "name": "editPost",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>post title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>post content</p>"
          },
          {
            "group": "Parameter",
            "type": "[]String",
            "optional": false,
            "field": "tags",
            "description": "<p>post tags</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "post",
            "description": "<p>post model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>error message</p>"
          }
        ]
      }
    },
    "filename": "./web/v1/post.go",
    "groupTitle": "Post"
  },
  {
    "type": "delete",
    "url": "/api/v1/post/:id",
    "title": "Remove post",
    "version": "1.0.0",
    "name": "removePost",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>error message</p>"
          }
        ]
      }
    },
    "filename": "./web/v1/post.go",
    "groupTitle": "Post"
  }
] });