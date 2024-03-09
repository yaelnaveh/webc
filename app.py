# from flask import Flask
# app = Flask(__name__)
# app.secret_key = '123'
########################################
from flask import Flask
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')
#######################################

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

uri = "mongodb+srv://esti:esti@cluster0.zq1bzx1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
cluster = MongoClient(uri, server_api=ServerApi('1'))
database = cluster['DrivingTogether']
users_col = database['users']
travels_col = database['travels']

# #insert_many
# travels_list = [
#     {'Date': '21.02.24', 'Time': '12:30', 'Source': 'Nahariya', 'Destination': 'Beer Sheva',
#      'Max': '4', 'Driver': 'Yael Naveh', 'Price': 50},
#     {'Date': '21.02.24', 'Time': '16:30', 'Source': 'Nahariya', 'Destination': 'Beer Sheva',
#      'Max': '4', 'Driver': 'Ofir Talmi', 'Price': 50},
#     {'Date': '22.02.24', 'Time': '11:30', 'Source': 'Haifa', 'Destination': 'Beer Sheva',
#      'Max': '4', 'Driver': 'Ori Lanir', 'Price': 50},
#     {'Date': '21.02.24', 'Time': '12:30', 'Source': 'Tel Aviv', 'Destination': 'Beer Sheva',
#      'Max': '4', 'Driver': 'Ohad Amir', 'Price': 50},
#     {'Date': '21.02.24', 'Time': '12:30', 'Source': 'Beer Sheva', 'Destination': 'Tel Aviv',
#      'Max': '4', 'Driver': 'Esti Leykind', 'Price': 50},
#     {'Date': '21.02.24', 'Time': '12:30', 'Source': 'Haifa', 'Destination': 'Tel Aviv',
#      'Max': '4', 'Driver': 'Oren Maor', 'Price': 50}
# ]
#
# users_list = [
#     {'email': 'esti.l@gmail.com', 'password': 'esti123', 'name': 'esti ley'},
#     {'email': 'yael.n@gmail.com', 'password': 'yael123', 'name': 'yael nav'},
#     {'email': 'Ofir@gmail.com', 'password': 'Ofir123', 'name': 'Ofir Talmi'},
#     {'email': 'OrenM@gmail.com', 'password': 'Oren123', 'name': 'Oren Maor'},
#     {'email': 'Ohad@gmail.com', 'password': 'Ohad123', 'name': 'Ohad Amir'},
#     {'email': 'Ori@gmail.com', 'password': 'Ori123', 'name': 'Ori Lanir'}
# ]
# travels_col.insert_many(travels_list)
# users_col.insert_many(users_list)

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