const qr = require("qr-image");
const fs = require("fs");

// Data to encode in the QR code
const data = "https://example.com";

// Generate QR code image
const qrImage = qr.image(data, { type: "png" });

// Save the image to a file
qrImage.pipe(fs.createWriteStream("qrcode.png"));

console.log("QR Code generated successfully!");
