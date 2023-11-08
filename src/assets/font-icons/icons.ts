export type IconsId =
  | "arrow-back-ios"
  | "arrow-forward-ios"
  | "auto-stories"
  | "bookmark-border"
  | "bookmark"
  | "description"
  | "ellipse-33"
  | "favorite-border"
  | "favorite"
  | "menu-book"
  | "star"
  | "volume-up";

export type IconsKey =
  | "ArrowBackIos"
  | "ArrowForwardIos"
  | "AutoStories"
  | "BookmarkBorder"
  | "Bookmark"
  | "Description"
  | "Ellipse_33"
  | "FavoriteBorder"
  | "Favorite"
  | "MenuBook"
  | "Star"
  | "VolumeUp";

export enum Icons {
  ArrowBackIos = "arrow-back-ios",
  ArrowForwardIos = "arrow-forward-ios",
  AutoStories = "auto-stories",
  BookmarkBorder = "bookmark-border",
  Bookmark = "bookmark",
  Description = "description",
  Ellipse_33 = "ellipse-33",
  FavoriteBorder = "favorite-border",
  Favorite = "favorite",
  MenuBook = "menu-book",
  Star = "star",
  VolumeUp = "volume-up",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowBackIos]: "61697",
  [Icons.ArrowForwardIos]: "61698",
  [Icons.AutoStories]: "61699",
  [Icons.BookmarkBorder]: "61700",
  [Icons.Bookmark]: "61701",
  [Icons.Description]: "61702",
  [Icons.Ellipse_33]: "61703",
  [Icons.FavoriteBorder]: "61704",
  [Icons.Favorite]: "61705",
  [Icons.MenuBook]: "61706",
  [Icons.Star]: "61707",
  [Icons.VolumeUp]: "61708",
};
