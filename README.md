# Introduction
This app using react native cli with typescript. for state management I use redux to manage global state and redux persist to persist value of the redux in favorite page. For unit test I using react native testing library to handle the test

# Android Installation
1. You must install node modules first
``` yarn install```
2. To run on android simulator run this snippet
```npm run android```

# IOS Installation
1. You must install node modules first
``` yarn install```
2. To run on android simulator run this snippet
```cd ios && pod install```
3. To run ios just use this snippet ```npm run ios ```

# Screenshoot
![alt text](https://github.com/agit26milan/simple-project/blob/master/Screenshot-home.png?raw=true)
![alt text](https://github.com/agit26milan/simple-project/blob/master/Screenshot-add-favorite.png?raw=true)
![alt text](https://github.com/agit26milan/simple-project/blob/master/Screenshot-favorite.png?raw=true)


# The Design
I use top tabbar to make better user experience, because it's very simple for using, user can move from one menu to another menu only with swipe the screen. For add favorite I use modal rather than move to another screen because in my opinion is easy for user. For favorite button page I use floating button to make user easy to navigate to favorite screen.

# The Challenge
1. Determine the design, Think the user experience how to make app simple but beautiful on the design
2. Determine what library that use for saving the favorite list, using redux with redux persist or Async Storage. I use redux persist because its easy to maintain
3. Wrote te unit test
