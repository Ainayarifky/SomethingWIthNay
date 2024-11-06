// Fungsi untuk membuat partikel salju
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Durasi animasi antara 2 - 5 detik
    snowflake.style.opacity = Math.random(); // Opacity acak antara 0 dan 1
    document.body.appendChild(snowflake);
  
    // Hapus partikel salju setelah selesai jatuh
    snowflake.addEventListener('animationend', () => {
      snowflake.remove();
    });
  }
  
  // Buat partikel salju setiap beberapa detik
  setInterval(createSnowflake, 500); // Membuat partikel setiap 0.5 detik
  