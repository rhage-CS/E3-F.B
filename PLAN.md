# E3 Plan: one default portrait, three alternatives

**Question:** What should this character's single default portrait look like?

**Character:** a cheerful, slightly sleepy stargazer who stays up all night watching the sky.

**Criterion for choosing:** the portrait reads clearly at small size (like a profile icon) and still looks good while it spins.

## A: geometry (100+ shapes)

- Surround the face with a ring of about 120 small circles, like a halo of stars.
- Vary the dots' size and spacing slightly so the ring twinkles instead of looking like a perfect gear.
- Add a cluster of about 20 tiny freckles across the cheeks and nose.
- Impression: dreamy and a little magical; the spin should make the star ring feel like it is orbiting.

## B: assets (2+ images)

- A small night-cap image sitting on top of the head, tilted slightly to one side.
- A crescent-moon image floating beside the face, near the upper right.
- Source: I plan to draw both myself as simple PNG or SVG files and place them in the project.
- Impression: cozy and storybook-like; the images carry the "night owl" idea more directly than shapes alone.

## C: color and curves (gradient + Bézier)

- Shade the head with a gradient from warm peach at the top to cool lavender at the bottom, like dusk turning into night.
- Draw a relaxed, slightly lopsided smile as a Bézier curve.
- Possibly a second Bézier curve for droopy, sleepy eyelids.
- Impression: soft and calm; the color does the storytelling instead of extra objects.

## Status: all three explored

A: explored on branch `A`. Built mostly as planned: a ring of 120 star
dots with slightly varied size and spacing, plus 20 freckles. Difference:
the freckles ended up only on the cheeks, not across the nose.

B: explored on branch `B`. Built as planned: a tilted starry night cap
on the head and a crescent moon at the upper right. Difference: both images
are SVG files written as code with Claude's help, not drawn PNGs.

C: explored on branch `C`. Built as planned: the head shades from peach
to lavender, with a lopsided cubic Bézier smile. Difference: I also added
quadratic Bézier eyelids, and the curved smile replaced the starter's
straight mouth.
