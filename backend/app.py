from flask_cors import CORS
from faker import Faker
from sconx import App


def generate_people_json(length):
    database = []
    fake = Faker()

    for x in range(length):
        database.append({
            'last_name': fake.last_name(),
            'first_name': fake.first_name(),
            'street_address': fake.street_address(),
            'email': fake.email()
        })

    return database


sconx_app = App(__name__,
                options={'serve_spec': True})
app = sconx_app.app
app.config['RESPONSE_PAYLOAD'] = generate_people_json(300)

sconx_app.add_api("people.yaml")
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "https://localhost:5000",
            "https://localhost:3000"
        ]
    }
})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
