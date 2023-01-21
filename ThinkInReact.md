# News Summary Challenge

## User Story

```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

## Thinking in React
- Start with a mock
- Break the UI into a component hierarchy
- Build a static version in React
- Identify the minimal (but complete) representation of UI state
- Identify where your state should live
- Add inverse data flow

## How to approach
1. Based on the user stories and Mockups, the web app contains two pages. The first page is made up of the news headlines and relevant news pictures for each headline. The second page is made up of news pictures, news headlines and news summary
2. Break the UI(Mockups) into a component hierarchy so that decoupling the code. Create a `Components` folder under `src` and a `tests` folder containing test files for each component. Identify overlap components before creating `jsx` and `test.jsx` files. The following is the component hierarchy for each page and related files

* Headlines page
```
APP
Header - Header.jsx
Image - Image.jsx 
Headline - Headline.jsx 
HeadlineContents - HeadlineContents.jsx
Footer - Footer.jsx
```

* Article summary page
```
APP
Header - Header.jsx
Article - Article.jsx
Image - Image.jsx
Headline - Headline.jsx 
Bodytext - Bodytext.jsx
Footer - Footer.jsx
```
4. Components render props extracted from mockNewData

## How to run
1. `npm install` in this project folder
2. `npm start` after that

! contact me if you meet the problem running the application



