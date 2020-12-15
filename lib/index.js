const args = process.argv.slice(2);
console.log("args: ", args);

module.exports = () => {
  if (args[0] && args[0] !== "") {
    const imei = args[0];
    const imeiPayload = imei.split("").join("3");
    const payload = `000f3${imeiPayload}`;
    console.log(payload);
  } else {
    console.log(`Please supply with <imei> as the command arg`);
  }
  process.exit(0);
};
