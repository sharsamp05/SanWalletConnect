from flask import Flask, request, render_template, Response
import os

app = Flask(__name__)

app._static_folder = os.path.abspath("static/")

@app.route('/',methods=['GET'])
def startup():
    """This Route is just to check if Flask API is runner"""
    return 'Service is Running'

@app.route('/home',methods=['GET'])
def home():
    """Home Route"""
    return render_template("index.html")


if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)