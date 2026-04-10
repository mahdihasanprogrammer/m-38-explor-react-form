/**
 * how to get form data
 * 
 * 1. e.target.name of input field.value;
 * 2. use form action and set a function in action attribute, and set a parameter in function; for example: formData.get('name of input field')
 * 
 * 3. controlled component :one per each field, use state onchange of the field, useful to dynamically handle error;
 * 
 * 4. unControlled using useRef();
 */