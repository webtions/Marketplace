# Ghost Marketplace

Thousands of people start new Ghost publications every single month, and almost all of them end up looking for a great design for their brand new site. The Ghost Marketplace is curated directory to showcase the best themes available to people who are looking to get started.

We run the marketplace as a very simple showcase gallery with direct links to creators. We do not take any cut, commission or credit for the work of theme developers.

Anyone is welcome to submit a theme to the marketplace - however due to a very high number of submissions, we only accept the very best themes to showcase publicly on Ghost.org.


## What sort of themes get accepted?

Design is certainly subjective in many ways, but there are a great deal of best practices which are taken into account when evaluating a theme for inclusion in the marketplace, such as flow, hierarchy, balance, and contrast, as well as use of typography, color, and negative space.

We also look for a well designed user experience. As well as being visually beautiful, themes should work smoothly, be easy to navigate, and make use of Ghost's available features.

Beyond a great design and a great experience, we look for themes which are unique, well maintained, offer support to their users, and are easy to set up and use for publishers.


## Why do some themes not get accepted?

The most common reason for unsuccessful submissions is not following the submission guidelines (below). Submissions which ignore our guidelines, actively try to circumvent them, or which are in any way spammy - are instantly closed.

The next most common reason is lack of originality and looking too similar to other existing themes in the marketplace. There are hundreds (maybe thousands?) of forks of our default theme (Casper) out there with a few minor visual tweaks. They're often very nice, but they aren't very useful for new users wading through the marketplace for the first time.

The final most most common reason is simply that we don't think the design is the right style or fit for the public marketplace. We can't give detailed design feedback for every single submission, but if your application is unsuccessful on the grounds of style then please understand that it's not personal. We do our best to curate the best themes we can, and we simply can't accept all of them.


## Theme requirements

All themes in the marketplace must meet our development standards in order to be approved.

### General requirements

- Themes should pass compatibility validation using [GScan](https://gscan.ghost.org/)
- Themes should have a responsive layout and mobile friendly styles, with compatibility for the latest 2 versions of Chrome, Firefox, Safari and IE/Edge
- Themes should make proper use of [the asset helper](https://themes.ghost.org/docs/asset) to load all assets
- Themes should include a "Published with Ghost" link to Ghost.org


### Code standards

- [Follow the docs](http://themes.ghost.org/docs)
- Use code comments: Document your work (Check out [Casper](https://github.com/TryGhost/Casper/blob/master/index.hbs) for a good example)
- Create a sane file structure.
    - **Do** use includes to manage components sensibly.
    - **Do not** use includes for every little snippet of code under the sun.
- Include a detailed ReadMe.md with information about the theme, its features, and where to go for help
- Include a [properly formatted package.json](https://github.com/TryGhost/Casper/blob/master/package.json)

### Search Engine Optimisation

- Themes should have clearly structured data and HTML tags which are search engine friendly
- All parts of the theme should have a clearly linked navigation structure
- No SEO "tricks" - clean well structure markup. That's it. And no, we're not going to have a debate about it.

### Accessibility

- Images must have alt attributes
- Theme should be built with [valid HTML](https://validator.w3.org/)
- All parts of the theme should be accessible with keyboard navigation
- The theme should be tested for [colour contrast](http://contrast-finder.tanaguru.com/)

### Recommendations

- Include extensive base styling for all possible types of content which someone might enter into the Ghost editor.
- Make good use of tag and author archives
- Create custom styling and layouts for posts which are marked as "featured"
- Ensure good fallbacks when content is empty or unavailable (no featured image, no author bio, no post tags, etc)
- Support upcoming features such as Subscribers (in Labs)


## How to submit a theme

To submit a theme, you'll need to open a pull request adding your theme to this repository, along with some information about your theme.

When you open the pull request you will see a template which needs to be filled out in full for us to be able to review your submission. If you skip any part of the PR template, the PR will be closed.

For reference: [Here is an example of a good theme submission](#)


## Providing theme support

Once your theme submission Pull Request has been accepted and merged, it will automatically be deployed to the marketplace. From that point onwards, remaining listed in the marketplace is contingent on theme developers providing reasonable support and maintenance.

Any themes which become dormant in providing support to users or keeping up to date with compatibility and bugs will be removed from the marketplace without notice.

We aren't trying to be mean. We're an extremely [small team](https://ghost.org/about/) with very limited resources. We do the best we can.


## What to do if your theme is not accepted

If your theme is not accepted for a specific reason, we'll generally let you know what the issue is and how you can go about resolving it. It's up to you if you want to then re-submit the theme at a later date.

If we just don't think your theme is a good fit for the public showcase, we'll let you know, but please understand that due to the subjective nature of trying to curate a gallery of high quality themes which fit well with the Ghost brand - we won't always be able to give a comprehensive explanation.


## Code of conduct

All theme submissions and discussions around submissions must follow our [community standards](https://ghost.org/conduct/).

After 5 years of running a large open source project, our bullshit tolerance levels are extraordinarily low. If you troll in any way, you'll be banned and reported to Github. The end.
