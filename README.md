📦 EnviroCore Backend

This is the backend API for the EnviroCore sustainability dashboard — a solution designed to help educational campuses monitor and reduce their carbon footprint. The backend handles resource data storage, carbon emission calculations, and recommendation logic.

⸻

🛠 Tech Stack
	•	Node.js — JavaScript runtime
	•	Express.js — Web framework for REST APIs
	•	Google Cloud Run — Serverless hosting for the API
	•	REST API — JSON based endpoints
	•	CORS — Cross-origin support

⸻

📡 API Overview

These endpoints support the frontend dashboard functionality:

Method      Endpointb         Description
POST /building
Add a building
Adds a new building with usage inputs

GET /buildings?uid=…
Get buildings
Fetches all buildings for a specific user

DELETE /buildings?uid=…
Clear buildings
Deletes all buildings for a user

⸻

📊 Carbon Emission Logic

For each building, emissions are calculated using:

Resource
Factor
Notes
Electricity
0.5 kg CO₂ / kWh
Standard average grid emission factor
Water
0.002 kg CO₂ / liter
Includes pumping and treatment footprint
Paper
1.5 kg CO₂ / kg
Typical lifecycle footprint

The backend computes :

carbon = (electricity_kwh * 0.5) + (water_litres * 0.002) + (paper_kg * 1.5)
and returns this value along with building details.

⸻

🚀 Installation
1.	Clone repository:
	git clone https://github.com/ajaysharma111/envirocore-backend

2.	Install dependencies:
    npm install

3.  Run locally:
    node index.js

	The API will run at http://localhost:3000.

⸻

🌐 Deployment

This backend is deployed to Google Cloud Run.
It scales automatically and exposes a secure endpoint for the frontend to consume.

Example deployed URL (change as per your actual deployment):
https://envirocore-backend.onrender.com

⸻

🔐 Authentication

User authentication (login/signup) is handled on the frontend using Firebase Authentication.
The backend trusts the uid passed from the frontend to identify users and associate building data.

⸻

🔄 How It Works With Frontend
	1.	Frontend calls POST /building with:
	•	building name
	•	electricity, water, paper usage
	•	user ID (from Firebase Auth)
	2.	Backend calculates carbon footprint
	3.	Frontend fetches:
	•	List of buildings (GET /buildings?uid=…)
	•	Displays data in charts
	•	Shows recommendations
envirocore-backend/
├── index.js
├── package.json
├── package-lock.json
└── README.md
🤝 Contributing

Feel free to open issues or pull requests.
This project is built for hackathons and educational use — all contributions are welcome.

⸻

📝 License

This project is for educational and hackathon purposes.
Feel free to study, modify, and build on top of it.
	
