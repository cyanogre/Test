export async function handler(event, context) {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API_KEY no encontrada" })
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ apiKey })
  };
}
