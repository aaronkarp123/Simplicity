from flask import render_template
from application import app

@app.route('/')
def base():
	return render_template('base.html')
