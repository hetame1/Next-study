---
title: "Two Forms of Pre-rendering"
date: "2020-01-01"
---

Next.js has two forms of pre-rendering: \***\*Static Generation\*\*** and \***\*Server-side Rendering\*\***. The difference is in \***\*when\*\*** it generates the HTML for a page.

- **_Static Generation_** is the pre-rendering method that generates the HTML at **_build time_**. The pre-rendered HTML is then **reused** on each request.
- **_Server-side Rendering_** is the pre-rendering method that generates the HTML on **_each request_**.

Importantly, Next.js lets you \***\*choose\*\*** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
