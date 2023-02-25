export interface HomePageData{
title?: String;
description?: String;
featureList?: Features[]
}

export interface Features {
    "id": String,
    "icon": any,
    "label": String,
    "description": String
}

export interface HomeFeatures {
    "key_features"? : HomeKeyFeatures []
    "key_left_features"?: HomeKeyFeatures []
}

export interface HomeKeyFeatures { "icon": any, "title": String, "sub_title": String }