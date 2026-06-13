import express from "express";
import cors from "cors";
import XLSX from "xlsx";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, "data");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

const FILE_PATH = path.join(
  DATA_DIR,
  "contacts.xlsx"
);

app.post("/api/contact", (req, res) => {
  try {
    const { name, email, phone, message } =
      req.body;

    const record = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
      Date: new Date().toLocaleString(),
    };

    let workbook;
    let rows = [];

    if (fs.existsSync(FILE_PATH)) {
      workbook = XLSX.readFile(FILE_PATH);

      const sheet =
        workbook.Sheets[
          workbook.SheetNames[0]
        ];

      rows = XLSX.utils.sheet_to_json(sheet);
    } else {
      workbook = XLSX.utils.book_new();
    }

    rows.push(record);

    const worksheet =
      XLSX.utils.json_to_sheet(rows);

    workbook.Sheets["Contacts"] = worksheet;

    if (
      !workbook.SheetNames.includes(
        "Contacts"
      )
    ) {
      workbook.SheetNames.push(
        "Contacts"
      );
    }

    XLSX.writeFile(workbook, FILE_PATH);

    res.json({
      success: true,
      message: "Saved successfully",
    });
  } catch (error) {
  console.log("=================================");
  console.log("ERROR OCCURRED");
  console.log(error);
  console.log(error.message);
  console.log("=================================");

  res.status(500).json({
    success: false,
    message: error.message,
  });
}


app.listen(5000, () => {
  console.log(
    "Server running at http://localhost:5000"
  );
});