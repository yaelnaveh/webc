from pprint import pprint

from flask import Flask, redirect, url_for, render_template, request, session, Blueprint, jsonify

from app import travels_col

showTravel = Blueprint(
    'showTravel',
    __name__,
    static_folder='static',
    static_url_path='/showTravel',
    template_folder='templates')


# @showTravel.route('/showTravel')
# def index():
#     return render_template('showTravel.html')

@showTravel.route('/showTravel<id_ride>', methods=['GET', 'POST'])
def index(id_ride):
    details = get_travel_details(id_ride)
    pprint(details)
    # id = details['id']
    # print(id)
    return render_template('showTravel.html', details=details)


def get_travel_details(id_ride):
    selected_ride = travels_col.find_one({'id': id_ride})
    print(id_ride)
    ride_data = {
        'Date': selected_ride['Date'],
        'Time': selected_ride['Time'],
        'Source': selected_ride['Source'],
        'Street_Source': selected_ride['Street_Source'] if selected_ride.get('Street_Source') is not None else '',
        'Number_Source': selected_ride['Number_Source'] if selected_ride.get('Number_Source') is not None else '',
        'Destination': selected_ride['Destination'],
        'Street_Destination': selected_ride['Street_Destination'] if selected_ride.get('Street_Destination') is not None else '',
        'Number_Destination': selected_ride['Number_Destination'] if selected_ride.get('Number_Destination') is not None else '',
        'Max': selected_ride['Max'],
        'Price': selected_ride['Price'],
        'Comment': selected_ride['Comment'] if selected_ride.get('Comment') is not None else '',
        'Driver': selected_ride['Driver'],
        'User_name': session.get('username'),
        'User_last_name': session.get('last_name'),
        'User_email': session.get('email'),
        'Driver_email': selected_ride['DriverEmail'],
        'id': id_ride
    }
    pprint(ride_data)
    return ride_data

