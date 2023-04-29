import React from "react";
import { Carousel, Genres, Row, Recommended } from "../components";

const Home = () => {
  return (
    <div className="container">
      <Carousel
        title={"Featured"}
        data={[
          {
            title: "102 Dalmatians",
            year: 2000,
            cast: ["Glenn Close", "Gérard Depardieu", "Alice Evans"],
            genres: ["Comedy", "Family", "Crime"],
            href: "102_Dalmatians",
            extract:
              '102 Dalmatians is a 2000 American crime comedy film directed by Kevin Lima and produced by Edward S. Feldman and Walt Disney Pictures. The sequel to the 1996 film 101 Dalmatians, a live-action remake of the 1961 Disney animated film of the same name, it stars Glenn Close reprising her role as Cruella de Vil as she attempts to steal puppies for her "grandest" fur coat yet. Glenn Close and Tim McInnerny were the only two actors from the 1996 film to return for the sequel. The film received generally negative reviews from critics and was unable to achieve the box office success of its predecessor, although the film was nominated for the Academy Award for Best Costume Design.',
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-50.png",
            thumbnail_width: 220,
            thumbnail_height: 327,
          },
          {
            title: "28 Days",
            year: 2000,
            cast: ["Sandra Bullock", "Viggo Mortensen"],
            genres: ["Drama", "Comedy"],
            href: "28_Days_(film)",
            extract:
              "28 Days is a 2000 American comedy-drama film directed by Betty Thomas and written by Susannah Grant. Sandra Bullock stars as Gwen Cummings, a newspaper columnist obliged to enter rehabilitation for alcoholism. The film costars Viggo Mortensen, Dominic West, Elizabeth Perkins, Azura Skye, Steve Buscemi, and Diane Ladd.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-29.png",
            thumbnail_width: 238,
            thumbnail_height: 360,
          },
          {
            title: "3 Strikes",
            year: 2000,
            cast: ["Brian Hooks", "N'Bushe Wright"],
            genres: ["Comedy"],
            href: "3_Strikes_(film)",
            extract:
              "3 Strikes is a 2000 American comedy film written and directed by DJ Pooh, and starring Brian Hooks, N'Bushe Wright, Faizon Love and David Alan Grier. Despite some commercial success, it was negatively received by critics. The title refers to California's habitual offender law, whereby three convictions confer an automatic life sentence.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-27.png",
            thumbnail_width: 225,
            thumbnail_height: 333,
          },
          {
            title: "The 6th Day",
            year: 2000,
            cast: [
              "Arnold Schwarzenegger",
              "Robert Duvall",
              "Michael Rooker",
              "Tony Goldwyn",
              "Michael Rapaport",
              "Sarah Wynter",
              "Rodney Rowland",
              "Wendy Crewson",
              "Terry Crews",
            ],
            genres: ["Science Fiction", "Action"],
            href: "The_6th_Day",
            extract:
              "The 6th Day is a 2000 American science fiction action film directed by Roger Spottiswoode and starring Arnold Schwarzenegger, Tony Goldwyn, Michael Rapaport, and Robert Duvall. In the film, a family man of the future is illegally cloned by accident as part of a vast conspiracy involving a shady billionaire businessman, and is thrust into a struggle to clear his name and protect his family from the conspirators who seek to keep the cloning a secret. The title refers to the Judeo-Christian Genesis creation narrative, where God created mankind on the sixth day. The film was Terry Crews' acting debut.",
            thumbnail:
              "http://music.flatfull.com/waveme/wp-content/uploads/sites/2/2020/09/Artboard-30.png",
            thumbnail_width: 257,
            thumbnail_height: 387,
          },
          {
            title: "Across the Line",
            year: 2000,
            cast: ["Brad Johnson", "Adrienne Barbeau", "Brian Bloom"],
            genres: ["Thriller", "Western"],
            href: "Across_the_Line_(2000_film)",
            extract:
              'Across the Line is a 2000 American Neo-Western film directed by Martin Spottl and starring Brad Johnson and Sigal Erez. Johnson plays a small-town Texas sheriff who falls for an illegal immigrant (Erez) who witnessed a murder on the Mexican border. While not an overtly political film, Across the Line portrays illegal immigrants in a generally positive light and dramatizes their motivations and problems from a sympathetic point of view. In La Opinion Jean Rodriguez Flores wrote, "The film Across the Line isn\'t just about the difficulties of crossing illegally into the United States, but it also reflects the tragedy of hundreds of people who are forced to leave their families for the "promised land." Some critics praised the film for its emotional intensity, authenticity, and integrity, but others questioned it for turning the plight of illegal immigrants into mainstream entertainment. Independently financed and produced, Across the Line was distributed by Lionsgate Entertainment.',
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/4/49/Across_the_Line.jpg",
            thumbnail_width: 246,
            thumbnail_height: 345,
          },
          {
            title: "Adventures in Wild California",
            year: 2000,
            cast: ["Jimmy Smits", "(Narrator)"],
            genres: ["Documentary"],
            href: "Adventures_in_Wild_California",
            extract:
              "Adventures in Wild California is a documentary film showcasing the scenery and extreme sports found in California. It is narrated by Jimmy Smits and was released to IMAX theaters in 2000. The film is directed by Greg MacGillivray and features songs by musician Lindsey Buckingham.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/e/e9/Adventuresinwildcalifornia.jpg",
            thumbnail_width: 234,
            thumbnail_height: 425,
          },
          {
            title: "The Adventures of Rocky and Bullwinkle",
            year: 2000,
            cast: [
              "Rene Russo",
              "Jason Alexander",
              "Robert De Niro",
              "Piper Perabo",
              "June Foray",
              "Keith Scott",
            ],
            genres: ["Comedy", "Live Action", "Adventure", "Animated"],
            href: "The_Adventures_of_Rocky_and_Bullwinkle_(film)",
            extract:
              "The Adventures of Rocky and Bullwinkle is a 2000 American live-action/animated adventure slapstick comedy film directed by Des McAnuff and produced by Universal Pictures, based on the television cartoon of the same name by Jay Ward. Animated characters Rocky and Bullwinkle share the screen with live actors portraying Fearless Leader, Boris Badenov and Natasha Fatale along with Randy Quaid, Piper Perabo, Kenan Thompson and Kel Mitchell. June Foray reprised her role as Rocky, while Keith Scott voiced Bullwinkle and the film's narrator. It also features cameo appearances by performers including James Rebhorn, Paget Brewster, Janeane Garofalo, John Goodman, David Alan Grier, Don Novello, Jon Polito, Carl Reiner, Whoopi Goldberg, Max Grodenchik, Norman Lloyd, Jonathan Winters and Billy Crystal. The film follows a young rookie FBI agent named Karen Sympathy enlisting the help of Rocky and Bullwinkle to stop Boris, Natasha, and Fearless Leader from taking over the United States.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/7/78/Adventuresofrockyandbullwinklemovieposter.jpg",
            thumbnail_width: 269,
            thumbnail_height: 370,
          },
        ]}
      />
      <Recommended
        data={[
          {
            title: "Aquaman and the Lost Kingdom",
            year: 2023,
            cast: [
              "Jason Momoa",
              "Amber Heard",
              "Willem Dafoe",
              "Patrick Wilson",
              "Dolph Lundgren",
              "Yahya Abdul-Mateen II",
              "Temuera Morrison",
              "Nicole Kidman",
            ],
            genres: ["Superhero"],
            href: "Aquaman_and_the_Lost_Kingdom",
            extract:
              "Aquaman and the Lost Kingdom is an upcoming American superhero film based on the DC Comics character Aquaman. Produced by DC Studios, the Safran Company, and Atomic Monster Productions, and set for distribution by Warner Bros. Pictures, it is intended to be the sequel to Aquaman (2018), and the 15th and final installment in the DC Extended Universe (DCEU). The film is directed by James Wan from a screenplay written by David Leslie Johnson-McGoldrick, and stars Jason Momoa as Arthur Curry / Aquaman alongside Amber Heard, Willem Dafoe, Patrick Wilson, Dolph Lundgren, Yahya Abdul-Mateen II, Temuera Morrison, and Nicole Kidman.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aquaman_and_the_Lost_Kingdom_logo.jpg/320px-Aquaman_and_the_Lost_Kingdom_logo.jpg",
            thumbnail_width: 320,
            thumbnail_height: 163,
          },
          {
            title: "The Hunger Games: The Ballad of Songbirds and Snakes",
            year: 2023,
            cast: [
              "Tom Blyth",
              "Rachel Zegler",
              "Josh Andrés Rivera",
              "Hunter Schafer",
              "Jason Schwartzman",
              "Burn Gorman",
              "Peter Dinklage",
              "Viola Davis",
            ],
            genres: ["Action", "Science Fiction"],
            href: "The_Hunger_Games:_The_Ballad_of_Songbirds_and_Snakes",
            extract:
              "The Hunger Games: The Ballad of Songbirds and Snakes is an upcoming American science fiction action film directed by Francis Lawrence from a screenplay by Michael Arndt and Michael Lesslie, based on the 2020 novel The Ballad of Songbirds and Snakes by Suzanne Collins. It is the fifth installment in The Hunger Games film series, serving as a prequel to The Hunger Games (2012). The film stars Tom Blyth, Rachel Zegler, Josh Andrés Rivera, Hunter Schafer, Jason Schwartzman, Burn Gorman, Peter Dinklage, and Viola Davis. Set 64 years before the first film, it follows the origins of Coriolanus Snow (Blyth) and his relationship with a young Hunger Games tribute Lucy Gray Baird (Zegler), which lead him on the path to becoming the tyrannical leader of Panem.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/b/b5/Hunger_games_the_ballad_of_songbirds_and_snakes.png",
            thumbnail_width: 255,
            thumbnail_height: 393,
          },
          {
            title: "Trolls Band Together",
            year: 2023,
            cast: [
              "Anna Kendrick",
              "Justin Timberlake",
              "Kenan Thompson",
              "Kunal Nayyar",
              "Camila Cabello",
              "Troye Sivan",
              "Kid Cudi",
              "Andrew Rannells",
              "Amy Schumer",
              "Daveed Diggs",
              "RuPaul",
              "Zosia Mamet",
            ],
            genres: ["Animated", "Comedy", "Musical"],
            href: "Trolls_Band_Together",
            extract:
              "Trolls Band Together is an upcoming American computer-animated musical comedy film produced by DreamWorks Animation and distributed by Universal Pictures, based on the Good Luck Trolls dolls from Thomas Dam. It is directed by Walt Dohrn and co-directed by Tim Heitz, from a screenplay by Elizabeth Tippet and the writing team of Jonathan Aibel and Glenn Berger. The film serves as the sequel to Trolls World Tour (2020) and the third installment in the Trolls franchise. Anna Kendrick, Justin Timberlake, Zooey Deschanel, Christopher Mintz-Plasse, Icona Pop, Anderson .Paak, Ron Funches, Kenan Thompson, Kunal Nayyar, and Dohrn reprise their voice roles from its predecessors, with newcomers Eric André, Kid Cudi, Daveed Diggs, Troye Sivan, Camila Cabello, Amy Schumer, Andrew Rannells, RuPaul, and Zosia Mamet joining the ensemble voice cast. In the film, Poppy (Kendrick) and Branch (Timberlake), who are officially a couple, attempt to rescue Floyd (Sivan) while reuniting Branch's brothers after the boyband phenomenon, BroZone, was disbanded.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/b/bd/Trolls3film.jpg",
            thumbnail_width: 251,
            thumbnail_height: 397,
          },
          {
            title: "The Marvels",
            year: 2023,
            cast: [
              "Brie Larson",
              "Teyonah Parris",
              "Iman Vellani",
              "Zawe Ashton",
              "Samuel L. Jackson",
            ],
            genres: ["Superhero"],
            href: "The_Marvels",
            extract:
              "The Marvels is an upcoming American superhero film based on Marvel Comics featuring the characters Carol Danvers / Captain Marvel, Kamala Khan / Ms. Marvel, and Monica Rambeau. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the sequel to the film Captain Marvel (2019), a continuation of the television series Ms. Marvel (2022), and the 33rd film in the Marvel Cinematic Universe (MCU). The film is directed by Nia DaCosta from a screenplay she co-wrote with Megan McDonnell, Elissa Karasik, and Zeb Wells. It stars Brie Larson as Carol Danvers, Iman Vellani as Kamala Khan, and Teyonah Parris as Monica Rambeau, alongside Samuel L. Jackson. In the film, Danvers, Khan, and Rambeau begin swapping places with each other every time they use their powers and must team-up.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/7/7a/The_Marvels_poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 384,
          },
          {
            title: "Chicken Run: Dawn of the Nugget",
            year: 2023,
            cast: [
              "Zachary Levi",
              "Thandiwe Newton",
              "Bella Ramsey",
              "Romesh Ranganathan",
              "David Bradley",
              "Daniel Mays",
              "Jane Horrocks",
              "Imelda Staunton",
              "Lynn Ferguson",
              "Nick Mohammed",
            ],
            genres: ["Adventure", "Animated", "Comedy"],
            href: "Chicken_Run:_Dawn_of_the_Nugget",
            extract:
              "Chicken Run is a 2000 stop-motion animated adventure comedy film produced by Pathé and Aardman Animations in partnership with DreamWorks Animation. Aardman's first feature-length film, it was directed by Peter Lord and Nick Park from a screenplay by Karey Kirkpatrick and based on an original story by Lord and Park. The film stars the voices of Julia Sawalha, Mel Gibson, Tony Haygarth, Miranda Richardson, Phil Daniels, Lynn Ferguson, Timothy Spall, Imelda Staunton, and Benjamin Whitrow. The plot centres on a group of British anthropomorphic chickens who see an American rooster named Rocky Rhodes as their only hope to escape the farm when their owners want to turn them into meat pies.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Chicken_run_ver1.jpg/320px-Chicken_run_ver1.jpg",
            thumbnail_width: 320,
            thumbnail_height: 228,
          },
          {
            title: "Kraven the Hunter",
            year: 2023,
            cast: [
              "Aaron Taylor-Johnson",
              "Ariana DeBose",
              "Alessandro Nivola",
              "Fred Hechinger",
              "Levi Miller",
              "Christopher Abbott",
              "Russell Crowe",
            ],
            genres: ["Superhero"],
            href: "Kraven_the_Hunter_(film)",
            extract:
              "Kraven the Hunter is an upcoming American superhero film based on the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is intended to be the fourth film in Sony's Spider-Man Universe (SSU). The film is being directed by J. C. Chandor from a screenplay by Art Marcum & Matt Holloway and Richard Wenk, and stars Aaron Taylor-Johnson in the title role alongside Ariana DeBose and Fred Hechinger.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kraven_the_Hunter_%28film%29.jpg/320px-Kraven_the_Hunter_%28film%29.jpg",
            thumbnail_width: 320,
            thumbnail_height: 107,
          },
        ]}
      />
      <Row
        title={"New Featured"}
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

      <Row
        title={"Top Artists"}
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
        ]}
        isSingle
        isRound
      />
      <Row
        title={"New music"}
        data={[
          {
            title: "Winter Day Dreams ft. Franny's Feet and Olivia",
            year: 2010,
            cast: [
              "Franny's Feet",
              ")",
              "Phoebe McAuley",
              "George Buza",
              "Katherine Crimi",
              "Emily Gray",
            ],
            genres: ["Animated", "Family"],
            href: "Franny%27s_Feet",
            extract:
              "Franny's Feet is a Canadian animated children's television series created by writer Cathy Moss and fellow Susin Nielsen. The series was produced by Decode Entertainment, in association with Channel Five Broadcasting Limited. The series follows the adventures of Frances \"Franny\" Fantootsie as she tries on a new shoe and travels to different countries.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/commons/2/23/Frannys_Feet_Logo.png",
            thumbnail_width: 200,
            thumbnail_height: 108,
          },
          {
            title: "Sweetgrass",
            year: 2010,
            cast: [],
            genres: ["Documentary"],
            href: "Sweetgrass_(film)",
            extract:
              "Sweetgrass is a 2009 documentary film that follows modern-day shepherds as they lead their flocks of sheep up into Montana's Absaroka-Beartooth mountains for summer pasture. It was directed by Lucien Castaing-Taylor, a Harvard anthropologist, and produced by his wife Ilisa Barbash. The title derives from Sweet Grass County, one of several in which the film was shot.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/6/62/SweetgrassPoster.jpg",
            thumbnail_width: 260,
            thumbnail_height: 384,
          },
          {
            title: "Daybreakers",
            year: 2010,
            cast: [
              "Ethan Hawke",
              "Willem Dafoe",
              "Sam Neill",
              "Claudia Karvan",
              "Michael Dorman",
              "Isabel Lucas",
              "Vince Colosimo",
              "Jay Laga'aia",
            ],
            genres: ["Action", "Horror", "Science Fiction"],
            href: "Daybreakers",
            extract:
              'Daybreakers is a 2009 science-fiction action horror film written and directed by Michael and Peter Spierig. The film takes place in a futuristic world overrun by vampires, and centers around a vampiric corporation which sets out to capture and farm the remaining humans while researching a substitute for human blood. Ethan Hawke plays vampire hematologist Edward Dalton, whose work is interrupted by human survivors led by former vampire "Elvis", who has a cure that can save the human species.',
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/b/b4/Daybreakers_ver2.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "Leap Year",
            year: 2010,
            cast: [
              "Amy Adams",
              "Matthew Goode",
              "Adam Scott",
              "John Lithgow",
              "Kaitlin Olson",
              "Noel O'Donovan",
              "Tony Rohr",
              "Pat Laffan",
              "Alan Devlin",
              "Ian McElhinney",
              "Vincenzo Nicoli",
              "Flaminia Cinque",
              "Peter O'Meara",
            ],
            genres: ["Comedy", "Romance"],
            href: "Leap_Year_(2010_film)",
            extract:
              "Leap Year is a 2010 romantic comedy directed by Anand Tucker and written by Harry Elfont and Deborah Kaplan. Leap Year stars Amy Adams and Matthew Goode.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/d/da/Leap_year_poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "Youth in Revolt",
            year: 2010,
            cast: [
              "Michael Cera",
              "Portia Doubleday",
              "Justin Long",
              "Steve Buscemi",
              "Ray Liotta",
              "Jean Smart",
              "Zach Galifianakis",
              "Erik Knudsen",
              "Adhir Kalyan",
              "Fred Willard",
              "Ari Graynor",
              "Rooney Mara",
              "Jade Fusco",
              "M. Emmet Walsh",
              "Mary Kay Place",
              "Jonathan Bradford Wright",
              "Michael Collins",
            ],
            genres: ["Comedy", "Drama", "Romance"],
            href: "Youth_in_Revolt_(film)",
            extract:
              "Youth in Revolt is a 2009 American romantic comedy-drama film directed by Miguel Arteta and written by Gustin Nash. Based on C.D. Payne's epistolary novel of the same name, the film stars Michael Cera and Portia Doubleday, with Justin Long, Ray Liotta, and Steve Buscemi in supporting roles.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/9/94/Youth_in_Revolt_Poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "B*tch Slap",
            year: 2010,
            cast: [
              "Julia Voth",
              "Erin Cummings",
              "America Olivo",
              "Ron Melendez",
              "William Gregory Lee",
              "Minae Noji",
              "Michael Hurst",
            ],
            genres: ["Action"],
            href: "Bitch_Slap",
            extract:
              "Bitch Slap is a 2009 American action film directed by Rick Jacobson and starring Julia Voth, Erin Cummings, America Olivo and Michael Hurst, with cameos by Lucy Lawless, Kevin Sorbo, and Renee O'Connor.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/0/03/Bitch_slap_poster.jpg",
            thumbnail_width: 260,
            thumbnail_height: 383,
          },
          {
            title: "Crazy on the Outside",
            year: 2010,
            cast: [
              "Tim Allen",
              "Sigourney Weaver",
              "Ray Liotta",
              "J.K. Simmons",
              "Julie Bowen",
              "Kelsey Grammer",
              "Jeanne Tripplehorn",
              "Kenton Duty",
              "Daniel Booko",
              "Karle Warren",
              "Robert Baker",
              "Casey Sander",
              "Jon Gries",
              "Malcolm Goodwin",
              "Rocky LaPorte",
              "Meeghan Holaway",
            ],
            genres: ["Comedy"],
            href: "Crazy_on_the_Outside",
            extract:
              "Crazy on the Outside is a 2010 American comedy film starring and directed by Tim Allen. The film marks Allen's feature film directorial debut, and is notable for reuniting Allen with co-stars from many of his previous films.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/5/56/Crazy_on_the_outside_poster.jpg",
            thumbnail_width: 263,
            thumbnail_height: 379,
          },
          {
            title: "Waiting for Armageddon",
            year: 2010,
            cast: [],
            genres: ["Documentary"],
            href: "Waiting_for_Armageddon",
            extract:
              "Waiting for Armageddon is a 2009 American documentary film that studies Armageddon theology and Christian eschatology. Some evangelicals in the United States believe that bible prophecy predicts events including the rapture and the Battle of Armageddon. The documentary raises questions regarding how this theology shapes United States and Middle East relations and how it may encourage an international holy war.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/7/77/Waitingforarmageddom.jpg",
            thumbnail_width: 200,
            thumbnail_height: 284,
          },
          {
            title: "Wonderful World",
            year: 2010,
            cast: [
              "Matthew Broderick",
              "Sanaa Lathan",
              "Michael K. Williams",
              "Jodelle Ferland",
              "Jesse Tyler Ferguson",
              "Ally Walker",
              "Philip Baker Hall",
            ],
            genres: ["Comedy", "Drama"],
            href: "Wonderful_World_(2009_film)",
            extract:
              "Wonderful World is a 2009 dark comedy-drama film written and directed by Joshua Goldin, and starring Matthew Broderick, Sanaa Lathan, Michael K. Williams, Jodelle Ferland, Jesse Tyler Ferguson, Ally Walker, and Philip Baker Hall. It is Goldin's directorial debut. The story revolves around a misanthropic, former children's folk singer having his life changed after his Senegalese roommate goes into a diabetic coma, and the sister who arrives to take care of him that he falls in love with.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/f/f7/Wonderful_world_poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "The Book of Eli",
            year: 2010,
            cast: [
              "Denzel Washington",
              "Gary Oldman",
              "Mila Kunis",
              "Ray Stevenson",
              "Jennifer Beals",
              "Evan Jones",
              "Joe Pingue",
              "Frances de la Tour",
              "Michael Gambon",
              "Tom Waits",
              "Chris Browning",
              "Malcolm McDowell",
            ],
            genres: ["Action", "Western"],
            href: "The_Book_of_Eli",
            extract:
              "The Book of Eli is a 2010 American post-apocalyptic neo-Western action film directed by the Hughes Brothers, written by Gary Whitta, and starring Denzel Washington, Gary Oldman, Mila Kunis, Ray Stevenson, and Jennifer Beals. The story revolves around Eli, a nomad in a post-apocalyptic world who seeks to deliver his copy of a mysterious book to a safe location on the West Coast of the United States. Filming began in February 2009 and took place in New Mexico.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/e/e3/Book_of_eli_poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "The Spy Next Door",
            year: 2010,
            cast: [
              "Jackie Chan",
              "Amber Valletta",
              "Magnús Scheving",
              "Billy Ray Cyrus",
              "George Lopez",
              "Lucas Till",
              "Katherine Boecher",
              "Madeline Carroll",
              "Alina Foley",
              "Will Shadley",
              "Jeff Chase",
              "Esodie Geiger",
            ],
            genres: ["Action", "Comedy", "Spy"],
            href: "The_Spy_Next_Door",
            extract:
              "The Spy Next Door is a 2010 American spy action comedy film directed by Brian Levant, written by Jonathan Bernstein, James Greer and Gregory Poirier, produced by Robert Simonds with music by David Newman. The film stars Jackie Chan, with a supporting cast of Amber Valletta, Magnús Scheving, Madeline Carroll, Will Shadley, Alina Foley, Billy Ray Cyrus and George Lopez. Filming started in late October 2008 in Rio Rancho, New Mexico and was finished in late December 2008. The film was released on January 15, 2010 in the United States by Lionsgate. The film was released on DVD, and Blu-ray on May 18, 2010. The film tributes Chan's films by showing clips, references and even referencing Chan's real life childhood. The film received negative reviews from critics and it earned $45.2 million on a $28 million budget.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/6/6d/Spy_next_door_ver2.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "44 Inch Chest",
            year: 2010,
            cast: [
              "Ray Winstone",
              "Ian McShane",
              "John Hurt",
              "Tom Wilkinson",
              "Stephen Dillane",
              "Joanne Whalley",
              "Melvil Poupaud",
              "Steven Berkoff",
              "Edna Doré",
              "Andy de la Tour",
              "Derek Lea",
            ],
            genres: ["Comedy", "Crime", "Drama"],
            href: "44_Inch_Chest",
            extract:
              "44 Inch Chest is a 2009 British crime comedy-drama film directed by Malcolm Venville in his directorial debut. The film stars Ray Winstone, Ian McShane, John Hurt, Tom Wilkinson, Stephen Dillane and Joanne Whalley. The film was released on 19 October 2009.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/44_inch_chest_poster.jpg/320px-44_inch_chest_poster.jpg",
            thumbnail_width: 320,
            thumbnail_height: 240,
          },
          {
            title: "Fish Tank",
            year: 2010,
            cast: [
              "Katie Jarvis",
              "Michael Fassbender",
              "Kierston Wareing",
              "Harry Treadaway",
              "Jason Maza",
              "Rebecca Griffiths",
            ],
            genres: ["Drama"],
            href: "Fish_Tank_(film)",
            extract:
              "Fish Tank is a 2009 British drama film written and directed by Andrea Arnold. The film is about Mia, a volatile and socially isolated 15-year-old, and her relationship with her mother's new boyfriend. Fish Tank was well-received and won the Jury Prize at the 2009 Cannes Film Festival. It also won the 2010 BAFTA for Best British Film. It was included in the BBC's The 21st Century's 100 greatest films, ranking at no. 65 on the list.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Fish_tank_poster.jpg/320px-Fish_tank_poster.jpg",
            thumbnail_width: 320,
            thumbnail_height: 239,
          },
          {
            title: "House of Numbers: Anatomy of an Epidemic",
            year: 2010,
            cast: [],
            genres: [],
            href: "House_of_Numbers:_Anatomy_of_an_Epidemic",
            extract:
              "House of Numbers: Anatomy of an Epidemic is a 2009 film directed, produced, and hosted by Brent Leung and described by him as an objective examination of the idea that HIV causes AIDS. The film argues that human immunodeficiency virus (HIV) is harmless and does not cause acquired immune deficiency syndrome (AIDS), a position known as AIDS denialism. The film's claims of impartiality have been widely rejected by scientists, and the film's claims about HIV and AIDS have been dismissed as pseudoscience and conspiracy theory masquerading as even-handed examination.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/7/76/House_of_Numbers_poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "Extraordinary Measures",
            year: 2010,
            cast: [
              "Brendan Fraser",
              "Harrison Ford",
              "Keri Russell",
              "Courtney B. Vance",
              "Meredith Droeger",
              "Diego Velazquez",
              "Sam M. Hall",
              "Patrick Bauchau",
              "Jared Harris",
              "Alan Ruck",
              "David Clennon",
              "Dee Wallace",
              "Ayanna Berkshire",
              "P.J. Byrne",
              "Andrea White",
              "G.J. Echternkamp",
              "Vu Pham",
              "Derek Webster",
              "John Crowley",
            ],
            genres: ["Drama"],
            href: "Extraordinary_Measures",
            extract:
              "Extraordinary Measures is a 2010 American medical drama film starring Brendan Fraser, Harrison Ford, and Keri Russell. It was the first film produced by CBS Films, the film division of CBS Corporation, who released the film on January 22, 2010. The film is about parents who form a biotechnology company to develop a drug to save the lives of their children, who have a life-threatening disease. The film is based on the true story of John and Aileen Crowley, whose children have Pompe's disease. The film was shot in St. Paul, Oregon; Portland, Oregon; Tualatin, Oregon; Wilsonville, Oregon; Manzanita, Oregon; Beaverton, Oregon, and Vancouver, Washington.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/5/59/Extraordinary_measures_poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383,
          },
          {
            title: "Legion",
            year: 2010,
            cast: [
              "Paul Bettany",
              "Lucas Black",
              "Tyrese Gibson",
              "Adrianne Palicki",
              "Charles S. Dutton",
              "Jon Tenney",
              "Kevin Durand",
              "Willa Holland",
              "Kate Walsh",
              "Dennis Quaid",
              "Jeanette Miller",
              "Doug Jones",
              "Josh Stamberg",
              "Yancey Arias",
            ],
            genres: ["Action", "Horror"],
            href: "Legion_(2010_film)",
            extract:
              "Legion is a 2010 American action horror film directed by Scott Stewart and co-written by Stewart and Peter Schink. The film stars Paul Bettany, Lucas Black, Tyrese Gibson, Adrianne Palicki, Kate Walsh, and Dennis Quaid. Sony Pictures Worldwide Acquisitions Group acquired most of the film's worldwide distribution rights, and the group opened the film in North America theatrically on January 22, 2010, through Screen Gems.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/f/f3/Legion_poster.jpg",
            thumbnail_width: 192,
            thumbnail_height: 286,
          },
          {
            title: "Tooth Fairy",
            year: 2010,
            cast: [
              "Dwayne Johnson",
              "Ashley Judd",
              "Julie Andrews",
              "Stephen Merchant",
              "Chase Ellison",
              "Ryan Sheckler",
              "Brendan Meyer",
              "Seth MacFarlane",
              "Brandon T. Jackson",
              "Ellie Harvie",
              "Barclay Hope",
              "Michael Daingerfield",
              "Alvin Sanders",
              "Peter Kelamis",
              "Billy Crystal",
              "Destiny Whitlock",
              "Josh Emerson",
            ],
            genres: ["Comedy", "Family", "Fantasy"],
            href: "Tooth_Fairy_(2010_film)",
            extract:
              "Tooth Fairy is a 2010 fantasy comedy family film directed by Michael Lembeck, produced by Jim Piddock, Jason Blum, Mark Ciardi and Gordon Gray, written by Lowell Ganz, Babaloo Mandel, Randi Mayem Singer, Joshua Sternin and Jennifer Ventimilia with music by George S. Clinton and starring Dwayne Johnson, Ashley Judd, and Julie Andrews.",
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/en/2/25/Tooth_fairy_promo_poster.jpg",
            thumbnail_width: 220,
            thumbnail_height: 303,
          },
        ]}
      />
      <Genres
        data={[
          "Action",
          "Adventure",
          "Animated",
          "Biography",
          "Comedy",
          "Crime",
          "Dance",
          "Disaster",
          "Documentary",
          "Drama",
        ]}
      />
    </div>
  );
};

export default Home;
