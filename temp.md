Magic (default) = Always on top (Top 5 Trending Now + Top 5 Top Today) + Random(Trending Now + Top Today + Fresh + Most discussed)
By Digs:
  Top Today
  Top this Week
  Top this Month
  Top this Year
  Top All Time
Trending:
  Trending Now
New:
  Latest 
Discussions:
  Most commented
  Controversial

------------


Latest - by created at time
Trending - mana earned in last hour
Discussions - Discussion Points (num & quality)
Digs - pure digs count
Magic - Highest Mana generated = Digs + Latest + Discussions + Trending + Saved + Shared

(
  SELECT *, 6 AS weight FROM posts WHERE category = 'tech' ORDER BY score DESC LIMIT 10
)
UNION
(
  SELECT *, 1 AS weight FROM posts WHERE category = 'news' ORDER BY trending_score DESC LIMIT 10
)
UNION
(
  SELECT *, 3 AS weight FROM posts WHERE category = 'offbeat' ORDER BY timestamp DESC LIMIT 10
)
ORDER BY RAND() * weight DESC
LIMIT 10;

equal representation for all categories


banned - cant create new posts or comments. can't upvote. Can't bury. can't report. Can only access user profile.
exiled - can't create new posts or comments. But can upvote and bury and report.
warned - no privilege taken. can be warned multiple times.

Bury Types:
  Personal attack 
  Hateful or offensive
  violates community spirit
  out of context
  Factually wrong
  Intentionally misleading

Reports:
  Harassment
  violates community guidelines
  Spam
  Sharing personal information
  Self harm
  Illegal activity


Top Lists for today:
  Most dug 
  Trending now
  Best Discussions
  Latest - take 5
  My History
  My follows

most dug - select 
most liked - 

top magic = digs - buries + comments value + saves (post & comment) + boost x1
trending magic = curr magic - last magic/curr magic

100 + 1000 + 5 

top 5 posts by digs created in last 24 hrs for given cat
top 10 posts by trending created in last 24 hrs
top 10 best discusions created in last 24 hrs
last 10 posts created
+
Mix

digs
comments scores
latest

dig_score = post digs - post buries + (sum of comments digs)/weight
decay_score

types of post cards;
self
  title
  content
link
  title
  image + 

colors:
    header
    bg
    drawer & side panel
    Digs
    Prominent control
    subtle control