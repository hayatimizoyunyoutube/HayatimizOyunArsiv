function changeVideo(id, title, element) {
    // Videoyu değiştir
    const player = document.getElementById('mainPlayer');
    player.src = "https://www.youtube.com/embed/" + id + "?autoplay=1";
    
    // Başlığı değiştir
    document.getElementById('currentTitle').innerText = title;

    // Aktiflik sınıfını güncelle (renk değişimi için)
    const items = document.querySelectorAll('.playlist-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}