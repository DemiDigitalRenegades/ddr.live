console.log('Loading function')

const yaml = require('js-yaml')
const aws = require('aws-sdk')
const s3 = new aws.S3({ apiVersion: '2006-03-01' })

exports.handler = async (event, context) => {
  console.log('Received event:', JSON.stringify(event, null, 2))

  // Get the object from the event and show its content type
  const bucket = event.Records[0].s3.bucket.name
  const key = decodeURIComponent(
    event.Records[0].s3.object.key.replace(/\+/g, ' ')
  )
  const params = {
    Bucket: bucket,
    Key: key,
  }

  console.log(key.replace('yaml/', '').replace('.yml', '.json'))

  try {
    const doc = await s3.getObject(params).promise()
    const JSONfromYaml = yaml.load(doc.Body.toString('utf-8'))
    console.log(JSON.stringify(JSONfromYaml))
    const params2 = {
      Bucket: bucket,
      Key: 'public/' + key.replace('yaml/', '').replace('.yml', '.json'),
      Body: JSON.stringify(JSONfromYaml),
    }
    const resp = await s3.putObject(params2).promise()
    console.log(resp)
  } catch (err) {
    console.log(err)
    const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`
    console.log(message)
    throw new Error(message)
  }

  context.done(null, 'Successfully processed S3 event') // SUCCESS with message
}