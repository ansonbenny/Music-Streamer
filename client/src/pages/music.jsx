import React from "react";
import { Banner, Collections, Row } from "../components";

const Music = ({ isArtist }) => {
  return (
    <div className="container">
      <Banner
        data={{
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
        }}
      />

      {isArtist && (
        <Collections
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
                "The Grud",
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
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg",
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
            {
              title: "The Murder of Nicole Brown Simpson",
              year: 2020,
              cast: ["Mena Suvari", "Nick Stahl", "Taryn Manning"],
              genres: ["Crime", "Horror"],
              href: "The_Murder_of_Nicole_Brown_Simpson",
              extract:
                "The Murder of Nicole Brown Simpson is a 2019 American crime horror film directed by Daniel Farrands. The film is loosely based on the murder of Nicole Brown Simpson, presenting a version of events in which Brown Simpson is murdered by serial killer Glen Edward Rogers, and not by O. J. Simpson, her ex-husband and the primary suspect in the case. Though Mena Suvari's performance as Nicole Brown was praised, the film was panned by critics.",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg",
              thumbnail_width: 263,
              thumbnail_height: 380,
            },
            {
              title: "Bad Boys for Life",
              year: 2020,
              cast: [
                "Will Smith",
                "Martin Lawrence",
                "Vanessa Hudgens",
                "Alexander Ludwig",
                "Charles Melton",
                "Paola Núñez",
                "Kate del Castillo",
                "Nicky Jam",
                "Joe Pantoliano",
              ],
              genres: ["Action", "Comedy"],
              href: "Bad_Boys_for_Life",
              extract:
                "Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
              thumbnail_width: 219,
              thumbnail_height: 325,
            },
            {
              title: "Dolittle",
              year: 2020,
              cast: [
                "Robert Downey Jr.",
                "Antonio Banderas",
                "Michael Sheen",
                "Emma Thompson",
                "Rami Malek",
                "John Cena",
                "Kumail Nanjiani",
                "Octavia Spencer",
                "Tom Holland",
                "Craig Robinson",
                "Ralph Fiennes",
                "Selena Gomez",
                "Marion Cotillard",
              ],
              genres: ["Adventure", "Fantasy"],
              href: "Dolittle_(film)",
              extract:
                "Dolittle is a 2020 American fantasy adventure film directed by Stephen Gaghan from a screenplay by Gaghan, Dan Gregor, and Doug Mand, based on a story by Thomas Shepherd. Dolittle is based on the title character created by Hugh Lofting and is primarily inspired by the author's second Doctor Dolittle book, The Voyages of Doctor Dolittle (1922). Robert Downey Jr. stars as the title character, alongside Antonio Banderas and Michael Sheen in live-action roles, with Emma Thompson, Rami Malek, John Cena, Kumail Nanjiani, Octavia Spencer, Tom Holland, Craig Robinson, Ralph Fiennes, Selena Gomez, and Marion Cotillard voicing an array of creatures.",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png",
              thumbnail_width: 220,
              thumbnail_height: 326,
            },
            {
              title: "A Fall from Grace",
              year: 2020,
              cast: [
                "Crystal R. Fox",
                "Phylicia Rashad",
                "Bresha Webb",
                "Mehcad Brooks",
                "Cicely Tyson",
                "Tyler Perry",
              ],
              genres: ["Thriller"],
              href: "A_Fall_from_Grace",
              extract:
                "A Fall from Grace is a 2020 American thriller film produced, written, and directed by Tyler Perry and his first to be released by Netflix. The film follows a woman who finds a dangerous new love and the novice attorney who defends her in a sensational court case. This was the final film of actor Cicely Tyson before her death in January 2021.",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png",
              thumbnail_width: 259,
              thumbnail_height: 383,
            },
            {
              title: "The Gentlemen",
              year: 2020,
              cast: [
                "Matthew McConaughey",
                "Charlie Hunnam",
                "Henry Golding",
                "Michelle Dockery",
                "Jeremy Strong",
                "Eddie Marsan",
                "Colin Farrell",
                "Hugh Grant",
              ],
              genres: ["Action", "Comedy"],
              href: "The_Gentlemen_(2019_film)",
              extract:
                "The Gentlemen is a 2019 action comedy film written, directed and produced by Guy Ritchie, who developed the story along with Ivan Atkinson and Marn Davies. The film stars Matthew McConaughey, Charlie Hunnam, Henry Golding, Michelle Dockery, Jeremy Strong, Eddie Marsan, Colin Farrell, and Hugh Grant. It follows an American cannabis wholesaler in England who is looking to sell his business, setting off a chain of blackmail and schemes to undermine him.",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/en/0/06/The_Gentlemen_poster.jpg",
              thumbnail_width: 259,
              thumbnail_height: 383,
            },
            {
              title: "The Turning",
              year: 2020,
              cast: [
                "Mackenzie Davis",
                "Finn Wolfhard",
                "Brooklynn Prince",
                "Joely Richardson",
              ],
              genres: ["Horror", "Supernatural"],
              href: "The_Turning_(2020_film)",
              extract:
                "The Turning is a 2020 American gothic supernatural horror film directed by Floria Sigismondi and written by Carey W. Hayes and Chad Hayes. It is a modern adaptation of the 1898 ghost story The Turn of the Screw by Henry James. It stars Mackenzie Davis, Finn Wolfhard, Brooklynn Prince, and Joely Richardson, and follows a young governess in 1994 who is hired to watch over two children after their parents are killed.",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Turning_poster_2020.jpg",
              thumbnail_width: 251,
              thumbnail_height: 397,
            },
            {
              title: "The Last Full Measure",
              year: 2020,
              cast: [
                "Sebastian Stan",
                "Christopher Plummer",
                "William Hurt",
                "Ed Harris",
                "Samuel L. Jackson",
                "Peter Fonda",
                "LisaGay Hamilton",
                "Jeremy Irvine",
                "Diane Ladd",
                "Amy Madigan",
                "John Savage",
                "Bradley Whitford",
              ],
              genres: ["Drama", "War"],
              href: "The_Last_Full_Measure_(2019_film)",
              extract:
                "The Last Full Measure is a 2019 American war drama film written and directed by Todd Robinson. It follows the efforts of fictional Pentagon staffer Scott Huffman and many veterans to see the Medal of Honor awarded to William H. Pitsenbarger, a United States Air Force Pararescueman who flew in helicopter rescue missions during the Vietnam War to aid downed soldiers and pilots. Based on true events, the film stars Sebastian Stan, Christopher Plummer, William Hurt, Ed Harris, Samuel L. Jackson, Jeremy Irvine, and Peter Fonda. It was the final film appearance of Fonda, who died before the film’s release; and Plummer's final on screen appearance before his death in 2021, though it had filmed prior to Knives Out which was released before it.",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/en/9/9d/The_Last_Full_Measure_2019_poster.jpg",
              thumbnail_width: 256,
              thumbnail_height: 378,
            },
          ]}
        />
      )}

      <Row
        title={"Popular by avatar"}
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
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg",
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
          {
            title: "The Murder of Nicole Brown Simpson",
            year: 2020,
            cast: ["Mena Suvari", "Nick Stahl", "Taryn Manning"],
            genres: ["Crime", "Horror"],
            href: "The_Murder_of_Nicole_Brown_Simpson",
            extract:
              "The Murder of Nicole Brown Simpson is a 2019 American crime horror film directed by Daniel Farrands. The film is loosely based on the murder of Nicole Brown Simpson, presenting a version of events in which Brown Simpson is murdered by serial killer Glen Edward Rogers, and not by O. J. Simpson, her ex-husband and the primary suspect in the case. Though Mena Suvari's performance as Nicole Brown was praised, the film was panned by critics.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg",
            thumbnail_width: 263,
            thumbnail_height: 380,
          },
          {
            title: "Bad Boys for Life",
            year: 2020,
            cast: [
              "Will Smith",
              "Martin Lawrence",
              "Vanessa Hudgens",
              "Alexander Ludwig",
              "Charles Melton",
              "Paola Núñez",
              "Kate del Castillo",
              "Nicky Jam",
              "Joe Pantoliano",
            ],
            genres: ["Action", "Comedy"],
            href: "Bad_Boys_for_Life",
            extract:
              "Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
            thumbnail_width: 219,
            thumbnail_height: 325,
          },
          {
            title: "Dolittle",
            year: 2020,
            cast: [
              "Robert Downey Jr.",
              "Antonio Banderas",
              "Michael Sheen",
              "Emma Thompson",
              "Rami Malek",
              "John Cena",
              "Kumail Nanjiani",
              "Octavia Spencer",
              "Tom Holland",
              "Craig Robinson",
              "Ralph Fiennes",
              "Selena Gomez",
              "Marion Cotillard",
            ],
            genres: ["Adventure", "Fantasy"],
            href: "Dolittle_(film)",
            extract:
              "Dolittle is a 2020 American fantasy adventure film directed by Stephen Gaghan from a screenplay by Gaghan, Dan Gregor, and Doug Mand, based on a story by Thomas Shepherd. Dolittle is based on the title character created by Hugh Lofting and is primarily inspired by the author's second Doctor Dolittle book, The Voyages of Doctor Dolittle (1922). Robert Downey Jr. stars as the title character, alongside Antonio Banderas and Michael Sheen in live-action roles, with Emma Thompson, Rami Malek, John Cena, Kumail Nanjiani, Octavia Spencer, Tom Holland, Craig Robinson, Ralph Fiennes, Selena Gomez, and Marion Cotillard voicing an array of creatures.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png",
            thumbnail_width: 220,
            thumbnail_height: 326,
          },
          {
            title: "A Fall from Grace",
            year: 2020,
            cast: [
              "Crystal R. Fox",
              "Phylicia Rashad",
              "Bresha Webb",
              "Mehcad Brooks",
              "Cicely Tyson",
              "Tyler Perry",
            ],
            genres: ["Thriller"],
            href: "A_Fall_from_Grace",
            extract:
              "A Fall from Grace is a 2020 American thriller film produced, written, and directed by Tyler Perry and his first to be released by Netflix. The film follows a woman who finds a dangerous new love and the novice attorney who defends her in a sensational court case. This was the final film of actor Cicely Tyson before her death in January 2021.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "The Gentlemen",
            year: 2020,
            cast: [
              "Matthew McConaughey",
              "Charlie Hunnam",
              "Henry Golding",
              "Michelle Dockery",
              "Jeremy Strong",
              "Eddie Marsan",
              "Colin Farrell",
              "Hugh Grant",
            ],
            genres: ["Action", "Comedy"],
            href: "The_Gentlemen_(2019_film)",
            extract:
              "The Gentlemen is a 2019 action comedy film written, directed and produced by Guy Ritchie, who developed the story along with Ivan Atkinson and Marn Davies. The film stars Matthew McConaughey, Charlie Hunnam, Henry Golding, Michelle Dockery, Jeremy Strong, Eddie Marsan, Colin Farrell, and Hugh Grant. It follows an American cannabis wholesaler in England who is looking to sell his business, setting off a chain of blackmail and schemes to undermine him.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/0/06/The_Gentlemen_poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "The Turning",
            year: 2020,
            cast: [
              "Mackenzie Davis",
              "Finn Wolfhard",
              "Brooklynn Prince",
              "Joely Richardson",
            ],
            genres: ["Horror", "Supernatural"],
            href: "The_Turning_(2020_film)",
            extract:
              "The Turning is a 2020 American gothic supernatural horror film directed by Floria Sigismondi and written by Carey W. Hayes and Chad Hayes. It is a modern adaptation of the 1898 ghost story The Turn of the Screw by Henry James. It stars Mackenzie Davis, Finn Wolfhard, Brooklynn Prince, and Joely Richardson, and follows a young governess in 1994 who is hired to watch over two children after their parents are killed.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Turning_poster_2020.jpg",
            thumbnail_width: 251,
            thumbnail_height: 397,
          },
          {
            title: "The Last Full Measure",
            year: 2020,
            cast: [
              "Sebastian Stan",
              "Christopher Plummer",
              "William Hurt",
              "Ed Harris",
              "Samuel L. Jackson",
              "Peter Fonda",
              "LisaGay Hamilton",
              "Jeremy Irvine",
              "Diane Ladd",
              "Amy Madigan",
              "John Savage",
              "Bradley Whitford",
            ],
            genres: ["Drama", "War"],
            href: "The_Last_Full_Measure_(2019_film)",
            extract:
              "The Last Full Measure is a 2019 American war drama film written and directed by Todd Robinson. It follows the efforts of fictional Pentagon staffer Scott Huffman and many veterans to see the Medal of Honor awarded to William H. Pitsenbarger, a United States Air Force Pararescueman who flew in helicopter rescue missions during the Vietnam War to aid downed soldiers and pilots. Based on true events, the film stars Sebastian Stan, Christopher Plummer, William Hurt, Ed Harris, Samuel L. Jackson, Jeremy Irvine, and Peter Fonda. It was the final film appearance of Fonda, who died before the film’s release; and Plummer's final on screen appearance before his death in 2021, though it had filmed prior to Knives Out which was released before it.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/9/9d/The_Last_Full_Measure_2019_poster.jpg",
            thumbnail_width: 256,
            thumbnail_height: 378,
          },
        ]}
      />
    </div>
  );
};

export default Music;
