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

Light Mode

![Axe Devtools Light Mode](assets/screenshots/axe-devtools-light.png)

Dark Mode

![Axe Devtools Dark Mode](assets/screenshots/axe-devtools-dark.png)

Wave Accessibility Evaluation Tool

Light Mode

![Wave Accessibility Test Light Mode](assets/screenshots/wave-access-light.png)

Dark Mode

![Wave Accessibility Test Dark Mode](assets/screenshots/wave-access-dark.png)

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

## User Stories

| ID    | User Story |
|-------|------------|
| **US01** | As a user, I want to search for artworks using keywords so that I can discover pieces from The Metropolitan Museum of Art collection. |
Keyword - Renoir
![US01 Renoir](assets/screenshots/us01-renoir.png)

Keyword - Sky
![US01 Sky](assets/screenshots/us01-sky.png)

Keyword - Dancer
![US01 Dancer](assets/screenshots/us01-dancer.png)


| **US02** | As a user, I want to view search results displayed as cards containing an image, title, and artist so that I can quickly browse through artworks. |

Mobile Search Results Cards
![US02 Result Cards on Desktop](assets/screenshots/us02-cards-mobile.png)

Desktop Search Result Cards
![US02 Result Cards  on Desktop](assets/screenshots/us02-cards-desktop.png)

| **US03** | As a user, I want to click on an artwork card to view more detailed information in a modal so that I can learn more about the piece. |

Modal on Desktop
![US03 Modal on Desktop](assets/screenshots/us03-modal-desktop.png)

Modal on Mobile
![US03 Modal on Mobile](assets/screenshots/us03-modal-mobile.png)

| **US04** | As a user, I want the website to be fully responsive on mobile, tablet, and desktop devices so that I can comfortably use it on any screen size. |

Mobile view
![US04 Mobile](assets/screenshots/us04-mobile.png)

Tablet View
![US04 Tablet](assets/screenshots/us04-tablet.png)

Desktop view
![US04 Desktop](assets/screenshots/us04-desktop.png)



| **US05** | As a user, I want to view all the artworks I have saved in my personal Art Vault, so that I can easily browse and revisit my favourite pieces. |

Art Vault Mobile
![US05 Mobile](assets/screenshots/us05-mobile.png)

Art Vault Tablet
![US05 Tablet](assets/screenshots/us05-tablet.png)

Art Vault Desktop
![US05 Desktop](assets/screenshots/us05-desktop.png)

| **US06** | As a user, I want to click on the "About" link in the navigation bar to open a modal with information about the Met Art Vault website. |

About Modal Mobile
![US06 Mobile](assets/screenshots/us06-about-mobile.png)

About Modal Tablet
![US06 Tablet](assets/screenshots/us06-about-tablet.png)

About Modal Desktop
![US06 Desktop](assets/screenshots/us06-about-desktop.png)

| **US07** | As a user, I want to save artworks to my personal Art Vault and receive clear visual feedback. |

Save to Art Vault button on Modal
![US07 Save to Art Vault Button on Modal](assets/screenshots/us07-save-artwork-on-modal.png)

Alert to confirm artwork saved to Art Vault
![US07 Alert to confirm artwork Saved](assets/screenshots/us07-alert-save-artwork-confirmed.png)

Saved artwork in Art Vault
![US07 Saved artwork in Art Vault](assets/screenshots/us07-saved-artwork-in-vault.png)


| **US08** | As a user, I want to remove artworks from my Art Vault and receive clear visual feedback. |

Remove artwork button on Modal
![US08 Remove artwork Button on Modal](assets/screenshots/us08-remove-artwork-on-modal.png)

Alert to confirm artwork removed from Art Vault
![US08 Alert to confirm artwork Removed](assets/screenshots/us08-alert-remove-artwork-confirmed.png)

Artwork removed from Art Vault
![US08 Removed artwork from Art Vault](assets/screenshots/us08-removed-artwork-from-vault.png)


| **US09** | As a user, I want the option to switch to dark mode so that I can browse comfortably in low-light environments. |

Light Mode on Mobile - Search
![US09 Mobile Light Mode Search](assets/screenshots/us09-mobile-light-mode-search.png)

Light Mode on Tablet - Search
![US09 Tablet Light Mode Search](assets/screenshots/us09-tablet-light-mode-search.png)

Light Mode on Desktop - Search
![US09 Desktop Light Mode Search](assets/screenshots/us09-desktop-light-mode-search.png)

Dark Mode on Mobile - Search
![US09 Mobile Dark Mode Search](assets/screenshots/us09-mobile-dark-mode-search.png)

Dark Mode on Tablet - Search
![US09 Tablet Dark Mode Search](assets/screenshots/us09-tablet-dark-mode-search.png)

Dark Mode on Desktop - Search
![US09 Desktop Dark Mode Search](assets/screenshots/us09-desktop-dark-mode-search.png)

Light Mode on Mobile - Art Vault
![US09 Mobile Light Mode Search](assets/screenshots/us09-mobile-light-mode-vault.png)

Light Mode on Tablet - Art Vault
![US09 Tablet Light Mode Search](assets/screenshots/us09-tablet-light-mode-vault.png)

Light Mode on Desktop - Art Vault
![US09 Desktop Light Mode Search](assets/screenshots/us09-desktop-light-mode-vault.png)

Dark Mode on Mobile - Art Vault
![US09 Mobile Dark Mode Search](assets/screenshots/us09-mobile-dark-mode-vault.png)

Dark Mode on Tablet - Art Vault
![US09 Tablet Dark Mode Search](assets/screenshots/us09-tablet-dark-mode-vault.png)

Dark Mode on Desktop - Art Vault
![US09 Desktop Dark Mode Search](assets/screenshots/us09-desktop-dark-mode-vault.png)

## Manual Test Cases
| Test ID | User Story | Description                              | Test Steps                                                                 | Expected Result                                                                 | Actual Result | Status | Evidence                     |
|---------|------------|------------------------------------------|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------|---------------|--------|------------------------------|
| TC01    | US01       | Search returns relevant results          | 1. Type "Gauguin" in the search bar<br>2. Submit the search                 | Artworks by Paul Gauguin are displayed as cards                                 | As expected   | Pass   | ![TC01](assets/screenshots/tc01-search-gauguin.png)    |
| TC02    | US01       | Search with no results                   | 1. Type a non-existent term (e.g. "zzzzzzzzz")<br>2. Submit search            | Message "No artworks with images found" is displayed                            | As expected   | Pass   | ![TC02](assets/screenshots/tc02-no-results.png)       |
| TC03    | US01       | Empty search submission                  | 1. Leave search bar empty<br>2. Submit the form                             | Clear message prompts user to enter a search term                               | As expected   | Pass   | ![TC03](assets/screenshots/tc03-empty-search.png)      |
| TC04    | US02       | Search results display as cards          | 1. Perform a search<br>2. Observe the results                               | Each result shows an image, title, and artist                                   | As expected   | Pass   | ![TC04](assets/screenshots/tc04-card-display.png)       |
| TC05    | US03       | Clicking a card opens the modal          | 1. Click on any artwork card                                                | Modal opens showing image + artwork details                                     | As expected   | Pass   | ![TC05](assets/screenshots/tc05-modal-open.png)        |
| TC06    | US03       | Modal displays correct information       | 1. Open a modal<br>2. Check title, artist, date, medium, department        | All information matches the selected artwork                                    | As expected   | Pass   | ![TC06](assets/screenshots/tc06-modal-details.png)     |
| TC07    | US03       | Modal can be closed                      | 1. Open modal<br>2. Click "Close" or press ESC key                          | Modal closes and user returns to main page                                      | As expected   | Pass   | ![TC07](assets/screenshots/tc07-modal-close.png)       |
| TC08    | US03       | Modal image supports fullscreen          | 1. Open modal<br>2. Click on the artwork image                              | Image opens in fullscreen mode                                                  | As expected   | Pass   | ![TC08](assets/screenshots/tc08-fullscreen.png)        |
| TC09    | US07       | Save artwork to Art Vault                | 1. Open modal<br>2. Click "Save to Art Vault" button                        | Button changes to "Remove from Art Vault" + success feedback shown              | As expected   | Pass   | ![TC09a](assets/screenshots/tc09a-save-alert.png) <br> ![TC09a](assets/screenshots/tc09b-button-updated.png)     |
| TC10    | US07       | Prevent duplicate saves                  | 1. Try to save an artwork already in the Vault                              | Button shows "Remove from Art Vault" (no duplicate added)                       | As expected   | Pass   | ![TC10](assets/screenshots/tc10-no-duplicates.png)    |
| TC11    | US08       | Remove artwork from Art Vault            | 1. Go to Art Vault view<br>2. Open saved artwork<br>3. Click "Remove"      | Artwork is removed from the Vault                                               | As expected   | Pass   | ![TC11a](assets/screenshots/tc11a-artwork-to-remove.png) <br> ![TC11b](assets/screenshots/tc11b-remove-alert.png) <br> ![TC11c](assets/screenshots/tc11c-artwork-removed.png)  |
| TC12    | US05       | View saved artworks in Art Vault         | 1. Save 2–3 artworks<br>2. Click "Art Vault" in navbar                      | All saved artworks appear as cards in the Art Vault                             | As expected   | Pass   | ![TC12](assets/screenshots/tc12-view-vault.png)        |
| TC13    | US05       | Empty Art Vault state                    | 1. Remove all saved artworks<br>2. Go to Art Vault view                     | Message "Your Art Vault is empty" is displayed                                  | As expected   | Pass   | ![TC13](assets/screenshots/tc13-empty-vault.png)       |
| TC14    | US09       | Switch to Dark Mode                      | 1. Click "Dark Mode" button                                                 | Website switches to dark theme                                                  | As expected   | Pass   | ![TC14](assets/screenshots/tc14-dark-mode.png)         |
| TC15    | US09       | Switch back to Light Mode                | 1. While in dark mode, click "Light Mode"                                   | Website switches back to light theme                                            | As expected   | Pass   | ![TC15](assets/screenshots/tc15-light-mode.png)        |
| TC16    | US06       | Open About modal                         | 1. Click "About" in the navigation bar                                      | About modal opens with description of the site                                  | As expected   | Pass   | ![TC16](assets/screenshots/tc16-about-modal.png)       |
| TC17    | US04       | Responsive on mobile                     | 1. Resize browser to mobile width (or use dev tools)                        | Layout adjusts properly with no overflow or broken elements                     | As expected   | Pass   | ![TC17](assets/screenshots/tc17-mobile-view.png)       |
| TC18    | US04       | Responsive on tablet                     | 1. Resize browser to tablet width                                           | Layout remains clean and usable                                                 | As expected   | Pass   | ![TC18](assets/screenshots/tc18-tablet-view.png)       |
| TC19    | US01 + US02| Search then open modal                   | 1. Search for an artist<br>2. Click on a result card                        | Modal opens with correct artwork details                                        | As expected   | Pass   | ![TC19a](assets/screenshots/tc19a-search-for-artist.png) <br> ![TC19b](assets/screenshots/tc19b-modal-correct-artwork.png) |
| TC20    | US07 + US08| Save then immediately remove             | 1. Save an artwork<br>2. Immediately remove it from the modal               | Artwork is removed and no longer appears in Art Vault                           | As expected   | Pass   | ![TC20a](assets/screenshots/tc20a-save-artwork.png) <br> ![TC20b](assets/screenshots/tc20b-remove-immediately.png) <br> ![TC20c](assets/screenshots/tc20c-artwork-not-in-vault.png) |

---

## Known Issues

Wave identified empty button on logo/title - currently unable to resolve

### Console Errors

Error received on closing Modals

![Blocked Aria Hidden Error](assets/screenshots/blocked-aria-hidden-error.png)

### Desktop view

Placeholder text is not centralised - currently unable to resolve

![Placeholder text not centralised](assets/screenshots/placeholder-text-not-centralised.png)

### Mobile view

Navbar buttons differ in length on mobile

![Mobile Navbar Button Length](assets/screenshots/mobile-navbar-button-length-differ.png)


## Future Improvements

- Implement Show number of artworks saved
- Implement Department filter
- Bug fixes
