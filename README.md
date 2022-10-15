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

## --

## --

--

## Professional Self Assessment

A. Discuss how completing your coursework throughout the program and developing the ePortfolio has helped showcased your strengths and
shape your professional goals and values and prepared you to either enter or become more employable in the computer science field. Use
specific examples from your program and include examples outside of the artifacts included in your ePortfolio. Please address following topics:
collaborating in a team environment, communicating to stakeholders, data structures and algorithms, software engineering and database,
and security. Note: This should function as an overall introduction to your skills and you will become more specific relative to the included
artifacts in the next section.

B. Summarize/introduce how your artifacts fit together and inform the portfolio as a whole; this will help demonstrate the full range of your
computer science talents and abilities? This section should introduce your audience to the technical artifacts that will follow the professional
self-assessment.

## Code Review

At the start of this course, I created a code review going over my enhancedments

https://www.youtube.com/watch?v=k08ZBwK6sBw

## Plutomi Artifact and Enhancements

This is mostly what changed (code review summary ) and the technical aspect. Narratives is more of the experience modifying the artifact.

> Note that we are using this artifact across categories

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
