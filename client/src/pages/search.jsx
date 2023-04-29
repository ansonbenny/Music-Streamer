import React from "react";
import { Row, FIlterSearch, LoadMore } from "../components";

const Search = () => {
  return (
    <div className="container">
      <FIlterSearch />

      <Row
        title={"Artists"}
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
        title={"Musics"}
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
        isSingle
      />

      <LoadMore />
      {
        // show loadMore if artist or song if song or artist make row not single
      }
    </div>
  );
};

export default Search;
