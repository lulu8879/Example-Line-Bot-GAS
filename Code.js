const CHANNEL_ACCESS_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN"

const line = new Linebotlibgas.Line(CHANNEL_ACCESS_TOKEN)

/**
 * Triggered when do post method
 */
function doPost(e) {
  const events = JSON.parse(e.postData.contents).events
  events.forEach((event) => {
    let eventType = event.type
    switch(eventType){
      case "message":
        line.message.reply(
          event.replyToken,
          {
            type: "text",
            text: event.message.text
          }
        )
        break
    }
 })
}
