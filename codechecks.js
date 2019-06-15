const { join } = require("path");
const fs = require("fs");
const { codechecks } = require("@codechecks/client");

module.exports.main = async function main() {
  if (!codechecks.isPr()) return;

  const report = JSON.parse(fs.readFileSync("codechecksReport.json", "utf-8"));

  await codechecks.saveValue(report.namespace, report.newData);
  await codechecks.success(report.success);
};
