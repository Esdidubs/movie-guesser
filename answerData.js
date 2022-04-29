let answerData = [
    {
        title: 'The Shawshank Redemption',
        clue1: 'Year Released: 1994',
        clue2: 'Genre: Drama',
        clue3: 'Director: Frank Darabont',
        clue4: 'Tagline: Fear can hold you prisoner. Hope can set you free.',
        clue5: 'Characters: Andy Dufresne, Ellis Boyd Redding, Warden Norton',
        clue6: 'Stars: Tim Robbins, Morgan Freeman, Bob Gunton'
    },
    {
        title: 'The Godfather',
        clue1: 'Year Released: 1972',
        clue2: 'Genre: Crime, Drama',
        clue3: 'Director: Francis Ford Coppola',
        clue4: "Tagline: An offer you can't refuse",
        clue5: 'Characters: Michael, Sonny, Don Vito Corleone',
        clue6: 'Stars: Marlon Brando, Al Pacino, James Caan'
    },
    {
        title: 'The Dark Knight',
        clue1: 'Year Released: 2008',
        clue2: 'Genre: Action, Crime, Drama',
        clue3: 'Director: Christopher Nolan',
        clue4: 'Tagline: Why so serious?',
        clue5: 'Characters: Bruce Wayne, Harvey Dent, Joker',
        clue6: 'Stars: Christian Bale, Heath Ledger, Aaron Eckhart'
    },
    {
        title: '12 Angry Men',
        clue1: 'Year Released: 1957',
        clue2: 'Genre: Crime, Drama',
        clue3: 'Director: Sidney Lumet',
        clue4: 'Tagline: Life is in their hands -- Death is on their minds!',
        clue5: 'Characters: Juror 8, Juror 1, Juror 3',
        clue6: 'Stars: Henry Fonda, Lee J. Cobb, Martin Balsam'
    },
    {
        title: "Schindler's List",
        clue1: 'Year Released: 1993',
        clue2: 'Genre: Biography, Drama, History',
        clue3: 'Director: Steven Spielberg',
        clue4: 'Tagline: Whoever saves one life, saves the world entire.',
        clue5: 'Characters: ',
        clue6: 'Stars: Liam Neeson, Ralph Fiennes, Ben Kingsley'
    },
    {
        title: 'Pulp Fiction',
        clue1: 'Year Released: 1994',
        clue2: 'Genre: Crime, Drama',
        clue3: 'Director: Quentin Tarantino',
        clue4: "Tagline: Girls like me don't make invitations like this to just anyone!",
        clue5: 'Characters: Vincent Vega, Mia Wallace, Jules Winnfield',
        clue6: 'Stars: John Travolta, Uma Thurman, Samuel L Jackson'
    },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        clue1: 'Year Released: 2001',
        clue2: 'Genre: Action, Adventure, Drama',
        clue3: 'Director: Peter Jackson',
        clue4: 'Tagline: The Legend Comes to Life',
        clue5: 'Characters: Bilbo Baggins, Frodo, Gandalf',
        clue6: 'Stars: Elijah Wood, Ian McKellen, Orlando Bloom'
    }, 
    {
        title: 'The Good, the Bad and the Ugly',
        clue1: 'Year Released: 1966',
        clue2: 'Genre: Action, Western',
        clue3: 'Director: Sergio Leone',
        clue4: "Tagline: They formed an alliance of hate to steal a fortune in dead man's gold",
        clue5: 'Characters: Blondie, Tuco, Sentenza',
        clue6: 'Stars: Clint Eastwood, Eli Wallach, Lee Van Cleef'
    }, 
    {
        title: 'Forrest Gump',
        clue1: 'Year Released: 1994',
        clue2: 'Genre: Drama, Romance',
        clue3: 'Director: Robert Zemeckis',
        clue4: 'Tagline: The story of a lifetime.',
        clue5: 'Characters: Lieutenant Dan, Jenny Curran, Forrest',
        clue6: 'Stars: Tom Hanks, Robin Wright, Gary Sinise'
    },
    {
        title: 'Fight Club',
        clue1: 'Year Released: 1999',
        clue2: 'Genre: Drama',
        clue3: 'Director: David Fincher',
        clue4: 'Tagline: Mischief. Mayhem. Soap.',
        clue5: 'Characters: Tyler Durden, Narrator, Robert Paulsen',
        clue6: 'Stars: Brad Pitt, Edward Norton, Meat Loaf'
    },
    {
        title: 'Inception',
        clue1: 'Year Released: 2010',
        clue2: 'Genre: Action, Adventure, Sci-Fi',
        clue3: 'Director: Christopher Nolan',
        clue4: 'Tagline: The dream is real.',
        clue5: 'Characters: Cobb, Arthur, Ariadne',
        clue6: 'Stars: Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page'
    },
    {
        title: 'The Matrix',
        clue1: 'Year Released: 1999',
        clue2: 'Genre: Action, Sci-Fi',
        clue3: 'Director: Lana Wachowski, Lilly Wachowski',
        clue4: 'Tagline: Welcome to the real world',
        clue5: 'Characters: Neo, Morpheus, Trinity',
        clue6: 'Stars: Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss'
    },
    {
        title: 'Goodfellas',
        clue1: 'Year Released: 1990',
        clue2: 'Genre: Biography, Crime, Drama',
        clue3: 'Director: Martin Scorsese',
        clue4: 'Tagline: Three decades of life in the mafia',
        clue5: 'Characters: James Conway, Henry Hill, Tommy DeVito',
        clue6: 'Stars: Robert De Niro, Ray Liotta, Joe Pesci'
    },
    {
        title: "One Flew Over the Cuckoo's Nest",
        clue1: 'Year Released: 1975',
        clue2: 'Genre: Drama',
        clue3: 'Director: Milos Forman',
        clue4: "Tagline: If he's crazy, what does that make you?",
        clue5: 'Characters: R.P. McMurphy, Nurse Ratched, Ellis',
        clue6: 'Stars: Jack Nicholson, Louise Fletcher, Michael Berryman'
    },
    {
        title: 'Se7en',
        clue1: 'Year Released: 1995',
        clue2: 'Genre: Crime, Drama, Mystery',
        clue3: 'Director: David Fincher',
        clue4: 'Tagline: Gluttony * Greed * Sloth * Envy * Wrath * Pride * Lust',
        clue5: 'Characters: Somerset, Mills, John Doe',
        clue6: 'Stars: Morgan Freeman, Brad Pitt, Kevin Spacey'
    },
    {
        title: "It's a Wonderful Life",
        clue1: 'Year Released: 1946',
        clue2: 'Genre: Drama, Family, Fantasy',
        clue3: 'Director: Frank Capra',
        clue4: 'Tagline: Every time a bell rings, an angel gets its wings.',
        clue5: 'Characters: George Bailey, Mary Hatch, Mr. Potter',
        clue6: 'Stars: James Stewart, Donna Reed, Lionel Barrymore'
    },
    {
        title: 'The Silence of the Lambs',
        clue1: 'Year Released: 1991',
        clue2: 'Genre: Crime, Drama, Thriller',
        clue3: 'Director: Jonathan Demme',
        clue4: 'Tagline: To enter the mind of a killer she must challenge the mind of a madman.',
        clue5: 'Characters: Clarice Starling, Dr. Hannibal Lecter, Ardelia Mapp',
        clue6: 'Stars: Jodie Foster, Anthony Hopkins, Lawrence A. Bonney'
    },
    {
        title: 'Saving Private Ryan',
        clue1: 'Year Released: 1998',
        clue2: 'Genre: Drama, War',
        clue3: 'Director: Steven Spielberg',
        clue4: 'Tagline: The mission is a man.',
        clue5: 'Characters: Captain Miller, Sergeant Horvath, Private Reiben',
        clue6: 'Stars: Tom Hanks, Matt Damon, Tom Sizemore'
    },
    {
        title: 'The Green Mile',
        clue1: 'Year Released: 1999',
        clue2: 'Genre: Crime, Drama, Fantasy',
        clue3: 'Director: Frank Darabont',
        clue4: "Tagline: Walk a mile you'll never forget.",
        clue5: "Characters: Paul Edgecomb, John Coffey, 'Brutal' Howell",
        clue6: 'Stars: Tom Hanks, Michael Clarke Duncan, David Morse'
    },
    {
        title: 'Star Wars',
        clue1: 'Year Released: 1977',
        clue2: 'Genre: Action, Adventure, Fantasy',
        clue3: 'Director: George Lucas',
        clue4: 'Tagline: A long time ago in a galaxy far, far away...',
        clue5: 'Characters: Chief Jawa, Darth Vader, Han Solo',
        clue6: 'Stars: Mark Hamill, Harrison Ford, Carrie Fisher'
    },
    {
        title: 'Interstellar',
        clue1: 'Year Released: 2014',
        clue2: 'Genre: Adventure, Drama, Sci-Fi',
        clue3: 'Director: Christopher Nolan',
        clue4: 'Tagline: Mankind was born on Earth. It was never meant to die here.',
        clue5: 'Characters: Cooper, Brand, Murph',
        clue6: 'Stars: Matthew McConaughey, Anne Hathaway, Jessica Chastain'
    },
    {
        title: 'Terminator 2: Judgment Day',
        clue1: 'Year Released: 1991',
        clue2: 'Genre: Action, Sci-Fi',
        clue3: 'Director: James Cameron',
        clue4: "Tagline: This time he's back...for good!",
        clue5: 'Characters: Sarah Conner, John Conner, T-1000',
        clue6: 'Stars: Arnold Schwarzenegger, Linda Hamilton, Edward Furlong'
    },
    {
        title: 'Back to the Future',
        clue1: 'Year Released: 1985',
        clue2: 'Genre: Adventure, Comedy, Sci-Fi',
        clue3: 'Director: Robert Zemeckis',
        clue4: "Tagline: He's the only kid ever to get into trouble before he was born.",
        clue5: 'Characters: Marty McFly, Dr. Emmett Brown, Biff',
        clue6: 'Stars: Michael J. Fox, Christopher Lloyd, Lea Thompson'
    },
    {
        title: 'Spirited Away',
        clue1: 'Year Released: 2001',
        clue2: 'Genre: Animation, Adventure, Family',
        clue3: 'Director: Hayao Miyazaki',
        clue4: 'Tagline: The tunnel led Chihiro to a mysterious town.',
        clue5: 'Characters: Chihiro, Yubaba, Haku',
        clue6: 'Stars: Daveigh Chase, Suzanne Pleshette'
    },
    {
        title: 'Psycho',
        clue1: 'Year Released: 1960',
        clue2: 'Genre: Horror, Mystery, Thriller',
        clue3: 'Director: Alfred Hitchcock',
        clue4: 'Tagline: Exploring the blackness of the subconscious man',
        clue5: 'Characters: Norman Bates, Marion Crane, Sam Loomis',
        clue6: 'Stars: Anthony Perkins, Janet Leigh, Vera Miles'
    },
    {
        title: 'The Pianist',
        clue1: 'Year Released: 2002',
        clue2: 'Genre: Biography, Drama, Music',
        clue3: 'Director: Roman Polanski',
        clue4: 'Tagline: Music was his passion. Survival was his masterpiece.',
        clue5: 'Characters: Wladyslaw Szpilman, Captain Wilm Hosenfeld, Dorota',
        clue6: 'Stars: Adrien Brody, Thomas Kretschmann, Frank Finlay'
    },
    {
        title: 'Léon: The Professional',
        clue1: 'Year Released: 1994',
        clue2: 'Genre: Action, Crime, Drama',
        clue3: 'Director: Luc Besson',
        clue4: 'Tagline: If you want the job done right, hire a professional.',
        clue5: 'Characters: Mathilda, Stansfield, Leon',
        clue6: 'Stars: Jean Reno, Gary Oldman, Natalie Portman'
    },
    {
        title: 'Parasite',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Comedy, Drama, Horror',
        clue3: 'Director: Bong Joon Ho',
        clue4: 'Tagline: Act like you own the place',
        clue5: 'Characters: Ki Taek, Dong Ik, Yeon Kyo',
        clue6: 'Stars: Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho'
    },
    {
        title: 'The Lion King',
        clue1: 'Year Released: 1994',
        clue2: 'Genre: Animation, Adventure, Drama',
        clue3: 'Director: Roger Allers, Rob Minkoff',
        clue4: 'Tagline: The greatest adventure of all is finding our place in the circle of life.',
        clue5: 'Characters: Simba, Scar, Mufasa',
        clue6: 'Stars: Matthew Broderick, Jeremy Irons, James Earl Jones'
    },
    {
        title: 'American History X',
        clue1: 'Year Released: 1998',
        clue2: 'Genre: Drama',
        clue3: 'Director: Tony Kaye',
        clue4: 'Tagline: His father taught him to hate. His friends taught him rage. His enemies gave him hope.',
        clue5: 'Characters: Derek, Danny, Doris',
        clue6: "Stars: Edward Norton, Edward Furlong, Beverly D'Angelo"
    },
    {
        title: 'Gladiator',
        clue1: 'Year Released: 2000',
        clue2: 'Genre: Action, Adventure, Drama',
        clue3: 'Director: Ridley Scott',
        clue4: 'Tagline: What we do in life echoes in eternity',
        clue5: 'Characters: Maximus, Commodus, Lucilla',
        clue6: 'Stars: Russell Crowe, Joaquin Phoenix, Connie Nielsen'
    },
    {
        title: 'The Usual Suspects',
        clue1: 'Year Released: 1995',
        clue2: 'Genre: Crime, Drama, Mystery',
        clue3: 'Director: Bryan Singer',
        clue4: 'Tagline: Five Criminals. One Line Up. No Coincidence',
        clue5: 'Characters: Verbal, Keaton, McManus',
        clue6: 'Stars: Kevin Spacey, Gabriel Byrne, Chazz Palminteri'
    },
    {
        title: 'The Departed',
        clue1: 'Year Released: 2006',
        clue2: 'Genre: Crime, Drama, Thriller',
        clue3: 'Director: Martin Scorsese',
        clue4: 'Tagline: Lies. Betrayal. Sacrifice. How far will you take it?',
        clue5: 'Characters: Billy, Colin, Costello',
        clue6: 'Stars: Leonardo DiCaprio, Matt Damon, Jack Nicholson'
    },
    {
        title: 'The Prestige',
        clue1: 'Year Released: 2006',
        clue2: 'Genre: Drama, Mystery, Thriller',
        clue3: 'Director: Christopher Nolan',
        clue4: 'Tagline: A friendship that became a rivalry.',
        clue5: 'Characters: Alfred Borden, Robert Angier, Tesla',
        clue6: 'Stars: Christian Bale, Hugh Jackman, Scarlett Johansson'
    },
    {
        title: 'Casablanca',
        clue1: 'Year Released: 1942',
        clue2: 'Genre: Drama, Romance, War',
        clue3: 'Director: Michael Curtiz',
        clue4: 'Tagline: Where love cuts as deep as a dagger!',
        clue5: 'Characters: Rick Blaine, Ilsa Lund, Victor Laszlo',
        clue6: 'Stars: Humphrey Bogart, Ingrid Bergman, Paul Henreid'
    },
    {
        title: 'Whiplash',
        clue1: 'Year Released: 2014',
        clue2: 'Genre: Drama, Music',
        clue3: 'Director: Damien Chazelle',
        clue4: 'Tagline: The road to greatness can take you to the edge',
        clue5: 'Characters: Andrew, Fletcher, Nicole',
        clue6: 'Stars: Miles Teller, J.K. Simmons, Melissa Benoist'
    },
    {
        title: 'Rear Window',
        clue1: 'Year Released: 1954',
        clue2: 'Genre: Mystery, Thriller',
        clue3: 'Director: Alfred Hitchcock',
        clue4: 'Tagline: In deadly danger...because they saw too much!',
        clue5: 'Characters: L.B. Jefferies, Lisa Fremont, Tom Doyle',
        clue6: 'Stars: James Stewart, Grace Kelly, Wendell Corey'
    },
    {
        title: 'Alien',
        clue1: 'Year Released: 1979',
        clue2: 'Genre: Horror, Sci-Fi',
        clue3: 'Director: Ridley Scott',
        clue4: 'Tagline: In space no one can hear you scream.',
        clue5: 'Characters: Ripley, Dallas, Kane',
        clue6: 'Stars: Sigourney Weaver, Tom Skerritt, John Hurt'
    }, 
    {
        title: 'City Lights',
        clue1: 'Year Released: 1931',
        clue2: 'Genre: Comedy, Drama, Romance',
        clue3: 'Director: Charles Chaplin',
        clue4: 'Tagline: Too Funny For Words!',
        clue5: 'Characters: A Tramp, A Blind Girl, An Eccentric Millionaire',
        clue6: 'Stars: Charles Chaplin, Virginia Cherrill, Florence Lee'
    },
    {
        title: 'Memento',
        clue1: 'Year Released: 2000',
        clue2: 'Genre: Mystery, Thriller',
        clue3: 'Director: Christopher Nolan',
        clue4: 'Tagline: Some memories are best forgotten',
        clue5: 'Characters: Leonard, Natalie, Teddy',
        clue6: 'Stars: Guy Pearce, Carrie-Anne Moss, Joe Pantoliano'
    },
    {
        title: 'Apocalypse Now',
        clue1: 'Year Released: 1979',
        clue2: 'Genre: Drama, Mystery, War',
        clue3: 'Director: Francis Ford Coppola',
        clue4: 'Tagline: I love the smell of napalm in the morning.',
        clue5: 'Characters: Captain Benjamin L. Willard, Colonel Walter E. Kurtz, Lieutenant Colonel Bill Kilgore',
        clue6: 'Stars: Martin Sheen, Marlon Brando, Robert Duvall'
    },
    {
        title: 'Indiana Jones and the Raiders of the Lost Ark',
        clue1: 'Year Released: 1981',
        clue2: 'Genre: Action, Adventure',
        clue3: 'Director: Steven Spielberg',
        clue4: 'Tagline: The return of the great adventure',
        clue5: 'Characters: Indy, Marion, Belloq',
        clue6: 'Stars: Harrison Ford, Karen Allen, Paul Freeman'
    },
    {
        title: 'Django Unchained',
        clue1: 'Year Released: 2012',
        clue2: 'Genre: Drama, Western',
        clue3: 'Director: Quentin Tarantino',
        clue4: "Tagline: The 'D' is Silent. Payback Won't Be.",
        clue5: 'Characters: Calvin Candie, Stephen, Dr. King Schultz',
        clue6: 'Stars: Jamie Foxx, Samuel L. Jackson, Leonardo DiCaprio'
    },
    {
        title: 'WALL·E',
        clue1: 'Year Released: 2008',
        clue2: 'Genre: Animation, Adventure, Family',
        clue3: 'Director: Andrew Stanton',
        clue4: 'Tagline: An Adventure Beyond the Ordinar-E',
        clue5: 'Characters: EVE, Captain, Shelby Forthright',
        clue6: 'Stars: Ben Burtt, Elissa Knight, Jeff Garlin'
    },
    {
        title: 'Sunset Blvd.',
        clue1: 'Year Released: 1950',
        clue2: 'Genre: Drama, Film-Noir',
        clue3: 'Director: Billy Wilder',
        clue4: 'Tagline: A Hollywood Story',
        clue5: 'Characters: Joe Gillis, Norma Desmond, Max Von Mayerling',
        clue6: 'Stars: William Holden, Gloria Swanson, Erich von Stroheim'
    },
    {
        title: 'The Shining',
        clue1: 'Year Released: 1980',
        clue2: 'Genre: Drama, Horror',
        clue3: 'Director: Stanley Kubrick',
        clue4: "Tagline: He came as the caretaker, but this hotel had its own guardians - who'd been there a long time",
        clue5: 'Characters: Jack Torrance, Wendy Torrance, Danny Torrance',
        clue6: 'Stars: Jack Nicholson, Shelley Duvall, Danny Lloyd'
    },
    {
        title: 'The Great Dictator',
        clue1: 'Year Released: 1940',
        clue2: 'Genre: Comedy, Drama, War',
        clue3: 'Director: Charles Chaplin',
        clue4: 'Tagline: He talks.',
        clue5: 'Characters: Hynkel, Hannah, Napaloni',
        clue6: 'Stars: Charles Chaplin, Paulette Goddard, Jack Oakie'
    },
    {
        title: 'Avengers: Infinity War',
        clue1: 'Year Released: 2018',
        clue2: 'Genre: Action, Adventure, Sci-Fi',
        clue3: 'Director: Anthony Russo, Joe Russo',
        clue4: 'Tagline: An entire universe. Once and for all.',
        clue5: 'Characters: Tony Stark, Thanos, Mantis',
        clue6: 'Stars: Robert Downey Jr., Chris Hemsworth, Mark Ruffalo'
    },
    {
        title: 'American Beauty',
        clue1: 'Year Released: 1999',
        clue2: 'Genre: Drama',
        clue3: 'Director: Sam Mendes',
        clue4: 'Tagline: ...look closer',
        clue5: 'Characters: Lester Burnham, Carolyn Burnham, Angela Hayes',
        clue6: 'Stars: Kevin Spacey, Annette Bening, Thora Birch'
    },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        clue1: 'Year Released: 1964',
        clue2: 'Genre: Comedy, War',
        clue3: 'Director: Stanley Kubrick',
        clue4: "Tagline: The Red-Hot suspense story that's rocking and shocking the world!",
        clue5: "Characters: Group Capt. Lionel Mandrake, Gen. 'Buck' Turgidson, Brig. Gen. Jack D. Ripper",
        clue6: 'Stars: Peter Sellers, George C. Scott, Sterling Hayden'
    },
    {
        title: 'Spider-Man: Into the Spider-Verse',
        clue1: 'Year Released: 2018',
        clue2: 'Genre: Animation, Action, Adventure',
        clue3: 'Director: Bob Persichetti, Peter Ramsey, Rodney Rothman',
        clue4: 'Tagline: Enter a universe where more than one wears the mask.',
        clue5: 'Characters: Miles Morales, Peter B. Parker, Gwen Stacy',
        clue6: 'Stars: Shameik Moore, Jake Johnson, Hailee Steinfeld'
    },
    {
        title: 'Joker',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Crime, Drama, Thriller',
        clue3: 'Director: Todd Phillips',
        clue4: 'Tagline: Put on a happy face.',
        clue5: 'Characters: Arthur Fleck, Murray Franklin, Sophie Dumond',
        clue6: 'Stars: Joaquin Phoenix, Robert De Niro, Zazie Beetz'
    },
    {
        title: 'Braveheart',
        clue1: 'Year Released: 1995',
        clue2: 'Genre: Biography, Drama, History',
        clue3: 'Director: Mel Gibson',
        clue4: 'Tagline: Every man dies, not every man really lives.',
        clue5: 'Characters: William Wallace, Princess Isabelle, Longshanks - King Edward I',
        clue6: 'Stars: Mel Gibson, Sophie Marceau, Patrick McGoohan'
    },
    {
        title: 'Amadeus',
        clue1: 'Year Released: 1984',
        clue2: 'Genre: Biography, Drama, Music',
        clue3: 'Director: Milos Forman',
        clue4: 'Tagline: The man... The music... The madness... The murder... The motion picture...',
        clue5: 'Characters: Antonio Salierim Wolfgang Mozart, Constanze Mozart',
        clue6: 'Stars: F. Murray Abraham, Tom Hulce, Elizabeth Berridge'
    },
    {
        title: 'Toy Story',
        clue1: 'Year Released: 1995',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: John Lasseter',
        clue4: "Tagline: The story of two partners discovering what they're made of.",
        clue5: 'Characters: Woody, Buzz, Mr. Potato Head',
        clue6: 'Stars: Tom Hanks, Tim Allen, Don Rickles'
    },
    {
        title: 'Coco',
        clue1: 'Year Released: 2017',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Lee Unkrich, Adrian Molina',
        clue4: 'Tagline: The celebration of a lifetime',
        clue5: 'Characters: Miguel, Héctor, Ernesto de la Cruz',
        clue6: 'Stars: Anthony Gonzalez, Gael García Bernal, Benjamin Bratt'
    },
    {
        title: 'Inglourious Basterds',
        clue1: 'Year Released: 2009',
        clue2: 'Genre: Adventure, Drama, War',
        clue3: 'Director: Quentin Tarantino',
        clue4: 'Tagline: Once upon a time in Nazi occupied France...',
        clue5: 'Characters: Lt. Aldo Raine, Hitler, Bridget von Hammersmark',
        clue6: 'Stars: Brad Pitt, Diane Kruger, Eli Roth'
    },
    {
        title: 'Princess Mononoke',
        clue1: 'Year Released: 1997',
        clue2: 'Genre: Animation, Action, Adventure',
        clue3: 'Director: Hayao Miyazaki',
        clue4: 'Tagline: The fate of the world rests on the courage of one warrior.',
        clue5: 'Characters: Ashitaka, Jigo, Lady Eboshi',
        clue6: 'Stars: Billy Crudup, Billy Bob, Thornton, Minnie Driver'
    },
    {
        title: 'Good Will Hunting',
        clue1: 'Year Released: 1997',
        clue2: 'Genre: Drama, Romance',
        clue3: 'Director: Gus Van Sant',
        clue4: 'Tagline: Some people can never believe in themselves, until someone believes in them.',
        clue5: 'Characters: Sean, Will, Chuckie',
        clue6: 'Stars: Robin Williams, Matt Damon, Ben Affleck'
    },
    {
        title: 'Requiem for a Dream',
        clue1: 'Year Released: 2000',
        clue2: 'Genre: Drama',
        clue3: 'Director: Darren Aronofsky',
        clue4: "Tagline: Everybody likes me. Soon, millions of people will see me and they'll all like me.",
        clue5: 'Characters: Sara Goldfarb, Harry Goldfarb, Marion Silver',
        clue6: 'Stars: Ellen Burstyn, Jared Leto, Jennifer Connelly'
    },
    {
        title: "Singin' in the Rain",
        clue1: 'Year Released: 1952',
        clue2: 'Genre: Comedy, Musical, Romance',
        clue3: 'Director: Stanley Donen, Gene Kelly',
        clue4: 'Tagline: What a glorious feeling',
        clue5: 'Characters: Don Lockwood, Cosmo Brown, Kathy Selden',
        clue6: "Stars: Gene Kelly, Donald O'Connor, Debbie Reynolds"
    },
    {
        title: '2001: A Space Odyssey',
        clue1: 'Year Released: 1968',
        clue2: 'Genre: Adventure, Sci-Fi',
        clue3: 'Director: Stanley Kubrick',
        clue4: 'Tagline: An epic drama of adventure and exploration',
        clue5: 'Characters: Dr. Dave Bowman, HAL 9000, Ape',
        clue6: 'Stars: Keir Dullea, Gary Lockwood, William Sylvester'
    },
    {
        title: 'Reservoir Dogs',
        clue1: 'Year Released: 1992',
        clue2: 'Genre: Crime, Drama, Thriller',
        clue3: 'Director: Quentin Tarantino',
        clue4: 'Tagline: Seven Killers, Six Colours and One Perfect Crime',
        clue5: 'Characters: Mr. White, Mr. Orange, Mr. Blonde',
        clue6: 'Stars: Harvey Keitel, Tim Roth, Michael Madsen'
    },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        clue1: 'Year Released: 2004',
        clue2: 'Genre: Drama, Romance, Sci-Fi',
        clue3: 'Director: Michel Gondry',
        clue4: 'Tagline: I already forget how I used to feel about you.',
        clue5: 'Characters: Joel Barish, Clementine Kruczynski, Dr. Mierzwiak',
        clue6: 'Stars: Jim Carrey, Kate Winslet, Tom Wilkinson'
    },
    {
        title: 'Citizen Kane',
        clue1: 'Year Released: 1941',
        clue2: 'Genre: Drama, Mystery',
        clue3: 'Director: Orson Welles',
        clue4: 'Tagline: The classic story of power and the press.',
        clue5: 'Characters: Susan Alexander Kane, Mary Kane, Kane',
        clue6: 'Stars: Orson Welles, Joseph Cotten, Dorothy Comingore'
    },
    {
        title: 'Lawrence of Arabia',
        clue1: 'Year Released: 1962',
        clue2: 'Genre: Adventure, Biography, Drama',
        clue3: 'Director: David Lean',
        clue4: 'Tagline: The desert classic',
        clue5: 'Characters: Prince Faisal, Lawrence, Auda Abu Tayi',
        clue6: "Stars: Peter O'Toole, Alec Guinness, Anthony Quinn"
    },
    {
        title: 'North by Northwest',
        clue1: 'Year Released: 1959',
        clue2: 'Genre: Adventure, Mystery, Thriller',
        clue3: 'Director: Alfred Hitchcock',
        clue4: 'Tagline: The Master of Suspense presents a 2000-mile chase across America!',
        clue5: 'Characters: Roger Thornhill, Eve Kendall, Phillip Vandamm',
        clue6: 'Stars: Cary Grant, Eva Marie Saint, James Mason'
    },
    {
        title: 'Vertigo',
        clue1: 'Year Released: 1958',
        clue2: 'Genre: Mystery, Romance, Thriller',
        clue3: 'Director: Alfred Hitchcock',
        clue4: "Tagline: Somewhere...Somehow - He'd Loved and Killed That Self-Same Girl Before!",
        clue5: "Characters: John 'Scottie' Ferguson, Madeleine Elster, Marjorie 'Midge' Wood",
        clue6: 'Stars: James Stewart, Kim Novak, Barbara Bel Geddes'
    },
    {
        title: 'Amélie',
        clue1: 'Year Released: 2001',
        clue2: 'Genre: Comedy, Romance',
        clue3: 'Director: Jean-Pierre Jeunet',
        clue4: "Tagline: She'll change your life.",
        clue5: 'Characters: Nino Quincampoix, Raphaël Poulain, Amélie Poulain',
        clue6: 'Stars: Audrey Tautou, Mathieu Kassovitz, Rufus'
    },
    {
        title: 'A Clockwork Orange',
        clue1: 'Year Released: 1971',
        clue2: 'Genre: Crime, Sci-Fi',
        clue3: 'Director: Stanley Kubrick',
        clue4: "Tagline: Being the adventures of a young man ... who couldn't resist pretty girls ... or a bit of the old ultra-violence",
        clue5: 'Characters: Alex, Mr. Alexander, Chief Guard',
        clue6: 'Stars: Malcolm McDowell, Patrick Magee, Michael Bates'
    }, 
    {
        title: 'Full Metal Jacket',
        clue1: 'Year Released: 1987',
        clue2: 'Genre: Drama, War',
        clue3: 'Director: Stanley Kubrick',
        clue4: "Tagline: In Vietnam The Wind Doesn't Blow It Sucks",
        clue5: 'Characters: Pvt. Joker, Gny. Sgt. Hartman, Animal Mother',
        clue6: "Stars: Matthew Modine, R. Lee Ermey, Vincent D'Onofrio"
    },
    {
        title: 'Scarface',
        clue1: 'Year Released: 1983',
        clue2: 'Genre: Crime, Drama',
        clue3: 'Director: Brian De Palma',
        clue4: 'Tagline: He wanted to live the American Dream until the end.',
        clue5: 'Characters: Tony Montana, Elvira, Manny Ribera',
        clue6: 'Stars: Al Pacino, Michelle Pfeiffer, Steven Bauer'
    },
    {
        title: 'Taxi Driver',
        clue1: 'Year Released: 1976',
        clue2: 'Genre: Crime, Drama',
        clue3: 'Director: Martin Scorsese',
        clue4: "Tagline: On every street in every city, there's a nobody who dreams of being a somebody.",
        clue5: 'Characters: Travis Bickle, Iris, Betsy',
        clue6: 'Stars: Robert De Niro, Jodie Foster, Cybill Shepherd'
    },
    {
        title: 'To Kill a Mockingbird',
        clue1: 'Year Released: 1962',
        clue2: 'Genre: Crime, Drama',
        clue3: 'Director: Robert Mulligan',
        clue4: "Tagline: The rare film story of a father who must expose his children to a small town's outraged passions...and can only protect them with his love.",
        clue5: 'Characters: Atticus Finch, Tom Robinson, Boo Radley',
        clue6: 'Stars: Gregory Peck, John Megna, Frank Overton'
    },
    {
        title: 'Hamilton',
        clue1: 'Year Released: 2020',
        clue2: 'Genre: Biography, Drama, History',
        clue3: 'Director: Thomas Kail',
        clue4: 'Tagline: An American Musical',
        clue5: 'Characters: Aaron Burr, George Washington, Alexander',
        clue6: 'Stars: Lin-Manuel Miranda, Phillipa Soo, Leslie Odom Jr.'
    },
    {
        title: 'L.A. Confidential',
        clue1: 'Year Released: 1997',
        clue2: 'Genre: Crime, Drama, Mystery',
        clue3: 'Director: Curtis Hanson',
        clue4: 'Tagline: Off the record, on the QT, and very hush-hush...',
        clue5: 'Characters: Jack Vincennes, Bud White, Ed Exley',
        clue6: 'Stars: Kevin Spacey, Russell Crowe, Guy Pearce'
    },
    {
        title: 'Up',
        clue1: 'Year Released: 2009',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Pete DocterBob Peterson',
        clue4: 'Tagline: The greatest adventure is just getting back home.',
        clue5: 'Characters: Carl Fredricksen, Russell, Dug',
        clue6: 'Stars: Edward Asner, Jordan Nagai, John Ratzenberger'
    },
    {
        title: 'Heat',
        clue1: 'Year Released: 1995',
        clue2: 'Genre: Action, Crime, Drama',
        clue3: 'Director: Michael Mann',
        clue4: 'Tagline: A Los Angeles Crime Saga',
        clue5: 'Characters: Lt. Vincent Hanna, Neil McCauley, Chris Shiherlis',
        clue6: 'Stars: Al Pacino, Robert De Niro, Val Kilmer'
    },
    {
        title: 'Snatch',
        clue1: 'Year Released: 2000',
        clue2: 'Genre: Comedy, Crime',
        clue3: 'Director: Guy Ritchie',
        clue4: "Tagline: Stealin' Stones and Breakin' Bones",
        clue5: "Characters: Turkish, Mickey O'Neil, Bullet-Tooth Tony",
        clue6: 'Stars: Jason Statham, Brad Pitt, Stephen Graham'
    },
    {
        title: 'Die Hard',
        clue1: 'Year Released: 1988',
        clue2: 'Genre: Action, Thriller',
        clue3: 'Director: John McTiernan',
        clue4: 'Tagline: 40 Stories. Twelve Terrorists. One Cop.',
        clue5: 'Characters: John McClane, Hans Gruber, Sgt. Al Powell',
        clue6: 'Stars: Bruce Willis, Alan Rickman, Bonnie Bedelia'
    },
    {
        title: 'Some Like It Hot',
        clue1: 'Year Released: 1959',
        clue2: 'Genre: Comedy, Musical, Romance',
        clue3: 'Director: Billy Wilder',
        clue4: 'Tagline: The movie too HOT for words!',
        clue5: 'Characters: Sugar Kane Kowalczyk, Spats Colombo, Joe',
        clue6: 'Stars: Marilyn Monroe, Tony Curtis, Jack Lemmon'
    },
    {
        title: 'All About Eve',
        clue1: 'Year Released: 1950',
        clue2: 'Genre: Drama',
        clue3: 'Director: Joseph L. Mankiewicz',
        clue4: "Tagline: It's all about women---and their men!",
        clue5: 'Characters: Margo, Addison DeWitt, Eve',
        clue6: 'Stars: Bette Davis, Anne Baxter, George Sanders'
    },
    {
        title: 'The Wolf of Wall Street',
        clue1: 'Year Released: 2013',
        clue2: 'Genre: Biography, Comedy, Crime',
        clue3: 'Director: Martin Scorsese',
        clue4: 'Tagline: Earn. Spend. Party.',
        clue5: 'Characters: Jordan Belfort, Donnie Azoff, Naomi Lapaglia',
        clue6: 'Stars: Leonardo DiCaprio, Jonah Hill, Margot Robbie'
    },
    {
        title: "Pan's Labyrinth",
        clue1: 'Year Released: 2006',
        clue2: 'Genre: Drama, Fantasy, War',
        clue3: 'Director: Guillermo del Toro',
        clue4: "Tagline: What happens when make-believe believes it's real?",
        clue5: 'Characters: Ofelia, Carmen, Vidal',
        clue6: 'Stars: Ivana Baquero, Ariadna Gil, Sergi López'
    },
    {
        title: 'Casino',
        clue1: 'Year Released: 1995',
        clue2: 'Genre: Crime, Drama',
        clue3: 'Director: Martin Scorsese',
        clue4: 'Tagline: ',
        clue5: "Characters: Sam 'Ace' Rothstein, Ginger McKenna, Nicky Santoro",
        clue6: 'Stars: Robert De Niro, Sharon Stone, Joe Pesci'
    },
    {
        title: 'Monty Python and the Holy Grail',
        clue1: 'Year Released: 1975',
        clue2: 'Genre: Adventure, Comedy, Fantasy',
        clue3: 'Director: Terry Gilliam, Terry Jones',
        clue4: 'Tagline: Free! 1,000 coconuts to first 1,000 customers on opening day!',
        clue5: 'Characters: King Arthur, Dead Collector, Patsy',
        clue6: 'Stars: Graham Chapman, John Cleese, Eric Idle'
    },
    {
        title: 'A Beautiful Mind',
        clue1: 'Year Released: 2001',
        clue2: 'Genre: Biography, Drama',
        clue3: 'Director: Ron Howard',
        clue4: 'Tagline: The only thing greater than the power of the mind is the courage of the heart',
        clue5: 'Characters: John Nash, Parcher, Alicia Nash',
        clue6: 'Stars: Russell Crowe, Ed Harris, Jennifer Connelly'
    }, 
    {
        title: 'The Sixth Sense',
        clue1: 'Year Released: 1999',
        clue2: 'Genre: Drama, Mystery, Thriller',
        clue3: 'Director: M. Night Shyamalan',
        clue4: 'Tagline: "I see dead people."',
        clue5: 'Characters: Malcolm Crowe, Cole Sear, Anna Crowe',
        clue6: 'Stars: Bruce Willis, Haley Joel Osment, Toni Collette'
    },
    {
        title: 'There Will Be Blood',
        clue1: 'Year Released: 2007',
        clue2: 'Genre: Drama',
        clue3: 'Director: Paul Thomas Anderson',
        clue4: 'Tagline: There Will Be Greed. There Will Be Vengeance.',
        clue5: 'Characters: Daniel Plainview, Paul Sunday, Fletcher',
        clue6: 'Stars: Daniel Day-Lewis, Paul Dano, Ciarán Hinds'
    },
    {
        title: 'The Truman Show',
        clue1: 'Year Released: 1998',
        clue2: 'Genre: Comedy, Drama',
        clue3: 'Director: Peter Weir',
        clue4: 'Tagline: The world is watching',
        clue5: 'Characters: Christof, Meryl Burbank, Marlon',
        clue6: 'Stars: Jim Carrey, Ed Harris, Laura Linney'
    },
    {
        title: 'Shutter Island',
        clue1: 'Year Released: 2010',
        clue2: 'Genre: Mystery, Thriller',
        clue3: 'Director: Martin Scorsese',
        clue4: 'Tagline: Some places never let you go',
        clue5: 'Characters: Teddy Daniels, Rachel 1, Dr. Cawley',
        clue6: 'Stars: Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo'
    },
    {
        title: 'Kill Bill: Vol. 1',
        clue1: 'Year Released: 2003',
        clue2: 'Genre: Action, Crime, Drama',
        clue3: 'Director: Quentin Tarantino',
        clue4: 'Tagline: On October 10th, speak softly and carry a big sword',
        clue5: 'Characters: The Bride, Elle Driver, Budd',
        clue6: 'Stars: Uma Thurman, David Carradine, Daryl Hannah'
    },
    {
        title: 'Jurassic Park',
        clue1: 'Year Released: 1993',
        clue2: 'Genre: Action, Adventure, Sci-Fi',
        clue3: 'Director: Steven Spielberg',
        clue4: 'Tagline: An adventure 65 million years in the making.',
        clue5: 'Characters: Grant, Ellie, Malcolm',
        clue6: 'Stars: Sam Neill, Laura Dern, Jeff Goldblum'
    },
    {
        title: 'No Country for Old Men',
        clue1: 'Year Released: 2007',
        clue2: 'Genre: Crime, Drama, Thriller',
        clue3: 'Director: Ethan Coen, Joel Coen',
        clue4: 'Tagline: How does a man decide in what order to abandon his life?',
        clue5: 'Characters: Ed Tom Bell, Anton Chigurh, Llewelyn Moss',
        clue6: 'Stars: Tommy Lee Jones, Javier Bardem, Josh Brolin'
    },
    {
        title: 'Raging Bull',
        clue1: 'Year Released: 1980',
        clue2: 'Genre: Biography, Drama, Sport',
        clue3: 'Director: Martin Scorsese',
        clue4: 'Tagline: If you win, you win. If you lose, you still win',
        clue5: 'Characters: Jake La Motta, Joey, Salvy',
        clue6: 'Stars: Robert De Niro, Cathy Moriarty, Joe Pesci'
    },
    {
        title: 'Finding Nemo',
        clue1: 'Year Released: 2003',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Andrew Stanton, ee Unkrich',
        clue4: "Tagline: 71% of the Earth's surface is covered by water. That's a lot of space to find one fish.",
        clue5: 'Characters: Marlin, Dory, Crush',
        clue6: 'Stars: Albert Brooks, Ellen DeGeneres, Alexander Gould'
    },
    {
        title: 'Gone with the Wind',
        clue1: 'Year Released: 1939',
        clue2: 'Genre: Drama, History, Romance',
        clue3: 'Director: Victor Fleming, George Cukor, Sam Wood',
        clue4: 'Tagline: ',
        clue5: "Characters: Rhett Butler, Scarlett, Gerald O'Hara",
        clue6: 'Stars: Clark Gable, Vivien Leigh, Thomas Mitchell'
    },
    {
        title: 'V for Vendetta',
        clue1: 'Year Released: 2005',
        clue2: 'Genre: Action, Drama, Sci-Fi',
        clue3: 'Director: James McTeigue',
        clue4: 'Tagline: People should not be afraid of their governments. Governments should be afraid of their people.',
        clue5: 'Characters: Evey, Deitrich, Dominic',
        clue6: 'Stars: Hugo Weaving, Natalie Portman, Rupert Graves'
    },
    {
        title: 'Inside Out',
        clue1: 'Year Released: 2015',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Pete Docter, Ronnie Del Carmen',
        clue4: 'Tagline: Meet the little voices inside your head',
        clue5: 'Characters: Joy, Fear, Riley',
        clue6: 'Stars: Amy Poehler, Bill Hader, Lewis Black'
    },
    {
        title: 'The Thing',
        clue1: 'Year Released: 1982',
        clue2: 'Genre: Horror, Mystery, Sci-Fi',
        clue3: 'Director: John Carpenter',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: Kurt Russell, Wilford Brimley, Keith David'
    },
    {
        title: 'Dial M for Murder',
        clue1: 'Year Released: 1954',
        clue2: 'Genre: Crime, Thriller',
        clue3: 'Director: Alfred Hitchcock',
        clue4: 'Tagline: If a woman answers...hang on for dear life!',
        clue5: 'Characters: Tony Wendice, Margot Wendice, Mark Halliday',
        clue6: 'Stars: Ray Milland, Grace Kelly, Robert Cummings'
    },
    {
        title: "Howl's Moving Castle",
        clue1: 'Year Released: 2004',
        clue2: 'Genre: Animation, Adventure, Family',
        clue3: 'Director: Hayao Miyazaki',
        clue4: "Tagline: A heart's a heavy burden",
        clue5: 'Characters: Grandma Sophoe, Witch of the Waste, Madame Suliman',
        clue6: 'Stars: Jean Simmons, Christian Bale, Josh Hutcherson'
    },
    {
        title: 'Trainspotting',
        clue1: 'Year Released: 1996',
        clue2: 'Genre: Drama',
        clue3: 'Director: Danny Boyle',
        clue4: 'Tagline: Never let your friends tie you to the tracks.',
        clue5: 'Characters: Renton, Spud, Sick Boy',
        clue6: 'Stars: Ewan McGregor, Ewen Bremner, Jonny Lee Miller'
    },
    {
        title: 'Gran Torino',
        clue1: 'Year Released: 2008',
        clue2: 'Genre: Drama',
        clue3: 'Director: Clint Eastwood',
        clue4: 'Tagline: Get off my lawn!',
        clue5: 'Characters: Walt Kowalski, Thao, Father Janovich',
        clue6: 'Stars: Clint Eastwood, Bee Vang, Christopher Carley'
    },
    {
        title: 'Fargo',
        clue1: 'Year Released: 1996',
        clue2: 'Genre: Crime, Thriller',
        clue3: 'Director: Joel Coen, Ethan Coen',
        clue4: 'Tagline: A homespun murder story',
        clue5: 'Characters: Jerry Lundegaard, Marge Gunderson, Carl Showalter',
        clue6: 'Stars: William H. Macy, Frances McDormand, Steve Buscemi'
    },
    {
        title: 'My Neighbor Totoro',
        clue1: 'Year Released: 1988',
        clue2: 'Genre: Animation, Comedy, Family',
        clue3: 'Director: Hayao Miyazaki',
        clue4: 'Tagline: Come out, come out, wherever you are!',
        clue5: 'Characters: Satsuki, Mei Kusakabe, Granny',
        clue6: 'Stars: Dakota Fanning, Elle Fanning, Tim Daly'
    },
    {
        title: 'Prisoners',
        clue1: 'Year Released: 2013',
        clue2: 'Genre: Crime, Drama, Mystery',
        clue3: 'Director: Denis Villeneuve',
        clue4: 'Tagline: Every moment matters',
        clue5: 'Characters: Keller Dover, Detective Loki, Nancy Birch',
        clue6: 'Stars: Hugh Jackman, Jake Gyllenhaal, Viola Davis'
    },
    {
        title: 'Million Dollar Baby',
        clue1: 'Year Released: 2004',
        clue2: 'Genre: Drama, Sport',
        clue3: 'Director: Clint Eastwood',
        clue4: 'Tagline: Beyond his silence, there is a past. Beyond her dreams, there is a feeling. Beyond hope, there is a memory. Beyond their journey, there is a love.',
        clue5: 'Characters: Maggie Fitzgerald, Frankie Dunn, Eddie Scrap-Iron Dupris',
        clue6: 'Stars: Hilary Swank, Clint Eastwood, Morgan Freeman'
    },
    {
        title: 'Blade Runner',
        clue1: 'Year Released: 1982',
        clue2: 'Genre: Action, Drama, Sci-Fi',
        clue3: 'Director: Ridley Scott',
        clue4: "Tagline: Man Has Made His Match... Now It's His Problem",
        clue5: 'Characters: Rick Deckard, Roy Batty, Rachael',
        clue6: 'Stars: Harrison Ford, Rutger Hauer, Sean Young'
    },
    {
        title: 'Catch Me If You Can',
        clue1: 'Year Released: 2002',
        clue2: 'Genre: Biography, Crime, Drama',
        clue3: 'Director: Steven Spielberg',
        clue4: 'Tagline: The true story of a real fake.',
        clue5: 'Characters: Frank Abagnale Jr., Carl Hanratty, Roger Strong',
        clue6: 'Stars: Leonardo DiCaprio, Tom Hanks, Christopher Walken'
    },
    {
        title: 'Ben-Hur',
        clue1: 'Year Released: 1959',
        clue2: 'Genre: Adventure, Drama, History',
        clue3: 'Director: William Wyler',
        clue4: 'Tagline: A tale of the Christ',
        clue5: 'Characters: Quintus Arrius, Messala, Esther',
        clue6: 'Stars: Charlton Heston, Jack Hawkins, Stephen Boyd'
    },
    {
        title: '12 Years a Slave',
        clue1: 'Year Released: 2013',
        clue2: 'Genre: Biography, Drama, History',
        clue3: 'Director: Steve McQueen',
        clue4: 'Tagline: The extraordinary true story of Solomon Northup',
        clue5: 'Characters: Solomon Northup, Robert, Bass',
        clue6: 'Stars: Chiwetel Ejiofor, Michael Kenneth Williams, Michael Fassbender'
    },
    {
        title: 'Gone Girl',
        clue1: 'Year Released: 2014',
        clue2: 'Genre: Drama, Mystery, Thriller',
        clue3: 'Director: David Fincher',
        clue4: "Tagline: You don't know what you've got 'til it's...",
        clue5: 'Characters: Nick Dunne, Amy Dunne, Desi Collings',
        clue6: 'Stars: Ben Affleck, Rosamund Pike, Neil Patrick Harris'
    },
    {
        title: 'The Deer Hunter',
        clue1: 'Year Released: 1978',
        clue2: 'Genre: Drama, War',
        clue3: 'Director: Michael Cimino',
        clue4: "Tagline: A deer has to be taken with one shot. I try to tell people that but they don't listen.",
        clue5: 'Characters: Michael, Nick, Stan',
        clue6: 'Stars: Robert De Niro, Christopher Walken, John Cazale'
    },
    {
        title: 'Mr. Smith Goes to Washington',
        clue1: 'Year Released: 1939',
        clue2: 'Genre: Comedy, Drama',
        clue3: 'Director: Frank Capra',
        clue4: 'Tagline: Romance, drama, laughter and heartbreak... created out of the very heart and soil of America',
        clue5: 'Characters: Jefferson Smith, Saunders, Senator Joseph Paine',
        clue6: 'Stars: James Stewart, Jean Arthur, Claude Rains'
    },
    {
        title: 'The Grand Budapest Hotel',
        clue1: 'Year Released: 2014',
        clue2: 'Genre: Adventure, Comedy, Crime',
        clue3: 'Director: Wes Anderson',
        clue4: 'Tagline: Keep your hands off my lobby boy!',
        clue5: 'Characters: M. Gustave, Mr. Moustafa, Zero',
        clue6: 'Stars: Ralph Fiennes, F. Murray Abraham, Mathieu Amalric'
    },
    {
        title: 'Room',
        clue1: 'Year Released: 2015',
        clue2: 'Genre: Drama, Thriller',
        clue3: 'Director: Lenny Abrahamson',
        clue4: 'Tagline: Love knows no boundaries',
        clue5: 'Characters: Ma, Jack, Old Nick',
        clue6: 'Stars: Brie Larson, Jacob Tremblay, Sean Bridgers'
    },
    {
        title: 'Hacksaw Ridge',
        clue1: 'Year Released: 2016',
        clue2: 'Genre: Biography, Drama, History',
        clue3: 'Director: Mel Gibson',
        clue4: 'Tagline: When the order came to retreat, one man stayed.',
        clue5: 'Characters: Desmond Doss, Captain Glover, Smitty Ryker',
        clue6: 'Stars: Andrew Garfield, Sam Worthington, Luke Bracey'
    },
    {
        title: 'Klaus',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Sergio Pablos, Carlos Martínez López',
        clue4: 'Tagline: Discover the friendship that launched a legend.',
        clue5: 'Characters: Jesper, Alva, Mr. Ellingboe',
        clue6: 'Stars: Jason Schwartzman, J.K. Simmons, Rashida Jones'
    },
    {
        title: 'The Big Lebowski',
        clue1: 'Year Released: 1998',
        clue2: 'Genre: Comedy, Crime',
        clue3: 'Director: Joel Coen, Ethan Coen',
        clue4: 'Tagline: They figured he was a lazy, time-wasting slacker. They were right.',
        clue5: 'Characters: The Dude, Walter Sobchak, Brandt',
        clue6: 'Stars: Jeff Bridges, John Goodman, Julianne Moore'
    },
    {
        title: 'How to Train Your Dragon',
        clue1: 'Year Released: 2010',
        clue2: 'Genre: Animation, Action, Adventure',
        clue3: 'Director: Dean DeBlois, Chris Sanders',
        clue4: 'Tagline: One adventure will change two worlds',
        clue5: 'Characters: Hiccup, Stoick, Fishlegs',
        clue6: 'Stars: Jay Baruchel, Gerard Butler, Christopher Mintz-Plasse'
    },
    {
        title: 'Mad Max: Fury Road',
        clue1: 'Year Released: 2015',
        clue2: 'Genre: Action, Adventure, Sci-Fi',
        clue3: 'Director: George Miller',
        clue4: 'Tagline: Oh, what a day! WHAT A LOVELY DAY!',
        clue5: 'Characters: Max Rockatansky, Imperator Furiosa, Nux',
        clue6: 'Stars: Tom Hardy, Charlize Theron, Nicholas Hoult'
    },
    {
        title: 'Mary and Max',
        clue1: 'Year Released: 2009',
        clue2: 'Genre: Animation, Comedy, Drama',
        clue3: 'Director: Adam Elliot',
        clue4: 'Tagline: Sometimes perfect strangers make the best friends.',
        clue5: 'Characters: Mary Daisy Dinkle, Max Jerry Horovitz, Damien Popodopolous ',
        clue6: 'Stars: Toni Collette, Philip Seymour Hoffman, Eric Bana'
    },
    {
        title: 'Jaws',
        clue1: 'Year Released: 1975',
        clue2: 'Genre: Adventure, Thriller',
        clue3: 'Director: Steven Spielberg',
        clue4: 'Tagline: See it before you go swimming.',
        clue5: 'Characters: Brody, Quint, Hooper',
        clue6: 'Stars: Roy Scheider, Robert Shaw, Richard Dreyfuss'
    },
    {
        title: 'Monsters, Inc.',
        clue1: 'Year Released: 2001',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Pete Docter, David Silverman, Lee Unkrich',
        clue4: "Tagline: You Won't Believe Your Eye.",
        clue5: 'Characters: Mike, Sullivan, Boo',
        clue6: 'Stars: Billy Crystal, John Goodman, Mary Gibbs'
    },
    {
        title: 'Hotel Rwanda',
        clue1: 'Year Released: 2004',
        clue2: 'Genre: Biography, Drama, History',
        clue3: 'Director: Terry George',
        clue4: 'Tagline: When a country descended into madness and the world turned its back, one man had to make a choice',
        clue5: 'Characters: Paul Rusesabagina, Tatiana Rusesabagina, Jack Daglish',
        clue6: 'Stars: Don Cheadle, Sophie Okonedo, Joaquin Phoenix'
    },
    {
        title: 'Dead Poets Society',
        clue1: 'Year Released: 1989',
        clue2: 'Genre: Comedy, Drama',
        clue3: 'Director: Peter Weir',
        clue4: 'Tagline: He was their inspiration. He made their lives extraordinary.',
        clue5: 'Characters: John Keating, Neil Perry, Todd Anderson',
        clue6: 'Stars: Robin Williams, Robert Sean Leonard, Ethan Hawke'
    },
    {
        title: 'Platoon',
        clue1: 'Year Released: 1986',
        clue2: 'Genre: Drama, War',
        clue3: 'Director: Oliver Stone',
        clue4: 'Tagline: The first casualty of war is innocence.',
        clue5: 'Characters: Chris, Sgt. Barnes, Big Harold',
        clue6: 'Stars: Charlie Sheen, Tom Berenger, Willem Dafoe'
    },
    {
        title: 'Rocky',
        clue1: 'Year Released: 1976',
        clue2: 'Genre: Drama, Sport',
        clue3: 'Director: John G. Avildsen',
        clue4: 'Tagline: You have a ringside seat for the bloodiest bicentennial in history!',
        clue5: 'Characters: Adrian, Paulie, Apollo',
        clue6: 'Stars: Sylvester Stallone, Talia Shire, Burt Young'
    },
    {
        title: 'Ford v Ferrari',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Action, Biography, Drama',
        clue3: 'Director: James Mangold',
        clue4: 'Tagline: They took the American dream for a ride.',
        clue5: 'Characters: Carroll Shelby, Ken Miles, Lee Iacocca',
        clue6: 'Stars: Matt Damon, Christian Bale, Jon Bernthal'
    },
    {
        title: 'Stand by Me',
        clue1: 'Year Released: 1986',
        clue2: 'Genre: Adventure, Drama',
        clue3: 'Director: Rob Reiner',
        clue4: "Tagline: For some, it's the last real taste of innocence, and the first real taste of life. But for everyone, it's the time that memories are made of.",
        clue5: 'Characters: Gordie Lachance, Chris Chambers, Teddy Duchamp',
        clue6: 'Stars: Wil Wheaton, River Phoenix, Corey Feldman'
    },
    {
        title: 'Into the Wild',
        clue1: 'Year Released: 2007',
        clue2: 'Genre: Adventure, Biography, Drama',
        clue3: 'Director: Sean Penn',
        clue4: 'Tagline: Into the heart, into the soul',
        clue5: 'Characters: Chris McCandless, Wayne Westerberg, Jan Burres',
        clue6: 'Stars: Emile Hirsch, Vince Vaughn, Catherine Keener'
    },
    {
        title: 'The Wizard of Oz',
        clue1: 'Year Released: 1939',
        clue2: 'Genre: Adventure, Family, Fantasy',
        clue3: 'Director: Victor Fleming, George Cukor, Mervyn LeRoy',
        clue4: "Tagline: There's no place like home",
        clue5: 'Characters: Dorothy Gale, Professor Marvel, Glinda',
        clue6: 'Stars: Judy Garland, Frank Morgan, Ray Bolger'
    },
    {
        title: 'Logan',
        clue1: 'Year Released: 2017',
        clue2: 'Genre: Action, Drama, Sci-Fi',
        clue3: 'Director: James Mangold',
        clue4: 'Tagline: His time has come',
        clue5: 'Characters: Charles, Laura, Pierce',
        clue6: 'Stars: Hugh Jackman, Patrick Stewart, Dafne Keen'
    },
    {
        title: 'Groundhog Day',
        clue1: 'Year Released: 1993',
        clue2: 'Genre: Comedy, Drama, Fantasy',
        clue3: 'Director: Harold Ramis',
        clue4: "Tagline: He's having the worst day of his life... over, and over...",
        clue5: 'Characters: Phil, Rita, Larry',
        clue6: 'Stars: Bill Murray, Andie MacDowell, Chris Elliott'
    },
    {
        title: 'Ratatouille',
        clue1: 'Year Released: 2007',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Brad Bird, Jan Pinkava',
        clue4: 'Tagline: A comedy with great taste.',
        clue5: 'Characters: Gusteau, Linguini, Remy',
        clue6: 'Stars: Brad Garrett, Lou Romano, Patton Oswalt'
    },
    {
        title: 'The Exorcist',
        clue1: 'Year Released: 1973',
        clue2: 'Genre: Horror',
        clue3: 'Director: William Friedkin',
        clue4: 'Tagline: Somewhere between science and superstition, there is another world. The world of darkness.',
        clue5: 'Characters: Chris MacNeil, Father Lankester Merrin, Regan MacNeil',
        clue6: 'Stars: Ellen Burstyn, Max von Sydow, Linda Blair'
    },
    {
        title: 'The Incredibles',
        clue1: 'Year Released: 2004',
        clue2: 'Genre: Animation, Action, Adventure',
        clue3: 'Director: Brad Bird',
        clue4: "Tagline: Discover the Side of Superheroes You've Never Seen Before",
        clue5: 'Characters: Bob Parr, Lucius Best, Helen Parr',
        clue6: 'Stars: Craig T. Nelson, Samuel L. Jackson, Holly Hunter'
    },
    {
        title: 'Cool Hand Luke',
        clue1: 'Year Released: 1967',
        clue2: 'Genre: Crime, Drama',
        clue3: 'Director: Stuart Rosenberg',
        clue4: 'Tagline: No one can eat fifty eggs.',
        clue5: 'Characters: Luke, Dragline, Captain',
        clue6: 'Stars: Paul Newman, George Kennedy, Strother Martin'
    },
    {
        title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
        clue1: 'Year Released: 2003',
        clue2: 'Genre: Action, Adventure, Fantasy',
        clue3: 'Director: Gore Verbinski',
        clue4: 'Tagline: Prepare to be blown out of the water.',
        clue5: 'Characters: Jack Sparrow, Barbossa, Will Turner',
        clue6: 'Stars: Johnny Depp, Geoffrey Rush, Orlando Bloom'
    },
    {
        title: 'The Sound of Music',
        clue1: 'Year Released: 1965',
        clue2: 'Genre: Biography, Drama, Family',
        clue3: 'Director: Robert Wise',
        clue4: 'Tagline: ...the more you see it, the more it becomes one of your favorite things!',
        clue5: 'Characters: Maria, Captain Georg von Trapp, The Baroness',
        clue6: 'Stars: Julie Andrews, Christopher Plummer, Eleanor Parker'
    },
    {
        title: 'Gandhi',
        clue1: 'Year Released: 1982',
        clue2: 'Genre: Biography, Drama',
        clue3: 'Director: Richard Attenborough',
        clue4: 'Tagline: His Triumph Changed The World Forever.',
        clue5: 'Characters: Lord Irwin, Mahatma, Kasturba',
        clue6: 'Stars: Ben Kingsley, John Gielgud, Rohini Hattangadi'
    },
    {
        title: 'Aladdin',
        clue1: 'Year Released: 1992',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Ron Clements, John Musker',
        clue4: 'Tagline: Imagine if you had three wishes, three hopes, three dreams, and they all could come true.',
        clue5: 'Characters: Genie, Princess Jasmine, Jafar',
        clue6: 'Stars: Scott Weinger, Robin Williams, Linda Larkin'
    },
    {
        title: 'The Help',
        clue1: 'Year Released: 2011',
        clue2: 'Genre: Drama',
        clue3: 'Director: Tate Taylor',
        clue4: 'Tagline: Change begins with a whisper.',
        clue5: 'Characters: Skeeter Phelan, Aibileen Clark, Minny Jackson',
        clue6: 'Stars: Emma Stone, Viola Davis, Octavia Spencer'
    },
    {
        title: 'Beauty and the Beast',
        clue1: 'Year Released: 1991',
        clue2: 'Genre: Animation, Family, Fantasy',
        clue3: 'Director: Gary Trousdale, Kirk Wise',
        clue4: 'Tagline: The most beautiful love story ever told.',
        clue5: 'Characters: Belle, Mrs. Potts, Gaston',
        clue6: "Stars: Paige O'Hara, Robby Benson, Jesse Corti"
    },
    {
        title: 'Dune',
        clue1: 'Year Released: 2021',
        clue2: 'Genre: Action, Adventure, Drama',
        clue3: 'Director: Denis Villeneuve',
        clue4: 'Tagline: Beyond fear, destiny awaits',
        clue5: 'Characters: Paul Atreides, Lady Jessica Atreides, Chani',
        clue6: 'Stars: Timothée Chalamet, Rebecca Ferguson, Zendaya'
    },
    {
        title: 'Dances with Wolves',
        clue1: 'Year Released: 1990',
        clue2: 'Genre: Adventure, Drama, Western',
        clue3: 'Director: Kevin Costner',
        clue4: 'Tagline: Inside everyone is a frontier waiting to be discovered.',
        clue5: 'Characters: Lieutenant Dunbar, Stands With A Fist, Kicking Bird',
        clue6: 'Stars: Kevin Costner, Mary McDonnell, Graham Greene'
    },
    {
        title: 'Knives Out',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Comedy, Crime, Drama',
        clue3: 'Director: Rian Johnson',
        clue4: 'Tagline: Everyone has a motive. No one has a clue.',
        clue5: 'Characters: Benoit Blanc,  Marta Cabrera, Harlan Thrombey',
        clue6: 'Stars: Daniel Craig, Chris Evans, Ana de Armas'
    },
    {
        title: 'Midsommar',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Drama, Horror, Mystery',
        clue3: 'Director: Ari Aster',
        clue4: 'Tagline: Let the festivities begin',
        clue5: 'Characters: Dani, Christian, Pelle',
        clue6: 'Stars: Florence Pugh, Jack Reynor, Vilhelm Blomgren'
    }, 
    {
        title: 'Get Out',
        clue1: 'Year Released: 2017',
        clue2: 'Genre: Horror, Mystery, Thriller',
        clue3: 'Director: Jordan Peele',
        clue4: "Tagline: Just because you're invited, doesn't mean you're welcome.",
        clue5: 'Characters: Chris Washington, Rose Armitage, Georgina',
        clue6: 'Stars: Daniel Kaluuya, Allison Williams, Bradley Whitford'
    }, 
    {
        title: 'Lady Bird',
        clue1: 'Year Released: 2017',
        clue2: 'Genre: Comedy, Drama',
        clue3: 'Director: Greta Gerwig',
        clue4: 'Tagline: Time to Fly.',
        clue5: "Characters: Marion McPherson, Lady McPherson, Danny O'Neill",
        clue6: 'Stars: Saoirse Ronan, Laurie Metcalf, Tracy Letts'
    },
    {
        title: 'Baby Driver',
        clue1: 'Year Released: 2017',
        clue2: 'Genre: Action, Crime, Drama',
        clue3: 'Director: Edgar Wright',
        clue4: 'Tagline: All you need is one killer track.',
        clue5: 'Characters: Griff, Darling, Baby',
        clue6: 'Stars: Ansel Elgort, Jon Bernthal, Jon Hamm'
    }, 
    {
        title: 'Black Panther',
        clue1: 'Year Released: 2018',
        clue2: 'Genre: Action, Adventure, Sci-Fi',
        clue3: 'Director: Ryan Coogler',
        clue4: 'Tagline: Long live the king.',
        clue5: "Characters: T'Challa, Erik Killmonger, Nakia",
        clue6: "Stars: Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o"
    }, 
    {
        title: 'Jojo Rabbit',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Comedy, Drama, War',
        clue3: 'Director: Taika Waititi',
        clue4: 'Tagline: An anti-hate satire.',
        clue5: 'Characters: Elsa, Adolf, Captain Klenzendorf',
        clue6: 'Stars: Roman Griffin Davis, Thomasin McKenzie, Scarlett Johansson'
    }, 
    {
        title: 'Her',
        clue1: 'Year Released: 2013',
        clue2: 'Genre: Drama, Romance, Sci-Fi',
        clue3: 'Director: Spike Jonze',
        clue4: "Tagline: She's not just a computer.",
        clue5: 'Characters: Theodore, Amy, Samantha',
        clue6: 'Stars: Joaquin Phoenix, Amy Adams, Scarlett Johansson'
    }, 
    {
        title: 'The Social Network',
        clue1: 'Year Released: 2010',
        clue2: 'Genre: Biography, Drama',
        clue3: 'Director: David Fincher',
        clue4: "Tagline: You don't get to 500 million friends without making a few enemies",
        clue5: 'Characters: Mark Zuckerberg, Eduardo Saverin, Sean Parker',
        clue6: 'Stars: Jesse Eisenberg, Andrew Garfield, Justin Timberlake'
    }, 
    {
        title: 'Arrival',
        clue1: 'Year Released: 2016',
        clue2: 'Genre: Drama, Sci-Fi',
        clue3: 'Director: Denis Villeneuve',
        clue4: 'Tagline: Why are they here?',
        clue5: 'Characters: Louise Banks, Ian Donnelly, Colonel Weber',
        clue6: 'Stars: Amy Adams, Jeremy Renner, Forest Whitaker'
    }, 
    {
        title: 'The Lighthouse',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Drama, Fantasy, History',
        clue3: 'Director: Robert Eggers',
        clue4: 'Tagline: There is enchantment in the light.',
        clue5: 'Characters: Thomas Howard, Thomas Wake, Mermaid',
        clue6: 'Stars: Robert Pattinson, Willem Dafoe, Valeriia Karaman'
    }, 
    {
        title: 'American Psycho',
        clue1: 'Year Released: 2000',
        clue2: 'Genre: Crime, Drama, Horror',
        clue3: 'Director: Mary Harron',
        clue4: 'Tagline: No Introduction Necessary.',
        clue5: 'Characters: Patrick Bateman, Timothy Bryce, Craig McDermott',
        clue6: 'Stars: Christian Bale, Justin Theroux, Josh Lucas'
    }, 
    {
        title: 'Scott Pilgrim vs. the World',
        clue1: 'Year Released: 2010',
        clue2: 'Genre: Action, Comedy, Fantasy',
        clue3: 'Director: Edgar Wright',
        clue4: 'Tagline: An epic comeback of epic epicness.',
        clue5: 'Characters: Ramona Flowers, Wallace Wells, Knives Chau',
        clue6: 'Stars: Michael Cera, Mary Elizabeth Winstead, Kieran Culkin'
    }, 
    {
        title: 'Uncut Gems',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Crime, Drama, Thriller',
        clue3: 'Director: Benny Safdie, Josh Safdie',
        clue4: 'Tagline: This is me! This is how *I* win.',
        clue5: 'Characters: Howard Ratner, Julia De Fiore, Julia De Fiore',
        clue6: 'Stars: Adam Sandler, Julia Fox, Idina Menzel'
    }, 
    {
        title: 'Hereditary',
        clue1: 'Year Released: 2018',
        clue2: 'Genre: Drama, Horror, Mystery',
        clue3: 'Director: Ari Aster',
        clue4: 'Tagline: Every family tree hides a secret.',
        clue5: 'Characters: Annie, Charlie, Steve',
        clue6: 'Stars: Toni Collette, Milly Shapiro, Gabriel Byrne'
    }, 
    {
        title: 'Thor: Ragnarok',
        clue1: 'Year Released: 2017',
        clue2: 'Genre: Action, Adventure, Comedy',
        clue3: 'Director: Taika Waititi',
        clue4: 'Tagline: No Hammer. No Problem.',
        clue5: 'Characters: Thor, Loki, Bruce Banner',
        clue6: 'Stars: Chris Hemsworth, Tom Hiddleston, Cate Blanchett'
    }, 
    {
        title: 'Soul',
        clue1: 'Year Released: 2020',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Pete Docter, Kemp Powers',
        clue4: 'Tagline: Everybody has a soul. Joe Gardner is about to find his.',
        clue5: 'Characters: Joe, 22, Moonwind',
        clue6: 'Stars: Jamie Foxx, Tina Fey, Graham Norton'
    }, 
    {
        title: 'Black Swan',
        clue1: 'Year Released: 2010',
        clue2: 'Genre: Drama, Thriller',
        clue3: 'Director: Darren Aronofsky',
        clue4: 'Tagline: I just want to be perfect.',
        clue5: 'Characters: Nina Sayers, Lily, Thomas Leroy',
        clue6: 'Stars: Natalie Portman, Mila Kunis, Vincent Cassel'
    }, 
    {
        title: 'Moonlight',
        clue1: 'Year Released: 2016',
        clue2: 'Genre: Drama',
        clue3: 'Director: Barry Jenkins',
        clue4: 'Tagline: This is the story of a lifetime.',
        clue5: 'Characters: Juan, Paula, Black',
        clue6: 'Stars: Mahershala Ali, Naomie Harris, Trevante Rhodes'
    }, 
    {
        title: 'Dunkirk',
        clue1: 'Year Released: 2017',
        clue2: 'Genre: Action, Drama, History',
        clue3: 'Director: Christopher Nolan',
        clue4: 'Tagline: At the point of crisis, at the point of annihilation, survival is victory.',
        clue5: 'Characters: Tommy, George, Mr. Dawson',
        clue6: 'Stars: Fionn Whitehead, Barry Keoghan, Mark Rylance'
    }, 
    {
        title: 'Marriage Story',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Drama, Romance',
        clue3: 'Director: Noah Baumbach',
        clue4: "Tagline: Where there's a love, there's a way.",
        clue5: 'Characters: Charlie Barber, Nicole Barber, Street Solicitor #1',
        clue6: 'Stars: Adam Driver, Scarlett Johansson, Julia Greer'
    }, 
    {
        title: 'Us',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Horror, Mystery, Thriller',
        clue3: 'Director: Jordan Peele',
        clue4: 'Tagline: We Are Our Own Worst Enemy.',
        clue5: 'Characters: Adelaine Wilson, Gabe Wilson, Kitty Tyler',
        clue6: "Stars: Lupita Nyong'o, Winston Duke, Elisabeth Moss"
    }, 
    {
        title: 'Deadpool',
        clue1: 'Year Released: 2016',
        clue2: 'Genre: Action, Adventure, Comedy',
        clue3: 'Director: Tim Miller',
        clue4: 'Tagline: With great power comes great irresponsibility.',
        clue5: 'Characters: Wade, Vanessa, Weasel',
        clue6: 'Stars: Ryan Reynolds, Morena Baccarin, T.J. Miller'
    }, 
    {
        title: 'A Quiet Place',
        clue1: 'Year Released: 2018',
        clue2: 'Genre: Drama, Horror, Sci-Fi',
        clue3: 'Director: John Krasinski',
        clue4: 'Tagline: If they hear you, they hunt you.',
        clue5: 'Characters: Evelyn Abbott, Lee Abbott, Regan Abbott',
        clue6: 'Stars: Emily Blunt, John Krasinski, Millicent Simmonds'
    }, 
    {
        title: 'Tenet',
        clue1: 'Year Released: 2020',
        clue2: 'Genre: Action, Sci-Fi, Thriller',
        clue3: 'Director: Christopher Nolan',
        clue4: 'Tagline: Time Runs Out',
        clue5: 'Characters: Protagonist, Neil, Kat',
        clue6: 'Stars: John David Washington, Robert Pattinson, Elizabeth Debicki'
    },
    {
        title: 'Guardians of the Galaxy',
        clue1: 'Year Released: 2014',
        clue2: 'Genre: Action, Adventure, Comedy',
        clue3: 'Director: James Gunn',
        clue4: 'Tagline: All heroes start somewhere.',
        clue5: 'Characters: Peter Quill, Groot, Rocket',
        clue6: 'Stars: Chris Pratt, Vin Diesel, Bradley Cooper'
    }, 
    {
        title: 'It',
        clue1: 'Year Released: 2017',
        clue2: 'Genre: Horror',
        clue3: 'Director: Andy Muschietti',
        clue4: "Tagline: You'll float too.",
        clue5: 'Characters: Pennywise, Bill Denbrough, Richie Tozier',
        clue6: 'Stars: Bill Skarsgård, Jaeden Martell, Finn Wolfhard'
    }, 
    {
        title: 'Iron Man',
        clue1: 'Year Released: 2008',
        clue2: 'Genre: Action, Adventure, Sci-Fi',
        clue3: 'Director: Jon Favreau',
        clue4: "Tagline: Heroes aren't born. They're built.",
        clue5: 'Characters: Tony Stark, Pepper Potts, Rhodey',
        clue6: 'Stars: Robert Downey Jr., Gwyneth Paltrow, Terrence Howard'
    }, 
    {
        title: 'Donnie Darko',
        clue1: 'Year Released: 2001',
        clue2: 'Genre: Drama, Mystery, Sci-Fi',
        clue3: 'Director: Richard Kelly',
        clue4: 'Tagline: Life is one long insane trip. Some people just have better directions.',
        clue5: 'Characters: Gretchen Ross, Rose, Eddie',
        clue6: 'Stars: Jake Gyllenhaal, Jena Malone, Mary McDonnell'
    }, 
    {
        title: "Harry Potter and the Sorcerer's Stone",
        clue1: 'Year Released: 2001',
        clue2: 'Genre: Adventure, Family, Fantasy',
        clue3: 'Director: Chris Columbus',
        clue4: 'Tagline: Let the Magic Begin',
        clue5: 'Characters: Ron Weasley, Albus Dumbledore, Hermione Granger',
        clue6: 'Stars: Daniel Radcliffe, Rupert Grint, Emma Watson'
    }, 
    {
        title: 'The Perks of Being a Wallflower',
        clue1: 'Year Released: 2012',
        clue2: 'Genre: Drama, Romance',
        clue3: 'Director: Stephen Chbosky',
        clue4: 'Tagline: We accept the love we think we deserve.',
        clue5: 'Characters: Charlie, Sam, Patrick',
        clue6: 'Stars: Logan Lerman, Emma Watson, Ezra Miller'
    }, 
    {
        title: 'Fantastic Mr. Fox',
        clue1: 'Year Released: 2009',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Wes Anderson',
        clue4: 'Tagline: Dig the life fantastic.',
        clue5: 'Characters: Badger, Ash, Kylie',
        clue6: 'Stars: George Clooney, Meryl Streep, Bill Murray'
    }, 
    {
        title: 'The Shape of Water',
        clue1: 'Year Released: 2017',
        clue2: 'Genre: Drama, Fantasy, Romance',
        clue3: 'Director: Guillermo del Toro',
        clue4: 'Tagline: Experience a connection beyond words.',
        clue5: 'Characters: Elisa Esposito, Zelda Fuller, Richard Strickland',
        clue6: 'Stars: Sally Hawkins, Octavia Spencer, Michael Shannon'
    }, 
    {
        title: 'Ex Machina',
        clue1: 'Year Released: 2014',
        clue2: 'Genre: Drama, Sci-Fi, Thriller',
        clue3: 'Director: Alex Garland',
        clue4: 'Tagline: To erase the line between man and machine is to obscure the line between men and gods',
        clue5: 'Characters: Ava, Caleb, Kyoko',
        clue6: 'Stars: Alicia Vikander, Domhnall Gleeson, Oscar Isaac'
    }, 
    {
        title: 'Birdman',
        clue1: 'Year Released: 2014',
        clue2: 'Genre: Comedy, Drama',
        clue3: 'Director: Alejandro G. Iñárritu',
        clue4: "Tagline: You're Anything But Invisible",
        clue5: 'Characters: Riggan, Jake, Mike',
        clue6: 'Stars: Michael Keaton, Zach Galifianakis, Edward Norton'
    },
    {
        title: 'Titanic',
        clue1: 'Year Released: 1997',
        clue2: 'Genre: Drama, Romance',
        clue3: 'Director: James Cameron',
        clue4: 'Tagline: Collide With Destiny.',
        clue5: 'Characters: Jack Dawson, Rose Dewitt Bukater, Cal Hockley',
        clue6: 'Stars: Leonardo DiCaprio, Kate Winslet, Billy Zane'
    }, 
    {
        title: 'BlacKkKlansman',
        clue1: 'Year Released: 2018',
        clue2: 'Genre: Biography, Comedy, Crime',
        clue3: 'Director: Spike Lee',
        clue4: 'Tagline: Infiltrate hate.',
        clue5: 'Characters: Ron Stallworth, Flip Zimmerman, David Duke',
        clue6: 'Stars: John David Washington, Adam Driver, Laura Harrier'
    }, 
    {
        title: 'The Breakfast Club',
        clue1: 'Year Released: 1985',
        clue2: 'Genre: Comedy, Drama',
        clue3: 'Director: John Hughes',
        clue4: 'Tagline: Five strangers with nothing in common, except each other.',
        clue5: 'Characters: Andrew Clark, John Bender, Claire Standish',
        clue6: 'Stars: Emilio Estevez, Judd Nelson, Molly Ringwald'
    }, 
    {
        title: 'Sixteen Candles',
        clue1: 'Year Released: 1984',
        clue2: 'Genre: Comedy, Romance',
        clue3: 'Director: John Hughes',
        clue4: 'Tagline: This is Samantha Baker and today is her 16th birthday. The problem is, nobody remembers.',
        clue5: 'Characters: Samantha, Geek, Jake',
        clue6: 'Stars: Molly Ringwald, Anthony Michael Hall, Justin Henry'
    }, 
    {
        title: 'Weird Science',
        clue1: 'Year Released: 1985',
        clue2: 'Genre: Comedy, Romance, Sci-Fi',
        clue3: 'Director: John Hughes',
        clue4: "Tagline: If you can't get a date, make one!",
        clue5: 'Characters: Gary Wallace, Wyatt Donnelly, Lisa',
        clue6: 'Stars: Anthony Michael Hall, Ilan Mitchell-Smith, Kelly LeBrock'
    }, 
    {
        title: 'Booksmart',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Comedy',
        clue3: 'Director: Olivia Wilde',
        clue4: "Tagline: Getting Straight A's. Giving Zero F's.",
        clue5: 'Characters: Amy, Molly, Miss Fine',
        clue6: 'Stars: Kaitlyn Dever, Beanie Feldstein, Jessica Williams'
    }, 
    {
        title: 'The Martian',
        clue1: 'Year Released: 2015',
        clue2: 'Genre: Adventure, Drama, Sci-Fi',
        clue3: 'Director: Ridley Scott',
        clue4: 'Tagline: Bring him home',
        clue5: 'Characters: Mark Watney, Melissa Lewis, Annie Montrose',
        clue6: 'Stars: Matt Damon, Jessica Chastain, Kristen Wiig'
    }, 
    {
        title: 'Encanto',
        clue1: 'Year Released: 2021',
        clue2: 'Genre: Animation, Comedy, Family',
        clue3: 'Director: Jared Bush, Byron Howard, Charise Castro Smith',
        clue4: 'Tagline: Magical House. Magical Family.',
        clue5: 'Characters: Mirabel, Abuela Alma, Bruno',
        clue6: 'Stars: Stephanie Beatriz, María Cecilia Botero, John Leguizamo'
    }, 
    {
        title: 'The Witch',
        clue1: 'Year Released: 2015',
        clue2: 'Genre: Drama, Fantasy, History',
        clue3: 'Director: Robert Eggers',
        clue4: 'Tagline: A New-England Folktale.',
        clue5: 'Characters: Thomasin, William, Katherine',
        clue6: 'Stars: Anya Taylor-Joy, Ralph Ineson, Kate Dickie'
    }, 
    {
        title: 'Lost in Translation',
        clue1: 'Year Released: 2003',
        clue2: 'Genre: Comedy, Drama',
        clue3: 'Director: Sofia Coppola',
        clue4: 'Tagline: Sometimes you have to go halfway around the world to come full circle',
        clue5: 'Characters: Bob Harris, Charlotte, John',
        clue6: 'Stars: Bill Murray, Scarlett Johansson, Giovanni Ribisi'
    }, 
    {
        title: 'Moonrise Kingdom',
        clue1: 'Year Released: 2012',
        clue2: 'Genre: Comedy, Drama, Romance',
        clue3: 'Director: Wes Anderson',
        clue4: 'Tagline: A tormenting and surprising story of children and adults during the stormy days of the summer of 1965.',
        clue5: 'Characters: Sam, Suzy, Scout Master Ward',
        clue6: 'Stars: Jared Gilman, Kara Hayward, Bruce Willis'
    }, 
    {
        title: 'The Revenant',
        clue1: 'Year Released: 2015',
        clue2: 'Genre: Action, Adventure, Drama',
        clue3: 'Director: Alejandro G. Iñárritu',
        clue4: 'Tagline: (n. One who has returned, as if from the dead.)',
        clue5: 'Characters: Hugh Glass, John Fitzgerald, Bridger',
        clue6: 'Stars: Leonardo DiCaprio, Tom Hardy, Will Poulter'
    }, 
    {
        title: 'Little Miss Sunshine',
        clue1: 'Year Released: 2006',
        clue2: 'Genre: Comedy, Drama',
        clue3: 'Director: Jonathan Dayton, Valerie Faris',
        clue4: 'Tagline: Everyone just pretend to be normal',
        clue5: 'Characters: Frank, Sheryl, Olive',
        clue6: 'Stars: Steve Carell, Toni Collette, Abigail Breslin'
    }, 
    {
        title: 'Coming to America',
        clue1: 'Year Released: 1988',
        clue2: 'Genre: Comedy, Romance',
        clue3: 'Director: John Landis',
        clue4: 'Tagline: This summer, Prince Akeem discovers America.',
        clue5: 'Characters: Prince Akeem, Semmi, Cleo McDowell',
        clue6: 'Stars: Eddie Murphy, Arsenio Hall, John Amos'
    }, 
    {
        title: 'Bad Boys',
        clue1: 'Year Released: 1995',
        clue2: 'Genre: Action, Comedy, Crime',
        clue3: 'Director: Michael Bay',
        clue4: 'Tagline: Whatcha gonna do?',
        clue5: 'Characters: Mike Lowrey, Marcus Burnett, Eddie Dominguez',
        clue6: 'Stars: Will Smith, Martin Lawrence, Lisa Boyle'
    }, 
    {
        title: '10 Things I Hate About You',
        clue1: 'Year Released: 1999',
        clue2: 'Genre: Comedy, Drama, Romance',
        clue3: 'Director: Gil Junger',
        clue4: 'Tagline: How do I loathe thee? Let me count the ways.',
        clue5: 'Characters: Patrick Verona, Kat Stratford, Cameron James',
        clue6: 'Stars: Heath Ledger, Julia Stiles, Joseph Gordon-Levitt'
    }, 
    {
        title: 'John Wick',
        clue1: 'Year Released: 2014',
        clue2: 'Genre: Action, Crime, Thriller',
        clue3: 'Director: Chad Stahelski, David Leitch',
        clue4: 'Tagline: Revenge is all he has left.',
        clue5: 'Characters: Viggo Tarasov, Iosef Tarasov, John',
        clue6: 'Stars: Keanu Reeves, Michael Nyqvist, Alfie Allen'
    }, 
    {
        title: 'The Irishman',
        clue1: 'Year Released: 2019',
        clue2: 'Genre: Biography, Crime, Drama',
        clue3: 'Director: Martin Scorsese',
        clue4: 'Tagline: His story changed history.',
        clue5: 'Characters: Frank Sheeran, Jimmy Hoffa, Russell Bufalino',
        clue6: 'Stars: Robert De Niro, Al Pacino, Joe Pesci'
    }, 
    {
        title: 'The Lobster',
        clue1: 'Year Released: 2015',
        clue2: 'Genre: Comedy, Drama, Romance',
        clue3: 'Director: Yorgos Lanthimos',
        clue4: 'Tagline: An unconventional love story by Yorgos Lanthimos.',
        clue5: 'Characters: David, Short Sighted Woman, Nosebleed Woman',
        clue6: 'Stars: Colin Farrell, Rachel Weisz, Jessica Barden'
    }, 
    {
        title: 'Luca',
        clue1: 'Year Released: 2021',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Enrico Casarosa',
        clue4: 'Tagline: Silenzio Bruno.',
        clue5: 'Characters: Alberto Scorfano, Giulia Marcovaldo, Ercole Visconti',
        clue6: 'Stars: Jacob Tremblay, Jack Dylan Grazer, Emma Berman'
    }, 
    {
        title: 'Mulholland Drive',
        clue1: 'Year Released: 2001',
        clue2: 'Genre: Drama, Mystery, Thriller',
        clue3: 'Director: David Lynch',
        clue4: 'Tagline: Beware what you dream for...',
        clue5: 'Characters: Betty, Rita, Adam',
        clue6: 'Stars: Naomi Watts, Laura Harring, Justin Theroux'
    },
    {
        title: 'The Hunger Games',
        clue1: 'Year Released: 2012',
        clue2: 'Genre: Action, Adventure, Sci-Fi',
        clue3: 'Director: Gary Ross',
        clue4: 'Tagline: May the Odds be Ever in your Favor',
        clue5: 'Characters: Katniss Everdeen, Peeta Mellark, Gale Hawthorne',
        clue6: 'Stars: Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth'
    },
    {
        title: 'Shrek',
        clue1: 'Year Released: 2001',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Andrew Adamson, Vicky Jenson',
        clue4: 'Tagline: The greatest fairy tale never told.',
        clue5: 'Characters: Donkey, Princess Fiona, Lord Farquaad',
        clue6: 'Stars: Mike Myers, Eddie Murphy, Cameron Diaz'
    }, 
    {
        title: 'Austin Powers: International Man of Mystery',
        clue1: 'Year Released: 1997',
        clue2: 'Genre: Adventure, Comedy',
        clue3: 'Director: Jay Roach',
        clue4: "Tagline: If he were any cooler, he'd still be frozen, baby!",
        clue5: 'Characters: Vanessa Kensington, Basil Exposition, Number Two',
        clue6: 'Stars: Mike Myers, Elizabeth Hurley, Michael York'
    }, 
    {
        title: 'Avatar',
        clue1: 'Year Released: 2009',
        clue2: 'Genre: Action, Adventure, Fantasy',
        clue3: 'Director: James Cameron',
        clue4: 'Tagline: Enter the World',
        clue5: 'Characters: Jake Sully, Neytiri, Dr. Grace Augustine',
        clue6: 'Stars: Sam Worthington, Zoe Saldana, Sigourney Weaver'
    }, 
    {
        title: 'Wonder Woman',
        clue1: 'Year Released: 2017',
        clue2: 'Genre: Action, Adventure, Fantasy',
        clue3: 'Director: Patty Jenkins',
        clue4: 'Tagline: Power. Grace. Wisdom. Wonder.',
        clue5: 'Characters: Diana, Steve Trevor, Antiope',
        clue6: 'Stars: Gal Gadot, Chris Pine, Robin Wright'
    }, 
    {
        title: 'Split',
        clue1: 'Year Released: 2016',
        clue2: 'Genre: Horror, Thriller',
        clue3: 'Director: M. Night Shyamalan',
        clue4: 'Tagline: Kevin has 23 distinct personalities. The 24th is about to be unleashed.',
        clue5: 'Characters: Dennis, Casey Cooke, Claire Benoit',
        clue6: 'Stars: James McAvoy, Anya Taylor-Joy, Haley Lu Richardson'
    }, 
    {
        title: '500 Days of Summer',
        clue1: 'Year Released: 2009',
        clue2: 'Genre: Comedy, Drama, Romance',
        clue3: 'Director: Marc Webb',
        clue4: "Tagline: Boy meets girl. Boy falls in love. Girl doesn't.",
        clue5: 'Characters: Tom, Summer, McKenzie',
        clue6: 'Stars: Zooey Deschanel, Joseph Gordon-Levitt, Geoffrey Arend'
    }, 
    {
        title: 'Scream',
        clue1: 'Year Released: 1996',
        clue2: 'Genre: Horror, Mystery',
        clue3: 'Director: Wes Craven',
        clue4: "Tagline: Don't Answer The Phone. Don't Open The Door. Don't Try To Escape.",
        clue5: 'Characters: Sidney, Gale Weathers, Deputy Dewey',
        clue6: 'Stars: Neve Campbell, Courteney Cox, David Arquette'
    }, 
    {
        title: 'Home Alone',
        clue1: 'Year Released: 1990',
        clue2: 'Genre: Comedy, Family',
        clue3: 'Director: Chris Columbus',
        clue4: 'Tagline: A family comedy without the family.',
        clue5: 'Characters: Kevin, Harry, Marv',
        clue6: 'Stars: Macaulay Culkin, Joe Pesci, Daniel Stern'
    }, 
    {
        title: 'Superbad',
        clue1: 'Year Released: 2007',
        clue2: 'Genre: Comedy',
        clue3: 'Director: Greg Mottola',
        clue4: 'Tagline: Come and Get Some',
        clue5: 'Characters: Evan, Jules, Fogell',
        clue6: 'Stars: Michael Cera, Jonah Hill, Christopher Mintz-Plasse'
    }, 
    {
        title: "Ferris Bueller's Day Off",
        clue1: 'Year Released: 1986',
        clue2: 'Genre: Comedy',
        clue3: 'Director: John Hughes',
        clue4: "Tagline: One Man's Struggle To Take It Easy",
        clue5: 'Characters: Cameron Frye, Sloane Peterson, Ed Rooney',
        clue6: 'Stars: Matthew Broderick, Alan Ruck, Mia Sara'
    }, 
    {
        title: 'Isle of Dogs',
        clue1: 'Year Released: 2018',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Wes Anderson',
        clue4: "Tagline: Don't ask me to fetch that stick.",
        clue5: 'Characters: Chief, Atari, Rex',
        clue6: 'Stars: Bryan Cranston, Koyu Rankin, Edward Norton'
    }, 
    {
        title: 'Zootopia',
        clue1: 'Year Released: 2016',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Byron Howard, Rich Moore, Jared Bush',
        clue4: 'Tagline: Welcome to the urban jungle.',
        clue5: 'Characters: Judy Hopps, Nick Wilde, Chief Bogo',
        clue6: 'Stars: Ginnifer Goodwin, Jason Bateman, Idris Elba'
    }, 
    {
        title: 'Shaun of the Dead',
        clue1: 'Year Released: 2004',
        clue2: 'Genre: Comedy, Horror',
        clue3: 'Director: Edgar Wright',
        clue4: 'Tagline: Buy Milk. Ring Mum. Dodge Zombies',
        clue5: 'Characters: Ed, Liz, Dianne',
        clue6: 'Stars: Simon Pegg, Nick Frost, Kate Ashfield'
    }, 
    {
        title: 'Hot Fuzz',
        clue1: 'Year Released: 2007',
        clue2: 'Genre: Action, Comedy, Mystery',
        clue3: 'Director: Edgar Wright',
        clue4: 'Tagline: When the heat is on, you gotta call the fuzz.',
        clue5: 'Characters: Nicholas Angel, PC Danny Butterman, Met Sergeant',
        clue6: 'Stars: Simon Pegg, Nick Frost, Martin Freeman'
    }, 
    {
        title: 'Juno',
        clue1: 'Year Released: 2007',
        clue2: 'Genre: Comedy, Drama',
        clue3: 'Director: Jason Reitman',
        clue4: 'Tagline: A comedy about growing up... and the bumps along the way.',
        clue5: 'Characters: Paulie Bleeker, Vanessa Loring, Mark Loring',
        clue6: 'Stars: Michael Cera, Elliot Page, Jennifer Garner'
    }, 
    {
        title: 'Coraline',
        clue1: 'Year Released: 2009',
        clue2: 'Genre: Animation, Drama, Family',
        clue3: 'Director: Henry Selick',
        clue4: "Tagline: The braver you are, the more you'll see",
        clue5: 'Characters: Mel Jones, Charlie Jones, Miss April Spink',
        clue6: 'Stars: Dakota Fanning, Teri Hatcher, John Hodgman'
    }, 
    {
        title: 'Minari',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Palm Springs',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Edward Scissorhands',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Moana',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Nightmare Before Christmas',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Halloween',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Gravity',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Brokeback Mountain',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Cruella',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Royal Tenenbaums',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Clueless',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'E.T.',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Eyes Wide Shut',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Frozen',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Devil Wears Prada',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    },
    {
        title: 'The Big Short',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Zombieland',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Free Guy',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Twilight',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Sorry to Bother You',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'School of Rock',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'It Follows',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Midnight in Paris',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Beetlejuice',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Punch-Drunk Love',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Lego Movie',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Ghostbusters',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'About Time',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Farewell',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Princess Bride',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Hangover',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Mulan',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: '21 Jump Street',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Mitchells vs. The Machines',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Edge of Seventeen',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: '10 Cloverfield Lane',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Rocky Horror Picture Show',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Greatest Showman',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Now You See Me',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Carrie',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Heathers',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Jumanji',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Edge of Tomorrow',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Borat',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Slumdog Millionaire',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Game Night',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Legally Blonde',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Kick-Ass',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Love Actually',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Crazy, Stupid, Love',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Elf',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Blair Witch Project',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Men in Black',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Notebook',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Grease',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Pokémon Detective Pikachu',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: "The Emperor's New Groove",
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Looper',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Hidden Figures',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Iron Giant',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Big Fish',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    },
    {
        title: 'World War Z',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Moneyball',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    },
    {
        title: 'Cast Away',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Pitch Perfect',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: '28 Days Later',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: "The King's Speech",
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Evil Dead',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Saw',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Ice Age',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Paddington',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'I Am Legend',
        clue1: 'Year Released: 2007',
        clue2: 'Genre: Action, Drama, Sci-Fi',
        clue3: 'Director: Francis Lawrence',
        clue4: 'Tagline: The last man on earth is not alone',
        clue5: 'Characters: Robert Neville, Anna, Alpha Female',
        clue6: 'Stars: Will Smith, Alice Braga, Charlie Tahan'
    }, 
    {
        title: 'American Hustle',
        clue1: 'Year Released: 2013',
        clue2: 'Genre: Crime, Drama',
        clue3: 'Director: David O. Russell',
        clue4: 'Tagline: Everyone Hustles To Survive',
        clue5: 'Characters: Irving Rosenfeld, Sydney Prosser, Richie DiMaso',
        clue6: 'Stars: Christian Bale, Amy Adams, Bradley Cooper'
    }, 
    {
        title: 'Planet of the Apes',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: '13 Going on 30',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Burn After Reading',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'District 9',
        clue1: 'Year Released: 2009',
        clue2: 'Genre: Action, Sci-Fi, Thriller',
        clue3: 'Director: Neill Blomkamp',
        clue4: 'Tagline: You are not welcome here.',
        clue5: 'Characters: Wikus Van De Merwe, Koobus Venter, Sarah Livingstone - Sociologist',
        clue6: 'Stars: Sharlto Copley, David James, Jason Cope'
    }, 
    {
        title: 'Sherlock Holmes',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'This Is the End',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Murder on the Orient Express',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Night at the Museum',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'National Treasure',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Fast Times at Ridgemont High',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Yesterday',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Airplane!',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Mask',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Enter the Dragon',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Little Mermaid',
        clue1: 'Year Released: 1989',
        clue2: 'Genre: Animation, Adventure, Comedy',
        clue3: 'Director: Ron Clements, John Musker',
        clue4: 'Tagline: Sea it',
        clue5: 'Characters: Ariel, Sebastian, Flounder',
        clue6: 'Stars: Jodi Benson, Samuel E. Wright, Rene Auberjonois'
    }, 
    {
        title: 'Minority Report',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Big Sick',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Tropic Thunder',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The 40-Year-Old Virgin',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Gremlins',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Secret Life of Walter Mitty',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Bridesmaids',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Goonies',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Fifth Element',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: '300',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Napoleon Dynamite',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    },
    {
        title: 'Pretty Woman',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    },
    {
        title: 'The Mummy',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Willy Wonka & the Chocolate Factory',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Space Jam',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Anchorman: The Legend of Ron Burgundy',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Mission: Impossible',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Transformers',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Bourne Identity',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Night of the Living Dead',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Independence Day',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Fast and the Furious',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Goldfinger',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: '50 First Dates',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Chef',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'High School Musical',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Super 8',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Interview with the Vampire',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Interview',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Holiday',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Step Brothers',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Point Break',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Poltergeist',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Raising Arizona',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Signs',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Speed',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Friday the 13th',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Hocus Pocus',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Zoolander',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Bruce Almighty',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Addams Family',
        clue1: 'Year Released: 1991',
        clue2: 'Genre: Comedy, Fantasy',
        clue3: 'Director: Barry Sonnenfeld',
        clue4: "Tagline: It's not the same old Thing.",
        clue5: 'Characters: Gomez, Morticia, Uncle Fester',
        clue6: 'Stars: Anjelica Huston, Raul Julia, Christopher Lloyd'
    }, 
    {
        title: 'Pineapple Express',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Imitation Game',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Ring',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: '50/50',
        clue1: 'Year Released: 2011',
        clue2: 'Genre: Comedy, Drama, Romance',
        clue3: 'Director: Jonathan Levine',
        clue4: 'Tagline: It takes a pair to beat the odds',
        clue5: 'Characters: Adam, Kyle, Richard - Alzheimer Dad',
        clue6: 'Stars: Joseph Gordon-Levitt, Seth Rogen, Anna Kendrick'
    }, 
    {
        title: "National Lampoon's Vacation",
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Ace Ventura: Pet Detective',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Yes Man',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Hook',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Face/Off',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Blind Side',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'American Pie',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Office Space',
        clue1: 'Year Released: 1999',
        clue2: 'Genre: Comedy',
        clue3: 'Director: Mike Judge',
        clue4: 'Tagline: Work Sucks.',
        clue5: 'Characters: Peter, Joanna, Michael Bolton',
        clue6: 'Stars: Ron Livingston, Jennifer Aniston, David Herman'
    }, 
    {
        title: "Bill & Ted's Excellent Adventure",
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Dumb and Dumber',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Big',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'Labyrinth',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    }, 
    {
        title: 'The Proposal',
        clue1: 'Year Released: ',
        clue2: 'Genre: ',
        clue3: 'Director: ',
        clue4: 'Tagline: ',
        clue5: 'Characters: ',
        clue6: 'Stars: '
    },  
];

let answerOrder = [355,281,325,35,319,346,73,19,148,142,255,200,299,37,220,213,340,84,353,207,203,
    149,251,54,217,234,150,326,27,195,160,25,315,104,241,101,23,317,110,119,304,153,79,122,270,276,
    347,121,74,320,28,11,286,117,308,233,243,214,306,127,0,133,288,332,205,31,107,9,64,131,141,298,
    335,103,226,191,90,327,144,260,235,359,258,361,87,184,267,212,108,109,181,318,155,343,116,26,88,
    21,248,345,162,17,232,146,158,93,58,323,278,225,115,112,94,171,176,206,292,118,307,75,194,296,348,
    4,360,80,143,81,352,113,291,152,137,221,100,33,268,63,175,53,51,224,49,190,105,186,279,236,89,182,
    164,316,170,285,6,96,52,34,229,69,2,269,230,328,43,124,7,48,309,65,254,293,151,187,180,198,231,354,
    30,38,202,300,83,242,274,163,358,76,135,244,289,333,70,302,68,29,174,259,227,40,312,15,8,301,305,263,
    264,145,44,156,91,257,284,86,41,55,169,275,280,120,334,126,351,322,46,238,159,59,140,356,42,321,95,211,
    271,362,273,265,3,215,277,173,337,138,266,256,130,262,14,219,339,341,98,106,357,363,324,62,364,13,39,128,
    218,216,72,330,189,208,210,178,45,61,12,123,228,313,350,329,185,188,331,157,311,161,239,154,252,82,247,18,
    67,193,47,336,10,71,77,290,294,36,114,132,24,179,349,282,365,240,129,209,222,78,97,56,85,134,165,314,147,32,
    283,50,22,295,223,196,1,303,166,66,310,136,272,246,245,5,250,249,338,199,197,92,111,167,253,177,99,168,16,342,
    261,139,183,102,60,344,204,201,20,172,57,192,125,297,237,287];