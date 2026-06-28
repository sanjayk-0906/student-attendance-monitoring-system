const MOCK_DATA = {
    students: [
        { id: 1, name: "Sanjay Kumar", roll: "CS001", dept: "CSE", attendance: 82 },
        { id: 2, name: "Ananya Sharma", roll: "CS002", dept: "CSE", attendance: 68 },
        { id: 3, name: "Rahul Singh", roll: "CS003", dept: "CSE", attendance: 91 }
    ],
    subjects: [
        { id: 101, name: "Computer Networks", code: "CS401" },
        { id: 102, name: "Operating Systems", code: "CS402" },
        { id: 103, name: "Database Systems", code: "CS403" }
    ],
    timetable: [
        { id: 1, subject: "Computer Networks", room: "Lab 1", start: "09:00", end: "10:30", day: "Monday" },
        { id: 2, subject: "Operating Systems", room: "Room 102", start: "11:00", end: "12:30", day: "Monday" }
    ],
    network: {
        currentIp: "192.168.1.142",
        subnet: "192.168.1.0/24",
        deviceId: "DEV-X88019-22",
        validationLog: [
            { step: "IP Validation", status: "passed", detail: "192.168.1.142 matches 192.168.1.0/24" },
            { step: "Device Check", status: "passed", detail: "Registered Device Authenticated" },
            { step: "Time Sync", status: "passed", detail: "In-slot: 09:45 AM" }
        ]
    }
};

// State Management Simulated
const State = {
    currentUser: JSON.parse(localStorage.getItem('user')) || null,
    isDarkMode: true
};

function getDynamicData(email) {
    if (!email) return { ip: '192.168.1.1', att: 85 };

    // Simple hash to generate consistent but different values per email
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
        hash = email.charCodeAt(i) + ((hash << 5) - hash);
    }

    const lastOctet = Math.abs(hash % 254) + 1;
    const attPerc = 60 + Math.abs(hash % 38); // Range 60% - 98%

    return {
        ip: `192.168.1.${lastOctet}`,
        att: attPerc,
        deviceId: `DEV-BTX-${Math.abs(hash).toString(16).toUpperCase().substring(0, 6)}`
    };
}

function saveUser(user) {
    const dynamic = getDynamicData(user.email);
    user.ip = dynamic.ip;
    user.att = dynamic.att;
    user.deviceId = dynamic.deviceId;

    localStorage.setItem('user', JSON.stringify(user));
    State.currentUser = user;
}

function clearUser() {
    localStorage.removeItem('user');
    State.currentUser = null;
    window.location.href = '../index.html';
}
