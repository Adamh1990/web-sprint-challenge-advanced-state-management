# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

The context API provides a way to pass data through the component tree without having to pass props down manually at every level

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`actions`- tell the reducer what to do
`reducers`- manipulates data when it sees an action
`store`- holds all the data of the app

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

`redux-thunk` allows us to call `action-creators` within a function instead of just an action.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I'm not a huge fan of any of it, because it's too elaborate and a dying language. But that's not the type of answer you're looking for.

Let's go with redux-thunk, I choose it before any of the others because some of the stuff it can do is kind of interesting, even though the internet hates it.