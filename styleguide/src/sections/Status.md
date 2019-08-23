### Components

Tracking the design, development and usage of new Catalyst components in Reaction Admin:

#### Catalyst

##### Catalyst-approved components

Catalyst components that are design approved and in the process of being integrated and used in Reaction Admin.

Components ready and used:

- **ActionMenu**: Design approved. Introduced in 1.8.
- **Button**: Design approved. Deployed in Reaction Admin. Introduced in 1.2.
- **Chip**: Deletable Chip - Design approved. Ready to be Deployed in Reaction Admin. Introduced in 1.3.
- **Chip**: Status Chip - Design approved. Not yet in Reaction Admin.
- **ConfirmDialog**: Design approved. Deployed in Reaction Admin. Introduced in 1.1.
- **Select**: Design approved. Not yet in Reaction Admin. Introduced in 1.5.
- **SplitButton**: Design approved. Not yet in Reaction Admin. Introduced in 1.6.

Catalyst-approved themes and variables:

- **Colors**
- **Typography**
- **Grid & Spacing**

##### Components that are designed and ready to be developed:
- **Table**: Design ready. Need more development specs.

##### Components that are in design stage:
- **Form Inputs**: Need more design & development specs.

#### Storefront Component Library

Catalyst components that are used in Reaction Admin: 

- **InlineAlert**: No design changes necessary. Needs to be converted to React Hooks, JSS and migrated to Reaction.
- **Select**: Dropdowns used in Settings, like Taxes, Site Map and more.
- **Forms**: Currently in design.
- **styled-components**, **styled-components-mui**: Dependency that can be removed from Reaction Admin once all XSF Component Library components are out of Reaction Admin.

#### Material UI

Components used in Reaction Admin that are not yet in Catalyst - a combination of components from Material-UI.

- **Card**: Used in Product, Tags, Orders
- **Tabs**: Used in Tags, Orders

#### Other libraries used in Reaction Admin:

- **Bootstrap**
- **Meteor Blaze templates**
- **Font Awesome**: Font Awesome, React-FontAwesome, FortAwesome, FortAwesome/FontAwesome
- **React S-Alert**
- **React Table**
- **sweetalert2**

<hr>

### Admin migration

Tracking the migration of Meteor, Blaze, Bootstrap (LESS) front-ends to Catalyst (React, Material-UI) and GraphQL.

#### Core:

- **Orders / Listing**: Some Bootstrap.
- **Orders / Create**: No Bootstrap.
- **Products / Listing**: No Bootstrap. Some Meteor.
- **Products / Create**: Some Bootstrap. Some Meteor.
- **Tags / Listing**: Some Bootstrap.
- **Tags / Create**: No Bootstrap. Mostly MUI/XSF/Catalyst.
- **Accounts**: All Bootstrap, Meteor.
- **Navigation**: No Bootstrap. Meteor (?)
- **Settings / Shop**: All Bootstrap, Meteor.
- **Settings / Payment**: All Bootstrap, Meteor.
- **Settings / Taxes**: All Bootstrap, Meteor.
- **Settings / Shipping**: All Bootstrap, Meteor.
- **Settings / Login services**: All Bootstrap, Meteor.
- **Settings / Email**: All Bootstrap, Meteor.
- **Settings / Shop localization**: All Bootstrap, Meteor.
- **Settings / Template**: All Bootstrap, Meteor.

#### Other:

- **Toasts**
- **Dialogs**
- **Icons**
