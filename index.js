const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>App</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          margin: 0; 
          padding: 40px; 
          background: #f5f5f5; 
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white; 
          padding: 40px; 
          border-radius: 8px; 
          box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
        }
        h1 { 
          color: #333; 
          text-align: center; 
        }
        p { 
          color: #666; 
          line-height: 1.6; 
          text-align: center; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Your App</h1>
        <p>Your application is now running successfully!</p>
        <p>Server is running on port 3000</p>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
