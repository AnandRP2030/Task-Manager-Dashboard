# Task Manager Modal UX Notes

## Modal UX Goals

The modal should feel:
- fast
- lightweight
- keyboard friendly
- clean
- distraction free

---

# Steps UX

## Recommended Approach

Use dynamic step inputs instead of a textarea.

Example:

```txt
[ Step Input ]
+ Add Step
```

## Benefits

- cleaner UX
- easier validation
- future step completion support
- easier reordering later
- better mobile usability

---

Pressing ctrl + N should open the modal and default focus should be title.

# Estimate Field UX

## Recommended Approach

Use a single text field.

Accepted formats:

```txt
45m
1h
1h 30m
2h
```

---

# UX Improvements

## 1. Autofocus Title Field

When modal opens:

```js
titleInputRef.current.focus();
```


# 2. Enter Key Adds New Step

Inside step input:

```txt
Press Enter → create next step input
```

# 3. ESC Key Closes Modal

Pressing ESC should close modal.

Example:

```js
useEffect(() => {
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
        window.removeEventListener('keydown', handleEsc);
    };
}, []);
```

# 4. Click Outside To Close

Clicking backdrop closes modal.

Example:

```txt
[ Backdrop ]
    [ Modal ]
```


# 5. Prevent Accidental Close (Future Feature)

If user entered data:
- show confirmation before closing

Example:

```txt
You have unsaved changes.
Close anyway?
```

Useful when tasks become larger.

---

# 6. Scrollable Modal Content

If content becomes large:
- modal body should scroll
- backdrop should stay fixed

Recommended:

```css
max-height: 85vh;
overflow-y: auto;
```

---

# 7. Minimal Validation

Only validate:
- title required

Example:

```txt
Task title is required
```

Avoid:
- alert popups
- aggressive validation

---

# 8. Smooth Open/Close Animation

Recommended:
- fade backdrop
- slight scale animation

Suggested effect:
- opacity transition
- transform scale(0.95 → 1)

Reason:
- feels modern
- improves perceived quality

---

# 9. Mobile Friendly Modal

Recommended width:

```css
width: min(650px, 92vw);
```

Reason:
- works on desktop
- works on tablets
- works on mobile

---

# 10. Keep Form Simple

Current fields:

- Title (required)
- Description
- Steps
- Estimate
- Task Link

Avoid overengineering early.

Do not add yet:
- tags
- priorities
- due dates
- attachments

Build core UX first.