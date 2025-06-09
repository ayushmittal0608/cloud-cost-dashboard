from flask import Flask, jsonify, request
import json

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Welcome to the API! Try visiting /aws to get data."})

@app.route("/aws", methods=["GET"])
def get_data():
    try:
        with open('data.json', 'r') as file:
            print("Incoming headers:", request.headers)
            data = json.load(file)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "File not found"}), 404
    except json.JSONDecodeError:
        return jsonify({"error": "Invalid JSON format"}), 500

if __name__ == "__main__":
    app.run(debug=True)
