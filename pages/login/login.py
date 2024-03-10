from flask import Flask, redirect, url_for, render_template, request, session, Blueprint
from app import users_col

login = Blueprint(
    'login',
    __name__,
    static_folder='static',
    static_url_path='/login',
    template_folder='templates')

# @login.route('/login')
# def index():
#     return render_template('login.html')
@login.route('/login', methods= ['GET', 'POST'])
def index():
    error_message = None  # Initialize error_message to None
    print(f'The method is: {request.method}')
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        #Do check with DB
        # Check if the provided email and password match any user in the collection
        user = users_col.find_one({'email': email, 'password': password})

        if user:
            # If a matching user is found, set session variables and redirect to home
            session['email'] = email
            session['logged_in'] = True
            return render_template('home.html', email=email, user=user)
        else:
            # If no matching user is found, show an error message
            error_message = 'Invalid username or password. Please try again.'
            return render_template('login.html', error_message=error_message)

        # Render the login page for GET requests
    return render_template('login.html')

    #     session['email'] = email
    #     session['logged_in'] = True
    #     return render_template('home.html', email=email)
    # return render_template('login.html')


@login.route('/logout', methods=['GET'])
def logout_func():
    session['logged_in'] = False
    session['username'] = ''
    session['email'] = ''
    # return redirect(url_for('login_func'))
    return render_template('first.html')
