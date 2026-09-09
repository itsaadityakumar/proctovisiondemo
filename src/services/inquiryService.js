let inquiries = [];

function generateRefId() {
  const d = new Date();
  const date = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const seq = String(inquiries.length + 1).padStart(3, '0');
  return `PV-INQ-${date}-${seq}`;
}

export async function submitInquiry(data) {
  await new Promise((r) => setTimeout(r, 1200));
  const refId = generateRefId();
  const inquiry = { ...data, refId, createdAt: new Date().toISOString() };
  inquiries.push(inquiry);
  return { success: true, refId, inquiry };
}
