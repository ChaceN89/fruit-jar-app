// api/fruits.ts
/**
 * @file api/fruits.ts
 * @module FruitsAPI
 * @desc A Vercel Node.js serverless proxy to bypass CORS and fetch fruit data.
 * 
 * @author Chace Nielson
 * @created Jul 6, 2025
 * @updated Jul 6, 2025
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const apiPath = process.env.FRUITS_API_PATH
    const apiKey = process.env.FRUIT_API_KEY

    if (!apiPath || !apiKey) {
      return res.status(500).json({ error: 'Environment variables are missing' })
    }

    const response = await fetch(apiPath, {
      headers: {
        'x-api-key': apiKey,
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      return res.status(response.status).json({
        error: 'Upstream failed',
        status: response.status,
        text: errorText,
      })
    }

    const data = await response.json()

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    return res.status(200).json(data)
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Unknown server error' })
  }
}
