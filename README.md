# EduTrack - Student Attendance & Analytics System

A modern, high-fidelity frontend simulation for a network-based attendance monitoring system.

## Project Scope
This is a **Frontend-Only** demonstration designed for academic project presentations. It simulates a complete network logic flow where students are automatically marked present based on their IP address and device fingerprint.

## Key Simulated Features
- **WiFi Attendance Check**: An animated validation panel that simulates IP subnet verification, device binding, and timetable synchronization.
- **Analytics Engine**: Real-time charts for students (Polar area breakdown), teachers (Defaulter bar charts), and admins (System-wide line graphs).
- **Glassmorphism UI**: Dynamic dark-themed dashboard using backdrop filters and modern CSS variables.
- **Responsive Layout**: Sidebar-based navigation that adapts to different screen resolutions.

## Project Structure
- `/index.html`: Project landing page.
- `/pages/`: Individual portals for Student, Teacher, and Admin roles.
- `/js/mock-data.js`: Centralized mock JSON database for users and logs.
- `/css/style.css`: Unified design system.

  <img width="786" height="453" alt="image" src="https://github.com/user-attachments/assets/20934fdd-d5dc-4009-b2fa-28ce47a1465a" />


## Presentation Flow
1. **Landing**: Show the three entry roles.
2. **Student Dashboard**: 
   - Show the "Attendance Alert" if percentage is low.
   - Run the **"WiFi Attendance Check"** simulation to demonstrate the network logic.
3. **Teacher Dashboard**:
   - Show the dynamic attendance table.
   - Point out the "Defaulter Analysis" chart.
4. **Admin Dashboard**:
   - Demonstrate global system oversight and network rule configuration UI.

## Technologies Used
- HTML5, CSS3, ES6 JavaScript
- **Chart.js**: For all data visualizations.
- **Lucide Icons**: For modern dashboard iconography.
- **Google Fonts**: Inter for typography.
