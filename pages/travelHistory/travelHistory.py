from flask import Flask, redirect, url_for, render_template, request, session, Blueprint
from app import tremp_col
travelHistory = Blueprint(
    'travelHistory',
    __name__,
    static_folder='static',
    static_url_path='/travelHistory',
    template_folder='templates')


@travelHistory.route('/travelHistory')
def index():
    # Query to sort records by date and time first and then by source
    tremps = tremp_col.find().sort([("Date", 1), ("Time", 1), ("Source", 1)])

    print(f' travelhistory: {tremps}')
    return render_template('travelHistory.html', tremps=tremps)