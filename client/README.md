# Task Manager Modal UX Notes

## Modal Architecture

### Recommended Approach
- Use a custom modal component
- Use React Portal (`createPortal`)
- Use custom CSS for styling
- Avoid heavy external modal libraries


# Recommended Component Structure

```txt
Dashboard
 ├── TaskColumn
 ├── TaskCard
 ├── AddTaskButton
 ├── Modal
      └── AddTaskForm