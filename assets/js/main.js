/* ==========================================================================
   MUHAMMAD ZAKI KURNIAWAN - PORTFOLIO INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initProjectCards();
  initFilters();
  initDeckViewer();
  initGymBotSimulator();
  initMovieRecommender();
  initContactInteractions();
  initModal();
});

/* ==========================================================================
   PROJECT CARDS RENDERING
   ========================================================================== */
function initProjectCards(filter = 'all') {
  const container = document.getElementById('projectsGrid');
  if (!container || !portfolioData) return;

  const filtered = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map((project, index) => {
    const isFeatured = index === 0 && filter === 'all';
    return `
      <article class="project-card ${isFeatured ? 'featured' : ''}" data-category="${project.category}">
        <div class="project-img-box">
          <img src="${project.image}" alt="${project.title} Preview" loading="lazy" />
          <span class="project-floating-badge">${project.badge}</span>
          <span class="project-year-badge">${project.year}</span>
        </div>
        <div class="project-content">
          <div class="project-meta-row">
            <span class="role-pill"><i class="fa-solid fa-user-tag"></i> ${project.role}</span>
            <span class="type-pill">• ${project.projectType}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <div class="project-tagline">${project.tagline}</div>
          <p class="project-desc">${project.summary}</p>
          
          <div class="project-insight-snippet">
            <div class="insight-label">
              <i class="fa-solid fa-lightbulb"></i> ${project.deepDive.question1}
            </div>
            <div class="insight-text">
              "${project.deepDive.answer1.substring(0, 150)}..."
            </div>
          </div>

          <div class="project-tags">
            ${project.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
          </div>

          <div class="project-footer-actions">
            <button class="btn btn-primary btn-sm btn-sticker view-details-btn" data-project-id="${project.id}">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Case Study Deep Dive
            </button>
            ${project.github ? `
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm btn-sticker">
                <i class="fa-brands fa-github"></i> Repository
              </a>
            ` : ''}
            ${project.figma ? `
              <a href="${project.figma}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm btn-sticker">
                <i class="fa-brands fa-figma"></i> Figma File
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-attach modal trigger listeners
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });
}

/* ==========================================================================
   FILTER TABS
   ========================================================================== */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      initProjectCards(cat);
    });
  });
}

/* ==========================================================================
   PROJECT DEEP DIVE MODAL
   ========================================================================== */
function initModal() {
  const overlay = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });
}

function openProjectModal(projectId) {
  const overlay = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalDynamicContent');
  if (!overlay || !modalContent || !portfolioData) return;

  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <div class="sticker-group" style="margin-bottom: 12px;">
        <span class="sticker sticker-blue">${project.badge}</span>
        <span class="sticker sticker-yellow">${project.year}</span>
        <span class="sticker sticker-orange">${project.projectType}</span>
      </div>
      <h2 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 6px;">${project.title}</h2>
      <p style="font-size: 1.1rem; color: var(--primary); font-weight: 700; margin-bottom: 12px;">${project.tagline}</p>
      <div style="display: flex; gap: 16px; font-size: 0.9rem; color: var(--muted); font-weight: 600;">
        <span><strong>Role:</strong> ${project.role}</span>
        <span>•</span>
        <span><strong>Deck Source:</strong> ${project.pageRef}</span>
      </div>
    </div>
    
    <div class="modal-body">
      <div style="border: 2px solid var(--border-dark); border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 24px; box-shadow: var(--shadow-sticker);">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; max-height: 440px; object-fit: cover;" />
      </div>

      <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 10px;">Project Summary</h4>
      <p style="font-size: 0.95rem; color: var(--muted); line-height: 1.7; margin-bottom: 24px;">
        ${project.summary}
      </p>

      <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 14px;">Key Innovations & Highlights</h4>
      <ul style="padding-left: 20px; margin-bottom: 24px; color: var(--dark); font-size: 0.92rem; line-height: 1.8;">
        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>

      <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 14px;">Reflective Insights (from Academy Application)</h4>
      
      <div class="deepdive-qa-block">
        <div class="deepdive-question">${project.deepDive.question1}</div>
        <div class="deepdive-answer">${project.deepDive.answer1}</div>
      </div>

      <div class="deepdive-qa-block">
        <div class="deepdive-question">${project.deepDive.question2}</div>
        <div class="deepdive-answer">${project.deepDive.answer2}</div>
      </div>

      <div style="display: flex; gap: 14px; margin-top: 30px;">
        ${project.github ? `
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sticker">
            <i class="fa-brands fa-github"></i> View GitHub Repository
          </a>
        ` : ''}
        ${project.figma ? `
          <a href="${project.figma}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sticker">
            <i class="fa-brands fa-figma"></i> View Figma Prototype
          </a>
        ` : ''}
      </div>
    </div>
  `;

  overlay.classList.add('active');
}

/* ==========================================================================
   ORIGINAL DECK VIEWER (13 Pages Carousel)
   ========================================================================== */
function initDeckViewer() {
  const currentImg = document.getElementById('deckCurrentImage');
  const counter = document.getElementById('deckPageNumber');
  const prevBtn = document.getElementById('deckPrevBtn');
  const nextBtn = document.getElementById('deckNextBtn');
  const thumbsContainer = document.getElementById('deckThumbs');
  
  if (!currentImg || !counter || !prevBtn || !nextBtn || !thumbsContainer) return;

  const totalPages = 13;
  let currentPage = 1;

  // Build thumbs
  thumbsContainer.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const thumb = document.createElement('div');
    thumb.className = `deck-thumb ${i === 1 ? 'active' : ''}`;
    thumb.innerHTML = `<img src="assets/images/page_${i}.png" alt="Slide ${i}" />`;
    thumb.addEventListener('click', () => setDeckPage(i));
    thumbsContainer.appendChild(thumb);
  }

  function setDeckPage(pageNum) {
    if (pageNum < 1) pageNum = totalPages;
    if (pageNum > totalPages) pageNum = 1;
    currentPage = pageNum;
    
    currentImg.src = `assets/images/page_${currentPage}.png`;
    currentImg.alt = `Portfolio Slide ${currentPage}`;
    counter.textContent = `Slide ${currentPage} of ${totalPages}`;

    const allThumbs = thumbsContainer.querySelectorAll('.deck-thumb');
    allThumbs.forEach((th, idx) => {
      th.classList.toggle('active', idx + 1 === currentPage);
    });

    // Scroll active thumbnail into view
    const activeThumb = allThumbs[currentPage - 1];
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  prevBtn.addEventListener('click', () => setDeckPage(currentPage - 1));
  nextBtn.addEventListener('click', () => setDeckPage(currentPage + 1));
}

/* ==========================================================================
   GYMBOT AI SIMULATOR
   ========================================================================== */
function initGymBotSimulator() {
  const chatMessages = document.getElementById('gymChatMessages');
  const input = document.getElementById('gymChatInput');
  const sendBtn = document.getElementById('gymChatSend');
  const chips = document.querySelectorAll('.gym-prompt-chip');

  if (!chatMessages || !input || !sendBtn) return;

  const responses = {
    "30 menit": `Berikut adalah beberapa latihan yang dapat Anda lakukan dalam waktu 30 menit:

1. Warm-up: 5 menit gerakan ringan seperti jalan kaki di tempat atau dynamic stretching.
2. High-Intensity Interval Training (HIIT) & Dumbbell Circuit:
   • Goblet Squats (3 x 10-12 repetisi)
   • Dumbbell Push Press (3 x 10 repetisi)
   • Bent-Over Dumbbell Rows (3 x 12 repetisi)
   • Plank to Push-up (3 x 30-45 detik)
3. Cool-down & recovery: 3 menit peregangan otot besar.`,
    "dada": `Berikut menu latihan otot dada tanpa alat (Bodyweight Chest):

1. Standard Push-ups (3 x 12-15) - melatih seluruh pectoral.
2. Incline Push-ups (kaki di lantai, tangan di kursi/meja) (3 x 12) - fokus lower chest.
3. Decline Push-ups (kaki dinaikkan di kursi) (3 x 10) - fokus upper chest.
4. Diamond Push-ups (3 x 8-10) - inner chest & triceps.
Istirahat 60 detik antar set untuk stimulasi hipertrofi maksimal.`,
    "split": `Rekomendasi split latihan 3 hari (Push-Pull-Legs optimal):

• Hari 1 (Push): Chest, Shoulders, Triceps (Bench press, Shoulder press, Triceps pushdown)
• Hari 2 (Pull): Back, Biceps, Rear Delts (Lat pulldown, Barbell row, Bicep curls)
• Hari 3 (Legs & Core): Quads, Hamstrings, Abs (Squat, Romanian deadlift, Hanging leg raise)
Jadwalkan hari istirahat aktif di antara sesi untuk pemulihan otot.`
  };

  function appendMessage(sender, text, isBot = false) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    if (isBot) {
      bubble.innerHTML = `
        <div class="bot-name"><i class="fa-solid fa-robot"></i> GymBot (Qwen LoRA)</div>
        <div class="bot-text">${text.replace(/\n/g, '<br>')}</div>
      `;
    } else {
      bubble.textContent = text;
    }
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleSend(userText) {
    const text = userText || input.value.trim();
    if (!text) return;
    
    appendMessage('user', text);
    if (!userText) input.value = '';

    // Simulate typing delay
    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-bubble bot';
    typingBubble.innerHTML = `<div class="bot-name"><i class="fa-solid fa-robot"></i> GymBot</div><em>Menganalisis profil & kebutuhan latihan...</em>`;
    chatMessages.appendChild(typingBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
      typingBubble.remove();
      let botReply = responses["30 menit"];
      const lower = text.toLowerCase();
      if (lower.includes('dada') || lower.includes('tanpa alat')) {
        botReply = responses["dada"];
      } else if (lower.includes('split') || lower.includes('jadwal') || lower.includes('3 hari')) {
        botReply = responses["split"];
      } else if (lower.includes('30 menit') || lower.includes('waktu')) {
        botReply = responses["30 menit"];
      } else {
        botReply = `Berdasarkan fine-tuned Qwen LoRA model, untuk target "${text}": Kami rekomendasikan gabungan latihan compound movement 3-4 set dengan jeda istirahat terukur 60-90 detik untuk hasil konsisten.`;
      }
      appendMessage('bot', botReply, true);
    }, 650);
  }

  sendBtn.addEventListener('click', () => handleSend());
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      handleSend(prompt);
    });
  });
}

/* ==========================================================================
   INTERACTIVE HYBRID MOVIE RECOMMENDER
   ========================================================================== */
function initMovieRecommender() {
  const btn = document.getElementById('recommendMovieBtn');
  const resultList = document.getElementById('recResultsList');
  if (!btn || !resultList) return;

  const movieDatabase = [
    { title: "Usual Suspects, The (1995)", genres: ["Mystery", "Thriller"], baseScore: 4.60 },
    { title: "Seven (Se7en) (1995)", genres: ["Crime", "Mystery", "Thriller"], baseScore: 4.55 },
    { title: "The Matrix (1999)", genres: ["Sci-Fi", "Action"], baseScore: 4.70 },
    { title: "Doom Generation, The (1995)", genres: ["Drama", "Indie"], baseScore: 4.10 },
    { title: "Exotica (1994)", genres: ["Drama", "Mystery"], baseScore: 4.02 },
    { title: "Antonia's Line (1995)", genres: ["Drama", "Comedy"], baseScore: 3.94 },
    { title: "Fight Club (1999)", genres: ["Drama", "Psychological"], baseScore: 4.65 },
    { title: "Interstellar (2014)", genres: ["Sci-Fi", "Adventure"], baseScore: 4.82 },
    { title: "Inception (2010)", genres: ["Sci-Fi", "Action", "Thriller"], baseScore: 4.78 }
  ];

  btn.addEventListener('click', () => {
    const age = parseInt(document.getElementById('userAge').value, 10) || 20;
    const gender = document.getElementById('userGender').value;
    const occupation = document.getElementById('userOccupation').value;
    const favorite = document.getElementById('userFavMovie').value;

    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Menghitung Bobot Hybrid...`;

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Rekomendasikan Film!`;

      // Filter out chosen favorite
      const candidates = movieDatabase.filter(m => !m.title.toLowerCase().includes(favorite.toLowerCase().slice(0, 5)));

      // Hybrid formula simulation: 0.6 Content Similarity + 0.4 Demographic Affinity
      const scored = candidates.map(item => {
        let demographicBonus = 0;
        if (occupation === 'programmer') demographicBonus += 0.20;
        if (age < 25 && item.genres.includes('Sci-Fi')) demographicBonus += 0.25;
        if (gender === 'M' && item.genres.includes('Action')) demographicBonus += 0.15;
        
        const predictedRating = Math.min(5.0, (item.baseScore * 0.75 + demographicBonus + (Math.random() * 0.15))).toFixed(2);
        return {
          ...item,
          predictedRating
        };
      }).sort((a, b) => b.predictedRating - a.predictedRating).slice(0, 4);

      resultList.innerHTML = scored.map((item, idx) => `
        <li class="rec-item">
          <div>
            <div class="rec-item-title">${idx + 1}. ${item.title}</div>
            <div style="font-size: 0.75rem; color: var(--muted);">${item.genres.join(', ')}</div>
          </div>
          <div class="rec-rating">
            <i class="fa-solid fa-star"></i> ${item.predictedRating} ★
          </div>
        </li>
      `).join('');
    }, 450);
  });
}

/* ==========================================================================
   CONTACT & CLIPBOARD INTERACTIONS
   ========================================================================== */
function initContactInteractions() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toastNotification');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = portfolioData.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email ${email} copied to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }

  // Quick form send
  const contactForm = document.getElementById('quickContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;

      const mailtoUrl = `mailto:${portfolioData.profile.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
      window.location.href = mailtoUrl;
      showToast('Opening your default email client...');
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent-green);"></i> ${message}`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
