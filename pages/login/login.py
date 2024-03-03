from flask import Flask, redirect, url_for, render_template, request, session, Blueprint

login = Blueprint(
    'login',
    __name__,
    static_folder='static',
    static_url_path='/login',
    template_folder='templates')

@login.route('/login')
def index():
    return render_template('login.html')