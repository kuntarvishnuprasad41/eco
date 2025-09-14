import fs from "fs";
import path from "path";

function flattenJSON(obj, parentKey = '', sep = '.') {
    let items = {};

    if (Array.isArray(obj)) {
        obj.forEach((v, i) => {
            let newKey = parentKey ? `${parentKey}[${i}]` : `[${i}]`;
            Object.assign(items, flattenJSON(v, newKey, sep));
        });
    } else if (typeof obj === 'object' && obj !== null) {
        Object.entries(obj).forEach(([k, v]) => {
            let newKey = parentKey ? `${parentKey}${sep}${k}` : k;
            Object.assign(items, flattenJSON(v, newKey, sep));
        });
    } else {
        items[parentKey] = obj;
    }

    return items;
}

function jsonToCSV(json) {
    const flat = flattenJSON(json);
    const rows = [["key", "value"]];

    for (const [key, value] of Object.entries(flat)) {
        rows.push([key, String(value)]);
    }

    return rows.map(r => r.map(v => `"${v.replace(/"/g, '""')}"`).join(",")).join("\n");
}

// --- MAIN SCRIPT ---
const inputPath = path.resolve("public/locales/en/data.json");
const outputPath = path.resolve("output.csv");

const raw = fs.readFileSync(inputPath, "utf-8");
const json = JSON.parse(raw);

const csv = jsonToCSV(json);
fs.writeFileSync(outputPath, csv);

console.log(`✅ CSV file created at ${outputPath}`);
