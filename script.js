// Ambil elemen tombol
const toggleBtn = document.getElementById('theme-toggle');

// Cek preferensi tema yang tersimpan di browser
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light';
}

// Efek saat tombol diklik
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Simpan preferensi pengguna di LocalStorage & ubah teks tombol
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '☀️ Light';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '🌙 Dark';
  }
});