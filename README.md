Have you seen the TodoMVC app (Links to an external site.)? It's a kind of Rosetta Stone for JS frameworks: The same app, built with dozens of toolsets.

Download, and get running, the React-Flux version of the app: https://github.com/facebook/flux/tree/master/examples/flux-todomvc (Links to an external site.) .

Create a new repo with just the todomvc app on master. Make a new branch for to add some changes.

Modify the code base, using the existing patterns and code style as much as possible, to implement these new features:

Todo Case Looper:

Add a clickable target (img/icon/button/whatev) at the end of each todo that triggers an event via Flux (5 pts)
When it's clicked, convert the case of the todo item. (5 pts)
Each click should rotate the todo item's case through: UPPERCASE, Title Case, lowercase, repeat, etc. (5 pts)
Bonus Feature: Filter by Case:

Add a filter (next to the "All | Active | Completed" filters) that reveals just Todos of a certain case
This should also rotate through the possible states.
eg: First click will show only the UPPERCASE todos. Next click shows all Todos that are currently Title Case. Next click, etc.


(Creating a title-casing function is a good code challenge, but feel free to google for one if you'd rather focus on Flux/React right now. Be sure to cite your sources!)



Commit all your changes to your branch, and create a PR. Submit the PR link here.

