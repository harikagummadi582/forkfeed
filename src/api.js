// Integration seam. Replace the bodies with real Oriane / GMI Cloud calls.
// Keys come from .env (VITE_ORIANE_API_KEY, VITE_GMI_API_KEY). Never hardcode them.
import * as mock from './data.js'

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

// TODO(Oriane): search videos by topic across Instagram + TikTok, return video analysis.
export async function fetchTopicVideos(topicId) {
  await wait(400)
  return { angles: mock.angles, breakdown: mock.breakdown, comments: mock.commentGroups }
}

// TODO(GMI): LLM call that takes {angles, fanQuestions, creator voice} and returns a fork kit.
export async function generateKit(topicId, creator) {
  await wait(1800)
  return mock.kit
}
