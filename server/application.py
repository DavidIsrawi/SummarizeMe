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
    #stats = { 'avg_current' : avg_current, 'num_summaries' : num_summaries }
    return jsonify({'statistics' : stats})

@application.route('/summary', methods=['POST'])
@cross_origin()
def summary():
    result = summarize(request.json['text'])
    #result["stats"]["avg_contrast"] = "above"       # Temporary
    #result["stats"]["avg_current"] = "40%"          # Temporary
    return jsonify({'result' : result})

if (__name__ == '__main__'):
    application.run(debug=True, port=8080)
