// api/fruits.ts
import  { VercelRequest, VercelResponse } from '@vercel/node'

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

module.exports = async function handler(req, res) {
  try {
    const apiUrl = 'https://fruity-proxy.vercel.app/api/fruits'
    const apiKey = process.env.FRUIT_API_KEY

    if (!apiKey) {
      return res.status(500).json({ error: 'API key is missing from environment variables' })
    }

    const response = await fetch(apiUrl, {
      headers: {
        'x-api-key': apiKey,
      },
    })

    if (!response.ok) {
      const error = await response.text()
      return res.status(response.status).json({ error: 'Upstream API failed', message: error })
    }

    const data = await response.json()

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Unknown server error' })
  }
}