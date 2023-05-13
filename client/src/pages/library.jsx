import React, { useLayoutEffect } from "react";
import { LibraryHead, Row } from "../components";

const Library = () => {

  useLayoutEffect(() => {
    document.title = `Musicon - Library`;
  }, []);

  return (
    <div className="container">
      <LibraryHead />
      <Row
        isLibrary
        data={[
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
            title: "The Grudge",
            extract:
              "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/10/Adam-Stefancik_avatar-200x200.jpg",
            thumbnail_width: 220,
            thumbnail_height: 326,
          },
          {
            title: "Underwater",
            extract:
              "Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/10/Daria-Shevtsova_avatar-200x200.jpg",
            thumbnail_width: 250,
            thumbnail_height: 398,
          },
          {
            title: "Like a Boss",
            extract:
              "Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/10/Jack-Orison_avatar-200x200.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "Three Christs",
            extract:
              "Three Christs, also known as State of Mind, is a 2017 American drama film directed, co-produced, and co-written by Jon Avnet and based on Milton Rokeach's nonfiction book The Three Christs of Ypsilanti. It screened in the Gala Presentations section at the 2017 Toronto International Film Festival. The film is also known as: Three Christs of Ypsilanti, The Three Christs of Ypsilanti, Three Christs of Santa Monica, and The Three Christs of Santa Monica.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/11/Marlene-Leppanen_avatar-200x200.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "Inherit the Viper",
            extract:
              "Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen, in his feature directorial debut, from a screenplay by Andrew Crabtree. It stars Josh Hartnett, Margarita Levieva, Chandler Riggs, Bruce Dern, Valorie Curry, Owen Teague, and Dash Mihok.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-49.png",
            thumbnail_width: 236,
            thumbnail_height: 350,
          },
          {
            title: "Underwater",
            extract:
              "Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-1.png",
            thumbnail_width: 250,
            thumbnail_height: 398,
          },
        ]}
        is
      />
    </div>
  );
};

export default Library;
