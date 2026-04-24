const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock DB
const db = {
  users: [],
  settings: {}
};

// 1. Auth endpoints
app.post('/api/auth/login', (req, res) => {
  const { email, password, university } = req.body;
  // In a real app, hash password and verify.
  res.json({ token: 'mock-jwt-token-123', user: { email, university, name: 'Student' } });
});

app.post('/api/auth/google', (req, res) => {
  // In a real app, verify the Google OAuth token
  res.json({ token: 'mock-jwt-token-google', user: { email: 'student@gmail.com', name: 'Google User' } });
});

// 2. Notifications endpoint
app.get('/api/notifications', (req, res) => {
  res.json([
    { id: 1, source: 'Slack', title: 'New message from Prof. Smith', time: '10 mins ago', type: 'message' },
    { id: 2, source: 'Gmail', title: 'Assignment 3 Grades Released', time: '1 hour ago', type: 'alert' },
    { id: 3, source: 'Canvas', title: 'Physics 101: Midterm details updated', time: '2 hours ago', type: 'info' }
  ]);
});

// 3. AI Recommendations for Deadlines & Clashes
app.get('/api/deadlines/ai-recommendations', (req, res) => {
  // Simulate AI logic resolving a clash
  res.json({
    clashesDetected: true,
    recommendations: [
      {
        id: 101,
        event1: 'Hackathon Kickoff (Friday 6 PM)',
        event2: 'Math Assignment Due (Friday 11:59 PM)',
        aiAdvice: 'Prioritize submitting the Math Assignment before 5 PM on Friday so you can attend the Hackathon Kickoff stress-free. Alternatively, negotiate a late submission if the Hackathon is mandatory for your tech club.',
        action: 'Send reminder to WhatsApp'
      },
      {
        id: 102,
        event1: 'Data Structures Quiz (Monday 9 AM)',
        event2: 'Rishihood Fest Meeting (Sunday 8 PM)',
        aiAdvice: 'Attend the fest meeting but cap it at 1 hour. Get 8 hours of sleep for optimal performance in the quiz.',
        action: 'Add to Calendar'
      }
    ],
    upcomingDeadlines: [
      { title: 'OS Project Phase 1', due: 'Tomorrow, 11:59 PM', importance: 'High' },
      { title: 'Literature Essay', due: 'Next Wednesday', importance: 'Medium' }
    ]
  });
});

// 4. Send deadline to WhatsApp (Mock)
app.post('/api/whatsapp/send', (req, res) => {
  const { deadlineTitle, phone } = req.body;
  console.log(`Sending WhatsApp message to ${phone} for ${deadlineTitle}`);
  res.json({ success: true, message: `WhatsApp alert scheduled for ${deadlineTitle}` });
});

// 5. Settings: Save university details
app.post('/api/settings/university', (req, res) => {
  const { details } = req.body;
  db.settings.university = details;
  res.json({ success: true, message: 'University details updated successfully' });
});

app.get('/api/settings/university', (req, res) => {
  res.json({ details: db.settings.university || {} });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
