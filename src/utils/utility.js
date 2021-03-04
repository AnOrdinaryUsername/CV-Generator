// object => object literal
// prop => string (the property inside the object literal)
// return => boolean
const objectHasProperty = (object, prop) => ({}.propertyIsEnumerable.call(object, prop));

// Just to assign multiple variables a single value easily.
function* repeat(value) {
    while (true) {
        yield value;
    }
}

export { objectHasProperty, repeat };
