---
layout: home
title: Jose Valerio - SNHU CS-499 Capstone
permalink: /
---

## Table of Contents

1. [Professional Self Assessment](#professional-self-assessment)
2. [Code Review](#code-review)
3. [Plutomi Artifact & Enhancements](#plutomi-artifact-and-enhancements)
4. [Narratives](#narratives)

## Professional Self Assessment

During my time at SNHU, I got to experience a wide variety of computer science topics ranging from building web apps, interacting with databases, the software development lifecycle using waterfall and agile methodologies, automation with CI/CD pipelines, client & server development, and the algorithms that power everything under the hood.
As a software engineer, I was already very familiar with these topics from my day to day work. By doing the coursework as well as building this ePortfolio, I was able to strengthen my knowledge of these topics and put the lessons I learned to use in a real world scenario in one of my own projects. Some examples of the changes that will be shown in the portfolio include:

- Following industry standard best practices when working in a team such as requiring branch protection on the `main` branch and at least one approval from another team member before being able to merge new changes
- Having separate environments and infrastructure to test those new changes in a `production-like` environment before they actually go live to the public
- Implementing a CI/CD pipeline that automatically deploys to each environment saving engineer time and preventing mistakes with manual processes and scripts
- Allowing stakeholders to view the progress of desired features and bugfixes by documenting them publicly on GitHub
- Evaluating tradeoffs between different databases that were most appropriate for my use case and the desired performance SLAs
- Following security best practices by storing environment secrets outside of the codebase that can be swapped without a code change
- Limiting database connections to our server instances so they are not openly available to the public
- Practicing tenant data isolation by embedding each tenant ID into the queryable index of each entity
- Rearchitecting a core feature to use a more efficient data structure which would remove a massive limitation for our customers
- Using a hash map with a custom sorting algorithm to efficiently sort the data structure above in O(n) time instead of O(n<sup>2</sup>)
- Adding type safety wherever possible to prevent accessing undefined properties in code using TypeScript

As I progress throughout my career, I would like to be knowledgeable in a variety of areas with a specialization in cloud technologies like Amazon Web Services. The changes made in this ePortfolio reflect my professional goals by making me a well rounded engineer since the changes that were made to my artifact touch on various aspects of computer science and the software application development lifecycle as well as my desired future specialization in cloud computing.

In the next few sections I will introduce [Plutomi](https://plutomi.com/), an [open source](https://github.com/plutomi/plutomi) applicant tracking system that I created and have been working on for just over a year. The first section is a code review created at the start of CS-499 outlining planned enhancements that I could make to the project. The next section is a deep dive into the technical enhancements made, how they work, and how they demonstrate my skills and abilities in the three categories of software design and engineering, algorithms and data structures, and databases. Finally, I will describe how these enhancements helped me achieve the desired course outcomes of CS-499 and my computer science program at SNHU.

## Code Review

At the start of CS-499 at SNHU, I created a code review going over my planned enhancements for Plutomi. In the video I describe what Plutomi is, how it can be used by end customers, the planned enhancements I wanted to make to the project as well as the reasoning behind those enhancements. The video can be viewed here:

https://www.youtube.com/watch?v=k08ZBwK6sBw

## Plutomi Artifact and Enhancements

> Note: I am using one artifact for all three categories of this ePortfolio. You can view the old and new versions of the artifact in the `old_plutomi` and `new_plutomi` directories.

### Software Design and Engineering

#### Enhancements

- GitHub Actions CI/CD

  I implemented a continuous deployment pipeline using GitHub actions that deploys to Amazon Web Services whenever there is a new push into the `main` branch of the repository on GitHub. This was done by creating a `deploy.yaml` file in the `.github/workflows` directory with specific commands I would like it to run in order. There is also an option to manually run the workflow from the GUI if needed by providing the environment you would like to deploy to.
  ![githubActionsInput](/assets/gh_actions_input.png)
  ![commands](/assets/commands.png)

- Environment Secrets

  In the action itself, you can supply environment variables to each command with a `env` property. This allows us to change environment variables through GitHub's GUI without requiring a code change. We can manually re-deploy to have these changes take effect. We also have separate secrets per environment, one for `staging` and one for `production`.

  ![envaction](/assets/env_action.png)
  ![envsecrets](/assets/env_secrets.png)

- Pull Request Reviews And Code Owners
- TypeSafety
- Public Issues

### Algorithms and Data structures

### Databases

-

This is mostly what changed (code review summary ) and the technical aspect. Narratives is more of the experience modifying the artifact.

Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science.
Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts.
Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution, while managing the trade-offs involved in design choices
Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals
Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources.

## Narratives

> A. Briefly describe the artifact. What is it? When was it created?
> B. Justify the inclusion of the artifact(s) in your ePortfolio. Why did you select this item? What specific components of the artifact showcases your
> skills and abilities in software development?
> C. Reflect on the process of enhancing and/or modifying the artifact. What did you learn as you were creating it and improving it? What
> challenges did you face? How did you incorporate feedback as you made changes to the artifact? How was the artifact improved?

---

• Develop an accompanying narrative that explains why you selected this artifact and the skills showcased in enhancing it.
• Submit the artifact and narrative for instructor review and comments.
You will then have the opportunity to incorporate these comments and polish the artifact before publishing it in the ePortfolio.
The narrative should focus less on the actual creation of each artifact and more on the learning that happened through the creation of the artifact.

. Submit in the course a written narrative about your professional journey---you can also share this on GitHub, but it must align to how you quantifiably (not I think, I feel but this aligns with this standards, best practice, security practice etc.) REACHED the five course outcomes through your enhancements:

Course Outcome 1: You EmployED strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science by completing the following enhancements\***\*\_\*\***

Course Outcome 2: You DesignED, DevelopED, and DeliverED professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts by completing the following enhancements\***\*\_\*\***

Course Outcome 3: You DesignED and EvaluateED computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution, while managing the trade-offs involved in design choices by completing the following enhancements\***\*\_\*\***

Course Outcome 4: You DemonstrateD an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals by completing the following enhancements\***\*\_\*\***

Course Outcome 5: You DevelopED a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources by completing the following enhancements\***\*\_\*\***

Your portfolio must show what you can do. To say I know Python is your opinion, but to showcase a Python program with best practices, and support that with a written narrative for example carries a lot more evidence
TODO best practices like using Typescript and types everywhere

## Why Jekyll with GitBook

GitBook is an amazing frontend style to present and organize contents (such as book chapters
and blogs) on Web. The typical to deploy GitBook at [Github Pages][1]
is building HTML files locally and then push to Github repository, usually to the `gh-pages`
branch. It's quite annoying to repeat such workload and make it hard for people do version
control via git for when there are generated HTML files to be staged in and out.

This theme takes style definition out of generated GitBook site and provided the template
for Jekyll to rendering markdown documents to HTML, thus the whole site can be deployed
to [Github Pages][1] without generating and uploading HTML bundle every time when there are
changes to the original repo.

## How to Get Started

This theme can be used just as other [Jekyll themes][1] and support [remote theme][12],
see [the official guide][13] as well.

You can introduce this jekyll theme into your own site by either

- [Fork][3] this repository and add your markdown posts to the `_posts` folder.
- Use as a remote theme in your [`_config.yml`][14](just like what we do for this
  site itself),

### Deploy Locally with Jekyll Serve

This theme can be ran locally using Ruby and Gemfiles.

[Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) - GitHub

## Full-text search

The search functionality in jekyll-gitbook theme is powered by the [gitbook-plugin-search-pro][5] plugin and is enabled by default.

[https://sighingnow.github.io/jekyll-gitbook/?q=generated](https://sighingnow.github.io/jekyll-gitbook/?q=generated)

## Code highlight

The code highlight style is configurable the following entry in `_config.yaml`:

```yaml
syntax_highlighter_style: colorful
```

The default code highlight style is `colorful`, the full supported styles can be found from [the rouge repository][6]. Customized
style can be added to [./assets/gitbook/rouge/](./assets/gitbook/rouge/).

## How to generate TOC

The jekyll-gitbook theme leverages [jekyll-toc][4] to generate the _Contents_ for the page.
The TOC feature is not enabled by default. To use the TOC feature, modify the TOC
configuration in `_config.yml`:

```yaml
toc:
  enabled: true
  h_min: 1
  h_max: 3
```

## Google Analytics, etc.

The jekyll-gitboook theme supports embedding the [Google Analytics][7], [CNZZ][8] and [Application Insights][9] website analytical tools with the following
minimal configuration in `_config.yaml`:

```yaml
tracker:
  google_analytics: "<YOUR GOOGLE ANALYTICS KEY, e.g, UA-xxxxxx-x>"
```

Similarly, CNZZ can be added with the following configuration in `_config.yaml`

```yaml
tracker:
  cnzz: "<YOUR CNZZ ANALYTICS KEY, e.g., xxxxxxxx>"
```

Application Insights can be added with the following configuration in `_config.yaml`

```yaml
tracker:
  application_insights: "<YOUR APPLICATION INSIGHTS CONNECTION STRING>"
```

## Extra StyleSheet or Javascript elements

You can add extra CSS or JavaScript references using configuration collections:

- extra_css: for additional style sheets. If the url does not start by http, the path must be relative to the root of the site, without a starting `/`.
- extra_header_js: for additional scripts to be included in the `<head>` tag, after the `extra_css` has been added. If the url does not start by http, the path must be relative to the root of the site, without a starting `/`.
- extra_footer_js: for additional scripts to be included at the end of the HTML document, just before the site tracking script. If the url does not start by http, the path must be relative to the root of the site, without a starting `/`.

## Customizing font settings

The fonts can be customized by modifying the `.book.font-family-0` and `.book.font-family-1` entry in [`./assets/gitbook/custom.css`][10],

```css
.book.font-family-0 {
  font-family: Georgia, serif;
}
.book.font-family-1 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

## Tips, Warnings and Dangers blocks

The jekyll-gitbook theme supports customized kramdown attributes (`{: .block-tip }`, `{: .block-warning }`,
`{: .block-danger }`) like that displayed in [the discord.js website][11]. The marker can be used like

```markdown
> ##### TIP
>
> This guide is last tested with @napi-rs/canvas^0.1.20, so make sure you have
> this or a similar version after installation.
> {: .block-tip }
```

Rendered page can be previewed from

[https://sighingnow.github.io/jekyll-gitbook/jekyll/2022-06-30-tips_warnings_dangers.html](https://sighingnow.github.io/jekyll-gitbook/jekyll/2022-06-30-tips_warnings_dangers.html)

## Cover image inside pages

The jekyll-gitbook theme supports adding a cover image to a specific page by adding
a `cover` field to the page metadata:

```diff
  ---
  title: Page with cover image
  author: Jose Valerio
  date: 2022-05-24
  category: Jekyll
  layout: post
+ cover: /assets/jekyll-gitbook/dinosaur.gif
  ---
```

The effect can be previewed from

[https://sighingnow.github.io/jekyll-gitbook/jekyll/2022-05-24-page_cover.html](https://sighingnow.github.io/jekyll-gitbook/jekyll/2022-05-24-page_cover.html)

## License

This work is open sourced under the Apache License, Version 2.0.

Copyright 2019 Jose Valerio.

[1]: https://pages.github.com
[2]: https://pages.github.com/themes
[3]: https://github.com/sighingnow/jekyll-gitbook/fork
[4]: https://github.com/allejo/jekyll-toc
[5]: https://github.com/gitbook-plugins/gitbook-plugin-search-pro
[6]: https://github.com/rouge-ruby/rouge/tree/master/lib/rouge/themes
[7]: https://analytics.google.com/analytics/web/
[8]: https://www.cnzz.com/
[9]: https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview
[10]: https://github.com/sighingnow/jekyll-gitbook/blob/master/gitbook/custom.css
[11]: https://discordjs.guide/popular-topics/canvas.html#setting-up-napi-rs-canvas
[12]: https://rubygems.org/gems/jekyll-remote-theme
[13]: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll
[14]: https://github.com/sighingnow/jekyll-gitbook/blob/master/_config.yml
