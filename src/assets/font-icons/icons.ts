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
  | 'check-circle'
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
  | 'keyboard-arrow-left'
  | 'keyboard-arrow-right'
  | 'keyboard-arrow-up'
  | 'link'
  | 'location-on'
  | 'mail'
  | 'menu-book'
  | 'menu'
  | 'monetization'
  | 'more-vert'
  | 'music-note'
  | 'music-off'
  | 'notifications'
  | 'person-add-alt'
  | 'pin-drop'
  | 'play-circle-filled'
  | 'preview'
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
  | 'CheckCircle'
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
  | 'KeyboardArrowLeft'
  | 'KeyboardArrowRight'
  | 'KeyboardArrowUp'
  | 'Link'
  | 'LocationOn'
  | 'Mail'
  | 'MenuBook'
  | 'Menu'
  | 'Monetization'
  | 'MoreVert'
  | 'MusicNote'
  | 'MusicOff'
  | 'Notifications'
  | 'PersonAddAlt'
  | 'PinDrop'
  | 'PlayCircleFilled'
  | 'Preview'
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
  CheckCircle = 'check-circle',
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
  KeyboardArrowLeft = 'keyboard-arrow-left',
  KeyboardArrowRight = 'keyboard-arrow-right',
  KeyboardArrowUp = 'keyboard-arrow-up',
  Link = 'link',
  LocationOn = 'location-on',
  Mail = 'mail',
  MenuBook = 'menu-book',
  Menu = 'menu',
  Monetization = 'monetization',
  MoreVert = 'more-vert',
  MusicNote = 'music-note',
  MusicOff = 'music-off',
  Notifications = 'notifications',
  PersonAddAlt = 'person-add-alt',
  PinDrop = 'pin-drop',
  PlayCircleFilled = 'play-circle-filled',
  Preview = 'preview',
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
  [Icons.CheckCircle]: '61711',
  [Icons.ChevronDoubleLeft]: '61712',
  [Icons.ChevronDoubleRight]: '61713',
  [Icons.Close]: '61714',
  [Icons.Dashboard]: '61715',
  [Icons.Delete]: '61716',
  [Icons.Description]: '61717',
  [Icons.Edit]: '61718',
  [Icons.Ellipse_33]: '61719',
  [Icons.FavoriteBorder]: '61720',
  [Icons.Favorite]: '61721',
  [Icons.Groups]: '61722',
  [Icons.InsertComment]: '61723',
  [Icons.KeyboardArrowDown]: '61724',
  [Icons.KeyboardArrowLeft]: '61725',
  [Icons.KeyboardArrowRight]: '61726',
  [Icons.KeyboardArrowUp]: '61727',
  [Icons.Link]: '61728',
  [Icons.LocationOn]: '61729',
  [Icons.Mail]: '61730',
  [Icons.MenuBook]: '61731',
  [Icons.Menu]: '61732',
  [Icons.Monetization]: '61733',
  [Icons.MoreVert]: '61734',
  [Icons.MusicNote]: '61735',
  [Icons.MusicOff]: '61736',
  [Icons.Notifications]: '61737',
  [Icons.PersonAddAlt]: '61738',
  [Icons.PinDrop]: '61739',
  [Icons.PlayCircleFilled]: '61740',
  [Icons.Preview]: '61741',
  [Icons.RadioButtonChecked]: '61742',
  [Icons.RadioButtonUnchecked]: '61743',
  [Icons.RemoveCircleOutline]: '61744',
  [Icons.RemoveRedEye]: '61745',
  [Icons.SearchPlus]: '61746',
  [Icons.Search]: '61747',
  [Icons.Settings]: '61748',
  [Icons.Sort]: '61749',
  [Icons.Star]: '61750',
  [Icons.Textsms]: '61751',
  [Icons.ThumbUp]: '61752',
  [Icons.Tune]: '61753',
  [Icons.VisibilityOff]: '61754',
  [Icons.Visibility]: '61755',
  [Icons.VolumeUp]: '61756'
}
