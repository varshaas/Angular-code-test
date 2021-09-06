# Alinta Front End Code Test

Thanks for taking the time to look at this code test project. This project implements a customer list using a NgRx store, with a Reactive form for adding customers.


## Tasks

Please attempt one or more of the following improvement tasks on this project, and upload to your own online repository (e.g. GitHub)

**Time box yourself to 2 to 4 hours of work.**

We realise your time is valuable and don't need to see all these issues resolved. Pick a task or area that you excel or are passionate about. Complete as much as you can in the time you choose, but don't overstretch yourself. We'll review your code in the technical interview, discuss choices you made and anything you'd like to improve if you had the time.

### Suggested Tasks

Use one of our suggested tasks or complete your own improvement to the project if you see something we haven't listed.

- Add some styling and branding to improve the look and feel:
    - Use the Alinta homepage (https://www.alintaenergy.com.au/vic/) as a resource and reference, but don't feel you have to reproduce this style exactly - take as much or as little as you want.
    - You can add a 3rd party UI library, but make sure you show off your CSS and design skills.
- The Add Customer form takes up a lot of space - on smaller viewports the user needs to scroll down to see the customer list, and some users may only want to read the list and not use the form. Find a simple solution.
- Allow the user to edit customer info.
- Add a birthday field:
    - Consider how to make this intuitive and easy to use.
    - Add a constraint to ensure users are 18+ years old.
    Consider how to communicate this requirements to the user.
    - Consider how the date value will be stored, both locally and in the backend.
- Add validation to the form:
    - First name and last name should be mandatory.
    - The phone number should be a valid Australian number.
    - Prevent users from entering users with the same first and last name.
    - Consider how to communicate these requirements to the user.
- Convert the customer list to a table format (e.g. using CSS grid), with a column for each value:
    - Consider how this will appear on different viewport sizes and zoom levels.
- Add search and sorting. As the list grows, users want to be able to search by name or phone number.
- Mock backend integration:
   - Update the code so that the api can be easily incorporated when ready.
- Improve the tests. The current tests are auto-generated and work as little more than a smoke test:
    - Given the limited time you have, what kind of tests will provide the most value?

### Considerations
- A well written Git history is a valuable resource. Use your commits to communicate your process.
- Maintain accessibility - aim for WCAG level AA or better (see https://www.w3.org/WAI/WCAG2AA-Conformance)
- Maintain responsiveness - the app should be usable for a wide range of viewport sizes.
- Feel free to pull in any 3rd party libraries if you wish.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
