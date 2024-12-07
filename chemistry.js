// Sample login data
const students = {
    "ahmed": { password: "123", courses: "5" },
    "ali": { password: "123", courses: "6" },
    "a": {password: "123", courses: "1-2"}
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
            // Store logged-in student details in localStorage
            const studentCourses = students[studentName].courses.split('-'); // Parse as an array
            localStorage.setItem('loggedInStudent', JSON.stringify({
                name: studentName,
                courses: studentCourses
            }));
            // Redirect to the courses page
            window.location.href = "chemistrycourses.html";
        } else {
            messageDiv.style.color = 'red';
            messageDiv.textContent = 'كلمة المرور غير صحيحة!';
        }
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'اسم الطالب غير موجود!';
    }
});
