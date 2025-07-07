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

export const config = {
  runtime: 'edge',
}

export default async function handler(req: Request) {
  const apiPath = process.env.FRUITS_API_PATH
  if (!apiPath) {
    return new Response(JSON.stringify({ error: 'FRUITS_API_PATH not set' }), { status: 500 })
  }

  try {
    const upstream = await fetch(apiPath, {
      headers: {
        'x-api-key': process.env.FRUIT_API_KEY!,
      },
    })

    if (!upstream.ok) {
      const text = await upstream.text()
      return new Response(JSON.stringify({ error: 'Upstream failed', status: upstream.status, text }), { status: 500 })
    }

    const data = await upstream.json()

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || 'Unknown error' }), { status: 500 })
  }
}
