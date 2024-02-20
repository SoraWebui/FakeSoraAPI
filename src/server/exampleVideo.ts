import {allExampleVideoList} from "~/data/openaiExampleVideo";


export const getExampleVideo = async (prompt:string) => {

  // 找出关键词数量最多的那个视频
  const words = prompt.split(" ");
  const result = {
    revised_prompt: '',
    video_url: ''
  }
  let matchCount = 0;
  for (let i = 0; i < allExampleVideoList.length; i++) {
    const currentVideo = allExampleVideoList[i];
    const currentPrompt = currentVideo.prompt.split(" ");

    // 当前匹配到的词数量
    let currentMatchCount = 0;
    for (let j = 0; j < currentPrompt.length; j++) {
      for (let k = 0; k < words.length; k++) {
        if (currentPrompt[j] == words[k]) {
          currentMatchCount += 1;
        }
      }
    }
    if (currentMatchCount > matchCount) {
      // console.log('currentMatchCount-=-=-=-=-', currentMatchCount);
      matchCount = currentMatchCount;
      result.revised_prompt = currentVideo.prompt;
      result.video_url = currentVideo.videoUrl;
    }
  }
  return result;
}
