from flask import Flask, redirect, url_for, render_template, request, session
app = Flask(__name__)
app.secret_key = '123'
###########

# if __name__ == '__main__':
#     app.run(debug=True)
#
# @app.route('/home')
# def home_page():
#     return render_template('home.html')
#
#
# @app.route('/login', methods=['GET', 'POST'])
# def login_page():
#     if request.method == 'POST':
#         email = request.form['email']
#         password = request.form['password']
#         #Do check with DB
#         # if username == 'admin' and password == '<PASSWORD>':
#         #     session['username'] = 'admin'
#         #     return redirect(url_for('home_page'))
#         session['email'] = email
#         session['logged_in'] = True
#         return render_template('home.html', email=email)
#     return render_template('login.html')
#
# @app.route('/about')
# def about_page():
#     return render_template('about.html')
#
# @app.route('/travelSchedule', methods=['GET', 'POST'])
# def travelSch_page():
#     return render_template('travelSchedule.html')
#
# @app.route('/travelHistory', methods=['GET', 'POST'])
# def travelHist_page():
#     return render_template('travelHistory.html')
#
# @app.route('/newTravel', methods=['GET', 'POST'])
# def newTravel_page():
#     return render_template('newTrip.html')
#
# @app.route('/signup', methods=['GET', 'POST'])
# def signup_page():
#     return render_template('signup.html')
#
# @app.route('/logout', methods=['GET'])
# def logout_func():
#     session['logged_in'] = False
#     session['email'] = ''
#     return redirect(url_for('login_page'))
#
# @app.route('/')
# def entry_page():
#     return render_template('first.html')
#

###Pages
#about
from pages.about.about import about
app.register_blueprint(about)

#entry
from pages.entry.entry import entry
app.register_blueprint(entry)

#home
from pages.home.home import home
app.register_blueprint(home)

#login
from pages.login.login import login
app.register_blueprint(login)

#newTravel
from pages.newTravel.newTravel import newTravel
app.register_blueprint(newTravel)

#showTravel
from pages.showTravel.showTravel import showTravel
app.register_blueprint(showTravel)

#signUp
from pages.signUp.signUp import signUp
app.register_blueprint(signUp)

#travelHistory
from pages.travelHistory.travelHistory import travelHistory
app.register_blueprint(travelHistory)

#travelSchedule
from pages.travelSchedule.travelSchedule import travelSchedule
app.register_blueprint(travelSchedule)