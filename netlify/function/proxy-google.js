import fetch from "node-fetch";

export async function handler(event, context) {
  if (event.httpMethod === "OPTIONS") {
    // Manejar preflight CORS
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Allow": "POST, OPTIONS" },
      body: "Method Not Allowed",
    };
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyPk7Jw4HZH60WD1RarBRBM7wI3ugQyWyL9sRayv23c-bk_hX9uStHyQqkDqTEG5XmVnw/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: event.body,
    });

    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
}
