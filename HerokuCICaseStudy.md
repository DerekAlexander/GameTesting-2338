# Heroku case study for a CI solution

Starting from the top for a developer environment Heroku offers built in test for quite a few languages as well as support to customize and add your own test in. Its CI function runs these tests for every push and pull so all code is tested before coming in and before going back out to the master. This creates a forced unit test environment to avoid any untested commits and as an added bonus saves time of running the test by hand. 

For the QA environment Heroku CI offers quite a few built in language tests and has the ability to create your own tests. It can also be configured per test environment. Another feature I personally find really useful is the review apps feature. What this does is create temporary apps for every pull request that is auto updated per commit. This creates a way for reviewers to see what changes as they work. 

Using the last point of QA again having temporary apps is perfect for the staging environment as well. If my understanding is correct the ChatOps feature would work well in this environment. Seeing that it seems to be like a chat system with a notifier of what is happening with current builds.  Being able to have people talk and review at this stage seems valuable. 

Heroku release phase seems to create a safer way to deploy to the production environment. It does this by, from what I can tell, adding a safety net phase in mocking production. This feature can run any task set up by the user as well as stopping a push to release if any errors appear. Some other time saving tasks it does listed is migrate database schemas and upload assets. 
