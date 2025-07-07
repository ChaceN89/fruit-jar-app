export default async function handler(req, res) {
  console.log('➡️  Incoming request to /api/fruits')
  console.log('➡️  Method:', req.method)
  console.log('➡️  Request Headers:', req.headers)

  const FRUITS_API_PATH = process.env.FRUITS_API_PATH
  const FRUITS_API_KEY = process.env.FRUITS_API_KEY

  console.log('🔐 Environment Variables:')
  console.log('   FRUITS_API_PATH:', FRUITS_API_PATH)
  console.log('   FRUITS_API_KEY:', FRUITS_API_KEY ? '[REDACTED]' : '❌ UNDEFINED')

  if (!FRUITS_API_PATH || !FRUITS_API_KEY) {
    console.error('❌ Missing API path or key. Check Vercel environment variables.')
    return res.status(500).json({ error: 'Missing FRUITS_API_PATH or FRUITS_API_KEY' })
  }

  try {
    const upstreamHeaders = {
      'x-api-key': FRUITS_API_KEY,
    }

    console.log('➡️  Fetching from upstream API:', FRUITS_API_PATH)
    console.log('➡️  Using headers:', upstreamHeaders)

    const response = await fetch(FRUITS_API_PATH, {
      method: 'GET',
      headers: upstreamHeaders,
    })

    console.log('✅ Upstream response status:', response.status)

    const rawBody = await response.text()

    console.log('📦 Raw response body:', rawBody.slice(0, 500)) // only log first 500 chars

    // Forward status and raw content as JSON
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(response.status).json({
      ok: response.ok,
      status: response.status,
      body: rawBody,
    })
  } catch (err) {
    console.error('❌ Proxy request failed:', err)
    res.status(500).json({
      error: 'Proxy failed',
      message: err.message,
      stack: err.stack,
    })
  }
}
