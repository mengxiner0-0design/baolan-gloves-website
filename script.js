const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const quoteForm = document.getElementById('quoteForm');
const formNote = document.getElementById('formNote');

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const subject = encodeURIComponent(`Disposable Gloves Inquiry - ${data.get('product') || 'Multiple Product Lines'}`);
    const body = encodeURIComponent(
`Hello GloveSource One,

I would like to request a quotation.

Name: ${data.get('name') || ''}
Company: ${data.get('company') || ''}
Email: ${data.get('email') || ''}
Product Interest: ${data.get('product') || ''}
Quantity: ${data.get('quantity') || ''}
Market: ${data.get('market') || ''}
Message: ${data.get('message') || ''}

Please send suitable options.`
    );

    window.location.href = `mailto:sales@example.com?subject=${subject}&body=${body}`;
    if (formNote) formNote.textContent = 'Email draft opened. Replace sales@example.com with your real business email before publishing.';
  });
}