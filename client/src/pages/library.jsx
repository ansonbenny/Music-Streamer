import React from "react";
import { LibraryHead, Row } from "../components";

const Library = () => {
  return (
    <div className="container">
      <LibraryHead />
      <Row
        data={[
          {
            title: "The Grudge",
            year: 2020,
            cast: [
              "Andrea Riseborough",
              "Demián Bichir",
              "John Cho",
              "Betty Gilpin",
              "Lin Shaye",
              "Jacki Weaver",
            ],
            genres: ["Horror", "Supernatural"],
            href: "The_Grudge_(2020_film)",
            extract:
              "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
            thumbnail_width: 220,
            thumbnail_height: 326,
          },
          {
            title: "Underwater",
            year: 2020,
            cast: [
              "Kristen Stewart",
              "Vincent Cassel",
              "Jessica Henwick",
              "John Gallagher Jr.",
              "Mamoudou Athie",
              "T.J. Miller",
            ],
            genres: ["Action", "Horror", "Science Fiction"],
            href: "Underwater_(film)",
            extract:
              "Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
            thumbnail: null,
            thumbnail_width: 250,
            thumbnail_height: 398,
          },
          {
            title: "Like a Boss",
            year: 2020,
            cast: [
              "Tiffany Haddish",
              "Rose Byrne",
              "Salma Hayek",
              "Jennifer Coolidge",
              "Billy Porter",
            ],
            genres: ["Comedy"],
            href: "Like_a_Boss_(film)",
            extract:
              "Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "Three Christs",
            year: 2020,
            cast: [
              "Richard Gere",
              "Peter Dinklage",
              "Walton Goggins",
              "Bradley Whitford",
            ],
            genres: ["Drama"],
            href: "Three_Christs",
            extract:
              "Three Christs, also known as State of Mind, is a 2017 American drama film directed, co-produced, and co-written by Jon Avnet and based on Milton Rokeach's nonfiction book The Three Christs of Ypsilanti. It screened in the Gala Presentations section at the 2017 Toronto International Film Festival. The film is also known as: Three Christs of Ypsilanti, The Three Christs of Ypsilanti, Three Christs of Santa Monica, and The Three Christs of Santa Monica.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "Inherit the Viper",
            year: 2020,
            cast: [
              "Josh Hartnett",
              "Margarita Levieva",
              "Chandler Riggs",
              "Bruce Dern",
              "Owen Teague",
            ],
            genres: ["Crime", "Drama"],
            href: "Inherit_the_Viper",
            extract:
              "Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen, in his feature directorial debut, from a screenplay by Andrew Crabtree. It stars Josh Hartnett, Margarita Levieva, Chandler Riggs, Bruce Dern, Valorie Curry, Owen Teague, and Dash Mihok.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg",
            thumbnail_width: 236,
            thumbnail_height: 350,
          },
          {
            title: "The Sonata",
            year: 2020,
            cast: [
              "Freya Tingley",
              "Simon Abkarian",
              "Rutger Hauer",
              "James Faulkner",
            ],
            genres: ["Mystery", "Thriller"],
            href: "The_Sonata_(film)",
            extract:
              "The Sonata is a 2018 mystery thriller film, directed by Andrew Desmond, from a screenplay by Desmond and Arthur Morin. It stars Freya Tingley, Simon Abkarian, James Faulkner, Rutger Hauer, Matt Barber and James Kermack. It was released in the United States on January 10, 2020, by Screen Media Films. It grossed $146,595 at the box office and received mixed reviews from critics.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg",
            thumbnail_width: 246,
            thumbnail_height: 350,
          },
        ]}
      />
    </div>
  );
};

export default Library;
