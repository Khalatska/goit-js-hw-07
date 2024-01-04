const itemsCategory = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsCategory.length}`);

 
 
itemsCategory.forEach(itemCategory => {
    const headerCategory = itemCategory.querySelector('h2').textContent;
    const elementCategory = itemCategory.querySelectorAll('ul li').length;
    console.log(`Category: ${headerCategory}`);
    console.log(`Elements: ${elementCategory}`);
});
 
