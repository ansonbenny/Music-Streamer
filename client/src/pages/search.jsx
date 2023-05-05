import React from "react";
import { Row, FIlterSearch, LoadMore } from "../components";

const Search = () => {
  // set page titile
  return (
    <div className="container">
      <FIlterSearch />

      <Row
        title={"Artists"}
        data={[
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
        isCarousel
        isRound
      />
      <Row
        title={"Musics"}
        data={[
          {
            title: "The Grudge",
            extract:
              "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/10/Artboard-61.png",
            thumbnail_width: 220,
            thumbnail_height: 326,
          },
          {
            title: "Underwater",
            extract:
              "Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/10/Artboard-58.png",
            thumbnail_width: 250,
            thumbnail_height: 398,
          },
          {
            title: "Like a Boss",
            extract:
              "Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-37.png",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "Three Christs",
            extract:
              "Three Christs, also known as State of Mind, is a 2017 American drama film directed, co-produced, and co-written by Jon Avnet and based on Milton Rokeach's nonfiction book The Three Christs of Ypsilanti. It screened in the Gala Presentations section at the 2017 Toronto International Film Festival. The film is also known as: Three Christs of Ypsilanti, The Three Christs of Ypsilanti, Three Christs of Santa Monica, and The Three Christs of Santa Monica.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-44.png",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "Inherit the Viper",
            extract:
              "Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen, in his feature directorial debut, from a screenplay by Andrew Crabtree. It stars Josh Hartnett, Margarita Levieva, Chandler Riggs, Bruce Dern, Valorie Curry, Owen Teague, and Dash Mihok.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-50.png",
            thumbnail_width: 236,
            thumbnail_height: 350,
          },
          {
            title: "The Sonata",
            extract:
              "The Sonata is a 2018 mystery thriller film, directed by Andrew Desmond, from a screenplay by Desmond and Arthur Morin. It stars Freya Tingley, Simon Abkarian, James Faulkner, Rutger Hauer, Matt Barber and James Kermack. It was released in the United States on January 10, 2020, by Screen Media Films. It grossed $146,595 at the box office and received mixed reviews from critics.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-49.png",
            thumbnail_width: 246,
            thumbnail_height: 350,
          },
          {
            title: "The Murder of Nicole Brown Simpson",
            year: 2020,
            extract:
              "The Murder of Nicole Brown Simpson is a 2019 American crime horror film directed by Daniel Farrands. The film is loosely based on the murder of Nicole Brown Simpson, presenting a version of events in which Brown Simpson is murdered by serial killer Glen Edward Rogers, and not by O. J. Simpson, her ex-husband and the primary suspect in the case. Though Mena Suvari's performance as Nicole Brown was praised, the film was panned by critics.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-3.png",
            thumbnail_width: 263,
            thumbnail_height: 380,
          },
          {
            title: "Bad Boys for Life",
            extract:
              "Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-51.png",
            thumbnail_width: 219,
            thumbnail_height: 325,
          },
          {
            title: "Dolittle",
            extract:
              "Dolittle is a 2020 American fantasy adventure film directed by Stephen Gaghan from a screenplay by Gaghan, Dan Gregor, and Doug Mand, based on a story by Thomas Shepherd. Dolittle is based on the title character created by Hugh Lofting and is primarily inspired by the author's second Doctor Dolittle book, The Voyages of Doctor Dolittle (1922). Robert Downey Jr. stars as the title character, alongside Antonio Banderas and Michael Sheen in live-action roles, with Emma Thompson, Rami Malek, John Cena, Kumail Nanjiani, Octavia Spencer, Tom Holland, Craig Robinson, Ralph Fiennes, Selena Gomez, and Marion Cotillard voicing an array of creatures.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-47.png",
            thumbnail_width: 220,
            thumbnail_height: 326,
          },
          {
            title: "A Fall from Grace",
            year: 2020,
            extract:
              "A Fall from Grace is a 2020 American thriller film produced, written, and directed by Tyler Perry and his first to be released by Netflix. The film follows a woman who finds a dangerous new love and the novice attorney who defends her in a sensational court case. This was the final film of actor Cicely Tyson before her death in January 2021.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-1.png",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "The Gentlemen",
            extract:
              "The Gentlemen is a 2019 action comedy film written, directed and produced by Guy Ritchie, who developed the story along with Ivan Atkinson and Marn Davies. The film stars Matthew McConaughey, Charlie Hunnam, Henry Golding, Michelle Dockery, Jeremy Strong, Eddie Marsan, Colin Farrell, and Hugh Grant. It follows an American cannabis wholesaler in England who is looking to sell his business, setting off a chain of blackmail and schemes to undermine him.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-28.png",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "The Turning",
            extract:
              "The Turning is a 2020 American gothic supernatural horror film directed by Floria Sigismondi and written by Carey W. Hayes and Chad Hayes. It is a modern adaptation of the 1898 ghost story The Turn of the Screw by Henry James. It stars Mackenzie Davis, Finn Wolfhard, Brooklynn Prince, and Joely Richardson, and follows a young governess in 1994 who is hired to watch over two children after their parents are killed.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-29.png",
            thumbnail_width: 251,
            thumbnail_height: 397,
          },
          {
            title: "The Last Full Measure",
            extract:
              "The Last Full Measure is a 2019 American war drama film written and directed by Todd Robinson. It follows the efforts of fictional Pentagon staffer Scott Huffman and many veterans to see the Medal of Honor awarded to William H. Pitsenbarger, a United States Air Force Pararescueman who flew in helicopter rescue missions during the Vietnam War to aid downed soldiers and pilots. Based on true events, the film stars Sebastian Stan, Christopher Plummer, William Hurt, Ed Harris, Samuel L. Jackson, Jeremy Irvine, and Peter Fonda. It was the final film appearance of Fonda, who died before the film’s release; and Plummer's final on screen appearance before his death in 2021, though it had filmed prior to Knives Out which was released before it.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-30.png",
            thumbnail_width: 256,
            thumbnail_height: 378,
          },
        ]}
        isCarousel
      />

      <LoadMore />
      {
        // show loadMore if artist or song if song or artist make row not single
      }
    </div>
  );
};

export default Search;
