const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let buildings = [];

function calculateCarbon(b) {
  return b.electricity_kwh * 0.5 + b.water_liters * 0.002 + b.paper_kg * 1.5;
}

app.get("/buildings", (req, res) => {
  res.json(buildings);
});

app.post("/building", (req, res) => {
  const b = req.body;

  if (!b.name) {
    return res.status(400).json({ error: "Building name required" });
  }

  b.carbon = calculateCarbon(b);
  buildings.push(b);

  console.log("Saved:", b);
  res.json({ success: true, building: b });
});

app.delete("/buildings", (req, res) => {
  buildings = [];
  res.json({ success: true });
});

// IMPORTANT FOR HOSTING:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Backend running on port", PORT));
