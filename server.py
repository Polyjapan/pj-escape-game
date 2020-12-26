from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('start.html')
    
@app.route('/kitsune', methods=['GET', 'POST'])
def kitsune():
    return render_template('kitsune.html')

@app.route('/kappa', methods=['GET', 'POST'])
def kappa():
    return render_template('kappa.html')

@app.route('/tokoyo', methods=['GET', 'POST'])
def tokoyo():
    return render_template('tokoyo.html')

@app.route('/tamamo', methods=['GET', 'POST'])
def tamamo():
    return render_template('tamamo.html')
