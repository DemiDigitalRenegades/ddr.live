var aws = require('aws-sdk')
var ses = new aws.SES({ region: 'us-east-1' })

exports.handler = async (event) => {
  var body = JSON.parse(event.body)

  var params = {
    Destination: {
      ToAddresses: body.toEmails,
    },
    Message: {
      Body: {
        Text: { Data: body.message },
      },

      Subject: { Data: body.subject },
    },
    Source: 'contact@ddr.live',
  }

  const emailRes = await ses.sendEmail(params).promise()

  const response = {
    statusCode: 200,

    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    body: JSON.stringify(emailRes),
  }

  return response
}
