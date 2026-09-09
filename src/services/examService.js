import { mockExams } from '../data/mockData';

function generateXCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const seg = () =>
    Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `PV-${seg()}-${seg()}`;
}

let exams = [...mockExams];

export async function generateExam(name, teacherId) {
  await new Promise((r) => setTimeout(r, 600));
  const xCode = generateXCode();
  const exam = {
    id: `EX-${Date.now()}`,
    name: name.trim(),
    xCode,
    teacher: teacherId,
    date: new Date().toISOString().split('T')[0],
    duration: 90,
    status: 'active',
  };
  exams.push(exam);
  return { success: true, exam };
}

export async function validateXCode(code) {
  await new Promise((r) => setTimeout(r, 400));
  const clean = code.trim().toUpperCase();
  const found = exams.find((e) => e.xCode === clean);
  if (found) {
    return { success: true, exam: found };
  }
  return { success: false, error: 'Invalid X-Code. Please check and try again.' };
}

export async function getExamsForTeacher(teacherId) {
  await new Promise((r) => setTimeout(r, 300));
  return exams.filter((e) => e.teacher === teacherId);
}

export async function getAllExams() {
  await new Promise((r) => setTimeout(r, 300));
  return [...exams];
}
