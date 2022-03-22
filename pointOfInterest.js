const pointOfInterestList = [
  {
    corpus: `Le jardin de Shinjuku, surnommé "oasis urbaine", est l’un des parcs les
        plus importants de la capitale. Ses cinquante-huit hectares et ses
        quelque dix-mille arbres constituent une véritable bouffée d’oxygène, à
        quelques minutes du bouillonnant quartier de la gare de Shinjuku. Au
        printemps, le parc devient une véritable attraction lors de la floraison
        de près de 2000 cerisiers.`,
    image: "assets/Lieu 1.jpeg",
    title: `Jardin impérial de Shinjuku`,
    id: 1,
  },

  {
    corpus: `Le Sensō-ji (金龍山浅草寺, Kinryū-zan Sensō-ji?) est un temple bouddhiste
        situé à Tokyo, dans le quartier d'Asakusa (arrondissement de Taitō). C'est
        le plus vieux temple de la capitale japonaise. Il est dédié à la déesse
        bodhisattva Kannon. Anciennement associé à la secte Tendai, il est devenu
        indépendant après la Seconde Guerre mondiale.`,
    image: "assets/Photo senso ji.jpg",
    title: `Temple de Senso-ji`,
    id: 2,
  },
  {
    corpus: ` La Tokyo Skytree est une tour de radiodiffusion du Japon, située dans
        l'arrondissement Sumida de Tokyo. Haute de 634 mètres, elle devient, le
        jour de son inauguration en 2012, la deuxième plus haute structure
        autoportante du monde. Initialement prévue pour mesurer 610 mètres, la
        Tokyo Skytree culmine finalement à 634 mètres4, soit près du double de la
        Tour de Tokyo`,
    image: "assets/Photo la tour Skytree.jpg",
    title: `Tokyo Skytree`,
    id: 3,
  },
  {
    corpus: `Hotel Sunroute Plaza Shinjuku Hôtel à Tokyo (Arrondissement de Shibuya)
        Situé dans le centre de Shinjuku, à seulement 4 minutes à pied de la gare
        de Shinsen-Shinjuku et de la gare JR Shinjuku, l'Hotel Sunroute Plaza
        propose des chambres dotées d'une télévision par satellite et d'une
        connexion Wi-Fi gratuite. L'établissement comporte des distributeurs
        automatiques de boissons et une laverie sur place. Un service de change
        est également assuré.
        Le parc Shinjuku Gyoen, le quartier de Kabukichō, le parc Yoyogi et le
        célèbre grand magasin Isetan sont tous accessibles en moins de 15 minutes
        à pied.
        Le Trattoria Villazza sert un petit-déjeuner buffet occidental ainsi
        qu'une cuisine italienne pour le déjeuner et le dîner. Vous aurez
        également la possibilité de prendre un verre ou un repas léger dans
        l'élégant bar Ku Kon.`,
    image: "assets/Photo hotel 1.jpg",
    title: `Hotel Sunroute Plaza Shinjuku`,
    id: 4,
  },
  {
    corpus: `The Royal Park Hotel Tokyo Haneda Hôtel à Tokyo (Arrondissement d'Ōta)
        Avec son hall situé à côté de l'aéroport Haneda, The Royal Park Hotel
        Tokyo Haneda est accessible depuis le terminal international de
        l'aéroport.
        Il propose une réception ouverte 24h/24, une connexion Wi-Fi gratuite, un
        bar et un centre d'affaires, ainsi que des services de change et de
        nettoyage à sec. Sur place, le restaurant Tailwind vous servira le
        petit-déjeuner, le déjeuner et le dîner. Le Royal Park Hotel The Haneda se
        trouve à 11 minutes de la gare de Shinagawa par le train Airport Rapid
        Limited Express et à 13 minutes du quartier d'Hamamatsuchō par le Tokyo
        Monorail Haneda Express. Pour vous rendre à Shibuya, vous pourrez prendre
        la ligne Keikyū jusqu'à Shinagawa, puis emprunter la ligne JR.`,
    image: "assets/Photo hotel 2.jpeg",
    title: `The Royal Park Hotel Tokyo Haneda`,
    id: 5,
  },
  {
    corpus: `The Tokyo Station Hotel Hôtel à Tokyo (Arrondissement de Chiyoda, Tokyo)
        Rouvert en 2012 après d’importants travaux de rénovation, le Tokyo Station
        Hotel est classé « bien culturel d’importance ». Il propose de belles
        chambres au style européen classique. Il comprend également un restaurant
        français et des bars élégants, ainsi qu’une connexion Wi-Fi gratuite dans
        l’ensemble ses locaux. L’entrée est située juste à côté de la sortie sud
        Marunouchi de la gare de Tokyo.
        Vous rejoindrez le quartier de Ginza et le forum international de Tokyo en
        seulement 10 minutes à pied. Le palais impérial est quant à lui accessible
        en 20 minutes de marche. Les quartiers d’Akihabara et de Tsukiji se
        trouvent à environ 10 minutes de route. L’aéroport international de Tokyo
        Haneda est accessible en 30 minutes en monorail et l’aéroport
        international de Narita en 1 heure en train express.`,
    image: "assets/Photo hotel 3.jpeg",
    title: `The Tokyo Station Hotel`,
    id: 6,
  },
  {
    corpus: `Restaurant de Sushi
        Adresse : 4 Chome-11-9 Tsukiji, Chuo City, Tokyo 104-0045, Japon<br/><br/>
        <a href="http://www.kiyomura.co.jp/menu/detail/1/?category=1"
        target="_blank"> Menu</a><br/><br/>
        Notre avis :<br/>
        Excellent rapport qualité-prix<br/>
        Mention spéciale pour les sushis au thon +++<br/>
        Meilleurs sushis que j’ai mangé jusqu’à présent.`,
    image: "assets/Photo Restaurant 1.jpg",
    title: `Restaurant Sushizanmai Main Branch`,
    id: 7,
  },
  {
    corpus: `Restaurant de Sukiyaki et Shabu-Shabu<br/>
        Adresse : Japon, 〒150-0042 Tokyo, Shibuya City, Udagawacho, 20-15, Humax
        Pavilion, 8F<br/><br/>
        <a href="https://nabe-zo.com/blog/wp-content/uploads/2016/02/9f76b3ce9c903abc2320cacc120572d7-2.pdf"
        target="_blank"> Menu</a><br/><br/>
        Notre avis :<br/>
        Endroit raffiné et sympathique pour goûter du shabu shabu à volonté
        (viande aussi). Bien indiqué depuis l'extérieur. Le personnel parle
        anglais.`,
    image: "assets/Photo Restaurant 2.jpg",
    title: `Restaurant de Sukiyaki et Shabu-Shabu`,
    id: 8,
  },
  {
    corpus: `Restaurant traditionnel japonais<br/>
    Adresse : Japon, 〒150-0001 Tokyo, Shibuya City, Jingumae, 3 Chome-23-2
    地下１階 エヌエスビル<br/><br/>
    <a href="https://www.gyukatsu-motomura.com/menu"target="_blank">Menu</a><br/><br/>
    Notre avis :<br/>
    Fantastique. Délicieux. Incroyable. Si vous êtes n'importe où près de cet
    endroit, vous DEVEZ l'essayer! Super sympa, nourriture incroyable, bonne
    ambiance.`,
    image: "assets/Photo Restaurant 3.jpg",
    title: `Restaurant Gyukatsu Motomura Harajuku`,
    id: 9,
  },
];
