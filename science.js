// Sample login data
const students = {
    "ahmed": { password: "123", courses: "Courses 6-7-8" },
    "ali": { password: "123", courses: "Courses 9-10-34" }
};

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentname').value.toLowerCase();
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Check if the student exists
    if (students[studentName]) {
        // Validate password
        if (students[studentName].password === password) {
            messageDiv.style.color = 'green';
            messageDiv.textContent = `مرحبًا ${studentName}، أنت مسجل في: ${students[studentName].courses}`;
        } else {
            messageDiv.style.color = 'red';
            messageDiv.textContent = 'كلمة المرور غير صحيحة!';
        }
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'اسم الطالب غير موجود!';
    }
});
