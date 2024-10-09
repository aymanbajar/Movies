# Movies Carousel and Cards

This project is a simple movie display page that includes an interactive Swiper carousel at the top and a card-based movie gallery below. The page showcases a selection of movies with clickable images that link to their respective streaming pages.

## Features

- **Swiper Carousel**: A looping, auto-playing movie image carousel with navigation controls and pagination.
- **Movie Cards**: A grid of movie posters, each of which can be clicked to view more information about the movie on an external site.
- **Responsive Design**: The layout adapts to various screen sizes with a mobile-friendly design for smaller devices.

## Technologies Used

- **HTML**: The structure of the webpage.
- **CSS**: Custom styles to manage layout and design.
- **JavaScript**: To implement Swiper functionality and link movie images to external URLs.
- **Swiper.js**: A powerful, lightweight JavaScript library to create touch sliders.

## How to Run the Project

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/your-username/movies-carousel.git
    ```
2. Open the project folder and locate the `index.html` file.
3. Open `index.html` in any modern web browser to view the page.

## Project Structure


### External Libraries

- **Swiper.js**: Used for the carousel in the top section.
    - [Swiper.js Documentation](https://swiperjs.com/)
    - CDN used in this project: 
    ```html
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    ```

## Customization

- You can replace the movie images inside the `photos/` and `aflam/` folders with your own images.
- Update the image source paths in `index.html` to reflect your own images.
- Modify the `main.js` file to link movie posters to different URLs.

## Responsive Design

The project includes media queries to ensure that the layout works well on smaller devices. For instance:
- On mobile devices, the carousel adjusts to fit the screen width, and the navigation buttons are hidden.
- Movie cards adjust their layout to avoid horizontal scrolling on small screens.

## Future Enhancements

- Add more movies to the gallery.
- Improve accessibility by adding alt attributes to images.
- Add a search bar or filters for sorting movies by genre or release date.

## License

This project is open-source and free to use under the [MIT License](LICENSE).

---

**Happy watching!**
