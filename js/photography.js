document.addEventListener('DOMContentLoaded', () => {
    const STREET_PHOTOS = [
        { thumb: 'images/street/street-01.png', full: 'images/street/full/Street-1.jpg', title: 'Sharks Cove, Oahu', alt: 'Sharks Cove, HI' },
        { thumb: 'images/street/street-02.png', full: 'images/street/full/Street-2.jpg', title: 'Byodo-In Temple', alt: 'Untitled 02' },
        { thumb: 'images/street/street-03.png', full: 'images/street/full/Street-3.jpg', title: 'Beam Photo', alt: 'Untitled 03' },
        { thumb: 'images/street/street-04.png', full: 'images/street/full/Street-4.jpg', title: 'Opposing Boards', alt: 'Untitled 04' },
        { thumb: 'images/street/street-05.png', full: 'images/street/full/Street-5.jpg', title: 'Thunder Hill Overlook', alt: 'Untitled 05' },
        { thumb: 'images/street/street-06.png', full: 'images/street/full/Street-6.jpg', title: 'Visit Our Cheese Store', alt: 'Untitled 06' },
        { thumb: 'images/street/street-07.png', full: 'images/street/full/Street-7.jpg', title: 'Sutter Buttes, CA', alt: 'Untitled 07' },
        { thumb: 'images/street/street-09.png', full: 'images/street/full/Street-9.jpg', title: 'Equator Coffee', alt: 'Untitled 09' },
        { thumb: 'images/street/street-10.png', full: 'images/street/full/Street-10.jpg', title: 'A Warm Fireplace', alt: 'Untitled 10' },
        { thumb: 'images/street/street-11.png', full: 'images/street/full/Street-11.jpg', title: 'Stepping Outside', alt: 'Untitled 11' },
        { thumb: 'images/street/street-12.png', full: 'images/street/full/Street-12.jpg', title: 'Bat Ray', alt: 'Untitled 12' },
        { thumb: 'images/street/street-13.png', full: 'images/street/full/Street-13.jpg', title: 'Stock Photo Core', alt: 'Untitled 13' },
        { thumb: 'images/street/street-16.png', full: 'images/street/full/Street-16.jpg', title: 'Hazy Evening in Santa Cruz', alt: 'Untitled 16' },
        { thumb: 'images/street/street-17.png', full: 'images/street/full/Street-17.jpg', title: 'Avila Barn', alt: 'Untitled 17' },
        { thumb: 'images/street/street-18.png', full: 'images/street/full/Street-18.jpg', title: 'Aquarium Nights', alt: 'Untitled 18' },
        { thumb: 'images/street/street-19.png', full: 'images/street/full/Street-19.jpg', title: 'Upstream', alt: 'Untitled 19' },
        { thumb: 'images/street/street-20.png', full: 'images/street/full/Street-20.jpg', title: 'Almost Home', alt: 'Untitled 20' },
        { thumb: 'images/street/street-21.png', full: 'images/street/full/Street-21.jpg', title: 'New Years on the Bridge', alt: 'Untitled 21' },
        { thumb: 'images/street/street-22.png', full: 'images/street/full/Street-22.jpg', title: 'Merry-go-round', alt: 'Untitled 22' },
        { thumb: 'images/street/street-23.png', full: 'images/street/full/Street-23.jpg', title: 'Deep Fried Meals', alt: 'Untitled 23' },
        { thumb: 'images/street/street-24.png', full: 'images/street/full/Street-24.jpg', title: 'Rendezvous', alt: 'Untitled 24' },
        { thumb: 'images/street/street-25.png', full: 'images/street/full/Street-25.jpg', title: 'Development', alt: 'Untitled 25' },
    ];

    const AUTOMOTIVE_PHOTOS = [
        { thumb: 'images/automotive/automotive-01.png', full: 'images/automotive/full/Automotive-1.jpg', title: 'Animoya House', alt: 'Animoya House' },
        { thumb: 'images/automotive/automotive-02.png', full: 'images/automotive/full/Automotive-2.jpg', title: 'Totem at Sea', alt: 'Totem at Sea' },
        { thumb: 'images/automotive/automotive-03.png', full: 'images/automotive/full/Automotive-3.jpg', title: 'Seeing Double', alt: 'Seeing Double' },
        { thumb: 'images/automotive/automotive-04.png', full: 'images/automotive/full/Automotive-4.jpg', title: 'Make the Sale', alt: 'Make the Sale' },
        { thumb: 'images/automotive/automotive-05.png', full: 'images/automotive/full/Automotive-5.jpg', title: 'One, One-77', alt: 'One, One-77' },
        { thumb: 'images/automotive/automotive-06.png', full: 'images/automotive/full/Automotive-6.jpg', title: 'Guaczilla', alt: 'Guaczilla' },
        { thumb: 'images/automotive/automotive-07.png', full: 'images/automotive/full/Automotive-7.jpg', title: 'Super Veloce', alt: 'Super Veloce' },
        { thumb: 'images/automotive/automotive-08.png', full: 'images/automotive/full/Automotive-8.jpg', title: 'Mystichrome', alt: 'Mystichrome' },
        { thumb: 'images/automotive/automotive-09.png', full: 'images/automotive/full/Automotive-9.jpg', title: 'Eccentrica', alt: 'Eccentrica' },
        { thumb: 'images/automotive/automotive-10.png', full: 'images/automotive/full/Automotive-10.jpg', title: 'Beeetle', alt: 'Beeetle' },
        { thumb: 'images/automotive/automotive-11.png', full: 'images/automotive/full/Automotive-11.jpg', title: 'Animoya Garage Unicorns', alt: 'Animoya Garage Unicorns' },
        { thumb: 'images/automotive/automotive-12.png', full: 'images/automotive/full/Automotive-12.jpg', title: 'Totem Automobili', alt: 'Totem Automobili' },
        { thumb: 'images/automotive/automotive-13.png', full: 'images/automotive/full/Automotive-13.jpg', title: 'Olympia Bronco', alt: 'Olympia Bronco' },
        { thumb: 'images/automotive/automotive-14.png', full: 'images/automotive/full/Automotive-14.jpg', title: 'Apollo', alt: 'Apollo' },
        { thumb: 'images/automotive/automotive-16.png', full: 'images/automotive/full/Automotive-16.jpg', title: 'Porsche Day', alt: 'Porsche Day' },
        { thumb: 'images/automotive/automotive-17.png', full: 'images/automotive/full/Automotive-17.jpg', title: 'Lone GT4RS', alt: 'Lone GT4RS' },
        { thumb: 'images/automotive/automotive-18.png', full: 'images/automotive/full/Automotive-18.jpg', title: 'New Sportscar eXperimental', alt: 'New Sportscar eXperimental' },
        { thumb: 'images/automotive/automotive-19.png', full: 'images/automotive/full/Automotive-19.jpg', title: 'Petronas', alt: 'Petronas' },
        { thumb: 'images/automotive/automotive-20.png', full: 'images/automotive/full/Automotive-20.jpg', title: 'Laguna Seca', alt: 'Laguna Seca' },
        { thumb: 'images/automotive/automotive-21.png', full: 'images/automotive/full/Automotive-21.jpg', title: 'RennSport Rennwagen', alt: 'RennSport Rennwagen' },
        { thumb: 'images/automotive/automotive-22.png', full: 'images/automotive/full/Automotive-22.jpg', title: 'Stingray', alt: 'Stingray' },
        { thumb: 'images/automotive/automotive-23.png', full: 'images/automotive/full/Automotive-23.jpg', title: 'Niki Lauda', alt: 'Niki Lauda' },
        { thumb: 'images/automotive/automotive-24.png', full: 'images/automotive/full/Automotive-24.jpg', title: 'M Power', alt: 'M Power' },
        { thumb: 'images/automotive/automotive-25.png', full: 'images/automotive/full/Automotive-25.jpg', title: 'IMSA Veteran', alt: 'IMSA Veteran' },
        { thumb: 'images/automotive/automotive-26.png', full: 'images/automotive/full/Automotive-26.jpg', title: 'Cooling Off', alt: 'Cooling Off' },
        { thumb: 'images/automotive/automotive-27.png', full: 'images/automotive/full/Automotive-27.jpg', title: 'Ramping Up', alt: 'Ramping Up' },
        { thumb: 'images/automotive/automotive-28.png', full: 'images/automotive/full/Automotive-28.jpg', title: 'Lunch Break', alt: 'Lunch Break' },
        { thumb: 'images/automotive/automotive-29.png', full: 'images/automotive/full/Automotive-29.jpg', title: 'van Gisbergen', alt: 'van Gisbergen' },
        { thumb: 'images/automotive/automotive-30.png', full: 'images/automotive/full/Automotive-30.jpg', title: 'Rolling Start', alt: 'Rolling Start' },
        { thumb: 'images/automotive/automotive-31.png', full: 'images/automotive/full/Automotive-31.jpg', title: 'Kyle Larson', alt: 'Kyle Larson' },
        { thumb: 'images/automotive/automotive-32.png', full: 'images/automotive/full/Automotive-32.jpg', title: 'Weissach', alt: 'Weissach' },
        { thumb: 'images/automotive/automotive-33.png', full: 'images/automotive/full/Automotive-33.jpg', title: '3rs', alt: '3rs' },
        { thumb: 'images/automotive/automotive-34.png', full: 'images/automotive/full/Automotive-34.jpg', title: 'Leaving', alt: 'Leaving' },
        { thumb: 'images/automotive/automotive-35.png', full: 'images/automotive/full/Automotive-35.jpg', title: 'Long Road Ahead', alt: 'Long Road Ahead' },
        { thumb: 'images/automotive/automotive-36.png', full: 'images/automotive/full/Automotive-36.jpg', title: 'Treasure on an Island', alt: 'Treasure on an Island' },
        { thumb: 'images/automotive/automotive-37.png', full: 'images/automotive/full/Automotive-37.jpg', title: 'Hero Car', alt: 'Hero Car' },
        { thumb: 'images/automotive/automotive-38.png', full: 'images/automotive/full/Automotive-38.jpg', title: 'Pause for Air', alt: 'Pause for Air' },
        { thumb: 'images/automotive/automotive-40.png', full: 'images/automotive/full/Automotive-40.jpg', title: '17 Mile Drive', alt: '17 Mile Drive' },
        { thumb: 'images/automotive/automotive-41.png', full: 'images/automotive/full/Automotive-41.jpg', title: 'Mountain Pass', alt: 'Mountain Pass' },
        { thumb: 'images/automotive/automotive-43.png', full: 'images/automotive/full/Automotive-43.jpg', title: 'Breakaway', alt: 'Breakaway' },
        { thumb: 'images/automotive/automotive-44.png', full: 'images/automotive/full/Automotive-44.jpg', title: 'Night Vision', alt: 'Night Vision' },
        { thumb: 'images/automotive/automotive-45.png', full: 'images/automotive/full/Automotive-45.jpg', title: 'Let\'s Go Places', alt: 'Let\'s Go Places' },
    ];

    const PORTRAITURE_PHOTOS = [
        { thumb: 'images/portraiture/Portrait-1.png', full: 'images/portraiture/full/Portrait-1.jpg', title: 'Untitled 01', alt: 'Untitled 01' },
        { thumb: 'images/portraiture/Portrait-2.png', full: 'images/portraiture/full/Portrait-2.jpg', title: 'Untitled 02', alt: 'Untitled 02' },
        { thumb: 'images/portraiture/Portrait-3.png', full: 'images/portraiture/full/Portrait-3.jpg', title: 'Untitled 03', alt: 'Untitled 03' },
        { thumb: 'images/portraiture/Portrait-4.png', full: 'images/portraiture/full/Portrait-4.jpg', title: 'Untitled 04', alt: 'Untitled 04' },
        { thumb: 'images/portraiture/Portrait-5.png', full: 'images/portraiture/full/Portrait-5.jpg', title: 'Untitled 05', alt: 'Untitled 05' },
        { thumb: 'images/portraiture/Portrait-6.png', full: 'images/portraiture/full/Portrait-6.jpg', title: 'Untitled 06', alt: 'Untitled 06' },
        { thumb: 'images/portraiture/Portrait-7.png', full: 'images/portraiture/full/Portrait-7.jpg', title: 'Untitled 07', alt: 'Untitled 07' },
        { thumb: 'images/portraiture/Portrait-8.png', full: 'images/portraiture/full/Portrait-8.jpg', title: 'Untitled 08', alt: 'Untitled 08' },
        { thumb: 'images/portraiture/Portrait-9.png', full: 'images/portraiture/full/Portrait-9.jpg', title: 'Untitled 09', alt: 'Untitled 09' },
        { thumb: 'images/portraiture/Portrait-10.png', full: 'images/portraiture/full/Portrait-10.jpg', title: 'Untitled 10', alt: 'Untitled 10' },
        { thumb: 'images/portraiture/Portrait-11.png', full: 'images/portraiture/full/Portrait-11.jpg', title: 'Untitled 11', alt: 'Untitled 11' },
        { thumb: 'images/portraiture/Portrait-12.png', full: 'images/portraiture/full/Portrait-12.jpg', title: 'Untitled 12', alt: 'Untitled 12' },
        { thumb: 'images/portraiture/Portrait-13.png', full: 'images/portraiture/full/Portrait-13.jpg', title: 'Untitled 13', alt: 'Untitled 13' },
        { thumb: 'images/portraiture/Portrait-14.png', full: 'images/portraiture/full/Portrait-14.jpg', title: 'Untitled 14', alt: 'Untitled 14' },
        { thumb: 'images/portraiture/Portrait-15.png', full: 'images/portraiture/full/Portrait-15.jpg', title: 'Untitled 15', alt: 'Untitled 15' },
        { thumb: 'images/portraiture/Portrait-16.png', full: 'images/portraiture/full/Portrait-16.jpg', title: 'Untitled 16', alt: 'Untitled 16' },
    ];

    function renderAlbum(gridId, photos) {
        const grid = document.getElementById(gridId);
        if (!grid) return;

        grid.replaceChildren();

        photos.forEach((photo, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'photo-item';
            button.dataset.index = String(index);
            button.dataset.title = photo.title;
            button.dataset.full = photo.full;

            const img = document.createElement('img');
            img.src = photo.thumb;
            img.alt = photo.alt;

            button.appendChild(img);
            grid.appendChild(button);
        });
    }

    renderAlbum('grid-street', STREET_PHOTOS);
    renderAlbum('grid-automotive', AUTOMOTIVE_PHOTOS);
    renderAlbum('grid-portraiture', PORTRAITURE_PHOTOS);

    const albums = document.querySelectorAll('.album');
    const grids = document.querySelectorAll('.album-grid');
    const albumRow = document.querySelector('.album-row');
    const GAP = 8;
    const COVER_GAP = 16;
    const COVER_MOBILE_MAX = 600;

    let closingTimer = null;

    function clearClosingTimer() {
        if (closingTimer) {
            clearTimeout(closingTimer);
            closingTimer = null;
        }
    }

    function getTargetRowHeight() {
        // Slightly taller than the previous clamp(150px, 18vw, 240px) rows
        return Math.min(280, Math.max(180, window.innerWidth * 0.22));
    }

    function getAspect(item) {
        const img = item.querySelector('img');
        if (!img || !img.naturalWidth || !img.naturalHeight) return 1;
        return img.naturalWidth / img.naturalHeight;
    }

    function layoutAlbumCovers() {
        if (!albumRow) return;

        const imgs = [...albumRow.querySelectorAll('.album-cover-img')];
        if (!imgs.length) return;

        if (window.innerWidth <= COVER_MOBILE_MAX) {
            imgs.forEach((img) => {
                img.style.width = '';
                img.style.height = '';
            });
            return;
        }

        if (imgs.some((img) => !img.naturalWidth || !img.naturalHeight)) return;

        const containerWidth = albumRow.clientWidth;
        if (containerWidth <= 0) return;

        const aspects = imgs.map((img) => img.naturalWidth / img.naturalHeight);
        const aspectSum = aspects.reduce((sum, a) => sum + a, 0);
        const gaps = COVER_GAP * (imgs.length - 1);
        // Fill the 90vw row edge-to-edge; height follows from aspect ratios
        const rowH = (containerWidth - gaps) / aspectSum;

        imgs.forEach((img, i) => {
            img.style.height = `${rowH}px`;
            img.style.width = `${aspects[i] * rowH}px`;
        });
    }

    function preloadAndLayoutCovers() {
        if (!albumRow) return;

        const imgs = [...albumRow.querySelectorAll('.album-cover-img')];
        const pending = imgs.filter((img) => !img.complete || !img.naturalWidth);

        if (!pending.length) {
            layoutAlbumCovers();
            return;
        }

        let remaining = pending.length;
        const done = () => {
            remaining -= 1;
            if (remaining <= 0) layoutAlbumCovers();
        };

        pending.forEach((img) => {
            img.addEventListener('load', done, { once: true });
            img.addEventListener('error', done, { once: true });
        });
    }

    function layoutJustified(grid) {
        const items = [...grid.querySelectorAll('.photo-item')];
        if (!items.length) return;

        const containerWidth = grid.clientWidth;
        if (containerWidth <= 0) return;

        const targetH = getTargetRowHeight();
        const maxLastRowH = targetH * 1.45;

        let row = [];
        let aspectSum = 0;

        function flushRow(isLast) {
            if (!row.length) return;

            const gaps = GAP * (row.length - 1);
            let rowH = (containerWidth - gaps) / aspectSum;
            let fillExactly = true;

            // Incomplete last rows: fill edge-to-edge unless a few leftovers would grow huge
            if (isLast && rowH > maxLastRowH) {
                rowH = targetH;
                fillExactly = false;
            }

            let usedWidth = 0;
            row.forEach(({ item, aspect }, i) => {
                const isFinal = fillExactly && i === row.length - 1;
                const width = isFinal
                    ? containerWidth - gaps - usedWidth
                    : aspect * rowH;

                if (!isFinal) usedWidth += width;

                item.style.width = `${width}px`;
                item.style.height = `${rowH}px`;
            });

            row = [];
            aspectSum = 0;
        }

        items.forEach((item) => {
            const aspect = getAspect(item);
            const nextAspectSum = aspectSum + aspect;
            const nextWidth = nextAspectSum * targetH + GAP * row.length;

            if (row.length > 0 && nextWidth > containerWidth) {
                flushRow(false);
            }

            row.push({ item, aspect });
            aspectSum += aspect;
        });

        flushRow(true);
    }

    function layoutOpenGrids() {
        layoutAlbumCovers();
        grids.forEach((grid) => {
            if (grid.classList.contains('is-open') && !grid.hidden) {
                layoutJustified(grid);
            }
        });
    }

    function preloadAndLayout(grid) {
        const imgs = [...grid.querySelectorAll('.photo-item img')];
        const pending = imgs.filter((img) => !img.complete || !img.naturalWidth);

        if (!pending.length) {
            layoutJustified(grid);
            return;
        }

        let remaining = pending.length;
        const done = () => {
            remaining -= 1;
            if (remaining <= 0) layoutJustified(grid);
        };

        pending.forEach((img) => {
            img.addEventListener('load', done, { once: true });
            img.addEventListener('error', done, { once: true });
        });

        // Layout with whatever dimensions we have so far
        layoutJustified(grid);
    }

    function closeAll(immediate = false) {
        clearClosingTimer();

        albums.forEach((album) => {
            album.classList.remove('is-open');
            const btn = album.querySelector('.album-cover');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        const openGrids = [...grids].filter((grid) => grid.classList.contains('is-open') || !grid.hidden);

        openGrids.forEach((grid) => {
            grid.classList.remove('is-open');
        });

        if (immediate) {
            openGrids.forEach((grid) => {
                grid.hidden = true;
            });
            return;
        }

        closingTimer = setTimeout(() => {
            openGrids.forEach((grid) => {
                if (!grid.classList.contains('is-open')) {
                    grid.hidden = true;
                }
            });
            closingTimer = null;
        }, 450);
    }

    function openAlbum(albumId) {
        const album = document.querySelector(`.album[data-album="${albumId}"]`);
        const grid = document.querySelector(`.album-grid[data-album="${albumId}"]`);
        if (!album || !grid) return;

        clearClosingTimer();

        album.classList.add('is-open');
        const btn = album.querySelector('.album-cover');
        if (btn) btn.setAttribute('aria-expanded', 'true');

        grid.hidden = false;
        void grid.offsetHeight;
        grid.classList.add('is-open');
        preloadAndLayout(grid);
    }

    preloadAndLayoutCovers();

    window.addEventListener('resize', layoutOpenGrids);

    if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(() => layoutOpenGrids());
        grids.forEach((grid) => resizeObserver.observe(grid));
        if (albumRow) resizeObserver.observe(albumRow);
    }

    albums.forEach((album) => {
        const btn = album.querySelector('.album-cover');
        if (!btn) return;

        btn.addEventListener('click', () => {
            const albumId = album.dataset.album;
            const isOpen = album.classList.contains('is-open');

            if (isOpen) {
                closeAll(false);
                return;
            }

            closeAll(true);
            openAlbum(albumId);
        });
    });

    // —— Lightbox ——
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    let photoItems = [];

    let currentIndex = 0;
    let swapTimer = null;

    function getPhotos() {
        return photoItems.map((item) => {
            const img = item.querySelector('img');
            return {
                src: item.dataset.full || img.src,
                title: item.dataset.title || img.alt || '',
            };
        });
    }

    function showLightboxContent(index, animateSwap = false) {
        const photos = getPhotos();
        if (!photos.length) return;

        currentIndex = ((index % photos.length) + photos.length) % photos.length;
        const photo = photos[currentIndex];

        if (animateSwap) {
            lightboxImg.classList.add('is-swapping');
            lightboxCaption.style.opacity = '0';

            clearTimeout(swapTimer);
            swapTimer = setTimeout(() => {
                lightboxImg.src = photo.src;
                lightboxImg.alt = photo.title;
                lightboxCaption.textContent = photo.title;
                lightboxImg.classList.remove('is-swapping');
                lightboxCaption.style.opacity = '';
            }, 200);
            return;
        }

        lightboxImg.src = photo.src;
        lightboxImg.alt = photo.title;
        lightboxCaption.textContent = photo.title;
    }

    function openLightbox(index) {
        showLightboxContent(index, false);
        lightbox.hidden = false;
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
        void lightbox.offsetHeight;
        lightbox.classList.add('is-open');
    }

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        document.body.classList.remove('lightbox-open');
        lightbox.setAttribute('aria-hidden', 'true');

        setTimeout(() => {
            if (!lightbox.classList.contains('is-open')) {
                lightbox.hidden = true;
                lightboxImg.src = '';
            }
        }, 350);
    }

    document.querySelectorAll('.album-grid .photo-item').forEach((item) => {
        item.addEventListener('click', () => {
            const grid = item.closest('.album-grid');
            photoItems = [...grid.querySelectorAll('.photo-item')];
            lightbox.dataset.album = grid.dataset.album || '';
            openLightbox(photoItems.indexOf(item));
        });
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showLightboxContent(currentIndex - 1, true);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showLightboxContent(currentIndex + 1, true);
    });

    lightbox.querySelector('.lightbox-stage').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    lightbox.querySelectorAll('[data-lightbox-close]').forEach((el) => {
        el.addEventListener('click', closeLightbox);
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('is-open')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showLightboxContent(currentIndex - 1, true);
        if (e.key === 'ArrowRight') showLightboxContent(currentIndex + 1, true);
    });
});
