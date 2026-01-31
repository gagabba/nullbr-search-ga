export default {
  async fetch(req, env, ctx) {
    const u = new URL(req.url);
    
    // 处理 CORS 预检请求 (OPTIONS)
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'x-app-id, x-api-key, content-type',
          'Access-Control-Max-Age': '86400',
          'Vary': 'Origin'
        }
      });
    }
    
    // 把 /api/* 转发到源站，并带上默认头
    const api = 'https://api.nullbr.eu.org' + u.pathname.replace(/^\/api/, '') + u.search;

    // 构建转发给API的头部
    const forwardHeaders = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0'
    };
    
    // 传递必要的认证头部
    const appId = req.headers.get('x-app-id') || '8bWDEoOb1';
    forwardHeaders['x-app-id'] = appId;
    
    const apiKey = req.headers.get('x-api-key');
    if (apiKey) {
      forwardHeaders['x-api-key'] = apiKey;
    }
    
    const r = await fetch(api, {
      method: req.method,
      headers: forwardHeaders
    });

    // 返回给前端，同时加完整的 CORS 头
    const headers = new Headers(r.headers);
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'x-app-id, x-api-key, content-type');
    headers.set('Vary', 'Origin');

    return new Response(r.body, {
      status: r.status,
      statusText: r.statusText,
      headers
    });
  }
}