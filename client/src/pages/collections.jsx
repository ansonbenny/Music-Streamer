import React, { useEffect } from "react";
import { Banner, Collections as CollectionsComp, Row } from "../components";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation, useParams } from "react-router-dom";

const Collections = ({ isArtist, isPlaylist }) => {
  // same page for saved playlist item

  const location = useLocation();

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    document.title = `Musicon`;

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  }, [location]);
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
            "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-50.png",
          thumbnail_width: 220,
          thumbnail_height: 326,
        }}
      />

      <CollectionsComp
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
      />

      <Row
        title={"Popular by avatar"}
        data={[
          {
            title: "Aquaman and the Lost Kingdom",
            extract:
              "Aquaman and the Lost Kingdom is an upcoming American superhero film based on the DC Comics character Aquaman. Produced by DC Studios, the Safran Company, and Atomic Monster Productions, and set for distribution by Warner Bros. Pictures, it is intended to be the sequel to Aquaman (2018), and the 15th and final installment in the DC Extended Universe (DCEU). The film is directed by James Wan from a screenplay written by David Leslie Johnson-McGoldrick, and stars Jason Momoa as Arthur Curry / Aquaman alongside Amber Heard, Willem Dafoe, Patrick Wilson, Dolph Lundgren, Yahya Abdul-Mateen II, Temuera Morrison, and Nicole Kidman.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/10/Artboard-62.png",
            thumbnail_width: 320,
            thumbnail_height: 163,
          },
          {
            title: "The Hunger Games: The Ballad of Songbirds and Snakes",
            extract:
              "The Hunger Games: The Ballad of Songbirds and Snakes is an upcoming American science fiction action film directed by Francis Lawrence from a screenplay by Michael Arndt and Michael Lesslie, based on the 2020 novel The Ballad of Songbirds and Snakes by Suzanne Collins. It is the fifth installment in The Hunger Games film series, serving as a prequel to The Hunger Games (2012). The film stars Tom Blyth, Rachel Zegler, Josh Andrés Rivera, Hunter Schafer, Jason Schwartzman, Burn Gorman, Peter Dinklage, and Viola Davis. Set 64 years before the first film, it follows the origins of Coriolanus Snow (Blyth) and his relationship with a young Hunger Games tribute Lucy Gray Baird (Zegler), which lead him on the path to becoming the tyrannical leader of Panem.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/10/Artboard-57.png",
            thumbnail_width: 255,
            thumbnail_height: 393,
          },
          {
            title: "Trolls Band Together",
            extract:
              "Trolls Band Together is an upcoming American computer-animated musical comedy film produced by DreamWorks Animation and distributed by Universal Pictures, based on the Good Luck Trolls dolls from Thomas Dam. It is directed by Walt Dohrn and co-directed by Tim Heitz, from a screenplay by Elizabeth Tippet and the writing team of Jonathan Aibel and Glenn Berger. The film serves as the sequel to Trolls World Tour (2020) and the third installment in the Trolls franchise. Anna Kendrick, Justin Timberlake, Zooey Deschanel, Christopher Mintz-Plasse, Icona Pop, Anderson .Paak, Ron Funches, Kenan Thompson, Kunal Nayyar, and Dohrn reprise their voice roles from its predecessors, with newcomers Eric André, Kid Cudi, Daveed Diggs, Troye Sivan, Camila Cabello, Amy Schumer, Andrew Rannells, RuPaul, and Zosia Mamet joining the ensemble voice cast. In the film, Poppy (Kendrick) and Branch (Timberlake), who are officially a couple, attempt to rescue Floyd (Sivan) while reuniting Branch's brothers after the boyband phenomenon, BroZone, was disbanded.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/10/Artboard-56.png",
            thumbnail_width: 251,
            thumbnail_height: 397,
          },
          {
            title: "The Marvels",
            extract:
              "The Marvels is an upcoming American superhero film based on Marvel Comics featuring the characters Carol Danvers / Captain Marvel, Kamala Khan / Ms. Marvel, and Monica Rambeau. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the sequel to the film Captain Marvel (2019), a continuation of the television series Ms. Marvel (2022), and the 33rd film in the Marvel Cinematic Universe (MCU). The film is directed by Nia DaCosta from a screenplay she co-wrote with Megan McDonnell, Elissa Karasik, and Zeb Wells. It stars Brie Larson as Carol Danvers, Iman Vellani as Kamala Khan, and Teyonah Parris as Monica Rambeau, alongside Samuel L. Jackson. In the film, Danvers, Khan, and Rambeau begin swapping places with each other every time they use their powers and must team-up.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-39.png",
            thumbnail_width: 259,
            thumbnail_height: 384,
          },
          {
            title: "Chicken Run: Dawn of the Nugget",
            extract:
              "Chicken Run is a 2000 stop-motion animated adventure comedy film produced by Pathé and Aardman Animations in partnership with DreamWorks Animation. Aardman's first feature-length film, it was directed by Peter Lord and Nick Park from a screenplay by Karey Kirkpatrick and based on an original story by Lord and Park. The film stars the voices of Julia Sawalha, Mel Gibson, Tony Haygarth, Miranda Richardson, Phil Daniels, Lynn Ferguson, Timothy Spall, Imelda Staunton, and Benjamin Whitrow. The plot centres on a group of British anthropomorphic chickens who see an American rooster named Rocky Rhodes as their only hope to escape the farm when their owners want to turn them into meat pies.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-1.png",
            thumbnail_width: 320,
            thumbnail_height: 228,
          },
          {
            title: "Kraven the Hunter",
            extract:
              "Kraven the Hunter is an upcoming American superhero film based on the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is intended to be the fourth film in Sony's Spider-Man Universe (SSU). The film is being directed by J. C. Chandor from a screenplay by Art Marcum & Matt Holloway and Richard Wenk, and stars Aaron Taylor-Johnson in the title role alongside Ariana DeBose and Fred Hechinger.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-22.png",
            thumbnail_width: 320,
            thumbnail_height: 107,
          },
        ]}
      />
    </div>
  );
};

export default Collections;
