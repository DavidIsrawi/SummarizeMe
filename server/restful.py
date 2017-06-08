from summarizeMe import summarize
from flask import Flask, jsonify, request

app = Flask(__name__) # Define app

avg_current = 0
num_summaries = 0

@app.route('/stats', methods=['GET'])
def sendStats():
    stats = { 'avg_current' : avg_current, 'num_summaries' : num_summaries }
    return jsonify({'statistics' : stats})

@app.route('/summary', methods=['POST'])
def summary():
    result = summarize(request.json['text'])
    result["stats"]["avg_contrast"] = "above"       # Temporary
    result["stats"]["avg_current"] = "40%"          # Temporary
    return jsonify({'result' : result})

if (__name__ == '__main__'):
    app.run(debug=True, port=8080)
