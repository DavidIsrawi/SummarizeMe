from summarizeMe import summarize
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS, cross_origin
import json

application = Flask(__name__) # Define application
CORS(application)

@application.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@application.route('/stats', methods=['GET'])
def sendStats():
    stats = json.load(open('db.json'))
    return jsonify({'statistics' : stats})

@application.route('/summary', methods=['POST'])
@cross_origin()
def summary():
    result = summarize(request.json['text'])
    return jsonify({'result' : result})

if (__name__ == '__main__'):
    application.run(debug=True, port=int(os.environ.get('PORT', 5000)))
