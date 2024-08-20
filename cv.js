document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Skill Bars Animation
    const skills = document.querySelectorAll('.skill-bar-inner');

    const animateSkillBars = () => {
        skills.forEach(skill => {
            const width = skill.getAttribute('data-skill');
            skill.style.width = width;
        });
    };

    // Trigger animation when scrolling into view
    const onScroll = () => {
        skills.forEach(skill => {
            if (skill.getBoundingClientRect().top < window.innerHeight) {
                animateSkillBars();
                // Remove scroll event listener once animation is triggered
                document.removeEventListener('scroll', onScroll);
            }
        });
    };

    document.addEventListener('scroll', onScroll);
});
