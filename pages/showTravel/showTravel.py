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
    return render_template('showTravel.html', details=details)  ############levade!!!


def get_travel_details(id_ride):
    selected_ride = travels_col.find_one({'id': id_ride})
    print(id_ride)
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
        'User_email': session.get('email'),
        'Driver_email': selected_ride['DriverEmail'],
        'id': id_ride
    }
    pprint(ride_data)
    return ride_data

# @showTravel.route('/get_travel_details/<ride_id>', methods=['GET']) ##not sure about it
# def get_travel_details_route(ride_id):
#     try:
#         # Retrieve travel details based on the provided ride ID
#         ride_data = get_travel_details(ride_id)
#         # Return the travel details as JSON
#         return jsonify(ride_data), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
