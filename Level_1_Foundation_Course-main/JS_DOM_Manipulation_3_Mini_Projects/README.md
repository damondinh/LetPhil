# DOM Manipulation — 3 Mini Projects (Beginner)

This folder contains **3 different mini projects** to practice core DOM skills.

## What you will practice (matches the lesson list)

### 1 Understanding the DOM

- The DOM is a live “tree” version of your HTML that JavaScript can read and change.

### 2 Selecting elements in the DOM

You will practice:

- `document.getElementById("id")`
- `document.querySelector("cssSelector")`
- `document.querySelectorAll("cssSelector")`

(And you’ll see _why_ `querySelectorAll` is useful when there are many elements.)

### 3 Modifying elements with JavaScript

You will practice:

- `textContent` (safe text updates)
- `style` (quick visual changes)

### 4 Creating / adding / removing elements

You will practice:

- `document.createElement()`
- `appendChild()` / `prepend()`
- `element.remove()`
- “event delegation” so new items you create still work

### 5 Adding and removing classes

You will practice:

- `classList.add()`
- `classList.remove()`
- `classList.toggle()`
- `classList.contains()`

### 6 Modifying attributes

You will practice:

- `setAttribute()`
- `getAttribute()`
- `removeAttribute()`
- common attributes like `src`, `alt`, and `data-*`

---

## How to run any project

1. Open a project folder
2. Open `index.html` in your browser
3. Open DevTools → Console (you’ll be told when to use it)

---

## Mini Projects

### Project 01 — Glow Notes

Build a tiny notes list where you can add notes and remove them.
Focus: selecting, creating elements, appending, removing, event delegation.

### Project 02 — Class Switchboard

Buttons that toggle classes on one box (highlight, shake, reset).
Focus: classList + updating textContent + temporary class with setTimeout.

### Project 03 — Attribute Gallery

Add image cards by URL. Update `alt` attributes. Remove cards. Clear all.
Focus: attributes, querySelectorAll practice, create/remove elements, event delegation.
