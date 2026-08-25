type ContactPayload = {
  name: string;
  email: string;
  message: string;
  subject: string;
  company: string;
};

export async function contactRequest(payload: ContactPayload) {
  const res = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to send contact request");
  }

  return res.json();
}
