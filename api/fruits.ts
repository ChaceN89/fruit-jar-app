// api/fruits.ts
/**
 * @file api/fruits.ts
 * @module FruitsAPI
 * @desc A Vercel serverless proxy function to bypass CORS and fetch fruit data.
 * 
 * @author Chace Nielson
 * @created Jul 6, 2025
 * @updated Jul 6, 2025
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const apiPath = process.env.FRUITS_API_PATH
    if (!apiPath) {
      return res.status(500).json({ error: 'VITE_API_PATH environment variable is not set.' })
    }
    const response = await fetch(apiPath, {
      headers: {
        'x-api-key': process.env.FRUIT_API_KEY!,
      },
    })

    if (!response.ok) {
      return res.status(response.status).json({ error: `Upstream error: ${response.statusText}` })
    }

    const data = await response.json()

    // Allow frontend to access this response
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    return res.status(200).json(data)

  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Unknown server error' })
  }
}
