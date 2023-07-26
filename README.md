## Cash App Single Page Website

![cash app cover image](https://raw.githubusercontent.com/lenryk/portfolio-website/main/public/assets/images/cash-app-project.jpg)

This website was built by me [@lenryk](https://github.com/lenryk) from the ground up using Gatsby, TypeScript & Styled Components.

Although I built this website myself, I didn’t design it. The design for this website came from the Figma community by the user [@ogopedia](https://www.figma.com/@ogopedia).

>Pro Tip: You can find plenty of free community designs for websites and new projects on the [Figma community](https://www.figma.com/community)

## FAQ

### Why Gatsby?

Gatsby was the first React framework I ever used for making websites and really opened my eyes to the advantages of serverside rendering (SSR) and static site generation (SSG).

Although it has fierce competition from Next.js nowadays, its recent acquisition by Netlify means there should a huge investment of dev works in the upcoming years.

### Why Styled Components?

Having used JSS for many years, in my eyes Styled Components has a much nicer API with string interpolation instead of having to type everything out like an object. It also has way less bugs and have a much larger community / dev force working behind the scenes.

### Can I use this for my own site?

I guess if you own cash app then sure... But not for your portfolio site :) 

### Why do some screen sizes look funky?

Unfortunately the original figma designs only had desktop designs which made it pretty hard for me to adjust them for smaller (and larger) screen sizes.

In order to make it work and look relatively good, I had to make some slight adjustments to the layout, images and some icons.

As I'm not a designer by trade this will most likely explain any funkiness.

### How do I run this locally?

```bash
npm i
npm run develop
```
Open `localhost:8000`

### How long did it take to build?

About a week of work with the majority of it spent battling with responsiveness and image positioning. Overall I'm much happier with the positioning and responsiveness compared to when I first started. Just setting every image to `absolute` and trying to position it on multiple breakpoint is not a good idea :)