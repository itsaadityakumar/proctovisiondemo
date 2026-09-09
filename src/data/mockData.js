export const institutions = [
  {
    id: 'PUC',
    name: 'Pune University College',
    type: 'University',
    departments: [
      {
        id: 'CS',
        name: 'Computer Science',
        programs: [
          {
            id: 'BTECH-CS',
            name: 'B.Tech Computer Science',
            batches: [
              { id: '2024-CS-A', name: '2024 Batch A', students: 45 },
              { id: '2024-CS-B', name: '2024 Batch B', students: 42 },
            ],
          },
        ],
      },
      {
        id: 'EE',
        name: 'Electrical Engineering',
        programs: [
          {
            id: 'BTECH-EE',
            name: 'B.Tech Electrical',
            batches: [
              { id: '2024-EE-A', name: '2024 Batch A', students: 38 },
            ],
          },
        ],
      },
    ],
  },
];

export const teachers = [
  { id: 'PUC-TCH-1001', name: 'Dr. Neha Gupta', dept: 'CS', email: 'neha.gupta@puc.edu' },
  { id: 'PUC-TCH-1002', name: 'Prof. Rajesh Kumar', dept: 'CS', email: 'rajesh.kumar@puc.edu' },
  { id: 'PUC-TCH-1003', name: 'Dr. Sunita Patil', dept: 'EE', email: 'sunita.patil@puc.edu' },
];

export const students = [
  { id: 'PUC-STU-2026030001', name: 'Aditya Verma', dept: 'CS', batch: '2024-CS-A', email: 'aditya.verma@student.puc.edu' },
  { id: 'PUC-STU-2026030002', name: 'Sneha Joshi', dept: 'CS', batch: '2024-CS-A', email: 'sneha.joshi@student.puc.edu' },
  { id: 'PUC-STU-2026030003', name: 'Vikram Singh', dept: 'CS', batch: '2024-CS-B', email: 'vikram.singh@student.puc.edu' },
  { id: 'PUC-STU-2026030004', name: 'Pooja Desai', dept: 'EE', batch: '2024-EE-A', email: 'pooja.desai@student.puc.edu' },
];

export const mockExams = [
  {
    id: 'EX-2026-001',
    name: 'Data Structures Mid-Term',
    xCode: 'PV-7K4M-82QX',
    teacher: 'PUC-TCH-1001',
    dept: 'CS',
    batch: '2024-CS-A',
    date: '2026-09-15',
    duration: 90,
    status: 'active',
  },
  {
    id: 'EX-2026-002',
    name: 'Circuit Analysis Quiz',
    xCode: 'PV-3R8N-51WQ',
    teacher: 'PUC-TCH-1003',
    dept: 'EE',
    batch: '2024-EE-A',
    date: '2026-09-18',
    duration: 60,
    status: 'scheduled',
  },
];
