# PulseSafe

## Inspiration

Cardiovascular diseases are the leading cause of death globally. One in five deaths is a heart attack, and performing CPR immediately can greatly improve these odds. However, ambulances may only arrive so fast. PulseSafe aims to quickly help those in need by alerting nearby individuals with first-aid training of the incident.

## What it does

PulseSafe monitors real-time heart rate and input data on a smartwatch, allowing the user to tap a button to send notifications to nearby first-aid certified members, indicating an emergency. These registered members are trained CPR providers, and notifications will only be sent to members within a close distance to the person in need.

## Figma Design

[Link to Figma Design](https://www.figma.com/file/3lFJwbMSbWxeYDoLGpuMgM/UI%2FUX-Design-of-PulseSafe?type=design&node-id=33%3A444&mode=design&t=nQrfA5InOqR9Quak-1)

(Include screenshots or key aspects of the design in this section)

## How we built it + Challenges we ran into

One of the initial challenges was coding on FitbitOS using Fitbit’s documentation, carefully studied to program the app for the watch. The platform's simulator limitations for handling API calls like an actual smartwatch restricted testing. Sending data from the watch sensor to a server posed challenges with unhelpful error messages. Learning the MERN stack, chosen for compatibility with FitbitOS, was a hurdle for the team due to lack of prior experience. Git challenges led to multiple repository copies.

## Accomplishments that we're proud of

The team successfully resolved server issues and learned the MERN stack within a tight timeframe.

## What we learned

The project enabled the team to overcome challenges related to FitbitOS, API calls, and the MERN stack. Collective problem-solving skills improved, leading to successful server issue resolution.

## What's next for PulseSafe

While not initially driven by monetary incentives, the team recognizes the need for funding to scale PulseSafe nationally. Future steps involve polishing and securely implementing various components. Long-term plans include developing a PulseSafe-specific wearable to enhance accessibility without requiring an expensive smartwatch.

---

## Techstack

### Frontend
- **React:** A JavaScript library for building user interfaces.
  - [Learn React](https://reactjs.org/)

- **Figma:** Used for UI/UX design and collaboration.
  - [Figma](https://www.figma.com/)

### Backend
- **Express.js:** A web application framework for Node.js, providing a robust set of features to develop web and mobile applications.
  - [Express.js](https://expressjs.com/)

- **Node.js:** A JavaScript runtime for executing server-side code.
  - [Node.js](https://nodejs.org/)

- **MongoDB:** A NoSQL database for storing and retrieving data.
  - [MongoDB](https://www.mongodb.com/)

### Fitbit Integration
- **Fitbit Companion API:** An API provided by Fitbit for developing companion apps that run on a user's phone or web browser.
  - [Fitbit Companion API](https://dev.fitbit.com/build/reference/companion-api/)

- **Fitbit Device API:** An API provided by Fitbit for developing apps that run on Fitbit devices.
  - [Fitbit Device API](https://dev.fitbit.com/build/reference/device-api/)

### External Services
- **Twilio:** A cloud communications platform for sending SMS notifications.
  - [Twilio](https://www.twilio.com/)

### Utilities
- **ngrok:** A tool for creating secure tunnels to localhost, which can be useful for exposing local development servers to the internet.
  - [ngrok](https://ngrok.com/)

