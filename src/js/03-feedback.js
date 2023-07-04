import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector(".feedback-form")
}
const STORAGE_KEY = "feedback-form-state";
let formState = {};
refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));

window.addEventListener("load", onLoad);
const onLoad = () => {
    try {
        const data = localStorage.getItem(LOCALSTORAGE_KEY);
        if (!data) {
            return
        }
        formState = JSON.parse(data);
        Object.entries(formState).forEach(([key, val]) => {
            refs.form.elements[key].value = val;
        });
    } catch (error) {
        console.log(error.message);
    }
    function onFormSubmit(e) {
        e.preventDefault();
        e.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        console.log(formState);
        formState = {};
    }
    function onFormInput(e) {
        try {
       
            formState[evt.target.name] = evt.target.value.trim();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(formState))
        
        } catch (error) {
            console.log(error.message);
        }
    
    }
}
