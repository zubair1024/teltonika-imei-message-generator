const args = process.argv.slice(2);
console.log("myArgs: ", args);
if (args[0] && args[0] !== "") {
  const imei = args[0];
  const imeiPayload = imei.split("").join("3");
  const payload = `000f${imeiPayload}3`;
  console.log(payload);
}
process.exit(0);
