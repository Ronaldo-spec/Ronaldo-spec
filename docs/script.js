const heroProfileLayout = document.createElement('style');

heroProfileLayout.textContent = `
@media (min-width: 981px) {
  .hero.section-grid {
    grid-template-columns: minmax(0, 1fr) minmax(500px, 0.95fr);
    gap: 42px;
    align-items: center;
  }

  .hero-card {
    width: 100%;
    max-width: 570px;
    min-height: 520px;
    justify-self: end;
    gap: 32px;
    padding: 42px;
  }

  .profile-frame {
    width: 132px;
    height: 132px;
    padding: 6px;
    border-radius: 32px;
  }

  .profile-frame img {
    border-radius: 26px;
  }

  .hero-card h2 {
    font-size: clamp(2.35rem, 3vw, 3rem);
    line-height: 0.98;
  }

  .hero-card p {
    font-size: 1.08rem;
    line-height: 1.75;
  }

  .mini-stats {
    gap: 14px;
    margin-top: 10px;
  }

  .mini-stats div {
    min-height: 108px;
    padding: 18px 16px;
    border-radius: 20px;
  }

  .mini-stats strong {
    font-size: 1.35rem;
  }

  .mini-stats span {
    font-size: 0.88rem;
  }
}

@media (min-width: 1240px) {
  .hero.section-grid {
    grid-template-columns: minmax(0, 0.95fr) minmax(540px, 0.9fr);
  }

  .hero-card {
    max-width: 600px;
    min-height: 560px;
  }
}
`;

document.head.appendChild(heroProfileLayout);

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
