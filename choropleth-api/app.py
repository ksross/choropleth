from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
import os

app = Flask(__name__)
api = Api(app)
CORS(app, origins=os.environ.get("ORIGINS"))

class Index(Resource):
    def get(self):
        return {'message': 'response from flask API'}

api.add_resource(Index, '/')

if __name__ == "__main__":
    app.run(debug=os.environ.get("DEBUG"))