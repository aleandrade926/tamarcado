const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:\\Users\\Alexandre\\.gemini\\antigravity\\brain\\be839697-06b9-4bc6-9f87-9f7df042ff8b\\scratch\\db_result.json', 'utf8'))[0];

const v1 = data.data.consensus_versions.find(v => v.version === 1);
if (!v1) {
  console.log("No version 1 found!");
  process.exit(1);
}

data.data.consensus_versions = [];
data.data.current_version = 1;
Object.assign(data.data, v1.content);

// Now update supabase
fetch('https://mqncmwtgpoflbbscrelp.supabase.co/rest/v1/consensus?id=eq.ce6bf274-0bf7-4b51-abbe-63a5301b92e1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbmNtd3RncG9mbGJic2NyZWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2Mjk3ODUsImV4cCI6MjA5MDIwNTc4NX0.veEeqzcSk2FTx8sYI1i9MKRbuzXhpfgk9XG-zJzXA7g'
  },
  body: JSON.stringify({ data: data.data })
})
.then(r => {
  if (r.ok) {
    console.log("Successfully restored to version 1!");
  } else {
    console.error("Failed to restore", r.status, r.statusText);
  }
})
.catch(console.error);
