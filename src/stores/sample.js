import { ref } from 'vue'

const author = {
  address: 'Manchester, United Kingdom',
  description:
    'I create ideas and write for games and comics. I get lost in my imagination and use it to make worlds. My learning disabilities make it challenging... ',
  followers: '232',
  image: 'https://picsum.photos/400',
  likes: '4.5k',
  name: 'Paul C.A. Graham',
  readers: '10.5k',
  website: 'https://autorswebsitwebsit/'
}

const chapter = {
  chapterNumber: 'Chapter 0',
  comments: '234',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labnulla pariatur. Excepteur sint occaecat.',
  pages: '239pages',
  progress: 50,
  published: 'July 23, 2023',
  subtitle: 'Title goes here',
  image: 'https://picsum.photos/20',
  title: 'Chapter Title'
}

const demographic = [
  { name: 'Male', value: 300, color: '#FFDA56' },
  { name: 'Female', value: 100, color: '#4BB7F4' },
  { name: 'Other', value: 50, color: '#AE6FFF' }
]

const filterOptions = ref([
  { data: [], label: 'Genre', type: 'checkbox' },
  { data: [], label: 'Completion', type: 'radio' },
  { data: [], label: 'Content Rating', type: 'radio' },
  { data: [], label: 'Audio Availability', type: 'checkbox' }
])

const genresFromApi = [
  'Action',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Slice for Life',
  'Sports'
]

const pages = [
  {
    title: 'Page 01',
    image: 'https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-IfhopNUO9l-full.jpg'
  },
  {
    title: 'Page 02',
    image: 'https://duskwave-prod-bucket.s3.amazonaws.com/public/images/page-qzIpix6SeF-full.jpg'
  }
]

const relatedGenres = ['Sci-Fi', 'Scientist', 'Sci-Fi Thrillers', 'Science']

const setupItems = [
  { active: true, title: 'Set up you profile' },
  { active: false, title: 'Create a Title' },
  { active: false, title: 'Upload Page and Audio' },
  { active: false, title: 'Save as a Draft' },
  { active: false, title: 'Invite a Member' }
]

const summary = {
  totalViewers: '73.2k',
  totalSubscribers: 0
}

const title = {
  audio: 'https://duskwave-prod-bucket.s3.amazonaws.com/public/audios/audio-bm-SIq7PNBA0H.mp3',
  author: 'Paul Graham',
  books: 5,
  brandName: 'Duskwave Arts',
  chapters: 20,
  completion: 'Ongoing',
  contentRating: 'Everyone',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  image: 'https://picsum.photos/20',
  genres: ['Action', 'Fantacy'],
  likes: '10k',
  pages: 1100,
  published: '26 January, 2023',
  rating: '4.5',
  title: 'The Criminal King',
  url: '/',
  views: '105k'
}

const myTitles = [title, title, title]

const topComics = [
  { type: 'Title', name: 'The Glove' },
  { type: 'Chapter', name: 'Chapter Name' },
  { type: 'Issue', name: 'Revolt' },
  { type: 'Book', name: 'Book Name' }
]

export {
  author,
  chapter,
  demographic,
  filterOptions,
  genresFromApi,
  myTitles,
  pages,
  relatedGenres,
  setupItems,
  summary,
  title,
  topComics
}
