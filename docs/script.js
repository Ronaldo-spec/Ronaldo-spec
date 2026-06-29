const cards = document.querySelectorAll('.project-card, .capability-item, .timeline-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

cards.forEach((card) => observer.observe(card));
