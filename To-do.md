# URL Shortener MVP – TODO

## Core UI

- [ ] Header + hero (logo, text, button or illustration)
- [ ] URL form (input + "Shorten" button)
- [ ] List of shortened links

## App Structure (React + TS)

- [ ] Define main components:
- [ ] <App /> layout shell
- [ ] <Header />
- [ ] <Hero />
- [ ] <UrlShortenerForm />
- [ ] <ShortenedLinkList />
- [ ] <ShortenedLinkItem />
- [ ] <StatsSection /> (cards)
- [ ] <BoostSection /> (final CTA)
- [ ] <Footer />
- [ ] Create TypeScript types/interfaces:
- [ ] ShortenedLink type (id, originalUrl, shortUrl, copiedFlag, createdAt, etc.)
- [ ] API response types for Clean URI endpoint
- [ ] Decide on state location:
- [ ] Store list of shortened links in a top-level state (e.g. in App)
- [ ] Pass state & handlers down via props

## Functionality

- [ ] On submit → call CleanURI API
- [ ] Show original URL + shortened URL in list
- [ ] Copy to clipboard button (just a button is fine)
- [ ] Show simple error if input empty

## State

- [ ] Store shortened links in React state
- [ ] Save to localStorage
- [ ] Load from localStorage on refresh

## URL List & Persistence (localStorage)

- [ ] Implement ShortenedLinkList:
- [ ] Render list of ShortenedLinkItems from state
- [ ] Show original URL and short URL as in design
- [ ] Add copy-to-clipboard feature:
- [ ] Use navigator.clipboard.writeText for short URL
- [ ] Show “Copied!” state on the clicked button
- [ ] Reset “Copied!” state on other items
- [ ] Implement persistence with localStorage:
- [ ] On initial load, hydrate links state from localStorage
- [ ] On state change, save links to localStorage
- [ ] Handle malformed/empty localStorage data safely

## Form Validation & Error States

- [ ] Implement client-side validation:
- [ ] If input is empty on submit:
- [ ] Prevent API call
- [ ] Show inline error text (per design)
- [ ] Add error styling to input (border color, placeholder color)
- [ ] Optionally, basic URL format check (e.g. must start with http(s))
- [ ] Add accessibility for errors:
- [ ] Associate error text with input via aria-describedby
- [ ] Ensure error state is announced for screen readers

## Styling (light)

- [ ] Tailwind layout: stack mobile, row on desktop
- [ ] Basic colors + spacing from style-guide
- [ ] Active/hover state on copy button
