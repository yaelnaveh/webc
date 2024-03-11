from flask import Flask, redirect, url_for, render_template, request, session, Blueprint
from app import travels_col, tremp_col
from flask import jsonify


travelSchedule = Blueprint(
    'travelSchedule',
    __name__,
    static_folder='static',
    static_url_path='/travelSchedule',
    template_folder='templates')

@travelSchedule.route('/travelSchedule')
def index():
    # Query to sort records by date and time first and then by source
    travels = travels_col.find().sort([("Date", 1),("Time", 1), ("Source", 1)])

    print(f' travelSchedule: {travels}')
    return render_template('travelSchedule.html', travels=travels)


@travelSchedule.route('/register_for_ride/<id_ride>', methods=['GET'])
def register_for_ride(id_ride):
    print(f' id_ride: {id_ride}')

    # # Query the selected ride from the database

    #this what we wont but dosnt work!!!!!!
    # selected_ride = travels_col.find_one({'_id': id_ride})

    selected_ride = travels_col.find_one({'Source': 'bdikesti'})
    print(f' selected_ride: {selected_ride}')
    # if selected_ride:
    #     # Add the selected ride to the ride table
    ride_data = {
            'Date': selected_ride['Date'],
            'Time': selected_ride['Time'],
            'Source': selected_ride['Source'],
            'Destination': selected_ride['Destination'],
            'Max': selected_ride['Max'],
            'Price': selected_ride['Price'],
            'Driver': selected_ride['Driver'],
            'User_name': session.get('username'),
            'User_last_name': session.get('last_name'),
            'User_email': session.get('email')
        }
    print(f' after ride_data ')
    # Insert the ride data into the MongoDB database
    tremp_col.insert_one(ride_data)
    return redirect(url_for('travelHistory.index'))
    # return redirect(url_for('travelHistory.index'))

