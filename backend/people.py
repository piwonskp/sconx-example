import json

from flask import current_app


def read():
    return current_app.config['RESPONSE_PAYLOAD']


def read_jsan():
    return current_app.config['RESPONSE_PAYLOAD']


def person_add_age(body):
    body['age'] = 43
    return body
