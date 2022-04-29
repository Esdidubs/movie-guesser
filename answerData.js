let answerData = [
    {
        title: 'The Shawshank Redemption',
        clue1: '1994 - Drama',
        clue2: 'Director: Frank Darabont',
        clue3: 'Tagline: Fear can hold you prisoner. Hope can set you free.',
        clue4: 'Characters: Andy Dufresne, Ellis Boyd Redding, Warden Norton',
        clue5: 'Stars: Tim Robbins, Morgan Freeman, Bob Gunton',
        clue6: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
        title: 'The Godfather',
        clue1: '1972 - Crime, Drama',
        clue2: 'Director: Francis Ford Coppola',
        clue3: "Tagline: An offer you can't refuse",
        clue4: 'Characters: Michael, Sonny, Don Vito Corleone',
        clue5: 'Stars: Marlon Brando, Al Pacino, James Caan', 
        clue6: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.'
    },
    {
        title: 'The Dark Knight',
        clue1: '2008 - Action, Crime, Drama',
        clue2: 'Director: Christopher Nolan',
        clue3: 'Tagline: Why so serious?',
        clue4: 'Characters: Bruce Wayne, Harvey Dent, Joker',
        clue5: 'Stars: Christian Bale, Heath Ledger, Aaron Eckhart',
        clue6: 'When the menace wreaks havoc and chaos on the people of Gotham, a hero must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
    },
    {
        title: '12 Angry Men',
        clue1: '1957 - Crime, Drama',
        clue2: 'Director: Sidney Lumet',
        clue3: 'Tagline: Life is in their hands -- Death is on their minds!',
        clue4: 'Characters: Juror 8, Juror 1, Juror 3',
        clue5: 'Stars: Henry Fonda, Lee J. Cobb, Martin Balsam',
        clue6: 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.'
    },
    {
        title: "Schindler's List",
        clue1: '1993 - Biography, Drama, History',
        clue2: 'Director: Steven Spielberg',
        clue3: 'Tagline: Whoever saves one life, saves the world entire.',
        clue4: 'Characters: ',
        clue5: 'Stars: Liam Neeson, Ralph Fiennes, Ben Kingsley',
        clue6: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.'
    },
    {
        title: 'Pulp Fiction',
        clue1: '1994 - Crime, Drama',
        clue2: 'Director: Quentin Tarantino',
        clue3: "Tagline: Girls like me don't make invitations like this to just anyone!",
        clue4: 'Characters: Vincent Vega, Mia Wallace, Jules Winnfield',
        clue5: 'Stars: John Travolta, Uma Thurman, Samuel L Jackson',
        clue6: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
    },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        clue1: '2001 - Action, Adventure, Drama',
        clue2: 'Director: Peter Jackson',
        clue3: 'Tagline: The Legend Comes to Life',
        clue4: 'Characters: Bilbo Baggins, Frodo, Gandalf',
        clue5: 'Stars: Elijah Wood, Ian McKellen, Orlando Bloom',
        clue6: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.'
    }, 
    {
        title: 'The Good, the Bad and the Ugly',
        clue1: '1966 - Action, Western',
        clue2: 'Director: Sergio Leone',
        clue3: "Tagline: They formed an alliance of hate to steal a fortune in dead man's gold",
        clue4: 'Characters: Blondie, Tuco, Sentenza',
        clue5: 'Stars: Clint Eastwood, Eli Wallach, Lee Van Cleef',
        clue6: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.'
    }, 
    {
        title: 'Forrest Gump',
        clue1: '1994 - Drama, Romance',
        clue2: 'Director: Robert Zemeckis',
        clue3: 'Tagline: The story of a lifetime.',
        clue4: 'Characters: Lieutenant Dan, Jenny Curran, Forrest',
        clue5: 'Stars: Tom Hanks, Robin Wright, Gary Sinise',
        clue6: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.'
    },
    {
        title: 'Fight Club',
        clue1: '1999 - Drama',
        clue2: 'Director: David Fincher',
        clue3: 'Tagline: Mischief. Mayhem. Soap.',
        clue4: 'Characters: Tyler Durden, Narrator, Robert Paulsen',
        clue5: 'Stars: Brad Pitt, Edward Norton, Meat Loaf',
        clue6: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.'
    },
    {
        title: 'Inception',
        clue1: '2010 - Action, Adventure, Sci-Fi',
        clue2: 'Director: Christopher Nolan',
        clue3: 'Tagline: The dream is real.',
        clue4: 'Characters: Cobb, Arthur, Ariadne',
        clue5: 'Stars: Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
        clue6: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.'
    },
    {
        title: 'The Matrix',
        clue1: '1999 - Action, Sci-Fi',
        clue2: 'Director: Lana Wachowski, Lilly Wachowski',
        clue3: 'Tagline: Welcome to the real world',
        clue4: 'Characters: Neo, Morpheus, Trinity',
        clue5: 'Stars: Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
        clue6: 'When a beautiful stranger leads a computer hacker to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.'
    },
    {
        title: 'Goodfellas',
        clue1: '1990 - Biography, Crime, Drama',
        clue2: 'Director: Martin Scorsese',
        clue3: 'Tagline: Three decades of life in the mafia',
        clue4: 'Characters: James Conway, Henry Hill, Tommy DeVito',
        clue5: 'Stars: Robert De Niro, Ray Liotta, Joe Pesci',
        clue6: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.'
    },
    {
        title: "One Flew Over the Cuckoo's Nest",
        clue1: '1975 - Drama',
        clue2: 'Director: Milos Forman',
        clue3: "Tagline: If he's crazy, what does that make you?",
        clue4: 'Characters: R.P. McMurphy, Nurse Ratched, Ellis',
        clue5: 'Stars: Jack Nicholson, Louise Fletcher, Michael Berryman',
        clue6: 'A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.'
    },
    {
        title: 'Se7en',
        clue1: '1995 - Crime, Drama, Mystery',
        clue2: 'Director: David Fincher',
        clue3: 'Tagline: Gluttony * Greed * Sloth * Envy * Wrath * Pride * Lust',
        clue4: 'Characters: Somerset, Mills, John Doe',
        clue5: 'Stars: Morgan Freeman, Brad Pitt, Kevin Spacey',
        clue6: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.'
    },
    {
        title: "It's a Wonderful Life",
        clue1: '1946 - Drama, Family, Fantasy',
        clue2: 'Director: Frank Capra',
        clue3: 'Tagline: Every time a bell rings, an angel gets its wings.',
        clue4: 'Characters: George Bailey, Mary Hatch, Mr. Potter',
        clue5: 'Stars: James Stewart, Donna Reed, Lionel Barrymore',
        clue6: 'An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.'
    },
    {
        title: 'The Silence of the Lambs',
        clue1: '1991 - Crime, Drama, Thriller',
        clue2: 'Director: Jonathan Demme',
        clue3: 'Tagline: To enter the mind of a killer she must challenge the mind of a madman.',
        clue4: 'Characters: Clarice Starling, Dr. Hannibal Lecter, Ardelia Mapp',
        clue5: 'Stars: Jodie Foster, Anthony Hopkins, Lawrence A. Bonney',
        clue6: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.'
    },
    {
        title: 'Saving Private Ryan',
        clue1: '1998 - Drama, War',
        clue2: 'Director: Steven Spielberg',
        clue3: 'Tagline: The mission is a man.',
        clue4: 'Characters: Captain Miller, Sergeant Horvath, Private Reiben',
        clue5: 'Stars: Tom Hanks, Matt Damon, Tom Sizemore',
        clue6: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.'
    },
    {
        title: 'The Green Mile',
        clue1: '1999 - Crime, Drama, Fantasy',
        clue2: 'Director: Frank Darabont',
        clue3: "Tagline: Walk a mile you'll never forget.",
        clue4: "Characters: Paul Edgecomb, John Coffey, 'Brutal' Howell",
        clue5: 'Stars: Tom Hanks, Michael Clarke Duncan, David Morse',
        clue6: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.'
    },
    {
        title: 'Star Wars',
        clue1: '1977 - Action, Adventure, Fantasy',
        clue2: 'Director: George Lucas',
        clue3: 'Tagline: A long time ago in a galaxy far, far away...',
        clue4: 'Characters: Chief Jawa, Darth Vader, Han Solo',
        clue5: 'Stars: Mark Hamill, Harrison Ford, Carrie Fisher',
        clue6: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
    },
    {
        title: 'Interstellar',
        clue1: '2014 - Adventure, Drama, Sci-Fi',
        clue2: 'Director: Christopher Nolan',
        clue3: 'Tagline: Mankind was born on Earth. It was never meant to die here.',
        clue4: 'Characters: Cooper, Brand, Murph',
        clue5: 'Stars: Matthew McConaughey, Anne Hathaway, Jessica Chastain',
        clue6: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
        title: 'Terminator 2: Judgment Day',
        clue1: '1991 - Action, Sci-Fi',
        clue2: 'Director: James Cameron',
        clue3: "Tagline: This time he's back...for good!",
        clue4: 'Characters: Sarah Conner, John Conner, T-1000',
        clue5: 'Stars: Arnold Schwarzenegger, Linda Hamilton, Edward Furlong',
        clue6: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.'
    },
    {
        title: 'Back to the Future',
        clue1: '1985 - Adventure, Comedy, Sci-Fi',
        clue2: 'Director: Robert Zemeckis',
        clue3: "Tagline: He's the only kid ever to get into trouble before he was born.",
        clue4: 'Characters: Marty McFly, Dr. Emmett Brown, Biff',
        clue5: 'Stars: Michael J. Fox, Christopher Lloyd, Lea Thompson',
        clue6: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.'
    },
    {
        title: 'Spirited Away',
        clue1: '2001 - Animation, Adventure, Family',
        clue2: 'Director: Hayao Miyazaki',
        clue3: 'Tagline: The tunnel led Chihiro to a mysterious town.',
        clue4: 'Characters: Chihiro, Yubaba, Haku',
        clue5: 'Stars: Daveigh Chase, Suzanne Pleshette',
        clue6: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
    },
    {
        title: 'Psycho',
        clue1: '1960 - Horror, Mystery, Thriller',
        clue2: 'Director: Alfred Hitchcock',
        clue3: 'Tagline: Exploring the blackness of the subconscious man',
        clue4: 'Characters: Norman Bates, Marion Crane, Sam Loomis',
        clue5: 'Stars: Anthony Perkins, Janet Leigh, Vera Miles',
        clue6: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother."
    },
    {
        title: 'The Pianist',
        clue1: '2002 - Biography, Drama, Music',
        clue2: 'Director: Roman Polanski',
        clue3: 'Tagline: Music was his passion. Survival was his masterpiece.',
        clue4: 'Characters: Wladyslaw Szpilman, Captain Wilm Hosenfeld, Dorota',
        clue5: 'Stars: Adrien Brody, Thomas Kretschmann, Frank Finlay',
        clue6: 'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.'
    },
    {
        title: 'Léon: The Professional',
        clue1: '1994 - Action, Crime, Drama',
        clue2: 'Director: Luc Besson',
        clue3: 'Tagline: If you want the job done right, hire a professional.',
        clue4: 'Characters: Mathilda, Stansfield, Leon',
        clue5: 'Stars: Jean Reno, Gary Oldman, Natalie Portman',
        clue6: "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade."
    },
    {
        title: 'Parasite',
        clue1: '2019 - Comedy, Drama, Horror',
        clue2: 'Director: Bong Joon Ho',
        clue3: 'Tagline: Act like you own the place',
        clue4: 'Characters: Ki Taek, Dong Ik, Yeon Kyo',
        clue5: 'Stars: Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho',
        clue6: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.'
    },
    {
        title: 'The Lion King',
        clue1: '1994 - Animation, Adventure, Drama',
        clue2: 'Director: Roger Allers, Rob Minkoff',
        clue3: 'Tagline: The greatest adventure of all is finding our place in the circle of life.',
        clue4: 'Characters: Simba, Scar, Mufasa',
        clue5: 'Stars: Matthew Broderick, Jeremy Irons, James Earl Jones',
        clue6: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.'
    },
    {
        title: 'American History X',
        clue1: '1998 - Drama',
        clue2: 'Director: Tony Kaye',
        clue3: 'Tagline: His father taught him to hate. His friends taught him rage. His enemies gave him hope.',
        clue4: 'Characters: Derek, Danny, Doris',
        clue5: "Stars: Edward Norton, Edward Furlong, Beverly D'Angelo",
        clue6: 'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.'
    },
    {
        title: 'Gladiator',
        clue1: '2000 - Action, Adventure, Drama',
        clue2: 'Director: Ridley Scott',
        clue3: 'Tagline: What we do in life echoes in eternity',
        clue4: 'Characters: Maximus, Commodus, Lucilla',
        clue5: 'Stars: Russell Crowe, Joaquin Phoenix, Connie Nielsen',
        clue6: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.'
    },
    {
        title: 'The Usual Suspects',
        clue1: '1995 - Crime, Drama, Mystery',
        clue2: 'Director: Bryan Singer',
        clue3: 'Tagline: Five Criminals. One Line Up. No Coincidence',
        clue4: 'Characters: Verbal, Keaton, McManus',
        clue5: 'Stars: Kevin Spacey, Gabriel Byrne, Chazz Palminteri',
        clue6: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.'
    },
    {
        title: 'The Departed',
        clue1: '2006 - Crime, Drama, Thriller',
        clue2: 'Director: Martin Scorsese',
        clue3: 'Tagline: Lies. Betrayal. Sacrifice. How far will you take it?',
        clue4: 'Characters: Billy, Colin, Costello',
        clue5: 'Stars: Leonardo DiCaprio, Matt Damon, Jack Nicholson',
        clue6: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.'
    },
    {
        title: 'The Prestige',
        clue1: '2006 - Drama, Mystery, Thriller',
        clue2: 'Director: Christopher Nolan',
        clue3: 'Tagline: A friendship that became a rivalry.',
        clue4: 'Characters: Alfred Borden, Robert Angier, Tesla',
        clue5: 'Stars: Christian Bale, Hugh Jackman, Scarlett Johansson',
        clue6: 'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.'
    },
    {
        title: 'Casablanca',
        clue1: '1942 - Drama, Romance, War',
        clue2: 'Director: Michael Curtiz',
        clue3: 'Tagline: Where love cuts as deep as a dagger!',
        clue4: 'Characters: Rick Blaine, Ilsa Lund, Victor Laszlo',
        clue5: 'Stars: Humphrey Bogart, Ingrid Bergman, Paul Henreid',
        clue6: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.'
    },
    {
        title: 'Whiplash',
        clue1: '2014 - Drama, Music',
        clue2: 'Director: Damien Chazelle',
        clue3: 'Tagline: The road to greatness can take you to the edge',
        clue4: 'Characters: Andrew, Fletcher, Nicole',
        clue5: 'Stars: Miles Teller, J.K. Simmons, Melissa Benoist',
        clue6: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
    },
    {
        title: 'Rear Window',
        clue1: '1954 - Mystery, Thriller',
        clue2: 'Director: Alfred Hitchcock',
        clue3: 'Tagline: In deadly danger...because they saw too much!',
        clue4: 'Characters: L.B. Jefferies, Lisa Fremont, Tom Doyle',
        clue5: 'Stars: James Stewart, Grace Kelly, Wendell Corey',
        clue6: 'A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.'
    },
    {
        title: 'Alien',
        clue1: '1979 - Horror, Sci-Fi',
        clue2: 'Director: Ridley Scott',
        clue3: 'Tagline: In space no one can hear you scream.',
        clue4: 'Characters: Ripley, Dallas, Kane',
        clue5: 'Stars: Sigourney Weaver, Tom Skerritt, John Hurt',
        clue6: 'The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.'
    }, 
    {
        title: 'City Lights',
        clue1: '1931 - Comedy, Drama, Romance',
        clue2: 'Director: Charles Chaplin',
        clue3: 'Tagline: Too Funny For Words!',
        clue4: 'Characters: A Tramp, A Blind Girl, An Eccentric Millionaire',
        clue5: 'Stars: Charles Chaplin, Virginia Cherrill, Florence Lee',
        clue6: 'With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.'
    },
    {
        title: 'Memento',
        clue1: '2000 - Mystery, Thriller',
        clue2: 'Director: Christopher Nolan',
        clue3: 'Tagline: Some memories are best forgotten',
        clue4: 'Characters: Leonard, Natalie, Teddy',
        clue5: 'Stars: Guy Pearce, Carrie-Anne Moss, Joe Pantoliano',
        clue6: "A man with short-term memory loss attempts to track down his wife's murderer."
    },
    {
        title: 'Apocalypse Now',
        clue1: '1979 - Drama, Mystery, War',
        clue2: 'Director: Francis Ford Coppola',
        clue3: 'Tagline: I love the smell of napalm in the morning.',
        clue4: 'Characters: Captain Benjamin L. Willard, Colonel Walter E. Kurtz, Lieutenant Colonel Bill Kilgore',
        clue5: 'Stars: Martin Sheen, Marlon Brando, Robert Duvall',
        clue6: 'A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.'
    },
    {
        title: 'Indiana Jones and the Raiders of the Lost Ark',
        clue1: '1981 - Action, Adventure',
        clue2: 'Director: Steven Spielberg',
        clue3: 'Tagline: The return of the great adventure',
        clue4: 'Characters: Indy, Marion, Belloq',
        clue5: 'Stars: Harrison Ford, Karen Allen, Paul Freeman',
        clue6: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers."
    },
    {
        title: 'Django Unchained',
        clue1: '2012 - Drama, Western',
        clue2: 'Director: Quentin Tarantino',
        clue3: "Tagline: The 'D' is Silent. Payback Won't Be.",
        clue4: 'Characters: Calvin Candie, Stephen, Dr. King Schultz',
        clue5: 'Stars: Jamie Foxx, Samuel L. Jackson, Leonardo DiCaprio',
        clue6: 'With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.'
    },
    {
        title: 'WALL·E',
        clue1: '2008 - Animation, Adventure, Family',
        clue2: 'Director: Andrew Stanton',
        clue3: 'Tagline: An Adventure Beyond the Ordinar-E',
        clue4: 'Characters: EVE, Captain, Shelby Forthright',
        clue5: 'Stars: Ben Burtt, Elissa Knight, Jeff Garlin',
        clue6: 'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.'
    },
    {
        title: 'Sunset Blvd.',
        clue1: '1950 - Drama, Film-Noir',
        clue2: 'Director: Billy Wilder',
        clue3: 'Tagline: A Hollywood Story',
        clue4: 'Characters: Joe Gillis, Norma Desmond, Max Von Mayerling',
        clue5: 'Stars: William Holden, Gloria Swanson, Erich von Stroheim',
        clue6: 'A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.'
    },
    {
        title: 'The Shining',
        clue1: '1980 - Drama, Horror',
        clue2: 'Director: Stanley Kubrick',
        clue3: "Tagline: He came as the caretaker, but this hotel had its own guardians - who'd been there a long time",
        clue4: 'Characters: Jack Torrance, Wendy Torrance, Danny Torrance',
        clue5: 'Stars: Jack Nicholson, Shelley Duvall, Danny Lloyd',
        clue6: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.'
    },
    {
        title: 'The Great Dictator',
        clue1: '1940 - Comedy, Drama, War',
        clue2: 'Director: Charles Chaplin',
        clue3: 'Tagline: He talks.',
        clue4: 'Characters: Hynkel, Hannah, Napaloni',
        clue5: 'Stars: Charles Chaplin, Paulette Goddard, Jack Oakie',
        clue6: "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime."
    },
    {
        title: 'Avengers: Infinity War',
        clue1: '2018 - Action, Adventure, Sci-Fi',
        clue2: 'Director: Anthony Russo, Joe Russo',
        clue3: 'Tagline: An entire universe. Once and for all.',
        clue4: 'Characters: Tony Stark, Thanos, Mantis',
        clue5: 'Stars: Robert Downey Jr., Chris Hemsworth, Mark Ruffalo',
        clue6: 'A team of heroes and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
    },
    {
        title: 'American Beauty',
        clue1: '1999 - Drama',
        clue2: 'Director: Sam Mendes',
        clue3: 'Tagline: ...look closer',
        clue4: 'Characters: Lester Burnham, Carolyn Burnham, Angela Hayes',
        clue5: 'Stars: Kevin Spacey, Annette Bening, Thora Birch',
        clue6: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend."
    },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        clue1: '1964 - Comedy, War',
        clue2: 'Director: Stanley Kubrick',
        clue3: "Tagline: The Red-Hot suspense story that's rocking and shocking the world!",
        clue4: "Characters: Group Capt. Lionel Mandrake, Gen. 'Buck' Turgidson, Brig. Gen. Jack D. Ripper",
        clue5: 'Stars: Peter Sellers, George C. Scott, Sterling Hayden',
        clue6: 'An insane American general orders a bombing attack on the Soviet Union, triggering a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop.'
    },
    {
        title: 'Spider-Man: Into the Spider-Verse',
        clue1: '2018 - Animation, Action, Adventure',
        clue2: 'Director: Bob Persichetti, Peter Ramsey, Rodney Rothman',
        clue3: 'Tagline: Enter a universe where more than one wears the mask.',
        clue4: 'Characters: Miles Morales, Peter B. Parker, Gwen Stacy',
        clue5: 'Stars: Shameik Moore, Jake Johnson, Hailee Steinfeld',
        clue6: 'Teen Miles Morales becomes the super hero of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.'
    },
    {
        title: 'Joker',
        clue1: '2019 - Crime, Drama, Thriller',
        clue2: 'Director: Todd Phillips',
        clue3: 'Tagline: Put on a happy face.',
        clue4: 'Characters: Arthur Fleck, Murray Franklin, Sophie Dumond',
        clue5: 'Stars: Joaquin Phoenix, Robert De Niro, Zazie Beetz',
        clue6: 'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.'
    },
    {
        title: 'Braveheart',
        clue1: '1995 - Biography, Drama, History',
        clue2: 'Director: Mel Gibson',
        clue3: 'Tagline: Every man dies, not every man really lives.',
        clue4: 'Characters: William Wallace, Princess Isabelle, Longshanks - King Edward I',
        clue5: 'Stars: Mel Gibson, Sophie Marceau, Patrick McGoohan',
        clue6: 'Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.'
    },
    {
        title: 'Amadeus',
        clue1: '1984 - Biography, Drama, Music',
        clue2: 'Director: Milos Forman',
        clue3: 'Tagline: The man... The music... The madness... The murder... The motion picture...',
        clue4: 'Characters: Antonio Salierim Wolfgang Mozart, Constanze Mozart',
        clue5: 'Stars: F. Murray Abraham, Tom Hulce, Elizabeth Berridge',
        clue6: "The life, success and troubles of Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him."
    },
    {
        title: 'Toy Story',
        clue1: '1995 - Animation, Adventure, Comedy',
        clue2: 'Director: John Lasseter',
        clue3: "Tagline: The story of two partners discovering what they're made of.",
        clue4: 'Characters: Woody, Buzz, Mr. Potato Head',
        clue5: 'Stars: Tom Hanks, Tim Allen, Don Rickles',
        clue6: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
    },
    {
        title: 'Coco',
        clue1: '2017 - Animation, Adventure, Comedy',
        clue2: 'Director: Lee Unkrich, Adrian Molina',
        clue3: 'Tagline: The celebration of a lifetime',
        clue4: 'Characters: Miguel, Héctor, Ernesto de la Cruz',
        clue5: 'Stars: Anthony Gonzalez, Gael García Bernal, Benjamin Bratt',
        clue6: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
    },
    {
        title: 'Inglourious Basterds',
        clue1: '2009 - Adventure, Drama, War',
        clue2: 'Director: Quentin Tarantino',
        clue3: 'Tagline: Once upon a time in Nazi occupied France...',
        clue4: 'Characters: Lt. Aldo Raine, Hitler, Bridget von Hammersmark',
        clue5: 'Stars: Brad Pitt, Diane Kruger, Eli Roth',
        clue6: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same."
    },
    {
        title: 'Princess Mononoke',
        clue1: '1997 - Animation, Action, Adventure',
        clue2: 'Director: Hayao Miyazaki',
        clue3: 'Tagline: The fate of the world rests on the courage of one warrior.',
        clue4: 'Characters: Ashitaka, Jigo, Lady Eboshi',
        clue5: 'Stars: Billy Crudup, Billy Bob, Thornton, Minnie Driver',
        clue6: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony."
    },
    {
        title: 'Good Will Hunting',
        clue1: '1997 - Drama, Romance',
        clue2: 'Director: Gus Van Sant',
        clue3: 'Tagline: Some people can never believe in themselves, until someone believes in them.',
        clue4: 'Characters: Sean, Will, Chuckie',
        clue5: 'Stars: Robin Williams, Matt Damon, Ben Affleck',
        clue6: 'A janitor at M.I.T. has a gift for mathematics, but needs help from a psychologist to find direction in his life.'
    },
    {
        title: 'Requiem for a Dream',
        clue1: '2000 - Drama',
        clue2: 'Director: Darren Aronofsky',
        clue3: "Tagline: Everybody likes me. Soon, millions of people will see me and they'll all like me.",
        clue4: 'Characters: Sara Goldfarb, Harry Goldfarb, Marion Silver',
        clue5: 'Stars: Ellen Burstyn, Jared Leto, Jennifer Connelly',
        clue6: 'The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.'
    },
    {
        title: "Singin' in the Rain",
        clue1: '1952 - Comedy, Musical, Romance',
        clue2: 'Director: Stanley Donen, Gene Kelly',
        clue3: 'Tagline: What a glorious feeling',
        clue4: 'Characters: Don Lockwood, Cosmo Brown, Kathy Selden',
        clue5: "Stars: Gene Kelly, Donald O'Connor, Debbie Reynolds",
        clue6: 'A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.'
    },
    {
        title: '2001: A Space Odyssey',
        clue1: '1968 - Adventure, Sci-Fi',
        clue2: 'Director: Stanley Kubrick',
        clue3: 'Tagline: An epic drama of adventure and exploration',
        clue4: 'Characters: Dr. Dave Bowman, HAL 9000, Ape',
        clue5: 'Stars: Keir Dullea, Gary Lockwood, William Sylvester',
        clue6: "The Monoliths push humanity to reach for the stars; after their discovery in Africa generations ago, the mysterious objects lead mankind on an awesome journey to Jupiter, with the help of H.A.L. 9000: the world's greatest supercomputer."
    },
    {
        title: 'Reservoir Dogs',
        clue1: '1992 - Crime, Drama, Thriller',
        clue2: 'Director: Quentin Tarantino',
        clue3: 'Tagline: Seven Killers, Six Colours and One Perfect Crime',
        clue4: 'Characters: Mr. White, Mr. Orange, Mr. Blonde',
        clue5: 'Stars: Harvey Keitel, Tim Roth, Michael Madsen',
        clue6: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.'
    },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        clue1: '2004 - Drama, Romance, Sci-Fi',
        clue2: 'Director: Michel Gondry',
        clue3: 'Tagline: I already forget how I used to feel about you.',
        clue4: 'Characters: Joel Barish, Clementine Kruczynski, Dr. Mierzwiak',
        clue5: 'Stars: Jim Carrey, Kate Winslet, Tom Wilkinson',
        clue6: 'When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.'
    },
    {
        title: 'Citizen Kane',
        clue1: '1941 - Drama, Mystery',
        clue2: 'Director: Orson Welles',
        clue3: 'Tagline: The classic story of power and the press.',
        clue4: 'Characters: Susan Alexander Kane, Mary Kane, Kane',
        clue5: 'Stars: Orson Welles, Joseph Cotten, Dorothy Comingore',
        clue6: "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'"
    },
    {
        title: 'Lawrence of Arabia',
        clue1: '1962 - Adventure, Biography, Drama',
        clue2: 'Director: David Lean',
        clue3: 'Tagline: The desert classic',
        clue4: 'Characters: Prince Faisal, Lawrence, Auda Abu Tayi',
        clue5: "Stars: Peter O'Toole, Alec Guinness, Anthony Quinn",
        clue6: 'The story of the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.'
    },
    {
        title: 'North by Northwest',
        clue1: '1959 - Adventure, Mystery, Thriller',
        clue2: 'Director: Alfred Hitchcock',
        clue3: 'Tagline: The Master of Suspense presents a 2000-mile chase across America!',
        clue4: 'Characters: Roger Thornhill, Eve Kendall, Phillip Vandamm',
        clue5: 'Stars: Cary Grant, Eva Marie Saint, James Mason',
        clue6: 'A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.'
    },
    {
        title: 'Vertigo',
        clue1: '1958 - Mystery, Romance, Thriller',
        clue2: 'Director: Alfred Hitchcock',
        clue3: "Tagline: Somewhere...Somehow - He'd Loved and Killed That Self-Same Girl Before!",
        clue4: "Characters: John 'Scottie' Ferguson, Madeleine Elster, Marjorie 'Midge' Wood",
        clue5: 'Stars: James Stewart, Kim Novak, Barbara Bel Geddes',
        clue6: 'A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.'
    },
    {
        title: 'Amélie',
        clue1: '2001 - Comedy, Romance',
        clue2: 'Director: Jean-Pierre Jeunet',
        clue3: "Tagline: She'll change your life.",
        clue4: 'Characters: Nino Quincampoix, Raphaël Poulain, Amélie Poulain',
        clue5: 'Stars: Audrey Tautou, Mathieu Kassovitz, Rufus',
        clue6: 'An innocent and naive girl in Paris with her own sense of justice decides to help those around her and, along the way, discovers love.'
    },
    {
        title: 'A Clockwork Orange',
        clue1: '1971 - Crime, Sci-Fi',
        clue2: 'Director: Stanley Kubrick',
        clue3: "Tagline: Being the adventures of a young man ... who couldn't resist pretty girls ... or a bit of the old ultra-violence",
        clue4: 'Characters: Alex, Mr. Alexander, Chief Guard',
        clue5: 'Stars: Malcolm McDowell, Patrick Magee, Michael Bates',
        clue6: "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned."
    }, 
    {
        title: 'Full Metal Jacket',
        clue1: '1987 - Drama, War',
        clue2: 'Director: Stanley Kubrick',
        clue3: "Tagline: In Vietnam The Wind Doesn't Blow It Sucks",
        clue4: 'Characters: Pvt. Joker, Gny. Sgt. Hartman, Animal Mother',
        clue5: "Stars: Matthew Modine, R. Lee Ermey, Vincent D'Onofrio",
        clue6: 'A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.'
    },
    {
        title: 'Scarface',
        clue1: '1983 - Crime, Drama',
        clue2: 'Director: Brian De Palma',
        clue3: 'Tagline: He wanted to live the American Dream until the end.',
        clue4: 'Characters: Tony Montana, Elvira, Manny Ribera',
        clue5: 'Stars: Al Pacino, Michelle Pfeiffer, Steven Bauer',
        clue6: 'In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.'
    },
    {
        title: 'Taxi Driver',
        clue1: '1976 - Crime, Drama',
        clue2: 'Director: Martin Scorsese',
        clue3: "Tagline: On every street in every city, there's a nobody who dreams of being a somebody.",
        clue4: 'Characters: Travis Bickle, Iris, Betsy',
        clue5: 'Stars: Robert De Niro, Jodie Foster, Cybill Shepherd',
        clue6: 'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.'
    },
    {
        title: 'To Kill a Mockingbird',
        clue1: '1962 - Crime, Drama',
        clue2: 'Director: Robert Mulligan',
        clue3: "Tagline: The rare film story of a father who must expose his children to a small town's outraged passions...and can only protect them with his love.",
        clue4: 'Characters: Atticus Finch, Tom Robinson, Boo Radley',
        clue5: 'Stars: Gregory Peck, John Megna, Frank Overton',
        clue6: 'Atticus Finch, a widowed lawyer in Depression-era Alabama, defends a black man against an undeserved rape charge, and his children against prejudice.'
    },
    {
        title: 'Hamilton',
        clue1: '2020 - Biography, Drama, History',
        clue2: 'Director: Thomas Kail',
        clue3: 'Tagline: An American Musical',
        clue4: 'Characters: Aaron Burr, George Washington, Alexander',
        clue5: 'Stars: Lin-Manuel Miranda, Phillipa Soo, Leslie Odom Jr.',
        clue6: "The real life of one of America's foremost founding fathers and first Secretary of the Treasury. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast."
    },
    {
        title: 'L.A. Confidential',
        clue1: '1997 - Crime, Drama, Mystery',
        clue2: 'Director: Curtis Hanson',
        clue3: 'Tagline: Off the record, on the QT, and very hush-hush...',
        clue4: 'Characters: Jack Vincennes, Bud White, Ed Exley',
        clue5: 'Stars: Kevin Spacey, Russell Crowe, Guy Pearce',
        clue6: 'As corruption grows in 1950s Los Angeles, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.'
    },
    {
        title: 'Up',
        clue1: '2009 - Animation, Adventure, Comedy',
        clue2: 'Director: Pete DocterBob Peterson',
        clue3: 'Tagline: The greatest adventure is just getting back home.',
        clue4: 'Characters: Carl Fredricksen, Russell, Dug',
        clue5: 'Stars: Edward Asner, Jordan Nagai, John Ratzenberger',
        clue6: '78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.'
    },
    {
        title: 'Heat',
        clue1: '1995 - Action, Crime, Drama',
        clue2: 'Director: Michael Mann',
        clue3: 'Tagline: A Los Angeles Crime Saga',
        clue4: 'Characters: Lt. Vincent Hanna, Neil McCauley, Chris Shiherlis',
        clue5: 'Stars: Al Pacino, Robert De Niro, Val Kilmer',
        clue6: 'A group of high-end professional thieves start to feel the heat from the LAPD when they unknowingly leave a clue at their latest heist.'
    },
    {
        title: 'Snatch',
        clue1: '2000 - Comedy, Crime',
        clue2: 'Director: Guy Ritchie',
        clue3: "Tagline: Stealin' Stones and Breakin' Bones",
        clue4: "Characters: Turkish, Mickey O'Neil, Bullet-Tooth Tony",
        clue5: 'Stars: Jason Statham, Brad Pitt, Stephen Graham',
        clue6: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.'
    },
    {
        title: 'Die Hard',
        clue1: '1988 - Action, Thriller',
        clue2: 'Director: John McTiernan',
        clue3: 'Tagline: 40 Stories. Twelve Terrorists. One Cop.',
        clue4: 'Characters: John McClane, Hans Gruber, Sgt. Al Powell',
        clue5: 'Stars: Bruce Willis, Alan Rickman, Bonnie Bedelia',
        clue6: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.'
    },
    {
        title: 'Some Like It Hot',
        clue1: '1959 - Comedy, Musical, Romance',
        clue2: 'Director: Billy Wilder',
        clue3: 'Tagline: The movie too HOT for words!',
        clue4: 'Characters: Sugar Kane Kowalczyk, Spats Colombo, Joe',
        clue5: 'Stars: Marilyn Monroe, Tony Curtis, Jack Lemmon',
        clue6: 'After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.'
    },
    {
        title: 'All About Eve',
        clue1: '1950 - Drama',
        clue2: 'Director: Joseph L. Mankiewicz',
        clue3: "Tagline: It's all about women---and their men!",
        clue4: 'Characters: Margo, Addison DeWitt, Eve',
        clue5: 'Stars: Bette Davis, Anne Baxter, George Sanders',
        clue6: 'A seemingly timid but secretly ruthless ingénue insinuates herself into the lives of an aging Broadway star and her circle of theater friends.'
    },
    {
        title: 'The Wolf of Wall Street',
        clue1: '2013 - Biography, Comedy, Crime',
        clue2: 'Director: Martin Scorsese',
        clue3: 'Tagline: Earn. Spend. Party.',
        clue4: 'Characters: Jordan Belfort, Donnie Azoff, Naomi Lapaglia',
        clue5: 'Stars: Leonardo DiCaprio, Jonah Hill, Margot Robbie',
        clue6: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.'
    },
    {
        title: "Pan's Labyrinth",
        clue1: '2006 - Drama, Fantasy, War',
        clue2: 'Director: Guillermo del Toro',
        clue3: "Tagline: What happens when make-believe believes it's real?",
        clue4: 'Characters: Ofelia, Carmen, Vidal',
        clue5: 'Stars: Ivana Baquero, Ariadna Gil, Sergi López',
        clue6: 'In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.'
    },
    {
        title: 'Casino',
        clue1: '1995 - Crime, Drama',
        clue2: 'Director: Martin Scorsese',
        clue3: 'Tagline: ',
        clue4: "Characters: Sam 'Ace' Rothstein, Ginger McKenna, Nicky Santoro",
        clue5: 'Stars: Robert De Niro, Sharon Stone, Joe Pesci',
        clue6: 'A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive compete against each other over a gambling empire, and over a fast-living and fast-loving socialite.'
    },
    {
        title: 'Monty Python and the Holy Grail',
        clue1: '1975 - Adventure, Comedy, Fantasy',
        clue2: 'Director: Terry Gilliam, Terry Jones',
        clue3: 'Tagline: Free! 1,000 coconuts to first 1,000 customers on opening day!',
        clue4: 'Characters: King Arthur, Dead Collector, Patsy',
        clue5: 'Stars: Graham Chapman, John Cleese, Eric Idle',
        clue6: 'King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.'
    },
    {
        title: 'A Beautiful Mind',
        clue1: '2001 - Biography, Drama',
        clue2: 'Director: Ron Howard',
        clue3: 'Tagline: The only thing greater than the power of the mind is the courage of the heart',
        clue4: 'Characters: John Nash, Parcher, Alicia Nash',
        clue5: 'Stars: Russell Crowe, Ed Harris, Jennifer Connelly',
        clue6: 'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.'
    }, 
    {
        title: 'The Sixth Sense',
        clue1: '1999 - Drama, Mystery, Thriller',
        clue2: 'Director: M. Night Shyamalan',
        clue3: 'Tagline: "I see dead people."',
        clue4: 'Characters: Malcolm Crowe, Cole Sear, Anna Crowe',
        clue5: 'Stars: Bruce Willis, Haley Joel Osment, Toni Collette',
        clue6: 'A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.'
    },
    {
        title: 'There Will Be Blood',
        clue1: '2007 - Drama',
        clue2: 'Director: Paul Thomas Anderson',
        clue3: 'Tagline: There Will Be Greed. There Will Be Vengeance.',
        clue4: 'Characters: Daniel Plainview, Paul Sunday, Fletcher',
        clue5: 'Stars: Daniel Day-Lewis, Paul Dano, Ciarán Hinds',
        clue6: 'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.'
    },
    {
        title: 'The Truman Show',
        clue1: '1998 - Comedy, Drama',
        clue2: 'Director: Peter Weir',
        clue3: 'Tagline: The world is watching',
        clue4: 'Characters: Christof, Meryl Burbank, Marlon',
        clue5: 'Stars: Jim Carrey, Ed Harris, Laura Linney',
        clue6: 'An insurance salesman discovers his whole life is actually a reality TV show.'
    },
    {
        title: 'Shutter Island',
        clue1: '2010 - Mystery, Thriller',
        clue2: 'Director: Martin Scorsese',
        clue3: 'Tagline: Some places never let you go',
        clue4: 'Characters: Teddy Daniels, Rachel 1, Dr. Cawley',
        clue5: 'Stars: Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo',
        clue6: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.'
    },
    {
        title: 'Kill Bill: Vol. 1',
        clue1: '2003 - Action, Crime, Drama',
        clue2: 'Director: Quentin Tarantino',
        clue3: 'Tagline: On October 10th, speak softly and carry a big sword',
        clue4: 'Characters: The Bride, Elle Driver, Budd',
        clue5: 'Stars: Uma Thurman, David Carradine, Daryl Hannah',
        clue6: 'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.'
    },
    {
        title: 'Jurassic Park',
        clue1: '1993 - Action, Adventure, Sci-Fi',
        clue2: 'Director: Steven Spielberg',
        clue3: 'Tagline: An adventure 65 million years in the making.',
        clue4: 'Characters: Grant, Ellie, Malcolm',
        clue5: 'Stars: Sam Neill, Laura Dern, Jeff Goldblum',
        clue6: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose."
    },
    {
        title: 'No Country for Old Men',
        clue1: '2007 - Crime, Drama, Thriller',
        clue2: 'Director: Ethan Coen, Joel Coen',
        clue3: 'Tagline: How does a man decide in what order to abandon his life?',
        clue4: 'Characters: Ed Tom Bell, Anton Chigurh, Llewelyn Moss',
        clue5: 'Stars: Tommy Lee Jones, Javier Bardem, Josh Brolin',
        clue6: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.'
    },
    {
        title: 'Raging Bull',
        clue1: '1980 - Biography, Drama, Sport',
        clue2: 'Director: Martin Scorsese',
        clue3: 'Tagline: If you win, you win. If you lose, you still win',
        clue4: 'Characters: Jake La Motta, Joey, Salvy',
        clue5: 'Stars: Robert De Niro, Cathy Moriarty, Joe Pesci',
        clue6: 'The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.'
    },
    {
        title: 'Finding Nemo',
        clue1: '2003 - Animation, Adventure, Comedy',
        clue2: 'Director: Andrew Stanton, ee Unkrich',
        clue3: "Tagline: 71% of the Earth's surface is covered by water. That's a lot of space to find one fish.",
        clue4: 'Characters: Marlin, Dory, Crush',
        clue5: 'Stars: Albert Brooks, Ellen DeGeneres, Alexander Gould',
        clue6: 'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.'
    },
    {
        title: 'Gone with the Wind',
        clue1: '1939 - Drama, History, Romance',
        clue2: 'Director: Victor Fleming, George Cukor, Sam Wood',
        clue3: 'Tagline: ',
        clue4: "Characters: Rhett Butler, Scarlett, Gerald O'Hara",
        clue5: 'Stars: Clark Gable, Vivien Leigh, Thomas Mitchell',
        clue6: 'The manipulative daughter of a Georgia plantation owner conducts a turbulent romance with a roguish profiteer during the American Civil War and Reconstruction periods.'
    },
    {
        title: 'V for Vendetta',
        clue1: '2005 - Action, Drama, Sci-Fi',
        clue2: 'Director: James McTeigue',
        clue3: 'Tagline: People should not be afraid of their governments. Governments should be afraid of their people.',
        clue4: 'Characters: Evey, Deitrich, Dominic',
        clue5: 'Stars: Hugo Weaving, Natalie Portman, Rupert Graves',
        clue6: 'In a future British dystopian society, a shadowy freedom fighter plots to overthrow the tyrannical government - with the help of a young woman.'
    },
    {
        title: 'Inside Out',
        clue1: '2015 - Animation, Adventure, Comedy',
        clue2: 'Director: Pete Docter, Ronnie Del Carmen',
        clue3: 'Tagline: Meet the little voices inside your head',
        clue4: 'Characters: Joy, Fear, Riley',
        clue5: 'Stars: Amy Poehler, Bill Hader, Lewis Black',
        clue6: 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.'
    },
    {
        title: 'The Thing',
        clue1: '1982 - Horror, Mystery, Sci-Fi',
        clue2: 'Director: John Carpenter',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: Kurt Russell, Wilford Brimley, Keith David',
        clue6: 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.'
    },
    {
        title: 'Dial M for Murder',
        clue1: '1954 - Crime, Thriller',
        clue2: 'Director: Alfred Hitchcock',
        clue3: 'Tagline: If a woman answers...hang on for dear life!',
        clue4: 'Characters: Tony Wendice, Margot Wendice, Mark Halliday',
        clue5: 'Stars: Ray Milland, Grace Kelly, Robert Cummings',
        clue6: 'A former tennis star arranges the murder of his adulterous wife.'
    },
    {
        title: "Howl's Moving Castle",
        clue1: '2004 - Animation, Adventure, Family',
        clue2: 'Director: Hayao Miyazaki',
        clue3: "Tagline: A heart's a heavy burden",
        clue4: 'Characters: Grandma Sophoe, Witch of the Waste, Madame Suliman',
        clue5: 'Stars: Jean Simmons, Christian Bale, Josh Hutcherson',
        clue6: 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.'
    },
    {
        title: 'Trainspotting',
        clue1: '1996 - Drama',
        clue2: 'Director: Danny Boyle',
        clue3: 'Tagline: Never let your friends tie you to the tracks.',
        clue4: 'Characters: Renton, Spud, Sick Boy',
        clue5: 'Stars: Ewan McGregor, Ewen Bremner, Jonny Lee Miller',
        clue6: 'Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.'
    },
    {
        title: 'Gran Torino',
        clue1: '2008 - Drama',
        clue2: 'Director: Clint Eastwood',
        clue3: 'Tagline: Get off my lawn!',
        clue4: 'Characters: Walt Kowalski, Thao, Father Janovich',
        clue5: 'Stars: Clint Eastwood, Bee Vang, Christopher Carley',
        clue6: "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, Thao Lor, a Hmong teenager who tried to steal Kowalski's prized possession"
    },
    {
        title: 'Fargo',
        clue1: '1996 - Crime, Thriller',
        clue2: 'Director: Joel Coen, Ethan Coen',
        clue3: 'Tagline: A homespun murder story',
        clue4: 'Characters: Jerry Lundegaard, Marge Gunderson, Carl Showalter',
        clue5: 'Stars: William H. Macy, Frances McDormand, Steve Buscemi',
        clue6: "Minnesota car salesman Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson."
    },
    {
        title: 'My Neighbor Totoro',
        clue1: '1988 - Animation, Comedy, Family',
        clue2: 'Director: Hayao Miyazaki',
        clue3: 'Tagline: Come out, come out, wherever you are!',
        clue4: 'Characters: Satsuki, Mei Kusakabe, Granny',
        clue5: 'Stars: Dakota Fanning, Elle Fanning, Tim Daly',
        clue6: 'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.'
    },
    {
        title: 'Prisoners',
        clue1: '2013 - Crime, Drama, Mystery',
        clue2: 'Director: Denis Villeneuve',
        clue3: 'Tagline: Every moment matters',
        clue4: 'Characters: Keller Dover, Detective Loki, Nancy Birch',
        clue5: 'Stars: Hugh Jackman, Jake Gyllenhaal, Viola Davis',
        clue6: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts."
    },
    {
        title: 'Million Dollar Baby',
        clue1: '2004 - Drama, Sport',
        clue2: 'Director: Clint Eastwood',
        clue3: 'Tagline: Beyond his silence, there is a past. Beyond her dreams, there is a feeling. Beyond hope, there is a memory. Beyond their journey, there is a love.',
        clue4: 'Characters: Maggie Fitzgerald, Frankie Dunn, Eddie Scrap-Iron Dupris',
        clue5: 'Stars: Hilary Swank, Clint Eastwood, Morgan Freeman',
        clue6: 'A determined woman works with a hardened boxing trainer to become a professional.'
    },
    {
        title: 'Blade Runner',
        clue1: '1982 - Action, Drama, Sci-Fi',
        clue2: 'Director: Ridley Scott',
        clue3: "Tagline: Man Has Made His Match... Now It's His Problem",
        clue4: 'Characters: Rick Deckard, Roy Batty, Rachael',
        clue5: 'Stars: Harrison Ford, Rutger Hauer, Sean Young',
        clue6: 'A man must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.'
    },
    {
        title: 'Catch Me If You Can',
        clue1: '2002 - Biography, Crime, Drama',
        clue2: 'Director: Steven Spielberg',
        clue3: 'Tagline: The true story of a real fake.',
        clue4: 'Characters: Frank Abagnale Jr., Carl Hanratty, Roger Strong',
        clue5: 'Stars: Leonardo DiCaprio, Tom Hanks, Christopher Walken',
        clue6: 'Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.'
    },
    {
        title: 'Ben-Hur',
        clue1: '1959 - Adventure, Drama, History',
        clue2: 'Director: William Wyler',
        clue3: 'Tagline: A tale of the Christ',
        clue4: 'Characters: Quintus Arrius, Messala, Esther',
        clue5: 'Stars: Charlton Heston, Jack Hawkins, Stephen Boyd',
        clue6: 'After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.'
    },
    {
        title: '12 Years a Slave',
        clue1: '2013 - Biography, Drama, History',
        clue2: 'Director: Steve McQueen',
        clue3: 'Tagline: The extraordinary true story of Solomon Northup',
        clue4: 'Characters: Solomon Northup, Robert, Bass',
        clue5: 'Stars: Chiwetel Ejiofor, Michael Kenneth Williams, Michael Fassbender',
        clue6: 'In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.'
    },
    {
        title: 'Gone Girl',
        clue1: '2014 - Drama, Mystery, Thriller',
        clue2: 'Director: David Fincher',
        clue3: "Tagline: You don't know what you've got 'til it's...",
        clue4: 'Characters: Nick Dunne, Amy Dunne, Desi Collings',
        clue5: 'Stars: Ben Affleck, Rosamund Pike, Neil Patrick Harris',
        clue6: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent."
    },
    {
        title: 'The Deer Hunter',
        clue1: '1978 - Drama, War',
        clue2: 'Director: Michael Cimino',
        clue3: "Tagline: A deer has to be taken with one shot. I try to tell people that but they don't listen.",
        clue4: 'Characters: Michael, Nick, Stan',
        clue5: 'Stars: Robert De Niro, Christopher Walken, John Cazale',
        clue6: 'An in-depth examination of the ways in which the Vietnam War impacts and disrupts the lives of several friends in a small steel mill town in Pennsylvania.'
    },
    {
        title: 'Mr. Smith Goes to Washington',
        clue1: '1939 - Comedy, Drama',
        clue2: 'Director: Frank Capra',
        clue3: 'Tagline: Romance, drama, laughter and heartbreak... created out of the very heart and soil of America',
        clue4: 'Characters: Jefferson Smith, Saunders, Senator Joseph Paine',
        clue5: 'Stars: James Stewart, Jean Arthur, Claude Rains',
        clue6: 'A naive youth leader is appointed to fill a vacancy in the U.S. Senate. His idealistic plans promptly collide with corruption at home and subterfuge from his hero in Washington, but he tries to forge ahead despite attacks on his character.'
    },
    {
        title: 'The Grand Budapest Hotel',
        clue1: '2014 - Adventure, Comedy, Crime',
        clue2: 'Director: Wes Anderson',
        clue3: 'Tagline: Keep your hands off my lobby boy!',
        clue4: 'Characters: M. Gustave, Mr. Moustafa, Zero',
        clue5: 'Stars: Ralph Fiennes, F. Murray Abraham, Mathieu Amalric',
        clue6: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge."
    },
    {
        title: 'Room',
        clue1: '2015 - Drama, Thriller',
        clue2: 'Director: Lenny Abrahamson',
        clue3: 'Tagline: Love knows no boundaries',
        clue4: 'Characters: Ma, Jack, Old Nick',
        clue5: 'Stars: Brie Larson, Jacob Tremblay, Sean Bridgers',
        clue6: 'Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.'
    },
    {
        title: 'Hacksaw Ridge',
        clue1: '2016 - Biography, Drama, History',
        clue2: 'Director: Mel Gibson',
        clue3: 'Tagline: When the order came to retreat, one man stayed.',
        clue4: 'Characters: Desmond Doss, Captain Glover, Smitty Ryker',
        clue5: 'Stars: Andrew Garfield, Sam Worthington, Luke Bracey',
        clue6: 'World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.'
    },
    {
        title: 'Klaus',
        clue1: '2019 - Animation, Adventure, Comedy',
        clue2: 'Director: Sergio Pablos, Carlos Martínez López',
        clue3: 'Tagline: Discover the friendship that launched a legend.',
        clue4: 'Characters: Jesper, Alva, Mr. Ellingboe',
        clue5: 'Stars: Jason Schwartzman, J.K. Simmons, Rashida Jones',
        clue6: "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg's new postman, Jesper, befriends a toymaker, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions."
    },
    {
        title: 'The Big Lebowski',
        clue1: '1998 - Comedy, Crime',
        clue2: 'Director: Joel Coen, Ethan Coen',
        clue3: 'Tagline: They figured he was a lazy, time-wasting slacker. They were right.',
        clue4: 'Characters: The Dude, Walter Sobchak, Brandt',
        clue5: 'Stars: Jeff Bridges, John Goodman, Julianne Moore',
        clue6: "An ultimate L.A. slacker, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's missing wife."
    },
    {
        title: 'How to Train Your Dragon',
        clue1: '2010 - Animation, Action, Adventure',
        clue2: 'Director: Dean DeBlois, Chris Sanders',
        clue3: 'Tagline: One adventure will change two worlds',
        clue4: 'Characters: Hiccup, Stoick, Fishlegs',
        clue5: 'Stars: Jay Baruchel, Gerard Butler, Christopher Mintz-Plasse',
        clue6: 'A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.'
    },
    {
        title: 'Mad Max: Fury Road',
        clue1: '2015 - Action, Adventure, Sci-Fi',
        clue2: 'Director: George Miller',
        clue3: 'Tagline: Oh, what a day! WHAT A LOVELY DAY!',
        clue4: 'Characters: Max Rockatansky, Imperator Furiosa, Nux',
        clue5: 'Stars: Tom Hardy, Charlize Theron, Nicholas Hoult',
        clue6: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter.'
    },
    {
        title: 'Mary and Max',
        clue1: '2009 - Animation, Comedy, Drama',
        clue2: 'Director: Adam Elliot',
        clue3: 'Tagline: Sometimes perfect strangers make the best friends.',
        clue4: 'Characters: Mary Daisy Dinkle, Max Jerry Horovitz, Damien Popodopolous ',
        clue5: 'Stars: Toni Collette, Philip Seymour Hoffman, Eric Bana',
        clue6: 'A tale of friendship between two unlikely pen pals: a lonely, eight-year-old girl living in the suburbs of Melbourne, and a forty-four-year old, severely obese man living in New York.'
    },
    {
        title: 'Jaws',
        clue1: '1975 - Adventure, Thriller',
        clue2: 'Director: Steven Spielberg',
        clue3: 'Tagline: See it before you go swimming.',
        clue4: 'Characters: Brody, Quint, Hooper',
        clue5: 'Stars: Roy Scheider, Robert Shaw, Richard Dreyfuss',
        clue6: "When a killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down."
    },
    {
        title: 'Monsters, Inc.',
        clue1: '2001 - Animation, Adventure, Comedy',
        clue2: 'Director: Pete Docter, David Silverman, Lee Unkrich',
        clue3: "Tagline: You Won't Believe Your Eye.",
        clue4: 'Characters: Mike, Sullivan, Boo',
        clue5: 'Stars: Billy Crystal, John Goodman, Mary Gibbs',
        clue6: 'In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.'
    },
    {
        title: 'Hotel Rwanda',
        clue1: '2004 - Biography, Drama, History',
        clue2: 'Director: Terry George',
        clue3: 'Tagline: When a country descended into madness and the world turned its back, one man had to make a choice',
        clue4: 'Characters: Paul Rusesabagina, Tatiana Rusesabagina, Jack Daglish',
        clue5: 'Stars: Don Cheadle, Sophie Okonedo, Joaquin Phoenix',
        clue6: 'Paul Rusesabagina, a hotel manager, houses over a thousand Tutsi refugees during their struggle against the Hutu militia in Africa.'
    },
    {
        title: 'Dead Poets Society',
        clue1: '1989 - Comedy, Drama',
        clue2: 'Director: Peter Weir',
        clue3: 'Tagline: He was their inspiration. He made their lives extraordinary.',
        clue4: 'Characters: John Keating, Neil Perry, Todd Anderson',
        clue5: 'Stars: Robin Williams, Robert Sean Leonard, Ethan Hawke',
        clue6: 'Maverick teacher John Keating uses poetry to embolden his boarding school students to new heights of self-expression.'
    },
    {
        title: 'Platoon',
        clue1: '1986 - Drama, War',
        clue2: 'Director: Oliver Stone',
        clue3: 'Tagline: The first casualty of war is innocence.',
        clue4: 'Characters: Chris, Sgt. Barnes, Big Harold',
        clue5: 'Stars: Charlie Sheen, Tom Berenger, Willem Dafoe',
        clue6: 'Chris Taylor, a neophyte recruit in Vietnam, finds himself caught in a battle of wills between two sergeants, one good and the other evil. A shrewd examination of the brutality of war and the duality of man in conflict.'
    },
    {
        title: 'Rocky',
        clue1: '1976 - Drama, Sport',
        clue2: 'Director: John G. Avildsen',
        clue3: 'Tagline: You have a ringside seat for the bloodiest bicentennial in history!',
        clue4: 'Characters: Adrian, Paulie, Apollo',
        clue5: 'Stars: Sylvester Stallone, Talia Shire, Burt Young',
        clue6: 'A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.'
    },
    {
        title: 'Ford v Ferrari',
        clue1: '2019 - Action, Biography, Drama',
        clue2: 'Director: James Mangold',
        clue3: 'Tagline: They took the American dream for a ride.',
        clue4: 'Characters: Carroll Shelby, Ken Miles, Lee Iacocca',
        clue5: 'Stars: Matt Damon, Christian Bale, Jon Bernthal',
        clue6: 'American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car in order to defeat a rival company at the 24 Hours of Le Mans in 1966.'
    },
    {
        title: 'Stand by Me',
        clue1: '1986 - Adventure, Drama',
        clue2: 'Director: Rob Reiner',
        clue3: "Tagline: For some, it's the last real taste of innocence, and the first real taste of life. But for everyone, it's the time that memories are made of.",
        clue4: 'Characters: Gordie Lachance, Chris Chambers, Teddy Duchamp',
        clue5: 'Stars: Wil Wheaton, River Phoenix, Corey Feldman',
        clue6: 'After the death of one of his friends, a writer recounts a childhood journey with his friends to find the body of a missing boy.'
    },
    {
        title: 'Into the Wild',
        clue1: '2007 - Adventure, Biography, Drama',
        clue2: 'Director: Sean Penn',
        clue3: 'Tagline: Into the heart, into the soul',
        clue4: 'Characters: Chris McCandless, Wayne Westerberg, Jan Burres',
        clue5: 'Stars: Emile Hirsch, Vince Vaughn, Catherine Keener',
        clue6: 'After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.'
    },
    {
        title: 'The Wizard of Oz',
        clue1: '1939 - Adventure, Family, Fantasy',
        clue2: 'Director: Victor Fleming, George Cukor, Mervyn LeRoy',
        clue3: "Tagline: There's no place like home",
        clue4: 'Characters: Dorothy Gale, Professor Marvel, Glinda',
        clue5: 'Stars: Judy Garland, Frank Morgan, Ray Bolger',
        clue6: "Young Dorothy Gale and her dog are swept away by a tornado from their Kansas farm to the a magical land, and embark on a quest with three new friends to see the man who can return her to her home and fulfill the others' wishes."
    },
    {
        title: 'Logan',
        clue1: '2017 - Action, Drama, Sci-Fi',
        clue2: 'Director: James Mangold',
        clue3: 'Tagline: His time has come',
        clue4: 'Characters: Charles, Laura, Pierce',
        clue5: 'Stars: Hugh Jackman, Patrick Stewart, Dafne Keen',
        clue6: 'In a future where mutants are nearly extinct, an elderly and weary hero leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.'
    },
    {
        title: 'Groundhog Day',
        clue1: '1993 - Comedy, Drama, Fantasy',
        clue2: 'Director: Harold Ramis',
        clue3: "Tagline: He's having the worst day of his life... over, and over...",
        clue4: 'Characters: Phil, Rita, Larry',
        clue5: 'Stars: Bill Murray, Andie MacDowell, Chris Elliott',
        clue6: 'A self-centered Pittsburgh weatherman finds himself inexplicably trapped in a small town as he lives the same day over and over again.'
    },
    {
        title: 'Ratatouille',
        clue1: '2007 - Animation, Adventure, Comedy',
        clue2: 'Director: Brad Bird, Jan Pinkava',
        clue3: 'Tagline: A comedy with great taste.',
        clue4: 'Characters: Gusteau, Linguini, Remy',
        clue5: 'Stars: Brad Garrett, Lou Romano, Patton Oswalt',
        clue6: 'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.'
    },
    {
        title: 'The Exorcist',
        clue1: '1973 - Horror',
        clue2: 'Director: William Friedkin',
        clue3: 'Tagline: Somewhere between science and superstition, there is another world. The world of darkness.',
        clue4: 'Characters: Chris MacNeil, Father Lankester Merrin, Regan MacNeil',
        clue5: 'Stars: Ellen Burstyn, Max von Sydow, Linda Blair',
        clue6: 'When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.'
    },
    {
        title: 'The Incredibles',
        clue1: '2004 - Animation, Action, Adventure',
        clue2: 'Director: Brad Bird',
        clue3: "Tagline: Discover the Side of Superheroes You've Never Seen Before",
        clue4: 'Characters: Bob Parr, Lucius Best, Helen Parr',
        clue5: 'Stars: Craig T. Nelson, Samuel L. Jackson, Holly Hunter',
        clue6: 'While trying to leave a quiet suburban life, a family of undercover superheroes are forced into action to save the world.'
    },
    {
        title: 'Cool Hand Luke',
        clue1: '1967 - Crime, Drama',
        clue2: 'Director: Stuart Rosenberg',
        clue3: 'Tagline: No one can eat fifty eggs.',
        clue4: 'Characters: Luke, Dragline, Captain',
        clue5: 'Stars: Paul Newman, George Kennedy, Strother Martin',
        clue6: 'A laid back Southern man is sentenced to two years in a rural prison, but refuses to conform.'
    },
    {
        title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
        clue1: '2003 - Action, Adventure, Fantasy',
        clue2: 'Director: Gore Verbinski',
        clue3: 'Tagline: Prepare to be blown out of the water.',
        clue4: 'Characters: Jack Sparrow, Barbossa, Will Turner',
        clue5: 'Stars: Johnny Depp, Geoffrey Rush, Orlando Bloom',
        clue6: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead."
    },
    {
        title: 'The Sound of Music',
        clue1: '1965 - Biography, Drama, Family',
        clue2: 'Director: Robert Wise',
        clue3: 'Tagline: ...the more you see it, the more it becomes one of your favorite things!',
        clue4: 'Characters: Maria, Captain Georg von Trapp, The Baroness',
        clue5: 'Stars: Julie Andrews, Christopher Plummer, Eleanor Parker',
        clue6: "A young novitiate is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer."
    },
    {
        title: 'Gandhi',
        clue1: '1982 - Biography, Drama',
        clue2: 'Director: Richard Attenborough',
        clue3: 'Tagline: His Triumph Changed The World Forever.',
        clue4: 'Characters: Lord Irwin, Mahatma, Kasturba',
        clue5: 'Stars: Ben Kingsley, John Gielgud, Rohini Hattangadi',
        clue6: 'The life of the lawyer who became the famed leader of the Indian revolts against the British rule through his philosophy of nonviolent protest.'
    },
    {
        title: 'Aladdin',
        clue1: '1992 - Animation, Adventure, Comedy',
        clue2: 'Director: Ron Clements, John Musker',
        clue3: 'Tagline: Imagine if you had three wishes, three hopes, three dreams, and they all could come true.',
        clue4: 'Characters: Genie, Princess Jasmine, Jafar',
        clue5: 'Stars: Scott Weinger, Robin Williams, Linda Larkin',
        clue6: 'A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.'
    },
    {
        title: 'The Help',
        clue1: '2011 - Drama',
        clue2: 'Director: Tate Taylor',
        clue3: 'Tagline: Change begins with a whisper.',
        clue4: 'Characters: Skeeter Phelan, Aibileen Clark, Minny Jackson',
        clue5: 'Stars: Emma Stone, Viola Davis, Octavia Spencer',
        clue6: "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids' point of view on the white families for which they work, and the hardships they go through on a daily basis."
    },
    {
        title: 'Beauty and the Beast',
        clue1: '1991 - Animation, Family, Fantasy',
        clue2: 'Director: Gary Trousdale, Kirk Wise',
        clue3: 'Tagline: The most beautiful love story ever told.',
        clue4: 'Characters: Belle, Mrs. Potts, Gaston',
        clue5: "Stars: Paige O'Hara, Robby Benson, Jesse Corti",
        clue6: "A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman's love."
    },
    {
        title: 'Dune',
        clue1: '2021 - Action, Adventure, Drama',
        clue2: 'Director: Denis Villeneuve',
        clue3: 'Tagline: Beyond fear, destiny awaits',
        clue4: 'Characters: Paul Atreides, Lady Jessica Atreides, Chani',
        clue5: 'Stars: Timothée Chalamet, Rebecca Ferguson, Zendaya',
        clue6: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
    },
    {
        title: 'Dances with Wolves',
        clue1: '1990 - Adventure, Drama, Western',
        clue2: 'Director: Kevin Costner',
        clue3: 'Tagline: Inside everyone is a frontier waiting to be discovered.',
        clue4: 'Characters: Lieutenant Dunbar, Stands With A Fist, Kicking Bird',
        clue5: 'Stars: Kevin Costner, Mary McDonnell, Graham Greene',
        clue6: 'Lieutenant John Dunbar, assigned to a remote western Civil War outpost, befriends wolves and Native Americans, making him an intolerable aberration in the military.'
    },
    {
        title: 'Knives Out',
        clue1: '2019 - Comedy, Crime, Drama',
        clue2: 'Director: Rian Johnson',
        clue3: 'Tagline: Everyone has a motive. No one has a clue.',
        clue4: 'Characters: Benoit Blanc,  Marta Cabrera, Harlan Thrombey',
        clue5: 'Stars: Daniel Craig, Chris Evans, Ana de Armas',
        clue6: 'A detective investigates the death of the patriarch of an eccentric, combative family.'
    },
    {
        title: 'Midsommar',
        clue1: '2019 - Drama, Horror, Mystery',
        clue2: 'Director: Ari Aster',
        clue3: 'Tagline: Let the festivities begin',
        clue4: 'Characters: Dani, Christian, Pelle',
        clue5: 'Stars: Florence Pugh, Jack Reynor, Vilhelm Blomgren',
        clue6: "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult."
    }, 
    {
        title: 'Get Out',
        clue1: '2017 - Horror, Mystery, Thriller',
        clue2: 'Director: Jordan Peele',
        clue3: "Tagline: Just because you're invited, doesn't mean you're welcome.",
        clue4: 'Characters: Chris Washington, Rose Armitage, Georgina',
        clue5: 'Stars: Daniel Kaluuya, Allison Williams, Bradley Whitford',
        clue6: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
    }, 
    {
        title: 'Lady Bird',
        clue1: '2017 - Comedy, Drama',
        clue2: 'Director: Greta Gerwig',
        clue3: 'Tagline: Time to Fly.',
        clue4: "Characters: Marion McPherson, Lady McPherson, Danny O'Neill",
        clue5: 'Stars: Saoirse Ronan, Laurie Metcalf, Tracy Letts',
        clue6: 'In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.'
    },
    {
        title: 'Baby Driver',
        clue1: '2017 - Action, Crime, Drama',
        clue2: 'Director: Edgar Wright',
        clue3: 'Tagline: All you need is one killer track.',
        clue4: 'Characters: Griff, Darling, Baby',
        clue5: 'Stars: Ansel Elgort, Jon Bernthal, Jon Hamm',
        clue6: 'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.'
    }, 
    {
        title: 'Black Panther',
        clue1: '2018 - Action, Adventure, Sci-Fi',
        clue2: 'Director: Ryan Coogler',
        clue3: 'Tagline: Long live the king.',
        clue4: "Characters: T'Challa, Erik Killmonger, Nakia",
        clue5: "Stars: Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
        clue6: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
    }, 
    {
        title: 'Jojo Rabbit',
        clue1: '2019 - Comedy, Drama, War',
        clue2: 'Director: Taika Waititi',
        clue3: 'Tagline: An anti-hate satire.',
        clue4: 'Characters: Elsa, Adolf, Captain Klenzendorf',
        clue5: 'Stars: Roman Griffin Davis, Thomasin McKenzie, Scarlett Johansson',
        clue6: "A young German boy in the Hitler Youth whose hero and imaginary friend is the country's dictator is shocked to discover that his mother is hiding a Jewish girl in their home."
    }, 
    {
        title: 'Her',
        clue1: '2013 - Drama, Romance, Sci-Fi',
        clue2: 'Director: Spike Jonze',
        clue3: "Tagline: She's not just a computer.",
        clue4: 'Characters: Theodore, Amy, Samantha',
        clue5: 'Stars: Joaquin Phoenix, Amy Adams, Scarlett Johansson',
        clue6: 'In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.'
    }, 
    {
        title: 'The Social Network',
        clue1: '2010 - Biography, Drama',
        clue2: 'Director: David Fincher',
        clue3: "Tagline: You don't get to 500 million friends without making a few enemies",
        clue4: 'Characters: Mark Zuckerberg, Eduardo Saverin, Sean Parker',
        clue5: 'Stars: Jesse Eisenberg, Andrew Garfield, Justin Timberlake',
        clue6: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.'
    }, 
    {
        title: 'Arrival',
        clue1: '2016 - Drama, Sci-Fi',
        clue2: 'Director: Denis Villeneuve',
        clue3: 'Tagline: Why are they here?',
        clue4: 'Characters: Louise Banks, Ian Donnelly, Colonel Weber',
        clue5: 'Stars: Amy Adams, Jeremy Renner, Forest Whitaker',
        clue6: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.'
    }, 
    {
        title: 'The Lighthouse',
        clue1: '2019 - Drama, Fantasy, History',
        clue2: 'Director: Robert Eggers',
        clue3: 'Tagline: There is enchantment in the light.',
        clue4: 'Characters: Thomas Howard, Thomas Wake, Mermaid',
        clue5: 'Stars: Robert Pattinson, Willem Dafoe, Valeriia Karaman',
        clue6: 'Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.'
    }, 
    {
        title: 'American Psycho',
        clue1: '2000 - Crime, Drama, Horror',
        clue2: 'Director: Mary Harron',
        clue3: 'Tagline: No Introduction Necessary.',
        clue4: 'Characters: Patrick Bateman, Timothy Bryce, Craig McDermott',
        clue5: 'Stars: Christian Bale, Justin Theroux, Josh Lucas',
        clue6: 'A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.'
    }, 
    {
        title: 'Scott Pilgrim vs. the World',
        clue1: '2010 - Action, Comedy, Fantasy',
        clue2: 'Director: Edgar Wright',
        clue3: 'Tagline: An epic comeback of epic epicness.',
        clue4: 'Characters: Ramona Flowers, Wallace Wells, Knives Chau',
        clue5: 'Stars: Michael Cera, Mary Elizabeth Winstead, Kieran Culkin',
        clue6: "In a magically realistic version of Toronto, a young man must defeat his new girlfriend's seven evil exes one by one in order to win her heart."
    }, 
    {
        title: 'Uncut Gems',
        clue1: '2019 - Crime, Drama, Thriller',
        clue2: 'Director: Benny Safdie, Josh Safdie',
        clue3: 'Tagline: This is me! This is how *I* win.',
        clue4: 'Characters: Howard Ratner, Julia De Fiore, Julia De Fiore',
        clue5: 'Stars: Adam Sandler, Julia Fox, Idina Menzel',
        clue6: 'With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hope of staying afloat and alive.'
    }, 
    {
        title: 'Hereditary',
        clue1: '2018 - Drama, Horror, Mystery',
        clue2: 'Director: Ari Aster',
        clue3: 'Tagline: Every family tree hides a secret.',
        clue4: 'Characters: Annie, Charlie, Steve',
        clue5: 'Stars: Toni Collette, Milly Shapiro, Gabriel Byrne',
        clue6: 'A grieving family is haunted by tragic and disturbing occurrences.'
    }, 
    {
        title: 'Thor: Ragnarok',
        clue1: '2017 - Action, Adventure, Comedy',
        clue2: 'Director: Taika Waititi',
        clue3: 'Tagline: No Hammer. No Problem.',
        clue4: 'Characters: Thor, Loki, Bruce Banner',
        clue5: 'Stars: Chris Hemsworth, Tom Hiddleston, Cate Blanchett',
        clue6: 'Imprisoned on the planet Sakaar, a hero must race against time to return to Asgard and stop the destruction of his world at the hands of a powerful and ruthless villain.'
    }, 
    {
        title: 'Soul',
        clue1: '2020 - Animation, Adventure, Comedy',
        clue2: 'Director: Pete Docter, Kemp Powers',
        clue3: 'Tagline: Everybody has a soul. Joe Gardner is about to find his.',
        clue4: 'Characters: Joe, 22, Moonwind',
        clue5: 'Stars: Jamie Foxx, Tina Fey, Graham Norton',
        clue6: 'After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.'
    }, 
    {
        title: 'Black Swan',
        clue1: '2010 - Drama, Thriller',
        clue2: 'Director: Darren Aronofsky',
        clue3: 'Tagline: I just want to be perfect.',
        clue4: 'Characters: Nina Sayers, Lily, Thomas Leroy',
        clue5: 'Stars: Natalie Portman, Mila Kunis, Vincent Cassel',
        clue6: "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's Swan Lake."
    }, 
    {
        title: 'Moonlight',
        clue1: '2016 - Drama',
        clue2: 'Director: Barry Jenkins',
        clue3: 'Tagline: This is the story of a lifetime.',
        clue4: 'Characters: Juan, Paula, Black',
        clue5: 'Stars: Mahershala Ali, Naomie Harris, Trevante Rhodes',
        clue6: 'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.'
    }, 
    {
        title: 'Dunkirk',
        clue1: '2017 - Action, Drama, History',
        clue2: 'Director: Christopher Nolan',
        clue3: 'Tagline: At the point of crisis, at the point of annihilation, survival is victory.',
        clue4: 'Characters: Tommy, George, Mr. Dawson',
        clue5: 'Stars: Fionn Whitehead, Barry Keoghan, Mark Rylance',
        clue6: 'Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.'
    }, 
    {
        title: 'Marriage Story',
        clue1: '2019 - Drama, Romance',
        clue2: 'Director: Noah Baumbach',
        clue3: "Tagline: Where there's a love, there's a way.",
        clue4: 'Characters: Charlie Barber, Nicole Barber, Street Solicitor #1',
        clue5: 'Stars: Adam Driver, Scarlett Johansson, Julia Greer',
        clue6: "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together."
    }, 
    {
        title: 'Us',
        clue1: '2019 - Horror, Mystery, Thriller',
        clue2: 'Director: Jordan Peele',
        clue3: 'Tagline: We Are Our Own Worst Enemy.',
        clue4: 'Characters: Adelaine Wilson, Gabe Wilson, Kitty Tyler',
        clue5: "Stars: Lupita Nyong'o, Winston Duke, Elisabeth Moss",
        clue6: "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them."
    }, 
    {
        title: 'Deadpool',
        clue1: '2016 - Action, Adventure, Comedy',
        clue2: 'Director: Tim Miller',
        clue3: 'Tagline: With great power comes great irresponsibility.',
        clue4: 'Characters: Wade, Vanessa, Weasel',
        clue5: 'Stars: Ryan Reynolds, Morena Baccarin, T.J. Miller',
        clue6: 'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.'
    }, 
    {
        title: 'A Quiet Place',
        clue1: '2018 - Drama, Horror, Sci-Fi',
        clue2: 'Director: John Krasinski',
        clue3: 'Tagline: If they hear you, they hunt you.',
        clue4: 'Characters: Evelyn Abbott, Lee Abbott, Regan Abbott',
        clue5: 'Stars: Emily Blunt, John Krasinski, Millicent Simmonds',
        clue6: 'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.'
    }, 
    {
        title: 'Tenet',
        clue1: '2020 - Action, Sci-Fi, Thriller',
        clue2: 'Director: Christopher Nolan',
        clue3: 'Tagline: Time Runs Out',
        clue4: 'Characters: Protagonist, Neil, Kat',
        clue5: 'Stars: John David Washington, Robert Pattinson, Elizabeth Debicki',
        clue6: 'Armed with only one word and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.'
    },
    {
        title: 'Guardians of the Galaxy',
        clue1: '2014 - Action, Adventure, Comedy',
        clue2: 'Director: James Gunn',
        clue3: 'Tagline: All heroes start somewhere.',
        clue4: 'Characters: Peter Quill, Groot, Rocket',
        clue5: 'Stars: Chris Pratt, Vin Diesel, Bradley Cooper',
        clue6: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.'
    }, 
    {
        title: 'It',
        clue1: '2017 - Horror',
        clue2: 'Director: Andy Muschietti',
        clue3: "Tagline: You'll float too.",
        clue4: 'Characters: Pennywise, Bill Denbrough, Richie Tozier',
        clue5: 'Stars: Bill Skarsgård, Jaeden Martell, Finn Wolfhard',
        clue6: 'In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.'
    }, 
    {
        title: 'Iron Man',
        clue1: '2008 - Action, Adventure, Sci-Fi',
        clue2: 'Director: Jon Favreau',
        clue3: "Tagline: Heroes aren't born. They're built.",
        clue4: 'Characters: Tony Stark, Pepper Potts, Rhodey',
        clue5: 'Stars: Robert Downey Jr., Gwyneth Paltrow, Terrence Howard',
        clue6: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.'
    }, 
    {
        title: 'Donnie Darko',
        clue1: '2001 - Drama, Mystery, Sci-Fi',
        clue2: 'Director: Richard Kelly',
        clue3: 'Tagline: Life is one long insane trip. Some people just have better directions.',
        clue4: 'Characters: Gretchen Ross, Rose, Eddie',
        clue5: 'Stars: Jake Gyllenhaal, Jena Malone, Mary McDonnell',
        clue6: 'After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.'
    }, 
    {
        title: "Harry Potter and the Sorcerer's Stone",
        clue1: '2001 - Adventure, Family, Fantasy',
        clue2: 'Director: Chris Columbus',
        clue3: 'Tagline: Let the Magic Begin',
        clue4: 'Characters: Ron Weasley, Albus Dumbledore, Hermione Granger',
        clue5: 'Stars: Daniel Radcliffe, Rupert Grint, Emma Watson',
        clue6: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.'
    }, 
    {
        title: 'The Perks of Being a Wallflower',
        clue1: '2012 - Drama, Romance',
        clue2: 'Director: Stephen Chbosky',
        clue3: 'Tagline: We accept the love we think we deserve.',
        clue4: 'Characters: Charlie, Sam, Patrick',
        clue5: 'Stars: Logan Lerman, Emma Watson, Ezra Miller',
        clue6: 'An introvert freshman is taken under the wings of two seniors who welcome him to the real world.'
    }, 
    {
        title: 'Fantastic Mr. Fox',
        clue1: '2009 - Animation, Adventure, Comedy',
        clue2: 'Director: Wes Anderson',
        clue3: 'Tagline: Dig the life fantastic.',
        clue4: 'Characters: Badger, Ash, Kylie',
        clue5: 'Stars: George Clooney, Meryl Streep, Bill Murray',
        clue6: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation."
    }, 
    {
        title: 'The Shape of Water',
        clue1: '2017 - Drama, Fantasy, Romance',
        clue2: 'Director: Guillermo del Toro',
        clue3: 'Tagline: Experience a connection beyond words.',
        clue4: 'Characters: Elisa Esposito, Zelda Fuller, Richard Strickland',
        clue5: 'Stars: Sally Hawkins, Octavia Spencer, Michael Shannon',
        clue6: 'At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.'
    }, 
    {
        title: 'Ex Machina',
        clue1: '2014 - Drama, Sci-Fi, Thriller',
        clue2: 'Director: Alex Garland',
        clue3: 'Tagline: To erase the line between man and machine is to obscure the line between men and gods',
        clue4: 'Characters: Ava, Caleb, Kyoko',
        clue5: 'Stars: Alicia Vikander, Domhnall Gleeson, Oscar Isaac',
        clue6: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.'
    }, 
    {
        title: 'Birdman',
        clue1: '2014 - Comedy, Drama',
        clue2: 'Director: Alejandro G. Iñárritu',
        clue3: "Tagline: You're Anything But Invisible",
        clue4: 'Characters: Riggan, Jake, Mike',
        clue5: 'Stars: Michael Keaton, Zach Galifianakis, Edward Norton',
        clue6: 'A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.'
    },
    {
        title: 'Titanic',
        clue1: '1997 - Drama, Romance',
        clue2: 'Director: James Cameron',
        clue3: 'Tagline: Collide With Destiny.',
        clue4: 'Characters: Jack Dawson, Rose Dewitt Bukater, Cal Hockley',
        clue5: 'Stars: Leonardo DiCaprio, Kate Winslet, Billy Zane',
        clue6: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard a luxurious, ill-fated ship.'
    }, 
    {
        title: 'BlacKkKlansman',
        clue1: '2018 - Biography, Comedy, Crime',
        clue2: 'Director: Spike Lee',
        clue3: 'Tagline: Infiltrate hate.',
        clue4: 'Characters: Ron Stallworth, Flip Zimmerman, David Duke',
        clue5: 'Stars: John David Washington, Adam Driver, Laura Harrier',
        clue6: 'Ron Stallworth, an African American police officer from Colorado Springs, CO, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader. Based on actual events.'
    }, 
    {
        title: 'The Breakfast Club',
        clue1: '1985 - Comedy, Drama',
        clue2: 'Director: John Hughes',
        clue3: 'Tagline: Five strangers with nothing in common, except each other.',
        clue4: 'Characters: Andrew Clark, John Bender, Claire Standish',
        clue5: 'Stars: Emilio Estevez, Judd Nelson, Molly Ringwald',
        clue6: 'Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.'
    }, 
    {
        title: 'Sixteen Candles',
        clue1: '1984 - Comedy, Romance',
        clue2: 'Director: John Hughes',
        clue3: 'Tagline: This is Samantha Baker and today is her 16th birthday. The problem is, nobody remembers.',
        clue4: 'Characters: Samantha, Geek, Jake',
        clue5: 'Stars: Molly Ringwald, Anthony Michael Hall, Justin Henry',
        clue6: "A girl's sweet sixteenth birthday becomes anything but special, as she suffers from every embarrassment possible."
    }, 
    {
        title: 'Weird Science',
        clue1: '1985 - Comedy, Romance, Sci-Fi',
        clue2: 'Director: John Hughes',
        clue3: "Tagline: If you can't get a date, make one!",
        clue4: 'Characters: Gary Wallace, Wyatt Donnelly, Lisa',
        clue5: 'Stars: Anthony Michael Hall, Ilan Mitchell-Smith, Kelly LeBrock',
        clue6: 'Two high school nerds use a computer program to literally create the perfect woman, but she turns their lives upside down.'
    }, 
    {
        title: 'Booksmart',
        clue1: '2019 - Comedy',
        clue2: 'Director: Olivia Wilde',
        clue3: "Tagline: Getting Straight A's. Giving Zero F's.",
        clue4: 'Characters: Amy, Molly, Miss Fine',
        clue5: 'Stars: Kaitlyn Dever, Beanie Feldstein, Jessica Williams',
        clue6: 'On the eve of their high-school graduation, two academic superstars and best friends realize they should have worked less and played more. Determined not to fall short of their peers, the girls try to cram four years of fun into one night.'
    }, 
    {
        title: 'The Martian',
        clue1: '2015 - Adventure, Drama, Sci-Fi',
        clue2: 'Director: Ridley Scott',
        clue3: 'Tagline: Bring him home',
        clue4: 'Characters: Mark Watney, Melissa Lewis, Annie Montrose',
        clue5: 'Stars: Matt Damon, Jessica Chastain, Kristen Wiig',
        clue6: 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive and can survive until a potential rescue.'
    }, 
    {
        title: 'Encanto',
        clue1: '2021 - Animation, Comedy, Family',
        clue2: 'Director: Jared Bush, Byron Howard, Charise Castro Smith',
        clue3: 'Tagline: Magical House. Magical Family.',
        clue4: 'Characters: Mirabel, Abuela Alma, Bruno',
        clue5: 'Stars: Stephanie Beatriz, María Cecilia Botero, John Leguizamo',
        clue6: 'A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers.'
    }, 
    {
        title: 'The Witch',
        clue1: '2015 - Drama, Fantasy, History',
        clue2: 'Director: Robert Eggers',
        clue3: 'Tagline: A New-England Folktale.',
        clue4: 'Characters: Thomasin, William, Katherine',
        clue5: 'Stars: Anya Taylor-Joy, Ralph Ineson, Kate Dickie',
        clue6: 'A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.'
    }, 
    {
        title: 'Lost in Translation',
        clue1: '2003 - Comedy, Drama',
        clue2: 'Director: Sofia Coppola',
        clue3: 'Tagline: Sometimes you have to go halfway around the world to come full circle',
        clue4: 'Characters: Bob Harris, Charlotte, John',
        clue5: 'Stars: Bill Murray, Scarlett Johansson, Giovanni Ribisi',
        clue6: 'A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.'
    }, 
    {
        title: 'Moonrise Kingdom',
        clue1: '2012 - Comedy, Drama, Romance',
        clue2: 'Director: Wes Anderson',
        clue3: 'Tagline: A tormenting and surprising story of children and adults during the stormy days of the summer of 1965.',
        clue4: 'Characters: Sam, Suzy, Scout Master Ward',
        clue5: 'Stars: Jared Gilman, Kara Hayward, Bruce Willis',
        clue6: 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.'
    }, 
    {
        title: 'The Revenant',
        clue1: '2015 - Action, Adventure, Drama',
        clue2: 'Director: Alejandro G. Iñárritu',
        clue3: 'Tagline: (n. One who has returned, as if from the dead.)',
        clue4: 'Characters: Hugh Glass, John Fitzgerald, Bridger',
        clue5: 'Stars: Leonardo DiCaprio, Tom Hardy, Will Poulter',
        clue6: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.'
    }, 
    {
        title: 'Little Miss Sunshine',
        clue1: '2006 - Comedy, Drama',
        clue2: 'Director: Jonathan Dayton, Valerie Faris',
        clue3: 'Tagline: Everyone just pretend to be normal',
        clue4: 'Characters: Frank, Sheryl, Olive',
        clue5: 'Stars: Steve Carell, Toni Collette, Abigail Breslin',
        clue6: 'A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.'
    }, 
    {
        title: 'Coming to America',
        clue1: '1988 - Comedy, Romance',
        clue2: 'Director: John Landis',
        clue3: 'Tagline: This summer, Prince Akeem discovers America.',
        clue4: 'Characters: Prince Akeem, Semmi, Cleo McDowell',
        clue5: 'Stars: Eddie Murphy, Arsenio Hall, John Amos',
        clue6: 'An extremely pampered African prince travels to Queens, New York, and goes undercover to find a wife that he can respect for her intelligence and strong will.'
    }, 
    {
        title: 'Bad Boys',
        clue1: '1995 - Action, Comedy, Crime',
        clue2: 'Director: Michael Bay',
        clue3: 'Tagline: Whatcha gonna do?',
        clue4: 'Characters: Mike Lowrey, Marcus Burnett, Eddie Dominguez',
        clue5: 'Stars: Will Smith, Martin Lawrence, Lisa Boyle',
        clue6: 'Two hip detectives protect a witness to a murder while investigating a case of stolen heroin from the evidence storage room from their police precinct.'
    }, 
    {
        title: '10 Things I Hate About You',
        clue1: '1999 - Comedy, Drama, Romance',
        clue2: 'Director: Gil Junger',
        clue3: 'Tagline: How do I loathe thee? Let me count the ways.',
        clue4: 'Characters: Patrick Verona, Kat Stratford, Cameron James',
        clue5: 'Stars: Heath Ledger, Julia Stiles, Joseph Gordon-Levitt',
        clue6: "A pretty, popular teenager can't go out on a date until her ill-tempered older sister does."
    }, 
    {
        title: 'John Wick',
        clue1: '2014 - Action, Crime, Thriller',
        clue2: 'Director: Chad Stahelski, David Leitch',
        clue3: 'Tagline: Revenge is all he has left.',
        clue4: 'Characters: Viggo Tarasov, Iosef Tarasov, John',
        clue5: 'Stars: Keanu Reeves, Michael Nyqvist, Alfie Allen',
        clue6: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.'
    }, 
    {
        title: 'The Irishman',
        clue1: '2019 - Biography, Crime, Drama',
        clue2: 'Director: Martin Scorsese',
        clue3: 'Tagline: His story changed history.',
        clue4: 'Characters: Frank Sheeran, Jimmy Hoffa, Russell Bufalino',
        clue5: 'Stars: Robert De Niro, Al Pacino, Joe Pesci',
        clue6: 'Hitman Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family.'
    }, 
    {
        title: 'The Lobster',
        clue1: '2015 - Comedy, Drama, Romance',
        clue2: 'Director: Yorgos Lanthimos',
        clue3: 'Tagline: An unconventional love story by Yorgos Lanthimos.',
        clue4: 'Characters: David, Short Sighted Woman, Nosebleed Woman',
        clue5: 'Stars: Colin Farrell, Rachel Weisz, Jessica Barden',
        clue6: 'In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.'
    }, 
    {
        title: 'Luca',
        clue1: '2021 - Animation, Adventure, Comedy',
        clue2: 'Director: Enrico Casarosa',
        clue3: 'Tagline: Silenzio Bruno.',
        clue4: 'Characters: Alberto Scorfano, Giulia Marcovaldo, Ercole Visconti',
        clue5: 'Stars: Jacob Tremblay, Jack Dylan Grazer, Emma Berman',
        clue6: 'On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.'
    }, 
    {
        title: 'Mulholland Drive',
        clue1: '2001 - Drama, Mystery, Thriller',
        clue2: 'Director: David Lynch',
        clue3: 'Tagline: Beware what you dream for...',
        clue4: 'Characters: Betty, Rita, Adam',
        clue5: 'Stars: Naomi Watts, Laura Harring, Justin Theroux',
        clue6: 'After a car wreck on a winding road renders a woman amnesiac, she and a perky Hollywood-hopeful search for clues and answers across Los Angeles in a twisting venture beyond dreams and reality.'
    },
    {
        title: 'The Hunger Games',
        clue1: '2012 - Action, Adventure, Sci-Fi',
        clue2: 'Director: Gary Ross',
        clue3: 'Tagline: May the Odds be Ever in your Favor',
        clue4: 'Characters: Katniss Everdeen, Peeta Mellark, Gale Hawthorne',
        clue5: 'Stars: Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth',
        clue6: "Katniss Everdeen voluntarily takes her younger sister's place in a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death."
    },
    {
        title: 'Shrek',
        clue1: '2001 - Animation, Adventure, Comedy',
        clue2: 'Director: Andrew Adamson, Vicky Jenson',
        clue3: 'Tagline: The greatest fairy tale never told.',
        clue4: 'Characters: Donkey, Princess Fiona, Lord Farquaad',
        clue5: 'Stars: Mike Myers, Eddie Murphy, Cameron Diaz',
        clue6: 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.'
    }, 
    {
        title: 'Austin Powers: International Man of Mystery',
        clue1: '1997 - Adventure, Comedy',
        clue2: 'Director: Jay Roach',
        clue3: "Tagline: If he were any cooler, he'd still be frozen, baby!",
        clue4: 'Characters: Vanessa Kensington, Basil Exposition, Number Two',
        clue5: 'Stars: Mike Myers, Elizabeth Hurley, Michael York',
        clue6: 'A world-class playboy and part-time secret agent from the 1960s emerges after thirty years in a cryogenic state to battle with his nemesis Dr. Evil.'
    }, 
    {
        title: 'Avatar',
        clue1: '2009 - Action, Adventure, Fantasy',
        clue2: 'Director: James Cameron',
        clue3: 'Tagline: Enter the World',
        clue4: 'Characters: Jake Sully, Neytiri, Dr. Grace Augustine',
        clue5: 'Stars: Sam Worthington, Zoe Saldana, Sigourney Weaver',
        clue6: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
    }, 
    {
        title: 'Wonder Woman',
        clue1: '2017 - Action, Adventure, Fantasy',
        clue2: 'Director: Patty Jenkins',
        clue3: 'Tagline: Power. Grace. Wisdom. Wonder.',
        clue4: 'Characters: Diana, Steve Trevor, Antiope',
        clue5: 'Stars: Gal Gadot, Chris Pine, Robin Wright',
        clue6: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.'
    }, 
    {
        title: 'Split',
        clue1: '2016 - Horror, Thriller',
        clue2: 'Director: M. Night Shyamalan',
        clue3: 'Tagline: Kevin has 23 distinct personalities. The 24th is about to be unleashed.',
        clue4: 'Characters: Dennis, Casey Cooke, Claire Benoit',
        clue5: 'Stars: James McAvoy, Anya Taylor-Joy, Haley Lu Richardson',
        clue6: 'Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.'
    }, 
    {
        title: '500 Days of Summer',
        clue1: '2009 - Comedy, Drama, Romance',
        clue2: 'Director: Marc Webb',
        clue3: "Tagline: Boy meets girl. Boy falls in love. Girl doesn't.",
        clue4: 'Characters: Tom, Summer, McKenzie',
        clue5: 'Stars: Zooey Deschanel, Joseph Gordon-Levitt, Geoffrey Arend',
        clue6: 'After being dumped by the girl he believes to be his soulmate, hopeless romantic Tom Hansen reflects on their relationship to try and figure out where things went wrong and how he can win her back.'
    }, 
    {
        title: 'Scream',
        clue1: '1996 - Horror, Mystery',
        clue2: 'Director: Wes Craven',
        clue3: "Tagline: Don't Answer The Phone. Don't Open The Door. Don't Try To Escape.",
        clue4: 'Characters: Sidney, Gale Weathers, Deputy Dewey',
        clue5: 'Stars: Neve Campbell, Courteney Cox, David Arquette',
        clue6: 'A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.'
    }, 
    {
        title: 'Home Alone',
        clue1: '1990 - Comedy, Family',
        clue2: 'Director: Chris Columbus',
        clue3: 'Tagline: A family comedy without the family.',
        clue4: 'Characters: Kevin, Harry, Marv',
        clue5: 'Stars: Macaulay Culkin, Joe Pesci, Daniel Stern',
        clue6: 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.'
    }, 
    {
        title: 'Superbad',
        clue1: '2007 - Comedy',
        clue2: 'Director: Greg Mottola',
        clue3: 'Tagline: Come and Get Some',
        clue4: 'Characters: Evan, Jules, Fogell',
        clue5: 'Stars: Michael Cera, Jonah Hill, Christopher Mintz-Plasse',
        clue6: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.'
    }, 
    {
        title: "Ferris Bueller's Day Off",
        clue1: '1986 - Comedy',
        clue2: 'Director: John Hughes',
        clue3: "Tagline: One Man's Struggle To Take It Easy",
        clue4: 'Characters: Cameron Frye, Sloane Peterson, Ed Rooney',
        clue5: 'Stars: Matthew Broderick, Alan Ruck, Mia Sara',
        clue6: 'A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.'
    }, 
    {
        title: 'Isle of Dogs',
        clue1: '2018 - Animation, Adventure, Comedy',
        clue2: 'Director: Wes Anderson',
        clue3: "Tagline: Don't ask me to fetch that stick.",
        clue4: 'Characters: Chief, Atari, Rex',
        clue5: 'Stars: Bryan Cranston, Koyu Rankin, Edward Norton',
        clue6: "Set in Japan, the story follows a boy's odyssey in search of his lost dog."
    }, 
    {
        title: 'Zootopia',
        clue1: '2016 - Animation, Adventure, Comedy',
        clue2: 'Director: Byron Howard, Rich Moore, Jared Bush',
        clue3: 'Tagline: Welcome to the urban jungle.',
        clue4: 'Characters: Judy Hopps, Nick Wilde, Chief Bogo',
        clue5: 'Stars: Ginnifer Goodwin, Jason Bateman, Idris Elba',
        clue6: 'In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.'
    }, 
    {
        title: 'Shaun of the Dead',
        clue1: '2004 - Comedy, Horror',
        clue2: 'Director: Edgar Wright',
        clue3: 'Tagline: Buy Milk. Ring Mum. Dodge Zombies',
        clue4: 'Characters: Ed, Liz, Dianne',
        clue5: 'Stars: Simon Pegg, Nick Frost, Kate Ashfield',
        clue6: 'The uneventful, aimless lives of a London electronics salesman and his layabout roommate are disrupted by the zombie apocalypse.'
    }, 
    {
        title: 'Hot Fuzz',
        clue1: '2007 - Action, Comedy, Mystery',
        clue2: 'Director: Edgar Wright',
        clue3: 'Tagline: When the heat is on, you gotta call the fuzz.',
        clue4: 'Characters: Nicholas Angel, PC Danny Butterman, Met Sergeant',
        clue5: 'Stars: Simon Pegg, Nick Frost, Martin Freeman',
        clue6: 'A skilled London police officer, after irritating superiors with his embarrassing effectiveness, is transferred to a village where the easygoing officers object to his fervor for regulations, as a string of grisly murders strikes the town.'
    }, 
    {
        title: 'Juno',
        clue1: '2007 - Comedy, Drama',
        clue2: 'Director: Jason Reitman',
        clue3: 'Tagline: A comedy about growing up... and the bumps along the way.',
        clue4: 'Characters: Paulie Bleeker, Vanessa Loring, Mark Loring',
        clue5: 'Stars: Michael Cera, Elliot Page, Jennifer Garner',
        clue6: 'Faced with an unplanned pregnancy, an offbeat young woman makes an unusual decision regarding the unborn child.'
    }, 
    {
        title: 'Coraline',
        clue1: '2009 - Animation, Drama, Family',
        clue2: 'Director: Henry Selick',
        clue3: "Tagline: The braver you are, the more you'll see",
        clue4: 'Characters: Mel Jones, Charlie Jones, Miss April Spink',
        clue5: 'Stars: Dakota Fanning, Teri Hatcher, John Hodgman',
        clue6: 'An adventurous 11-year-old girl finds another world that is a strangely idealized version of her frustrating home, but it has sinister secrets.'
    }, 
    {
        title: 'Minari',
        clue1: '2020 - Drama',
        clue2: 'Director: Lee Isaac Chung',
        clue3: 'Tagline: A timeless story of what roots us.',
        clue4: 'Characters: Jacob, Monica, David',
        clue5: 'Stars: Steven Yeun, Yeri Han, Alan S. Kim',
        clue6: 'A Korean family starts a farm in 1980s Arkansas.'
    }, 
    {
        title: 'Palm Springs',
        clue1: '2020 - Comedy, Fantasy, Mystery',
        clue2: 'Director: Max Barbakow',
        clue3: "Tagline: Live Like There's No Tomorrow",
        clue4: 'Characters: Nyles, Sarah, Roy',
        clue5: 'Stars: Andy Samberg, Cristin Milioti, J.K. Simmons',
        clue6: 'Stuck in a time loop, two wedding guests develop a budding romance while living the same day over and over again.'
    }, 
    {
        title: 'Edward Scissorhands',
        clue1: '1990 - Drama, Fantasy, Romance',
        clue2: 'Director: Tim Burton',
        clue3: "Tagline: His story will touch you, even though he can't.",
        clue4: 'Characters: Kim, Peg, Edward',
        clue5: 'Stars: Johnny Depp, Winona Ryder, Dianne Wiest',
        clue6: 'An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life. Then one day, a suburban lady meets him and introduces him to her world.'
    }, 
    {
        title: 'Moana',
        clue1: '2016 - Animation, Adventure, Comedy',
        clue2: 'Director: Ron Clements, John Musker, Don Hall',
        clue3: 'Tagline: The ocean is calling.',
        clue4: 'Characters: Maui, Gramma Tala, Chief Tui',
        clue5: "Stars: Auli'i Cravalho, Dwayne Johnson, Rachel House",
        clue6: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches a girl's island, she answers the Ocean's call to seek out the Demigod to set things right."
    }, 
    {
        title: 'The Nightmare Before Christmas',
        clue1: '1993 - Animation, Family, Fantasy',
        clue2: 'Director: Tim Burton',
        clue3: 'Tagline: A ghoulish tale with wicked humour & stunning animation.',
        clue4: 'Characters: Jack Skellington, Sally, Evil Scientist',
        clue5: "Stars: Danny Elfman, Chris Sarandon, Catherine O'Hara",
        clue6: 'Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.'
    }, 
    {
        title: 'Halloween',
        clue1: '1978 - Horror, Thriller',
        clue2: 'Director: John Carpenter',
        clue3: 'Tagline: The trick was to stay alive.',
        clue4: 'Characters: Loomis, Laurie, Michael Myers',
        clue5: 'Stars: Donald Pleasence, Jamie Lee Curtis, Tony Moran',
        clue6: 'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.'
    }, 
    {
        title: 'Gravity',
        clue1: '2013 - Action, Drama, Sci-Fi',
        clue2: 'Director: Alfonso Cuarón',
        clue3: "Tagline: Don't Let Go",
        clue4: 'Characters: Ryan Stone, Matt Kowalski, Mission Control',
        clue5: 'Stars: Sandra Bullock, George Clooney, Ed Harris',
        clue6: 'Two astronauts work together to survive after an accident leaves them stranded in space.'
    }, 
    {
        title: 'Brokeback Mountain',
        clue1: '2005 - Drama, Romance',
        clue2: 'Director: Ang Lee',
        clue3: 'Tagline: Love Is A Force Of Nature',
        clue4: 'Characters: Jack Twist, Ennis Del Mar, Alma',
        clue5: 'Stars: Jake Gyllenhaal, Heath Ledger, Michelle Williams',
        clue6: 'Ennis and Jack are two shepherds who develop a sexual and emotional relationship. Their relationship becomes complicated when both of them get married to their respective girlfriends.'
    }, 
    {
        title: 'Cruella',
        clue1: '2021 - Adventure, Comedy, Crime',
        clue2: 'Director: Craig Gillespie',
        clue3: 'Tagline: Hello cruel world.',
        clue4: 'Characters: Estella, The Baroness, Jasper',
        clue5: 'Stars: Emma Stone, Emma Thompson, Joel Fry',
        clue6: 'A live-action prequel feature film following a young Disney villain.'
    }, 
    {
        title: 'The Royal Tenenbaums',
        clue1: '2001 - Comedy, Drama',
        clue2: 'Director: Wes Anderson',
        clue3: "Tagline: Family Isn't A Word... It's A Sentence.",
        clue4: 'Characters: Margot Tenenbaum, Etheline Tenenbaum, Chas Tenenbaum',
        clue5: 'Stars: Gene Hackman, Gwyneth Paltrow, Anjelica Huston',
        clue6: 'The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.'
    }, 
    {
        title: 'Clueless',
        clue1: '1995 - Comedy, Romance',
        clue2: 'Director: Amy Heckerling',
        clue3: 'Tagline: Sex. Clothes. Popularity. Whatever.',
        clue4: 'Characters: Cher, Dionne, Tai',
        clue5: 'Stars: Alicia Silverstone, Stacey Dash, Brittany Murphy',
        clue6: "Shallow, rich and socially successful Cher is at the top of her Beverly Hills high school's pecking scale. Seeing herself as a matchmaker, Cher first coaxes two teachers into dating each other."
    }, 
    {
        title: 'E.T. the Extra-Terrestrial',
        clue1: '1982 - Adventure, Family, Sci-Fi',
        clue2: 'Director: Steven Spielberg',
        clue3: 'Tagline: He is afraid. He is totally alone. He is 3 million light years from home.',
        clue4: 'Characters: Elliott, Gertie, Keys',
        clue5: 'Stars: Henry Thomas, Drew Barrymore, Peter Coyote',
        clue6: 'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.'
    }, 
    {
        title: 'Eyes Wide Shut',
        clue1: '1999 - Drama, Mystery, Thriller',
        clue2: 'Director: Stanley Kubrick',
        clue3: 'Tagline: No dream is ever just a dream.',
        clue4: 'Characters: Dr. William Harford, Alice Harford, Nick Nightingale',
        clue5: 'Stars: Tom Cruise, Nicole Kidman, Todd Field',
        clue6: "A Manhattan doctor embarks on a bizarre, night-long odyssey after his wife's admission of unfulfilled longing."
    }, 
    {
        title: 'Frozen',
        clue1: '2013 - Animation, Adventure, Comedy',
        clue2: 'Director: Chris Buck, Jennifer Lee',
        clue3: 'Tagline: Do you want to build a snowman?',
        clue4: 'Characters: Anna, Elsa, Olaf',
        clue5: 'Stars: Kristen Bell, Idina Menzel, Jonathan Groff',
        clue6: 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.'
    }, 
    {
        title: 'The Devil Wears Prada',
        clue1: '2006 - Comedy, Drama',
        clue2: 'Director: David Frankel',
        clue3: 'Tagline: Hell on Heels',
        clue4: 'Characters: Andy Sachs, Miranda Priestly, Nate',
        clue5: 'Stars: Anne Hathaway, Meryl Streep, Adrian Grenier',
        clue6: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.'
    },
    {
        title: 'The Big Short',
        clue1: '2015 - Biography, Comedy, Drama',
        clue2: 'Director: Adam McKay',
        clue3: 'Tagline: Meet the men who saw the end',
        clue4: 'Characters: Michael Burry, Mark Baum, Jared Vennett',
        clue5: 'Stars: Christian Bale, Steve Carell, Ryan Gosling',
        clue6: 'In 2006-2007 a group of investors bet against the US mortgage market. In their research, they discover how flawed and corrupt the market is.'
    }, 
    {
        title: 'Zombieland',
        clue1: '2009 - Action, Comedy, Horror',
        clue2: 'Director: Ruben Fleischer',
        clue3: 'Tagline: This place is so dead',
        clue4: 'Characters: Columbus, Wichita, Tallahassee',
        clue5: 'Stars: Jesse Eisenberg, Emma Stone, Woody Harrelson',
        clue6: 'A shy student trying to reach his family in Ohio, a gun-toting bruiser in search of the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America.'
    }, 
    {
        title: 'Free Guy',
        clue1: '2021 - Action, Adventure, Comedy',
        clue2: 'Director: Shawn Levy',
        clue3: 'Tagline: The world needed a hero. They got a guy.',
        clue4: 'Characters: Guy, Millie, Antwan',
        clue5: 'Stars: Ryan Reynolds, Jodie Comer, Taika Waititi',
        clue6: "A bank teller discovers that he's actually an NPC inside a brutal, open world video game."
    }, 
    {
        title: 'Twilight',
        clue1: '2008 - Drama, Fantasy, Romance',
        clue2: 'Director: Catherine Hardwicke',
        clue3: 'Tagline: When you can live forever what do you live for?',
        clue4: 'Characters: Bella Swan, Edward Cullen, Jacob Black',
        clue5: 'Stars: Kristen Stewart, Robert Pattinson, Billy Burke',
        clue6: 'When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.'
    }, 
    {
        title: 'Sorry to Bother You',
        clue1: '2018 - Comedy, Drama, Fantasy',
        clue2: 'Director: Boots Riley',
        clue3: 'Tagline: Use your white voice.',
        clue4: 'Characters: Cassius Green, Detroit, Mr. _______',
        clue5: 'Stars: LaKeith Stanfield, Tessa Thompson, Jermaine Fowler',
        clue6: 'In an alternate present-day version of Oakland, telemarketer Cassius Green discovers a magical key to professional success, propelling him into a universe of greed.'
    }, 
    {
        title: 'School of Rock',
        clue1: '2003 - Comedy, Music',
        clue2: 'Director: Richard Linklater',
        clue3: 'Tagline: Old school rock meets private school prep.',
        clue4: 'Characters: Dewey Finn, Ned Schneebly, Rosalie Mullins',
        clue5: 'Stars: Jack Black, Mike White, Joan Cusack',
        clue6: 'After being kicked out of his rock band, Dewey Finn becomes a substitute teacher of an uptight elementary private school, only to try and turn his class into a rock band.'
    }, 
    {
        title: 'It Follows',
        clue1: '2014 - Horror, Mystery, Thriller',
        clue2: 'Director: David Robert Mitchell',
        clue3: "Tagline: It doesn't think. It doesn't feel. It doesn't give up.",
        clue4: 'Characters: Jay Height, Paul, Yara',
        clue5: 'Stars: Maika Monroe, Keir Gilchrist, Olivia Luccardi',
        clue6: 'A young woman is followed by an unknown supernatural force after a sexual encounter.'
    }, 
    {
        title: 'Midnight in Paris',
        clue1: '2011 - Comedy, Fantasy, Romance',
        clue2: 'Director: Woody Allen',
        clue3: "Tagline: The artist's job is not to succumb to despair but to find an antidote for the emptiness of existence.",
        clue4: 'Characters: Gil, Inez, Ernest Hemingway',
        clue5: 'Stars: Owen Wilson, Rachel McAdams, Kathy Bates',
        clue6: "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s every day at midnight."
    }, 
    {
        title: 'Beetlejuice',
        clue1: '1988 - Comedy, Fantasy',
        clue2: 'Director: Tim Burton',
        clue3: 'Tagline: Say it once... Say it twice... But we dare you to say it THREE TIMES',
        clue4: 'Characters: Adam, Barbara, Betelgeuse',
        clue5: 'Stars: Alec Baldwin, Geena Davis, Michael Keaton',
        clue6: 'The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.'
    }, 
    {
        title: 'Punch-Drunk Love',
        clue1: '2002 - Comedy, Drama, Romance',
        clue2: 'Director: Paul Thomas Anderson',
        clue3: 'Tagline: You can go to places in the world with pudding.',
        clue4: 'Characters: Barry Egan, Lena Leonard, Dean Trumbell',
        clue5: 'Stars: Adam Sandler, Emily Watson, Philip Seymour Hoffman',
        clue6: 'Socially frustrated Barry Egan calls a phone-sex line to curb his loneliness. Little does he know it will land him in deep trouble and will jeopardize his burgeoning romance with the mysterious Lena.'
    }, 
    {
        title: 'The Lego Movie',
        clue1: '2014 - Animation, Action, Adventure',
        clue2: 'Director: Christopher Miller, Phil Lord',
        clue3: 'Tagline: The story of a nobody who saved everybody',
        clue4: 'Characters: Emmet Brickowski, Lord Business, Wyldstyle',
        clue5: 'Stars: Chris Pratt, Will Ferrell, Elizabeth Banks',
        clue6: 'An ordinary construction worker, thought to be the prophesied as "special", is recruited to join a quest to stop an evil tyrant from gluing the toy brick universe into eternal stasis.'
    }, 
    {
        title: 'Ghostbusters',
        clue1: '1984 - Action, Comedy, Fantasy',
        clue2: 'Director: Ivan Reitman',
        clue3: "Tagline: They ain't afraid of no ghost.",
        clue4: 'Characters: Dr. Peter Venkman, Dr. Raymond Stantz, Dana Barrett',
        clue5: 'Stars: Bill Murray, Dan Aykroyd, Sigourney Weaver',
        clue6: 'Three parapsychologists forced out of their university funding set up shop as a unique ghost removal service in New York City, attracting frightened yet skeptical customers.'
    }, 
    {
        title: 'About Time',
        clue1: '2013 - Comedy, Drama, Fantasy',
        clue2: 'Director: Richard Curtis',
        clue3: 'Tagline: A new funny film about love. With a bit of time travel.',
        clue4: 'Characters: Tim, Mary, Kit Kat',
        clue5: 'Stars: Domhnall Gleeson, Rachel McAdams, Bill Nighy',
        clue6: 'At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.'
    }, 
    {
        title: 'The Farewell',
        clue1: '2019 - Comedy, Drama',
        clue2: 'Director: Lulu Wang',
        clue3: 'Tagline: Based on an Actual Lie',
        clue4: 'Characters: Nai Nai, Billi, Suze',
        clue5: 'Stars: Shuzhen Zhao, Awkwafina, X Mayo',
        clue6: 'A Chinese family discovers their grandmother has only a short while left to live and decide to keep her in the dark, scheduling a wedding to gather before she dies.'
    }, 
    {
        title: 'The Princess Bride',
        clue1: '1987 - Adventure, Family, Fantasy',
        clue2: 'Director: Rob Reiner',
        clue3: 'Tagline: The story of a man and a woman who lived happily ever after. Even though the courtship almost killed them.',
        clue4: 'Characters: Westley, Iñigo Montoya, Prince Humperdinck',
        clue5: 'Stars: Cary Elwes, Mandy Patinkin, Robin Wright',
        clue6: "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love."
    }, 
    {
        title: 'The Hangover',
        clue1: '2009 - Comedy',
        clue2: 'Director: Todd Phillips',
        clue3: "Tagline: Some guys just can't handle Vegas",
        clue4: 'Characters: Alan, Phil, Mike Tyson',
        clue5: 'Stars: Zach Galifianakis, Bradley Cooper, Ed Helms',
        clue6: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.'
    }, 
    {
        title: 'Mulan',
        clue1: '1998 - Animation, Adventure, Comedy',
        clue2: 'Director: Tony Bancroft, Barry Cook',
        clue3: 'Tagline: This time, the princess saves the prince.',
        clue4: 'Characters: Mushu, Shang, Grandmother Fa',
        clue5: 'Stars: Ming-Na Wen, Eddie Murphy, BD Wong',
        clue6: "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process."
    }, 
    {
        title: '21 Jump Street',
        clue1: '2012 - Action, Comedy, Crime',
        clue2: 'Director: Phil Lord, Christopher Miller',
        clue3: "Tagline: They're too old for this shift.",
        clue4: 'Characters: Schmidt, Jenko, Captain Dickson',
        clue5: 'Stars: Jonah Hill, Channing Tatum, Ice Cube',
        clue6: 'A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.'
    }, 
    {
        title: 'The Mitchells vs. The Machines',
        clue1: '2021 - Animation, Adventure, Comedy',
        clue2: 'Director: Michael Rianda, Jeff Rowe',
        clue3: 'Tagline: Prepare to get weird, cause the world depends on it.',
        clue4: 'Characters: Katie, PAL, Deborahbot 5000',
        clue5: 'Stars: Abbi Jacobson, Danny McBride, Maya Rudolph',
        clue6: "A quirky, dysfunctional family's road trip is upended when they find themselves in the middle of the robot apocalypse and suddenly become humanity's unlikeliest last hope."
    }, 
    {
        title: 'The Edge of Seventeen',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: 'High-school life gets even more unbearable for Nadine when her best friend, Krista, starts dating her older brother.'
    }, 
    {
        title: '10 Cloverfield Lane',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Rocky Horror Picture Show',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Greatest Showman',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Now You See Me',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Carrie',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Heathers',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Jumanji',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Edge of Tomorrow',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Borat',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Slumdog Millionaire',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Game Night',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Legally Blonde',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Kick-Ass',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Love Actually',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Crazy, Stupid, Love',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Elf',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Blair Witch Project',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Men in Black',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Notebook',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Grease',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Pokémon Detective Pikachu',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: "The Emperor's New Groove",
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Looper',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Hidden Figures',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Iron Giant',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Big Fish',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    },
    {
        title: 'World War Z',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Moneyball',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    },
    {
        title: 'Cast Away',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Pitch Perfect',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: '28 Days Later',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: "The King's Speech",
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Evil Dead',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Saw',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Ice Age',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Paddington',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'I Am Legend',
        clue1: '2007 - Action, Drama, Sci-Fi',
        clue2: 'Director: Francis Lawrence',
        clue3: 'Tagline: The last man on earth is not alone',
        clue4: 'Characters: Robert Neville, Anna, Alpha Female',
        clue5: 'Stars: Will Smith, Alice Braga, Charlie Tahan',
        clue6: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.'
    }, 
    {
        title: 'American Hustle',
        clue1: '2013 - Crime, Drama',
        clue2: 'Director: David O. Russell',
        clue3: 'Tagline: Everyone Hustles To Survive',
        clue4: 'Characters: Irving Rosenfeld, Sydney Prosser, Richie DiMaso',
        clue5: 'Stars: Christian Bale, Amy Adams, Bradley Cooper',
        clue6: 'A con man, Irving Rosenfeld, along with his seductive partner Sydney Prosser, is forced to work for a wild F.B.I. Agent, Richie DiMaso, who pushes them into a world of Jersey powerbrokers and the Mafia.'
    }, 
    {
        title: 'Planet of the Apes',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: '13 Going on 30',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Burn After Reading',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'District 9',
        clue1: '2009 - Action, Sci-Fi, Thriller',
        clue2: 'Director: Neill Blomkamp',
        clue3: 'Tagline: You are not welcome here.',
        clue4: 'Characters: Wikus Van De Merwe, Koobus Venter, Sarah Livingstone - Sociologist',
        clue5: 'Stars: Sharlto Copley, David James, Jason Cope',
        clue6: 'Violence ensues after an extraterrestrial race forced to live in slum-like conditions on Earth finds a kindred spirit in a government agent exposed to their biotechnology.'
    }, 
    {
        title: 'Sherlock Holmes',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'This Is the End',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Murder on the Orient Express',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Night at the Museum',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'National Treasure',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Fast Times at Ridgemont High',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Yesterday',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Airplane!',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Mask',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Enter the Dragon',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Little Mermaid',
        clue1: '1989 - Animation, Adventure, Comedy',
        clue2: 'Director: Ron Clements, John Musker',
        clue3: 'Tagline: Sea it',
        clue4: 'Characters: Ariel, Sebastian, Flounder',
        clue5: 'Stars: Jodi Benson, Samuel E. Wright, Rene Auberjonois',
        clue6: "A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince's love."
    }, 
    {
        title: 'Minority Report',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Big Sick',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Tropic Thunder',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The 40-Year-Old Virgin',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Gremlins',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Secret Life of Walter Mitty',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Bridesmaids',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Goonies',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Fifth Element',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: '300',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Napoleon Dynamite',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    },
    {
        title: 'Pretty Woman',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    },
    {
        title: 'The Mummy',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Willy Wonka & the Chocolate Factory',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Space Jam',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Anchorman: The Legend of Ron Burgundy',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Mission: Impossible',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Transformers',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Bourne Identity',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Night of the Living Dead',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Independence Day',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Fast and the Furious',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Goldfinger',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: '50 First Dates',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Chef',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'High School Musical',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Super 8',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Interview with the Vampire',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Interview',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Holiday',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Step Brothers',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Point Break',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Poltergeist',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Raising Arizona',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Signs',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Speed',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Friday the 13th',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Hocus Pocus',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Zoolander',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Bruce Almighty',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Addams Family',
        clue1: '1991 - Comedy, Fantasy',
        clue2: 'Director: Barry Sonnenfeld',
        clue3: "Tagline: It's not the same old Thing.",
        clue4: 'Characters: Gomez, Morticia, Uncle Fester',
        clue5: 'Stars: Anjelica Huston, Raul Julia, Christopher Lloyd',
        clue6: 'Con artists plan to fleece an eccentric family using an accomplice who claims to be their long-lost uncle.'
    }, 
    {
        title: 'Pineapple Express',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Imitation Game',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Ring',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: '50/50',
        clue1: '2011 - Comedy, Drama, Romance',
        clue2: 'Director: Jonathan Levine',
        clue3: 'Tagline: It takes a pair to beat the odds',
        clue4: 'Characters: Adam, Kyle, Richard - Alzheimer Dad',
        clue5: 'Stars: Joseph Gordon-Levitt, Seth Rogen, Anna Kendrick',
        clue6: 'Inspired by a true story, a comedy centered on a 27-year-old guy who learns of his cancer diagnosis and his subsequent struggle to beat the disease.'
    }, 
    {
        title: "National Lampoon's Vacation",
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Ace Ventura: Pet Detective',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Yes Man',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Hook',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Face/Off',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Blind Side',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'American Pie',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Office Space',
        clue1: '1999 - Comedy',
        clue2: 'Director: Mike Judge',
        clue3: 'Tagline: Work Sucks.',
        clue4: 'Characters: Peter, Joanna, Michael Bolton',
        clue5: 'Stars: Ron Livingston, Jennifer Aniston, David Herman',
        clue6: 'Three company workers who hate their jobs decide to rebel against their greedy boss.'
    }, 
    {
        title: "Bill & Ted's Excellent Adventure",
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Dumb and Dumber',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Big',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'Labyrinth',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
    }, 
    {
        title: 'The Proposal',
        clue1: ' - ',
        clue2: 'Director: ',
        clue3: 'Tagline: ',
        clue4: 'Characters: ',
        clue5: 'Stars: ',
        clue6: ''
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