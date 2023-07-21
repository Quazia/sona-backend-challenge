# Sona Coding Challenge

## Please show us the strength of your engineering abilities, technical design and attention to detail. While small/simple, this takehome is the main way we will assess your technical abilities.

This exercise has an extremely minimal logic surface. There’s some minor checks we need to handle, but my main goals going into this are to show good practices, solid design choices, and extremely performant, maintainable code.

## Request Methods

### POST url

- Allow an API caller to submit a url and receive a shortened url
  - (e.g. [http://localhost/eg041x](http://localhost/eg041x) )

### GET url

- Allow a user to navigate to a shortened url and be immediately taken to their original url
  - (e.g. [http://localhost/eg041x](http://localhost/eg041x) should redirect to [https://www.google.com/search?q=bitly+shortener&ei=ZPvSY_yCH9yv5NoPsvuTwAM&ved=0ahUKEwj8xMmjoeb8AhXcF1kFHbL9BDgQ4dUDCBA&uact=5&oq=bitly+shortener](https://www.google.com/search?q=bitly+shortener&ei=ZPvSY_yCH9yv5NoPsvuTwAM&ved=0ahUKEwj8xMmjoeb8AhXcF1kFHbL9BDgQ4dUDCBA&uact=5&oq=bitly+shortener))

### GET url/stats

- Allow an API caller to hit a `/stats` endpoint that returns paginated JSON information corresponding to the database entry.
  - A stats object should include the shortened url, the original url and the number of times a user has visited the shortened url
  - A user should be able to submit query parameters such as `limit` and `offset` to paginate over the table and retrieve results

### PUT url/SLUG

• Allow an API caller to update the underlying original url given a shortened url slug and reset the redirect count

## Data Formatting

We only have one table - the URL/Slug table

```sql
CREATE TABLE slug(

slugValue BINARY PRIMARY KEY,

visits NUMBER,

url TEXT

);
```

## Data Checking

### Only allow valid urls to be created

- (e.g. `https(s)://(domain)/`)
- We want pipes in the PUT and POST flow that validate the URL that’s being handed to us
  - First pipe should do a regex check or something similar to confirm it is actually a valid URL syntactically
  - Second pipe should confirm the URL is live and returns requests

## Stress Testing

### High throughput

- Allow a minimum of 20 shortened link redirects per second. This will be tested on an M1 Macbook pro with 16GB of RAM
- Convert NEST to use fastify vs express

Primary challenge here is scalablility Ideally we would use Redis as Cache layer for the redirect server, and push the hashes on creation and access with a reasonable TTL.

## Container Architecture

We should have 4 logical clusters in the architecture, the long term data storage (postgres) the in-memory storage/cache layer (redis) and the primary logic layer (nest stats/slugs) and the redirect server (seperate this out so we can isolate the ports). For this application we want to make sure that the architecture lends itself to orchestration, but specific handling of that orchestration is out of scope for this excercise.

Read through, cache on write

- We don’t want to lose any data, writes should be infrequent.
- Persistent postgres data saved in the docker volume

### Gotchas

- We don’t want to serve stale data, if we redirect to stale data there’s no recovery stage to update the data with fresh data. We’ve already redirected the user.
- As it stands there’s no auth/validation for updating the URL slugs
  - The template I started from has auth/users, I removed them but I isolated them each in a commit so it’d be very easy to add back in assuming we wanted to protect those endpoints
- I spent a non-trivial amount of time troubleshooting the IsUrl vs isURL validator differences; as soon as I looked at the code it was obvious what I was doing wrong.
- ~~I don’t love how I’m duplicating the import for the SlugRepository in testing - ideally smooth out the duplicated code there~~
- ~~I don’t love the mixed usage of slugId vs Id, I don’t have an opinion on which one looks cleaner yet but I don’t like the mixed usage~~
- A few things could be a lot more generalized; mainly the stats and the redirect modules - right now they’re pretty tightly coupled to the slug service, this should all be generalized
- Right now, it’s possible to have multiple slugs point to the same URL, it’s not clear whether that’s desirable behavior or not
- When transforming the input data, I went with prepending https here but realistically this may cause some redirects to fail due to invalid/lack of certs
- Right now I’m only listening on port 3000, the redirect module should be split into it’s own bootstrap file and served on port 80.
- The docker image is way larger than it should be, I moved a lot of types into the man dependencies just to get around a type error. With more time I would have fixed it in a cleaner way instead of a workaround.
- Ran into some real issues with my WSL instance, the docker should work but I'm not able to confirm that it does on my machine at this time. Given more time that would be my top priority.
- Didn't have enough time to implement Redis, but the general approach is outlines here.
