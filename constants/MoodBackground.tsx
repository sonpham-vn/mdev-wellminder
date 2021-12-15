function MoodBackground (emotion:any) {
    const bgUrlList = {
        "normal":require("../assets/normal_bg.jpg"),
        "gloomy":require("../assets/gloomy_bg.jpg"),
        "angry":require("../assets/angry_bg.jpg"),
        "delight":require("../assets/delight_bg.jpg"),
        "fine":require("../assets/fine_bg.jpg")
    }
    let bgUrl =require("../assets/normal_bg.jpg");
    switch (emotion) {
        case "normal":
            bgUrl = bgUrlList.normal;
         ;
          break;
  
        case "delight":
            bgUrl = bgUrlList.delight;
          break;
  
        case "gloomy":
            bgUrl = bgUrlList.gloomy;
          break;
  
        case "fine":
            bgUrl = bgUrlList.fine;
          break;
        case "angry":
            bgUrl = bgUrlList.angry;
          break;
      }
    return bgUrl
}

export default MoodBackground;
