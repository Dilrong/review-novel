export default function speakText(
  text: string,
  lang: string,
): Promise<unknown> {
  let selectLang = ''
  switch (lang) {
    case 'ko':
      selectLang = 'ko-KR'
      break
    case 'ja':
      selectLang = 'ja-JP'
      break
    default:
      selectLang = 'en-US'
      break
  }

  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.onend = resolve
    utterance.lang = selectLang
    speechSynthesis.speak(utterance)
  })
}
