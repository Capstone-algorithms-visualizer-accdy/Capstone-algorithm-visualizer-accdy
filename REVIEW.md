# Review

Below you will find my overall review of the codebase as stands. I generally leave my bulleted notes to be the "needs change" sort of stuff, though the odd compliment may slip through. I leave my positive feedback for the heading (this).

The front end of this application is among the best I have seen in a Capstone in a long time (if not ever). A variety of extremely complex CSS and even some JS that is bespoke (I am ignoring obviously copied things like the algorithms themselves). You all deserve your apropos for this accomplishment.

Looking through your front end code, there were a lot of things that weren't even clearly used in the final product. I assume these were works-in-progress at time of completion. In a "real" codebase in production, these generally shouldn't make it into the main branch. You can keep these on "feature" branches for merging at a later time when it feels ready for the light of day.

The backend of this repository feels... unloved? There was little to no effort put into a better folder structure for the code, with the vast majority of the code simply living in `backend/server.js`. There are a variety of security vulnerabilities in there I pointed out in my major notes I left in your codebase. There is also the issue of you dumping all the data in your database on every machine turn (the server hosting your code restarting).

## Code

 - Get rid of junk from `create-react-app` that isn't in use.
 - I appreciate the amount of commented notes left in the code.
 - There are an astonishing amount of external resources used in your site and attribution is very unclear.
 - Lot of code that seems to have ended up being scrapped: `<LinkedList />`, `<Stack />`, `<Queue />`, etc.
 - There were a fair amount of fairly critical backend bugs.

## Product Notes

### Nitpicks

 - "https://66da5e2e19010d77c2662ca7--clinquant-tapioca-3a351a.netlify.app/" is a fairly bad URL, but it's free!
 - The "Algorithm Visualizer" name in the header should be a link to the home page across the entire site.

#### Social Stuff

![Screenshot 2024-09-10 at 2 56 48 PM](https://github.com/user-attachments/assets/7395c560-84ca-4d04-81b7-fefb384cd16f)

 - None of these lead to anything real, do we need them?
 - Also, the Testimonials is maybe the most obvious thing that came from the original template you used, so I would remove it.

### Landing

#### Top of Page

![Screenshot 2024-09-10 at 2 25 40 PM](https://github.com/user-attachments/assets/907e047a-1b83-4038-9335-2a61be02caa1)

 - I mostly like the landing itself, it has a clear value statement.
 - Maybe a little too much whitespace going on vertically here.
 - A lot of animation on the opening page which can be a bit distracting.

#### Sort Overview

![Screenshot 2024-09-10 at 2 43 39 PM](https://github.com/user-attachments/assets/2f416f1f-57d0-4fe1-9d1b-5c27aafbf9a4)

 - I find this section concise and well put together.
 - "Carousel" logic is generally frowned upon these days, that is to say, where it auto-rotates through the Sorts instead of letting the user click.

### Path Finding

#### Wizard

![Screenshot 2024-09-10 at 2 27 15 PM](https://github.com/user-attachments/assets/6ab55ffc-eaee-48f1-b405-1b70770876f6)

 - The (i) in the bottom right is confusing as it looks clickable but is not.
 - Some more text describing what is going on in the wizard could be useful as an add-on to the gif. It would also help accessibility, e.g. users who can't see. Though I think this whole feature is kind of a moot point for that user base.

#### App

![2024-09-10 14 27 42](https://github.com/user-attachments/assets/f0f4740f-5de6-4bd5-abec-ed9bdbc4a812)

 - Dragging is a fairly confusing behavior. One would think that it should either "wall" or "clear" for every tile dragged over based on what the initial tile the drag started on was.
 - I was able to create some edge cases where dragging wouldn't work.

### Sorting Visualizer

#### App

 - Overall find the UX of the menu bar area to be strange and off-putting. Controls should probably all exist near the array entering area.

![Screenshot 2024-09-10 at 2 33 40 PM](https://github.com/user-attachments/assets/d624f683-6ca4-41ad-aa89-2d32562bfb94)

 - Extremely odd restriction (200 being a max number).
 - Not sure that the text is super clear that's what this means. I interpreted it as a max of 200 integers were allowed in the custom list.

![2024-09-10 14 36 15](https://github.com/user-attachments/assets/0e14c2b3-4c1b-42e4-8e3e-cc435d15f0a0)

 - Strange bug state after entering too large of a number where the Randomize won't create a different sized list.


![2024-09-10 14 39 30](https://github.com/user-attachments/assets/3ed9e576-71c1-4651-9b66-9bd3c808730b)

 - Counter-intuitive UX where "Play" doesn't work until you've selected an algorithm.
 - No clear UX to inform you plainly of what sort you are selected on.
 - Lack of a default sort.

![Screenshot 2024-09-10 at 2 41 21 PM](https://github.com/user-attachments/assets/5c9f1f3c-a083-4620-a9f6-d6b16c425c2d)

 - Big fan.

### User

![Screenshot 2024-09-10 at 2 47 11 PM](https://github.com/user-attachments/assets/71c9bcd6-82e3-4379-b05f-d53ef2af4ffc)

 - Sign Up is broken on prod (on a second try, it worked after an almost minute long delay?).

![Screenshot 2024-09-10 at 2 51 36 PM](https://github.com/user-attachments/assets/3863bf02-9815-4fdd-8c16-853415a04594)

 - Unclear what this data is ever used for.

### Mock Interview

![Screenshot 2024-09-10 at 2 50 06 PM](https://github.com/user-attachments/assets/10752e92-af4e-459f-a645-c2bf62c1a0bd)

 - The UX actually works fairly well, but it's hard to tell how "practical" this feature is due to a low user base.

### Chat Cat

![Screenshot 2024-09-10 at 2 48 05 PM](https://github.com/user-attachments/assets/7e4ae780-0e4b-42df-bf55-ba1c7c8ef33b)

 - The UX can look funky in certain situations like pictured.