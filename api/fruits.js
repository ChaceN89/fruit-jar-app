export default async function handler(req, res) {
  const response = await fetch(process.env.FRUIT_API_PATH, {
    headers: {
      'x-api-key': process.env.FRUIT_API_KEY,
    },
  })

  const data = await response.json()

  res.setHeader('Access-Control-Allow-Origin', '*') // Optional for local testing
  res.status(response.status).json(data)
}