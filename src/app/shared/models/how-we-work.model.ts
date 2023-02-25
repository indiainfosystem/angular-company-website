export interface HowWeWork {
    "title"?: String;
    "description"?: String;
    "data_list"?: HWDataList[] 
}

export interface HWDataList {
    "id"?: Number;
    "title"?: String;
    "description": String;
    "img": any
}