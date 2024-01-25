const express = require("express");
const qr = require("qr-image");
const path = require("path");

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Handle QR code generation
app.get("/generate", (req, res) => {
  const data = req.query.text || "No text provided";
  const qrImage = qr.image(data, { type: "png" });
  res.type("png");
  qrImage.pipe(res);
});

// Serve the HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
