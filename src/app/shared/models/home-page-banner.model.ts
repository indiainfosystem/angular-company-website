export interface HomePageBanner {
    title?: String;
    bgImage?: String;
    sub_title?: String;
    buttons?: Button[];
    logos?: Logo[]
}

export interface Button { "class": String, "label": String, "link": any }
export interface Logo { "alt": String, "url": String, "link": any }    