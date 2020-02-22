from flask import current_app


def read_compressed():
    return current_app.config['RESPONSE_PAYLOAD'], {'Content-Encoding': 'lzw'}


def read_jsan_compressed():
    return current_app.config['RESPONSE_PAYLOAD'], {'Content-Encoding': 'lzw'}
