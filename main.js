const movies = [
    { id: "the-platform-2019", title: "The Platform", year: "2019", image: "aflam/MV5BYjUyZjNmYmMtNjA1My00ZWMyLTliZGQtODgzZjIxM2Y4NGI1XkEyXkFqcGc_.jpg_V1_SX700-455x650.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-the-platform-2019-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Horror & Mystery", desc: "A vertical prison with one cell per level. Two people per cell. One only food platform and two minutes per day to feed from it." },
    { id: "azreal-2024", title: "Azrael", year: "2024", image: "aflam/images.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-azrael-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "In a world where no one speaks, a devout female community hunts down a young woman who has escaped her imprisonment." },
    { id: "harold-purple-crayon", title: "Harold and the Purple Crayon", year: "2024", image: "aflam/MV5BZGE3MmYxOTgtMGY1Ni00ZWQ4LTlhNjAtMzcxYjIzMjcwN2U1XkEyXkFqcGc_.jpg_V1_SX700-433x650.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-harold-and-the-purple-crayon-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Trending Now", desc: "Inside of his book, adventurous Harold can make anything come to life simply by drawing it." },
    { id: "the-wait-2023", title: "The Wait", year: "2023", image: "aflam/MV5BYmU3NGQzNGQtZDM2Ni00NzIxLWJjN2EtMjA4MmMxZTdkNTllXkEyXkFqcGc_.jpg_V1_SX700-439x650.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-the-wait-2023-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Trending Now", desc: "Two lives intersect in unexpected ways while waiting for life-changing news." },
    { id: "the-platform-2", title: "The Platform 2", year: "2024", image: "aflam/1.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-the-platform-2-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Horror & Mystery", desc: "A mysterious figure has managed to establish a new law in The Platform, but can justice truly be enforced in hell?" },
    { id: "the-diary-2024", title: "The Diary", year: "2024", image: "aflam/2.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-the-diary-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Trending Now", desc: "A young woman uncovers terrifying secrets hidden in her ancestors' diary." },
    { id: "lazareth-2024", title: "Lazareth", year: "2024", image: "aflam/3.jpg", link: "#", category: "Action & Thriller", desc: "Following the outbreak of a deadly pandemic, an aunt takes in her orphaned nieces to protect them." },
    { id: "things-will-be-different", title: "Things Will Be Different", year: "2024", image: "aflam/4.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-things-will-be-different-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Horror & Mystery", desc: "Siblings find a mysterious safe house where time moves differently." },
    { id: "meg-2-trench", title: "Meg 2: The Trench", year: "2023", image: "aflam/5.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-meg-2-the-trench-2023-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86-11/watch/", category: "Action & Thriller", desc: "A research team encounters multiple threats while exploring the depths of the ocean." },
    { id: "fast-five", title: "Fast Five", year: "2011", image: "aflam/6.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-fast-five-2011-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom." },
    { id: "furious-7", title: "Furious 7", year: "2015", image: "aflam/7.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-furious-7-2015-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother." },
    { id: "fate-of-furious", title: "The Fate of the Furious", year: "2017", image: "aflam/8.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-the-fate-of-the-furious-2017-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "When a mysterious woman seduces Dom into the world of terrorism, the crew must unite to stop them." },
    { id: "f9-fast-saga", title: "F9: The Fast Saga", year: "2021", image: "aflam/9.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-f9-the-fast-saga-2021-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "Dom and the crew must take on an international terrorist who turns out to be Dom's estranged brother." },
    { id: "hobbs-shaw", title: "Hobbs & Shaw", year: "2019", image: "aflam/10.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-fast-furious-presents-hobbs-and-shaw-2019-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity." },
    { id: "fast-furious-1", title: "The Fast and the Furious", year: "2001", image: "aflam/11.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-the-fast-and-the-furious-2001-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world." },
    { id: "2-fast-2-furious", title: "2 Fast 2 Furious", year: "2003", image: "aflam/12.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-2-fast-2-furious-2003-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "Former cop Brian O'Conner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer." },
    { id: "tokyo-drift", title: "Tokyo Drift", year: "2006", image: "aflam/13.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-the-fast-and-the-furious-tokyo-drift-2006-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo." },
    { id: "fast-furious-4", title: "Fast & Furious", year: "2009", image: "aflam/14.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-fast-and-furious-2009-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "Brian O'Conner teams up with Dominic Toretto to bring down a heroin importer." },
    { id: "fast-furious-6", title: "Fast & Furious 6", year: "2013", image: "aflam/15.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-fast-furious-6-2013-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries." },
    { id: "sooryavanshi", title: "Sooryavanshi", year: "2021", image: "aflam/16.jpg", link: "https://archive.org/details/sooryavanshi.-2021.-hindi", category: "Trending Now", desc: "Sooryavanshi traces the acts and antics of DCP Veer Sooryavanshi, the chief of the Mumbai Anti-Terrorism Squad." },
    { id: "joker-folie", title: "Joker: Folie à Deux", year: "2024", image: "aflam/17.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-joker-folie-a-deux-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Trending Now", desc: "Arthur Fleck meets Harley Quinn and the two embark on a dark journey together." },
    { id: "little-bites", title: "Little Bites", year: "2024", image: "aflam/18.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-little-bites-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Horror & Mystery", desc: "A terrifying tale of survival against unnatural entities." },
    { id: "wrongful-death", title: "Wrongful Death", year: "2023", image: "aflam/19.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-wrongful-death-2023-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Horror & Mystery", desc: "A man tries to uncover the truth behind his son's mysterious death." },
    { id: "quiet-place-day-one", title: "A Quiet Place: Day One", year: "2024", image: "aflam/20.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-a-quiet-place-day-one-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Horror & Mystery", desc: "Experience the day the world went quiet." },
    { id: "joker-2019", title: "Joker", year: "2019", image: "aflam/21.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-joker-2019-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Trending Now", desc: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society." },
    { id: "di-san-ge", title: "Di San Ge Xian Yi Ren", year: "2024", image: "aflam/22.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-di-san-ge-xian-yi-ren-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "A brilliant detective faces a complex web of deceit." },
    { id: "rescue-ones-own", title: "Rescue on One's Own", year: "2024", image: "aflam/23.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-rescue-on-ones-own-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Action & Thriller", desc: "A thrilling rescue mission against all odds." },
    { id: "legend-meng-po", title: "The Legend of Meng Po", year: "2024", image: "aflam/24.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-the-legend-of-meng-po-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Trending Now", desc: "A mythical journey of love and sacrifice in the underworld." },
    { id: "samvidhan", title: "Samvidhan", year: "2024", image: "aflam/25.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-sianviathan-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Trending Now", desc: "A deep dive into the creation of the Constitution." },
    { id: "love-death-cat", title: "Love Death and Cat", year: "2024", image: "aflam/26.jpg", link: "https://web2.topcinema.cam/%d9%81%d9%8a%d9%84%d9%85-love-death-and-cat-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", category: "Horror & Mystery", desc: "A surreal anthology involving love, mortality, and felines." }
];

let watchlist = JSON.parse(localStorage.getItem('moviesWatchlist')) || [];
let currentMovie = null;

document.addEventListener("DOMContentLoaded", function () {
    // 1. Init Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    // 2. Remove Loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1000);

    // 3. Render Categories
    renderCategories();

    // 4. Setup Event Listeners
    setupEventListeners();
});

function createMovieCard(movie) {
    const div = document.createElement('div');
    div.classList.add('movie');
    div.innerHTML = `<img src="${movie.image}" alt="${movie.title}" loading="lazy">`;
    div.addEventListener('click', () => openModal(movie));
    return div;
}

function renderCategories() {
    const container = document.getElementById('movies-container');
    container.innerHTML = ''; // Clear container

    // Get unique categories
    const categories = [...new Set(movies.map(m => m.category))];

    categories.forEach(cat => {
        // Create Section
        const section = document.createElement('div');
        section.classList.add('category-section');
        
        const title = document.createElement('div');
        title.classList.add('section-title');
        title.innerHTML = `<h2>${cat}</h2>`;
        
        const row = document.createElement('div');
        row.classList.add('category-row');

        // Filter movies for this category
        const categoryMovies = movies.filter(m => m.category === cat);
        categoryMovies.forEach(movie => {
            row.appendChild(createMovieCard(movie));
        });

        section.appendChild(title);
        section.appendChild(row);
        container.appendChild(section);
    });
}

function renderGrid(moviesArray, containerId) {
    const grid = document.getElementById(containerId);
    grid.innerHTML = '';
    
    if (moviesArray.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-secondary); text-align: center; width: 100%;">No movies found.</p>';
        return;
    }

    moviesArray.forEach(movie => {
        grid.appendChild(createMovieCard(movie));
    });
}

function setupEventListeners() {
    // Search Functionality
    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');
    const heroSwiper = document.getElementById('hero-swiper');
    const searchResultsContainer = document.getElementById('search-results-container');
    const watchlistContainer = document.getElementById('watchlist-container');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length > 0) {
            heroSwiper.style.display = 'none';
            moviesContainer.style.display = 'none';
            watchlistContainer.style.display = 'none';
            searchResultsContainer.style.display = 'block';
            
            const filtered = movies.filter(m => m.title.toLowerCase().includes(query) || m.year.includes(query));
            renderGrid(filtered, 'search-grid');
        } else {
            heroSwiper.style.display = 'block';
            moviesContainer.style.display = 'block';
            searchResultsContainer.style.display = 'none';
            watchlistContainer.style.display = 'none';
        }
    });

    // Watchlist Toggle
    const watchlistBtn = document.getElementById('watchlist-btn');
    watchlistBtn.addEventListener('click', () => {
        if (watchlistContainer.style.display === 'block') {
            // Go back home
            heroSwiper.style.display = 'block';
            moviesContainer.style.display = 'block';
            watchlistContainer.style.display = 'none';
            searchResultsContainer.style.display = 'none';
            searchInput.value = '';
            watchlistBtn.classList.remove('active');
        } else {
            // Show watchlist
            heroSwiper.style.display = 'none';
            moviesContainer.style.display = 'none';
            searchResultsContainer.style.display = 'none';
            watchlistContainer.style.display = 'block';
            searchInput.value = '';
            watchlistBtn.classList.add('active');
            
            const watchlistedMovies = movies.filter(m => watchlist.includes(m.id));
            renderGrid(watchlistedMovies, 'watchlist-grid');
        }
    });

    // Logo click to go home
    document.getElementById('home-logo').addEventListener('click', () => {
        heroSwiper.style.display = 'block';
        moviesContainer.style.display = 'block';
        watchlistContainer.style.display = 'none';
        searchResultsContainer.style.display = 'none';
        searchInput.value = '';
        watchlistBtn.classList.remove('active');
    });

    // Modal Close
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('movie-modal').addEventListener('click', (e) => {
        if (e.target.id === 'movie-modal') closeModal();
    });

    // Modal Buttons
    document.getElementById('modal-watch-btn').addEventListener('click', () => {
        if (currentMovie && currentMovie.link) {
            window.open(currentMovie.link, '_blank');
        }
    });

    document.getElementById('modal-fav-btn').addEventListener('click', () => {
        if (!currentMovie) return;
        
        if (watchlist.includes(currentMovie.id)) {
            // Remove
            watchlist = watchlist.filter(id => id !== currentMovie.id);
            document.getElementById('modal-fav-btn').classList.remove('active');
            document.getElementById('modal-fav-btn').innerHTML = '<i class="fa-regular fa-heart"></i> Add to Watchlist';
        } else {
            // Add
            watchlist.push(currentMovie.id);
            document.getElementById('modal-fav-btn').classList.add('active');
            document.getElementById('modal-fav-btn').innerHTML = '<i class="fa-solid fa-heart"></i> Remove from Watchlist';
        }
        localStorage.setItem('moviesWatchlist', JSON.stringify(watchlist));
        
        // Refresh watchlist view if it's currently open
        if (watchlistContainer.style.display === 'block') {
            const watchlistedMovies = movies.filter(m => watchlist.includes(m.id));
            renderGrid(watchlistedMovies, 'watchlist-grid');
        }
    });

    // Scroll to Top
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function openModal(movie) {
    currentMovie = movie;
    document.getElementById('modal-img').src = movie.image;
    document.getElementById('modal-title').innerText = `${movie.title} (${movie.year})`;
    document.getElementById('modal-category').innerText = movie.category;
    document.getElementById('modal-desc').innerText = movie.desc;
    
    const favBtn = document.getElementById('modal-fav-btn');
    if (watchlist.includes(movie.id)) {
        favBtn.classList.add('active');
        favBtn.innerHTML = '<i class="fa-solid fa-heart"></i> Remove from Watchlist';
    } else {
        favBtn.classList.remove('active');
        favBtn.innerHTML = '<i class="fa-regular fa-heart"></i> Add to Watchlist';
    }

    document.getElementById('movie-modal').classList.add('show');
}

function closeModal() {
    document.getElementById('movie-modal').classList.remove('show');
    currentMovie = null;
}