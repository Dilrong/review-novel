const sendSlackMessage = async (
  channel: string,
  username: string,
  iconEmoji: string,
  text: string,
) => {
  const body = {
    channel,
    username,
    icon_emoji: iconEmoji,
    text,
  }

  await fetch(process.env.NEXT_PUBLIC_SLACK_HOOKS!, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(body),
  })
}

export default sendSlackMessage
