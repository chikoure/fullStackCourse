const axios = require("axios")

const mailchimpapi = process.env.GATSY_API_ENDPOINT

exports.handler = function (event, context, callback) {
  fetch(``, {
    method: "POST",
    body: event.body,
  }).then(response => {
    callback()
  })
}
