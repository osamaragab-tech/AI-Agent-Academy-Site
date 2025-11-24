// في ملف script.js

// Get the necessary elements
const navToggle = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the hamburger icon
navToggle.addEventListener('click', () => {
    // Toggle the 'nav-active' class on the navigation links
    navLinks.classList.toggle('nav-active');
});


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('youtube-player');
    const closeButton = document.querySelector('.close-button');
    const videoLinks = document.querySelectorAll('.video-link'); // نفس الكلاس الذي استخدمته في وسم <a>

    videoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // يمنع فتح الرابط في صفحة جديدة
            
            const youtubeUrl = this.getAttribute('href');
            // استخلاص الـ ID من رابط يوتيوب العادي (تحتاج دالة مساعدة)
            const videoId = getYouTubeId(youtubeUrl); 
            
            if (videoId) {
                // تعيين مصدر الـ iframe بصيغة الـ embed مع تشغيل تلقائي
                player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                modal.style.display = 'block'; // إظهار النافذة المنبثقة
            }
        });
    });

    // إغلاق النافذة عند الضغط على زر الإغلاق (X)
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        player.src = ''; // إيقاف تشغيل الفيديو
    });

    // إغلاق النافذة عند الضغط خارجها
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            player.src = ''; // إيقاف تشغيل الفيديو
        }
    });
    
    // دالة مساعدة لاستخلاص الـ ID من رابط يوتيوب (هذا الكود مهم)
    function getYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    

const video = document.getElementById('hero-background-video');
const audioBtn = document.getElementById('audioControlButton');
const audioIcon = document.getElementById('audioIcon');

audioBtn.addEventListener('click', () => {
    
    // فحص حالة الكتم الحالية
    if (video.muted) {
        // إلغاء كتم الصوت
        video.muted = false;
        
        // تغيير الأيقونة إلى "صوت مرتفع" (Unmuted)
        audioIcon.classList.remove('fa-volume-mute');
        audioIcon.classList.add('fa-volume-up');
        
    } else {
        // كتم الصوت
        video.muted = true;
        
        // تغيير الأيقونة إلى "مكتوم" (Muted)
        audioIcon.classList.remove('fa-volume-up');
        audioIcon.classList.add('fa-volume-mute');
    }
});

});
