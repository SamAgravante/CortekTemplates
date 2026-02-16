# QA Checklist (Pre-Production) — One-Pager Sites (Blazor WASM + Azure SWA)

**Purpose:** Catch issues before merging to `main` / pushing to production.  
**When used:** After client approves **staging**, before creating the PR to `main`.  
**Owner:** QA (primary) + Lead (final spot-check).  
**Target time:** 20–30 minutes per site.

---

## 1) Build & Deploy Status (must pass)

- [ ] Azure DevOps pipeline **succeeded** on `develop` (staging)
- [ ] Staging URL loads (no blank screen)
- [ ] Browser console has **no red errors**
- [ ] Hard refresh test: `Ctrl+F5` (cache bust) still works

**Notes / Evidence**
- Staging URL:
- Pipeline run link:
- Screenshot of page top + footer:

---

## 2) Core Content & Branding (trust + polish)

### Brand Identity
- [ ] Correct business name shown (header + footer)
- [ ] Correct tagline/description
- [ ] Logo renders (light/dark if applicable)
- [ ] Favicon displays (browser tab)

### Copy & Details
- [ ] Spelling/grammar pass (scan every section)
- [ ] Contact details are correct:
  - [] Phone number
  - [] Email
  - [] Address
- [ ] Pricing (if shown) is correct and consistent (“starts at…” ok)

### Assets
- [ ] Hero image is high quality (not pixelated)
- [ ] Gallery images load and match captions
- [ ] No broken images (check DevTools → Network for 404s)

---

## 3) Navigation & User Flow (conversion-critical)

- [🗸] Navbar links scroll to correct section anchors
- [ ] Primary CTA works (scrolls to contact / opens messenger link)
- [ ] Secondary CTA works (services / portfolio / menu)
- [ ] Deep link test:
  - [ ] Refresh while on a section anchor `/#services` doesn’t break (SPA fallback)

**Record broken anchors (if any):**
- 

---

## 4) Mobile Responsiveness (PH-first behavior)

Test on Chrome DevTools:
- [ ] iPhone 12/13 size
- [ ] 360×800 Android size

Checks:
- [🗸] No horizontal scrolling
- [] Text is readable (no tiny font)
- [] Buttons are tappable (no overlapping)
- [] Hero content doesn’t overflow
- [ ] Gallery tiles stack correctly
- [ ] Contact block remains usable

---

## 5) Performance & Loading (speed matters)

- [] First load feels acceptable on mobile (target: “fast enough”)
- [ ] Images not excessively heavy (avoid multi-MB each)
- [ ] Lighthouse quick check (optional but recommended):
  - [ ] Performance: ____ / 100
  - [ ] Accessibility: ____ / 100
  - [ ] Best Practices: ____ / 100
  - [ ] SEO: ____ / 100

**Notes:** If performance is poor, check image sizes first.

---

## 6) Forms & Lead Capture (no dead-end)

Pick what applies:

### If using click-to-call / email / social links
- [] `tel:` link opens dialer
- [ ] `mailto:` link opens email app
- [ ] Facebook link opens correct page
- [ ] Instagram link opens correct profile

### If using map embed
- [] Map loads without errors
- [] Pin/location matches address

### If using any form submission flow
- [ ] Submission path is confirmed (where do leads go?)
- [ ] Test submission completed successfully
- [ ] Thank-you state / confirmation is clear

---

## 7) Static Web Apps / Hosting Correctness

- [ ] No missing framework assets:
  - [ ] `/_framework/*` requests succeed (no 404)
- [ ] No MIME type errors for scripts (no HTML returned for JS)
- [ ] `staticwebapp.config.json` exists in deployed root (or correct location)
- [ ] Refresh does not produce 404 on routes

---

## 8) SEO & Sharing Basics (simple but important)

- [] Page title is correct (browser tab)
- [ ] Meta description exists (if you set one)
- [ ] OG preview acceptable (optional):
  - [ ] If shared in Messenger/FB, preview image/title are acceptable (if configured)

---

## 9) Client Approval Confirmation

- [ ] Client approved staging (screenshot/email/DM proof)
- [ ] Client-approved items implemented:
  - [ ] Copy changes
  - [ ] Photos updated
  - [ ] Pricing corrected
  - [ ] Links updated
- [ ] No pending requested changes

**Approval proof:** (link / screenshot / date)

---

## 10) Production Readiness Gate (final)

- [ ] Staging passed QA with zero P0 issues
- [ ] PR created from `develop` → `main`
- [ ] PR includes only client-specific changes (no template drift)
- [ ] Lead/owner reviewed PR (spot-check)

**Release notes (1–3 lines):**
- 

---

# P0 / P1 Issue Definitions (so interns know when to stop)

## P0 (Block production)
- 
- 
- 
- 
- 
- 
- 

## P1 (Fix before production if quick)
- In Join Our Team section, arrange everything.
- On mobile and iPad devices, the navigation menu is not visible.
- In hero section, it would be better if you add image.
- Improve the footer, remove the unnecessary and make it not too busy.

# Sign-off

**Intern:** __________________  Date: __________  
**Lead Reviewer:** __________________  Date: __________

