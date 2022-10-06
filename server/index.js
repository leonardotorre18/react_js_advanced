const express = require('express');
const app = express();
const cors = require('cors');
const webPush = require('web-push')

const port = 3001;

const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/eGbZVANhy2M:APA91bEUBhG9wxons8ityGtStSFtMdUZWbhPDiSBKHsGanuQNP7fInP_E_guKrZcsnmR4faw1LsKbofbsf9tIvHk89hPeauZjBoQW68JlC2X2WgkB1pesr23tl86CGsHmk8PCQDBCRqS',
  expirationTime: null,
  keys: {
    p256dh: 'BBGSMTWjDxQrcrpSm9y0DBhdIYmwLnGw7c8CdRKRTqrsYiwrCPzLpdHCq4nf1QA7jyzr0CSjU-3kZIVjJQvdNVQ',
    auth: 'sw3mbmgCG7C2U8cE4vGMvA'
  }
}

const Keys = {
  public: "BBwvmVFEI9I9qiznOxLgbkAbm9mtu8JXZIabPIcC3nU8MJOFTBbq4P27hJFxawRLbqBg3k4IkXMRkjT9uih_TE4",
  private: "53k0HpTB1DGqTmr7uWWmdcgjWG2h5eMqis8L6rtFtAs"
}

webPush.setVapidDetails(
  'mailto:leonardo@mail.com',
  Keys.public,
  Keys.private
);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res)=> {
  res.sendStatus(200)
})

app.post('/', async (req, res) => {
  res.sendStatus(200).json();
  const message = JSON.stringify({
    title: req.body.title,
    message: req.body.message
  })
  try {
    await webPush.sendNotification(pushSubscription, message)
  } catch (e) { console.log(e) }
  // console.log(req.body)
})

app.post('/subscription', (req, res) => {
  res.sendStatus(200).json();
})

app.listen(port, () => console.log('Server is Running in port ' + port))