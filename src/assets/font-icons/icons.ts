export type IconsId =
  | 'all-inclusive'
  | 'analytics'
  | 'arrow-back-ios'
  | 'arrow-back'
  | 'arrow-forward-ios'
  | 'arrow-forward'
  | 'auto-stories'
  | 'block'
  | 'book'
  | 'bookmark-border'
  | 'bookmark'
  | 'calendar-today'
  | 'check-box-outline-blank'
  | 'check-box'
  | 'chevron-double-left'
  | 'chevron-double-right'
  | 'close'
  | 'dashboard'
  | 'delete'
  | 'description'
  | 'edit'
  | 'ellipse-33'
  | 'favorite-border'
  | 'favorite'
  | 'groups'
  | 'insert-comment'
  | 'keyboard-arrow-down'
  | 'keyboard-arrow-up'
  | 'mail'
  | 'menu-book'
  | 'menu'
  | 'monetization'
  | 'more-vert'
  | 'music-note'
  | 'music-off'
  | 'notifications'
  | 'pin-drop'
  | 'play-circle-filled'
  | 'radio-button-checked'
  | 'radio-button-unchecked'
  | 'remove-circle-outline'
  | 'remove-red-eye'
  | 'search-plus'
  | 'search'
  | 'settings'
  | 'sort'
  | 'star'
  | 'textsms'
  | 'thumb-up'
  | 'tune'
  | 'visibility-off'
  | 'visibility'
  | 'volume-up'

export type IconsKey =
  | 'AllInclusive'
  | 'Analytics'
  | 'ArrowBackIos'
  | 'ArrowBack'
  | 'ArrowForwardIos'
  | 'ArrowForward'
  | 'AutoStories'
  | 'Block'
  | 'Book'
  | 'BookmarkBorder'
  | 'Bookmark'
  | 'CalendarToday'
  | 'CheckBoxOutlineBlank'
  | 'CheckBox'
  | 'ChevronDoubleLeft'
  | 'ChevronDoubleRight'
  | 'Close'
  | 'Dashboard'
  | 'Delete'
  | 'Description'
  | 'Edit'
  | 'Ellipse_33'
  | 'FavoriteBorder'
  | 'Favorite'
  | 'Groups'
  | 'InsertComment'
  | 'KeyboardArrowDown'
  | 'KeyboardArrowUp'
  | 'Mail'
  | 'MenuBook'
  | 'Menu'
  | 'Monetization'
  | 'MoreVert'
  | 'MusicNote'
  | 'MusicOff'
  | 'Notifications'
  | 'PinDrop'
  | 'PlayCircleFilled'
  | 'RadioButtonChecked'
  | 'RadioButtonUnchecked'
  | 'RemoveCircleOutline'
  | 'RemoveRedEye'
  | 'SearchPlus'
  | 'Search'
  | 'Settings'
  | 'Sort'
  | 'Star'
  | 'Textsms'
  | 'ThumbUp'
  | 'Tune'
  | 'VisibilityOff'
  | 'Visibility'
  | 'VolumeUp'

export enum Icons {
  AllInclusive = 'all-inclusive',
  Analytics = 'analytics',
  ArrowBackIos = 'arrow-back-ios',
  ArrowBack = 'arrow-back',
  ArrowForwardIos = 'arrow-forward-ios',
  ArrowForward = 'arrow-forward',
  AutoStories = 'auto-stories',
  Block = 'block',
  Book = 'book',
  BookmarkBorder = 'bookmark-border',
  Bookmark = 'bookmark',
  CalendarToday = 'calendar-today',
  CheckBoxOutlineBlank = 'check-box-outline-blank',
  CheckBox = 'check-box',
  ChevronDoubleLeft = 'chevron-double-left',
  ChevronDoubleRight = 'chevron-double-right',
  Close = 'close',
  Dashboard = 'dashboard',
  Delete = 'delete',
  Description = 'description',
  Edit = 'edit',
  Ellipse_33 = 'ellipse-33',
  FavoriteBorder = 'favorite-border',
  Favorite = 'favorite',
  Groups = 'groups',
  InsertComment = 'insert-comment',
  KeyboardArrowDown = 'keyboard-arrow-down',
  KeyboardArrowUp = 'keyboard-arrow-up',
  Mail = 'mail',
  MenuBook = 'menu-book',
  Menu = 'menu',
  Monetization = 'monetization',
  MoreVert = 'more-vert',
  MusicNote = 'music-note',
  MusicOff = 'music-off',
  Notifications = 'notifications',
  PinDrop = 'pin-drop',
  PlayCircleFilled = 'play-circle-filled',
  RadioButtonChecked = 'radio-button-checked',
  RadioButtonUnchecked = 'radio-button-unchecked',
  RemoveCircleOutline = 'remove-circle-outline',
  RemoveRedEye = 'remove-red-eye',
  SearchPlus = 'search-plus',
  Search = 'search',
  Settings = 'settings',
  Sort = 'sort',
  Star = 'star',
  Textsms = 'textsms',
  ThumbUp = 'thumb-up',
  Tune = 'tune',
  VisibilityOff = 'visibility-off',
  Visibility = 'visibility',
  VolumeUp = 'volume-up'
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.AllInclusive]: '61697',
  [Icons.Analytics]: '61698',
  [Icons.ArrowBackIos]: '61699',
  [Icons.ArrowBack]: '61700',
  [Icons.ArrowForwardIos]: '61701',
  [Icons.ArrowForward]: '61702',
  [Icons.AutoStories]: '61703',
  [Icons.Block]: '61704',
  [Icons.Book]: '61705',
  [Icons.BookmarkBorder]: '61706',
  [Icons.Bookmark]: '61707',
  [Icons.CalendarToday]: '61708',
  [Icons.CheckBoxOutlineBlank]: '61709',
  [Icons.CheckBox]: '61710',
  [Icons.ChevronDoubleLeft]: '61711',
  [Icons.ChevronDoubleRight]: '61712',
  [Icons.Close]: '61713',
  [Icons.Dashboard]: '61714',
  [Icons.Delete]: '61715',
  [Icons.Description]: '61716',
  [Icons.Edit]: '61717',
  [Icons.Ellipse_33]: '61718',
  [Icons.FavoriteBorder]: '61719',
  [Icons.Favorite]: '61720',
  [Icons.Groups]: '61721',
  [Icons.InsertComment]: '61722',
  [Icons.KeyboardArrowDown]: '61723',
  [Icons.KeyboardArrowUp]: '61724',
  [Icons.Mail]: '61725',
  [Icons.MenuBook]: '61726',
  [Icons.Menu]: '61727',
  [Icons.Monetization]: '61728',
  [Icons.MoreVert]: '61729',
  [Icons.MusicNote]: '61730',
  [Icons.MusicOff]: '61731',
  [Icons.Notifications]: '61732',
  [Icons.PinDrop]: '61733',
  [Icons.PlayCircleFilled]: '61734',
  [Icons.RadioButtonChecked]: '61735',
  [Icons.RadioButtonUnchecked]: '61736',
  [Icons.RemoveCircleOutline]: '61737',
  [Icons.RemoveRedEye]: '61738',
  [Icons.SearchPlus]: '61739',
  [Icons.Search]: '61740',
  [Icons.Settings]: '61741',
  [Icons.Sort]: '61742',
  [Icons.Star]: '61743',
  [Icons.Textsms]: '61744',
  [Icons.ThumbUp]: '61745',
  [Icons.Tune]: '61746',
  [Icons.VisibilityOff]: '61747',
  [Icons.Visibility]: '61748',
  [Icons.VolumeUp]: '61749'
}
