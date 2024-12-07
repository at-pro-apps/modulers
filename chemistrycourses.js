// Map of all available courses and their lessons
const courses = {
    "1": { name: "كورس شهر 1", lessons: ["درس 1", "درس 2"] },
    "2": { name: "كورس شهر 2", lessons: ["درس 1", "درس 2", "درس 3"] },
    "3": { name: "كورس شهر 3", lessons: ["درس 1", "درس 2"] },
    "4": { name: "كورس شهر 4", lessons: ["درس 1", "درس 2", "درس 3"] },
    "5": { name: "كورس شهر 5", lessons: ["درس 1", "درس 2"] },
    "6": { name: "كورس شهر 6", lessons: ["درس 1", "درس 2", "درس 3"] },
    "7": { name: "كورس شهر 7", lessons: ["درس 1", "درس 2"] },
    "8": { name: "كورس شهر 8", lessons: ["درس 1", "درس 2", "درس 3"] },
    "9": { name: "كورس شهر 9", lessons: ["درس 1", "درس 2"] },
    "10": { name: "كورس شهر 10", lessons: ["درس 1", "درس 2", "درس 3", "درس 4"] },
    "11": { name: "كورس شهر 11", lessons: ["درس 1", "درس 2"] },
    "12": { name: "كورس شهر 12", lessons: ["درس 1", "درس 2", "درس 3"] }
};

// Map of video IDs for each lesson
const videoIds = {
    "1": { "1": "VIDEO_ID_1_1", "2": "VIDEO_ID_1_2" },
    "2": { "1": "VIDEO_ID_2_1", "2": "VIDEO_ID_2_2", "3": "VIDEO_ID_2_3" },
    "3": { "1": "VIDEO_ID_3_1", "2": "VIDEO_ID_3_2" },
    "4": { "1": "VIDEO_ID_4_1", "2": "VIDEO_ID_4_2", "3": "VIDEO_ID_4_3" },
    "5": { "1": "VIDEO_ID_5_1", "2": "VIDEO_ID_5_2" },
    "6": { "1": "VIDEO_ID_6_1", "2": "VIDEO_ID_6_2", "3": "VIDEO_ID_6_3" },
    "7": { "1": "VIDEO_ID_7_1", "2": "VIDEO_ID_7_2" },
    "8": { "1": "VIDEO_ID_8_1", "2": "VIDEO_ID_8_2", "3": "VIDEO_ID_8_3" },
    "9": { "1": "VIDEO_ID_9_1", "2": "VIDEO_ID_9_2" },
    "10": { "1": "VIDEO_ID_10_1", "2": "VIDEO_ID_10_2", "3": "VIDEO_ID_10_3", "4": "VIDEO_ID_10_4" },
    "11": { "1": "VIDEO_ID_11_1", "2": "VIDEO_ID_11_2" },
    "12": { "1": "VIDEO_ID_12_1", "2": "VIDEO_ID_12_2", "3": "VIDEO_ID_12_3" }
};

// Fetch logged-in student from localStorage
const loggedInStudent = JSON.parse(localStorage.getItem('loggedInStudent'));
if (!loggedInStudent || !loggedInStudent.courses) {
    alert('من فضلك سجل الدخول أولا');
    window.location.href = 'chemistry.html';
}

// Populate the courses for the logged-in student
const coursesContainer = document.getElementById('courses-container');
loggedInStudent.courses.split('-').forEach(courseId => {
    const course = courses[courseId];
    if (course) {
        const courseCard = document.createElement('div');
        courseCard.classList.add('card');
        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>تفاصيل ${course.name}</p>
            <button class="expand-btn">عرض المحتوى</button>
            <div class="lessons-menu" style="display: none;">
                <ul>
                    ${course.lessons.map((lesson, index) =>
                        `<li data-course-id="${courseId}" data-lesson-id="${index + 1}">${lesson}</li>`
                    ).join('')}
                </ul>
            </div>
        `;
        coursesContainer.appendChild(courseCard);

        // Toggle lessons menu
        const expandBtn = courseCard.querySelector('.expand-btn');
        expandBtn.addEventListener('click', () => {
            const lessonsMenu = courseCard.querySelector('.lessons-menu');
            lessonsMenu.style.display = lessonsMenu.style.display === 'block' ? 'none' : 'block';
        });
    }
});

// Handle lesson selection
coursesContainer.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        const courseId = event.target.getAttribute('data-course-id');
        const lessonId = event.target.getAttribute('data-lesson-id');
        const videoId = videoIds[courseId]?.[lessonId];
        if (videoId) {
            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = `
                <video controls>
                    <source src="videos/${videoId}.mp4" type="video/mp4">
                    المتصفح الخاص بك لا يدعم تشغيل الفيديو.
                </video>
            `;
            videoContainer.style.display = 'block';
            videoContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
