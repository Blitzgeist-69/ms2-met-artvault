# Met Art Vault Testing Documentation

**Testing Strategy**
The testing strategy for Met Art Vault is **user-story driven** and follows a **mobile-first** approach.

**Core principles:**

- Every feature is tested against its Acceptance Criteria before being marked complete.
- Testing is performed on real devices and browser DevTools to simulate real users.
- Accessibility and performance are treated as equally important as visual design.
- All testing is documented with evidence.
- Bugs are logged immediately and re-tested after fixes.

**Testing types used:**

- Manual functional testing
- Responsiveness testing
- Accessibility & SEO checks
- HTML/CSS/JavaScript validation
- Cross-browser compatibility
- User-story validation

## Testing Plan

**Phase 1 – Unit/Feature Testing** (during development)  
Test each component (navbar, hero, cards, form, modals) as it is built.

**Phase 2 – User Story Validation**  
Go through every completed Must-Have, Should-Have and Could-Have user story.

**Phase 3 – Full Site Validation** on deployed site.

- Run all validators and Lighthouse
- Test on real devices
- Document bugs and fixes

**Tools used:**

- Chrome DevTools inc Lighthouse
- ESLint
- JSHint
- Firefox
- Microsoft Edge
- W3C HTML & CSS Validators
- Real devices: Windows 11 Desktop, Samsung Galaxy A55 phone, Samsung S4 Galaxy Tab

**Test Environment:**

- Operating System: Windows 11, Android 10 / 16
- Browser versions: Chrome 142 / 145, Firefox 148, Edge 145,

## In Development Test Screenshots

### Functions

#### Dark Mode

![Dark Mode Test - Light](assets/screenshots/dark-mode-test-light.png)

![Dark Mode Test - Dark](assets/screenshots/dark-mode-test-dark.png)

#### fetchObjectById

![Fetch Object Test - Irises ID 436528](assets/screenshots/fetch-object-irises.png)

#### searchArtworks

URL Test

![searchUrl](assets/screenshots/search-url%20-test.png)

Search with empty input

![searchArtworks Empty Input](assets/screenshots/search-artworks-empty-input.png)

Example "Sunflowers" search

![Example "Sunflowers" search](assets/screenshots/sunflowers-search.png)

Search with 'spaces' included

![Search with spaces included](assets/screenshots/search-with-spaces.png)

#### createCard(artwork)

Test Code

![Test Code](assets/screenshots/test-code-create-card.png)

Test Code Result

![Test Code Result](assets/screenshots/test-code-create-card-result.png)

#### renderArtworks

![Test renderArtworks](assets/screenshots/test-render-artworks.png)

#### saveCurrentArtworkToVault

Confirming artwork saved to localStorage

![Artwork saved to localStorage](assets/screenshots/artwork-saved.png)

Saving current artwork

![Saving current artwork](assets/screenshots/saving-current-artwork.png)

Artwork already saved

![Artwork already saved](assets/screenshots/artwork-already-saved.png)

#### Search

No results

![No Search Results](assets/screenshots/no-search-results.png)

Successful Search

![Successful Search](assets/screenshots/successful-search.png)

Something Went Wrong - No internet connection

![Something went wrong](assets/screenshots/something-wrong.png)

#### Suprise Me!

Some returned object IDs do not exist

![Suprise Me - Klimt](assets/screenshots/suprise-me-klimt.png)

All returned object IDs exist

![Suprise Me - Gauguin](assets/screenshots/suprise-me-gauguin.png)

#### Art Vault

Empty Vault

![Empty Vault](assets/screenshots/empty-vault.png)

View Art Vault contents

![View Art Vault contents](assets/screenshots/art-vault-contents.png)

New favourite added

![New favourite added](assets/screenshots/new-favourite-added.png)

#### Reset page clicking Home or "Met Art Vault"

Before Reset with Home

![Before Reset with Home](assets/screenshots/before-home-reset.png)

After Reset with Home

![After Reset with Home](assets/screenshots/after-home-reset.png)

Before Reset with Logo

![Before Reset with Logo](assets/screenshots/before-logo-reset.png)

After Reset with Logo

![After Reset with Logo](assets/screenshots/after-logo-reset.png)

### Post Development Testing

CSS updated with Autoprefixer

![Autoprefixer](assets/screenshots/autoprefixer-css.png)

W3C CSS Validation Service - No Errors

![CSS Validation](assets/screenshots/css-validation.png)

W3C Markup Validation Service - Errors Identified

![Markup Validation](assets/screenshots/markup-validation.png)

Axe DevTools

Issue 1

![Axe Devtools issue 1](assets/screenshots/axe-devtools-1.png)

Issue 2

![Axe Devtools issue 2](assets/screenshots/axe-devtools-2.png)

Issue 3

![Axe Devtools issue 3](assets/screenshots/axe-devtools-3.png)

Issue 4

![Axe Devtools issue 4](assets/screenshots/axe-devtools-4.png)

Issue 5

![Axe Devtools issue 5](assets/screenshots/axe-devtools-5.png)

Wave Accessibility Evaluation Tool

![Wave Accessibility Test](assets/screenshots/wave-access.png)

Lighthouse

**Mobile Performance**

![Lighthouse Mobile Performance](assets/screenshots/lighthouse-mobile-performance.png)

**Mobile Accessibility**

![Lighthouse Mobile Accessibility](assets/screenshots/lighthouse-mobile-accessibility.png)

**Mobile Best Practices**

![Lighthouse Mobile Best Practices](assets/screenshots/lighthouse-mobile-best-practices.png)

**Mobile SEO**

![Mobile SEO](assets/screenshots/lighthouse-mobile-seo.png)

**Desktop Performance**

![Desktop Performance](assets/screenshots/lighthouse-desktop-performance.png)

**Desktop Accessibility**

![Desktop Accessibility](assets/screenshots/lighthouse-desktop-accessibility.png)

**Desktop Best Practices**

![Desktop Best Practices](assets/screenshots/lighthouse-desktop-best-practices.png)

**Desktop SEO**

![Desktop SEO](assets/screenshots/lighthouse-desktop-seo.png)


## Known Issues

### Contrast Ratio

Insufficient contrast ratio identified by Axe DevTools

### About button

This feature has currently not been implemented due to time contraints.

### HTML

1. Element <img> is missing attributes

2. Heading <h5> skips levels

### Mobile view

Navbar buttons differ in length on mobile


## Future Improvements

- Implement About feature
- Implemt Remove Artworks form Vault
- Implement Full Screen view of artworks
- Implement Show number of artworks saved
- Implement Department filter
- Bug fixes
- Improve accessibility