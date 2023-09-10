import { ImageSourcePropType } from "react-native";

interface User {
  name: string;
  profile: ImageSourcePropType;
}

export const user: User = {
  name: "Tugane 👋",
  profile: require("../assets/images/user/avatar.jpeg"),
};

export interface Category {
  id: number;
  name: string;
}

export const CategoryList: Category[] = [
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

export interface News {
  id: number;
  title: string;
  length: string;
  author: string;
  image: ImageSourcePropType;
  categoryId: number;
  time: string;
}

export const NewsList: News[] = [
  {
    id: 1,
    title:
      "Cillum esse elit ex ullamco voluptate duis et ea aliqua tempor laboris qui ipsum.",
    length: "3 min read",
    author: "Proident ullamco",
    image: require("../assets/images/news/Sports/479f40cd5aa6bf68fdbdfd153b2b2591 Large.jpeg"),
    categoryId: 2,
    time: "3h ago",
  },
  {
    id: 2,
    title:
      "Anim pariatur veniam minim consectetur pariatur cupidatat do sunt Lorem.",
    length: "7 min read",
    author: "John Doe",
    image: require("../assets/images/news/Sports/81a39-16471564923983-1920 Large.jpg"),
    categoryId: 2,
    time: "2h ago",
  },
  {
    id: 3,
    title: "Occaecat quis enim aliquip laborum.",
    length: "5 min read",
    author: "Consectetur Lorem",
    image: require("../assets/images/news/Sports/c366d05c-3661-450f-b6c7-03aac9614442 Large.jpeg"),
    categoryId: 2,
    time: "2h ago",
  },
  {
    id: 4,
    title:
      "Proident et veniam cillum enim duis deserunt cupidatat non quis aute sint qui.",
    length: "6 min read",
    author: "John Doe",
    image: require("../assets/images/news/Sports/logan-weaver-lgnwvr-M5YKACTmdpo-unsplash Large.jpeg"),
    categoryId: 2,
    time: "4h ago",
  },
  {
    id: 5,
    title:
      "Et aliquip in mollit dolor aute laboris officia amet amet labore exercitation.",
    length: "9 min read",
    author: "John Doe",
    image: require("../assets/images/news/Sports/logan-weaver-lgnwvr-zPHJ_7seOfA-unsplash Large.jpeg"),
    categoryId: 2,
    time: "1h ago",
  },
  {
    id: 4,
    title:
      "Laborum Lorem veniam excepteur aliqua dolore et sunt consectetur ipsum aliqua anim.",
    length: "1 min read",
    author: "John Doe",
    image: require("../assets/images/news/Sports/Olsen_MXGP_16-Trentino_2020_JPA__P5I1257 Large.jpeg"),
    categoryId: 2,
    time: "5h ago",
  },
  {
    id: 5,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Sports/SteelersCamp_2022_KennyPickett8_2 Large.jpeg"),
    categoryId: 2,
    time: "2h ago",
  },
  {
    id: 6,
    title:
      "Cillum esse elit ex ullamco voluptate duis et ea aliqua tempor laboris qui ipsum.",
    length: "3 min read",
    author: "Proident ullamco",
    image: require("../assets/images/news/Fashion/ashim-d-silva-ZmgJiztRHXE-unsplash Large.jpeg"),
    categoryId: 3,
    time: "7h ago",
  },
  {
    id: 7,
    title:
      "Anim pariatur veniam minim consectetur pariatur cupidatat do sunt Lorem.",
    length: "7 min read",
    author: "John Doe",
    image: require("../assets/images/news/Fashion/freestocks-_3Q3tsJ01nc-unsplash Large.jpeg"),
    categoryId: 3,
    time: "2h ago",
  },
  {
    id: 8,
    title: "Occaecat quis enim aliquip laborum.",
    length: "5 min read",
    author: "Consectetur Lorem",
    image: require("../assets/images/news/Fashion/priscilla-du-preez-dlxLGIy-2VU-unsplash Large.jpeg"),
    categoryId: 3,
    time: "2h ago",
  },
  {
    id: 9,
    title:
      "Proident et veniam cillum enim duis deserunt cupidatat non quis aute sint qui.",
    length: "6 min read",
    author: "John Doe",
    image: require("../assets/images/news/Fashion/reza-delkhosh-iRAOJYtPHZE-unsplash Large.jpeg"),
    categoryId: 3,
    time: "9h ago",
  },
  {
    id: 10,
    title:
      "Et aliquip in mollit dolor aute laboris officia amet amet labore exercitation.",
    length: "9 min read",
    author: "John Doe",
    image: require("../assets/images/news/Politcs/aditya-joshi-FOhw4A1CR1Q-unsplash Large.jpeg"),
    categoryId: 4,
    time: "4h ago",
  },
  {
    id: 11,
    title:
      "Laborum Lorem veniam excepteur aliqua dolore et sunt consectetur ipsum aliqua anim.",
    length: "1 min read",
    author: "John Doe",
    image: require("../assets/images/news/Politcs/colin-lloyd-fThPxIQ6by0-unsplash Large.jpeg"),
    categoryId: 4,
    time: "1h ago",
  },
  {
    id: 12,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Politcs/joshua-sukoff-5DDYHjk_KMU-unsplash Large.jpeg"),
    categoryId: 4,
    time: "2h ago",
  },
  {
    id: 13,
    title:
      "Laborum Lorem veniam excepteur aliqua dolore et sunt consectetur ipsum aliqua anim.",
    length: "1 min read",
    author: "John Doe",
    image: require("../assets/images/news/Politcs/katie-moum-o0kbc907i20-unsplash Large.jpeg"),
    categoryId: 4,
    time: "9h ago",
  },
  {
    id: 15,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Politcs/ronda-darby-HbMLSB-uhQY-unsplash Large.jpeg"),
    categoryId: 4,
    time: "4h ago",
  },
  {
    id: 16,
    title:
      "Laborum Lorem veniam excepteur aliqua dolore et sunt consectetur ipsum aliqua anim.",
    length: "1 min read",
    author: "John Doe",
    image: require("../assets/images/news/Finance/akson-1K8pIbIrhkQ-unsplash Large.jpeg"),
    categoryId: 5,
    time: "5h ago",
  },
  {
    id: 17,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Finance/alexander-mils-lCPhGxs7pww-unsplash Large.jpeg"),
    categoryId: 5,
    time: "2h ago",
  },
  {
    id: 18,
    title:
      "Laborum Lorem veniam excepteur aliqua dolore et sunt consectetur ipsum aliqua anim.",
    length: "1 min read",
    author: "John Doe",
    image: require("../assets/images/news/Finance/didier-weemaels-ZKVBM2_Dp84-unsplash Large.jpeg"),
    categoryId: 5,
    time: "2h ago",
  },
  {
    id: 19,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Finance/online-marketing-hIgeoQjS_iE-unsplash Large.jpeg"),
    categoryId: 5,
    time: "2h ago",
  },
  {
    id: 20,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Finance/wance-paleri-NnRIrQ1USyw-unsplash Large.jpeg"),
    categoryId: 5,
    time: "2h ago",
  },
  {
    id: 21,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Health/dan-gold-4_jhDO54BYg-unsplash Large.jpeg"),
    categoryId: 6,
    time: "7h ago",
  },
  {
    id: 22,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Health/luke-chesser-rCOWMC8qf8A-unsplash Large.jpeg"),
    categoryId: 6,
    time: "2h ago",
  },
  {
    id: 23,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Health/tim-foster-3wAPJB57w6s-unsplash Large.jpeg"),
    categoryId: 6,
    time: "2h ago",
  },
  {
    id: 24,
    title:
      "Nisi officia qui duis qui magna cillum exercitation minim nostrud quis occaecat cupidatat proident aliquip.",
    length: "2 min read",
    author: "Voluptate elit",
    image: require("../assets/images/news/Health/vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash Large.jpeg"),
    categoryId: 6,
    time: "2h ago",
  },
];
