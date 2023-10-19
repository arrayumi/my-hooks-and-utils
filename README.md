# my-hooks-and-utils
Library of useful hooks and utils that I wrote by myself for different projects

`JavaScript` + `React`

### hooks

`useFormValidation`

* Creates state for every form input and form itself, making it controlled.
* Allows to validate inputs value every time it changes.
* Can be scaled up and customized for unlimited number of inputs

`useModal`

* takes a *state with boolean value* and *setState* as parameters
* adds event Listeners by *true* and removes it by *false* or unmounting of modal

### utils

`getChangedData`

* function for PATCH method of the REST API
* compares current data and data to send (e.g for editing userProfile) and returns object with keys only with changed values
