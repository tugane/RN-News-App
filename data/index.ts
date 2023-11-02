import { ImageSourcePropType } from "react-native";

type User = {
  name: string;
  profile: ImageSourcePropType;
};

export const user: User = {
  name: "Tugane",
  profile: require("../assets/images/user/avatar.jpeg"),
};

export type Category = {
  id: number;
  name: string;
};

export type Channel = {
  id: number;
  name: string;
  image: ImageSourcePropType;
};

export const Channels: Channel[] = [
  {
    id: 1,
    name: "new york times",
    image: require("../assets/images/channels/newyorktimes.png"),
  },
  {
    id: 2,
    name: "abc",
    image: require("../assets/images/channels/abc.png"),
  },
  {
    id: 3,
    name: "bbc",
    image: require("../assets/images/channels/bbc.png"),
  },
  {
    id: 4,
    name: "cnn",
    image: require("../assets/images/channels/cnn.png"),
  },
  {
    id: 5,
    name: "espn",
    image: require("../assets/images/channels/espn.png"),
  },
  {
    id: 6,
    name: "nbc",
    image: require("../assets/images/channels/nbc.png"),
  },
];

export const Categories: Category[] = [
  {
    id: 2,
    name: "Sports",
  },
  {
    id: 3,
    name: "Fashion",
  },
  {
    id: 4,
    name: "Politics",
  },
  {
    id: 5,
    name: "Finance",
  },
  {
    id: 6,
    name: "Health",
  },
];

export type News = {
  id: number;
  title: string;
  length: string;
  author: string;
  image: ImageSourcePropType;
  categoryId: number;
  time: string;
  body: string;
};

const newsBody = `## Championship Race

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce vel urna nec lorem feugiat congue. Aenean quis nisl vel turpis vestibulum convallis. Proin sit amet tincidunt elit. In auctor orci vel felis posuere, eu gravida purus tristique.

## Championship Showdown

The championship race held at the prestigious Sports Arena yesterday was a sight to behold. Fans and enthusiasts from around the world gathered to witness a nail-biting competition between the top athletes in the sport. The tension in the arena was palpable as the race began.

The front-runners were neck and neck throughout the race, each trying to outpace the other. Spectators cheered on their favorite athletes as they pushed their limits. The final lap brought unexpected twists, keeping everyone on the edge of their seats.

## Last-Minute Heroics

As the race neared its conclusion, it was clear that victory could go to any of the leading competitors. In a dramatic turn of events, Lorem Ipsum, the underdog in the race, made a bold move in the last 100 meters. With a surge of energy, he overtook the frontrunner and sprinted towards the finish line.

In a heart-stopping photo finish, Lorem Ipsum crossed the line just inches ahead of his rival, claiming the championship title. The crowd erupted in cheers and applause as the unexpected victory unfolded before their eyes.

## Future Prospects

Lorem Ipsum's incredible victory in the championship has catapulted him into the spotlight. It's a moment that will be remembered for years to come in the world of sports. The championship win marks the beginning of a promising career for this rising star, and fans are eager to see what the future holds.

As the event concluded, athletes and supporters came together to celebrate the spirit of sportsmanship and competition that defines the sport. The championship race will be etched in the annals of sports history as one of the most thrilling moments in recent memory.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce vel urna nec lorem feugiat congue. Aenean quis nisl vel turpis vestibulum convallis. Proin sit amet tincidunt elit. In auctor orci vel felis posuere, eu gravida purus tristique.

*Lorem ipsum* **dolor sit amet**, consectetur adipiscing elit. Nulla facilisi. Fusce vel urna nec lorem feugiat congue. Aenean quis nisl vel turpis vestibulum convallis. Proin sit amet tincidunt elit. In auctor orci vel felis posuere, eu gravida purus tristique.

> "I couldn't have done it without the support of my coaches and fans," said Lorem Ipsum, the newly crowned champion.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce vel urna nec lorem feugiat congue. Aenean quis nisl vel turpis vestibulum convallis. Proin sit amet tincidunt elit. In auctor orci vel felis posuere, eu gravida purus tristique.

---

*Disclaimer: This news article is fictional, and any resemblance to real events or persons is purely coincidental.*
`;

export const NewsList: News[] = [
  {
    id: 1,
    title:
      "Cillum esse elit ex ullamco voluptate duis et ea aliqua tempor laboris qui ipsum.",
    length: "3 min read",
    author: "Proident ullamco",
    image: require("../assets/images/news/Sports/479f40cd5aa6bf68fdbdfd153b2b2591.jpeg"),
    categoryId: 2,
    time: "3h ago",
    body: newsBody,
  },
  {
    id: 2,
    title:
      "Anim pariatur veniam minim consectetur pariatur cupidatat do sunt Lorem.",
    length: "7 min read",
    author: "John Doe",
    image: require("../assets/images/news/Sports/81a39-16471564923983-1920.jpg"),
    categoryId: 2,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 3,
    title: "Occaecat quis enim aliquip laborum.",
    length: "5 min read",
    author: "Consectetur Lorem",
    image: require("../assets/images/news/Sports/c366d05c-3661-450f-b6c7-03aac9614442.jpeg"),
    categoryId: 2,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 4,
    title:
      "Proident et veniam cillum enim duis deserunt cupidatat non quis aute sint qui.",
    length: "6 min read",
    author: "John Doe",
    image: require("../assets/images/news/Sports/logan-weaver-lgnwvr-M5YKACTmdpo-unsplash.jpeg"),
    categoryId: 2,
    time: "4h ago",
    body: newsBody,
  },
  {
    id: 14,
    title:
      "Et aliquip in mollit dolor aute laboris officia amet amet labore exercitation.",
    length: "9 min read",
    author: "John Doe",
    image: require("../assets/images/news/Sports/logan-weaver-lgnwvr-zPHJ_7seOfA-unsplash.jpeg"),
    categoryId: 2,
    time: "1h ago",
    body: newsBody,
  },
  {
    id: 26,
    title:
      "Laborum Lorem veniam excepteur aliqua dolore et sunt consectetur ipsum aliqua anim.",
    length: "1 min read",
    author: "John Doe",
    image: require("../assets/images/news/Sports/Olsen_MXGP_16-Trentino_2020_JPA__P5I1257.jpeg"),
    categoryId: 2,
    time: "5h ago",
    body: newsBody,
  },
  {
    id: 5,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Sports/SteelersCamp_2022_KennyPickett8_2.jpeg"),
    categoryId: 2,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 6,
    title:
      "Cillum esse elit ex ullamco voluptate duis et ea aliqua tempor laboris qui ipsum.",
    length: "3 min read",
    author: "Proident ullamco",
    image: require("../assets/images/news/Fashion/ashim-d-silva-ZmgJiztRHXE-unsplash.jpeg"),
    categoryId: 3,
    time: "7h ago",
    body: newsBody,
  },
  {
    id: 7,
    title:
      "Anim pariatur veniam minim consectetur pariatur cupidatat do sunt Lorem.",
    length: "7 min read",
    author: "John Doe",
    image: require("../assets/images/news/Fashion/freestocks-_3Q3tsJ01nc-unsplash.jpeg"),
    categoryId: 3,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 8,
    title: "Occaecat quis enim aliquip laborum.",
    length: "5 min read",
    author: "Consectetur Lorem",
    image: require("../assets/images/news/Fashion/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpeg"),
    categoryId: 3,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 9,
    title:
      "Proident et veniam cillum enim duis deserunt cupidatat non quis aute sint qui.",
    length: "6 min read",
    author: "John Doe",
    image: require("../assets/images/news/Fashion/reza-delkhosh-iRAOJYtPHZE-unsplash.jpeg"),
    categoryId: 3,
    time: "9h ago",
    body: newsBody,
  },
  {
    id: 10,
    title:
      "Et aliquip in mollit dolor aute laboris officia amet amet labore exercitation.",
    length: "9 min read",
    author: "John Doe",
    image: require("../assets/images/news/Politcs/aditya-joshi-FOhw4A1CR1Q-unsplash.jpeg"),
    categoryId: 4,
    time: "4h ago",
    body: newsBody,
  },
  {
    id: 11,
    title:
      "Laborum Lorem veniam excepteur aliqua dolore et sunt consectetur ipsum aliqua anim.",
    length: "1 min read",
    author: "John Doe",
    image: require("../assets/images/news/Politcs/colin-lloyd-fThPxIQ6by0-unsplash.jpeg"),
    categoryId: 4,
    time: "1h ago",
    body: newsBody,
  },
  {
    id: 12,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Politcs/joshua-sukoff-5DDYHjk_KMU-unsplash.jpeg"),
    categoryId: 4,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 13,
    title:
      "Laborum Lorem veniam excepteur aliqua dolore et sunt consectetur ipsum aliqua anim.",
    length: "1 min read",
    author: "John Doe",
    image: require("../assets/images/news/Politcs/katie-moum-o0kbc907i20-unsplash.jpeg"),
    categoryId: 4,
    time: "9h ago",
    body: newsBody,
  },
  {
    id: 15,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Politcs/ronda-darby-HbMLSB-uhQY-unsplash.jpeg"),
    categoryId: 4,
    time: "4h ago",
    body: newsBody,
  },
  {
    id: 16,
    title:
      "Laborum Lorem veniam excepteur aliqua dolore et sunt consectetur ipsum aliqua anim.",
    length: "1 min read",
    author: "John Doe",
    image: require("../assets/images/news/Finance/akson-1K8pIbIrhkQ-unsplash.jpeg"),
    categoryId: 5,
    time: "5h ago",
    body: newsBody,
  },
  {
    id: 17,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Finance/alexander-mils-lCPhGxs7pww-unsplash.jpeg"),
    categoryId: 5,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 18,
    title:
      "Laborum Lorem veniam excepteur aliqua dolore et sunt consectetur ipsum aliqua anim.",
    length: "1 min read",
    author: "John Doe",
    image: require("../assets/images/news/Finance/didier-weemaels-ZKVBM2_Dp84-unsplash.jpeg"),
    categoryId: 5,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 19,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Finance/online-marketing-hIgeoQjS_iE-unsplash.jpeg"),
    categoryId: 5,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 20,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Finance/wance-paleri-NnRIrQ1USyw-unsplash.jpeg"),
    categoryId: 5,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 21,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Health/dan-gold-4_jhDO54BYg-unsplash.jpeg"),
    categoryId: 6,
    time: "7h ago",
    body: newsBody,
  },
  {
    id: 22,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Health/luke-chesser-rCOWMC8qf8A-unsplash.jpeg"),
    categoryId: 6,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 23,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Health/tim-foster-3wAPJB57w6s-unsplash.jpeg"),
    categoryId: 6,
    time: "2h ago",
    body: newsBody,
  },
  {
    id: 24,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Health/vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash.jpeg"),
    categoryId: 6,
    time: "2h ago",
    body: newsBody,
  },
];
