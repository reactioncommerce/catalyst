### Overview

Buttons are used to enable a user to take an action. Buttons should clearly and simply communicate the action that will happen when they are pressed.

### Usage

There are four types of buttons you can choose from, and which one you choose should be based on which type of action it causes.

1. **Solid button**: The solid button is used for a primary action in a modal, card, large view and generally throughout.
1. **Outline button**: The outline button is used for a secondary or dismissive action. The outline button should be paired with the solid button in cases such as dismissing a modal or canceling an action.
1. **Danger button**: The danger button is used for a destructive action that is difficult to recover from such as deleting information. The danger button should be used at the point that the destructive action actually takes place. For example, you can have a delete button as a secondary action on a page and in this case you would use a an outline button, the outline button would then trigger a modal confirmation, which is where you would use the danger button.
1. **Important button**: The important button is used when there needs to be particular importance put on an action or in a view where there are multiple actions and more emphasis needs to be drawn to specific or most common action in a view.

```jsx noeditor
<div style={{ display: "flex" }}>
  <div style={{ marginRight: "1rem" }}>
    <Button title="Default" className="myBtn">Default</Button>
  </div>
</div>
```

