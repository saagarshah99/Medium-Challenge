// generate random number to select from a set of pictures of Nicolas Cage
const getRandomImage = () => {
  const randomImageNumber = Math.floor(Math.random() * 4) + 1;

  return "/images/cage"+randomImageNumber+".jpg";
}

// array of objects containing data for multiple articles from "Medium"
const articles = [
  {
    title: "Public Speaking",
    author: "Ashley Peacock",
    description: "5 tips for becoming better at public speaking",
    link: "https://medium.com/@verbz101/whats-the-essence-of-me-listening-to-you-anyway-9265a7660e8d?source=topics_v2---------1-84--------------------4980cb39_a28d_43c7_8d9a_7049979c11f8-------19",
    thumbnail: getRandomImage(),
  },
  {
    title: "Generating Random Numbers is harder than you think",
    author: "Sunny Beatteay",
    description: "How computers make random decisions",
    link: "https://betterprogramming.pub/generating-random-numbers-is-a-lot-harder-than-you-think-b121c3e75d08",
    thumbnail: getRandomImage(),
  },
  {
    title: "Docker Desktop — should I pay?",
    author: "Andreas Heissenberger",
    description: "Anyone who needs arguments why it is worth to pay or stay and tipps about alternatives.",
    link: "https://andreasheissenberger.medium.com/docker-desktop-should-i-pay-8eaa1dadd2d3?source=topic_page---------0------------------1----------",
    thumbnail: getRandomImage(),
  },
  {
    title: "Notion Upgrades Arrive!",
    author: "Francesco D'Alessio",
    description: "Upgrading elements, smoother navigation & more…",
    link: "https://medium.com/keep-productive/notion-upgrades-arrive-1087c102e43d?source=topic_page---------1------------------1----------",
    thumbnail: getRandomImage(),
  },
  {
    title: "How To Parse Data Using Python and Selenium",
    author: "Mahbub Zaman",
    description: "Parse data from a website with pagination",
    link: "https://towardsdatascience.com/how-to-parse-data-using-python-and-selenium-907a95239ee0?source=topic_page---------2------------------1----------",
    thumbnail: getRandomImage(),
  },
  {
    title: "How to add git hooks for your python projects using the pre-commit framework",
    author: "Mathanraj Sharma",
    description: "As a developer, we need to ensure readability, writability, and reliability of the program we are writing.",
    link: "https://towardsdatascience.com/how-to-add-git-hooks-for-your-python-projects-using-the-pre-commit-framework-773acc3b28a7?source=topic_page---------4------------------1----------",
    thumbnail: getRandomImage(),
  },
];

export default articles;