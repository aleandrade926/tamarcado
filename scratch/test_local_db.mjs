import pg from "pg";
const { Client } = pg;

async function testConn(connectionString) {
  const client = new Client({ connectionString });
  try {
    await client.connect();
    const res = await client.query("SELECT current_database(), version();");
    console.log("Connected to:", res.rows[0]);
    await client.end();
    return true;
  } catch (err) {
    console.log("Conn failed for:", connectionString, err.message);
    return false;
  }
}

async function main() {
  const uris = [
    "postgresql://postgres:postgres@localhost:5432/postgres",
    "postgresql://postgres:postgres@127.0.0.1:5432/postgres",
    "postgresql://postgres:root@localhost:5432/postgres",
    "postgresql://postgres@localhost:5432/postgres",
    "postgresql://postgres:postgres@localhost:5432/taxmanagers",
  ];
  for (const uri of uris) {
    if (await testConn(uri)) break;
  }
}

main();
