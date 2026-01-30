document.addEventListener('DOMContentLoaded', () => {
    // 1. Welcome Speech / Prompt for Name
    // Only run on the Home Page (index.html) or if the element exists
    const userNameSpan = document.getElementById('user-name');
    if (userNameSpan) {
        let name = prompt("Please enter your name:", "Guest");
        if (name === null || name === "") {
            name = "Guest";
        }
        userNameSpan.textContent = name;
    }

    // 2. Form Validation & Submission Logic
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload

            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const birthDate = document.getElementById('birthDate').value;
            const gender = contactForm.querySelector('input[name="gender"]:checked')?.value || "-";
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple JS Validation (Additional to HTML5)
            if (!fullName || !birthDate || !email || !phone || !message) {
                alert("Mohon lengapi semua field form.");
                return;
            }

            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Format email tidak valid.");
                return;
            }

            // Phone format validation (numbers only, min 10)
            const phoneRegex = /^[0-9]{10,15}$/;
            if (!phoneRegex.test(phone)) {
                alert("Nomor telepon tidak valid (Gunakan angka, min 10 digit).");
                return;
            }

            // 3. Display Result on the HTML
            const currentTime = new Date().toString();

            document.getElementById('resTime').textContent = currentTime;
            document.getElementById('resName').textContent = fullName;
            document.getElementById('resBirth').textContent = birthDate;
            document.getElementById('resGender').textContent = gender;
            document.getElementById('resEmail').textContent = email;
            document.getElementById('resPhone').textContent = phone;
            document.getElementById('resMessage').textContent = message;

            // Optional: Scroll to result box
            document.getElementById('resultBox').scrollIntoView({ behavior: 'smooth' });

            // Clear form after success (optional, but good for UX)
            // contactForm.reset();
        });
    }
});
