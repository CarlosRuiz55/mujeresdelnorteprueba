
const fetch = require("node-fetch");

export async function handler(event) {
  const url = "https://script.google.com/macros/s/AKfycbyPk7Jw4HZH60WD1RarBRBM7wI3ugQyWyL9sRayv23c-bk_hX9uStHyQqkDqTEG5XmVnw/exec";

  try {
    const response = await fetch(url, {
      method: event.httpMethod,
      headers: event.headers,
      body: event.httpMethod === "GET" ? null : event.body,
    });

    const text = await response.text();

    return {
      statusCode: response.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": response.headers.get("content-type") || "application/json",
      },
      body: text,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
