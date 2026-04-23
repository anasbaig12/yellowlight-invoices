<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0a0a0a" />
    <meta name="description" content="Yellow Light — Invoice Manager" />
    <title>Yellow Light · Invoices</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: #0a0a0a; color: #fff; font-family: 'DM Sans', sans-serif; }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(245,200,0,0.3); border-radius: 2px; }
      @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-6px); } }
      .glass-card {
        background: linear-gradient(135deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.03) 100%);
        backdrop-filter: blur(20px) saturate(1.4);
        border: 1px solid rgba(255,255,255,0.09);
        border-top-color: rgba(255,255,255,0.15);
      }
      .glass-card-yellow {
        background: linear-gradient(135deg,rgba(245,200,0,0.12) 0%,rgba(245,200,0,0.04) 100%);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(245,200,0,0.22);
        border-top-color: rgba(245,200,0,0.35);
      }
      .glass-btn { backdrop-filter: blur(12px); transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1); }
      .glass-btn:hover { transform: translateY(-1px); }
      .glass-btn:active { transform: scale(0.97); }
      .nav-item { transition: all 0.2s ease; }
      .nav-item:hover { background: rgba(245,200,0,0.1) !important; }
      .row-item { transition: background 0.15s; }
      .row-item:hover { background: rgba(255,255,255,0.03) !important; }
      .fade-up { animation: fadeUp 0.4s ease both; }
      input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
      select option { background: #1a1a1a; }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
